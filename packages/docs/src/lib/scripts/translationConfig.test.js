import { describe, expect, test } from "bun:test"
import {
  doNotTranslateAfterMarker,
  extractMarkdownTranslations,
  extractSvelteTranslations,
  getLanguages,
  getTranslationChunkForFile,
  isExcludedFile,
  readTranslations,
  validateTranslations,
  chunkNames,
  defaultLang,
} from "./translationConfig.js"

describe("translation path rules", () => {
  test("maps source paths to translation chunks", () => {
    expect(getTranslationChunkForFile("packages/docs/src/routes/(routes)/+page.md")).toBe("home")
    expect(
      getTranslationChunkForFile("packages/docs/src/routes/(routes)/docs/colors/+page.md"),
    ).toBe("docs")
    expect(
      getTranslationChunkForFile("packages/docs/src/routes/(routes)/components/button/+page.md"),
    ).toBe("components")
    expect(getTranslationChunkForFile("packages/docs/src/lib/components/Nav.svelte")).toBe("common")
    expect(getTranslationChunkForFile("packages/docs/src/routes/(routes)/store/+page.svelte")).toBe(
      "other",
    )
  })

  test("detects excluded files and directories", () => {
    expect(isExcludedFile("packages/docs/src/routes/(routes)/docs/upgrade/+page.md")).toBe(true)
    expect(isExcludedFile("packages/docs/src/routes/(routes)/docs/v5/+page.md")).toBe(true)
    expect(
      isExcludedFile("packages/docs/src/routes/(routes)/(marketing)/compare/x/+page.svelte"),
    ).toBe(true)
    expect(isExcludedFile("packages/docs/src/routes/(routes)/blog/(posts)/x/+page.md")).toBe(true)
    expect(isExcludedFile("packages/docs/src/routes/(routes)/store/pages/terms/+page.svelte")).toBe(
      true,
    )
    expect(isExcludedFile("packages/docs/src/routes/(routes)/docs/colors/+page.md")).toBe(false)
  })
})

describe("translation extraction", () => {
  test("honors the DO NOT TRANSLATE marker for configured files", () => {
    const content = ["Before marker", doNotTranslateAfterMarker, "After marker"].join("\n")

    expect(
      extractMarkdownTranslations(
        content,
        "packages/docs/src/routes/(routes)/docs/layout-and-typography/+page.md",
      ),
    ).toEqual(["Before marker"])
  })

  test("extracts markdown text, inline code, and headings", () => {
    expect(
      extractMarkdownTranslations(
        ["## Install daisyUI", "Use `btn` classes in your markup."].join("\n"),
        "packages/docs/src/routes/(routes)/docs/test/+page.md",
      ),
    ).toEqual(["Install daisyUI", "Use `btn` classes in your markup."])
  })

  test("skips component example headings", () => {
    expect(
      extractMarkdownTranslations(
        ["### ~toast with alert inside", "Toast content"].join("\n"),
        "packages/docs/src/routes/(routes)/components/toast/+page.md",
      ),
    ).toEqual(["Toast content"])
  })

  test("extracts Svelte $t calls", () => {
    expect(
      extractSvelteTranslations(
        '<h1>{@html $t("Account settings")}</h1><p>{$t(`Billing details`)}</p>',
        "packages/docs/src/routes/(routes)/account/+page.svelte",
      ),
    ).toEqual(["Account settings", "Billing details"])
  })

  test("extracts Translate component text", () => {
    expect(
      extractMarkdownTranslations(
        '<Translate text="Install daisyUI" />\n<Translate text={title} />',
        "packages/docs/src/routes/(routes)/docs/test/+page.md",
      ),
    ).toEqual(["Install daisyUI"])
  })

  test("preserves placeholders", () => {
    expect(
      extractSvelteTranslations(
        '<p>{@html $t("Hello {{name}}")}</p>',
        "packages/docs/src/routes/(routes)/account/+page.svelte",
      ),
    ).toEqual(["Hello {{name}}"])
  })

  test("preserves markdown links as HTML links", () => {
    expect(
      extractMarkdownTranslations(
        "Read the [install guide](/docs/install/) before using [Tailwind CSS](https://tailwindcss.com).",
        "packages/docs/src/routes/(routes)/docs/test/+page.md",
      ),
    ).toEqual([
      'Read the <a href="/docs/install/">install guide</a> before using <a href="https://tailwindcss.com" rel="nofollow" target="_blank">Tailwind CSS</a>.',
    ])
  })
})

describe("translation files", () => {
  test("all language chunk files have the same keys as English", () => {
    const languages = getLanguages().filter((lang) => lang !== defaultLang)

    for (const chunk of chunkNames) {
      const englishKeys = Object.keys(readTranslations(defaultLang, chunk))
      const englishKeySet = new Set(englishKeys)

      for (const lang of languages) {
        const keys = Object.keys(readTranslations(lang, chunk))
        const keySet = new Set(keys)

        expect(
          keys.filter((key) => !englishKeySet.has(key)),
          `${lang}.${chunk} extra keys`,
        ).toEqual([])
        expect(
          englishKeys.filter((key) => !keySet.has(key)),
          `${lang}.${chunk} missing keys`,
        ).toEqual([])
      }
    }
  })

  test("excluded route keys are absent unless also used by allowed routes", () => {
    const excludedRouteIssues = validateTranslations().filter(
      (issue) => issue.type === "excluded-route-key",
    )

    expect(excludedRouteIssues).toEqual([])
  })
})
