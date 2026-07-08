import { expect, test } from "bun:test"
import { replaceApplyTrueWithEmptyObject } from "./replaceApplyTrueWithEmptyObject.js"

test("replaceApplyTrueWithEmptyObject replaces @apply true values at every depth", () => {
  const input = {
    ".btn": {
      "@apply inline-flex": true,
      "&:hover": {
        "@apply opacity-80": true,
      },
    },
  }

  replaceApplyTrueWithEmptyObject(input)

  expect(input).toEqual({
    ".btn": {
      "@apply inline-flex": {},
      "&:hover": {
        "@apply opacity-80": {},
      },
    },
  })
})

test("replaceApplyTrueWithEmptyObject leaves non-true @apply values and nulls unchanged", () => {
  const input = {
    ".btn": {
      "@apply inline-flex": false,
      "@apply gap-2": "yes",
      child: null,
    },
  }

  replaceApplyTrueWithEmptyObject(input)

  expect(input).toEqual({
    ".btn": {
      "@apply inline-flex": false,
      "@apply gap-2": "yes",
      child: null,
    },
  })
})
