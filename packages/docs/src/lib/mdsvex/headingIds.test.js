import { describe, expect, test } from "bun:test"
import {
  createHeadingSlugger,
  getHeadingText,
  assignHeadingIds,
  slugHeadingText,
} from "./headingIds.js"

describe("heading text extraction", () => {
  test("collects text from nested markdown and inline code", () => {
    const heading = {
      type: "heading",
      depth: 2,
      children: [
        { type: "text", value: "1. Use " },
        { type: "inlineCode", value: "code" },
        { type: "text", value: ", " },
        { type: "emphasis", children: [{ type: "text", value: "emphasis" }] },
        { type: "text", value: ", and " },
        { type: "link", url: "/", children: [{ type: "text", value: "links" }] },
      ],
    }
    expect(getHeadingText(heading)).toBe("1. Use code, emphasis, and links")
  })

  test("extracts translated heading text from generated and source HTML", () => {
    expect(
      getHeadingText({
        type: "heading",
        children: [
          {
            type: "html",
            value: '<span data-heading-text=" Cursor &quot;LLM&quot;">translated content</span>',
          },
        ],
      }),
    ).toBe(' Cursor "LLM"')
    expect(
      getHeadingText({
        type: "heading",
        depth: 2,
        children: [{ type: "html", value: '<Translate text="List of themes" />' }],
      }),
    ).toBe("List of themes")
  })
})

describe("heading IDs", () => {
  test("uses the rendered heading normalization for search anchors", () => {
    expect(slugHeadingText("1. Setup Expert")).toBe("1-setup-expert")
    expect(slugHeadingText("~Alert with buttons + responsive")).toBe(
      "alert-with-buttons--responsive",
    )
    expect(slugHeadingText(" Cursor LLM setup")).toBe("-cursor-llm-setup")
  })

  test("creates unique IDs without colliding with explicit suffixes", () => {
    const slug = createHeadingSlugger()
    expect(["Usage", "Usage-2", "Usage"].map(slug)).toEqual(["usage", "usage-2", "usage-3"])
  })

  test("assigns unique IDs to every rendered heading in document order", () => {
    const tree = {
      type: "root",
      children: [
        { type: "heading", depth: 2, children: [{ type: "text", value: "Usage" }] },
        { type: "heading", depth: 3, children: [{ type: "text", value: "~Usage" }] },
        { type: "heading", depth: 4, children: [{ type: "text", value: "Usage" }] },
      ],
    }
    assignHeadingIds()(tree)

    expect(tree.children.map((node) => node.data.hProperties.id)).toEqual([
      "usage",
      "usage-2",
      "usage-3",
    ])
  })
})
