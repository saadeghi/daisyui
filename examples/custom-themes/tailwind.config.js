module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
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
          'neutral': '#200f29',
          'neutral-focus': '#200f29',
          'neutral-content': '#fff',
          'primary': '#2094f3',
          'primary-focus': '#2094f3',
          'primary-content': '#fff',
          'secondary': '#ff5784',
          'secondary-focus': '#ff5784',
          'secondary-content': '#fff',
          'accent': '#2aa79b',
          'accent-focus': '#2aa79b',
          'accent-content': '#000',
          'base-100': '#ddd',
          'base-200': '#ccc',
          'base-300': '#bbb',
          'base-content': '#000',
          '--rounded-btn': '1rem',
          '.btn': {
            //custom style
            'boxShadow': '0 .4rem hsl(0 0% 100%/.5) inset',
            'border-width': '2px'
          },
        }
      }
    ]
  },
}