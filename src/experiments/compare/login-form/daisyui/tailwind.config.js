module.exports = {
  content: ['./*.html'],
  daisyui: {
    themes: [
      'light',
      'dark',
    ],
    prefix: 'd-',
  },
  plugins: [
    require('daisyui'),
  ],
}
