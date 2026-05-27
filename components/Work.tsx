'use client';

import { useLocale, useTranslations } from 'next-intl';
import { projects } from '@/src/data/content';
import type { Locale } from '@/src/i18n';
import Reveal from './Reveal';
import Media from './Media';

export default function Work() {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;

  const scope = [
    t('scope_concept'),
    t('scope_equipment'),
    t('scope_menu'),
    t('scope_training'),
    t('scope_launch'),
  ];

  return (
    <section id="work" className="bg-bone py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">{t('eyebrow')}</p>
          <h2 className="max-w-3xl font-serif text-h2 font-light text-charcoal">
            {t('title')} <span className="italic text-sage">{t('title_accent')}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70">
            {t('intro')}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <article className="group">
                <div className="relative">
                  <Media
                    src={`/images/projects/${project.id}.jpg`}
                    alt={project.name[locale]}
                    seed={project.id}
                    initial={project.name[locale].charAt(0)}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="aspect-[4/5] w-full"
                    imgClassName="transition-transform duration-[900ms] ease-expo group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 bg-bone/90 px-3 py-1.5 font-sans text-[10px] uppercase tracking-eyebrow text-charcoal backdrop-blur-sm rtl:left-auto rtl:right-3">
                    {project.engagement === 'full'
                      ? t('engagement_full')
                      : t('engagement_training')}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl font-normal text-charcoal">
                    {project.name[locale]}
                  </h3>
                  <span className="font-sans text-xs tabular-nums text-charcoal/40">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 font-sans text-xs uppercase tracking-eyebrow text-charcoal/50">
                  {project.city[locale]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 border-t border-charcoal/10 pt-8">
            <p className="eyebrow mb-6">{t('scope_label')}</p>
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-3 font-sans text-sm text-charcoal/70 md:gap-x-6">
              {scope.map((step, i) => (
                <li key={step} className="flex items-center gap-3 md:gap-6">
                  <span className="flex items-center gap-2">
                    <span className="font-serif text-sage">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </span>
                  {i < scope.length - 1 && (
                    <span className="text-charcoal/25" aria-hidden>
                      &middot;
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
