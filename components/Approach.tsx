'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

const steps = ['concept', 'equipment', 'menu', 'training', 'launch'] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Approach() {
  const t = useTranslations('approach');
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const i = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(p * steps.length))
    );
    if (i !== active) setActive(i);
  });

  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={ref}
      className="relative bg-bone"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-x grid w-full items-center gap-10 md:grid-cols-12 md:gap-12">
          {/* Text column */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-5">{t('eyebrow')}</p>
            <h2 className="font-serif text-h2 font-light text-charcoal">
              {t('title')}{' '}
              <span className="italic text-sage">{t('title_accent')}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/65">
              {t('intro')}
            </p>

            <div className="relative mt-10 h-44 md:h-48">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p className="font-sans text-[11px] uppercase tracking-eyebrow text-charcoal/40">
                    {String(active + 1).padStart(2, '0')} /{' '}
                    {String(steps.length).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-normal text-charcoal md:text-4xl">
                    {t(`${steps[active]}_title`)}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-charcoal/70">
                    {t(`${steps[active]}_desc`)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Compact step list with active highlight */}
            <ol className="mt-10 hidden gap-x-6 gap-y-2 md:flex md:flex-wrap">
              {steps.map((step, i) => (
                <li key={step}>
                  <button
                    onClick={() => {
                      const el = ref.current;
                      if (!el) return;
                      const top =
                        el.offsetTop + (el.offsetHeight * i) / steps.length;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }}
                    className={`font-sans text-xs uppercase tracking-eyebrow transition-colors ${
                      active === i
                        ? 'text-charcoal'
                        : 'text-charcoal/35 hover:text-charcoal/60'
                    }`}
                  >
                    {t(`${step}_title`)}
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* Visual column */}
          <div className="md:col-span-7">
            <div className="relative mx-auto flex aspect-square w-full max-h-[60vh] items-center justify-center overflow-hidden bg-deep-olive md:max-h-[72vh]">
              <span className="grain absolute inset-0" aria-hidden />

              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`num-${active}`}
                  className="pointer-events-none absolute select-none font-serif font-light leading-none text-sand/[0.12]"
                  style={{ fontSize: 'clamp(12rem, 32vw, 26rem)' }}
                  initial={{ opacity: 0, scale: 1.06, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -30 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  aria-hidden
                >
                  {String(active + 1).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.h3
                  key={`t-${active}`}
                  className="relative px-6 text-center font-serif font-light italic text-sage"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
                >
                  {t(`${steps[active]}_title`)}
                </motion.h3>
              </AnimatePresence>

              {/* Vertical dots */}
              <div className="absolute top-1/2 flex -translate-y-1/2 flex-col gap-3 ltr:right-4 rtl:left-4">
                {steps.map((step, i) => (
                  <span
                    key={step}
                    className={`block h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      active === i
                        ? 'h-2 w-2 bg-sage'
                        : 'bg-sand/25'
                    }`}
                  />
                ))}
              </div>

              {/* Bottom progress bar */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-sage rtl:left-auto rtl:right-0"
                style={{ width: progress }}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
