'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '@/src/data/content';
import type { Locale } from '@/src/i18n';
import { useProjectPhotos } from './MediaProvider';

const EASE = [0.22, 1, 0.36, 1] as const;

// Fields whose value starts with "TODO" are placeholders for owner fill;
// hide them from rendering so the public site never shows TODO strings.
function isTodo(value: string | undefined): boolean {
  if (!value) return true;
  return value.trim().toUpperCase().startsWith('TODO');
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && <ModalInner project={project} onClose={onClose} />}
    </AnimatePresence>
  );
}

function ModalInner({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const t = useTranslations('work');
  const locale = useLocale() as Locale;
  const isRtl = locale === 'ar';
  const photos = useProjectPhotos(project.id);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const count = photos.length;
  const go = useCallback(
    (dir: number) => {
      if (count < 2) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  // Save previously focused element + move focus into dialog; restore on close
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    // Focus the close button on mount (next tick to wait for animation)
    requestAnimationFrame(() => closeBtnRef.current?.focus());
    return () => {
      if (trigger && typeof trigger.focus === 'function') trigger.focus();
    };
  }, []);

  // Keyboard handling: Esc, Arrows, Tab focus trap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowRight') go(isRtl ? -1 : 1);
      if (e.key === 'ArrowLeft') go(isRtl ? 1 : -1);
      if (e.key === 'Tab') {
        const container = dialogRef.current;
        if (!container) return;
        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled'));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const activeEl = document.activeElement;
        if (e.shiftKey && activeEl === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && activeEl === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [go, isRtl, onClose]);

  const scope = [
    t('scope_concept'),
    t('scope_equipment'),
    t('scope_menu'),
    t('scope_training'),
    t('scope_launch'),
  ];

  const hasCaseStudy = !!(project.challenge || project.approach || project.result);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 bg-charcoal/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.name[locale]}
        className="relative grid max-h-full w-full max-w-5xl grid-rows-[1fr_auto] overflow-hidden bg-bone md:grid-cols-[1.5fr_1fr] md:grid-rows-1"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {/* Image stage */}
        <div className="relative aspect-[4/3] bg-deep-olive md:aspect-auto md:h-[78vh]">
          {count > 0 ? (
            <Image
              key={photos[index]}
              src={photos[index]}
              alt={`${project.name[locale]} — ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <p className="font-serif text-6xl font-light text-sand/20">
                  {project.name[locale].charAt(0)}
                </p>
                <p className="mt-4 px-8 font-sans text-xs uppercase tracking-eyebrow text-sand/40">
                  {t('photos_soon')}
                </p>
              </div>
            </div>
          )}

          {count > 1 && (
            <>
              <button
                onClick={() => go(isRtl ? 1 : -1)}
                aria-label={t('prev')}
                className="absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-bone/85 text-charcoal transition-opacity hover:opacity-80 ltr:left-3 rtl:right-3"
              >
                {isRtl ? '→' : '←'}
              </button>
              <button
                onClick={() => go(isRtl ? -1 : 1)}
                aria-label={t('next')}
                className="absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-bone/85 text-charcoal transition-opacity hover:opacity-80 ltr:right-3 rtl:left-3"
              >
                {isRtl ? '←' : '→'}
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {photos.map((p, i) => (
                  <button
                    key={p}
                    onClick={() => setIndex(i)}
                    aria-label={`${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? 'w-6 bg-bone' : 'w-1.5 bg-bone/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Detail panel */}
        <div className="flex flex-col justify-between overflow-y-auto p-8 md:p-10">
          <div>
            <span className="eyebrow">
              {project.engagement === 'full'
                ? t('engagement_full')
                : t('engagement_training')}
            </span>
            <h3 className="mt-4 font-serif text-4xl font-light text-charcoal">
              {project.name[locale]}
            </h3>
            <p className="mt-2 font-sans text-xs uppercase tracking-eyebrow text-charcoal/50">
              {project.city[locale]} · {project.year}
            </p>

            {hasCaseStudy ? (
              <CaseStudyBody project={project} locale={locale} />
            ) : (
              <FallbackBody project={project} locale={locale} scope={scope} />
            )}
          </div>

          {count > 1 && (
            <p className="mt-8 font-sans text-xs tabular-nums text-charcoal/40">
              {index + 1} / {count}
            </p>
          )}
        </div>

        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label={t('close')}
          className="absolute top-4 flex h-9 w-9 items-center justify-center bg-bone/85 text-charcoal transition-opacity hover:opacity-80 ltr:right-4 rtl:left-4"
        >
          {'✕'}
        </button>
      </motion.div>
    </motion.div>
  );
}

function CaseStudyBody({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const t = useTranslations('work');
  const featuredOrder = projects.filter((p) => p.featured).map((p) => p.id);
  const idx = featuredOrder.indexOf(project.id);
  const caseNo = idx >= 0 ? `N°.${String(idx + 1).padStart(3, '0')}` : null;

  return (
    <div className="mt-8">
      {/* Magazine masthead */}
      <div className="flex items-center gap-4 border-t border-charcoal/15 pt-4">
        <span className="eyebrow text-sage">{t('case_study')}</span>
        <span className="block h-px flex-1 bg-charcoal/10" />
        {caseNo && (
          <span className="font-sans text-[11px] uppercase tracking-eyebrow tabular-nums text-charcoal/45">
            {caseNo}
          </span>
        )}
      </div>

      {/* Challenge — with drop cap (LTR only; Arabic doesn't use drop caps) */}
      {project.challenge && (
        <div className="mt-8">
          <p className="eyebrow mb-3">{t('challenge_label')}</p>
          <p className="text-base leading-relaxed text-charcoal/85 ltr:first-letter:float-left ltr:first-letter:me-3 ltr:first-letter:font-serif ltr:first-letter:text-7xl ltr:first-letter:font-light ltr:first-letter:leading-[0.82] ltr:first-letter:text-sage">
            {project.challenge[locale]}
          </p>
        </div>
      )}

      {/* Sage hairline divider */}
      {project.challenge && project.approach && (
        <div className="my-8 h-px w-12 bg-sage" />
      )}

      {/* Approach */}
      {project.approach && (
        <div>
          <p className="eyebrow mb-3">{t('approach_label')}</p>
          <p className="text-base leading-relaxed text-charcoal/80">
            {project.approach[locale]}
          </p>
        </div>
      )}

      {project.approach && project.result && (
        <div className="my-8 h-px w-12 bg-sage" />
      )}

      {/* Result */}
      {project.result && (
        <div>
          <p className="eyebrow mb-3">{t('result_label')}</p>
          <p className="text-base leading-relaxed text-charcoal/80">
            {project.result[locale]}
          </p>
        </div>
      )}

      {/* Metric — magazine pull-stat */}
      {project.metric && !isTodo(project.metric.value) && (
        <div className="my-10 grid grid-cols-[auto_auto_1fr] items-center gap-5 border-y border-sage/45 py-7">
          <p className="font-serif text-6xl font-light leading-[0.85] text-charcoal md:text-7xl">
            {project.metric.value}
          </p>
          <span className="block h-12 w-px bg-sage" />
          <p className="max-w-[18ch] font-sans text-[11px] uppercase leading-relaxed tracking-eyebrow text-charcoal/55">
            {project.metric.label[locale]}
          </p>
        </div>
      )}

      {/* Testimonial — pull quote with sage inline-start rule */}
      {project.testimonial &&
        !isTodo(project.testimonial.quote[locale]) &&
        !isTodo(project.testimonial.author) && (
          <figure className="my-10 border-s-2 border-sage ps-6">
            <blockquote className="font-serif text-2xl leading-snug text-charcoal/90 ltr:italic rtl:font-medium md:text-3xl">
              &ldquo;{project.testimonial.quote[locale]}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-sans text-xs uppercase tracking-eyebrow text-charcoal/55">
              {project.testimonial.author}
              {project.testimonial.role[locale] ? (
                <span className="text-charcoal/40">
                  {' '}
                  · {project.testimonial.role[locale]}
                </span>
              ) : null}
            </figcaption>
          </figure>
        )}
    </div>
  );
}

function FallbackBody({
  project,
  locale,
  scope,
}: {
  project: Project;
  locale: Locale;
  scope: string[];
}) {
  return (
    <>
      <p className="mt-6 text-base leading-relaxed text-charcoal/75">
        {project.desc[locale]}
      </p>
      <ul className="mt-8 space-y-3 border-t border-charcoal/10 pt-6">
        {scope.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-3 font-sans text-sm text-charcoal/70"
          >
            <span className="font-serif text-sage">
              {String(i + 1).padStart(2, '0')}
            </span>
            {step}
          </li>
        ))}
      </ul>
    </>
  );
}
