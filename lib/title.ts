export function extractTitle(md: string): string {
  if (!md) return "Untitled";
  const h1 = md.match(/^\s*#\s+(.+?)\s*$/m);
  if (h1) return h1[1].slice(0, 80);
  const firstLine = md.split("\n").find((l) => l.trim().length > 0) || "";
  return firstLine.replace(/^[>#*\-_\s]+/, "").slice(0, 80) || "Untitled";
}
