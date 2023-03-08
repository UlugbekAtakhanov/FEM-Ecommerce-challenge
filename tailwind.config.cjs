/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cred: "#FD3D57",
        black: "#2B2D42",
      }
    },
  },
  plugins: [],
}