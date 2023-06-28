/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#A259FF",
        primaryDark: "#984FE1",
        secondary: "#321C4F",
        neutralDark: "#121212",
        lightGray: "#858584",
        gray: "#b0b0b0",
        darkGray: "#3B3B3B",
        darkerGray: "#2B2B2B",
      },
      textColor: {
        primary: "#A259FF",
        primaryDark: "#984FE1",
        secondary: "#321C4F",
        neutralDark: "#121212",
        lightGray: "#858584",
        gray: "#b0b0b0",
        darkGray: "#3B3B3B",
        darkerGray: "#2B2B2B",
      },
      borderColor: {
        primary: "#A259FF",
        primaryDark: "#984FE1",
        secondary: "#321C4F",
        neutralDark: "#121212",
        gray: "#b0b0b0",
        darkGray: "#3B3B3B",
        darkerGray: "#2B2B2B",
      },
      fontSize: {
        "1.5xl": "22px",
        "2.5xl": "26px",
        "3.5xl": "32px",
        "4.5xl": "40px",
        "8.5xl": "112px",
      },
      width: {
        67.5: "270px",
        73: "292px",
        75: "300px",
        100: "400px",
        "1/3.5": "28.571428571%",
      },
      minWidth: {
        67.5: "270px",
        73: "292px",
        75: "300px",
        100: "400px",
        "1/3.5": "28.571428571%",
      },
      maxWidth: {
        67.5: "270px",
        73: "292px",
        75: "300px",
        100: "400px",
        "1/3.5": "28.571428571%",
      },
      height: {
        100: "400px",
        140: "560px",
        "40vh": "40vh",
      },
      minHeight: {
        100: "400px",
        140: "560px",
      },
      maxHeight: {
        100: "400px",
        140: "560px",
      },
      margin: {
        18: "72px",
      },
    },
  },
  plugins: [],
};
