'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { projects, type Project } from '@/src/data/content';
import type { Locale } from '@/src/i18n';
import Reveal from './Reveal';
import Media from './Media';
import ProjectModal from './ProjectModal';
import SectionTag from './SectionTag';
import { useProjectPhotos } from './MediaProvider';

// Bento layout per project index: column span (lg) and aspect ratio.
const bento: { col: string; aspect: string; lead?: boolean }[] = [
  { col: 'lg:col-span-8', aspect: 'aspect-[4/3]', lead: true },
  { col: 'lg:col-span-4', aspect: 'aspect-[4/5]' },
  { col: 'lg:col-span-4', aspect: 'aspect-square' },
  { col: 'lg:col-span-4', aspect: 'aspect-square' },
  { col: 'lg:col-span-4', aspect: 'aspect-[4/5]' },
  { col: 'lg:col-span-6', aspect: 'aspect-[16/10]' },
  { col: 'lg:col-span-6', aspect: 'aspect-[16/10]' },
  { col: 'lg:col-span-4', aspect: 'aspect-[4/5]' },
  { col: 'lg:col-span-4', aspect: 'aspect-square' },
  { col: 'lg:col-span-4', aspect: 'aspect-[4/5]' },
  { col: 'lg:col-span-8', aspect: 'aspect-[16/9]' },
  { col: 'lg:col-span-4', aspect: 'aspect-square' },
];

export default function Work() {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-bone py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionTag index={1} label={t('eyebrow')} />
          <h2 className="mt-8 max-w-3xl font-serif text-h2 font-light text-charcoal">
            {t('title')}{' '}
            <span className="italic text-sage">{t('title_accent')}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70">
            {t('intro')}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 md:gap-6">
          {projects.map((project, i) => {
            const layout = bento[i] ?? bento[bento.length - 1];
            return (
              <Reveal
                key={project.id}
                delay={(i % 3) * 0.06}
                className={layout.col}
              >
                <BentoCard
                  project={project}
                  aspect={layout.aspect}
                  lead={!!layout.lead}
                  onOpen={() => setActive(project)}
                />
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function BentoCard({
  project,
  aspect,
  lead,
  onOpen,
}: {
  project: Project;
  aspect: string;
  lead: boolean;
  onOpen: () => void;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const photos = useProjectPhotos(project.id);
  const cardSrc = photos[0] ?? `/images/projects/${project.id}.jpg`;

  return (
    <button
      onClick={onOpen}
      className="group block w-full text-left rtl:text-right"
    >
      <div className="relative overflow-hidden">
        <Media
          src={cardSrc}
          alt={project.name[locale]}
          seed={project.id}
          initial={project.name[locale].charAt(0)}
          sizes={
            lead
              ? '(max-width: 1024px) 100vw, 66vw'
              : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          }
          className={`${aspect} w-full`}
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

        {/* Hover overlay with view CTA */}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="m-4 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-eyebrow text-bone">
            {t('view')}
            <span className="rtl:rotate-180">&rarr;</span>
          </span>
        </div>
      </div>

      <div
        className={`mt-4 flex items-baseline justify-between gap-3 ${
          lead ? 'lg:mt-5' : ''
        }`}
      >
        <h3
          className={`font-serif font-normal text-charcoal transition-colors group-hover:text-sage ${
            lead ? 'text-3xl md:text-4xl' : 'text-2xl'
          }`}
        >
          {project.name[locale]}
        </h3>
        <span className="font-sans text-xs tabular-nums text-charcoal/40">
          {project.year}
        </span>
      </div>
      <p className="mt-1 font-sans text-xs uppercase tracking-eyebrow text-charcoal/50">
        {project.city[locale]}
      </p>
      {lead && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/65">
          {project.desc[locale]}
        </p>
      )}
    </button>
  );
}
