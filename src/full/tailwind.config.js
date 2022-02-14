const plugin = require("tailwindcss/plugin");
module.exports = {
  safelist: [
    { pattern: /.*/ },
    { pattern: /.sm/, variants: ["sm"] },
    { pattern: /.md/, variants: ["md"] },
    { pattern: /.lg/, variants: ["lg"] },
    { pattern: /.xl/, variants: ["xl"] },
    { pattern: /.2xl/, variants: ["2xl"] },
  ],
  theme: {
    colors: require("../../colors"),
  },
  corePlugins: [
    "animation",
    "backgroundColor",
    "backgroundImage",
    "borderColor",
    "divideColor",
    "gradientColorStops",
    "placeholderColor",
    "preflight",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringOpacity",
    "ringWidth",
    "textColor",
    "transitionProperty",
  ],
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents }) {
      addBase(require("../../dist/base"));
      addComponents(require("../../dist/styled"));
      addUtilities(require("../../dist/utilities"), {
        variants: ["responsive"],
      });
      addUtilities(require("../../dist/utilities-unstyled"), {
        variants: ["responsive"],
      });
      addUtilities(require("../../dist/utilities-styled"), {
        variants: ["responsive"],
      });
    }),
  ],
};
