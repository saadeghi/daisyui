import { expect, test } from "bun:test"
import { readFileSync } from "fs"
import { join } from "path"

const css = readFileSync(join(import.meta.dirname, "../src/components/otp.css"), "utf-8")

// #4780: boxes sit at (n-1) * stride and are --otp-w wide, so the group is
// stride * n - --otp-gap wide. stride * n also counts a gap after the last box,
// which made the component a full --otp-gap wider on the right than on the left.
// otp-joined sets --otp-gap to 0rem, so the same formula keeps its old width.
test("OTP container width leaves no extra gap after the last box", () => {
  const widths = [...css.matchAll(/&:has\(> span:nth-child\((\d+)\)\) \{\s*width: ([^;]+);/g)]
  expect(widths.map(([, n]) => Number(n))).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  for (const [, n, width] of widths) {
    expect(width.trim()).toBe(`calc(var(--stride) * ${n} - var(--otp-gap))`)
  }
})

// Boxes and their focus outlines now reach both edges of the container, so the
// clip-path must not cut the right edge (it used to inset it by 3.5px, which
// clipped the focus outline of the last box).
test("OTP clips all sides equally so focus outlines show at both edges", () => {
  expect(css).toContain("clip-path: inset(-3.5px);")
  expect(css).not.toContain("clip-path: inset(-3.5px 3.5px")
})

// otp-joined keeps its own clip: gap is 0, the group already touches the right
// edge, and its focus outlines are drawn inside the boxes.
test("otp-joined keeps zero gap and its own clip path", () => {
  expect(css).toContain("--otp-gap: 0rem;")
  expect(css).toContain("clip-path: inset(-3.5px 0 -3.5px -3.5px);")
})
