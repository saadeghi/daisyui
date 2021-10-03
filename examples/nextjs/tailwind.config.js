module.exports = {
  mode: 'jit',
  purge: [
    '{layouts,pages,components}/**/*.{j,t}s*'
  ],
  plugins: [
    require('daisyui'),
  ],
}
