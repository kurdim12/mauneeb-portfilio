'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { projects, type Project } from '@/src/data/content';
import type { Locale } from '@/src/i18n';
import Reveal from './Reveal';
import Media from './Media';
import ProjectModal from './ProjectModal';
import { useProjectPhotos } from './MediaProvider';

export default function Work() {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const [active, setActive] = useState<Project | null>(null);

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

        <Reveal>
          <div className="mt-14">
            <FeaturedCard
              project={projects[0]}
              onOpen={() => setActive(projects[0])}
            />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {projects.slice(1).map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <WorkCard project={project} onOpen={() => setActive(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function FeaturedCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const photos = useProjectPhotos(project.id);
  const cardSrc = photos[0] ?? `/images/projects/${project.id}.jpg`;

  return (
    <button
      onClick={onOpen}
      className="group grid w-full grid-cols-1 items-center gap-8 text-left md:grid-cols-2 md:gap-12 rtl:text-right"
    >
      <div className="relative order-1">
        <Media
          src={cardSrc}
          alt={project.name[locale]}
          seed={project.id}
          initial={project.name[locale].charAt(0)}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="aspect-[5/4] w-full"
          imgClassName="transition-transform duration-[900ms] ease-expo group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 bg-bone/90 px-3 py-1.5 font-sans text-[10px] uppercase tracking-eyebrow text-charcoal backdrop-blur-sm rtl:left-auto rtl:right-4">
          {project.engagement === 'full'
            ? t('engagement_full')
            : t('engagement_training')}
        </span>
        {photos.length > 1 && (
          <span className="absolute bottom-4 right-4 bg-charcoal/70 px-2.5 py-1 font-sans text-[10px] tabular-nums text-bone backdrop-blur-sm rtl:left-4 rtl:right-auto">
            {photos.length}
          </span>
        )}
      </div>

      <div className="order-2">
        <p className="eyebrow mb-4">{t('featured')}</p>
        <h3 className="font-serif text-4xl font-light text-charcoal transition-colors group-hover:text-sage md:text-5xl">
          {project.name[locale]}
        </h3>
        <p className="mt-2 font-sans text-xs uppercase tracking-eyebrow text-charcoal/50">
          {project.city[locale]} · {project.year}
        </p>
        <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70">
          {project.desc[locale]}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-charcoal">
          <span className="relative">
            {t('view')}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="text-sage transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </button>
  );
}

function WorkCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const photos = useProjectPhotos(project.id);
  const cardSrc = photos[0] ?? `/images/projects/${project.id}.jpg`;

  return (
    <button onClick={onOpen} className="group block w-full text-left rtl:text-right">
      <div className="relative">
        <Media
          src={cardSrc}
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
        {photos.length > 1 && (
          <span className="absolute bottom-3 right-3 bg-charcoal/70 px-2.5 py-1 font-sans text-[10px] tabular-nums text-bone backdrop-blur-sm rtl:left-3 rtl:right-auto">
            {photos.length}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-serif text-2xl font-normal text-charcoal transition-colors group-hover:text-sage">
          {project.name[locale]}
        </h3>
        <span className="font-sans text-xs tabular-nums text-charcoal/40">
          {project.year}
        </span>
      </div>
      <p className="mt-1 font-sans text-xs uppercase tracking-eyebrow text-charcoal/50">
        {project.city[locale]}
      </p>
    </button>
  );
}
