'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import Media from './Media';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="bg-bone py-24 md:py-32">
      <div className="container-x grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <Media
            src="/images/about.jpg"
            alt="Muneeb"
            seed="about-portrait"
            initial="M"
            sizes="(max-width: 768px) 100vw, 40vw"
            className="aspect-[3/4] w-full"
          />
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <p className="eyebrow mb-5">{t('eyebrow')}</p>
          <h2 className="font-serif text-h2 font-light text-charcoal">
            {t('title')}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/75">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p className="font-serif text-xl italic leading-relaxed text-sage md:text-2xl">
              {t('p3')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
