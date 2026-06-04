'use client';

import { useMemo, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { projects, type Project } from '@/src/data/content';
import type { Locale } from '@/src/i18n';
import Media from './Media';
import ProjectModal from './ProjectModal';
import SectionTag from './SectionTag';
import Reveal from './Reveal';
import { useProjectPhotos } from './MediaProvider';

export default function Work() {
  const [active, setActive] = useState<Project | null>(null);

  const { featured, other } = useMemo(() => {
    const featured = projects.filter((p) => p.featured);
    const other = projects.filter((p) => !p.featured);
    return { featured, other };
  }, []);

  return (
    <div id="work">
      <WorkMobile featured={featured} onOpen={setActive} />
      <WorkDesktop featured={featured} onOpen={setActive} />
      <AlsoBuilt projects={other} onOpen={setActive} />
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}

/* ------------------------------ Mobile ------------------------------ */

function WorkMobile({
  featured,
  onOpen,
}: {
  featured: Project[];
  onOpen: (p: Project) => void;
}) {
  const t = useTranslations('work');

  return (
    <section className="block bg-bone py-20 md:hidden">
      <div className="container-x">
        <SectionTag index={1} label={t('eyebrow')} />
        <h2 className="mt-6 font-serif text-h2 font-light text-charcoal">
          {t('title')}{' '}
          <span className="italic text-sage">{t('title_accent')}</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70">
          {t('intro')}
        </p>
        <div className="mt-12 space-y-14">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={0}>
              <MobileProjectCard
                project={p}
                index={i}
                onOpen={() => onOpen(p)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
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
      aria-label={`Open ${project.name[locale]} case study`}
    >
      <div className="relative overflow-hidden">
        <Media
          src={cardSrc}
          alt={project.name[locale]}
          seed={project.id}
          initial={project.name[locale].charAt(0)}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="aspect-[4/5] w-full"
          imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
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
      <p className="eyebrow mt-5 text-charcoal/35">
        N°.{String(index + 1).padStart(3, '0')}
      </p>
      <h3 className="mt-1 font-serif text-3xl font-normal text-charcoal">
        {project.name[locale]}
      </h3>
      <p className="mt-1 font-sans text-xs uppercase tracking-eyebrow text-charcoal/50">
        {project.city[locale]} · {project.year}
      </p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/65">
        {project.desc[locale]}
      </p>
    </button>
  );
}

/* ------------------------------ Desktop ----------------------------- */

function WorkDesktop({
  featured,
  onOpen,
}: {
  featured: Project[];
  onOpen: (p: Project) => void;
}) {
  const t = useTranslations('work');
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const panelCount = featured.length;
  // Panel = 80vw, gap = 4vw, pl/pr = 10vw.
  // Strip width = 84·N + 16 vw. Translate end = -(84·(N-1)) vw.
  const translateEnd = `-${84 * Math.max(0, panelCount - 1)}vw`;
  const x = useTransform(
    scrollYProgress,
    [0.04, 0.96],
    ['0vw', translateEnd]
  );

  return (
    <section
      ref={ref}
      className="relative hidden bg-bone md:block"
      style={{ height: `${Math.max(1, panelCount) * 60}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="container-x relative z-10 pt-28 md:pt-32">
          <SectionTag index={1} label={t('eyebrow')} />
          <div className="mt-6 grid grid-cols-12 items-baseline gap-8">
            <h2 className="col-span-12 max-w-2xl font-serif text-h2 font-light text-charcoal lg:col-span-7">
              {t('title')}{' '}
              <span className="italic text-sage">{t('title_accent')}</span>
            </h2>
            <p className="col-span-12 max-w-md text-base leading-relaxed text-charcoal/65 lg:col-span-5">
              {t('intro')}
            </p>
          </div>
        </div>

        <motion.div
          style={{ x }}
          className="mt-12 flex flex-1 items-center gap-[4vw] pl-[10vw] pr-[10vw] rtl:flex-row-reverse"
        >
          {featured.map((p, i) => (
            <DesktopPanel
              key={p.id}
              project={p}
              index={i}
              onOpen={() => onOpen(p)}
            />
          ))}
        </motion.div>

        <PanelIndicator progress={scrollYProgress} total={panelCount} />
      </div>
    </section>
  );
}

function DesktopPanel({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const photos = useProjectPhotos(project.id);
  const cardSrc = photos[0] ?? `/images/projects/${project.id}.jpg`;

  return (
    <button
      onClick={onOpen}
      className="group flex w-[80vw] shrink-0 items-center gap-10 text-left rtl:text-right"
      aria-label={`Open ${project.name[locale]} case study`}
    >
      <div className="w-[56%]">
        <Media
          src={cardSrc}
          alt={project.name[locale]}
          seed={project.id}
          initial={project.name[locale].charAt(0)}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="aspect-[5/6] w-full"
          imgClassName="transition-transform duration-[1100ms] ease-expo group-hover:scale-[1.04]"
        />
      </div>

      <div className="w-[44%]">
        <p className="font-sans text-[11px] uppercase tracking-eyebrow text-charcoal/35">
          N°.{String(index + 1).padStart(3, '0')}
        </p>
        <h3
          className="mt-3 font-serif font-light leading-[0.92] text-charcoal transition-colors duration-500 group-hover:text-sage"
          style={{
            fontSize: 'clamp(3rem, 5.5vw, 6rem)',
            letterSpacing: '-0.025em',
          }}
        >
          {project.name[locale]}
        </h3>
        <p className="mt-5 font-sans text-xs uppercase tracking-eyebrow text-charcoal/55">
          {project.city[locale]} · {project.year} ·{' '}
          {project.engagement === 'full'
            ? t('engagement_full')
            : t('engagement_training')}
        </p>
        <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/65">
          {project.desc[locale]}
        </p>
        <span className="mt-7 inline-flex items-center gap-2 font-sans text-sm text-charcoal">
          <span className="relative">
            {t('view')}
            <span className="absolute -bottom-1 left-0 h-px w-full bg-charcoal transition-colors duration-300 group-hover:bg-sage" />
          </span>
          <span className="text-sage transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </button>
  );
}

function PanelIndicator({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  const [idx, setIdx] = useState(0);
  const mapped = useTransform(
    progress,
    [0.04, 0.96],
    [0, Math.max(0, total - 1)]
  );
  const fillWidth = useTransform(progress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(mapped, 'change', (v) => {
    setIdx(Math.min(total - 1, Math.max(0, Math.round(v))));
  });

  return (
    <div className="absolute bottom-8 left-0 right-0 z-10">
      <div className="container-x flex items-end justify-between gap-6 font-sans text-xs uppercase tracking-eyebrow text-charcoal/45">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-3xl font-light leading-none tabular-nums text-charcoal">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span className="tabular-nums">
            {String(total).padStart(2, '0')}
          </span>
        </div>
        <div className="relative h-px w-40 bg-charcoal/15 md:w-72">
          <motion.span
            className="absolute inset-y-0 left-0 bg-sage rtl:left-auto rtl:right-0"
            style={{ width: fillWidth }}
          />
        </div>
        <span>scroll &rarr;</span>
      </div>
    </div>
  );
}

/* ----------------------------- Also built --------------------------- */

function AlsoBuilt({
  projects: list,
  onOpen,
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;

  if (list.length === 0) return null;

  return (
    <section className="bg-bone py-20 md:py-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-8">{t('also_built')}</p>
        </Reveal>
        <ul className="grid grid-cols-1 border-t border-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 3) * 0.05}
              as="li"
              className="border-b border-charcoal/10 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-charcoal/10 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+1)]:border-charcoal/10 lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(3n+2)]:border-charcoal/10"
            >
              <button
                onClick={() => onOpen(p)}
                aria-label={`Open ${p.name[locale]} case study`}
                className="group flex w-full items-baseline justify-between gap-4 px-2 py-5 text-left transition-colors hover:bg-charcoal/[0.02] sm:px-5 md:py-6 rtl:text-right"
              >
                <span className="font-serif text-xl font-normal text-charcoal transition-colors group-hover:text-sage md:text-2xl">
                  {p.name[locale]}
                </span>
                <span className="shrink-0 font-sans text-[11px] uppercase tracking-eyebrow text-charcoal/45 tabular-nums">
                  {p.city[locale]} · {p.year}
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
