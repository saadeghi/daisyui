module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./src/base/tailwind.config.js"),
    // require("autoprefixer"),
  ],
}
