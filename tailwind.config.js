/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
      // xl: '1440px',
    },
    extend: {
      colors: {
        veryDarkGrey: '#18171F',
        darkGrey: '#24232C',
        mediumGrey: '#817D92',
        lightGrey: '#E6E5EA',
        neonGreen: '#A4FFAF',
        red: '#F64A4A',
        orange: '#FB7C58',
        yellow: '#F8CD65',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        headingL: ['32px', '43px'],
        body: ['18px', '23px'],
        headingM: ['24px', '31px'],
      },
    },
  },
  plugins: [],
}