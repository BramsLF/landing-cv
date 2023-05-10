/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPalet: '#2C3333',
        myPalet: {
          50: '#CBE4DE',
          500: '#0E8388',
          900: '#2E4F4F',
          1000: '#2C3333',
        },
      },
    },
  },
  plugins: [],
}