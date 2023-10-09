/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    spacing: {
      13: '1px',
      14: '2px',
      15: '4px',
      16: '8px',
      17: '16px',
      18: '24px',
      19: '32px',
      20: '40px',
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
