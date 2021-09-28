module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{astro,js,ts,jsx,tsx,vue,svelte}'
  ],
  plugins: [
    require('daisyui'),
  ]
}