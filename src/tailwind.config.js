const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    colors: require('../colors')
  },
  plugins: [
    plugin(function({ addBase, addUtilities }) {
      addUtilities(require('../dist/utilities'),{ variants: ['responsive'] })
      addBase(require('../dist/base'))
      addUtilities(require('../dist/responsive'),{ variants: ['responsive'] })
    })
  ],
}
