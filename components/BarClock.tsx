'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import Pattern from './Pattern';

const SEGMENTS = [
  { key: 'dialin', range: '06:30–09:00', start: 6.5, end: 9 },
  { key: 'bar', range: '09:00–14:00', start: 9, end: 14 },
  { key: 'visits', range: '14:00–18:00', start: 14, end: 18 },
  { key: 'training', range: '18:00–21:00', start: 18, end: 21 },
  // Wraps past midnight to 06:30; stored as 21 → 30.5 on a shifted axis.
  { key: 'quiet', range: '21:00–06:30', start: 21, end: 30.5 },
] as const;

export default function BarClock() {
  const t = useTranslations('barclock');
  const [now, setNow] = useState<{ label: string; h: number } | null>(null);

  useEffect(() => {
    const tick = () => {
      // Amman is UTC+3 year-round (no DST since 2022)
      const d = new Date();
      const h = (d.getUTCHours() + 3) % 24;
      const m = d.getUTCMinutes();
      setNow({
        label: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
        h: h + m / 60,
      });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const hAdj = now === null ? null : now.h < 6.5 ? now.h + 24 : now.h;
  const activeKey =
    hAdj === null
      ? null
      : SEGMENTS.find((s) => hAdj >= s.start && hAdj < s.end)?.key ?? null;

  return (
    <section className="relative overflow-hidden bg-deep-olive py-24 text-sand md:py-32">
      <div className="text-sand">
        <Pattern variant="lines" opacity={0.04} />
      </div>

      <div className="container-x relative grid items-start gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-8 font-serif text-h2 font-light text-sand">
            {t('title')}
          </h2>
          <p
            className="mt-10 font-serif font-light leading-none text-sand"
            style={{ fontSize: 'clamp(4.5rem, 10vw, 8rem)' }}
          >
            <span dir="ltr" className="tabular-nums">
              {now?.label ?? '··:··'}
            </span>
          </p>
          <p className="eyebrow mt-4 text-sage">{t('tz')}</p>
        </Reveal>

        <div className="md:col-span-7">
          <ul className="border-t border-sand/15">
            {SEGMENTS.map((seg, i) => {
              const active = activeKey === seg.key;
              return (
                <Reveal key={seg.key} delay={i * 0.06} as="li">
                  <div
                    className={`flex items-baseline justify-between gap-6 border-b border-sand/15 py-5 transition-opacity duration-500 md:py-6 ${
                      active ? '' : 'opacity-55'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      {active && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inset-0 rounded-full bg-sage/70 motion-safe:animate-ping" />
                          <span className="relative h-2 w-2 rounded-full bg-sage" />
                        </span>
                      )}
                      <span
                        className={`font-serif text-xl md:text-2xl ${
                          active ? 'text-sage' : 'text-sand'
                        }`}
                      >
                        {t(seg.key)}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-4">
                      {active && (
                        <span className="eyebrow text-sage">{t('now')}</span>
                      )}
                      <span
                        dir="ltr"
                        className="font-sans text-xs tabular-nums tracking-eyebrow text-sand/50"
                      >
                        {seg.range}
                      </span>
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
