module.exports = {
  theme: {
    extend: {
      colors: {
        "transparent": "transparent",

        "default": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--d), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--d), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--d))`
        },

        "primary": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--p2), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--p2), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--p2))`
        },

        "primary-lighten": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--p1), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--p1), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--p1))`
        },

        "primary-darken": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--p3), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--p3), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--p3))`
        },

        "secondary": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--s2), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--s2), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--s2))`
        },

        "secondary-lighten": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--s1), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--s1), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--s1))`
        },

        "secondary-darken": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--s3), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--s3), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--s3))`
        },

        "accent": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--a2), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--a2), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--a2))`
        },

        "accent-lighten": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--a1), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--a1), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--a1))`
        },

        "accent-darken": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--a3), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--a3), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--a3))`
        },

        "info": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--in), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--in), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--in))`
        },

        "success": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--su), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--su), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--su))`
        },

        "warning": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--wa), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--wa), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--wa))`
        },

        "error": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--er), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--er), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--er))`
        },

        "content-primary": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--cp), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--cp), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--cp))`
        },

        "content-secondary": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--cs), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--cs), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--cs))`
        },

        "content-accent": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--ca), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--ca), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--ca))`
        },

        "content-100": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c1), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c1), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c1))`
        },

        "content-200": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c2), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c2), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c2))`
        },

        "content-300": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c3), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c3), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c3))`
        },

        "content-400": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c4), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c4), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c4))`
        },

        "content-500": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c5), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c5), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c5))`
        },

        "content-600": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c6), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c6), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c6))`
        },

        "content-700": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c7), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c7), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c7))`
        },

        "content-800": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c8), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c8), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c8))`
        },

        "content-900": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c9), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c9), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c9))`
        },
      },
    },
  },
}
