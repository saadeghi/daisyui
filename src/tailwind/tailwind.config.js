const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    extend: {
      colors: require('../../colors')
    },
  },
  plugins: [
    plugin(function({ addBase, addUtilities }) {
      addBase({
        'html': { '-WebkitTapHighlightColor': 'transparent' },
      })
      addUtilities(require('./utilities/variables'),{ variants: ['responsive'] })
      addUtilities(require('./utilities/minHeight'),{ variants: ['responsive'] })
      addUtilities(require('./utilities/fontSize'),{ variants: ['responsive'] })
      addUtilities(require('./utilities/borderRadius'),{ variants: ['responsive'] })
      addUtilities(require('./utilities/responsiveComponentStyle'),{ variants: ['responsive'] })
    })
  ],
}
