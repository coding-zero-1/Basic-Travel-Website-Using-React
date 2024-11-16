/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 8px 5px rgba(0, 0, 0, 0.3)',
      }
    }
  },
  plugins: [],
}

