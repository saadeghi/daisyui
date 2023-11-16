const plugin = require("tailwindcss/plugin")
module.exports = {
  content: [{ raw: "" }],
  safelist: [
    {
      pattern: /.*/,
    },
    {
      // responsive utilites for daisyUI responsive modifiers
      pattern: /.(sm|md|lg|xl)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      // responsive utilites for daisyUI components
      pattern:
        /(drawer-open|modal-middle|modal-top|modal-bottom|card-side|card-compact|card-normal|stats|divider-horizontal|divider-vertical)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      // color utilities for daisyUI colors
      pattern:
        /(bg|to|via|from|text|fill|stroke|border|outline)-((primary|secondary|accent|neutral)(-content|))|((info|success|warning|error)(-content|))|(base)(-100|-200|-300|-content)/,
      variants: [
        // "first",
        // "last",
        // "odd",
        // "even",
        // "visited",
        // "checked",
        // "empty",
        // "read-only",
        // "group-hover",
        // "group-focus",
        // "focus-within",
        "hover",
        "focus",
        // "focus-visible",
        // "active",
        // "disabled",
      ],
    },
  ],
  theme: {
    colors: require("../../theming"),
    extend: {
      borderRadius: {
        badge: "var(--rounded-badge, 1.9rem)",
        btn: "var(--rounded-btn, 0.5rem)",
        box: "var(--rounded-box, 1rem)",
      },
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
