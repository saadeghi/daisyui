const plugin = require("tailwindcss/plugin")
const responsiveRegex = require("../lib/responsiveRegex")
module.exports = {
  content: [{ raw: "" }],
  safelist: responsiveRegex,
  theme: {
    colors: require("../theming"),
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, matchUtilities, matchComponents, theme }) {
      addBase(require("../../dist/base"))
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
