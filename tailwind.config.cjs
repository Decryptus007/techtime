/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '425px'},
        "3xl": "1600px"
      },
      colors: {
        primary: "#004DB3",
        customLightGray: "#E7E7E7",
        customDarkGray: "#000F24"
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}