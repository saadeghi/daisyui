module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,js,svelte,ts}',
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