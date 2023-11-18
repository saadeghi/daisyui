import { test, expect, beforeAll, afterAll } from "bun:test"
import { executeCommand, stringExistsInFile } from "./utils"
import { repos } from "./data"

beforeAll(() => {
  console.log("Check if daisyUI styles are added to each framework successfully")
})

repos.forEach((config) => {
  test(
    `framework test: ${config.string} exists in ${config.file}`,
    () => {
      executeCommand(
        `cd src/tests/files && rm -rf ${config.name} && git clone ${config.repo} && cd ${config.name} && bun i && bun run build`
      )
      executeCommand(`cd src/tests/files && cd ${config.name} && bun i && bun run build`)
      expect(stringExistsInFile(`src/tests/files/${config.file}`, config.string)).toBe(true)
      executeCommand(`cd src/tests/files && rm -rf ${config.name}`)
    },
    5 * 60 * 1000
  )
})
