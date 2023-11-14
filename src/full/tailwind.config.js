const plugin = require("tailwindcss/plugin")
const responsiveRegex = require("../lib/responsiveRegex")
const utilityClasses = require("../lib/utility-classes")

module.exports = {
  content: [{ raw: '<input class="theme-controller" checked/>', extension: "html" }],
  safelist: responsiveRegex,
  theme: {
    colors: require("../theming"),
    ...require("../lib/utility-classes"),
    extend: {
      ...utilityClasses,
    },
  },
  corePlugins: [
    "animation",
    "backgroundColor",
    "backgroundImage",
    "borderColor",
    "borderRadius",
    "divideColor",
    "gradientColorStops",
    "placeholderColor",
    "preflight",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringWidth",
    "textColor",
    "transitionProperty",
    "stroke",
  ],
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents, matchUtilities, theme }) {
      addBase(require("../../dist/base"))
      addComponents(require("../../dist/styled"))
      addUtilities(require("../../dist/utilities"), {
        variants: ["responsive"],
      })
      addUtilities(require("../../dist/utilities-unstyled"), {
        variants: ["responsive"],
      })
      addUtilities(require("../../dist/utilities-styled"), {
        variants: ["responsive"],
      })
      // matchUtilities(
      //   {
      //     text: (value) => ({
      //       "@supports (color: lch(0 0 0))": {
      //         color: value.replace("hsl", "lch").replace("<alpha-value>", "var(--tw-text-opacity)"),
      //       },
      //     }),
      //     bg: (value) => ({
      //       "@supports (color: lch(0 0 0))": {
      //         backgroundColor: value
      //           .replace("hsl", "lch")
      //           .replace("<alpha-value>", "var(--tw-bg-opacity)"),
      //       },
      //     }),
      //     border: (value) => ({
      //       "@supports (color: lch(0 0 0))": {
      //         borderColor: value
      //           .replace("hsl", "lch")
      //           .replace("<alpha-value>", "var(--tw-border-opacity)"),
      //       },
      //     }),
      //   },
      //   { values: theme("colors") }
      // )
    }),
  ],
}
