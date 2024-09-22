/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo-black': ['Archivo Black', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
