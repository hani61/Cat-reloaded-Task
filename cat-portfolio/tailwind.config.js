/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
    extend: {
      fontFamily: {
        Bahn: ['Bahnschrift', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [],
}

