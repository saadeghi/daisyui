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
  },
  plugins: [require("../index")],
}
