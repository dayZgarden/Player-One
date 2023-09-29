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
      fontFamily: {
        DynaPuff: ['DynaPuff', 'cursive'],
        Rubik: ['Rubik Mono One', 'sans-serif'],
        Bowl: ['Rubik Mono One', 'sans-serif']
      },
      backgroundImage: {
        'space2': 'url(./assets/space2.jpg)',
        'trident': 'url(./assets/trident.png)',
        'pos' : 'url(./assets/pos.jpg)',
      },
      boxShadow: {
        'cool': '5px 7px 0px 0px rgb(17 24 49)',
        'cool2': '2px 5px 0px 0px rgb(0 0 0)',
        'cool3': '5px 7px 0px 0px rgb(195 195 195)',
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
        blob: {
          '0%' :{
            transform: ' scale(1)',
          },
          '33%' : {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%' : {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%' : {
            transform: ' scale(1)',
          },
        },
        zipper: {
          '0%' : {
            border : '2px solid #61ffda',
          },
          '33%' : {
            border: '2px solid #7b61ff'
          },
          '66%' : { 
            border: '2px solid #fc61ff' 
          },
          '100%' : {
            border: '2px solid #7b61ff'
          },
        },
        topToBottom: {
          '0%' : {
            transform: 'translateY(-100%)'
          },
          '100%' : {
            transform: 'translateY(0%)'
        },
        },
        bottomToTop: {
          '0%' : {
            transform: 'translateY(100%)'
          },
          '100%' : {
            transform: 'translateY(0%)'
          },
      },
      leftToRight: {
        '0%' : {
          transform: 'translateX(-120%)'
        },
        '70%' : {
          transform: 'translateX(5%)'
        },
        '100%' : {
          transform: 'translateX(0%)'
        },

      },
      rightToLeft: {
        '0%' : {
          transform: 'translateX(120%)'
        },
        '70%' : {
          transform: 'translateX(-5%)'
        },
        '100%' : {
          transform: 'translateX(0%)'
        },

      },
    },
      animation: {
        fadeAnim: 'fadeAnim 1s ease-out',
        blob: 'blob 7s infinite',
        zipper: 'zipper 2.5s infinite linear',
        topToBottom: 'topToBottom .7s ease-in ',
        bottomToTop: 'bottomToTop .7s ease-in ',
        leftToRight: 'leftToRight 1.5s ease-in-out ',
        rightToLeft: 'rightToLeft 1.5s ease-in-out ',
      },
      variants: {
        scrollbar: ['dark']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    myClass
  ],
}