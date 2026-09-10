import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const scriptDir = dirname(fileURLToPath(import.meta.url))
const docsRoot = resolve(scriptDir, "../../..")
const repoRoot = resolve(docsRoot, "../..")

// The SKILL.md and llms.txt endpoints slice the root SKILL.md on literal headings.
// A renamed heading makes the slice silently fall back to the whole file, which
// duplicates the sections that are appended separately.
const endpointFiles = ["src/routes/SKILL.md/+server.js", "src/routes/llms.txt/+server.js"]

const rootSkill = readFileSync(join(repoRoot, "skills/daisyui/SKILL.md"), "utf-8")

const headings = endpointFiles.flatMap((file) => {
  const content = readFileSync(join(docsRoot, file), "utf-8")
  const matches = content.matchAll(/rootSkillContent\.indexOf\("([^"]+)"\)/g)
  return [...matches].map((match) => ({ file, heading: match[1] }))
})

test("Finds the headings that the skill endpoints slice on", () => {
  expect(headings.length).toBeGreaterThan(0)
})

test("Every heading a skill endpoint slices on exists in the root SKILL.md", () => {
  headings.forEach(({ file, heading }) => {
    if (!rootSkill.includes(heading)) {
      throw new Error(
        `${file} slices skills/daisyui/SKILL.md on "${heading}", which is not in that file`,
      )
    }
  })
})
