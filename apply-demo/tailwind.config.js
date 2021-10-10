module.exports = {
  purge: {
    enabled: true,
    content: [
      './*.html',
      './**/*.html'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'content' : ['Open Sans', 'Arial', 'sans-serif'],
      'display' : ['Josefin Sans', 'Serif'],
    },
    extend: {
      colors: {
        'highlight' : '#f53',
        'primary' : '#7fa',
        'secondry' : '#aaa',
        'success' : '#494',
        'error' : '#f00',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
