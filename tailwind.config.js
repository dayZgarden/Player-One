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
        'cars': 'url(./assets/racing.jpg)',
        'bo1': 'url(./assets/bo1.jpg)',
        'borderlands': 'url(./assets/borderlands.jpg)',
        'borderlands2': 'url(./assets/borderlands2.jpg)',
        'borderlands3': 'url(./assets/borderlands3.jpg)',
        'borderlands4': 'url(./assets/borderlands4.webp)',
        'greenvg': 'url(./assets/greenvg.jpg)',
        'spacegame': 'url(./assets/spacegame.png)',
        'space': 'url(./assets/space.jpg)',
        'space2': 'url(./assets/space2.jpg)',
      },
      boxShadow: {
        'cool': '5px 7px 0px 0px rgb(17 24 49)',
        'cool2': '5px 7px 0px 0px rgb(0 0 0)',
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
        }
      },
      animation: {
        fadeAnim: 'fadeAnim 1s ease-out',
        blob: 'blob 7s infinite',
        zipper: 'zipper 2.5s infinite linear',
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