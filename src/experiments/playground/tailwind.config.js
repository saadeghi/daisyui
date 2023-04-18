const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("../../"),
    // require('daisyui'),
    // require('tailwindcss-flip'),
  ],
}
