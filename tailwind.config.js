/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if you use TypeScript
    './client/src/**/*.{js,jsx,ts,tsx,html}',  // Include all your source files
    './client/public/index.html' 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

