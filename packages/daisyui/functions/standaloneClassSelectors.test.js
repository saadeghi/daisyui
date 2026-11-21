import { expect, test } from "bun:test"
import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import postcss from "postcss"
import selectorParser from "postcss-selector-parser"

// Tailwind only registers a class as a utility when it appears in a top-level
// selector (a rule that is not nested inside another rule) and is not inside
// `:not()` / `:nth-child()` / `:nth-last-child()` (Tailwind skips those).
// Classes that only show up in nested selectors are unknown to the Tailwind
// IntelliSense plugin, so they get flagged as undefined and cannot be used
// with variants.
const SKIPPED_PSEUDOS = new Set([":not", ":nth-child", ":nth-last-child"])

// Third-party classes used inside the vendored calendar CSS and generic state
// helpers. daisyUI does not ask users to write them, so they are not expected
// to be registered as utilities.
const NOT_DAISYUI_CLASSES = /^(?:rdp-|pika-|vc-|is-|has-event$|pick-whole-week$|disabled$)/

const componentDir = join(import.meta.dirname, "../src/components")

const collectClasses = (selector, skipPseudoClasses = false) => {
  const classNames = []

  const visit = (node) => {
    if (node.type === "pseudo" && skipPseudoClasses && SKIPPED_PSEUDOS.has(node.value)) return
    if (node.type === "class") classNames.push(node.value)
    node.nodes?.forEach(visit)
  }

  selectorParser((root) => visit(root)).processSync(selector)
  return classNames
}

const isNestedRule = (rule) => {
  let parent = rule.parent
  while (parent && parent.type !== "root") {
    if (parent.type === "rule") return true
    parent = parent.parent
  }
  return false
}

test("every component class is defined in a top-level selector", () => {
  const defined = new Map()
  const registered = new Set()

  for (const file of readdirSync(componentDir).filter((file) => file.endsWith(".css"))) {
    const root = postcss.parse(readFileSync(join(componentDir, file), "utf-8"))

    root.walkRules((rule) => {
      for (const className of collectClasses(rule.selector)) {
        if (!defined.has(className)) defined.set(className, { file, selector: rule.selector })
      }

      const nested = isNestedRule(rule)
      if (nested) return

      for (const className of collectClasses(rule.selector, true)) registered.add(className)
    })
  }

  const unregistered = [...defined]
    .filter(([className]) => !registered.has(className) && !NOT_DAISYUI_CLASSES.test(className))
    .map(([className, { file, selector }]) => `.${className} (${file}): ${selector}`)
    .sort()

  expect(unregistered).toEqual([])
})
