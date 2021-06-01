module.exports = {
  mode: 'jit',
  purge: {
    content: ['./*.html'],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  plugins: [
    require('daisyui')
  ],
}
