/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-btn': '#e4af0b',
        'dark-bg': '#000000',
        'dark-contrast': '#121212',
        'input-bg': '#1c1c1c',
        'input-btn': '#9898a0',
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
      // const newUtilities = {
        // ".scrollbar" : {
  //         // scrollbarWidth : '0',
          // scrollbarWidth : 'thin',
          // scrollbarColor : '#fff'
        // },
  //       ".scrollbar-webkit": {
  //         "&::-webkit-scrollbar" : {
  //           // display : "none" 
  //           with : '5px'
  //         },
  //         "&::-webkit-scrollbar-track" : {
  //           scrollbarColor: '#023',
  //           borderRadius : '6px'
  //         },
  //         "&::-webkit-scrollbar-thumb" : {
  //           scrollbarColor: '#862',
  //           borderRadius: '6px'
  //         }
  //       }
      // }
      // addUtilities(newUtilities)
    // }
  ],
  darkMode: 'class'
}

