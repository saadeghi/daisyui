module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested")({
      bubble: ["screen"],
    }),
    require("tailwindcss")("./src/themes/tailwind.config.js"),
    require("postcss-clean"),
  ],
};
