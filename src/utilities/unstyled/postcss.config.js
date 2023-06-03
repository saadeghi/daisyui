module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./src/utilities/unstyled/tailwind.config.js"),
  ],
}
