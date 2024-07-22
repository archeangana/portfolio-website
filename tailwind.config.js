/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      customHeader: 'Header',
      customHeader2: 'Header2',
      customBody1: 'BodyText1',
      customBody2: 'BodyText2'
    },
    colorPallete: {
      primary: '#0f172a',
      secondary: '#317AC7',
      neon: `#7CF6FD`,
      neon2: '#4ff0ff',
      ctaYellow: '#FCF9BF',
      shades: '#707D9D',

    },
    extend: {},
  },
  plugins: [],
}

