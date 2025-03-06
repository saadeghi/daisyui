import { prefix } from "$lib/stores"

const replaceStrings = (content, replacements) => {
  const re = new RegExp(
    Object.keys(replacements)
      .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    "gi",
  )

  return content.replace(re, (matched) => replacements[matched.toLowerCase()])
}

export const prefixClassNames = (node) => {
  const originalContent = node.innerHTML ?? ""
  let prefixValue

  const update = () => {
    node.innerHTML = originalContent.replaceAll("$$", prefixValue)
  }

  const unsubscribe = prefix.subscribe((value) => {
    prefixValue = value
    update()
  })

  update()

  return {
    update,
    destroy: unsubscribe, // Unsubscribe when the component is destroyed
  }
}

export const htmlToJsx = (node) => {
  const originalContent = node.innerHTML ?? ""

  const stringsToReplace = {
    onclick: "onClick",
    '"0"': "{0}",
    "&lt;!--": "{/*",
    "--&gt;": "*/}",
    '<span style="color:var(--shiki-attr-name)"> class</span>':
      '<span style="color:var(--shiki-attr-name)"> className</span>',
    '<span style="color:var(--shiki-attr-name)">  class</span>':
      '<span style="color:var(--shiki-attr-name)">  className</span>',
    '<span style="color:var(--shiki-attr-name)">    class</span>':
      '<span style="color:var(--shiki-attr-name)">    className</span>',
    '<span style="color:var(--shiki-attr-name)">      class</span>':
      '<span style="color:var(--shiki-attr-name)">      className</span>',
    '<span style="color:var(--shiki-attr-name)">        class</span>':
      '<span style="color:var(--shiki-attr-name)">        className</span>',
    '<span style="color:var(--shiki-attr-name)">          class</span>':
      '<span style="color:var(--shiki-attr-name)">          className</span>',
    '<span style="color:var(--shiki-attr-name)">            class</span>':
      '<span style="color:var(--shiki-attr-name)">            className</span>',
    '<span style="color:var(--shiki-attr-name)">              class</span>':
      '<span style="color:var(--shiki-attr-name)">              className</span>',
    '<span style="color:var(--shiki-attr-name)"> for</span>':
      '<span style="color:var(--shiki-attr-name)"> htmlFor</span>',
    '<span style="color:var(--shiki-attr-name)"> checked</span><span style="color:var(--shiki-punctuation)">=</span><span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">checked</span><span style="color:var(--shiki-punctuation)">"</span>':
      '<span style="color:var(--shiki-attr-name)"> defaultChecked</span>',
    '<span style="color:var(--shiki-token)"><span style="color:var(--shiki-token)"><span style="color:var(--shiki-punctuation)"&lt;</span>br</span><span style="color:var(--shiki-punctuation)"&gt;</span></span>':
      '<span style="color:var(--shiki-token)"><span style="color:var(--shiki-token)"><span style="color:var(--shiki-punctuation)"&lt;</span>br /</span><span style="color:var(--shiki-punctuation)"&gt;</span></span>',
    '<span style="color:var(--shiki-punctuation)">"</span><span style="color:var(--shiki-attr-value)">0</span><span style="color:var(--shiki-punctuation)">"</span>':
      '<span style="color:var(--shiki-punctuation)">{</span><span style="color:var(--shiki-attr-value)">0</span><span style="color:var(--shiki-punctuation)">}</span>',
    tabindex: "tabIndex",
    "clip-rule": "clipRule",
    "fill-opacity": "fillOpacity",
    "fill-rule": "fillRule",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-opacity": "strokeOpacity",
    "stroke-width": "strokeWidth",
    popovertarget: "popoverTarget",
    "anchor-name": "anchorName",
    "position-anchor": "positionAnchor",
  }

  const update = () => {
    node.innerHTML = replaceStrings(originalContent, stringsToReplace)
  }

  update()

  return {
    update,
  }
}
