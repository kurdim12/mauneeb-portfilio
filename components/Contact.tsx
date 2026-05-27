'use client';

import { useTranslations } from 'next-intl';
import { contact } from '@/src/data/content';
import Reveal from './Reveal';

export default function Contact() {
  const t = useTranslations('contact');

  const channels = [
    {
      label: t('email'),
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      label: t('whatsapp'),
      value: contact.whatsapp,
      href: contact.whatsappUrl,
    },
    {
      label: t('instagram'),
      value: contact.instagram,
      href: contact.instagramUrl,
    },
  ];

  return (
    <section id="contact" className="bg-charcoal py-24 text-sand md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">{t('eyebrow')}</p>
          <h2 className="max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-sand md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/70">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t border-sand/15 md:grid-cols-3">
          {channels.map((ch, i) => (
            <Reveal key={ch.label} delay={i * 0.1}>
              <a
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block border-b border-sand/15 px-0 py-8 transition-colors duration-300 hover:bg-deep-olive md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0 rtl:md:border-l rtl:md:border-r-0 rtl:md:last:border-l-0"
              >
                <p className="eyebrow mb-3 text-sage">{ch.label}</p>
                <p className="font-serif text-2xl font-light text-sand transition-opacity group-hover:opacity-90">
                  {ch.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
