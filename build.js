import fs from 'fs';
import { generateColorRules } from "./functions/generateColorRules.js"
import { generatePlugins } from "./functions/generatePlugins.js"
import { generateRawStyles } from "./functions/generateRawStyles.js"
import { generateIndex } from "./functions/generateIndex.js"
import { generateFull } from "./functions/generateFull.js"
import { extractClasses } from "./functions/extractClasses.js"
import { minifyAllFiles } from "./functions/minify.js"

Promise.all([
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
]).then(async (results) => {
  const minifyResult = await minifyAllFiles();
  return [...results, minifyResult];
}).then((results) => {
  const [colorRules, basePlugins, baseStyles, componentPlugins, componentStyles, utilityPlugins, utilityStyles, index, full, componentClassnames, minifyResult] = results;
  const tableData = [
    { file: '/base', details: `${basePlugins} plugins, ${baseStyles.fileCount} CSS`, kB: baseStyles.totalSize / 1000 },
    { file: '/components', details: `${componentPlugins} plugins, ${componentStyles.fileCount} CSS`, kB: componentStyles.totalSize / 1000 },
    { file: '/utilities', details: `${utilityPlugins} plugins, ${utilityStyles.fileCount} CSS`, kB: utilityStyles.totalSize / 1000 },
    { file: '/colors', details: `${colorRules} rules`, kB: fs.readdirSync('colors').reduce((acc, file) => acc + fs.statSync(`colors/${file}`).size, 0) / 1000 },
    { file: 'index.css', details: `${index} rules`, kB: fs.statSync('index.css').size / 1000 },
    { file: 'full.css', details: `${full} imports`, kB: fs.statSync('full.css').size / 1000 },
    { file: 'extracted classname', details: `${componentClassnames}` },
    { file: 'Minified', details: `${minifyResult.files} files, –${minifyResult.reduction / 1000} kB (-${minifyResult.percent}%)`, kB: minifyResult.minified / 1000 },
  ];
  console.table(tableData, ['file', 'details', 'kB']);
})
