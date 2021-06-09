module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested')({
      "bubble": [
        "screen"
      ]
    }),
    require('autoprefixer'),
    require('cssnano')({
      "preset": [
        "default",
        {
          "mergeRules": false
        }
      ]
    }),
  ]
}
