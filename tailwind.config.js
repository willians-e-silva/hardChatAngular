/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'main-purple': '#15131e',
        'main-slate': '#1E1D27',
        'message-secondary': '#1E1D27',
        'message-primary': '#6C51DF',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Open Sans', 'serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

