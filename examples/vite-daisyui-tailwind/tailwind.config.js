module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './*.{html,js}',
    ],
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