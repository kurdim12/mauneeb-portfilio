'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import SectionTag from './SectionTag';
import Pattern from './Pattern';

const courses = ['bau', 'jrf', 'jaa'] as const;

export default function Teaching() {
  const t = useTranslations('teaching');

  return (
    <section
      id="teaching"
      className="relative overflow-hidden bg-deep-olive py-24 text-sand md:py-32"
    >
      <div className="text-sand">
        <Pattern variant="grid" opacity={0.05} />
      </div>

      <div className="container-x relative">
        <Reveal>
          <SectionTag index={3} label={t('eyebrow')} tone="dark" />
          <h2 className="mt-8 max-w-3xl font-serif text-h2 font-light text-sand">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/70">
            {t('intro')}
          </p>
        </Reveal>

        <div className="mt-16 border-t border-sand/15">
          {courses.map((c, i) => (
            <Reveal key={c} delay={i * 0.08}>
              <div className="group relative grid grid-cols-12 items-baseline gap-6 border-b border-sand/15 py-10 md:py-14">
                <span
                  className="col-span-12 font-serif font-light leading-none tabular-nums text-sand/15 transition-colors duration-500 group-hover:text-sage/40 md:col-span-2"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="col-span-12 md:col-span-5">
                  <p className="eyebrow mb-3 text-sage">
                    {t(`courses.${c}_org`)}
                  </p>
                  <h3 className="font-serif text-2xl font-normal text-sand md:text-3xl">
                    {t(`courses.${c}_title`)}
                  </h3>
                </div>

                <p className="col-span-12 max-w-md text-sm leading-relaxed text-sand/65 md:col-span-5">
                  {t(`courses.${c}_desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
