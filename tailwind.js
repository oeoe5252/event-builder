const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      rose: colors.rose,
      pink: colors.fuchsia,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
