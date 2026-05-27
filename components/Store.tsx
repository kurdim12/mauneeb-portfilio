'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import Media from './Media';
import { useFolderPhotos } from './MediaProvider';
import type { Locale } from '@/src/i18n';

export default function Store() {
  const t = useTranslations('store');

  return (
    <section id="store" className="bg-bone py-24 md:py-32">
      <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow mb-5">{t('eyebrow')}</p>
          <h2 className="font-serif text-h2 font-light text-charcoal">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
            {t('intro')}
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 font-sans text-sm text-charcoal"
          >
            <span className="relative">
              {t('cta')}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="text-sage transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
              &rarr;
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <StoreGallery />
        </Reveal>
      </div>
    </section>
  );
}

function StoreGallery() {
  const t = useTranslations('store');
  const locale = useLocale() as Locale;
  const isRtl = locale === 'ar';
  const photos = useFolderPhotos('/images/store');
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
    if (count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [count]);

  if (count === 0) {
    return (
      <Media
        src="/images/store-1.jpg"
        alt="Coffee tools and essentials"
        seed="store-tools"
        initial="&"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="aspect-square w-full"
      />
    );
  }

  return (
    <div className="group relative aspect-square w-full overflow-hidden bg-deep-olive">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={photos[index]}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={photos[index]}
            alt={`${t('title')} — ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            onClick={() => go(isRtl ? 1 : -1)}
            aria-label={t('prev')}
            className="absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-bone/85 text-charcoal opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100 ltr:left-3 rtl:right-3"
          >
            {isRtl ? '→' : '←'}
          </button>
          <button
            onClick={() => go(isRtl ? -1 : 1)}
            aria-label={t('next')}
            className="absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-bone/85 text-charcoal opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100 ltr:right-3 rtl:left-3"
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
  );
}
