export default function SectionTag({
  index,
  label,
  tone = 'light',
}: {
  index: number;
  label: string;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';
  return (
    <div className="flex items-baseline gap-4 md:gap-6">
      <span
        className={`font-serif font-light leading-none tabular-nums ${
          isDark ? 'text-sand/30' : 'text-charcoal/20'
        }`}
        style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
      >
        {String(index).padStart(2, '0')}
      </span>
      <span
        className={`block h-px w-12 md:w-20 ${
          isDark ? 'bg-sand/20' : 'bg-charcoal/15'
        }`}
      />
      <span className="font-sans text-[11px] uppercase tracking-eyebrow text-sage">
        {label}
      </span>
    </div>
  );
}
