module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./src/full/tailwind.config.cjs"),
    require("autoprefixer"),
  ],
}
