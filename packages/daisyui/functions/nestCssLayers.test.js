import { expect, test } from "bun:test"
import fs from "fs"
import path from "path"
import { nestCssLayers } from "./nestCssLayers.js"

test("moves top-level CSS layers under their selectors", () => {
  const styles = {
    ".btn": { display: "inline-flex" },
    "@layer daisyui.l1": [
      {
        ".btn": { color: "red" },
      },
      {
        "@media (hover: hover)": {
          ".btn:hover": { color: "blue" },
          ".link:hover": { textDecoration: "underline" },
        },
      },
    ],
    "@keyframes pulse": {
      to: { opacity: "0" },
    },
  }

  expect(nestCssLayers(styles)).toEqual({
    ".btn": [{ display: "inline-flex" }, { "@layer daisyui.l1": { color: "red" } }],
    ".btn:hover": {
      "@layer daisyui.l1": {
        "@media (hover: hover)": { color: "blue" },
      },
    },
    ".link:hover": {
      "@layer daisyui.l1": {
        "@media (hover: hover)": { textDecoration: "underline" },
      },
    },
    "@keyframes pulse": {
      to: { opacity: "0" },
    },
  })
})

const countDeclarations = (node) => {
  if (Array.isArray(node)) {
    return node.reduce((total, item) => total + countDeclarations(item), 0)
  }
  if (node === null || typeof node !== "object") {
    return 1
  }
  return Object.values(node).reduce((total, value) => total + countDeclarations(value), 0)
}

const generatedComponentStyles = async () => {
  const componentsDir = path.resolve(import.meta.dirname, "../components")
  const dirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() && fs.existsSync(path.join(componentsDir, entry.name, "object.js")),
    )
    .map((entry) => entry.name)

  return Promise.all(
    dirs.map(async (name) => ({
      name,
      styles: (await import(path.join(componentsDir, name, "object.js"))).default,
    })),
  )
}

test("nestCssLayers keeps every declaration of the generated component styles", async () => {
  for (const { name, styles } of await generatedComponentStyles()) {
    expect(countDeclarations(nestCssLayers(styles)), `declarations lost for ${name}`).toBe(
      countDeclarations(styles),
    )
  }
})
