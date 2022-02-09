module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      abrilface: ['Abril Fatface, cursive'],
      monty: ['Montserrat, sans-serif'],
      josefin: ['Josefin Sans, sans-serif'],
      abel: ['Abel, sans-serif'],
      outfit: ['Outfit, sans-serif'],
    },
    extend: {
      gridTemplateRows: {
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
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
      },
      minHeight: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "3/4": "75%",
        "90v": "90vh"
      },
      maxHeight: {
        "100v": "100rem",
        "inf": "200rem"
      },
      width: {
        "10/16": "62.5%"
      }
    },
  },
  plugins: [],
}
