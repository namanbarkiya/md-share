import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { MarkdownPublished } from "@/components/markdown-published";
import { JustPublished } from "@/components/just-published";
import { isPostTheme, type PostTheme } from "@/lib/themes";

type Params = { slug: string };
type Search = { just?: string };

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from("posts")
    .select("title")
    .eq("slug", slug)
    .maybeSingle();
  return {
    title: data?.title ? `${data.title} — mdshare` : "mdshare",
  };
}

export default async function PostPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("posts")
    .select("slug, title, content, theme, view_count, created_at")
    .eq("slug", slug)
    .maybeSingle();
  if (!post) notFound();

  // Fire-and-forget view increment
  supabase.rpc("increment_view", { p_slug: slug }).then(() => undefined);

  const theme: PostTheme = isPostTheme(post.theme) ? post.theme : "paper";
  const bg = themeBg(theme);
  const justPublished = sp?.just === "1";

  return (
    <div style={{ background: bg, minHeight: "100vh" }}>
      {justPublished && <JustPublished slug={post.slug} />}
      <MarkdownPublished content={post.content} theme={theme} />
      <PostColophon
        theme={theme}
        createdAt={post.created_at}
        views={post.view_count}
      />
    </div>
  );
}

function themeBg(t: PostTheme) {
  if (t === "ink") return "#0e0c0a";
  if (t === "console") return "#ffffff";
  return "#faf7f2";
}

function PostColophon({
  theme,
  createdAt,
  views,
}: {
  theme: PostTheme;
  createdAt: string;
  views: number;
}) {
  const color =
    theme === "ink"
      ? "#6b6256"
      : theme === "console"
      ? "#9a9588"
      : "#b4ada0";
  const max = theme === "console" ? 880 : 760;
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <footer
      style={{
        maxWidth: max,
        margin: "0 auto",
        padding: "0 clamp(20px, 5vw, 44px) 80px",
      }}
    >
      <hr
        style={{
          border: 0,
          borderTop: `1px solid ${color}`,
          opacity: 0.4,
          marginBottom: "1.5rem",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "10.5px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color,
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <span>
          Published {date} &nbsp;·&nbsp; {views}{" "}
          {views === 1 ? "view" : "views"}
        </span>
        <Link
          href="/"
          style={{ color, textDecoration: "none" }}
        >
          Made with mdshare ↗
        </Link>
      </p>
    </footer>
  );
}
