'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EASE = [0.76, 0, 0.24, 1] as const;

export default function IntroCurtain() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('intro-seen');
    if (reduce || seen) {
      setShow(false);
      return;
    }
    sessionStorage.setItem('intro-seen', '1');
    const id = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-olive"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-5xl font-light text-sand md:text-7xl">
              Muneeb
            </p>
            <p className="mt-3 font-serif text-lg italic text-sage md:text-xl">
              I don&rsquo;t own them. I make them work.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
