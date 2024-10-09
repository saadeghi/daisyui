import { generateColorRules } from "./functions/generateColorRules.js"
import { generatePlugins } from "./functions/generatePlugins.js"
import { generateRawStyles } from "./functions/generateRawStyles.js"
import { generateIndex } from "./functions/generateIndex.js"
import { generateChunks } from "./functions/generateChunks.js"
import { generateFull } from "./functions/generateFull.js"
import { extractClasses } from "./functions/extractClasses.js"
import { minify, minifyCssInDirectory } from "./functions/minify.js"
import { report } from "./functions/report.js"

async function generateFiles() {
  await Promise.all([
    generateColorRules({ distDir: '../colors' }),
    generatePlugins({ type: "base", srcDir: "css/base", distDir: "base" }),
    generateRawStyles({ srcDir: '../css/base', distDir: '../base' }),
    generatePlugins({ type: "component", srcDir: "css/components", distDir: "components" }),
    generateRawStyles({ srcDir: '../css/components', distDir: '../components' }),
    generatePlugins({ type: "utility", srcDir: "css/utilities", distDir: "utilities" }),
    generateRawStyles({ srcDir: '../css/utilities', distDir: '../utilities' }),
  ]);

  await generateIndex('index.css')
  await generateChunks('chunks.css')
  await generateFull('full.css')
  await extractClasses({ srcDir: 'components' })
  await minifyCssInDirectory(['colors', 'base', 'components', 'utilities'])
  await minify('full.css')

}

async function build() {
  try {
    console.time('Build');
    await generateFiles();
    console.timeEnd('Build');
    await report(['base', 'components', 'utilities', 'colors', 'index.css', 'chunks.css', 'full.css']);
  } catch (error) {
    console.error("An error occurred during processing:", error);
  }
}

build();
