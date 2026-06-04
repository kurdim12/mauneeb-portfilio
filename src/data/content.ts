export type Engagement = 'full' | 'training';

export interface Project {
  id: string;
  name: { en: string; ar: string };
  city: { en: string; ar: string };
  engagement: Engagement;
  year: number;
  desc: { en: string; ar: string };
  featured?: boolean;
  challenge?: { en: string; ar: string };
  approach?: { en: string; ar: string };
  result?: { en: string; ar: string };
  metric?: { value: string; label: { en: string; ar: string } };
  testimonial?: {
    quote: { en: string; ar: string };
    author: string;
    role: { en: string; ar: string };
  };
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
      ar: 'بناء مفهوم كامل لبار مختص بواجهة مول — محطّات إسبريسو وسايفون وبوّر أوفر، هندسة منيو، وفريق افتتاح تدرّب من الصفر.',
    },
    featured: true,
    challenge: {
      en: 'TODO (La Barista — challenge): describe the operational pain or business goal the owners had before bringing Muneeb in.',
      ar: 'TODO (لا باريستا — التحدي): اشرح المشكلة التشغيلية أو هدف العمل قبل ما يتعاونوا مع منيب.',
    },
    approach: {
      en: 'TODO (La Barista — approach): what Muneeb specifically did — equipment chosen, menu logic, training program, timeline.',
      ar: 'TODO (لا باريستا — المعالجة): شو عمل منيب بالتحديد — المعدّات المختارة، منطق المنيو، برنامج التدريب، الجدول الزمني.',
    },
    result: {
      en: 'TODO (La Barista — result): what changed after launch — concrete outcomes, not adjectives.',
      ar: 'TODO (لا باريستا — النتيجة): شو تغيّر بعد الافتتاح — نتائج ملموسة، مش صفات.',
    },
    metric: {
      value: 'TODO',
      label: {
        en: 'TODO (La Barista — metric label): e.g. "3 weeks empty shell → opening day"',
        ar: 'TODO (لا باريستا — وصف الرقم): مثال "٣ أسابيع من هيكل فاضي ليوم الافتتاح"',
      },
    },
    testimonial: {
      quote: {
        en: 'TODO (La Barista — testimonial): real quote from the owner. Do not invent.',
        ar: 'TODO (لا باريستا — توصية): اقتباس حقيقي من صاحب المشروع. ممنوع الاختراع.',
      },
      author: 'TODO (La Barista — author name)',
      role: {
        en: 'TODO (La Barista — author role)',
        ar: 'TODO (لا باريستا — الدور)',
      },
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
    featured: true,
    challenge: {
      en: 'TODO (Pure — challenge): describe the operational pain or goal before Muneeb came in.',
      ar: 'TODO (بيور — التحدي): اشرح المشكلة التشغيلية أو الهدف قبل تعاونهم مع منيب.',
    },
    approach: {
      en: 'TODO (Pure — approach): what Muneeb specifically did — equipment, menu, training, timeline.',
      ar: 'TODO (بيور — المعالجة): شو عمل منيب بالتحديد — المعدّات، المنيو، التدريب، الجدول الزمني.',
    },
    result: {
      en: 'TODO (Pure — result): concrete outcomes after launch, not adjectives.',
      ar: 'TODO (بيور — النتيجة): نتائج ملموسة بعد الافتتاح، مش صفات.',
    },
    metric: {
      value: 'TODO',
      label: {
        en: 'TODO (Pure — metric label)',
        ar: 'TODO (بيور — وصف الرقم)',
      },
    },
    testimonial: {
      quote: {
        en: 'TODO (Pure — testimonial): real quote from owner. Do not invent.',
        ar: 'TODO (بيور — توصية): اقتباس حقيقي من صاحب المشروع. ممنوع الاختراع.',
      },
      author: 'TODO (Pure — author name)',
      role: {
        en: 'TODO (Pure — author role)',
        ar: 'TODO (بيور — الدور)',
      },
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
    featured: true,
    challenge: {
      en: 'TODO (Raw Smith — challenge): describe the operational pain or goal before Muneeb came in.',
      ar: 'TODO (رو سميث — التحدي): اشرح المشكلة التشغيلية أو الهدف قبل تعاونهم مع منيب.',
    },
    approach: {
      en: 'TODO (Raw Smith — approach): what Muneeb specifically did.',
      ar: 'TODO (رو سميث — المعالجة): شو عمل منيب بالتحديد.',
    },
    result: {
      en: 'TODO (Raw Smith — result): concrete outcomes after launch.',
      ar: 'TODO (رو سميث — النتيجة): نتائج ملموسة بعد الافتتاح.',
    },
    metric: {
      value: 'TODO',
      label: {
        en: 'TODO (Raw Smith — metric label)',
        ar: 'TODO (رو سميث — وصف الرقم)',
      },
    },
    testimonial: {
      quote: {
        en: 'TODO (Raw Smith — testimonial): real quote. Do not invent.',
        ar: 'TODO (رو سميث — توصية): اقتباس حقيقي. ممنوع الاختراع.',
      },
      author: 'TODO (Raw Smith — author name)',
      role: {
        en: 'TODO (Raw Smith — author role)',
        ar: 'TODO (رو سميث — الدور)',
      },
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
    featured: true,
    challenge: {
      en: 'TODO (Blue — challenge): describe the operational pain or goal before Muneeb came in.',
      ar: 'TODO (بلو — التحدي): اشرح المشكلة التشغيلية أو الهدف قبل تعاونهم مع منيب.',
    },
    approach: {
      en: 'TODO (Blue — approach): what Muneeb specifically did.',
      ar: 'TODO (بلو — المعالجة): شو عمل منيب بالتحديد.',
    },
    result: {
      en: 'TODO (Blue — result): concrete outcomes after launch.',
      ar: 'TODO (بلو — النتيجة): نتائج ملموسة بعد الافتتاح.',
    },
    metric: {
      value: 'TODO',
      label: {
        en: 'TODO (Blue — metric label)',
        ar: 'TODO (بلو — وصف الرقم)',
      },
    },
    testimonial: {
      quote: {
        en: 'TODO (Blue — testimonial): real quote. Do not invent.',
        ar: 'TODO (بلو — توصية): اقتباس حقيقي. ممنوع الاختراع.',
      },
      author: 'TODO (Blue — author name)',
      role: {
        en: 'TODO (Blue — author role)',
        ar: 'TODO (بلو — الدور)',
      },
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
    featured: true,
    challenge: {
      en: 'TODO (Te Ra — challenge): describe the operational pain or goal before Muneeb came in.',
      ar: 'TODO (تي را — التحدي): اشرح المشكلة التشغيلية أو الهدف قبل تعاونهم مع منيب.',
    },
    approach: {
      en: 'TODO (Te Ra — approach): what Muneeb specifically did across the floors.',
      ar: 'TODO (تي را — المعالجة): شو عمل منيب بالتحديد بكل الطوابق.',
    },
    result: {
      en: 'TODO (Te Ra — result): concrete outcomes after launch.',
      ar: 'TODO (تي را — النتيجة): نتائج ملموسة بعد الافتتاح.',
    },
    metric: {
      value: 'TODO',
      label: {
        en: 'TODO (Te Ra — metric label)',
        ar: 'TODO (تي را — وصف الرقم)',
      },
    },
    testimonial: {
      quote: {
        en: 'TODO (Te Ra — testimonial): real quote. Do not invent.',
        ar: 'TODO (تي را — توصية): اقتباس حقيقي. ممنوع الاختراع.',
      },
      author: 'TODO (Te Ra — author name)',
      role: {
        en: 'TODO (Te Ra — author role)',
        ar: 'TODO (تي را — الدور)',
      },
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
    featured: true,
    challenge: {
      en: 'TODO (Qahwa Culture — challenge): the brief for a same-roof roastery and coffeehouse. What did the owners need solved?',
      ar: 'TODO (قهوة كلتشر — التحدي): إطار العمل لمحمصة وكوفي هاوس تحت سقف واحد. شو اللي احتاجوا منيب يحلّه؟',
    },
    approach: {
      en: 'TODO (Qahwa Culture — approach): sourcing, roast profiles, bar workflow, training.',
      ar: 'TODO (قهوة كلتشر — المعالجة): الاختيار، بروفايلات التحميص، سير العمل بالبار، التدريب.',
    },
    result: {
      en: 'TODO (Qahwa Culture — result): concrete outcomes after launch.',
      ar: 'TODO (قهوة كلتشر — النتيجة): نتائج ملموسة بعد الافتتاح.',
    },
    metric: {
      value: 'TODO',
      label: {
        en: 'TODO (Qahwa Culture — metric label)',
        ar: 'TODO (قهوة كلتشر — وصف الرقم)',
      },
    },
    testimonial: {
      quote: {
        en: 'TODO (Qahwa Culture — testimonial): real quote. Do not invent.',
        ar: 'TODO (قهوة كلتشر — توصية): اقتباس حقيقي. ممنوع الاختراع.',
      },
      author: 'TODO (Qahwa Culture — author name)',
      role: {
        en: 'TODO (Qahwa Culture — author role)',
        ar: 'TODO (قهوة كلتشر — الدور)',
      },
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
