const { transform } = require('windicss/helpers')

module.exports = {
  extract: {
    include: ['./*.html'],
  },
  plugins: [transform('daisyui')],
}
