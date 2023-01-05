/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#80CC2B',
        'green-secondary': '#5D9830',
        'green-tertiary': 'rgba(128, 204, 43, 0.2)',
        "blue-primary": "#3592E9",
        "blue-secondary": "#0D4578",
        "orange-primary": "#E97635",
        "orange-secondary": "#78340D",
        "yellow-primary": "#FFE91F",
        "yellow-secondary": "#857700",
        "gray": "#2E2E2E",
        "red": "#CC352B",
      },
      screens: {
        'tall-sm': { 'raw': '(max-height: 500px)' },
        'tall-md': { 'raw': '(max-height: 700px)' },
      }
    },
  },
  plugins: [],
};
