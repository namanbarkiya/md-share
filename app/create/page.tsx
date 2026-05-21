import { Editor } from "@/components/editor";

export const metadata = {
  title: "Write — mdshare",
  description: "Paste markdown. Preview. Publish.",
};

export default async function CreatePage({
  searchParams,
}: {
  searchParams: Promise<{ resume?: string }>;
}) {
  const sp = await searchParams;
  return <Editor resumeMode={sp?.resume === "1"} />;
}
