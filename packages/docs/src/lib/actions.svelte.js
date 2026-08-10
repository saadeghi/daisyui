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
    '<span style="color:var(--syntax-attr-name)">minlength</span>':
      '<span style="color:var(--syntax-attr-name)">minLength</span>',
    '<span style="color:var(--syntax-attr-name)"> minlength</span>':
      '<span style="color:var(--syntax-attr-name)"> minLength</span>',
    '<span style="color:var(--syntax-attr-name)">    minlength</span>':
      '<span style="color:var(--syntax-attr-name)">    minLength</span>',
    '<span style="color:var(--syntax-attr-name)">maxlength</span>':
      '<span style="color:var(--syntax-attr-name)">maxLength</span>',
    '<span style="color:var(--syntax-attr-name)"> maxlength</span>':
      '<span style="color:var(--syntax-attr-name)"> maxLength</span>',
    '<span style="color:var(--syntax-attr-name)">    maxlength</span>':
      '<span style="color:var(--syntax-attr-name)">    maxLength</span>',

    '<span style="color:var(--syntax-attr-name)">class</span>':
      '<span style="color:var(--syntax-attr-name)">className</span>',
    '<span style="color:var(--syntax-attr-name)"> class</span>':
      '<span style="color:var(--syntax-attr-name)"> className</span>',
    '<span style="color:var(--syntax-attr-name)">  class</span>':
      '<span style="color:var(--syntax-attr-name)">  className</span>',
    '<span style="color:var(--syntax-attr-name)">    class</span>':
      '<span style="color:var(--syntax-attr-name)">    className</span>',
    '<span style="color:var(--syntax-attr-name)">      class</span>':
      '<span style="color:var(--syntax-attr-name)">      className</span>',
    '<span style="color:var(--syntax-attr-name)">        class</span>':
      '<span style="color:var(--syntax-attr-name)">        className</span>',
    '<span style="color:var(--syntax-attr-name)">          class</span>':
      '<span style="color:var(--syntax-attr-name)">          className</span>',
    '<span style="color:var(--syntax-attr-name)">            class</span>':
      '<span style="color:var(--syntax-attr-name)">            className</span>',
    '<span style="color:var(--syntax-attr-name)">              class</span>':
      '<span style="color:var(--syntax-attr-name)">              className</span>',
    '<span style="color:var(--syntax-attr-name)"> for</span>':
      '<span style="color:var(--syntax-attr-name)"> htmlFor</span>',
    '<span style="color:var(--syntax-attr-name)"> checked</span><span style="color:var(--syntax-punctuation)">=</span><span style="color:var(--syntax-punctuation)">"</span><span style="color:var(--syntax-attr-value)">checked</span><span style="color:var(--syntax-punctuation)">"</span>':
      '<span style="color:var(--syntax-attr-name)"> defaultChecked</span>',
    '<span style="color:var(--syntax-token)"><span style="color:var(--syntax-token)"><span style="color:var(--syntax-punctuation)"&lt;</span>br</span><span style="color:var(--syntax-punctuation)"&gt;</span></span>':
      '<span style="color:var(--syntax-token)"><span style="color:var(--syntax-token)"><span style="color:var(--syntax-punctuation)"&lt;</span>br /</span><span style="color:var(--syntax-punctuation)"&gt;</span></span>',
    '<span style="color:var(--syntax-punctuation)">"</span><span style="color:var(--syntax-attr-value)">0</span><span style="color:var(--syntax-punctuation)">"</span>':
      '<span style="color:var(--syntax-punctuation)">{</span><span style="color:var(--syntax-attr-value)">0</span><span style="color:var(--syntax-punctuation)">}</span>',
    tabindex: "tabIndex",
    "clip-rule": "clipRule",
    "fill-opacity": "fillOpacity",
    "fill-rule": "fillRule",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-miterlimit": "strokeMiterlimit",
    "stroke-opacity": "strokeOpacity",
    "stroke-width": "strokeWidth",
    autocomplete: "autoComplete",
    inputmode: "inputMode",
    popovertarget: "popoverTarget",
    "anchor-name": "anchorName",
    "position-anchor": "positionAnchor",
  }

  const update = () => {
    node.innerHTML = replaceStrings(originalContent, stringsToReplace)
      // fix the broken tabIndex={0} in JSX tab
      .replaceAll(
        'var(--syntax-punctuation)" tabIndex={0}>',
        'var(--syntax-punctuation)" tabindex="0">',
      )
  }

  update()

  return {
    update,
  }
}
