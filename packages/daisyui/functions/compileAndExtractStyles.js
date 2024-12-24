import path from "node:path"
import { promises as fs } from "node:fs"
import { compile } from "tailwindcss"

export async function loadThemes() {
  const [defaultTheme, theme] = await Promise.all([
    fs.readFile(
      path.join(import.meta.dirname, "../../../node_modules/tailwindcss/theme.css"),
      "utf-8",
    ),
    fs.readFile(path.join(import.meta.dirname, "./variables.css"), "utf-8"),
  ])
  return { defaultTheme, theme }
}

export async function compileAndExtractStyles(styleContent, defaultTheme, theme) {
  const compiledContent = (
    await compile(`
    @layer theme{${defaultTheme}${theme}}
    @layer wrapperStart{${styleContent}}
    @layer wrapperEnd
  `)
  ).build([])

  const startIndex = compiledContent.indexOf("@layer wrapperStart")
  const endIndex = compiledContent.indexOf("@layer wrapperEnd")

  if (startIndex === -1 || endIndex === -1) {
    throw new Error("Failed to find wrapper layers in compiled content")
  }

  const openingBraceIndex = compiledContent.indexOf("{", startIndex)
  const closingBraceIndex = compiledContent.lastIndexOf("}", endIndex)

  if (
    openingBraceIndex === -1 ||
    closingBraceIndex === -1 ||
    openingBraceIndex >= closingBraceIndex
  ) {
    throw new Error("Invalid wrapper structure in compiled content")
  }

  return compiledContent.substring(openingBraceIndex + 1, closingBraceIndex).trim()
}
