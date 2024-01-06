/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        card: {
          from: { transform: 'translate(0, 100px)' },
          to: { transform: 'translate(0)' },
        },
      },
      animation: {
        card: 'card 0.75s 1 ease-in-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.title-1': {
          lineHeight: '48px',
          letterSpacing: '-0.6px',
          fontSize: '36px',
        },
        '.title-2': {
          '@apply title-1': {},
          lineHeight: '44px',
          letterSpacing: '-0.6px',
          fontSize: '32px',
        },
        '.title-3': {
          lineHeight: '38px',
          letterSpacing: '-0.6px',
          fontSize: '28px',
        },
        '.title-4': {
          lineHeight: '34px',
          letterSpacing: '-0.6px',
          fontSize: '24px',
        },
        '.title-5': {
          lineHeight: '30px',
          letterSpacing: '-0.6px',
          fontSize: '20px',
        },
        '.title-6': {
          lineHeight: '26px',
          letterSpacing: '-0.6px',
          fontSize: '16px',
        },
      });
    }),
  ],
};
