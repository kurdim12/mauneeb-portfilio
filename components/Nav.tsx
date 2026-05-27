'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-bone/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="font-serif text-xl font-normal tracking-tight text-charcoal"
        >
          Muneeb
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group relative font-sans text-sm text-charcoal/80 transition-colors hover:text-charcoal"
            >
              {t(link.key)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <LangToggle />
      </nav>
    </header>
  );
}
