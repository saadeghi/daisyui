import { expect, test } from "bun:test"
import { addPrefix } from "./addPrefix.js"

const prefix = "prefix-"

for (const { name, input, expected, prefix: casePrefix = prefix } of [
  {
    name: "no prefix",
    input: { ".btn": "color: red;" },
    expected: { ".btn": "color: red;" },
    prefix: "",
  },
  {
    name: "simple class selector",
    input: { ".btn": "color: red;" },
    expected: { ".prefix-btn": "color: red;" },
  },
  {
    name: "nested class selector",
    input: { "&.btn": "color: red;" },
    expected: { "&.prefix-btn": "color: red;" },
  },
  {
    name: "compound selectors",
    input: { ".btn .icon": "color: red;" },
    expected: { ".prefix-btn .prefix-icon": "color: red;" },
  },
  {
    name: "pseudo-classes",
    input: { ".btn:hover": "color: red;" },
    expected: { ".prefix-btn:hover": "color: red;" },
  },
  {
    name: "complex pseudo-classes",
    input: { ":is(.btn)": "color: red;" },
    expected: { ":is(.prefix-btn)": "color: red;" },
  },
  {
    name: "media queries",
    input: { "@media (min-width: 600px)": { ".btn": "color: red;" } },
    expected: { "@media (min-width: 600px)": { ".prefix-btn": "color: red;" } },
  },
  {
    name: "keyframes",
    input: { "@keyframes slide": { "0%": "opacity: 0;", "100%": "opacity: 1;" } },
    expected: { "@keyframes slide": { "0%": "opacity: 0;", "100%": "opacity: 1;" } },
  },
  {
    name: "attribute selectors",
    input: { "[type='text']": "color: red;" },
    expected: { "[type='text']": "color: red;" },
  },
  {
    name: "nested objects",
    input: { ".btn": { ".icon": "color: red;" } },
    expected: { ".prefix-btn": { ".prefix-icon": "color: red;" } },
  },
  {
    name: "arrays",
    input: { ".btn": ["color: red;", ".icon"] },
    expected: { ".prefix-btn": ["color: red;", ".prefix-icon"] },
  },
  {
    name: "complex nested selectors",
    input: { ".btn .icon .text": "color: red;" },
    expected: { ".prefix-btn .prefix-icon .prefix-text": "color: red;" },
  },
  {
    name: "multiple classes",
    input: { ".btn.icon": "color: red;" },
    expected: { ".prefix-btn.prefix-icon": "color: red;" },
  },
  {
    name: "multiple pseudo-classes",
    input: { ".btn:hover:focus": "color: red;" },
    expected: { ".prefix-btn:hover:focus": "color: red;" },
  },
  {
    name: "multiple attribute selectors",
    input: { "[type='text'][disabled]": "color: red;" },
    expected: { "[type='text'][disabled]": "color: red;" },
  },
  {
    name: "combinators",
    input: { ".btn > .icon + .text ~ .label": "color: red;" },
    expected: { ".prefix-btn > .prefix-icon + .prefix-text ~ .prefix-label": "color: red;" },
  },
  {
    name: "empty objects and arrays",
    input: { ".btn": {}, ".icon": [] },
    expected: { ".prefix-btn": {}, ".prefix-icon": [] },
  },
  {
    name: "non-string values",
    input: { ".btn": 42 },
    expected: { ".prefix-btn": 42 },
  },
  {
    name: "selectors containing functions",
    input: { ":not(.btn)": "color: red;" },
    expected: { ":not(.prefix-btn)": "color: red;" },
  },
  {
    name: "deeply nested combinators",
    input: { ".btn": { "> .icon": { "+ .text": "color: red;" } } },
    expected: { ".prefix-btn": { " > .prefix-icon": { " + .prefix-text": "color: red;" } } },
  },
  {
    name: "pseudo-elements",
    input: { ".btn::before": "content: '';", ".btn::after": { content: "''", color: "red" } },
    expected: {
      ".prefix-btn::before": "content: '';",
      ".prefix-btn::after": { content: "''", color: "red" },
    },
  },
  {
    name: "comma-separated selectors",
    input: { ".btn, .icon": "color: red;", ".text, .label": { color: "blue" } },
    expected: {
      ".prefix-btn, .prefix-icon": "color: red;",
      ".prefix-text, .prefix-label": { color: "blue" },
    },
  },
  {
    name: "descendant combinator and :not selector",
    input: { ".drawer-side": { "> *:not(.drawer-overlay)": { color: "red" } } },
    expected: { ".prefix-drawer-side": { " > *:not(.prefix-drawer-overlay)": { color: "red" } } },
  },
  {
    name: "descendant combinator and :where selector",
    input: { ".drawer-side": { "> *:where(.drawer-overlay)": { color: "red" } } },
    expected: { ".prefix-drawer-side": { " > *:where(.prefix-drawer-overlay)": { color: "red" } } },
  },
  {
    name: "descendant combinator and :not(:has()) selector",
    input: {
      ".filter": {
        "&:not(:has(input:checked:not(.filter-reset)))": {
          ".filter-reset, input[type='reset']": { scale: "0", "border-width": "0" },
        },
      },
    },
    expected: {
      ".dz-filter": {
        "&:not(:has(input:checked:not(.dz-filter-reset)))": {
          ".dz-filter-reset, input[type='reset']": { scale: "0", "border-width": "0" },
        },
      },
    },
    prefix: "dz-",
  },
  {
    name: "child combinator and :where with pseudo-class",
    input: { ".parent": { "> .child:where(:last-child)": { color: "red" } } },
    expected: { ".prefix-parent": { " > .prefix-child:where(:last-child)": { color: "red" } } },
  },
  {
    name: "nested combinators and :not(:has()) selector",
    input: {
      ".steps": { ".step": { "> .step-icon, &:not(:has(.step-icon)):after": { color: "red" } } },
    },
    expected: {
      ".prefix-steps": {
        ".prefix-step": {
          "> .prefix-step-icon, &:not(:has(.prefix-step-icon)):after": { color: "red" },
        },
      },
    },
  },
  {
    name: ".prose selector",
    input: { ".prose": "color: red;" },
    expected: { ".prose": "color: red;" },
  },
]) {
  test(`addPrefix handles ${name}`, () => {
    expect(addPrefix(input, casePrefix)).toEqual(expected)
  })
}

