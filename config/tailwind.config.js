const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './app/components/**/*'

  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Readex Pro', 'sans-serif'],
        light: ['Heebo', 'sans-serif'],
        sans: ['Inter','sans-serif']
      },
    colors: {
      primary: {
        DEFAULT: '#080010',
        '50': '#B56CFF',
        '100': '#AB57FF',
        '200': '#972FFF',
        '300': '#8206FF',
        '400': '#6E00DC',
        '500': '#5A00B3',
        '600': '#45008A',
        '700': '#310062',
        '800': '#150c1b',
        '900': '#080010'
      },
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ]
}
