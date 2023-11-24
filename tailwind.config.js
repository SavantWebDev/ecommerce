
const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{jpg,png,svg}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
    // spacing: {
    //   '1': '0.25rem',
    //   '2': '0.5rem',
    //   '3': '0.75rem',
    //   '4': '1rem',
    //   '5': '1.25rem',
    //   '6': '1.5rem',
    //   '7': '1.75rem',
    //   '8': '2rem',
    //   '9': '2.25rem',
    //   '10': '2.5rem',
    //   '11': '2.75rem',
    //   '12': '3rem',
    //   '13': '3.25rem',
    //   '14': '3.5rem',
    // },
    colors:{
      'primaria': '#ffcc00',
      'secondary': '',
      'neutral-dark': '',
      'neutral-light': '',
      'suport-dark': '',
      'suport-light': '',

    
    },
    extend: {
      fontFamily: {
        primary: ['var(--font-urbanist)'] 
      },
      backgroundImage:{
        login: "url('/images/login.svg')"
      },
      height:{
        'screendv': '100dvh'
      }
      
    },

  },
  
  darkMode: "dark",
  plugins: [
    nextui()
  ],
}
