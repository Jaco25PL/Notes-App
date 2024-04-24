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
  plugins: [],
  darkMode: 'class'
}

