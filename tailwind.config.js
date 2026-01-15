/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#222222',
          gold: '#FFD700',
          gray: '#F5F5F5',
        }
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
