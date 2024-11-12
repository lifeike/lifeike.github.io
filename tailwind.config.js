/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        "eb-garamond": ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
}
