export function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      className="arrow"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      aria-hidden
    >
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}
