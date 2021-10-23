module.exports = {
  purge: {
    enabled: false,
    content: [
      './*.html',
      './**/*.html'
    ]
  },
  darkMode: 'media',
  theme: {
    fontFamily: {
      'content' : ['Open Sans', 'Arial', 'sans-serif'],
      'display' : ['Josefin Sans', 'Serif'],
    },

  },
  // variantOrder: [ // the default are priority first
  //   'first',
  //   'last',    
  //   'odd',
  //   'even',    
 
  // ],
  variants: {
    extend: {
      backgroundColor: ['hover', 'odd', 'first', 'even', 'last', 'hover' ],
      //backgroundColor: ['even' ],
      width: [ 'hover', 'focus', 'odd','dark', 'first', 'even', 'last', 'group-hover',  'focus-within', 'active', 'disabled', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
}
