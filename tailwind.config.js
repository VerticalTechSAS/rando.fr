const defaultTheme = require('tailwindcss/defaultTheme')

let containerScreens = Object.assign({}, defaultTheme.screens)

// Delete the 2xl breakpoint from the object
delete containerScreens['2xl']

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      screens: containerScreens,
      center: true,
    },
    extend: {
      colors: {
        violet1 : '#5764DB',
        green1 : '#142518',
      },
      boxShadow: {
        'solid1': 'rgb(176 176 176) 0px 0px 0px 1px inset !important',
        'solid2': 'rgb(34, 34, 34) 0px 0px 0px 2px inset !important',
      },
      fontFamily: {
        'serif': ['FreightTextProBook', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1.2rem',
          }
        }
      }
    }
  },
  plugins: [],
}

