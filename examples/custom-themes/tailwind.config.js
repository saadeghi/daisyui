module.exports = {
  mode: 'jit',
  purge: {
    content: ['./*.html'],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui:{
    themes:[ // 👇 only these 4 themes will be included
      'dark', // default theme
      'forest',
      'garden',
      {
        mytheme:{ // custom theme
          'neutral': '#f0f',
          'neutral-focus': '#f0f',
          'neutral-content': '#000',
          'primary': '#ff0',
          'primary-focus': '#ff0',
          'primary-content': '#000',
          'secondary': '#0ff',
          'secondary-focus': '#0ff',
          'secondary-content': '#000',
          'accent': '#0f0',
          'accent-focus': '#0f0',
          'accent-content': '#000',
          'base-100': '#ddd',
          'base-200': '#ccc',
          'base-300': '#bbb',
          'base-content': '#000',
          '--rounded-btn': '.2rem',
          '.btn': { //custom style for button
            'border-top-left-radius': '3rem',
            'border-bottom-right-radius': '3rem',
            'box-shadow': '2px 3px',
          }
        }
      }
    ]
  },
}