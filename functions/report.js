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
    throw new Error(`Error processing file ${filePath}: ${error.message}`);
  }
}

async function processDirectory(dir) {
  try {
    const files = await fs.readdir(dir);
    const cssFiles = files.filter(file => file.endsWith('.css'));
    return Promise.all(cssFiles.map(file => processFile(path.join(dir, file))));
  } catch (error) {
    throw new Error(`Error accessing ${dir}: ${error.message}`);
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
      throw new Error(`Error accessing ${item}: ${error.message}`);
    }
  };

  const results = await Promise.all(directories.map(processItem));
  const flatReport = results.flat().filter(Boolean);

  if (flatReport.length === 0) {
    throw new Error("No files were successfully processed.");
  }

  console.table(flatReport, ['file', 'selector', 'line', 'var', 'raw', 'brotli']);

  // Save the report if it's different from the last one
  const timestamp = new Date().toISOString();
  const reportData = {
    timestamp,
    data: flatReport
  };

  const reportsDir = path.join(process.cwd(), '.logs');
  try {
    await fs.mkdir(reportsDir, { recursive: true });

    // Get the most recent report file
    const files = await fs.readdir(reportsDir);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    jsonFiles.sort().reverse(); // Sort in descending order

    let shouldSave = true;

    if (jsonFiles.length > 0) {
      const lastReportPath = path.join(reportsDir, jsonFiles[0]);
      const lastReportContent = await fs.readFile(lastReportPath, 'utf8');
      const lastReport = JSON.parse(lastReportContent);

      // Compare current data with last report data
      if (JSON.stringify(reportData.data) === JSON.stringify(lastReport.data)) {
        shouldSave = false;
      }
    }

    if (shouldSave) {
      const reportPath = path.join(reportsDir, `report-${timestamp}.json`);
      await fs.writeFile(reportPath, JSON.stringify(reportData, null, null));
      console.log(`Report saved: ${reportPath}`);

      // Update index.js with list of all report files
      const updatedFiles = await fs.readdir(reportsDir);
      const updatedJsonFiles = updatedFiles.filter(file => file.endsWith('.json'));
      const indexContent = `export const reportFiles = ${JSON.stringify(updatedJsonFiles, null, null)};`;
      await fs.writeFile(path.join(reportsDir, 'index.js'), indexContent);
    }

  } catch (error) {
    throw new Error('Error saving report or generating index:', error);
  }
};
