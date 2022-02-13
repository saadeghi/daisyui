const plugin = require('tailwindcss/plugin')
module.exports = {
  safelist: [
    {
      pattern: /.*/,
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
