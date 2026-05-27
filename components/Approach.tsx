'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';

const steps = ['concept', 'equipment', 'menu', 'training', 'launch'] as const;

export default function Approach() {
  const t = useTranslations('approach');

  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">{t('eyebrow')}</p>
          <h2 className="max-w-3xl font-serif text-h2 font-light text-charcoal">
            {t('title')}{' '}
            <span className="italic text-sage">{t('title_accent')}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70">
            {t('intro')}
          </p>
        </Reveal>

        <div className="mt-16 border-t border-charcoal/10">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i * 0.06}>
              <div className="group grid grid-cols-1 items-baseline gap-4 border-b border-charcoal/10 py-8 transition-colors duration-300 hover:bg-charcoal/[0.02] md:grid-cols-12 md:gap-8 md:py-10">
                <span className="font-serif text-3xl font-light text-sage md:col-span-1 md:text-4xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl font-normal text-charcoal md:col-span-3 md:text-3xl">
                  {t(`${step}_title`)}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-charcoal/70 md:col-span-8">
                  {t(`${step}_desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
