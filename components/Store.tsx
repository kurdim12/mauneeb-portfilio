'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from './Reveal';

export default function Store() {
  const t = useTranslations('store');

  return (
    <section id="store" className="bg-bone py-24 md:py-32">
      <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow mb-5">{t('eyebrow')}</p>
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-charcoal md:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
            {t('intro')}
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 font-sans text-sm text-charcoal"
          >
            <span className="relative">
              {t('cta')}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full" />
            </span>
            <span className="text-sage transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
              &rarr;
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-square w-full overflow-hidden bg-military-olive/20">
            <Image
              src="/images/store-1.jpg"
              alt="Coffee tools and essentials"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
