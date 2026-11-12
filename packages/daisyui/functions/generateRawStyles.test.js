import { expect, test } from "bun:test"
import postcss from "postcss"
import {
  escapeBreakpointColon,
  extractKeyframes,
  generateMediaQuery,
  generateResponsiveVariants,
  getRootClasses,
  transformSelector,
  wrapInLayer,
} from "./generateRawStyles.js"

test("transformSelector prefixes root-level class selectors", () => {
  expect(transformSelector(".btn:hover, .card > .title", "md")).toBe(
    ".md\\:btn:hover, .md\\:card > .title",
  )
})

test("transformSelector prefixes the component class when it is nested in another selector", () => {
  const rootClasses = new Set(["input", "input-xl"])

  expect(transformSelector(".floating-label:has(.input-xl)", "md", rootClasses)).toBe(
    ".floating-label:has(.md\\:input-xl)",
  )
  expect(transformSelector("fieldset:disabled .input", "md", rootClasses)).toBe(
    "fieldset:disabled .md\\:input",
  )
  expect(transformSelector(".input-xl .floating-label", "md", rootClasses)).toBe(
    ".md\\:input-xl .floating-label",
  )
})

test("transformSelector prefixes every argument of a leading :is() list", () => {
  const rootClasses = new Set(["menu", "tabs-lift", "tabs-box"])

  expect(
    transformSelector(
      ":is(.menu :where(li > details > summary), .menu :where(li > .menu-dropdown-toggle)):after",
      "sm",
      rootClasses,
    ),
  ).toBe(
    ":is(.sm\\:menu :where(li > details > summary), .sm\\:menu :where(li > .menu-dropdown-toggle)):after",
  )
  expect(transformSelector(":is(.tabs-lift, .tabs-box) > .tab", "sm", rootClasses)).toBe(
    ":is(.sm\\:tabs-lift, .sm\\:tabs-box) > .tab",
  )
  expect(transformSelector(".menu :is(.foo, .bar)", "sm", rootClasses)).toBe(
    ".sm\\:menu :is(.foo, .bar)",
  )
})

test("getRootClasses collects the classes of top-level rules only", () => {
  const classes = getRootClasses(`
    .input-xl {
      --size: 1rem;
      .floating-label:has(&) { --font-size: 1rem }
    }
    .input, .input-ghost { color: red }
  `)

  expect([...classes].sort()).toEqual(["input", "input-ghost", "input-xl"])
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

test("generateResponsiveVariants prefixes entry rules through structural at-rules", async () => {
  const result = await generateResponsiveVariants(`
    @layer daisyui.l1.l2 {
      .footer-horizontal { grid-auto-flow: column }
      .footer-horizontal.footer-center { grid-auto-flow: row dense }
      .footer {
        color: red;
        & > .title { color: blue }
      }
    }
    @media (hover: hover) {
      .btn:hover { color: red }
    }
    @supports (display: grid) {
      .card { display: grid }
    }
  `)

  expect(result).toContain(".md\\:footer-horizontal { grid-auto-flow: column }")
  expect(result).toContain(".md\\:footer-horizontal.footer-center { grid-auto-flow: row dense }")
  expect(result).toContain(".md\\:footer {")
  expect(result).toContain("& > .title { color: blue }")
  expect(result).not.toContain(".md\\:&")
  expect(result).toContain(".md\\:btn:hover { color: red }")
  expect(result).toContain(".md\\:card { display: grid }")
})
