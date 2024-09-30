import fs from 'fs';
import { generateColorRules } from "./functions/generateColorRules.js"
import { generatePlugins } from "./functions/generatePlugins.js"
import { generateComponents } from "./functions/generateComponents.js"
import { generateIndex } from "./functions/generateIndex.js"
import { generateFull } from "./functions/generateFull.js"
import { extractClasses } from "./functions/extractClasses.js"

Promise.all([
  generateColorRules('colors.css'),
  generatePlugins({ srcDir: "css/components", distDir: "components" }),
  generateComponents({ srcDir: '../css/components', distDir: '../components' }),
  generateIndex('index.css'),
  generateFull('full.css'),
  extractClasses()
]).then(([colors, plugins, components, index, full, extract]) => {
  const results = [
    { file: 'components/*', details: `${plugins} directories, ${components.fileCount} CSS files`, kB: components.totalSize / 1000 },
    { file: 'colors.css', details: `${colors} rules`, kB: fs.statSync('colors.css').size / 1000 },
    { file: 'index.css', details: `${index} rules`, kB: fs.statSync('index.css').size / 1000 },
    { file: 'full.css', details: `${full} imports`, kB: fs.statSync('full.css').size / 1000 },
    { file: 'class names', details: `${extract}` }
  ];
  console.table(results, ['file', 'details', 'kB']);
})
