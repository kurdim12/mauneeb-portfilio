'use client';

import Image from 'next/image';
import { useImageAvailable } from './MediaProvider';

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h << 5) - h + seed.charCodeAt(i);
  return Math.abs(h);
}

const PRESETS = [
  { from: '#3D4A2A', to: '#1F2419', glow: '#6B7B47', gx: '28%', gy: '24%' },
  { from: '#1F2419', to: '#0D0D0D', glow: '#3D4A2A', gx: '72%', gy: '32%' },
  { from: '#6B7B47', to: '#3D4A2A', glow: '#E8E4D8', gx: '30%', gy: '70%' },
  { from: '#2A3320', to: '#1F2419', glow: '#6B7B47', gx: '65%', gy: '68%' },
  { from: '#3D4A2A', to: '#0D0D0D', glow: '#6B7B47', gx: '50%', gy: '20%' },
];

export default function Media({
  src,
  alt,
  sizes,
  priority,
  seed,
  initial,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  seed: string;
  initial: string;
  className?: string;
  imgClassName?: string;
}) {
  const available = useImageAvailable(src);
  const preset = PRESETS[hash(seed) % PRESETS.length];

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      {/* Designed placeholder — sits behind, shows through when no real photo */}
      <div
        aria-hidden
        className="grain absolute inset-0"
        style={{
          background: `radial-gradient(120% 120% at ${preset.gx} ${preset.gy}, ${preset.glow}33 0%, transparent 45%), linear-gradient(150deg, ${preset.from} 0%, ${preset.to} 100%)`,
        }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center font-serif font-light leading-none text-sand/15"
          style={{ fontSize: 'clamp(5rem, 22vw, 12rem)' }}
        >
          {initial}
        </span>
        <span className="absolute inset-3 border border-sand/10" />
      </div>

      {available && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imgClassName ?? ''}`}
        />
      )}
    </div>
  );
}
