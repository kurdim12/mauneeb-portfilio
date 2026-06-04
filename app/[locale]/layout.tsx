import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { Fraunces, Rubik, Inter } from 'next/font/google';
import { locales, type Locale } from '@/src/i18n';
import { contact } from '@/src/data/content';
import '../globals.css';

const SITE_URL = 'https://muneeb.coffee';

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const isAr = locale === 'ar';
  const pagePath = isAr ? '/ar' : '/';

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: pagePath,
      languages: {
        en: '/',
        ar: '/ar',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('og_description'),
      type: 'website',
      locale: isAr ? 'ar_JO' : 'en_US',
      alternateLocale: isAr ? 'en_US' : 'ar_JO',
      url: pagePath,
      images: [{ url: '/og.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('og_description'),
      images: ['/og.png'],
    },
    robots: { index: true, follow: true },
  };
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
  const t = await getTranslations({ locale, namespace: 'meta' });
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muneeb',
    jobTitle: 'Specialty Coffee Concept Builder & Trainer',
    url: SITE_URL,
    image: `${SITE_URL}/images/about.jpg`,
    description: t('description'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amman',
      addressCountry: 'JO',
    },
    sameAs: [contact.instagramUrl],
  };

  const businessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Muneeb · Specialty Coffee Consultancy',
    description: t('description'),
    url: SITE_URL,
    image: `${SITE_URL}/og.png`,
    telephone: contact.whatsapp,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amman',
      addressCountry: 'JO',
    },
    areaServed: { '@type': 'Country', name: 'Jordan' },
    sameAs: [contact.instagramUrl],
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
        />
      </body>
    </html>
  );
}
