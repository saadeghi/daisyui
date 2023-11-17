import { test, expect, beforeAll } from "bun:test"
import { executeCommands, stringExistsInFile, printPackageDependencies } from "../utils"

beforeAll(() => {
  console.log("Check if daisyUI styles are added to each framework successfully")
})

const repos = [
  {
    name: "daisyui-vite",
    repo: "https://github.com/daisyui/daisyui-vite",
    file: "daisyui-vite/dist/assets/*.css",
    string: "btn",
  },
  {
    name: "daisyui-next",
    repo: "https://github.com/daisyui/daisyui-next",
    file: "daisyui-next/.next/static/css/*.css",
    string: "btn",
  },
]

repos.forEach((config) => {
  test(
    `framework test: ${config.string} exists in ${config.file}`,
    async () => {
      await executeCommands([
        `cd files && git clone ${config.repo}`,
        `cd files/${config.name} && bun i && bun run build`,
      ])
      await printPackageDependencies(config.name)
      const stringExists = await stringExistsInFile(`files/${config.file}`, config.string)
      expect(stringExists).toBe(true)
    },
    5 * 60 * 1000
  )
})
