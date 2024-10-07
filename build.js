import fs from 'fs';
import zlib from 'zlib';
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
]).then(async () => {
  await minifyAllFiles();
}).then(() => {

  const directories = ['base', 'components', 'utilities', 'colors', 'index.css', 'full.css'];

  const report = directories.flatMap((dir) => {
    const isDirectory = fs.statSync(dir).isDirectory();
    if (isDirectory) {
      const files = fs.readdirSync(dir);
      const cssFiles = files.filter((file) => file.endsWith('.css'));

      return cssFiles.map((file) => {
        const filePath = `${dir}/${file}`;
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const rulesCount = fileContent.split('}').length - 1;
        const rawSize = fs.statSync(filePath).size / 1000;
        const gzipSize = zlib.gzipSync(fileContent).length / 1000;
        const brotliSize = zlib.brotliCompressSync(fileContent).length / 1000;
        const linesCount = fileContent.split('\n').length;

        return {
          file: filePath,
          rules: rulesCount,
          lines: linesCount,
          raw: rawSize,
          gzip: gzipSize,
          brotli: brotliSize,
        };
      });
    } else {
      const fileContent = fs.readFileSync(dir, 'utf8');
      const rulesCount = (fileContent.match(/[;}]/g) || []).length;
      const rawSize = fs.statSync(dir).size / 1000;
      const gzipSize = zlib.gzipSync(fileContent).length / 1000;
      const brotliSize = zlib.brotliCompressSync(fileContent).length / 1000;
      const linesCount = fileContent.split('\n').length;

      return {
        file: dir,
        rules: rulesCount,
        lines: linesCount,
        raw: rawSize,
        gzip: gzipSize,
        brotli: brotliSize,
      };
    }
  });

  const sum = report.reduce((acc, curr) => {
    acc.rules += curr.rules;
    acc.lines += curr.lines;
    acc.raw += curr.raw;
    acc.gzip += curr.gzip;
    acc.brotli += curr.brotli;
    return acc;
  }, { file: 'TOTAL', rules: 0, lines: 0, raw: 0, gzip: 0, brotli: 0 });

  sum.raw = Number(sum.raw.toFixed(3));
  report.push(sum);
  console.table(report, ['file', 'rules', 'lines', 'raw', 'gzip', 'brotli']);


})
