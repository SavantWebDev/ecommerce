const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{jpg,png,svg}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      min: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1586px",
    },
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
    colors: {
      primaria: "#ffcc00",
      secondary: "",
      "neutral-dark": "#202020",
      "neutral-light": "",
      "suport-dark": "",
      "suport-light": "",
      "cor-preto": "#000000",
      cinza: "#969696",
      "amarelo-mostarda": "#584808",
      branco: "#FFF",
      verde: "#009B48",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-urbanist)"],
      },
      backgroundImage: {
        login: "url('/images/login.svg')",
        teste: "url('/images/Banner-Categoria.jpg')",
        banner: "url('/images/Banner-categoria.svg')",
      },
      height: {
        screendv: "100dvh",
      },
    },
    variants: {
      backgroundColor: [
        "responsive",
        "hover",
        "focus",
        "active",
        "group-hover",
      ],
      transform: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },

  darkMode: "dark",
  plugins: [nextui()],
};
