module.exports = {
  plugins: [
      (process.env.NODE_ENV === 'production') ? null : require('postcss-nested'),
      require('tailwindcss'),
      require('autoprefixer'),
      (process.env.NODE_ENV === 'production') ? require('cssnano') : null,
  ]
}
