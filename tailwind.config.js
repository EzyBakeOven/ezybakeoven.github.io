/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        black: '#000000',
        darkBlue: '#14213D',
        orange: '#FCA311',
        grey: '#E5E5E5',
        white: '#FFFFFF',
        ...colors, // include all default Tailwind colors
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', 'serif', ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
