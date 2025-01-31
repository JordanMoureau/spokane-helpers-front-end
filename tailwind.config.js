/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust paths based on your project structure
  theme: {
    extend: {
      colors: {
        deep: "#155E95", // Deep blue
        lighter: "#6A80B9", // Lighter blue
        peach: "#F6C794", // Soft peach
        yellow: "#FFF6B3", // Light yellow
      },
    },
  },
  plugins: [],
};
