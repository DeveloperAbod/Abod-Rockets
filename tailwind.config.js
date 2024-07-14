/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/js/*.js'],
  theme: {
    extend: {
      fontFamily:{
        'Tajawal':['Tajawal'],
        'Rubik':['Rubik']

        

      },
      colors:{
        papayawhip:{
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark:'#fee5c',
        }
      },
      screens:{
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes:{
        'open-menu':{
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation:{
        'open-menu':'open-menu 0.5 ease-in-out forward',
      }
    },
  },
  plugins: [],
  darkMode: 'class', // or 'media' if you prefer to use the system preference

}

