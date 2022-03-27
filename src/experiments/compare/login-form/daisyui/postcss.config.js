module.exports = {
  plugins: [
    require('tailwindcss'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./index.html'],
      keyframes: true,
      variables: true,
      safelist: [
        'data-theme'
      ],
    }),
    process.env.NODE_ENV === 'production' && require('cssnano'),
  ]
}