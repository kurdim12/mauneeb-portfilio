'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FieldNotes() {
  const t = useTranslations('notebook');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section className="relative overflow-hidden bg-bone py-28 md:py-36">
      {/* Decorative coffee-ring stain */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute top-12 h-48 w-48 text-deep-olive opacity-[0.08] md:top-20 md:h-72 md:w-72 ltr:-right-10 ltr:md:right-20 rtl:-left-10 rtl:md:left-20"
        style={{ transform: 'rotate(-7deg)' }}
      >
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle
          cx="100"
          cy="100"
          r="74"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="100" cy="100" r="66" fill="currentColor" opacity="0.18" />
        {/* a small drop, off-axis */}
        <circle
          cx="36"
          cy="160"
          r="6"
          fill="currentColor"
          opacity="0.45"
        />
      </svg>

      <div ref={ref} className="container-x relative max-w-3xl">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {t('eyebrow')}
        </motion.p>

        <motion.div
          className="mt-6 h-px w-16 origin-left bg-sage rtl:origin-right"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
        />

        <motion.p
          className="mt-10 font-serif font-light leading-[1.25] text-charcoal ltr:italic rtl:font-normal md:leading-[1.2]"
          style={{
            fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
            letterSpacing: '-0.005em',
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, ease: EASE, delay: 0.22 }}
        >
          {t('body')}
        </motion.p>

        <motion.p
          className="mt-10 font-serif text-base text-sage ltr:italic rtl:font-medium md:text-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
        >
          &mdash; {t('signature')}
        </motion.p>
      </div>
    </section>
  );
}
