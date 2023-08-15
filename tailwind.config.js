/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors:{
        fola : 
        {
          50: '#eaefff',
          100: '#c9ceec',
          200: '#a6adda',
          300: '#848dc8',
          400: '#616cb7',
          500: '#48539e',
          600: '#37407c',
          700: '#272e5a',
          800: '#161c39',
          900: '#06081a',
        },

        navColor:
       
{
  50: '#efedff',
  100: '#d0caec',
  200: '#2B3148',
  300: '#9185c7',
  400: '#7263b6',
  500: '#59499c',
  600: '#45397b',
  700: '#312959',
  800: '#1e1737',
  900: '#0b0618',
}


      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

