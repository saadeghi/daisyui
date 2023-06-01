import { exec } from "child_process"

const commands = [
  "node src/lib/scripts/download-json-to-path 'https://api.npmjs.org/downloads/point/1970:2023/daisyui' 'src/lib/json/npm-downloads'",
  "node src/lib/scripts/download-json-to-path 'https://api.github.com/repos/saadeghi/daisyui' 'src/lib/json/github-repo'",
  "node src/lib/scripts/download-json-to-path 'https://api.github.com/repos/saadeghi/daisyui/contributors?page=1&per_page=100' 'src/lib/json/github-contributors-1'",
  "node src/lib/scripts/download-json-to-path 'https://api.github.com/repos/saadeghi/daisyui/contributors?page=2&per_page=100' 'src/lib/json/github-contributors-2'",
  "node src/lib/scripts/download-json-to-path 'https://opencollective.com/daisyui.json' 'src/lib/json/opencollective-info'",
  "node src/lib/scripts/download-json-to-path 'https://opencollective.com/daisyui/members/all.json' 'src/lib/json/opencollective-members'",
]

commands.forEach((command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("Error executing command:", error)
      return
    }
    if (stderr) {
      console.error("Error executing command:", stderr)
      return
    }
    console.log("Success:", stdout)
  })
})
