'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/src/navigation';

export default function LangToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: 'en' | 'ar') => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-eyebrow">
      <button
        onClick={() => switchTo('en')}
        className={`transition-opacity hover:opacity-100 ${
          locale === 'en' ? 'opacity-100' : 'opacity-40'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="opacity-30">/</span>
      <button
        onClick={() => switchTo('ar')}
        className={`transition-opacity hover:opacity-100 ${
          locale === 'ar' ? 'opacity-100' : 'opacity-40'
        }`}
        aria-label="التبديل إلى العربية"
      >
        ع
      </button>
    </div>
  );
}
