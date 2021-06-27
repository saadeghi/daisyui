module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  plugins: [
    require('daisyui'),
    require('tailwindcss-flip'),
  ],
  daisyui: {
    rtl: true,
  }
}