module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts,svx,md,json}',
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
    process.env.NODE_ENV === 'production' ? require('daisyui') : [],
  ],
  presets: [
    process.env.NODE_ENV === 'production' ? [] : require('../components/tailwind.config.js'),
    'node_modules/tailwindcss/stubs/defaultConfig.stub.js',
  ],
}