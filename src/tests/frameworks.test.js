import { test, expect, beforeAll } from "bun:test"
import { executeCommand, stringExistsInFile } from "./utils"
import { repos } from "./data"

beforeAll(() => {
  console.log("Check if daisyUI styles are added to each framework successfully")
})

repos.forEach((config) => {
  test(
    `framework – ${config.name}: ${config.string} exists in ${config.file}`,
    () => {
      console.log(`building ${config.repo} ...`)
      executeCommand(
        `cd src/tests/files && rm -rf ${config.name} && git clone ${config.repo} --quiet && cd ${config.name} && bun i --silent && bun run build`
      )
      expect(stringExistsInFile(`src/tests/files/${config.file}`, config.string)).toBe(true)
      executeCommand(`cd src/tests/files && rm -rf ${config.name}`)
    },
    5 * 60 * 1000
  )
})
