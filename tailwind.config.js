/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#FAF0E6',
        'bg-font':  "#352F44",
        'bg-box': "#B9B4C7"
      },
    },
  },
  plugins: [],
}

