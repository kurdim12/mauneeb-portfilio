export type Engagement = 'full' | 'training';

export interface Project {
  id: string;
  name: { en: string; ar: string };
  city: { en: string; ar: string };
  engagement: Engagement;
  year: number;
  desc: { en: string; ar: string };
}

export const projects: Project[] = [
  {
    id: 'barista',
    name: { en: 'La Barista', ar: 'لا باريستا' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2016,
    desc: {
      en: 'Full concept build for a mall-front specialty bar — espresso program, syphon and pour-over stations, menu architecture, and a launch team trained from zero.',
      ar: 'بناء مفهوم كامل لبار مختص بواجهة مول — برنامج إسبريسو، محطّات سايفون وبوّر أوفر، هندسة منيو، وفريق افتتاح تدرّب من الصفر.',
    },
  },
  {
    id: 'maria',
    name: { en: 'Maria', ar: 'ماريا' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2017,
    desc: {
      en: 'Shaped a neighbourhood specialty house end to end: bar layout, equipment spec, a signature drink menu, and barista onboarding.',
      ar: 'شكّلت بيت قهوة مختص بالحَي من الألف للياء: ترتيب البار، تحديد المعدّات، منيو مشروبات مميّزة، وتأهيل الباريستا.',
    },
  },
  {
    id: 'ya-fe',
    name: { en: 'Yafa', ar: 'يافا' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2018,
    desc: {
      en: 'Concept and bar design with a tight, repeatable menu built for speed without losing the specialty edge.',
      ar: 'مفهوم وتصميم بار مع منيو مركّز وقابل للتكرار، مبني للسرعة بدون ما يخسر روح القهوة المختصة.',
    },
  },
  {
    id: 'melange',
    name: { en: 'Mélange', ar: 'ميلانج' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2019,
    desc: {
      en: 'Designed the coffee program and trained the floor for a design-led café — from grinder dialing to service standards.',
      ar: 'صمّمت برنامج القهوة ودرّبت الفريق لكافيه بطابع تصميمي — من ضبط المطحنة لمعايير الخدمة.',
    },
  },
  {
    id: 'nest',
    name: { en: 'Nest', ar: 'نِست' },
    city: { en: 'Aqaba', ar: 'العقبة' },
    engagement: 'full',
    year: 2019,
    desc: {
      en: 'Built the specialty offering for a coastal café in Aqaba, tuned for high-volume seasonal traffic.',
      ar: 'بنيت العرض المختص لكافيه ساحلي بالعقبة، مظبوط لضغط الموسم العالي.',
    },
  },
  {
    id: 'pure',
    name: { en: 'Pure', ar: 'بيور' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2020,
    desc: {
      en: 'Equipment selection, menu, and staff training for a refined all-day café and roastery space.',
      ar: 'اختيار المعدّات والمنيو وتدريب الفريق لمساحة كافيه ومحمصة راقية تشتغل طول اليوم.',
    },
  },
  {
    id: 'raw-smith',
    name: { en: 'Raw Smith', ar: 'رو سميث' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2021,
    desc: {
      en: 'A matter of coffee concept — built the bar workflow and menu around a minimalist, coffee-first identity.',
      ar: 'مفهوم قهوة أولاً — بنيت سير العمل بالبار والمنيو حول هوية بسيطة محورها القهوة.',
    },
  },
  {
    id: 'blue',
    name: { en: 'Blue', ar: 'بلو' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2022,
    desc: {
      en: 'Concept, equipment, and training package that took the room from empty shell to opening day.',
      ar: 'باقة مفهوم ومعدّات وتدريب أخذت المكان من هيكل فاضي ليوم الافتتاح.',
    },
  },
  {
    id: 'te-ra',
    name: { en: 'Te Ra Coffee', ar: 'تي را كوفي' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2023,
    desc: {
      en: 'Full build for a modern multi-floor concept — brew bar, menu, and a team trained to competition standards.',
      ar: 'بناء كامل لمفهوم حديث متعدّد الطوابق — بار تحضير، منيو، وفريق مدرّب لمستوى المسابقات.',
    },
  },
  {
    id: 'buffalo',
    name: { en: 'Buffalo Coffee', ar: 'بوفالو كوفي' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2024,
    desc: {
      en: 'Designed the coffee program and onboarded the team for a high-traffic Amman café.',
      ar: 'صمّمت برنامج القهوة وأهّلت الفريق لكافيه عالي الحركة بعمّان.',
    },
  },
  {
    id: 'ajda',
    name: { en: 'Ajda', ar: 'أجدا' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2024,
    desc: {
      en: 'Concept-to-launch build: bar design, equipment, menu, and pre-opening training.',
      ar: 'بناء من المفهوم للافتتاح: تصميم بار، معدّات، منيو، وتدريب ما قبل الافتتاح.',
    },
  },
  {
    id: 'qahwa-culture',
    name: { en: 'Qahwa Culture', ar: 'قهوة كلتشر' },
    city: { en: 'Amman', ar: 'عمّان' },
    engagement: 'full',
    year: 2025,
    desc: {
      en: 'Roastery and coffeehouse build under one roof — green-bean sourcing, roast profiling, bar design, menu, and the team trained end to end.',
      ar: 'بناء محمصة وكوفي هاوس تحت سقف واحد — اختيار البن الأخضر، ضبط بروفايلات التحميص، تصميم البار، المنيو، وفريق مدرّب من الألف للياء.',
    },
  },
];

export const stats = {
  years: 11,
  cafes: 12,
  institutions: 3,
};

export const contact = {
  email: 'hello@muneeb.coffee',
  whatsapp: '+962 7 8976 7641',
  whatsappUrl: 'https://wa.me/962789767641',
  whatsappNumber: '962789767641',
  instagram: '@muneeb_e97',
  instagramUrl: 'https://www.instagram.com/muneeb_e97',
};
