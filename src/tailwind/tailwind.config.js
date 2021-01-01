const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    extend: {
      colors: require('../../colors')
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities(require('./utilities/minHeight'),{ variants: ['responsive'] })
      addUtilities(require('./utilities/fontSize'),{ variants: ['responsive'] })
      addUtilities(require('./utilities/borderRadius'),{ variants: ['responsive'] })
    })
  ],
}
