module.exports = {
  content: [{ raw: "" }],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    base: false,
    themes: true,
  },
  plugins: [require("../index")],
}
