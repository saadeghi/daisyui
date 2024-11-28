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
    '"0"': "{0}",
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
  const re = new RegExp(
    Object.keys(stringsToReplace)
      .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    "gi"
  )

  function update() {
    node.innerHTML = originalContent.replace(
      re,
      (matched) => stringsToReplace[matched.toLowerCase()]
    )
  }

  update()

  return {
    update,
  }
}
