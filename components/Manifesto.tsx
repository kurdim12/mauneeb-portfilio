'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Pattern from './Pattern';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Manifesto() {
  const t = useTranslations('manifesto');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section className="relative overflow-hidden bg-bone py-32 md:py-48">
      <div className="text-charcoal">
        <Pattern variant="dots" opacity={0.05} />
      </div>

      <div ref={ref} className="container-x relative text-center">
        <motion.p
          className="eyebrow mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {t('eyebrow')}
        </motion.p>

        <p
          className="font-serif font-light leading-[0.95] text-charcoal"
          style={{
            fontSize: 'clamp(3rem, 9vw, 9rem)',
            letterSpacing: '-0.025em',
          }}
        >
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 1, ease: EASE, delay: 0.05 }}
            >
              {t('line1')}
            </motion.span>
          </span>
          <span className="mt-2 block overflow-hidden pb-[0.05em]">
            <motion.span
              className="block text-sage ltr:italic rtl:font-medium"
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 1, ease: EASE, delay: 0.22 }}
            >
              {t('line2')}
            </motion.span>
          </span>
        </p>

        <motion.p
          className="mx-auto mt-14 max-w-lg text-base leading-relaxed text-charcoal/60 md:mt-16 md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
        >
          {t('note')}
        </motion.p>
      </div>
    </section>
  );
}
