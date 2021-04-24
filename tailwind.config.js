const brandRed = '#ee88a1';

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.njk',
    './src/**/*.js',
    './src/**/*.md',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-red': brandRed,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
