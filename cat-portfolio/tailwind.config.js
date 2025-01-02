/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
    extend: {
      fontFamily: {
        Bahn: ['Bahnschrift', 'sans-serif'],
        Pop: ['Poppins', 'sans-serif'] ,
        roboto: ['Robotto', 'sans-serif']
        
      },
      fontSize: {
        
        '5.1xl': '50px',
      }
    },
  },
  plugins: [],
}

