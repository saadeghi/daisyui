import { printChanges, syncMissingTranslations } from "./translationConfig.js"

const write = process.argv.includes("--write")
const changes = syncMissingTranslations({ write })

printChanges(
  changes,
  write ? "No missing translations found" : "No missing translations found. Nothing to write.",
)

if (changes.length && !write) {
  console.log("\nRun with --write to update translation files.")
}

