import zlib from 'zlib';
import { promises as fs } from 'fs';
import path from 'path';

async function processFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const stats = await fs.stat(filePath);
    const brotliSize = await compressFile(fileContent, zlib.brotliCompress);

    const cssVariables = (fileContent.match(/--[\w-]+/g) || []).length;

    return {
      file: filePath,
      selector: (fileContent.match(/(?:[^}]+{|@\w+\s*[^;{}]+(?:;|\{))/g) || []).length,
      line: fileContent.split('\n').length,
      var: cssVariables,
      raw: stats.size / 1000,
      brotli: brotliSize / 1000,
    };
  } catch (error) {
    console.error(`Error processing file ${filePath}: ${error.message}`);
    return null;
  }
}

async function processDirectory(dir) {
  try {
    const files = await fs.readdir(dir);
    const cssFiles = files.filter(file => file.endsWith('.css'));
    return Promise.all(cssFiles.map(file => processFile(path.join(dir, file))));
  } catch (error) {
    console.error(`Error accessing ${dir}: ${error.message}`);
    return [];
  }
}

async function compressFile(content, compressFunc) {
  return new Promise(resolve => compressFunc(content, (_, result) => resolve(result.length)));
}

export const report = async (directories) => {
  const processItem = async (item) => {
    try {
      const stats = await fs.stat(item);
      return stats.isDirectory() ? processDirectory(item) : processFile(item);
    } catch (error) {
      console.error(`Error accessing ${item}: ${error.message}`);
      return null;
    }
  };

  const results = await Promise.all(directories.map(processItem));
  const flatReport = results.flat().filter(Boolean);

  if (flatReport.length === 0) {
    console.error("No files were successfully processed.");
    return;
  }

  console.table(flatReport, ['file', 'selector', 'line', 'var', 'raw', 'brotli']);
};
