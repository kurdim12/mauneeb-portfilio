'use client';

import { useLocale } from 'next-intl';
import { projects } from '@/src/data/content';
import type { Locale } from '@/src/i18n';

export default function Marquee() {
  const locale = useLocale() as Locale;
  const isRtl = locale === 'ar';
  const names = projects.map((p) => p.name[locale]);
  const sequence = [...names, ...names];

  return (
    <div className="marquee-mask overflow-hidden border-y border-charcoal/10 bg-bone py-6">
      <div
        className={`flex w-max ${isRtl ? 'animate-marquee-rtl' : 'animate-marquee'}`}
      >
        {sequence.map((name, i) => (
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
  );
}
