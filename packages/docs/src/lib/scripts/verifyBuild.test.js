import { afterEach, describe, expect, test } from "bun:test"
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"
import {
  countCsvRecords,
  dynamicRouteFamilies,
  requiredBuildFiles,
  verifyBuild,
} from "./verifyBuild.js"

const temporaryDirectories = []

const writeFixtureFile = (buildDir, filePath, content = "fixture") => {
  const absolutePath = join(buildDir, filePath)
  mkdirSync(dirname(absolutePath), { recursive: true })
  writeFileSync(absolutePath, content)
}

const createValidBuildFixture = () => {
  const buildDir = mkdtempSync(join(tmpdir(), "daisyui-docs-build-"))
  temporaryDirectories.push(buildDir)

  for (const filePath of requiredBuildFiles) {
    let content = "fixture"
    if (filePath === "search.csv") {
      content =
        "title,url,classnames\nHome,/,\nStore fixture,/store/fixture/,\nSection,/docs/example/#section,\n"
    }
    if (filePath === "sitemap.xml")
      content = [
        "<urlset>",
        "<url><loc>https://example.com/</loc></url>",
        "<url><loc>https://example.com/store/fixture/</loc></url>",
        "<url><loc>https://example.com/skills/fixture/</loc></url>",
        "<url><loc>https://example.com/compare/first-vs-second/</loc></url>",
        "</urlset>",
      ].join("")
    writeFixtureFile(buildDir, filePath, content)
  }
  writeFixtureFile(buildDir, "docs/example/index.html", '<h2 id="section">Section</h2>')

  for (const family of dynamicRouteFamilies) {
    writeFixtureFile(buildDir, join(family.directory, "fixture", "index.html"))
  }
  writeFixtureFile(buildDir, "compare/fixture-reverse/index.html")

  return buildDir
}

const createRepoFixture = () => {
  const repoDir = mkdtempSync(join(tmpdir(), "daisyui-repo-"))
  temporaryDirectories.push(repoDir)
  return repoDir
}

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

