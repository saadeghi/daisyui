import { expect, test } from "bun:test"
import { removeScrollLockSetters } from "./removeScrollLockSetters.js"
import modal from "../components/modal/object.js"
import drawer from "../components/drawer/object.js"
import { addPrefix } from "./addPrefix.js"
import daisyui from "../index.js"

test("removeScrollLockSetters removes nested rules that only set --page-scroll-lock", () => {
  const input = {
    "@layer daisyui.l1.l2": [
      {
        ".modal:target": {
          opacity: "100%",
          ":root:has(&)": { "--page-scroll-lock": " " },
        },
      },
    ],
  }

  expect(removeScrollLockSetters(input)).toEqual({
    "@layer daisyui.l1.l2": [{ ".modal:target": { opacity: "100%" } }],
  })
})

test("removeScrollLockSetters removes rules left empty and keeps other rules", () => {
  const input = {
    "@layer a": [
      { ".drawer-open > .toggle": { ":root:has(&)": { "--page-scroll-lock": "revert-layer" } } },
      { ".other": { color: "red", "--page-scroll-lock": "x" } },
    ],
  }

  expect(removeScrollLockSetters(input)).toEqual({
    "@layer a": [{ ".other": { color: "red", "--page-scroll-lock": "x" } }],
  })
})

test("removeScrollLockSetters handles prefixed variables", () => {
  const input = { ".a": { color: "red", ":root:has(.a)": { "--x-page-scroll-lock": " " } } }

  expect(removeScrollLockSetters(input)).toEqual({ ".a": { color: "red" } })
})

test("removeScrollLockSetters removes every :root:has() rule from modal and drawer", () => {
  for (const styles of [modal, drawer, addPrefix(modal, "x-"), addPrefix(drawer, "x-")]) {
    expect(JSON.stringify(styles)).toContain(":root:has(")
    expect(JSON.stringify(removeScrollLockSetters(styles))).not.toContain(":root:has(")
    expect(JSON.stringify(removeScrollLockSetters(styles))).not.toContain("page-scroll-lock")
  }
})

const collectComponentStyles = (options) => {
  const { handler } = daisyui({ logs: false, themes: false, ...options })
  const componentStyles = []
  handler({
    addBase: () => {},
    addComponents: (styles) => componentStyles.push(styles),
    addUtilities: () => {},
    addVariant: () => {},
  })
  return JSON.stringify(componentStyles)
}

test.each([
  [{}, true],
  [{ exclude: "rootscrolllock" }, true],
  [{ exclude: "rootscrollgutter" }, true],
  [{ exclude: ["rootscrolllock", "rootscrollgutter"] }, false],
  [{ include: ["modal", "drawer", "rootscrolllock"] }, true],
  [{ include: ["modal", "drawer"] }, false],
])("daisyUI plugin with %p keeps scroll lock setters: %p", (options, expected) => {
  const styles = collectComponentStyles(options)
  expect(styles.includes(":root:has(")).toBe(expected)
  expect(styles.includes("page-scroll-lock")).toBe(expected)
})
