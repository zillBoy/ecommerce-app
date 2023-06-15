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
        neutralDark: "#121212",
      },
      textColor: {
        primary: "#A259FF",
      },
      borderColor: {
        primary: "#A259FF",
      },
      fontSize: {
        "3.5xl": "32px",
        "4.5xl": "40px",
        "8.5xl": "112px",
      },
      width: {
        67.5: "270px",
      },
      minWidth: {
        67.5: "270px",
      },
      maxWidth: {
        67.5: "270px",
      },
      height: {
        140: "560px",
      },
      minHeight: {
        140: "560px",
      },
      maxHeight: {
        140: "560px",
      },
    },
  },
  plugins: [],
};
