const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      'light'
    ],
  },


  plugins: [
    require('@tailwindcss/typography'),
    require('../../'),
    // require('daisyui'),
    // require('tailwindcss-flip'),

  ],
}
