module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: null,
            "a, ol > li::before, blockquote, figure figcaption, a code, thead, strong, h1, h2, h3, h4": {
              color: 'inherit',
              '&:hover': {
                color: 'inherit',
              },
            },
          },
        },
      },
    },
  },
}
