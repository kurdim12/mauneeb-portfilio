export type Engagement = 'full' | 'training';

export interface Project {
  id: string;
  name: { en: string; ar: string };
  city: { en: string; ar: string };
  engagement: Engagement;
}

export const projects: Project[] = [
  {
    id: 'barista',
    name: { en: 'Barista', ar: 'باريستا' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'maria',
    name: { en: 'Maria', ar: 'ماريا' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'ya-fe',
    name: { en: 'Ya Fe', ar: 'يا في' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'melange',
    name: { en: 'Mélange', ar: 'ميلانج' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'nest',
    name: { en: 'Nest', ar: 'نِست' },
    city: { en: 'Aqaba', ar: 'العقبة' },
    engagement: 'full',
  },
  {
    id: 'pure',
    name: { en: 'Pure', ar: 'بيور' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'raw-smith',
    name: { en: 'Raw Smith', ar: 'رو سميث' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'blue',
    name: { en: 'Blue', ar: 'بلو' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'kalshure',
    name: { en: 'Kalshure Coffee', ar: 'كالشور كوفي' },
    city: { en: 'Irbid', ar: 'إربد' },
    engagement: 'full',
  },
  {
    id: 'te-ra',
    name: { en: 'Te Ra Coffee', ar: 'تي را كوفي' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'buffalo',
    name: { en: 'Buffalo Coffee', ar: 'بوفالو كوفي' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
  {
    id: 'ajda',
    name: { en: 'Ajda', ar: 'أجدا' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
  },
];

export const stats = {
  years: 11,
  cafes: 12,
  institutions: 3,
};

export const contact = {
  email: 'hello@muneeb.coffee',
  whatsapp: '+962 7 9000 0000',
  whatsappUrl: 'https://wa.me/962790000000',
  instagram: '@muneeb.coffee',
  instagramUrl: 'https://instagram.com/muneeb.coffee',
};
