import fs from 'fs';
import { generateColors } from "./functions/generateColors.js"
import { generatePlugins } from "./functions/generatePlugins.js"
import { generateComponents } from "./functions/generateComponents.js"
import { generateIndex } from "./functions/generateIndex.js"
import { generateFull } from "./functions/generateFull.js"

Promise.all([
  generateColors('colors.css'),
  generatePlugins({ srcDir: "css/components", distDir: "components" }),
  generateComponents(),
  generateIndex('index.css'),
  generateFull('full.css')
]).then(([colors, plugins, components, index, full]) => {
  const results = [
    { file: 'components/*', value: `${plugins} directories, ${components.fileCount} CSS files`, kB: components.totalSize / 1000 },
    { file: 'colors.css', value: `${colors} rules`, kB: fs.statSync('colors.css').size / 1000 },
    { file: 'index.css', value: `${index} rules`, kB: fs.statSync('index.css').size / 1000 },
    { file: 'full.css', value: `${full} imports`, kB: fs.statSync('full.css').size / 1000 }
  ];
  console.table(results, ['file', 'value', 'kB']);
})
