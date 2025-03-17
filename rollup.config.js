import json from "@rollup/plugin-json";

export default {
  input: "packages/daisyui/index.js",
  output: {
    file: "packages/daisyui/daisyui.js",
    format: "cjs"
  },
  plugins: [
    json()
  ]
}
