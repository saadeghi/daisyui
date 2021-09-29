module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [
    require('daisyui')
  ],
}