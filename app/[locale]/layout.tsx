import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Fraunces, Rubik, Inter } from 'next/font/google';
import { locales, type Locale } from '@/src/i18n';
import '../globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500'],
  variable: '--font-rubik',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muneeb.coffee'),
  title: 'Muneeb — Specialty Coffee Concept Builder & Trainer',
  description:
    'I build coffee concepts that outlive the trend. Specialty coffee concept builder and trainer based in Amman, Jordan.',
  openGraph: {
    title: 'Muneeb — Specialty Coffee Concept Builder & Trainer',
    description: 'I build coffee concepts that outlive the trend.',
    type: 'website',
    locale: 'en',
    alternateLocale: 'ar',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muneeb — Specialty Coffee Concept Builder & Trainer',
    description: 'I build coffee concepts that outlive the trend.',
    images: ['/og.png'],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${fraunces.variable} ${inter.variable} ${rubik.variable}`}
    >
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
