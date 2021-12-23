module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    fontFamily:{
      abrilface:['Abril Fatface, cursive'],
      monty:['Montserrat, sans-serif'],
      josefin:['Josefin Sans, sans-serif'],
      abel:['Abel, sans-serif'],
    },
    extend: {
      gridTemplateRows:{
        // '3':  'repeat(3, auto)',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        // '8': 'repeat(8, auto)',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
       },
       gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
       },
       gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
       }
    },
  },
  plugins: [],
}
