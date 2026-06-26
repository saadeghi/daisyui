import { afterEach, expect, test } from "bun:test"
import { readFile, rm } from "node:fs/promises"
import { join } from "node:path"
import { generateColorRules } from "./generateColorRules.js"

let generatedDirs = []

const makeDistDir = () => {
  const dir = `tmp-color-rules-${crypto.randomUUID()}`
  generatedDirs.push(join(import.meta.dirname, dir))
  return dir
}

afterEach(async () => {
  await Promise.all(generatedDirs.map((dir) => rm(dir, { recursive: true, force: true })))
  generatedDirs = []
})

test("generateColorRules writes property, responsive, and state color utilities", async () => {
  const distDir = makeDistDir()

  await generateColorRules({
    distDir,
    properties: ["bg"],
    breakpoints: ["sm", "2xl"],
    states: ["hover"],
    opacities: {
      properties: [50],
      responsive: [],
      states: [],
    },
    outputFiles: {
      properties: "properties.css",
      responsive: "responsive.css",
      states: "states.css",
    },
  })

  const properties = await readFile(join(import.meta.dirname, distDir, "properties.css"), "utf-8")
  const responsive = await readFile(join(import.meta.dirname, distDir, "responsive.css"), "utf-8")
  const states = await readFile(join(import.meta.dirname, distDir, "states.css"), "utf-8")

  expect(properties).toContain(".bg-primary")
  expect(properties).toContain(".bg-primary\\/50")
  expect(responsive).toContain("@media (width >= 40rem)")
  expect(responsive).toContain(".sm\\:bg-primary")
  expect(responsive).toContain(".\\32xl\\:bg-primary")
  expect(states).toContain(".hover\\:bg-primary:hover")
})
