export function Monogram({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="4" fill="#1F2419" />
      {/* M strokes — geometric serif silhouette */}
      <path
        d="M 7 24 L 7 8 L 16 18 L 25 8 L 25 24"
        stroke="#E8E4D8"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sage signature accent */}
      <circle cx="25.5" cy="6.5" r="1.5" fill="#6B7B47" />
    </svg>
  );
}

export default function Wordmark({
  className,
}: {
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 leading-none ${className ?? ''}`}>
      <Monogram className="h-7 w-7" />
      <span className="font-serif text-xl font-normal tracking-[-0.01em] text-charcoal">
        Munee
        <span className="font-light italic text-sage">b</span>
      </span>
    </span>
  );
}
