import { expect, test } from "bun:test"
import postcss from "postcss"
import {
  escapeBreakpointColon,
  extractKeyframes,
  generateMediaQuery,
  generateResponsiveVariants,
  transformSelector,
  wrapInLayer,
} from "./generateRawStyles.js"

test("transformSelector prefixes root-level class selectors", () => {
  expect(transformSelector(".btn:hover, .card > .title", "md")).toBe(
    ".md\\:btn:hover, .md\\:card > .title",
  )
})

test("escapeBreakpointColon escapes generated breakpoint class separators", () => {
  expect(escapeBreakpointColon(".md:btn{color:red}.not-md:btn{}", "md")).toBe(
    ".md\\:btn{color:red}.not-md:btn{}",
  )
})

test("wrapInLayer wraps styles only when a layer is provided", () => {
  expect(wrapInLayer(".btn{}", "components")).toBe("@layer components {\n.btn{}\n}")
  expect(wrapInLayer(".btn{}", null)).toBe(".btn{}")
})

test("generateMediaQuery formats responsive styles", () => {
  expect(generateMediaQuery("md", "768px", ".md\\:btn{}")).toBe(
    "\n@media (min-width: 768px) {\n.md\\:btn{}\n}\n\n",
  )
})

test("extractKeyframes removes keyframes from root and returns their styles", () => {
  const root = postcss.parse("@keyframes pulse{to{opacity:1}}.btn{animation:pulse 1s}")

  const keyframes = extractKeyframes(root)

  expect(keyframes).toBe("@keyframes pulse{to{opacity:1}}")
  expect(root.toString()).toBe(".btn{animation:pulse 1s}")
})

test("generateResponsiveVariants adds breakpoint variants and keeps keyframes once", async () => {
  const result = await generateResponsiveVariants(".btn{color:red}@keyframes pulse{to{opacity:1}}")

  expect(result).toContain(".btn{color:red}")
  expect(result).toContain("@media (min-width: 768px)")
  expect(result).toContain(".md\\:btn{color:red}")
  expect(result.match(/@keyframes pulse/g)).toHaveLength(1)
})
