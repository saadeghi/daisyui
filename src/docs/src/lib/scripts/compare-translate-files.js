import fs from "fs"
import { diffString, diff } from "json-diff"

const langs = ["es", "fr", "id", "jp", "ko", "pt", "ru", "zh_cn", "zh_tw"]

langs.forEach((lang) => {
  fs.readFile(`src/translation/en.json`, "utf8", (err1, file1) => {
    if (err1) {
      console.error(err1)
      return
    }
    fs.readFile(`src/translation/${lang}.json`, "utf8", (err2, file2) => {
      if (err2) {
        console.error(err2)
        return
      }
      console.log(
        `"en 🆚 ${lang}": ${diffString(JSON.parse(file1), JSON.parse(file2), {
          keysOnly: true,
        })}`
      )
    })
  })
})
