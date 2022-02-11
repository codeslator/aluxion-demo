const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '355px',
      ...defaultTheme.screens,
    },
    extend: {
    },
  },
  plugins: [],
}
