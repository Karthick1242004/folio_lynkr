/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'big-shoulders': ['"Big Shoulders Display"', 'sans-serif'],
      },
      spacing: {
        'logo-sm': '12%',
        'logo-lg': '8%',
        'header-spacing': '20',
      },
      fontSize: {
        'heading-sm': '6rem',
        'heading-md': '9rem',
        'heading-lg': '14rem',
        'body-sm': '0.875rem',
        'body-base': '1.25rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'max420': { 'max': '420px' },
    },
  },
  plugins: [],
};