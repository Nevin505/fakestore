/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          50: '#fffaeb',
          100: '#fff1c6',
          200: '#ffe088',
          300: '#ffca4a',
          400: '#ffb524',
          500: '#f99107',
          600: '#dd6a02',
          700: '#b74906',
          800: '#94370c',
          900: '#7a2e0d',
          950: '#461602',
      },
       secondary:{
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
    
      
       }
      }
    },
  },
  plugins: [],
}