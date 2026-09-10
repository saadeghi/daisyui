import { describe, expect, test } from "bun:test"
import { existsSync, readdirSync, readFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import {
  assertSafePrCss,
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
  test("rejects executable Tailwind directives in PR CSS", () => {
    for (const [css, directive] of [
      ['@plugin "attacker-package";', "@plugin"],
      ['@CONFIG "tailwind.config.js";', "@config"],
      ['@source "../secrets";', "@source"],
      [String.raw`@pl\75 gin "attacker-package";`, "@plugin"],
      ['@pl/**/ugin "attacker-package";', "@plugin"],
    ]) {
      expect(() => assertSafePrCss(css, componentPath("button"))).toThrow(
        `Unsafe PR CSS in ${componentPath("button")}: ${directive} is not allowed`,
      )
    }
  })

  test("rejects external imports and external URLs in PR CSS", () => {
    for (const css of [
      '@import "https://attacker.example/styles.css";',
      '@im/**/port "https://attacker.example/styles.css";',
      "@import URL(//attacker.example/styles.css);",
      '@import "data:text/css,.attacker%7Bdisplay:block%7D";',
      '.btn { background: url("https://attacker.example/image.png"); }',
      ".btn { background: u/**/rl(https://attacker.example/image.png); }",
      String.raw`.btn { background: u\72l(h\74tps\3a//attacker.example/image.png); }`,
      ".btn { cursor: url(ftp://attacker.example/cursor.cur), auto; }",
    ]) {
      expect(() => assertSafePrCss(css, componentPath("button"))).toThrow(
        `Unsafe PR CSS in ${componentPath("button")}`,
      )
    }
  })

  test("allows inert text, local resources, and data URLs in PR CSS", () => {
    const css = `/* @plugin "not-a-directive"; */
@import "./local.css";
.btn {
  content: "@config https://example.test";
  background: url("./image.svg"), url(#mask);
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
}`

    expect(() => assertSafePrCss(css, componentPath("button"))).not.toThrow()
  })

  test("accepts every current component stylesheet", () => {
    const componentsDirectory = join(repositoryRoot, "packages/daisyui/src/components")
    for (const filename of readdirSync(componentsDirectory).filter((name) =>
      name.endsWith(".css"),
    )) {
      const filePath = componentPath(filename.slice(0, -4))
      expect(() =>
        assertSafePrCss(readFileSync(join(componentsDirectory, filename), "utf8"), filePath),
      ).not.toThrow()
    }
  })

  test("builds the exact before CSS", () => {
    expect(buildBeforeCss()).toBe('@import "tailwindcss";\n@plugin "daisyui";\n')
  })

  test("excludes changed components and appends their PR CSS inside the utilities layer so markup utilities keep beating component styles like they do in the plugin", () => {
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

@layer utilities {
  /* PR component: button */
  .btn { color: red; }

  /* PR component: toggle */
  .toggle { color: blue; }
}
`)
  })

  test("emits no utilities layer block when the PR only deletes component files", () => {
    expect(buildAfterCss(["button"], [])).toBe(`@import "tailwindcss";
@plugin "daisyui" {
  exclude: button;
}
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
