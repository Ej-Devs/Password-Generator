/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#24232C',
        'bg-dark': '#18171F',
        'text-light': '#E6E5EA',
        'accent-green': '#A4FFAF',
        'accent-orange': '#FB7C58',
        'accent-yellow': '#F8CD65',
        'accent-red': '#F64A4A',
        'gray-text': '#817D92',
      },
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'heading-l': ['32px', {
          lineHeight: '45px',
          fontWeight: 'bold',
        }],
        'heading-m': ['24px', {
          lineHeight: '31px',
          fontWeight: 'bold',
        }],
        'body': ['18px', {
          lineHeight: '23px',
          fontWeight: 'bold',
        }],
      },
      maxWidth: {
        'lgScreen': '540px',
        'smScreen': '343px',
      },
    },
  },
  plugins: [],
}