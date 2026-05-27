'use client';

import { useTranslations } from 'next-intl';
import { stats } from '@/src/data/content';
import Reveal from './Reveal';

export default function Stats() {
  const t = useTranslations('stats');

  const items = [
    { value: String(stats.years), label: t('years'), accent: false },
    { value: String(stats.cafes), label: t('cafes'), accent: false },
    { value: String(stats.institutions), label: t('institutions'), accent: false },
    { value: '#1', label: t('rank'), accent: true },
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
              className={`font-serif text-5xl font-light md:text-6xl ${
                item.accent ? 'text-sage italic' : 'text-charcoal'
              }`}
            >
              {item.value}
            </div>
            <div className="mt-3 font-sans text-xs leading-snug text-charcoal/60">
              {item.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
