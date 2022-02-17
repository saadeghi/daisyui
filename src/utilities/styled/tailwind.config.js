const plugin = require("tailwindcss/plugin");
const responsiveRegex = require("../../lib/responsiveRegex");
module.exports = {
  content: [
    { raw: '' },
  ],
  safelist: [
    { pattern: /.*/ },
    responsiveRegex,
  ],
  theme: {
    colors: require("../../colors"),
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase(require("../../../dist/base"));
      addUtilities(require("../../../dist/utilities"), {
        variants: ["responsive"],
      });
    }),
  ],
};
