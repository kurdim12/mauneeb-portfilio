'use client';

import { useLocale, useTranslations } from 'next-intl';
import { projects } from '@/src/data/content';
import type { Locale } from '@/src/i18n';

export default function Marquee() {
  const locale = useLocale() as Locale;
  const t = useTranslations('marquee');
  const isRtl = locale === 'ar';

  const names = projects.map((p) => p.name[locale]);
  const nameSeq = [...names, ...names];

  const craft = t('craft')
    .split('·')
    .map((w) => w.trim())
    .filter(Boolean);
  // Repeat the short word list so each half of the loop is wider than
  // any viewport, then duplicate for the seamless -50% translate.
  const craftBase = [...craft, ...craft, ...craft];
  const craftSeq = [...craftBase, ...craftBase];

  return (
    <div className="overflow-hidden border-y border-charcoal/10 bg-bone py-7">
      {/* Row 1 — café names, solid serif */}
      <div className="marquee-mask">
        <div
          className={`flex w-max ${isRtl ? 'animate-marquee-rtl' : 'animate-marquee'}`}
        >
          {nameSeq.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center font-serif text-2xl font-light text-charcoal/70 md:text-3xl"
            >
              {name}
              <span className="mx-8 text-sage/70 md:mx-12" aria-hidden>
                &mdash;
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — craft words, counter-direction, outlined */}
      <div className="marquee-mask mt-3">
        <div
          className={`flex w-max ${isRtl ? 'animate-marquee' : 'animate-marquee-rtl'}`}
        >
          {craftSeq.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex shrink-0 items-center font-serif text-3xl font-light uppercase md:text-4xl"
              style={{
                WebkitTextStroke: '1px #6B7B47',
                color: 'transparent',
                letterSpacing: '0.02em',
              }}
            >
              {word}
              <span
                className="mx-7 md:mx-10"
                style={{ WebkitTextStroke: '0px', color: '#6B7B47', opacity: 0.5 }}
                aria-hidden
              >
                &middot;
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
