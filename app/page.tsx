import Link from "next/link";
import { Brand } from "@/components/brand";
import { Hairline } from "@/components/hairline";
import { ArrowRight } from "@/components/arrow";

export default function Home() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen flex flex-col px-8 sm:px-14 lg:px-20 pt-8 pb-10">
      {/* Masthead */}
      <header className="flex items-center justify-between">
        <Brand size={18} />
        <nav className="flex items-center gap-7 text-[13px] text-ink-muted font-sans">
          <Link
            href="/create"
            className="hover:text-ink transition-colors duration-300"
          >
            Write
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-ink transition-colors duration-300"
          >
            Dashboard
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="stage flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full pt-16 sm:pt-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mb-10 sm:mb-14">
          <span className="text-vermillion">●</span> No 001 &nbsp;·&nbsp; A
          modern markdown press
        </p>

        <h1
          className="font-display text-ink"
          style={{
            fontSize: "clamp(52px, 10vw, 132px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          Markdown,
          <br />
          <span
            style={{ fontStyle: "italic", fontWeight: 300 }}
            className="text-vermillion"
          >
            beautifully
          </span>{" "}
          published.
        </h1>

        <p className="mt-10 max-w-xl font-sans text-[18px] sm:text-[19px] leading-[1.55] text-ink-muted">
          Paste a markdown file. See it rendered like a real publication. Share
          one link. That is the entire app.
        </p>

        <div className="mt-12 flex items-center gap-10">
          <Link href="/create" className="editorial-link text-[16px]">
            Start writing
            <ArrowRight size={14} />
          </Link>
          <span className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.16em]">
            no signup until you publish
          </span>
        </div>
      </section>

      {/* Colophon footer */}
      <footer className="stage pt-10 mt-20">
        <Hairline />
        <div className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-faint">
          <span>
            Vol. mdshare &nbsp;·&nbsp; Published with care &nbsp;·&nbsp;{" "}
            {today}
          </span>
          <span>
            Paste &nbsp;·&nbsp; Preview &nbsp;·&nbsp; Publish &nbsp;·&nbsp;
            Share
          </span>
        </div>
      </footer>
    </main>
  );
}
