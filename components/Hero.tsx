'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import Media from './Media';
import StatusPill from './StatusPill';
import Magnetic from './Magnetic';

const EASE = [0.22, 1, 0.36, 1] as const;

function MaskLine({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className ?? ''}`}
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const t = useTranslations('hero');
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-bone pt-28 pb-16 md:min-h-screen md:pt-32"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-20 select-none font-serif leading-none text-sage/[0.06] ltr:right-0 rtl:left-0"
        style={{ fontSize: 'clamp(20rem, 42vw, 40rem)' }}
      >
        &rdquo;
      </span>

      <div className="container-x relative grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="mb-5"
          >
            <StatusPill />
          </motion.div>

          <motion.p
            className="eyebrow mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            {t('eyebrow')}
          </motion.p>

          <h1 className="font-serif text-hero font-light text-charcoal">
            <MaskLine delay={0.15}>{t('title_line1')}</MaskLine>
            <MaskLine delay={0.28} className="italic text-sage">
              {t('title_line2')}
            </MaskLine>
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-charcoal/70 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.62 }}
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-charcoal px-7 py-3.5 font-sans text-sm text-bone transition-opacity hover:opacity-85"
              >
                {t('cta_primary')}
                <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
                  &rarr;
                </span>
              </a>
            </Magnetic>
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
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
        >
          <motion.div style={{ y: imageY }} className="aspect-[4/5] w-full">
            <Media
              src="/images/hero.jpg"
              alt="Muneeb behind the bar"
              seed="hero"
              initial="M"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="h-full w-full"
              imgClassName="object-[20%_center] scale-110"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="container-x absolute inset-x-0 bottom-8 flex items-center justify-between font-sans text-xs uppercase tracking-eyebrow text-charcoal/45"
      >
        <span>{t('meta_location')}</span>
        <span className="hidden items-center gap-2 sm:flex">
          <span className="h-8 w-px bg-charcoal/20" />
          {t('meta_availability')}
        </span>
      </motion.div>
    </section>
  );
}
