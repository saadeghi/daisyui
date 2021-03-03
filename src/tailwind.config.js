const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    extend: {
      colors: require('../colors')
    },
  },
  plugins: [
    plugin(function({ addBase, addUtilities }) {
      addBase(require('../dist/resets/general'))
      addUtilities(require('../dist/utilities/borderRadius'),{ variants: ['responsive'] })
      addUtilities(require('../dist/utilities/fontSize'),{ variants: ['responsive'] })
      addUtilities(require('../dist/utilities/glass'),{ variants: ['responsive'] })
      addUtilities(require('../dist/utilities/sizing'),{ variants: ['responsive'] })
      addUtilities(require('../dist/utilities/responsiveComponent'),{ variants: ['responsive'] })
      addUtilities(require('../dist/utilities/typography'))
      addUtilities(require('../dist/utilities/variables'))
    })
  ],
}
