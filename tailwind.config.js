/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {

    extend: {
      colors: {
        'custom-yellow': '#f7c965',
      },
      backgroundImage: {
        'yellow-gradient': 'linear-gradient(to top right, #feaf01, #f8d442)',
        'yellow-gradient-reverse': 'linear-gradient(to bottom right, #feaf01, #f8d442)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

