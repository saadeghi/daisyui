import { afterEach, expect, test } from "bun:test"
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { pathToFileURL } from "node:url"
import { createTempDirTracker, runInCwd } from "./testUtils.js"

const tempDirs = createTempDirTracker("daisyui-report-")
const moduleUrl = pathToFileURL(join(import.meta.dirname, "report.js")).href

afterEach(tempDirs.cleanup)

test("report writes a new compressed-size report and index", async () => {
  const dir = await tempDirs.make()
  const projectDir = join(dir, "project")
  await mkdir(projectDir)
  await writeFile(join(projectDir, "button.css"), ".btn{--color-primary:red;color:var(--color-primary)}")

  await runInCwd(
    projectDir,
    `console.table = () => {};
console.log = () => {};
const { report } = await import(${JSON.stringify(moduleUrl)});
await report([${JSON.stringify(join(projectDir, "button.css"))}]);`,
  )

  const logsDir = join(dir, "logs")
  const files = await readdir(logsDir)
  const jsonFile = files.find((file) => file.endsWith(".json"))
  expect(jsonFile).toBeString()
  expect(await readFile(join(logsDir, "index.js"), "utf-8")).toContain("reportFiles")

  const data = JSON.parse(await readFile(join(logsDir, jsonFile), "utf-8"))
  expect(data.data[0].file).toBe(join(projectDir, "button.css"))
  expect(data.data[0].selector).toBe(1)
  expect(data.data[0].var).toBe(2)
})
