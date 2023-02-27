module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested")({
      bubble: ["screen"],
    }),
    require("tailwindcss")("./src/utilities/unstyled/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
