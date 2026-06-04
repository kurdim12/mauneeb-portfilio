'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';

const KEYS = ['sca', 'trained', 'award'] as const;

export default function TrustStrip() {
  const t = useTranslations('trust');

  return (
    <section
      aria-label="Credentials"
      className="border-b border-charcoal/10 bg-bone"
    >
      <div className="container-x grid grid-cols-1 divide-y divide-charcoal/10 md:grid-cols-3 md:divide-x md:divide-y-0 rtl:md:divide-x-reverse">
        {KEYS.map((k, i) => (
          <Reveal
            key={k}
            delay={i * 0.06}
            className="px-4 py-6 text-center md:py-7"
          >
            <p className="eyebrow text-charcoal/55">{t(k)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
