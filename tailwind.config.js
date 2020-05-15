/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      heading: ['Josefin Sans', 'sans-serif'],
      body: ['PT Sans', 'sans-serif'],
      para: ['LeonSans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#2f2653',
        secondary: '#8cd5f5',
        lilac: '#79738e',
        'lilac-dark': '#79738e',
        sky: '#DDF5F8',
        cream: '#F7F3E5',
        pink: '#FCCFCB',
      },
      zIndex: {
        '-1': -1,
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        110: 110,
      },
    },
  },
  variants: {},
  plugins: [],
};
