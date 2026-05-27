'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Media from './Media';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bone pt-32 pb-16 md:pt-44 md:pb-24"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 select-none font-serif leading-none text-sage/[0.06] ltr:right-0 rtl:left-0"
        style={{ fontSize: 'clamp(18rem, 38vw, 34rem)' }}
      >
        &rdquo;
      </span>

      <div className="container-x relative grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.p
            className="eyebrow mb-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {t('eyebrow')}
          </motion.p>

          <motion.h1
            className="font-serif text-hero font-light text-charcoal"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
          >
            {t('title_line1')}
            <br />
            <span className="italic text-sage">{t('title_line2')}</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-charcoal/70 md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.16 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.24 }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-charcoal px-7 py-3.5 font-sans text-sm text-bone transition-opacity hover:opacity-85"
            >
              {t('cta_primary')}
              <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="#contact"
              className="group relative font-sans text-sm text-charcoal"
            >
              {t('cta_secondary')}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-charcoal transition-transform duration-300 group-hover:scale-x-0 rtl:origin-right" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        >
          <Media
            src="/images/hero.jpg"
            alt="Muneeb behind the bar"
            seed="hero"
            initial="M"
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="aspect-[4/5] w-full"
            imgClassName="object-[20%_center]"
          />
        </motion.div>
      </div>

      <motion.div
        className="container-x relative mt-16 flex items-center justify-between border-t border-charcoal/10 pt-6 font-sans text-xs uppercase tracking-eyebrow text-charcoal/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.5 }}
      >
        <span>{t('meta_location')}</span>
        <span className="hidden sm:inline">{t('meta_discipline')}</span>
        <span>{t('meta_availability')}</span>
      </motion.div>
    </section>
  );
}
