'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import { houseRecipe } from '@/src/data/content';

export default function RecipeStrip() {
  const t = useTranslations('recipe');

  const items = [
    { value: houseRecipe.dose, label: t('dose') },
    { value: houseRecipe.yield, label: t('yield') },
    { value: houseRecipe.time, label: t('time') },
    { value: houseRecipe.temp, label: t('temp') },
  ];

  return (
    <section aria-label={t('eyebrow')} className="border-y border-charcoal/10 bg-bone">
      <div className="container-x py-12 md:py-16">
        <Reveal>
          <p className="eyebrow text-center">{t('eyebrow')}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.07} className="text-center">
              <p
                dir="ltr"
                className="font-serif text-5xl font-light tabular-nums text-charcoal md:text-6xl"
              >
                {item.value}
              </p>
              <p className="mt-3 font-sans text-[11px] uppercase tracking-eyebrow text-charcoal/50">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
