/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily:{
        anton:["Anton", "sans-serif"],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

