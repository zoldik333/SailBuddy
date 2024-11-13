/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'cornflower': '#95D4F5',
        'white': '#FFFFFF',
        'carmine-pink': '#EF4445',
        'dark-blue': '#1A2B78',
      },
      spacing: {
        '2x': '20px',
        '3x': '30px',
      },
      borderRadius: {
        '4xl': '40px',
      }
    }
  },
  plugins: [],
}