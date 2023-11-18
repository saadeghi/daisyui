// WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1
// for normal text and 3:1 for large text. WCAG 2.1 requires a
// contrast ratio of at least 3:1 for graphics and user interface
// components (such as form input borders). WCAG Level AAA requires
// a contrast ratio of at least 7:1 for normal text and 4.5:1 for
// large text.

export const ContrastRatioWarningThreshold = 4.5
export const ContrastRatioErrorThreshold = 3

export const colorPairs = [
  ["--pc", "--p"],
  ["--sc", "--s"],
  ["--ac", "--a"],
  ["--nc", "--n"],

  ["--bc", "--b1"],
  ["--bc", "--b2"],
  ["--bc", "--b3"],

  ["--inc", "--in"],
  ["--suc", "--su"],
  ["--wac", "--wa"],
  ["--erc", "--er"],
]

export const cssVars = [
  "--rounded-box",
  "--rounded-btn",
  "--rounded-badge",
  "--animation-btn",
  "--animation-input",
  "--btn-focus-scale",
  "--border-btn",
  "--tab-border",
  "--tab-radius",
]

export const forgroundPairs = [
  { input: "#fff", percent: 0.8, result: "0.2 0 0" },
  { input: "#000", percent: 0.8, result: "0.8 0 0" },
  { input: "#fff", percent: 1, result: "0 0 0" },
  { input: "#000", percent: 1, result: "1 0 0" },
  { input: "#1D9BF0", percent: 0.8, result: "0.133411 0.032291 245.539977" },
  { input: "#CF212E", percent: 0.8, result: "0.910234 0.041137 24.396801" },
]
export const repos = [
  {
    name: "daisyui-vite",
    repo: "https://github.com/daisyui/daisyui-vite",
    file: "daisyui-vite/dist/assets/*.css",
    string: "btn",
  },
  {
    name: "daisyui-next",
    repo: "https://github.com/daisyui/daisyui-next",
    file: "daisyui-next/.next/static/css/*.css",
    string: "btn",
  },
  {
    name: "daisyui-sveltekit",
    repo: "https://github.com/daisyui/daisyui-sveltekit",
    file: "daisyui-sveltekit/.svelte-kit/output/server/_app/immutable/**/_page.*.css",
    string: "btn",
  },
  {
    name: "daisyui-nuxt",
    repo: "https://github.com/daisyui/daisyui-nuxt",
    file: "daisyui-nuxt/.output/server/chunks/app/_nuxt/entry-styles.*.mjs",
    string: "btn",
  },
]
