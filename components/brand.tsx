import Link from "next/link";

export function Brand({ size = 18 }: { size?: number }) {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline font-display lowercase tracking-tight text-ink hover:text-vermillion transition-colors duration-300"
      style={{
        fontSize: size,
        fontFeatureSettings: '"ss01"',
        fontStyle: "italic",
      }}
    >
      mdshare
    </Link>
  );
}
