/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-primary': 'var( --color-primary)',
        'color-secondary': 'var(--color-secondary)',
        'color-teritiary': 'var(--color-teritiary)'
      }
    }
  },
  plugins: []
};
