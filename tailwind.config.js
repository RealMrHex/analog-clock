const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '*.html',
    'src/js/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.slate,
        success: colors.green,
        danger: colors.red,
        info: colors.sky,
        warning: colors.amber
      }
    },
  },
  plugins: [],
}

