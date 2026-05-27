'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';

export default function Teaching() {
  const t = useTranslations('teaching');

  const courses = ['bau', 'jrf', 'jaa'] as const;

  return (
    <section
      id="teaching"
      className="bg-deep-olive py-24 text-sand md:py-32"
    >
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">{t('eyebrow')}</p>
          <h2 className="max-w-2xl font-serif text-h2 font-light text-sand">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/70">
            {t('intro')}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 divide-y divide-sand/15 md:grid-cols-3 md:divide-x md:divide-y-0 rtl:md:divide-x-reverse">
          {courses.map((c, i) => (
            <Reveal
              key={c}
              delay={i * 0.1}
              className="px-0 py-8 first:pt-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <p className="eyebrow mb-4 text-sage">{t(`courses.${c}_org`)}</p>
              <h3 className="font-serif text-2xl font-normal text-sand">
                {t(`courses.${c}_title`)}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-sand/65">
                {t(`courses.${c}_desc`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
