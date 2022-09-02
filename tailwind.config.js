/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('../assets/IMG_4721.jpg')",
      },
      fontFamily: {
        special: ['Anek Telugu'],
      },
    },
  },
  plugins: [],
}
