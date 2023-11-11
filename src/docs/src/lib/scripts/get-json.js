import { exec } from "child_process"

const commands = [
  "node src/lib/scripts/download-file.js 'https://api.npmjs.org/downloads/point/1970:2100/daisyui' 'src/lib/json/npm-downloads.json'",
  "node src/lib/scripts/download-file.js 'https://api.github.com/repos/saadeghi/daisyui' 'src/lib/json/github-repo.json'",
  "node src/lib/scripts/download-file.js 'https://api.github.com/repos/saadeghi/daisyui/contributors?page=1&per_page=100' 'src/lib/json/github-contributors-1.json'",
  "node src/lib/scripts/download-file.js 'https://api.github.com/repos/saadeghi/daisyui/contributors?page=2&per_page=100' 'src/lib/json/github-contributors-2.json'",
  "node src/lib/scripts/download-file.js 'https://opencollective.com/daisyui.json' 'src/lib/json/opencollective-info.json'",
  "node src/lib/scripts/download-file.js 'https://opencollective.com/daisyui/members/all.json' 'src/lib/json/opencollective-members.json'",
  "node --env-file=.env.local src/lib/scripts/get-youtube-resources.js 'src/lib/json/youtube.json'",
]
let number_of_files = 0
const promises = commands.map((command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing command:", error)
        reject(error)
      }
      if (stderr) {
        console.error("Error executing command:", stderr)
        reject(stderr)
      }
      number_of_files++
      resolve(stdout)
    })
  })
})
Promise.all(promises)
  .then(() => {
    process.stdout.write(`Downloaded ${number_of_files} JSON files`)
  })
  .catch((err) => {
    console.error("Error downloading JSON files:", err)
  })
