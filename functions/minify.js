import fs from 'fs';
import path from 'path';
import { transform } from 'lightningcss';

export const minify = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const css = fs.readFileSync(filePath, 'utf8');
  const originalSize = Buffer.byteLength(css, 'utf8');

  const { code } = transform({
    filename: filePath,
    code: Buffer.from(css),
    minify: true,
  });

  // This will overwrite the original file
  fs.writeFileSync(filePath, code);

  const minifiedSize = Buffer.byteLength(code);
  return { originalSize, minifiedSize };
}

const minifyFiles = async (directory) => {
  const files = fs.readdirSync(directory)
    .filter(file => path.extname(file).toLowerCase() === '.css')
    .map(file => path.join(directory, file));

  const results = await Promise.all(files.map(minify));
  return {
    count: files.length,
    ...results.reduce((acc, result) => {
      if (result) {
        acc.originalSize += result.originalSize;
        acc.minifiedSize += result.minifiedSize;
      }
      return acc;
    }, { originalSize: 0, minifiedSize: 0 })
  };
}

export const minifyAllFiles = async () => {
  let files = 0;
  let totalOriginalSize = 0;
  let totalMinifiedSize = 0;

  const results = await Promise.all([
    minifyFiles(path.join('colors')),
    minifyFiles(path.join('base')),
    minifyFiles(path.join('components'))
  ]);

  results.forEach(result => {
    files += result.count;
    totalOriginalSize += result.originalSize;
    totalMinifiedSize += result.minifiedSize;
  });

  const reduction = totalOriginalSize - totalMinifiedSize;
  const percent = ((1 - totalMinifiedSize / totalOriginalSize) * 100).toFixed(2);
  return { files, original: totalOriginalSize, minified: totalMinifiedSize, reduction, percent };
}
