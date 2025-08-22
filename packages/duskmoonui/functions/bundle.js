import { updateVersion } from "./updateVersion.js"

const BANNER = "/** 🌼\n *  @license MIT\n *  duskmoonUI bundle\n *  https://duskmoonui.com/\n */\n"
const FOOTER =
  '\n/*\n    \n  MIT License\n    \n  Copyright (c) 2020 Pouya Saadeghi – https://duskmoonui.com\n    \n  Permission is hereby granted, free of charge, to any person obtaining a copy\n  of this software and associated documentation files (the "Software"), to deal\n  in the Software without restriction, including without limitation the rights\n  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n  copies of the Software, and to permit persons to whom the Software is\n  furnished to do so, subject to the following conditions:\n    \n  The above copyright notice and this permission notice shall be included in all\n  copies or substantial portions of the Software.\n    \n  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n  SOFTWARE.\n\n*/'

await Promise.all([
  updateVersion(),
  Bun.build({
    entrypoints: ["packages/duskmoonui/index.js"],
    outdir: "packages/bundle",
    naming: "duskmoonui.mjs",
    format: "esm",
    banner: BANNER,
    footer: FOOTER,
  }),
  Bun.build({
    entrypoints: ["packages/duskmoonui/theme/index.js"],
    outdir: "packages/bundle",
    naming: "duskmoonui-theme.mjs",
    format: "esm",
    banner: BANNER,
    footer: FOOTER,
  }),
  Bun.build({
    entrypoints: ["packages/duskmoonui/index.js"],
    outdir: "packages/bundle",
    naming: "duskmoonui.js",
    format: "cjs",
    banner: BANNER,
    footer: FOOTER,
  }),
  Bun.build({
    entrypoints: ["packages/duskmoonui/theme/index.js"],
    outdir: "packages/bundle",
    naming: "duskmoonui-theme.js",
    format: "cjs",
    banner: BANNER,
    footer: FOOTER,
  }),
])
