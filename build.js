import { generateThemesObject } from "./functions/generateThemesObject.js"
import { generateThemeFiles } from "./functions/generateThemeFiles.js"
import { generateColorRules } from "./functions/generateColorRules.js"
import { minify, minifyCssInDirectory } from "./functions/minify.js"
import { generateRawStyles } from "./functions/generateRawStyles.js"
import { generatePlugins } from "./functions/generatePlugins.js"
import { extractClasses } from "./functions/extractClasses.js"
import { generateThemes } from "./functions/generateThemes.js"
import { generateChunks } from "./functions/generateChunks.js"
import { generateIndex } from "./functions/generateIndex.js"
import { generateFull } from "./functions/generateFull.js"
import { copyFile } from "./functions/copyFile.js"
import { removeFiles } from "./functions/removeFiles.js"
import { report } from "./functions/report.js"

async function generateFiles() {
  await removeFiles(['base', 'colors', 'components', 'theme', 'utilities', 'chunks.css', 'full.css', 'index.js', 'themes.css'])
  await Promise.all([
    copyFile('./functions/themePlugin.js', './theme/themePlugin.js', 'index.js'),
    generateColorRules({ distDir: '../colors' }),
    generateThemeFiles({ srcDir: "css/themes", distDir: "theme" }),
    generateRawStyles({ srcDir: '../css/base', distDir: '../base' }),
    generateRawStyles({ srcDir: '../css/components', distDir: '../components', responsive: true }),
    generateRawStyles({ srcDir: '../css/utilities', distDir: '../utilities', responsive: true }),
    generatePlugins({ type: "base", srcDir: "css/themes", distDir: "theme" }),
    generatePlugins({ type: "base", srcDir: "css/base", distDir: "base" }),
    generatePlugins({ type: "component", srcDir: "css/components", distDir: "components" }),
    generatePlugins({ type: "utility", srcDir: "css/utilities", distDir: "utilities" }),
  ]);
  await Promise.all([
    generateIndex('index.js'),
    generateChunks('chunks.css'),
    generateFull('full.css'),
    generateThemes('themes.css'),
    generateThemesObject('./theme/object.js'),
    // extractClasses({ srcDir: 'components' }),
    minifyCssInDirectory(['colors', 'base', 'components', 'utilities']),
    minify('themes.css'),
    minify('full.css'),
  ])


}

async function build() {
  try {
    console.time('Build');
    await generateFiles();
    console.timeEnd('Build');
    await report(['base', 'components', 'utilities', 'colors', 'chunks.css', 'themes.css', 'full.css']);
  } catch (error) {
    console.error("An error occurred during processing:", error);
  }
}

build();
