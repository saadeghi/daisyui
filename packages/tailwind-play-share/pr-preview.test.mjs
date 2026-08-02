import { describe, expect, test } from "bun:test"
import { existsSync, readdirSync, readFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import {
  buildAfterCss,
  buildBeforeCss,
  combineHtmlExamples,
  extractFirstHtmlExample,
  indexDocsPages,
  parseNameStatus,
  parsePreviewArgs,
  planComponentChanges,
  sourceCssFilename,
} from "./pr-preview.mjs"

const packageDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = resolve(packageDirectory, "../..")
const componentPath = (name) => `packages/daisyui/src/components/${name}.css`

describe("PR component changes", () => {
  test("parses modified, added, deleted, renamed, and copied files", () => {
    const output = [
      "M",
      componentPath("button"),
      "A",
      componentPath("card"),
      "D",
      componentPath("toggle"),
      "R100",
      componentPath("input"),
      componentPath("text-input"),
      "C100",
      componentPath("badge"),
      componentPath("new-badge"),
      "",
    ].join("\0")

    expect(parseNameStatus(output)).toEqual([
      { headPath: componentPath("button"), kind: "M", oldPath: undefined, status: "M" },
      { headPath: componentPath("card"), kind: "A", oldPath: undefined, status: "A" },
      { headPath: undefined, kind: "D", oldPath: componentPath("toggle"), status: "D" },
      {
        headPath: componentPath("text-input"),
        kind: "R",
        oldPath: componentPath("input"),
        status: "R100",
      },
      {
        headPath: componentPath("new-badge"),
        kind: "C",
        oldPath: componentPath("badge"),
        status: "C100",
      },
    ])
  })

  test("builds deterministic exclusions, CSS inputs, and docs fallbacks", () => {
    const plan = planComponentChanges([
      { headPath: componentPath("button"), kind: "M", status: "M" },
      { kind: "D", oldPath: componentPath("toggle"), status: "D" },
      {
        headPath: componentPath("text-input"),
        kind: "R",
        oldPath: componentPath("input"),
        status: "R100",
      },
    ])

    expect(plan.excludeNames).toEqual(["button", "input", "text-input", "toggle"])
    expect(plan.headCssPaths).toEqual([componentPath("button"), componentPath("text-input")])
    expect(plan.docsTargets).toEqual([
      { fallbackCssFilename: undefined, preferredCssFilename: "button.css" },
      { fallbackCssFilename: "toggle.css", preferredCssFilename: undefined },
      { fallbackCssFilename: "input.css", preferredCssFilename: "text-input.css" },
    ])
  })

  test("ignores files outside the component directory and unsafe component filenames", () => {
    const plan = planComponentChanges([
      { headPath: "packages/daisyui/src/themes/light.css", kind: "M", status: "M" },
      {
        headPath: componentPath("button;exclude:all"),
        kind: "A",
        status: "A",
      },
    ])

    expect(plan).toEqual({ docsTargets: [], excludeNames: [], headCssPaths: [] })
  })
})

describe("component documentation", () => {
  const buttonMarkdown = `---
source: https://example.test/components/button.css
---

\`\`\`html
<button class="$$btn">First</button>
\`\`\`

\`\`\`html
<button class="$$btn">Second</button>
\`\`\``

  test("reads the source filename and first HTML example", () => {
    expect(sourceCssFilename(buttonMarkdown)).toBe("button.css")
    expect(extractFirstHtmlExample(buttonMarkdown, "button/+page.md")).toBe(
      '<button class="btn">First</button>',
    )
  })

  test("indexes every page mapped to a shared CSS file", () => {
    const pages = [
      {
        filePath: "components/accordion/+page.md",
        markdown: buttonMarkdown.replace("button.css", "collapse.css"),
      },
      {
        filePath: "components/collapse/+page.md",
        markdown: buttonMarkdown.replace("button.css", "collapse.css"),
      },
    ]

    expect(
      indexDocsPages(pages)
        .get("collapse.css")
        .map(({ filePath }) => filePath),
    ).toEqual(["components/accordion/+page.md", "components/collapse/+page.md"])
  })

  test("combines examples and labels their routes", () => {
    const html = combineHtmlExamples([
      { filePath: "components/button/+page.md", markdown: buttonMarkdown },
      {
        filePath: "components/toggle/+page.md",
        markdown: buttonMarkdown.replace("button.css", "toggle.css"),
      },
    ])

    expect(html).toContain("<!-- daisyUI docs example: button -->")
    expect(html).toContain("<!-- daisyUI docs example: toggle -->")
    expect(html.match(/<button class="btn">First<\/button>/g)).toHaveLength(2)
  })

  test("fails when a docs page has no HTML example", () => {
    expect(() => extractFirstHtmlExample("---\ntitle: Empty\n---", "empty/+page.md")).toThrow(
      "No fenced HTML example found in empty/+page.md",
    )
  })

  test("maps every repository component stylesheet to valid docs examples", () => {
    const componentsDirectory = join(repositoryRoot, "packages/daisyui/src/components")
    const docsDirectory = join(repositoryRoot, "packages/docs/src/routes/(routes)/components")
    const cssFilenames = readdirSync(componentsDirectory)
      .filter((filename) => filename.endsWith(".css"))
      .sort()
    const pages = readdirSync(docsDirectory)
      .map((routeName) => ({
        filePath: join(docsDirectory, routeName, "+page.md"),
        routeName,
      }))
      .filter(({ filePath }) => existsSync(filePath))
      .map(({ filePath, routeName }) => ({
        filePath: `components/${routeName}/+page.md`,
        markdown: readFileSync(filePath, "utf8"),
      }))
    const docsIndex = indexDocsPages(pages)

    for (const cssFilename of cssFilenames) {
      expect(docsIndex.has(cssFilename)).toBe(true)
      for (const page of docsIndex.get(cssFilename)) {
        expect(extractFirstHtmlExample(page.markdown, page.filePath).length).toBeGreaterThan(0)
      }
    }
    expect(docsIndex.get("collapse.css")).toHaveLength(2)
    expect(docsIndex.get("mockup.css")).toHaveLength(4)
  })
})

describe("Tailwind Play inputs", () => {
  test("builds the exact before CSS", () => {
    expect(buildBeforeCss()).toBe('@import "tailwindcss";\n@plugin "daisyui";\n')
  })

  test("excludes changed components and appends their PR CSS", () => {
    expect(
      buildAfterCss(
        ["button", "card", "toggle"],
        [
          { componentName: "button", css: ".btn { color: red; }\n" },
          { componentName: "toggle", css: ".toggle { color: blue; }\n" },
        ],
      ),
    ).toBe(`@import "tailwindcss";
@plugin "daisyui" {
  exclude: button, card, toggle;
}

/* PR component: button */
.btn { color: red; }

/* PR component: toggle */
.toggle { color: blue; }
`)
  })

  test("parses the required CLI inputs", () => {
    expect(
      parsePreviewArgs([
        "--base-sha",
        "base",
        "--head-sha",
        "head",
        "--output",
        "/tmp/preview.json",
      ]),
    ).toMatchObject({ baseSha: "base", headSha: "head", output: "/tmp/preview.json" })
  })
})
