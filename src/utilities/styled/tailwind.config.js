import plugin from "tailwindcss/plugin"
import responsiveRegex from "../../lib/responsiveRegex"
export const content = [{ raw: "" }]
export const safelist = responsiveRegex
export const theme = {
  colors: require("../../theming"),
  extend: require("../../lib/utility-classes"),
}
export const plugins = [
  plugin(function ({ addBase, addUtilities }) {
    addBase(require("../../../dist/base"))
    addUtilities(require("../../../dist/utilities"), {
      variants: ["responsive"],
    })
  }),
]
