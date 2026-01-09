/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A237E', // Deep Royal Blue from logo
          gold: '#FF6D00', // Vibrant Orange from logo
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Will add font link later
      }
    },
  },
  plugins: [],
}
