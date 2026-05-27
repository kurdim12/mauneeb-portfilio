'use client';

import { useTranslations } from 'next-intl';
import { stats } from '@/src/data/content';
import Reveal from './Reveal';
import Counter from './Counter';

export default function Stats() {
  const t = useTranslations('stats');

  const items = [
    { value: stats.years, label: t('years'), accent: false },
    { value: stats.cafes, label: t('cafes'), accent: false },
    { value: stats.institutions, label: t('institutions'), accent: false },
    { value: null, label: t('rank'), accent: true },
  ];

  return (
    <section className="border-y border-charcoal/10 bg-bone">
      <div className="container-x grid grid-cols-2 divide-x divide-charcoal/10 md:grid-cols-4 rtl:divide-x-reverse">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.08}
            className="px-4 py-12 text-center md:py-16"
          >
            <div
              className={`font-serif text-stat font-light ${
                item.accent ? 'italic text-sage' : 'text-charcoal'
              }`}
            >
              {item.accent ? '#1' : <Counter to={item.value as number} />}
            </div>
            <div className="mx-auto mt-4 max-w-[10rem] font-sans text-xs leading-snug text-charcoal/55">
              {item.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
