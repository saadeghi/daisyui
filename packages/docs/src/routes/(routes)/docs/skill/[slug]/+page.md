---
layout: docs
seo: false
componentfooter: false
---

<script>
  import Translate from "$components/Translate.svelte"
  import SEO from "$components/SEO.svelte"
  import { t } from "$lib/i18n.svelte.js"
  export let data
</script>

<SEO
  title={`How to add daisyUI skill to ${data.editor.name}`}
  desc="Setup your code editor and agent to correctly generate daisyUI code based on your prompt."
/>


<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/skill/">daisyUI Skill</a></li>
    <li>{data.editor.name}</li>
  </ul>
</div>


<h1><img src="https://img.daisyui.com/images/logos/{data.editor.icon}.svg" alt="{data.editor.name}" width="40" height="40" class="inline-block me-2 -mt-2 not-prose"> {@html $t(`Add daisyUI skill to ${data.editor.name}`)}</h1>
<p>{@html $t(`Setup ${data.editor.name} to correctly generate daisyUI code based on your prompt.`)}</p>

[daisyUI skill](https://daisyui.com/SKILL.md) is a compact, markdown version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
You can easily add daisyUI skill to your project and your agent will be able to use it automatically when you ask for daisyUI code.

### Install

Run this command

<div class="has-[.code-tab]:my-4 overflow-x-auto [direction:ltr]">
<div class="p-1 -mb-6 italic opacity-60 text-xs code-tab">prompt</div>
<pre class="shiki tokyo-night" style="background-color:var(--shiki-bg);color:var(--shiki-punctuation)" tabindex="0"><code><span class="line"><span style="color:var(--shiki-token)">{data.installCommand}</span></span></code></pre>
</div>

### Usage

Now in `Agent Mode` you can tell AI to use daisyUI skill. For example:

```md:prompt
Make a login form. use daisyUI skill
```

### Use an MCP server to save tokens and get faster results
We recommend using an [MCP server](/docs/mcp/) for daisyUI.  
MCP servers are more efficient and faster than skills, they provide context on demand, instead of a static skill file. An MCP server will save you LLM tokens and will generate the code faster.

<a href="/docs/mcp/" class="btn">See daisyUI MCP setup guides</a>
