'use client';

import { useTranslations } from 'next-intl';
import { stats } from '@/src/data/content';
import Reveal from './Reveal';
import Counter from './Counter';

export default function Stats() {
  const t = useTranslations('stats');

  return (
    <section className="border-y border-charcoal/10 bg-bone py-20 md:py-28">
      <div className="container-x grid grid-cols-12 items-center gap-y-10 md:gap-8">
        {/* Left meta */}
        <div className="col-span-12 space-y-8 md:col-span-3 md:space-y-10">
          <Reveal>
            <div>
              <p className="font-serif text-4xl font-light text-charcoal md:text-5xl">
                <Counter to={stats.years} />
              </p>
              <p className="mt-2 font-sans text-[11px] uppercase tracking-eyebrow text-charcoal/50">
                {t('years')}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="font-serif text-4xl font-light text-charcoal md:text-5xl">
                <Counter to={stats.institutions} />
              </p>
              <p className="mt-2 font-sans text-[11px] uppercase tracking-eyebrow text-charcoal/50">
                {t('institutions')}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Monumental center number */}
        <Reveal delay={0.15} className="col-span-12 text-center md:col-span-6">
          <p
            className="font-serif font-light leading-[0.82] text-charcoal"
            style={{
              fontSize: 'clamp(9rem, 22vw, 22rem)',
              letterSpacing: '-0.05em',
            }}
          >
            <Counter to={stats.cafes} />
          </p>
          <p className="mt-4 font-sans text-xs uppercase tracking-eyebrow text-sage">
            {t('cafes')}
          </p>
        </Reveal>

        {/* Right meta */}
        <Reveal delay={0.2} className="col-span-12 md:col-span-3 md:text-right">
          <p className="font-serif text-4xl font-light italic text-sage md:text-5xl">
            #1
          </p>
          <p className="mt-2 font-sans text-[11px] uppercase tracking-eyebrow text-charcoal/50">
            {t('rank')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
