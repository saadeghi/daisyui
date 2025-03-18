import { brotliCompress, constants } from "node:zlib"
import { promises as fs } from "fs"
import path from "path"

const checkVariableWarnings = (variables, filename) => {
  const twVariables = variables.filter(
    (variable) => variable.startsWith("--container") && variable !== "--tw-content",
  )
  const spacingVariables = variables.filter((variable) => variable.startsWith("var(--spacing)"))

  if (
    twVariables.length > 0 &&
    !["typography.css", "properties.css", "states.css", "responsive.css", "daisyui.css"].includes(
      filename,
    )
  ) {
    console.log(`Warning: unnecessary --tw variables in ${filename}:`, twVariables)
  }
  if (spacingVariables.length > 0 && !["spacing.css", "grid.css"].includes(filename)) {
    console.log(`Warning: dangerous var(--spacing) variables in ${filename}:`, spacingVariables)
  }
}

const compressFile = (content, compressFunc, compressionLevel = 11) => {
  return new Promise((resolve, reject) => {
    compressFunc(
      content,
      { params: { [constants.BROTLI_PARAM_QUALITY]: compressionLevel } },
      (err, result) => {
        if (err) reject(err)
        else resolve(result.length)
      },
    )
  })
}

const processFile = async (filePath) => {
  const fileContent = await fs.readFile(filePath, "utf8")
  const stats = await fs.stat(filePath)
  const brotliSize = await compressFile(fileContent, brotliCompress)
  const allCssVariables = fileContent.match(/--[\w-]+/g) || []

  checkVariableWarnings(allCssVariables, path.basename(filePath))

  return {
    file: filePath,
    selector: (fileContent.match(/(?:[^}]+{|@\w+\s*[^;{}]+(?:;|\{))/g) || []).length,
    var: allCssVariables.length,
    raw: stats.size / 1000,
    brotli: brotliSize / 1000,
    "%": Math.round((1 - brotliSize / stats.size) * 100),
  }
}

const processDirectory = async (dir) => {
  const files = await fs.readdir(dir)
  const cssFiles = files.filter((file) => file.endsWith(".css"))
  return Promise.all(cssFiles.map((file) => processFile(path.join(dir, file))))
}

const normalizeData = (data) => {
  return data.map((item) => ({
    ...item,
    file: path.basename(item.file),
    raw: Number(item.raw.toFixed(3)),
    brotli: Number(item.brotli.toFixed(3)),
    "%": Number(item["%"]),
  }))
}

const shouldSaveNewReport = async (lastReportPath, currentData) => {
  try {
    const lastReportContent = await fs.readFile(lastReportPath, "utf8")
    const lastReport = JSON.parse(lastReportContent)

    const currentNormalized = normalizeData(currentData)
    const lastNormalized = normalizeData(lastReport.data)

    return JSON.stringify(currentNormalized) !== JSON.stringify(lastNormalized)
  } catch (error) {
    console.log(error)
    return true
  }
}

export const report = async (directories) => {
  try {
    const results = await Promise.all(
      directories.map(async (item) => {
        const stats = await fs.stat(item)
        return stats.isDirectory() ? processDirectory(item) : processFile(item)
      }),
    )

    const flatReport = results.flat().filter(Boolean)
    if (flatReport.length === 0) throw new Error("No files were successfully processed.")

    console.table(flatReport, ["file", "selector", "var", "raw", "brotli", "%"])

    const reportData = {
      timestamp: new Date().toISOString().replace(/:/g, "-"),
      data: flatReport,
    }

    const reportsDir = path.join(process.cwd(), "../logs")
    await fs.mkdir(reportsDir, { recursive: true })

    const files = await fs.readdir(reportsDir)
    const jsonFiles = files
      .filter((file) => file.endsWith(".json") && file !== "package.json")
      .sort((a, b) => b.localeCompare(a))

    const shouldSave =
      jsonFiles.length === 0 ||
      (await shouldSaveNewReport(path.join(reportsDir, jsonFiles[0]), flatReport))

    if (shouldSave) {
      const reportPath = path.join(reportsDir, `${reportData.timestamp}.json`)
      await fs.writeFile(reportPath, JSON.stringify(reportData, null, 0))

      const updatedFiles = (await fs.readdir(reportsDir)).filter(
        (file) => file.endsWith(".json") && file !== "package.json",
      )
      await fs.writeFile(
        path.join(reportsDir, "index.js"),
        `export const reportFiles = ${JSON.stringify(updatedFiles, null, 0)};`,
      )

      console.log(`Report saved: ${reportPath}`)
    }
  } catch (error) {
    console.error(`Error: ${error.message}`)
    throw error
  }
}
