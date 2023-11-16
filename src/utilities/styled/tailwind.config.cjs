const plugin = require("tailwindcss/plugin")
const responsiveRegex = require("../../lib/responsiveRegex")
const utilityClasses = require("../../lib/utility-classes")
module.exports = {
  content: [{ raw: "" }],
  safelist: responsiveRegex,
  theme: {
    colors: require("../../theming"),
    extend: {
      ...utilityClasses,
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase(require("../../../dist/base"))
      addUtilities(require("../../../dist/utilities"), {
        variants: ["responsive"],
      })
    }),
  ],
}
