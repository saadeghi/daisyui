module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts,svx,md}',
  ],
  theme: {
    extend: {
      colors: require('../colors'),
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
      }
    }
  },
  daisyui: {
    logs: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    // process.env.NODE_ENV === 'production' ? require('daisyui') : [],
    process.env.NODE_ENV === 'production' ? require('../../index') : [],
  ],
  presets: [
    process.env.NODE_ENV === 'production' ? [] : require('../components/tailwind.config.js'),
    'node_modules/tailwindcss/stubs/defaultConfig.stub.js',
  ],
}