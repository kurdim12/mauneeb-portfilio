'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import Media from './Media';

export default function Craft() {
  const t = useTranslations('craft');

  return (
    <section className="bg-deep-olive py-24 text-sand md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-5">{t('eyebrow')}</p>
          <h2 className="max-w-3xl font-serif text-h2 font-light text-sand">
            {t('title')} <span className="italic text-sage">{t('title_accent')}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/70">
            {t('intro')}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delay={i * 0.1}>
              <Media
                src={`/images/craft/${n}.jpg`}
                alt={`Latte art ${n}`}
                seed={`craft-${n}`}
                initial="·"
                sizes="(max-width: 640px) 100vw, 33vw"
                className="aspect-[4/5] w-full"
                imgClassName="transition-transform duration-[900ms] ease-expo hover:scale-[1.03]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
