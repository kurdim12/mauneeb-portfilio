'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { contact } from '@/src/data/content';

export default function ContactForm() {
  const t = useTranslations('contact');
  const types = [
    t('type_concept'),
    t('type_fix'),
    t('type_training'),
    t('type_other'),
  ];
  const [name, setName] = useState('');
  const [type, setType] = useState(types[0]);
  const [message, setMessage] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi Muneeb! I'm ${name || '—'}.\nI need: ${type}.\n${message}`.trim();
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const field =
    'w-full border-b border-sand/25 bg-transparent py-3 font-sans text-sand placeholder:text-sand/40 focus:border-sage focus:outline-none transition-colors';

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t('form_name')}
        className={field}
      />

      <div>
        <p className="eyebrow mb-3">{t('form_type')}</p>
        <div className="flex flex-wrap gap-2">
          {types.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setType(opt)}
              className={`border px-4 py-2 font-sans text-sm transition-colors ${
                type === opt
                  ? 'border-sage bg-sage text-bone'
                  : 'border-sand/25 text-sand/70 hover:border-sand/60'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t('form_message')}
        rows={3}
        className={`${field} resize-none`}
      />

      <button
        type="submit"
        className="group inline-flex items-center gap-2 bg-sand px-7 py-3.5 font-sans text-sm text-charcoal transition-opacity hover:opacity-85"
      >
        {t('form_send')}
        <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
          &rarr;
        </span>
      </button>
    </form>
  );
}
