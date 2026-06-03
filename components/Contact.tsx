'use client';

import { useTranslations } from 'next-intl';
import { contact } from '@/src/data/content';
import Reveal from './Reveal';
import ContactForm from './ContactForm';
import SectionTag from './SectionTag';
import Pattern from './Pattern';

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
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal py-24 text-sand md:py-32"
    >
      <div className="text-sand">
        <Pattern variant="lines" opacity={0.05} />
      </div>

      <div className="container-x relative">
        <Reveal>
          <SectionTag index={7} label={t('eyebrow')} tone="dark" />
          <h2 className="mt-8 max-w-2xl font-serif text-h2 font-light text-sand">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/70">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mb-2">{t('form_alt')}</p>
            <div className="divide-y divide-sand/15 border-t border-sand/15">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group -mx-4 flex items-baseline justify-between gap-4 px-4 py-6 transition-colors duration-300 hover:bg-deep-olive"
                >
                  <span className="eyebrow text-sage">{ch.label}</span>
                  <span className="font-serif text-xl font-light text-sand transition-opacity group-hover:opacity-90">
                    {ch.value}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
