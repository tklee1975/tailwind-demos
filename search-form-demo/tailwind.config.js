module.exports = {
  purge: {
    enabled: false, // #1
    content: [     // #2
      './*.html',
      './**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#FFEBB8',
        midtone1: '#E6E6E6',
        midtone2: '#C4C4C4', 
      }
    },
    fontFamily: {
      main: ['Roboto'],
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [],
}
