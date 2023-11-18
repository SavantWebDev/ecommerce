/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    // },
    colors:{
      'primary': '#ffcc00',
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
      
      
    },
  },
  plugins: [],
}