describe("build verification", () => {
  test("accepts a complete build and reports its core metrics", () => {
    const buildDir = createValidBuildFixture()
    const metrics = verifyBuild({
      buildDir,
      minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
      routeFamilies: dynamicRouteFamilies.map((family) => ({ ...family, minimum: 1 })),
    })

    expect(metrics.routes).toBeGreaterThan(0)
    expect(metrics.dataFiles).toBeGreaterThan(0)
    expect(metrics.searchRows).toBe(3)
    expect(metrics.sitemapUrls).toBe(4)
    expect(Object.values(metrics.dynamicRoutes).every((count) => count > 0)).toBe(true)
  })

  test("rejects analyzer output from a normal build", () => {
    const buildDir = createValidBuildFixture()
    writeFixtureFile(buildDir, "stats.html")

    expect(() =>
      verifyBuild({
        buildDir,
        minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
        routeFamilies: dynamicRouteFamilies.map((family) => ({ ...family, minimum: 1 })),
      }),
    ).toThrow("normal builds must not contain public stats.html")
  })

  test("rejects an unexpectedly truncated dynamic route family", () => {
    const buildDir = createValidBuildFixture()

    expect(() =>
      verifyBuild({
        buildDir,
        minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
        routeFamilies: [{ name: "store", directory: "store", minimum: 2 }],
      }),
    ).toThrow("dynamic route family store has 1 routes; expected at least 2")
  })

  test("does not count legacy numeric store redirects as current products", () => {
    const buildDir = createValidBuildFixture()
    writeFixtureFile(buildDir, "store/120591/index.html")

    expect(() =>
      verifyBuild({
        buildDir,
        minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
        routeFamilies: [
          {
            name: "store",
            directory: "store",
            excludePattern: /^\d+$/,
            minimum: 2,
          },
        ],
      }),
    ).toThrow("dynamic route family store has 1 routes; expected at least 2")
  })

  test("requires every current store route in the search index", () => {
    const buildDir = createValidBuildFixture()
    writeFixtureFile(buildDir, "search.csv", "title,url,classnames\nHome,/,\n")

    expect(() =>
      verifyBuild({
        buildDir,
        minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
        routeFamilies: dynamicRouteFamilies.map((family) => ({ ...family, minimum: 1 })),
      }),
    ).toThrow("search index is missing dynamic route: /store/fixture/")
  })

  test("requires every internal search fragment to match a rendered heading", () => {
    const buildDir = createValidBuildFixture()
    writeFixtureFile(
      buildDir,
      "search.csv",
      "title,url,classnames\nHome,/,\nStore fixture,/store/fixture/,\nMissing,/docs/example/#missing,\n",
    )

    expect(() =>
      verifyBuild({
        buildDir,
        minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
        routeFamilies: dynamicRouteFamilies.map((family) => ({ ...family, minimum: 1 })),
      }),
    ).toThrow("search URL points to a missing heading: /docs/example/#missing")
  })

  test("accepts page source links for standard and layout-reset Markdown files", () => {
    const buildDir = createValidBuildFixture()
    const repoDir = createRepoFixture()
    writeFixtureFile(
      repoDir,
      "packages/docs/src/routes/(routes)/docs/example/+page.md",
      "# Example",
    )
    writeFixtureFile(
      repoDir,
      "packages/docs/src/routes/(routes)/docs/reset/+page@(routes).md",
      "# Reset",
    )
    writeFixtureFile(
      buildDir,
      "docs/example/index.html",
      '<h2 id="section">Section</h2><a href="https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/routes/(routes)/docs/example/+page.md?plain=1">Edit</a>',
    )
    writeFixtureFile(
      buildDir,
      "docs/reset/index.html",
      '<a href="https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/src/routes/(routes)/docs/reset/+page@(routes).md?plain=1">Text</a>',
    )

    expect(() =>
      verifyBuild({
        buildDir,
        repoDir,
        minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
        routeFamilies: dynamicRouteFamilies.map((family) => ({ ...family, minimum: 1 })),
      }),
    ).not.toThrow()
  })

  test("rejects a page source link whose repository file is missing", () => {
    const buildDir = createValidBuildFixture()
    const repoDir = createRepoFixture()
    writeFixtureFile(
      repoDir,
      "packages/docs/src/routes/(routes)/docs/v5/+page@(routes).md",
      "# daisyUI 5",
    )
    writeFixtureFile(
      buildDir,
      "docs/example/index.html",
      '<h2 id="section">Section</h2><a href="https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/routes/(routes)/docs/v5/+page.md?plain=1">Edit</a>',
    )

    expect(() =>
      verifyBuild({
        buildDir,
        repoDir,
        minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
        routeFamilies: dynamicRouteFamilies.map((family) => ({ ...family, minimum: 1 })),
      }),
    ).toThrow(
      "page source link points to a missing repository file: docs/example/index.html -> packages/docs/src/routes/(routes)/docs/v5/+page.md",
    )
  })

  test("requires a complete ordered comparison matrix", () => {
    const buildDir = createValidBuildFixture()
    rmSync(join(buildDir, "compare/fixture-reverse"), { recursive: true })

    expect(() =>
      verifyBuild({
        buildDir,
        minimums: { routes: 1, dataFiles: 1, searchRows: 1, sitemapUrls: 1 },
        routeFamilies: dynamicRouteFamilies.map((family) => ({ ...family, minimum: 1 })),
      }),
    ).toThrow("comparison route count 1 does not match 2 frameworks (2 ordered pairs)")
  })

  test("counts CSV records without treating quoted newlines as rows", () => {
    const content = 'title,url,classnames\n"Two\nlines",/example/,"btn,card"\nHome,/,\n'
    expect(countCsvRecords(content)).toBe(3)
  })
})
