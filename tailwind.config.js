/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/index.html", 
    "./src/**/*.{vue, js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    borderRadius: {
      xl: "24px",
      lg: "14px",
      md: "10px",
      sm: "8px",
      full: "40px", 
    },

    fontFamily: {
      'display': ['Oswald', 'sans-serif']
    },


    colors: {
      zinc: {
        10: "#FFFFFF", 
        50: "#f7f8f9", //From figma
        100: "#f2f4f5", //From figma
        200: "#ebedf0", //From figma
        300: "#d9dadb", //From figma
        400: "#b8c1cc", //From figma
        500: "#818c99", //From figma
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },


      blue: {
        500: "#0504aa", //From figma
      },
    },
  },

  safelist: [
    "cursor-pointer",
    "w-32",
    "h-32",
    "w-16",
    "h-16",
    "w-14",
    "h-14",
    "w-12",
    "h-12",
    "h-8",
    "w-8",
    "h-12",
    "px-4",
    "flex",
    "items-center",
    "border-b-2",
    "border-transparent",
    "zinc-100",
    // ...shades,
  ],

  

  plugins: [require("@tailwindcss/forms")],
};
