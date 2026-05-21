"use client";

import { POST_THEMES, type PostTheme } from "@/lib/themes";

export function ThemePicker({
  value,
  onChange,
  compact = false,
}: {
  value: PostTheme;
  onChange: (t: PostTheme) => void;
  compact?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {!compact && (
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint mr-1">
          Theme
        </span>
      )}
      {POST_THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          data-active={value === t.id}
          className="theme-chip"
          title={t.hint}
        >
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{
              background: t.swatch,
              boxShadow: "inset 0 0 0 1px rgba(24,22,19,0.18)",
            }}
            aria-hidden
          />
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}
