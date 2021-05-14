module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js',
      'static/*.svg',
    ],
    options: {
      safelist: [
        /data-theme$/,
      ],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'title': ['Montserrat Bold', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    process.env.NODE_ENV === 'production' ? require('daisyui') : [],
  ],
  presets: [
    process.env.NODE_ENV === 'production' ? 'node_modules/tailwindcss/stubs/defaultConfig.stub.js' : require('../tailwind.config.js')
  ],
}
