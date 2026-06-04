import type { MetadataRoute } from 'next';

const SITE_URL = 'https://muneeb.coffee';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/`,
          ar: `${SITE_URL}/ar`,
        },
      },
    },
    {
      url: `${SITE_URL}/ar`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
