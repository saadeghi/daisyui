import { prefix } from "$lib/stores"

export function prefixClassNames(node) {
  const originalContent = node.innerHTML ?? ""
  let prefixValue
  const unsubscribe = prefix.subscribe((value) => {
    prefixValue = value
    update()
  })

  function update() {
    node.innerHTML = originalContent.replaceAll("$$", prefixValue)
  }

  update()

  return {
    update,
    destroy: unsubscribe, // Unsubscribe when the component is destroyed
  }
}

export function htmlToJsx(node) {
  const originalContent = node.innerHTML ?? ""

  const stringsToReplace = {
    onclick: "onClick",
    "&lt;!--": "{/*",
    "--&gt;": "*/}",
    '<span class="token attr-name">class</span>': '<span class="token attr-name">className</span>',
    '<span class="token attr-name">for</span>': '<span class="token attr-name">htmlFor</span>',
    '<span class="token attr-name">tabindex</span>':
      '<span class="token attr-name">tabIndex</span>',
    '<span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span>':
      '<span class="token attr-name">defaultChecked</span>',
    '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>':
      '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br /</span><span class="token punctuation">&gt;</span></span>',
    '<span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>':
      '<span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">{</span>0<span class="token punctuation">}</span></span>',
    "clip-rule": "clipRule",
    "fill-opacity": "fillOpacity",
    "fill-rule": "fillRule",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-opacity": "strokeOpacity",
    "stroke-width": "strokeWidth",
  }

  // Couples of RegExp patterns and replacements
  const stringsToReplaceRegex = {
    // pattern(string) : replacement(string)
    '"(\\d+)"' : '\{$1\}',
  }
  
  const re = new RegExp(
    Object.keys(stringsToReplace)
      .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    "gi"
  )

  function update() {
    let JSXContent = originalContent
    JSXContent = JSXContent.replace(
      re,
      (matched) => stringsToReplace[matched.toLowerCase()]
    )

    // Replace parts base of patterns and replacements in stringsToReplaceRegex
    Object.keys(stringsToReplaceRegex)
      .forEach(regexPattern =>
        JSXContent = JSXContent.replace(new RegExp(regexPattern, "gi"), stringsToReplaceRegex[regexPattern])
      )
    
    node.innerHTML = JSXContent
  }

  update()

  return {
    update,
  }
}
