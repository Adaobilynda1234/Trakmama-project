/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'button-pink': '#F9D9F4',
        'button-green-dark': '#131E12',
        'button-green-light':'#7EB97D',
        'tools-bg': '#F0FBEC',
        'deep-pink': '#B252AA',
      },
    },
  },
  plugins: [],
};
