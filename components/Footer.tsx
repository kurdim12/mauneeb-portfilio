'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pb-12 pt-4 text-sand">
      <div className="container-x flex flex-col gap-6 border-t border-sand/15 pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl font-normal text-sand">Muneeb</p>
          <p className="mt-2 max-w-sm font-serif text-base italic text-sage">
            {t('tagline')}
          </p>
        </div>
        <p className="font-sans text-xs text-sand/50">
          &copy; {year} Muneeb. {t('rights')}
        </p>
      </div>
    </footer>
  );
}
