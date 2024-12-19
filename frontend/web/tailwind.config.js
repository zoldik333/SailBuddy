/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#FFD3B9',
        'light-orange': '#FFE8D7',
        'white': '#FEFCF4',
        'dark-blue': '#1A2B78',
        'red': '#EF4445',
        'lvl1': '#1A2B78',
        'lvl2' : '#4F316B',
        'lvl3' : '#85385F',
        'lvl4' : '#BA3E52',
        'lvl5' : '#EF4445',
      },
      borderRadius: {
        'none': '0',
        'lg': '4px',
        'full': '9999px',
      }
    },
    borderRadius: {
      'full': '9999px',
    }
  },
  plugins: [
      require('tailwind-scrollbar')
  ],
}