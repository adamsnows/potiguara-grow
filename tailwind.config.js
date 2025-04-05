/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./**/*.liquid', './assets/**/*.js'],

  theme: {
    extend: {
      colors: {
        primary: '#425C31',
        primaryLight: '#5D7E43',
        leaf: '#7A9F5F',
        beige: '#F2F1E9',
        soil: '#8B6D4B',
        dryLeaf: '#B0A89F',
        mossBlack: '#1E1E1B',
      },
    },
  },

  plugins: [],
};
