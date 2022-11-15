/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "481px",
      mx:"670px",
      ml: "768px",
      lg: "1025px",
      need: "1340px",
      xl: "1440px",
      "350-max": { max: "350px" },
      "767-max": { max: "767px" },
    },
    colors: {
      primary: "hsla(319, 65%, 38%, 1)",
      sec: "hsla(319, 65%, 50%, 1)",
      basicWhite: "hsla(0, 0%, 100%, 1)",
      footerBlack: "hsla(256, 1%, 11%, 1)",
      textColor: "hsla(0, 0%, 26%, 1)",
      modalBg: "hsla(0, 0%, 25%, 0.3)",
      footerLinks: "hsla(225, 40%, 96%, 1)",
      cardBorder: "hsla(0, 0%, 84%, 1)",
    },
    extend: {},
  },
  plugins: [],
};
