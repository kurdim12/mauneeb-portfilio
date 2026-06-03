'use client';

import { useTranslations } from 'next-intl';
import Pattern from './Pattern';
import { Monogram } from './Wordmark';
import { contact } from '@/src/data/content';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-charcoal text-sand">
      <div className="text-sand">
        <Pattern variant="dots" opacity={0.05} />
      </div>

      <div className="container-x relative">
        {/* Big brand moment */}
        <div className="border-b border-sand/15 py-20 text-center md:py-28">
          <div className="mx-auto inline-flex items-center justify-center">
            <Monogram className="h-10 w-10" />
          </div>
          <p
            className="mt-8 font-serif font-light leading-none text-sand"
            style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', letterSpacing: '-0.03em' }}
          >
            Munee<span className="italic font-light text-sage">b</span>
          </p>
          <p className="mt-6 font-serif text-xl italic text-sage md:text-2xl">
            {t('tagline')}
          </p>
        </div>

        {/* Links + contact */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2 font-sans text-sm">
              {(['work', 'teaching', 'about', 'store', 'contact'] as const).map(
                (k) => (
                  <li key={k}>
                    <a
                      href={`#${k}`}
                      className="text-sand/70 transition-colors hover:text-sand"
                    >
                      {nav(k)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Reach out</p>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand/70 transition-colors hover:text-sand"
                >
                  WhatsApp · {contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand/70 transition-colors hover:text-sand"
                >
                  Instagram · {contact.instagram}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sand/70 transition-colors hover:text-sand"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <p className="eyebrow mb-4">Amman · Jordan</p>
            <p className="font-sans text-sm text-sand/70">
              Specialty coffee
              <br />
              concept builder & trainer
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-sand/15 py-6 font-sans text-xs text-sand/45 md:flex-row">
          <p>
            &copy; {year} Muneeb. {t('rights')}
          </p>
          <p className="tracking-eyebrow uppercase">
            Built with care in Amman
          </p>
        </div>
      </div>
    </footer>
  );
}
