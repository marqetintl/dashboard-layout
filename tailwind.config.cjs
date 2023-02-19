/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.neutral,
    },
    extend: {
      colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.neutral,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        emerald: colors.emerald,
        purple: colors.violet,
      },
    },
  },
  plugins: [],
};
