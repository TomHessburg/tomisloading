/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#5726E4",
        accent: "#3366EA",
        border: "#DDDDDD",
        unfocused: "#767676",
        input: "#F1F1F1",
        light: "#F1F1F1",
        "brand-red": "#D74C4C",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
