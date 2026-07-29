import { expect, test } from "bun:test"
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
