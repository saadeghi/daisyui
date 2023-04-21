module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./src/themes/tailwind.config.js"),
  ],
}
