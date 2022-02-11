/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        text: 'var(--color-text)',
        'blue-1': 'var(--color-blue-1)',
        'blue-2': 'var(--color-blue-2)',
        yellow: 'var(--color-yellow)',
      },
      borderWidth: {
        1: '1px',
        header: '12px',
      },
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
  },
  variants: {
    extend: {
      backgroundColor: [],
      fill: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
