'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/src/data/content';
import type { Locale } from '@/src/i18n';
import { useProjectPhotos } from './MediaProvider';

const EASE = [0.22, 1, 0.36, 1] as const;

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
  return (
    <div className="mt-8 space-y-6 border-t border-charcoal/10 pt-6">
      {project.challenge && (
        <div>
          <p className="eyebrow mb-2">{t('challenge_label')}</p>
          <p className="text-sm leading-relaxed text-charcoal/75">
            {project.challenge[locale]}
          </p>
        </div>
      )}
      {project.approach && (
        <div>
          <p className="eyebrow mb-2">{t('approach_label')}</p>
          <p className="text-sm leading-relaxed text-charcoal/75">
            {project.approach[locale]}
          </p>
        </div>
      )}
      {project.result && (
        <div>
          <p className="eyebrow mb-2">{t('result_label')}</p>
          <p className="text-sm leading-relaxed text-charcoal/75">
            {project.result[locale]}
          </p>
        </div>
      )}

      {project.metric && (
        <div className="border-t border-charcoal/10 pt-6">
          <p className="font-serif text-5xl font-light leading-none text-charcoal md:text-6xl">
            {project.metric.value}
          </p>
          <p className="mt-2 font-sans text-xs uppercase tracking-eyebrow text-charcoal/55">
            {project.metric.label[locale]}
          </p>
        </div>
      )}

      {project.testimonial && (
        <figure className="border-t border-charcoal/10 pt-6">
          <blockquote className="font-serif text-xl italic leading-snug text-sage md:text-2xl">
            &ldquo;{project.testimonial.quote[locale]}&rdquo;
          </blockquote>
          <figcaption className="mt-3 font-sans text-xs uppercase tracking-eyebrow text-charcoal/60">
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
