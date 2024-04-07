/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
