const whitespaceOnly = /^\s+$/

function mergeWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    const merged = []
    let carriedContent = ""

    line.forEach((token, index) => {
      const canMerge = !(token.fontStyle && (token.fontStyle & 4 || token.fontStyle & 8))

      if (canMerge && whitespaceOnly.test(token.content) && line[index + 1]) {
        carriedContent += token.content
      } else if (carriedContent) {
        if (canMerge) {
          merged.push({
            ...token,
            content: carriedContent + token.content,
          })
        } else {
          merged.push({ content: carriedContent }, token)
        }
        carriedContent = ""
      } else {
        merged.push(token)
      }
    })

    return merged
  })
}

function tokenStyle(token) {
  const styles = {}
  if (token.color) styles.color = token.color

  if (token.fontStyle) {
    if (token.fontStyle & 1) styles["font-style"] = "italic"
    if (token.fontStyle & 2) styles["font-weight"] = "bold"

    const decorations = []
    if (token.fontStyle & 4) decorations.push("underline")
    if (token.fontStyle & 8) decorations.push("line-through")
    if (decorations.length) styles["text-decoration"] = decorations.join(" ")
  }

  return Object.entries(styles)
    .map(([property, value]) => `${property}:${value}`)
    .join(";")
}

function escapeHtmlText(value) {
  return value.replaceAll("&", "&#x26;").replaceAll("<", "&#x3C;")
}

export function renderHighlightedCode(tokens, theme) {
  const lines = mergeWhitespaceTokens(tokens).map((line) => {
    const spans = line
      .map((token) => {
        const style = tokenStyle(token)
        return `<span${style ? ` style="${style}"` : ""}>${escapeHtmlText(token.content)}</span>`
      })
      .join("")
    return `<span class="line">${spans}</span>`
  })

  // The syntax namespace is part of the public highlighted-code output.
  return `<pre class="syntax ${theme.name}" style="background-color:${theme.bg};color:${theme.fg}" tabindex="0"><code>${lines.join("\n")}</code></pre>`
}
