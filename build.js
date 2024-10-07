import { generateColorRules } from "./functions/generateColorRules.js"
import { generatePlugins } from "./functions/generatePlugins.js"
import { generateRawStyles } from "./functions/generateRawStyles.js"
import { generateIndex } from "./functions/generateIndex.js"
import { generateFull } from "./functions/generateFull.js"
import { extractClasses } from "./functions/extractClasses.js"
import { minifyAllFiles } from "./functions/minify.js"
import { report } from "./functions/report.js"

async function generateAllFiles() {
  await Promise.all([
    generateColorRules({ distDir: '../colors' }),
    generatePlugins({ type: "base", srcDir: "css/base", distDir: "base" }),
    generateRawStyles({ srcDir: '../css/base', distDir: '../base' }),
    generatePlugins({ type: "component", srcDir: "css/components", distDir: "components" }),
    generateRawStyles({ srcDir: '../css/components', distDir: '../components' }),
    generatePlugins({ type: "utility", srcDir: "css/utilities", distDir: "utilities" }),
    generateRawStyles({ srcDir: '../css/utilities', distDir: '../utilities' }),
    generateIndex('index.css'),
    generateFull('full.css'),
    extractClasses({ srcDir: 'components' }),
  ]);
  await minifyAllFiles();
}

async function main() {
  try {
    console.time('Build');
    await generateAllFiles();
    console.timeEnd('Build');
    await report(['base', 'components', 'utilities', 'colors', 'index.css', 'full.css']);
  } catch (error) {
    console.error("An error occurred during processing:", error);
  }
}

main();
