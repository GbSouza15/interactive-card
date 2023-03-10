/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '486px',
    },
    fontFamily:{
      'spacegrotesk':['Space Grotesk', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
