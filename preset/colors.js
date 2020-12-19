let colorValues = {
  d: "0, 0%, 100%",
  p1: "259, 94%, 61%",
  p2: "259, 94%, 51%",
  p3: "259, 94%, 41%",
  s1: "314, 100%, 57%",
  s2: "314, 100%, 47%",
  s3: "314, 100%, 37%",
  a1: "174, 60%, 61%",
  a2: "174, 60%, 51%",
  a3: "174, 60%, 41%",
  cp: "0, 0%, 100%",
  cs: "0, 0%, 100%",
  ca: "0, 0%, 100%",
  c1: "220, 14%, 96%",
  c2: "228, 14%, 93%",
  c3: "220, 15%, 84%",
  c4: "218, 14%, 65%",
  c5: "220, 14%, 46%",
  c6: "220, 14%, 37%",
  c7: "219, 14%, 28%",
  c8: "222, 13%, 19%",
  c9: "223, 14%, 10%",
  in: "207, 90%, 54%",
  su: "174, 100%, 29%",
  wa: "36, 100%, 50%",
  er: "14, 100%, 57%",
}

module.exports = {
  theme: {
    extend: {
      colors: {
        "transparent": "transparent",

        "default": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--d, `+ colorValues['d'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--d, `+ colorValues['d'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--d, `+ colorValues['d']+ `))`
        },

        "primary": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--p2, `+ colorValues['p2'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--p2, `+ colorValues['p2'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--p2, `+ colorValues['p2']+ `))`
        },

        "primary-lighten": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--p1, `+ colorValues['p1'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--p1, `+ colorValues['p1'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--p1, `+ colorValues['p1']+ `))`
        },

        "primary-darken": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--p3, `+ colorValues['p3'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--p3, `+ colorValues['p3'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--p3, `+ colorValues['p3']+ `))`
        },

        "secondary": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--s2, `+ colorValues['s2'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--s2, `+ colorValues['s2'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--s2, `+ colorValues['s2']+ `))`
        },

        "secondary-lighten": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--s1, `+ colorValues['s1'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--s1, `+ colorValues['s1'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--s1, `+ colorValues['s1']+ `))`
        },

        "secondary-darken": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--s3, `+ colorValues['s3'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--s3, `+ colorValues['s3'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--s3, `+ colorValues['s3']+ `))`
        },

        "accent": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--a2, `+ colorValues['a2'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--a2, `+ colorValues['a2'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--a2, `+ colorValues['a2']+ `))`
        },

        "accent-lighten": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--a1, `+ colorValues['a1'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--a1, `+ colorValues['a1'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--a1, `+ colorValues['a1']+ `))`
        },

        "accent-darken": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--a3, `+ colorValues['a3'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--a3, `+ colorValues['a3'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--a3, `+ colorValues['a3']+ `))`
        },

        "info": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--in, `+ colorValues['in'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--in, `+ colorValues['in'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--in, `+ colorValues['in']+ `))`
        },

        "success": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--su, `+ colorValues['su'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--su, `+ colorValues['su'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--su, `+ colorValues['su']+ `))`
        },

        "warning": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--wa, `+ colorValues['wa'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--wa, `+ colorValues['wa'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--wa, `+ colorValues['wa']+ `))`
        },

        "error": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--er, `+ colorValues['er'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--er, `+ colorValues['er'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--er, `+ colorValues['er']+ `))`
        },

        "content-primary": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--cp, `+ colorValues['cp'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--cp, `+ colorValues['cp'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--cp, `+ colorValues['cp']+ `))`
        },

        "content-secondary": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--cs, `+ colorValues['cs'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--cs, `+ colorValues['cs'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--cs, `+ colorValues['cs']+ `))`
        },

        "content-accent": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--ca, `+ colorValues['ca'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--ca, `+ colorValues['ca'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--ca, `+ colorValues['ca']+ `))`
        },

        "content-100": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c1, `+ colorValues['c1'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c1, `+ colorValues['c1'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c1, `+ colorValues['c1']+ `))`
        },

        "content-200": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c2, `+ colorValues['c2'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c2, `+ colorValues['c2'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c2, `+ colorValues['c2']+ `))`
        },

        "content-300": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c3, `+ colorValues['c3'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c3, `+ colorValues['c3'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c3, `+ colorValues['c3']+ `))`
        },

        "content-400": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c4, `+ colorValues['c4'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c4, `+ colorValues['c4'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c4, `+ colorValues['c4']+ `))`
        },

        "content-500": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c5, `+ colorValues['c5'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c5, `+ colorValues['c5'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c5, `+ colorValues['c5']+ `))`
        },

        "content-600": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c6, `+ colorValues['c6'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c6, `+ colorValues['c6'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c6, `+ colorValues['c6']+ `))`
        },

        "content-700": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c7, `+ colorValues['c7'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c7, `+ colorValues['c7'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c7, `+ colorValues['c7']+ `))`
        },

        "content-800": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c8, `+ colorValues['c8'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c8, `+ colorValues['c8'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c8, `+ colorValues['c8']+ `))`
        },

        "content-900": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--c9, `+ colorValues['c9'] +`), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--c9, `+ colorValues['c9'] +`), var(${opacityVariable}, 1))`
          }
          return `hsl(var(--c9, `+ colorValues['c9']+ `))`
        },
      },
    },
  },
}
