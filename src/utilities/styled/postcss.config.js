module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./src/utilities/styled/tailwind.config.js'),
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
