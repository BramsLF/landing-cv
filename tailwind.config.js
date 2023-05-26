/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPalet: 
        {
          50: '#F1F6F9',
          500: '#9BA4B5',
          900: '#394867',
          1000: '#212A3E',
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      height: {
        "height-navbar": "calc(100vh - 120px)",
      },
    },
  },
  plugins: [],
}