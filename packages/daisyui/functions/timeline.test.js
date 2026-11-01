import { expect, test } from "bun:test"
import { readFileSync } from "fs"
import { join } from "path"

const css = readFileSync(join(import.meta.dirname, "../src/components/timeline.css"), "utf-8")

// #4737: .timeline-vertical.timeline-snap-icon used to set --timeline-col-start
// to minmax(0, 1fr) after .timeline-compact.timeline-vertical set it to 0, so
// compact + vertical + snap-icon put content in the middle instead of the start.
test("vertical snap-icon only overrides col-start when not compact", () => {
  expect(css).toContain("&:not(.timeline-compact) > li")
  expect(css).toMatch(
    /&\.timeline-snap-icon\s*\{[\s\S]*?&:not\(\.timeline-compact\)\s*>\s*li\s*\{[\s\S]*?--timeline-col-start:\s*minmax\(0,\s*1fr\);/,
  )
  // Must not set minmax on every vertical snap-icon item (that overrode compact).
  const unconditional = css.match(
    /&\.timeline-snap-icon\s*\{\s*>\s*li\s*\{([^}]*)\}/,
  )
  expect(unconditional).not.toBeNull()
  expect(unconditional[1]).toContain("--timeline-row-start: 0.5rem;")
  expect(unconditional[1]).not.toContain("--timeline-col-start")
})

test("compact vertical still zeros the start column", () => {
  expect(css).toMatch(
    /&\.timeline-vertical\s*\{[\s\S]*?>\s*li\s*\{[\s\S]*?--timeline-col-start:\s*0;/,
  )
})
