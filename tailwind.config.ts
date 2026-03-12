import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#111111',
        brand: '#0063dc'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        display: ['var(--font-display)', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
