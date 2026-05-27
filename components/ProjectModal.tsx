'use client';

import { useCallback, useEffect, useState } from 'react';
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

  const count = photos.length;
  const go = useCallback(
    (dir: number) => {
      if (count < 2) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(isRtl ? -1 : 1);
      if (e.key === 'ArrowLeft') go(isRtl ? 1 : -1);
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
          </div>

          {count > 1 && (
            <p className="mt-8 font-sans text-xs tabular-nums text-charcoal/40">
              {index + 1} / {count}
            </p>
          )}
        </div>

        <button
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
