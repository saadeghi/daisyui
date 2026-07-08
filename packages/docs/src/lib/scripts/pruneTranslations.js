import { printChanges, pruneTranslations } from "./translationConfig.js"

const write = process.argv.includes("--write")
const changes = pruneTranslations({ write })

printChanges(
  changes,
  write ? "No unused translations found" : "No unused translations found. Nothing to prune.",
)

if (changes.length && !write) {
  console.log("\nRun with --write to remove unused translations.")
}

