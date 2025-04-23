import { expect, test } from "bun:test"
import { addPrefix } from "./addPrefix"

test("addPrefix with no prefix", () => {
  const input = { ".btn": "color: red;" }
  const prefix = ""
  const expected = { ".btn": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with simple class selector", () => {
  const input = { ".btn": "color: red;" }
  const prefix = "prefix-"
  const expected = { ".prefix-btn": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with nested class selector", () => {
  const input = { "&.btn": "color: red;" }
  const prefix = "prefix-"
  const expected = { "&.prefix-btn": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with compound selectors", () => {
  const input = { ".btn .icon": "color: red;" }
  const prefix = "prefix-"
  const expected = { ".prefix-btn .prefix-icon": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with pseudo-classes", () => {
  const input = { ".btn:hover": "color: red;" }
  const prefix = "prefix-"
  const expected = { ".prefix-btn:hover": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with complex pseudo-classes", () => {
  const input = { ":is(.btn)": "color: red;" }
  const prefix = "prefix-"
  const expected = { ":is(.prefix-btn)": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with media queries", () => {
  const input = { "@media (min-width: 600px)": { ".btn": "color: red;" } }
  const prefix = "prefix-"
  const expected = { "@media (min-width: 600px)": { ".prefix-btn": "color: red;" } }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with keyframes", () => {
  const input = { "@keyframes slide": { "0%": "opacity: 0;", "100%": "opacity: 1;" } }
  const prefix = "prefix-"
  const expected = { "@keyframes slide": { "0%": "opacity: 0;", "100%": "opacity: 1;" } }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with attribute selectors", () => {
  const input = { "[type='text']": "color: red;" }
  const prefix = "prefix-"
  const expected = { "[type='text']": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with nested objects", () => {
  const input = { ".btn": { ".icon": "color: red;" } }
  const prefix = "prefix-"
  const expected = { ".prefix-btn": { ".prefix-icon": "color: red;" } }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with arrays", () => {
  const input = { ".btn": ["color: red;", ".icon"] }
  const prefix = "prefix-"
  const expected = { ".prefix-btn": ["color: red;", ".prefix-icon"] }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with no prefix", () => {
  const input = { ".btn": "color: red;" }
  const prefix = ""
  const expected = { ".btn": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with excluded variable prefixes", () => {
  const input = { "--color-primary": "var(--color-secondary)" }
  const prefix = "prefix-"
  const expected = { "--color-primary": "var(--color-secondary)" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with non-excluded variable prefixes", () => {
  const input = { "--custom-var": "var(--another-var)" }
  const prefix = "prefix-"
  const expected = { "--prefix-custom-var": "var(--prefix-another-var)" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with complex nested selectors", () => {
  const input = { ".btn .icon .text": "color: red;" }
  const prefix = "prefix-"
  const expected = { ".prefix-btn .prefix-icon .prefix-text": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with multiple classes", () => {
  const input = { ".btn.icon": "color: red;" }
  const prefix = "prefix-"
  const expected = { ".prefix-btn.prefix-icon": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with multiple pseudo-classes", () => {
  const input = { ".btn:hover:focus": "color: red;" }
  const prefix = "prefix-"
  const expected = { ".prefix-btn:hover:focus": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with multiple attribute selectors", () => {
  const input = { "[type='text'][disabled]": "color: red;" }
  const prefix = "prefix-"
  const expected = { "[type='text'][disabled]": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with combinators", () => {
  const input = { ".btn > .icon + .text ~ .label": "color: red;" }
  const prefix = "prefix-"
  const expected = { ".prefix-btn > .prefix-icon + .prefix-text ~ .prefix-label": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with CSS variables in nested objects", () => {
  const input = { ".btn": { "--custom-var": "var(--another-var)" } }
  const prefix = "prefix-"
  const expected = { ".prefix-btn": { "--prefix-custom-var": "var(--prefix-another-var)" } }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with CSS variables in arrays", () => {
  const input = { ".btn": ["color: red;", "var(--custom-var)"] }
  const prefix = "prefix-"
  const expected = { ".prefix-btn": ["color: red;", "var(--prefix-custom-var)"] }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with empty objects and arrays", () => {
  const input = { ".btn": {} }
  const prefix = "prefix-"
  const expected = { ".prefix-btn": {} }
  expect(addPrefix(input, prefix)).toEqual(expected)

  const inputArray = { ".btn": [] }
  const expectedArray = { ".prefix-btn": [] }
  expect(addPrefix(inputArray, prefix)).toEqual(expectedArray)
})

test("addPrefix with non-string values", () => {
  const input = { ".btn": 42 }
  const prefix = "prefix-"
  const expected = { ".prefix-btn": 42 }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

test("addPrefix with selectors containing functions", () => {
  const input = { ":not(.btn)": "color: red;" }
  const prefix = "prefix-"
  const expected = { ":not(.prefix-btn)": "color: red;" }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// Multiple CSS variables in a single value string
test("addPrefix with multiple CSS variables in a single value", () => {
  const input = {
    ".btn": "background: var(--custom-var1) var(--custom-var2);",
  }
  const prefix = "prefix-"
  const expected = {
    ".prefix-btn": "background: var(--prefix-custom-var1) var(--prefix-custom-var2);",
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// Nested combinators
test("addPrefix with deeply nested combinators", () => {
  const input = {
    ".btn": {
      "> .icon": {
        "+ .text": "color: red;",
      },
    },
  }
  const prefix = "prefix-"
  const expected = {
    ".prefix-btn": {
      " > .prefix-icon": {
        " + .prefix-text": "color: red;",
      },
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// Mixed excluded and non-excluded variables
test("addPrefix with mixed excluded and non-excluded variables", () => {
  const input = {
    "--color-primary": "blue",
    "--custom-var": "red",
    ".btn": "background: var(--color-primary) var(--custom-var);",
  }
  const prefix = "prefix-"
  const expected = {
    "--color-primary": "blue",
    "--prefix-custom-var": "red",
    ".prefix-btn": "background: var(--color-primary) var(--prefix-custom-var);",
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// Complex selector with pseudo-elements
test("addPrefix with pseudo-elements", () => {
  const input = {
    ".btn::before": "content: '';",
    ".btn::after": {
      content: "''",
      color: "red",
    },
  }
  const prefix = "prefix-"
  const expected = {
    ".prefix-btn::before": "content: '';",
    ".prefix-btn::after": {
      content: "''",
      color: "red",
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// Multiple selectors separated by comma
test("addPrefix with comma-separated selectors", () => {
  const input = {
    ".btn, .icon": "color: red;",
    ".text, .label": {
      color: "blue",
    },
  }
  const prefix = "prefix-"
  const expected = {
    ".prefix-btn, .prefix-icon": "color: red;",
    ".prefix-text, .prefix-label": {
      color: "blue",
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// Custom excluded prefixes
test("addPrefix with custom excluded prefixes", () => {
  const input = {
    "--custom-excluded-": "red",
    "--normal-var": "blue",
  }
  const prefix = "prefix-"
  const customExcludedPrefixes = ["custom-excluded-"]
  const expected = {
    "--custom-excluded-": "red",
    "--prefix-normal-var": "blue",
  }
  expect(addPrefix(input, prefix, customExcludedPrefixes)).toEqual(expected)
})

// nested not selector
test("addPrefix with descendant combinator and :not selector", () => {
  const input = {
    ".drawer-side": {
      "> *:not(.drawer-overlay)": {
        color: "red",
      },
    },
  }
  const prefix = "prefix-"
  const expected = {
    ".prefix-drawer-side": {
      " > *:not(.prefix-drawer-overlay)": {
        color: "red",
      },
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// nested where selector
test("addPrefix with descendant combinator and :where selector", () => {
  const input = {
    ".drawer-side": {
      "> *:where(.drawer-overlay)": {
        color: "red",
      },
    },
  }
  const prefix = "prefix-"
  const expected = {
    ".prefix-drawer-side": {
      " > *:where(.prefix-drawer-overlay)": {
        color: "red",
      },
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// nested not selector with :has()
test("addPrefix with descendant combinator and :not(:has()) selector", () => {
  const input = {
    ".filter": {
      "&:not(:has(input:checked:not(.filter-reset)))": {
        ".filter-reset, input[type='reset']": {
          scale: "0",
          "border-width": "0",
        },
      },
    },
  }
  const prefix = "dz-"
  const expected = {
    ".dz-filter": {
      "&:not(:has(input:checked:not(.dz-filter-reset)))": {
        ".dz-filter-reset, input[type='reset']": {
          scale: "0",
          "border-width": "0",
        },
      },
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// --tw CSS variables
test("addPrefix should not prefix --tw variables", () => {
  const input = {
    "--tw-variable": "value",
    "--custom-var": "value",
    ".btn": "background: var(--tw-variable) var(--custom-var);",
  }
  const prefix = "prefix-"
  const expected = {
    "--tw-variable": "value",
    "--prefix-custom-var": "value",
    ".prefix-btn": "background: var(--tw-variable) var(--prefix-custom-var);",
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// '> .child:where(:last-child)' selector
test("addPrefix with child combinator and :where with pseudo-class", () => {
  const input = {
    ".parent": {
      "> .child:where(:last-child)": {
        color: "red",
      },
    },
  }
  const prefix = "prefix-"
  const expected = {
    ".prefix-parent": {
      " > .prefix-child:where(:last-child)": {
        color: "red",
      },
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// has in not
test("addPrefix with nested combinators and :not(:has()) selector", () => {
  const input = {
    ".steps": {
      ".step": {
        "> .step-icon, &:not(:has(.step-icon)):after": {
          color: "red",
        },
      },
    },
  }
  const prefix = "prefix-"
  const expected = {
    ".prefix-steps": {
      ".prefix-step": {
        "> .prefix-step-icon, &:not(:has(.prefix-step-icon)):after": {
          color: "red",
        },
      },
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})

// with 0 prefix
test("addPrefix with 0 prefix should not affect CSS variables", () => {
  const input = {
    "--custom-var": "10px",
    "--another-var": "var(--custom-var)",
    ".btn": {
      margin: "var(--custom-var)",
      "--local-var": "20px",
    },
  }
  const prefix = 0
  const expected = {
    "--custom-var": "10px",
    "--another-var": "var(--custom-var)",
    ".btn": {
      margin: "var(--custom-var)",
      "--local-var": "20px",
    },
  }
  expect(addPrefix(input, prefix)).toEqual(expected)
})
