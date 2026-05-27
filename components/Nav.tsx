'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll } from 'framer-motion';
import LangToggle from './LangToggle';

const links = [
  { id: 'work', key: 'work' },
  { id: 'teaching', key: 'teaching' },
  { id: 'about', key: 'about' },
  { id: 'store', key: 'store' },
  { id: 'contact', key: 'contact' },
] as const;

export default function Nav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-bone/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-charcoal"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-deep-olive font-serif text-base italic leading-none text-sage transition-transform duration-300 group-hover:-rotate-6">
            M
          </span>
          <span className="font-serif text-xl font-normal tracking-tight">
            Muneeb
          </span>
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

        <LangToggle />
      </nav>

      <motion.div
        className="h-px origin-left bg-sage rtl:origin-right"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
