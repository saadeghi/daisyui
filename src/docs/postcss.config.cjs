module.exports = {
  plugins: [
    (process.env.NODE_ENV === 'production') ? null : require('postcss-import'),
    (process.env.NODE_ENV === 'production') ? null : require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}