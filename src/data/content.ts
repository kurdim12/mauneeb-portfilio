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
      en: "A mall-front specialty bar where the room had to read 'serious coffee' in the first three seconds — and the equipment, menu, and a launch team all had to be ready by opening week.",
      ar: 'بار مختص بواجهة مول، لازم المكان يحكي «قهوة جدية» بأول ثلاث ثوانٍ — والمعدّات والمنيو وفريق الافتتاح كلّن لازم يكونوا جاهزين ليوم الافتتاح.',
    },
    approach: {
      en: 'Concepted the bar around three brew stations — espresso, syphon, pour-over — so the program could grow without re-engineering. Dialled the menu, ordered the kit, and trained the launch team from zero to floor-ready before doors opened.',
      ar: 'وضعت مفهوم البار حول ثلاث محطّات تحضير — إسبريسو، سايفون، بوّر أوفر — مشان البرنامج يقدر يكبر بدون ما نعيد هندسة المكان. ضبطت المنيو، اخترت العدّة، ودرّبت فريق الافتتاح من الصفر لمستوى الجاهزية قبل ما تفتح الأبواب.',
    },
    result: {
      en: 'Opened on schedule with a specialty program the new team could run unsupervised — and a bar layout that still holds up to mall foot-traffic years later.',
      ar: 'فتح المكان بالتوقيت، بفريق قادر يدير البرنامج المختص لحاله — وبار لسا ثابت تحت ضغط حركة المول لسنين.',
    },
    metric: {
      value: '3',
      label: {
        en: 'brew stations under one bar',
        ar: 'محطات تحضير تحت بار واحد',
      },
    },
    testimonial: {
      quote: {
        en: 'This was the room that taught me launch day is won three weeks earlier.',
        ar: 'هاي الغرفة اللي علّمتني إنه يوم الافتتاح بينربح قبله بثلاث أسابيع.',
      },
      author: 'Muneeb',
      role: {
        en: 'On the build',
        ar: 'عن المشروع',
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
      en: 'Two cafés in one room. Mornings ask for restraint; nights demand volume. The trick was making both look effortless from the same bar.',
      ar: 'كافيهان بنفس الغرفة. الصبح بدّه هدوء؛ المسا بدّه حركة. الحيلة إنه الإثنين يطلعوا سهلين من نفس البار.',
    },
    approach: {
      en: 'Specced grinders and machines for the peak shift, not the quiet one. Wrote a menu that bridged the day — a single dialed espresso pulling double duty, a roast list that worked hot and cold. Trained the team to switch tempos without switching standards.',
      ar: 'حدّدت المطاحن والمكنات على الشيفت الأقوى، مش على الأهدأ. كتبت منيو يجسر اليوم — إسبريسو واحد مضبوط يقوم بدورين، قائمة تحميص تشتغل ساخن وبارد. ودرّبت الفريق إنه يبدّل الإيقاع بدون ما يبدّل المعيار.',
    },
    result: {
      en: 'A room that earns its quiet at 9 AM and its rush at 9 PM, served by one team holding one line.',
      ar: 'غرفة تستحق هدوءها الساعة ٩ الصبح وحركتها الساعة ٩ بالليل، بفريق واحد ماسك خط واحد.',
    },
    metric: {
      value: '12h',
      label: {
        en: 'one standard, open to close',
        ar: 'معيار واحد، من الفتح للإغلاق',
      },
    },
    testimonial: {
      quote: {
        en: 'The hardest rooms are the ones that never slow down. Pure made calm look easy.',
        ar: 'أصعب المحلات اللي ما بتهدا. بيور خلّى الهدوء يبيّن سهل.',
      },
      author: 'Muneeb',
      role: {
        en: 'On the build',
        ar: 'عن المشروع',
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
      en: "The brand was a single phrase: 'a matter of coffee.' The bar had to look that simple from the floor — and stay that disciplined behind it.",
      ar: 'البراند جملة وحدة: «قضية قهوة». البار لازم يطلع بنفس البساطة من بَرّا، ويضل بنفس الانضباط من جوّا.',
    },
    approach: {
      en: 'Cut the menu down to what mattered. Built the bar workflow as a single repeatable rhythm. Trained the team so the same shot, pulled the same way, became the only shot.',
      ar: 'قطعت المنيو لحدّ اللي بيهم. بنيت سير البار كإيقاع واحد قابل للتكرار. ودرّبت الفريق إنه نفس الشوت، بنفس الطريقة، يصير الشوت الوحيد.',
    },
    result: {
      en: 'Fewer drinks, sharper. The kind of place where ordering an Americano feels like a choice, not a default.',
      ar: 'مشروبات أقل، وأحدّ. مكان لمّا تطلب فيه أمريكانو بحس إنه خيار، مش افتراضي.',
    },
    metric: {
      value: '01',
      label: {
        en: 'repeatable bar rhythm',
        ar: 'إيقاع بار واحد قابل للتكرار',
      },
    },
    testimonial: {
      quote: {
        en: 'We cut until only coffee was left. That was the concept.',
        ar: 'قصّينا لحد ما ضلّت بس القهوة. هاد كان المفهوم.',
      },
      author: 'Muneeb',
      role: {
        en: 'On the build',
        ar: 'عن المشروع',
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
      en: 'Empty walls. Opening date locked. No operational backbone — concept, equipment, menu, and team all had to land in the same window.',
      ar: 'جدران فاضية. تاريخ افتتاح ثابت. بدون عمود فقري تشغيلي — المفهوم والمعدّات والمنيو والفريق كلّن لازم يهبطوا بنفس النافذة.',
    },
    approach: {
      en: "Ran it as one project, not four. Positioning and bar layout first. Equipment ordered against the menu we were still writing. Training scheduled in parallel — so opening day wouldn't be a first day.",
      ar: 'أدرتها كمشروع واحد، مش أربعة. الموقع وتصميم البار أوّلاً. المعدّات اتطلبت على أساس المنيو اللي بعدنا عم نكتبه. التدريب اتجدول بالموازي — مشان يوم الافتتاح ما يكون أوّل يوم.',
    },
    result: {
      en: 'Doors opened and the room moved like it had been running for months.',
      ar: 'فتحت الأبواب والغرفة عم تتحرّك كإنها شغّالة من شهور.',
    },
    metric: {
      value: '0→1',
      label: {
        en: 'empty shell to opening day',
        ar: 'من هيكل فاضي ليوم الافتتاح',
      },
    },
    testimonial: {
      quote: {
        en: 'An empty shell is my favourite client.',
        ar: 'الهيكل الفاضي أحبّ زبون عندي.',
      },
      author: 'Muneeb',
      role: {
        en: 'On the build',
        ar: 'عن المشروع',
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
      en: 'Two service points. One brand. A team that had to deliver competition-level cups across both — fresh out of training.',
      ar: 'نقطتي خدمة. براند واحد. فريق لازم يقدّم فناجين بمستوى المسابقات بكلتيهن — وهو لسا طالع من التدريب.',
    },
    approach: {
      en: 'Built the brew bar as the centre of gravity. Wrote a menu that worked identically at every floor. Trained the team to a standard you could put in front of a judge.',
      ar: 'بنيت بار التحضير كمركز ثقل. كتبت منيو يشتغل بنفس الطريقة بكل طابق. ودرّبت الفريق على مستوى تحطّه قدّام محكّم.',
    },
    result: {
      en: "Floor-to-floor consistency, with a team trained to the level you'd put in a competition.",
      ar: 'اتساق من طابق لطابق، بفريق مدرّب لمستوى تحطّه بمسابقة.',
    },
    metric: {
      value: '2',
      label: {
        en: 'service floors, one standard',
        ar: 'طابقا خدمة، معيار واحد',
      },
    },
    testimonial: {
      quote: {
        en: "Same cup on every floor — that's the whole job.",
        ar: 'نفس الكوب بكل طابق — هاد كل الشغل.',
      },
      author: 'Muneeb',
      role: {
        en: 'On the build',
        ar: 'عن المشروع',
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
      en: 'Roastery and coffeehouse in the same room. Whatever came off the green-bean shelf would land in a cup ten metres away — by the same hands.',
      ar: 'محمصة وكوفي هاوس بنفس الغرفة. اللي بنختاره من رف البن الأخضر بنشوفه بكوب على بُعد عشر أمتار — وبنفس الإيدين.',
    },
    approach: {
      en: 'Set the sourcing logic for the cups we wanted to pour. Built roast profiles that translated cleanly to the bar. Designed the bar to receive them. Trained the team across the whole chain — green bean to finished drink.',
      ar: 'حدّدت منطق الاختيار للكوب اللي بدنا نقدّمه. بنيت بروفايلات تحميص بتترجم نظيف للبار. صمّمت البار يستقبلها. ودرّبت الفريق على السلسلة كاملة — من البن الأخضر للمشروب المقدّم.',
    },
    result: {
      en: 'Coffee roasted and served by the same hands, to one standard at both ends of the room.',
      ar: 'قهوة بتنحمص وبتنقدّم بنفس الإيدين، بمعيار واحد على طرفي الغرفة.',
    },
    metric: {
      value: '1',
      label: {
        en: 'roof — roastery + coffeehouse',
        ar: 'سقف واحد — محمصة وكوفي هاوس',
      },
    },
    testimonial: {
      quote: {
        en: 'When the roaster and the bar share a wall, nobody can hide.',
        ar: 'لمّا المحمصة والبار يتقاسموا حيط، ما حدا بيقدر يختبي.',
      },
      author: 'Muneeb',
      role: {
        en: 'On the build',
        ar: 'عن المشروع',
      },
    },
  },
];

export const stats = {
  years: 11,
  cafes: 12,
  institutions: 3,
};

// Muneeb's house espresso recipe — the standard he trains every team to.
// TODO(owner): confirm or adjust these numbers to the real house recipe.
export const houseRecipe = {
  dose: '18g',
  yield: '36g',
  time: '27s',
  temp: '93.5°',
};

export const contact = {
  email: 'hello@muneeb.coffee',
  whatsapp: '+962 7 8976 7641',
  whatsappUrl: 'https://wa.me/962789767641',
  whatsappNumber: '962789767641',
  instagram: '@muneeb_e97',
  instagramUrl: 'https://www.instagram.com/muneeb_e97',
};
