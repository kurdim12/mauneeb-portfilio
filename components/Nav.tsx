'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import LangToggle from './LangToggle';
import Wordmark from './Wordmark';
import { contact } from '@/src/data/content';

const links = [
  { id: 'work', key: 'work' },
  { id: 'teaching', key: 'teaching' },
  { id: 'about', key: 'about' },
  { id: 'store', key: 'store' },
  { id: 'contact', key: 'contact' },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Nav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-bone/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          aria-label="Muneeb — home"
          className="transition-opacity hover:opacity-80"
        >
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`group relative font-sans text-sm transition-colors ${
                active === link.id
                  ? 'text-charcoal'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              {t(link.key)}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-sage transition-all duration-300 ${
                  active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href={`${contact.whatsappUrl}?text=${encodeURIComponent(t('cta_message'))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-charcoal px-4 py-2 font-sans text-xs text-bone transition-opacity hover:opacity-85 md:inline-block"
          >
            {t('cta')}
          </a>
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-charcoal transition-transform duration-300 ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-charcoal transition-transform duration-300 ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <motion.div
        className="h-px origin-left bg-sage rtl:origin-right"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden bg-bone/95 backdrop-blur-md md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="container-x flex flex-col py-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-charcoal/10 py-4 font-serif text-2xl font-light text-charcoal"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, ease: EASE }}
                >
                  {t(link.key)}
                </motion.a>
              ))}
              <motion.a
                href={`${contact.whatsappUrl}?text=${encodeURIComponent(t('cta_message'))}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center bg-charcoal px-6 py-4 font-sans text-sm text-bone"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + links.length * 0.05, ease: EASE }}
              >
                {t('cta')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
