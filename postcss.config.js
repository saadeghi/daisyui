const cssnano = require('cssnano')({
  preset: ['default', {
      discardComments: {
          removeAll: true,
      },
  }]
})
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-nested')({ bubble: ['screen'] }),
    require('autoprefixer'),
    cssnano,
  ]
}