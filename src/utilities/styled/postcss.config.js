module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./src/utilities/styled/tailwind.config.js"),
    require("postcss-hover-media-feature"),
  ],
}
