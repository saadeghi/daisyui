module.exports = {
  theme: {
    colors: {
      "transparent": "transparent",

      "default": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-default), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-default), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-default))`
      },

      "primary": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-primary), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-primary), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-primary))`
      },

      "primary-lighten": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-primary-lighten), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-primary-lighten), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-primary-lighten))`
      },

      "primary-darken": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-primary-darken), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-primary-darken), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-primary-darken))`
      },

      "secondary": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-secondary), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-secondary), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-secondary))`
      },

      "secondary-lighten": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-secondary-lighten), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-secondary-lighten), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-secondary-lighten))`
      },

      "secondary-darken": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-secondary-darken), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-secondary-darken), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-secondary-darken))`
      },

      "accent": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-accent), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-accent), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-accent))`
      },

      "accent-lighten": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-accent-lighten), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-accent-lighten), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-accent-lighten))`
      },

      "accent-darken": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-accent-darken), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-accent-darken), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-accent-darken))`
      },

      "info": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-info), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-info), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-info))`
      },

      "success": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-success), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-success), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-success))`
      },

      "warning": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-warning), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-warning), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-warning))`
      },

      "error": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-error), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-error), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-error))`
      },

      "content-primary": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-primary), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-primary), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-primary))`
      },

      "content-secondary": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-secondary), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-secondary), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-secondary))`
      },

      "content-accent": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-accent), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-accent), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-accent))`
      },

      "content-100": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-100), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-100), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-100))`
      },

      "content-200": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-200), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-200), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-200))`
      },

      "content-300": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-300), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-300), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-300))`
      },

      "content-400": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-400), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-400), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-400))`
      },

      "content-500": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-500), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-500), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-500))`
      },

      "content-600": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-600), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-600), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-600))`
      },

      "content-700": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-700), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-700), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-700))`
      },

      "content-800": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-800), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-800), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-800))`
      },

      "content-900": ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
          return `hsla(var(--color-content-900), ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
          return `hsla(var(--color-content-900), var(${opacityVariable}, 1))`
        }
        return `hsl(var(--color-content-900))`
      },
    },
    extend: {
      borderRadius: {
        "box": "var(--rounded-box, 1rem)",
        "btn": "var(--rounded-btn, 0.5rem)",
        "badge": "var(--rounded-badge, 9999px)",
      },
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
