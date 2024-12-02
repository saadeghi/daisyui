import fs from "fs"
import { generateThemesObject } from "./functions/generateThemesObject.js"
import { generateThemeFiles } from "./functions/generateThemeFiles.js"
import { generateColorRules } from "./functions/generateColorRules.js"
import { generateRawStyles } from "./functions/generateRawStyles.js"
import { minify, minifyCssInDirectory } from "./functions/minify.js"
import { generatePlugins } from "./functions/generatePlugins.js"
// import { extractClasses } from "./functions/extractClasses.js"
import { generateThemes } from "./functions/generateThemes.js"
import { generateChunks } from "./functions/generateChunks.js"
import { generateImports } from "./functions/generateImports.js"
import { packCss } from "./functions/packCss.js"
import { removeFiles } from "./functions/removeFiles.js"
import { copyFile } from "./functions/copyFile.js"
import { report } from "./functions/report.js"
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
const isProd = process.argv.includes("--prod")

async function generateFiles() {
  await Promise.all([
    copyFile("./functions/themePlugin.js", "./theme/themePlugin.js", "index.js"),
    isProd &&
      generateColorRules({
        distDir: "../colors",
        styles: ["bg", "text", "border"],
        breakpoints: ["sm", "md", "lg", "xl", "2xl"],
        states: ["hover"],
      }),
    isProd && generateThemeFiles({ srcDir: "src/themes", distDir: "theme" }),
    isProd && generateRawStyles({ srcDir: "../src/base", distDir: "../base" }),
    isProd &&
      generateRawStyles({
        srcDir: "../src/components",
        distDir: "../components",
        responsive: true,
        exclude: ["calendar", "countdown", "loading", "mask", "mockup", "skeleton", "swap"],
      }),
    isProd &&
      generateRawStyles({
        srcDir: "../src/utilities",
        distDir: "../utilities",
        responsive: true,
        exclude: ["typography"],
      }),
    generatePlugins({ type: "base", srcDir: "src/themes", distDir: "theme" }),
    generatePlugins({ type: "base", srcDir: "src/base", distDir: "base" }),
    generatePlugins({ type: "component", srcDir: "src/components", distDir: "components" }),
    generatePlugins({ type: "utility", srcDir: "src/utilities", distDir: "utilities" }),
  ])
  await Promise.all([
    generateImports("imports.js"),
    isProd && generateChunks("chunks.css"),
    isProd && packCss("daisyui.css", []),
    isProd && generateThemes("themes.css"),
    generateThemesObject("./theme/object.js"),
  ])
  await Promise.all([
    // extractClasses({ srcDir: "components" }),
    isProd && minifyCssInDirectory(["colors", "base", "components", "utilities"]),
    isProd && minify("themes.css"),
    isProd && minify("daisyui.css"),
  ])
}

async function build() {
  try {
    isProd &&
      (await removeFiles([
        "base",
        "colors",
        "components",
        "theme",
        "utilities",
        "chunks.css",
        "daisyui.css",
        "imports.js",
        "themes.css",
      ]))
    console.time(`🌼 daisyUI ${packageJson.version}`)
    await generateFiles()
    console.timeEnd(`🌼 daisyUI ${packageJson.version}`)
    isProd &&
      (await report([
        "base",
        "components",
        "utilities",
        "colors",
        "chunks.css",
        "themes.css",
        "daisyui.css",
      ]))
  } catch (error) {
    throw new Error("Build error: " + error.message)
  }
}

build()
