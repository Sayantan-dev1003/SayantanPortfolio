/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'raw': '(min-width: 360px) and (min-height: 800px)' },
        'tablet': { 'raw': '(min-width: 600px) and (min-height: 1024px)' },
        'laptop': { 'raw': '(min-width: 1024px) and (min-height: 640px)' },
      }
    },
  },
  plugins: [],
}

