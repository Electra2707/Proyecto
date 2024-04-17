/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) {... }
      },
      margin: {
        'nav-negative': '-16px',
      }
    }
  }
}