const htmlEntities = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: "\u00a0",
  quot: '"',
}

const decodeHtmlEntities = (value) =>
  value.replace(/&(?:#(\d+)|#x([\da-f]+)|([a-z][\da-z]+));/gi, (match, decimal, hex, name) => {
    if (decimal) return String.fromCodePoint(Number(decimal))
    if (hex) return String.fromCodePoint(Number.parseInt(hex, 16))
    return htmlEntities[name.toLowerCase()] ?? match
  })

const encodedQuote = "\ue000"

const findClosingBracket = (value, start) => {
  let depth = 0
  for (let index = start; index < value.length; index += 1) {
    if (value[index] === "\\" && index + 1 < value.length) {
      index += 1
    } else if (value[index] === "[") {
      depth += 1
    } else if (value[index] === "]") {
      if (!depth) return index
      depth -= 1
    }
  }
  return -1
}

const findClosingParenthesis = (value, start) => {
  let depth = 0
  let quote = ""
  for (let index = start; index < value.length; index += 1) {
    const character = value[index]
    if (character === "\\" && index + 1 < value.length) {
      index += 1
    } else if (quote) {
      if (character === quote) quote = ""
    } else if (character === '"' || character === "'") {
      quote = character
    } else if (character === "(") {
      depth += 1
    } else if (character === ")") {
      if (!depth) return index
      depth -= 1
    }
  }
  return -1
}

const splitDestination = (value) => {
  const trimmed = value.trim()
  if (trimmed.startsWith("<")) {
    const end = trimmed.indexOf(">")
    if (end >= 0) return trimmed.slice(1, end)
  }
  return trimmed.match(/^(?:\\.|[^\s])*/)?.[0].replace(/\\([\\()[\]])/g, "$1") || ""
}

/**
 * Extracts the text exposed by the subset of mdast nodes used by search and
 * translation generation. Links can optionally retain their rendered HTML.
 */
