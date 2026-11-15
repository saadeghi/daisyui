import { expect, test } from "bun:test"
import fs from "fs"
import path from "path"
import { base, components, utilities } from "../imports.js"

const packageRoot = path.resolve(import.meta.dirname, "..")
const groups = { base, components, utilities }

const listedSources = (group) =>
  fs
    .readdirSync(path.join(packageRoot, "src", group))
    .filter((file) => file.endsWith(".css"))
    .map((file) => path.basename(file, ".css"))

test("every generated plugin entry has a matching source file", () => {
  for (const [group, entries] of Object.entries(groups)) {
    for (const name of Object.keys(entries)) {
      const source = path.join("src", group, `${name}.css`)
      expect(
        fs.existsSync(path.join(packageRoot, source)),
        `${group}/${name} has no ${source}`,
      ).toBe(true)
    }
  }
})

// build.js keeps the reset out of the plugin; Tailwind preflight is the reset there.
const pluginExcluded = { base: ["reset"] }

test("every source file is exported by the generated plugin entry", () => {
  for (const [group, entries] of Object.entries(groups)) {
    const exported = new Set(Object.keys(entries))
    const skipped = new Set(pluginExcluded[group] ?? [])
    for (const name of listedSources(group)) {
      if (skipped.has(name)) continue
      expect(
        exported.has(name),
        `${group}/${name}.css is missing from imports.js — run \`bun run build\``,
      ).toBe(true)
    }
  }
})
