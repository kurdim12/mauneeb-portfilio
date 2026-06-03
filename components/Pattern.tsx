'use client';

import { useId } from 'react';

export default function Pattern({
  variant = 'dots',
  className = '',
  opacity = 0.06,
}: {
  variant?: 'dots' | 'grid' | 'lines';
  className?: string;
  opacity?: number;
}) {
  const id = useId().replace(/:/g, '');

  let defs;
  if (variant === 'dots') {
    defs = (
      <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    );
  } else if (variant === 'grid') {
    defs = (
      <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
        <path
          d="M 56 0 L 0 0 0 56"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </pattern>
    );
  } else {
    defs = (
      <pattern
        id={id}
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(-30)"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="40"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </pattern>
    );
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
      aria-hidden
    >
      <svg width="100%" height="100%">
        <defs>{defs}</defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
