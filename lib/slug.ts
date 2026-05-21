import { customAlphabet } from "nanoid";

const nano = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 5);

export function baseSlug(title: string): string {
  const src = (title || "").toLowerCase().trim().slice(0, 60);
  const cleaned = src
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return cleaned || nano();
}

export function suffixedSlug(base: string): string {
  return `${base}-${nano()}`;
}
