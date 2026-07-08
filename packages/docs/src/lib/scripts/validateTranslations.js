import { validateTranslations } from "./translationConfig.js"

const issues = validateTranslations()

if (!issues.length) {
  console.log("Translation files are valid")
  process.exit(0)
}

for (const issue of issues) {
  const files = issue.files || (issue.file ? [issue.file] : [])
  const sources = issue.sources || []

  if (issue.type === "excluded-route-key") {
    const chunks = issue.chunks?.length ? issue.chunks : ["unknown"]
    const location = issue.key
      ? ` item "${issue.key}" in ${chunks.map((chunk) => `*.${chunk}.json`).join(", ")}:`
      : ""
    console.error(`[${issue.type}]${location} ${issue.message}`)
    if (sources.length) {
      console.error("  Excluded source files:")
      for (const source of sources) {
        console.error(`    - ${source}`)
      }
    }
    continue
  }

  if (files.length > 1) {
    console.error(`[${issue.type}] ${issue.message}`)
    if (sources.length) {
      console.error("  Excluded source files:")
      for (const source of sources) {
        console.error(`    - ${source}`)
      }
    }
    console.error("  Translation files:")
    for (const file of files) {
      console.error(`    - ${file}`)
    }
    continue
  }

  const location = files.length ? ` ${files[0]}:` : ""
  console.error(`[${issue.type}]${location} ${issue.message}`)
  if (sources.length) {
    console.error("  Excluded source files:")
    for (const source of sources) {
      console.error(`    - ${source}`)
    }
  }
}

process.exit(1)
