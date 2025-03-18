import fs from "node:fs"
import { diffString } from "json-diff"

const translationDir = "src/translation"

// Read all files from translation directory and filter out en.json
fs.readdir(translationDir, (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  const langs = files
    .filter((file) => file.endsWith(".json") && file !== "en.json")
    .map((file) => file.replace(".json", ""))

  for (const lang of langs) {
    fs.readFile("src/translation/en.json", "utf8", (err1, file1) => {
      if (err1) {
        console.error(err1)
        return
      }
      fs.readFile(`src/translation/${lang}.json`, "utf8", (err2, file2) => {
        if (err2) {
          console.error(err2)
          return
        }
        const diff = diffString(JSON.parse(file1), JSON.parse(file2), {
          keysOnly: true,
        })
        if (diff) {
          console.log(`EN 🆚 ${lang.toUpperCase()}\n${diff}`)
        }
      })
    })
  }
})
