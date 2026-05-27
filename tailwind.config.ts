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
    },
  },
  plugins: [],
};

export default config;
