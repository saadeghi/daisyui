const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    '*.html',
    // etc.
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})
module.exports = {
  plugins: [
    process.env.NODE_ENV === 'production' && purgecss,
  ],
}