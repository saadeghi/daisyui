const plugin = require('tailwindcss/plugin')
module.exports = {
  safelist: [
    {
      pattern: /.*/,
      variants: ['sm','md','lg','xl','2xl'],
    },
  ],
  theme: {
    colors: require('../../../colors')
  },
  plugins: [
    plugin(function({ addBase, addUtilities }) {
      addBase(require('../../../dist/base'))
      addUtilities(require('../../../dist/utilities'),{ variants: ['responsive'] })
    })
  ],
}
