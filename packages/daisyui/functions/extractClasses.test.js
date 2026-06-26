import { afterEach, expect, test } from "bun:test"
import { existsSync } from "node:fs"
import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { extractClasses } from "./extractClasses.js"

const packageDir = join(import.meta.dirname, "..")
const srcRoot = join(packageDir, "src")
let cleanupPaths = []

const uniqueName = (prefix) => `${prefix}-${crypto.randomUUID()}`

const track = (path) => {
  cleanupPaths.push(path)
  return path
}

afterEach(async () => {
  await Promise.all(cleanupPaths.map((path) => rm(path, { recursive: true, force: true })))
  cleanupPaths = []
})

test("extractClasses processes CSS files and extracts class names", async () => {
  const srcDir = uniqueName("styles")
  const outputDir = track(join(packageDir, srcDir))
  const stylesDir = track(join(srcRoot, srcDir))
  await mkdir(stylesDir, { recursive: true })
  await writeFile(
    join(stylesDir, "file1.css"),
    ".class1 { color: red; } .class2, .class3 { color: blue; }",
  )
  await writeFile(join(stylesDir, "file2.css"), ".class4 { color: green; } .class5:hover {}")

  const totalClassNames = await extractClasses({ srcDir })

  expect(totalClassNames).toBe(5)
  expect(JSON.parse(await readFile(join(outputDir, "file1", "class.json"), "utf-8"))).toEqual([
    "class1",
    "class2",
    "class3",
  ])
  expect(JSON.parse(await readFile(join(outputDir, "file2", "class.json"), "utf-8"))).toEqual([
    "class4",
    "class5",
  ])
})

test("extractClasses throws error if no CSS files are found", async () => {
  const srcDir = uniqueName("empty-styles")
  track(join(packageDir, srcDir))
  track(join(srcRoot, srcDir))
  await mkdir(join(srcRoot, srcDir), { recursive: true })

  await expect(extractClasses({ srcDir })).rejects.toThrow(
    "No CSS files found in the specified directory",
  )
})

test("extractClasses throws error if reading directory fails", async () => {
  const srcDir = uniqueName("missing-styles")

  await expect(extractClasses({ srcDir })).rejects.toThrow("Error extracting classes:")
  expect(existsSync(join(packageDir, srcDir))).toBe(false)
})
