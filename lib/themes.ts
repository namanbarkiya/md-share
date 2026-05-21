export type PostTheme = "paper" | "ink" | "console";

export const POST_THEMES: ReadonlyArray<{
  id: PostTheme;
  label: string;
  hint: string;
  swatch: string;
}> = [
  { id: "paper", label: "Paper", hint: "Cream · serif · editorial", swatch: "#faf7f2" },
  { id: "ink", label: "Ink", hint: "Dark · serif · late-night", swatch: "#0e0c0a" },
  { id: "console", label: "Console", hint: "Mono · technical · lime", swatch: "#ffffff" },
];

export const DEFAULT_THEME: PostTheme = "paper";

export function isPostTheme(value: unknown): value is PostTheme {
  return value === "paper" || value === "ink" || value === "console";
}
