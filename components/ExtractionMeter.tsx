'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useLocale } from 'next-intl';
import type { Locale } from '@/src/i18n';

const SHOT_MAX_SECONDS = 27;

/**
 * A slim fixed bar on the inline-end edge that fills top→bottom as the
 * page scrolls, with a tiny mono label counting up like an espresso shot
 * timer. Desktop only. Hidden under prefers-reduced-motion.
 */
export default function ExtractionMeter() {
  const locale = useLocale() as Locale;
  const isRtl = locale === 'ar';
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAllowMotion(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const seconds = useTransform(
    scrollYProgress,
    [0, 1],
    [0, SHOT_MAX_SECONDS]
  );
  const [tenths, setTenths] = useState(0);

  useMotionValueEvent(seconds, 'change', (v) => {
    setTenths(Math.round(v * 10));
  });

  if (!allowMotion) return null;

  const label = (tenths / 10).toFixed(1);
  const positionClass = isRtl ? 'left-3' : 'right-3';
  const labelOffsetClass = isRtl ? 'left-7' : 'right-7';

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed top-0 z-40 hidden h-screen md:block ${positionClass}`}
    >
      {/* Rail */}
      <div className="relative h-full w-[3px] bg-charcoal/10">
        <motion.div
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-sage to-deep-olive"
          style={{ height }}
        />
      </div>

      {/* Label */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${labelOffsetClass}`}
      >
        <p
          className="whitespace-nowrap font-mono text-[10px] tabular-nums text-charcoal/45"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: isRtl ? 'rotate(180deg)' : undefined,
          }}
        >
          {label}s / {SHOT_MAX_SECONDS.toFixed(1)}s
        </p>
      </div>
    </div>
  );
}
