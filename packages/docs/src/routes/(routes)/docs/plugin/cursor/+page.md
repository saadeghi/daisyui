---
layout: docs
seo: false
---

<script>
  import Translate from "$components/Translate.svelte"
  import SEO from "$components/SEO.svelte"
</script>

<SEO
  title="daisyUI plugin for Cursor"
  desc="Install the daisyUI plugin for Cursor so your agent can use the latest daisyUI skill."
/>

<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/plugin/">Plugin setup guides</a></li>
    <li>Cursor</li>
  </ul>
</div>

<h1><img src="https://img.daisyui.com/images/logos/cursor.svg" alt="Cursor" width="40" height="40" class="inline-block me-2 -mt-2 not-prose">daisyUI plugin for Cursor</h1>
<p>Install the daisyUI plugin for Cursor so your agent can use the latest daisyUI skill.</p>

The daisyUI plugin provides the latest version of daisyUI skill for Cursor. Use it when you want Cursor to generate daisyUI code with the current component rules, theme rules, and usage instructions in context.

### Install

1. Open Cursor settings with <kbd class="kbd kbd-sm">⌘</kbd> + <kbd class="kbd kbd-sm">,</kbd>
2. Go to `Plugins`
3. Search for this repository:

```txt
https://github.com/saadeghi/daisyui
```

4. Click `daisyui`
5. Click `Add to Cursor`

### Usage

Now you can prompt Cursor with:

```md:prompt
/daisyui Make a login form
```

For a more efficient daisyUI generation and on-demand component snippets, use [daisyUI Blueprint MCP server](/blueprint/). Blueprint MCP saves more tokens and has more control over the generated code.
