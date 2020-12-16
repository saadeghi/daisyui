const cssnano = require('cssnano')({
  preset: ['default', { 
    mergeRules : false,
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