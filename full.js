import { compile } from './node_modules/tailwindcss/dist/lib.js'
import fs from 'fs/promises';
import path from 'path';

const readFiles = async (directory) => {
  const getAllFiles = async (dir) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return (await Promise.all(entries.map(entry => {
      const res = path.resolve(dir, entry.name);
      return entry.isDirectory() ? getAllFiles(res) : res;
    }))).flat();
  };

  return Promise.all((await getAllFiles(directory))
    .filter(file => path.basename(file).match(/.*\.css/))
    .map(file => fs.readFile(file, 'utf-8')));
};

const main = async () => {
  const [defaultTheme, themeContents, componentContents] = await Promise.all([
    fs.readFile(path.join(import.meta.dir, '/node_modules/tailwindcss/theme.css'), 'utf-8'),
    readFiles(path.join(import.meta.dir, '/themes')),
    readFiles(path.join(import.meta.dir, '/css/components'))
  ]);

  const compiledContent = await (await compile(defaultTheme + themeContents.join('') + componentContents.join(''))).build([]);
  await fs.writeFile(path.join(import.meta.dir, './css/full.css'), compiledContent);
};

main();
