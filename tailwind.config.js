/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const myClass = plugin(function ({ addUtilities }){
  addUtilities({
    '.my-rotate-y-180':{
      transform: "rotateY(180deg)"
    },
    '.preserve-3d':{
      transformStyle: 'preserve-3d',
    },
    '.perspective':{
      perspective: '1000px'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    }
  })
})

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cool': '5px 7px 0px 0px rgb(17 24 49)',
        'cool2': '5px 7px 0px 0px rgb(0 0 0)',
        'cool3': '5px 7px 0px 0px rgb(255 255 255)',
      },
      keyframes:{
        fadeAnim: {
          '0%': {
            opacity: '0%'
          },
          '100%': {
            opacity: '100%'
          }
        },
      },
      animation: {
        fadeAnim: 'fadeAnim 1s ease-out',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    myClass
  ],
}