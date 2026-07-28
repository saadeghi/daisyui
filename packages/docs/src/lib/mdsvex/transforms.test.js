import { describe, expect, test } from "bun:test"
import { codeTitles } from "./code-titles.js"
import { decorateExternalLinks } from "./external-links.js"
import { githubLinks } from "./github-links.js"
import { assignFallbackHeadingIds } from "./headingIds.js"
import { renderComponent } from "./render-component.js"

const paragraph = (value) => ({
  type: "paragraph",
  children: [{ type: "text", value }],
})

describe("local Markdown transforms", () => {
  test("wraps titled and untitled code blocks without revisiting inserted containers", () => {
    const tree = {
      type: "root",
      children: [
        { type: "code", lang: "js:title.js", meta: null, value: "first()" },
        { type: "code", lang: "css", meta: null, value: ".btn {}" },
      ],
    }

    codeTitles({
      containerClassName: "code-container",
      titleClassName: "code-title",
    })(tree)

    expect(tree.children.map((node) => node.type)).toEqual(["container", "container"])
    expect(tree.children[0].children[0]).toMatchObject({
      type: "paragraph",
      children: [{ type: "text", value: "title.js" }],
      data: { hProperties: { className: ["code-title"] } },
    })
    expect(tree.children[0].children[1]).toMatchObject({ type: "code", lang: "js", meta: null })
    expect(tree.children[1].children).toHaveLength(1)
  })

  test("links GitHub mentions, issues, hashes, and ranges", () => {
    const tree = {
      type: "root",
      children: [paragraph("@import fixed #12 in deadbee and deadbee...abcdef0")],
    }
    githubLinks({ repository: "https://github.com/saadeghi/daisyui" })(tree)

    const links = tree.children[0].children.filter((node) => node.type === "link")
    expect(links.map((node) => node.url)).toEqual([
      "https://github.com/import",
      "https://github.com/saadeghi/daisyui/issues/12",
      "https://github.com/saadeghi/daisyui/commit/deadbee",
      "https://github.com/saadeghi/daisyui/compare/deadbee...abcdef0",
    ])
    expect(links[0].children[0].type).toBe("strong")
  })

  test("adds fallback IDs only when IDs are missing and ignores raw HTML text", () => {
    const tree = {
      type: "root",
      children: [
        {
          type: "heading",
          depth: 1,
          children: [{ type: "text", value: "Hello, 世界! 👋" }],
        },
        {
          type: "heading",
          depth: 1,
          children: [{ type: "text", value: "Hello, 世界! 👋" }],
        },
        {
          type: "heading",
          depth: 2,
          data: { hProperties: { id: "kept" } },
          children: [{ type: "text", value: "Ignored" }],
        },
        {
          type: "heading",
          depth: 1,
          children: [{ type: "html", value: '<Translate text="Raw" />' }],
        },
      ],
    }
    assignFallbackHeadingIds()(tree)

    expect(tree.children.map((node) => node.data.hProperties.id)).toEqual([
      "hello-世界-",
      "hello-世界--1",
      "kept",
      "",
    ])
  })

  test("decorates external Markdown links but leaves other URLs and raw HTML alone", () => {
    const external = { type: "link", url: "https://example.com", children: [] }
    const protocolRelative = { type: "link", url: "//example.com", children: [] }
    const internal = { type: "link", url: "/docs/", children: [] }
    const mail = { type: "link", url: "mailto:test@example.com", children: [] }
    const raw = { type: "html", value: '<a href="https://example.com">raw</a>' }
    const tree = {
      type: "root",
      children: [paragraph(""), external, protocolRelative, internal, mail, raw],
    }

    decorateExternalLinks()(tree)

    expect(external.data.hProperties).toEqual({ rel: ["nofollow"], target: "_blank" })
    expect(protocolRelative.data.hProperties).toEqual({
      rel: ["nofollow"],
      target: "_blank",
    })
    expect(internal.data).toBeUndefined()
    expect(mail.data).toBeUndefined()
    expect(raw.data).toBeUndefined()
  })

  test("rebuilds a component block and removes the optional JSX sibling once", () => {
    const heading = {
      type: "heading",
      depth: 3,
      data: { hProperties: { id: "alert" } },
      children: [{ type: "text", value: "~Alert" }],
    }
    const tree = {
      type: "root",
      children: [
        heading,
        {
          type: "heading",
          depth: 4,
          children: [{ type: "strong", children: [{ type: "text", value: "Description" }] }],
        },
        { type: "html", value: '<div class="alert">Demo</div>' },
        { type: "code", lang: "html", value: '<div class="alert"></div>' },
        { type: "code", lang: "jsx", value: '<div className="alert"></div>' },
      ],
    }

    renderComponent()(tree)

    expect(tree.children[0].value).toBe(
      '<Component anchor="alert" title="Alert" desc="<strong>Description</strong>">\n',
    )
    expect(tree.children.filter((node) => node?.lang === "jsx")).toHaveLength(1)
    expect(tree.children.at(-1).value).toBe("\n</Component>")
  })
})
