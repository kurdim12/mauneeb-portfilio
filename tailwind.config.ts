import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0D0D0D',
        'deep-olive': '#1F2419',
        'military-olive': '#3D4A2A',
        sage: '#6B7B47',
        sand: '#E8E4D8',
        bone: '#F5F2EA',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-rubik)', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      fontSize: {
        hero: ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        h2: ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        stat: ['clamp(3rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-rtl': 'marquee-rtl 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
