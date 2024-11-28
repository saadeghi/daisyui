import { expect, test } from "bun:test"
import { addPrefix } from "./addPrefix"

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

// test("addPrefix with compound selectors", () => {
//   const input = { ".btn .icon": "color: red;" };
//   const prefix = "prefix-";
//   const expected = { ".prefix-btn .prefix-icon": "color: red;" };
//   expect(addPrefix(input, prefix)).toEqual(expected);
// });

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
