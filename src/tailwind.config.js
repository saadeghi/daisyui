const plugin = require('tailwindcss/plugin')
module.exports = {
  presets: [
    require('./responsive/tailwind.config.js'),
  ],
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities(require('../dist/responsive/responsiveComponent'),{ variants: ['responsive'] })
    })
  ],
}
