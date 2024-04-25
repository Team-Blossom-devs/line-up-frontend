/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#FDEFF0',
        'typo-title': '#312E26',
        'typo-content': '#4A453A',
        'btn-pink': '#FDCAD3',
      },
    },
  },
  plugins: [],
}
