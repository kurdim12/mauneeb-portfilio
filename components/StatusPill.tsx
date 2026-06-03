'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'at_bar' | 'replying_soon' | 'replying_tomorrow';

function ammanStatus(): Status {
  // Amman = UTC+3 year-round (no DST since 2022)
  const ammanHour = (new Date().getUTCHours() + 3) % 24;
  if (ammanHour >= 9 && ammanHour < 14) return 'at_bar';
  if (ammanHour >= 14 && ammanHour < 21) return 'replying_soon';
  return 'replying_tomorrow';
}

export default function StatusPill() {
  const t = useTranslations('status');
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(ammanStatus());
    const id = setInterval(() => setStatus(ammanStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    // Reserve space, avoid layout shift
    return <span className="inline-block h-7 min-w-[180px]" />;
  }

  const dotColor =
    status === 'at_bar'
      ? 'bg-sage'
      : status === 'replying_soon'
        ? 'bg-sage/70'
        : 'bg-charcoal/35';

  const pulses = status === 'at_bar';

  return (
    <span className="inline-flex items-center gap-2 border border-charcoal/15 bg-bone/70 px-3 py-1.5 font-sans text-[11px] tracking-wide text-charcoal/80 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        {pulses && (
          <span
            className={`absolute inset-0 animate-ping rounded-full ${dotColor} opacity-70`}
          />
        )}
        <span
          className={`relative h-2 w-2 rounded-full ${dotColor}`}
        />
      </span>
      {t(status)}
    </span>
  );
}