export const extractInlineMarkdownText = (value, { renderLinks = false } = {}) => {
  let result = ""
  let index = 0

  while (index < value.length) {
    const character = value[index]

    if (character === "\\" && /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(value[index + 1])) {
      result += value[index + 1]
      index += 2
      continue
    }

    if (character === "`") {
      let size = 1
      while (value[index + size] === "`") size += 1
      const delimiter = "`".repeat(size)
      const end = value.indexOf(delimiter, index + size)
      if (end >= 0) {
        let code = value.slice(index + size, end).replace(/\s+/g, " ")
        if (/^ .* $/.test(code) && /[^ ]/.test(code)) code = code.slice(1, -1)
        result += renderLinks ? `\`${code}\`` : code
        index = end + size
        continue
      }
    }

    if (
      (character === "*" || character === "_") &&
      value[index + 1] &&
      !/\s/.test(value[index + 1])
    ) {
      const size = value[index + 1] === character ? 2 : 1
      const delimiter = character.repeat(size)
      const end = value.indexOf(delimiter, index + size)
      if (end >= index + size + 1 && !/\s/.test(value[end - 1])) {
        result += extractInlineMarkdownText(value.slice(index + size, end), { renderLinks })
        index = end + size
        continue
      }
    }

    const image = character === "!" && value[index + 1] === "["
    if (character === "[" || image) {
      const labelStart = index + (image ? 2 : 1)
      const labelEnd = findClosingBracket(value, labelStart)
      if (labelEnd >= 0) {
        const label = value.slice(labelStart, labelEnd)
        const next = value[labelEnd + 1]

        if (next === "(") {
          const destinationEnd = findClosingParenthesis(value, labelEnd + 2)
          if (destinationEnd >= 0) {
            if (!image) {
              const text = extractInlineMarkdownText(label, { renderLinks })
              const url = splitDestination(value.slice(labelEnd + 2, destinationEnd))
              result += renderLinks
                ? `<a href="${url.replace(/"/g, encodedQuote)}"${
                    /^(?:https?:)?\/\//i.test(url) ? ' rel="nofollow" target="_blank"' : ""
                  }>${text
                    .replace(/"/g, encodedQuote)
                    .replace(/`([^`]*)`/g, "<code>$1</code>")}</a>`
                : text.replace(/`([^`]*)`/g, "$1")
            }
            index = destinationEnd + 1
            continue
          }
        }

        if (next === "[") {
          const referenceEnd = findClosingBracket(value, labelEnd + 2)
          if (referenceEnd >= 0) {
            if (!image) result += extractInlineMarkdownText(label, { renderLinks })
            index = referenceEnd + 1
            continue
          }
        }
      }
    }

    if (character === "<") {
      const end = value.indexOf(">", index + 1)
      if (end >= 0) {
        const html = value.slice(index, end + 1)
        const autolink = html.match(/^<(https?:\/\/[^ >]+)>$/i)
        const email = html.match(/^<([^ <>@]+@[^ <>@]+)>$/)
        if (autolink) {
          const url = autolink[1]
          result += renderLinks ? `<a href="${url}" rel="nofollow" target="_blank">${url}</a>` : url
        } else if (email) {
          const address = email[1]
          result += renderLinks ? `<a href="mailto:${address}">${address}</a>` : address
        } else {
          const headingText = html.match(/\bdata-heading-text=(["'])(.*?)\1/)?.[2]
          const translateText = html.match(/<Translate\s+text=(["'])(.*?)\1/)?.[2]
          result += (headingText || translateText || "").replace(/&quot;/g, '"')
        }
        index = end + 1
        continue
      }
    }

    result += character
    index += 1
  }

  return decodeHtmlEntities(result).replaceAll(encodedQuote, "&quot;")
}

const stripAtxClosingSequence = (value) => value.replace(/[ \t]+#+[ \t]*$/, "").trim()

const parseAtxHeading = (line, options) => {
  const heading = line.match(/^ {0,3}(#{1,6})(?:[ \t]+|$)(.*)$/)
  if (!heading) return null

  return {
    type: "heading",
    depth: heading[1].length,
    text: extractInlineMarkdownText(stripAtxClosingSequence(heading[2]), options),
  }
}

const getListContainedContent = (line) => {
  let content = line
  let foundList = false

  while (content) {
    const blockquote = content.match(/^ {0,3}>[ \t]?([\s\S]*)$/)
    if (blockquote) {
      content = blockquote[1]
      continue
    }

    const listItem = content.match(/^ {0,3}(?:[*+-]|\d{1,9}[.)])([ \t]+)([\s\S]*)$/)
    if (!listItem) break

    const padding = listItem[1]
    if (!padding.includes("\t") && padding.length > 4) return null

    foundList = true
    content = listItem[2]
  }

  return foundList ? content : null
}

export const parseMarkdownLine = (line, options) => {
  if (/^(?: {4}|\t)/.test(line)) return null
  if (/^ {0,3}(?:([-*_])(?:[ \t]*\1){2,})[ \t]*$/.test(line)) return null
  if (/^ {0,3}\[[^\]]+\]:[ \t]*\S+/.test(line)) return null

  const heading = parseAtxHeading(line, options)
  if (heading) return heading

  const listHeading = parseAtxHeading(getListContainedContent(line) || "", options)
  if (listHeading) return listHeading

  let content = line
  content = content.replace(/^ {0,3}>[ \t]?/, "")
  content = content.replace(/^ {0,3}(?:[*+-]|\d{1,9}[.)])[ \t]+/, "")

  if (/^\s*<[a-z][^>]*(?:=>|=\{|\s(?:bind|on):)[\s\S]*$/i.test(content)) {
    return { type: "paragraph", text: content.replace(/<\/[a-z][^>]*>\s*$/i, "") }
  }

  const simpleHtml = content.match(/^<([a-z][\w-]*)([^>]*)>([^<]+)<\/\1>$/i)
  if (simpleHtml) return { type: "html", text: decodeHtmlEntities(simpleHtml[3]) }

  if (
    /^ {0,3}<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|pre|script|search|section|style|summary|table|tbody|td|textarea|tfoot|th|thead|title|tr|track|ul)(?:[ \t/>]|$)/i.test(
      content,
    ) ||
    /^ {0,3}<!--/.test(content) ||
    /^ {0,3}<[!?]/.test(content)
  ) {
    return null
  }

  return { type: "paragraph", text: extractInlineMarkdownText(content, options) }
}

/**
 * Finds Markdown headings without building a complete syntax tree.
 */
export const extractMarkdownHeadings = (content) => {
  const lines = content.split(/\r?\n/)
  const headings = []
  let fenceCharacter = ""
  let fenceSize = 0

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const fence = line.match(/^ {0,3}(`{3,}|~{3,})/)

    if (fence) {
      const character = fence[1][0]
      if (!fenceCharacter) {
        fenceCharacter = character
        fenceSize = fence[1].length
      } else if (character === fenceCharacter && fence[1].length >= fenceSize) {
        fenceCharacter = ""
        fenceSize = 0
      }
      continue
    }
    if (fenceCharacter) continue

    const parsed = parseMarkdownLine(line)
    if (parsed?.type === "heading") {
      headings.push(parsed)
      continue
    }

    if (index + 1 < lines.length && line.trim()) {
      const underline = lines[index + 1].match(/^ {0,3}(=+|-+)[ \t]*$/)
      if (underline && !/^(?: {4}|\t)/.test(line)) {
        headings.push({
          type: "heading",
          depth: underline[1][0] === "=" ? 1 : 2,
          text: extractInlineMarkdownText(line.trim()),
        })
        index += 1
      }
    }
  }

  return headings
}