for (const { name, input, expected, customExcludedPrefixes } of [
  {
    name: "excluded variable prefixes",
    input: { "--color-primary": "var(--color-secondary)" },
    expected: { "--color-primary": "var(--color-secondary)" },
  },
  {
    name: "non-excluded variable prefixes",
    input: { "--custom-var": "var(--another-var)" },
    expected: { "--prefix-custom-var": "var(--prefix-another-var)" },
  },
  {
    name: "CSS variables in nested objects",
    input: { ".btn": { "--custom-var": "var(--another-var)" } },
    expected: { ".prefix-btn": { "--prefix-custom-var": "var(--prefix-another-var)" } },
  },
  {
    name: "CSS variables in arrays",
    input: { ".btn": ["color: red;", "var(--custom-var)"] },
    expected: { ".prefix-btn": ["color: red;", "var(--prefix-custom-var)"] },
  },
  {
    name: "multiple CSS variables in one value",
    input: { ".btn": "background: var(--custom-var1) var(--custom-var2);" },
    expected: { ".prefix-btn": "background: var(--prefix-custom-var1) var(--prefix-custom-var2);" },
  },
  {
    name: "mixed excluded and non-excluded variables",
    input: {
      "--color-primary": "blue",
      "--custom-var": "red",
      ".btn": "background: var(--color-primary) var(--custom-var);",
    },
    expected: {
      "--color-primary": "blue",
      "--prefix-custom-var": "red",
      ".prefix-btn": "background: var(--color-primary) var(--prefix-custom-var);",
    },
  },
  {
    name: "--tw variables",
    input: {
      "--tw-variable": "value",
      "--custom-var": "value",
      ".btn": "background: var(--tw-variable) var(--custom-var);",
    },
    expected: {
      "--tw-variable": "value",
      "--prefix-custom-var": "value",
      ".prefix-btn": "background: var(--tw-variable) var(--prefix-custom-var);",
    },
  },
  {
    name: "custom excluded prefixes",
    input: { "--custom-excluded-": "red", "--normal-var": "blue" },
    expected: { "--custom-excluded-": "red", "--prefix-normal-var": "blue" },
    customExcludedPrefixes: ["custom-excluded-"],
  },
]) {
  test(`addPrefix handles ${name}`, () => {
    expect(addPrefix(input, prefix, customExcludedPrefixes)).toEqual(expected)
  })
}

test("addPrefix with 0 prefix leaves selectors and CSS variables unchanged", () => {
  const input = {
    "--custom-var": "10px",
    "--another-var": "var(--custom-var)",
    ".btn": {
      margin: "var(--custom-var)",
      "--local-var": "20px",
    },
  }

  expect(addPrefix(input, 0)).toEqual(input)
})
