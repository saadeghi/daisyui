import { describe, expect, test } from "bun:test"
import {
  extractInlineMarkdownText,
  extractMarkdownHeadings,
  parseMarkdownLine,
} from "./markdown-text.js"

describe("Markdown inspection", () => {
  test("extracts visible heading text and ignores fenced examples", () => {
    const headings = extractMarkdownHeadings(
      [
        "## Install `daisyUI` with **Tailwind CSS**",
        "```md",
        "## Not a real heading",
        "```",
        "### [Read the docs](/docs/) &amp; continue",
      ].join("\n"),
    )

    expect(headings).toEqual([
      { type: "heading", depth: 2, text: "Install daisyUI with Tailwind CSS" },
      { type: "heading", depth: 3, text: "Read the docs & continue" },
    ])
  })

  test("extracts ATX headings nested inside unordered and ordered lists", () => {
    const headings = extractMarkdownHeadings(
      [
        "- ## Unordered heading",
        "",
        "1. ### Ordered heading",
        "",
        "- - #### Nested list heading",
        "",
        "- > ## Heading inside a quoted list item",
        "",
        "-     ## Five-space padding is paragraph content",
      ].join("\n"),
    )

    expect(headings).toEqual([
      { type: "heading", depth: 2, text: "Unordered heading" },
      { type: "heading", depth: 3, text: "Ordered heading" },
      { type: "heading", depth: 4, text: "Nested list heading" },
      { type: "heading", depth: 2, text: "Heading inside a quoted list item" },
    ])
  })

  test("preserves translation inline code and rendered links", () => {
    expect(
      extractInlineMarkdownText(
        'Use [`@plugin "daisyui"`](/docs/) and [GitHub](https://github.com/).',
        { renderLinks: true },
      ),
    ).toBe(
      'Use <a href="/docs/"><code>@plugin &quot;daisyui&quot;</code></a> and <a href="https://github.com/" rel="nofollow" target="_blank">GitHub</a>.',
    )
  })

  test("matches line-oriented block handling", () => {
    expect(parseMarkdownLine("- List item", { renderLinks: true })).toEqual({
      type: "paragraph",
      text: "List item",
    })
    expect(parseMarkdownLine("<p>Raw wrapper</p>", { renderLinks: true })).toEqual({
      type: "html",
      text: "Raw wrapper",
    })
    expect(parseMarkdownLine("    indented code", { renderLinks: true })).toBeNull()
  })
})
