---
layout: docs
seo: false
---

<script>
  import Translate from "$components/Translate.svelte"
  import SEO from "$components/SEO.svelte"
</script>

<SEO
  title="daisyUI plugin for Codex"
  desc="Install the daisyUI plugin for Codex so your agent can use the latest daisyUI skill."
/>

<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/plugin/">Plugin setup guides</a></li>
    <li>Codex</li>
  </ul>
</div>

<h1><img src="https://img.daisyui.com/images/logos/codex.svg" alt="Codex" width="40" height="40" class="inline-block me-2 -mt-2 not-prose">daisyUI plugin for Codex</h1>
<p>Install the daisyUI plugin for Codex so your agent can use the latest daisyUI skill.</p>

The daisyUI plugin provides the latest version of daisyUI skill for Codex. Use it when you want Codex to generate daisyUI code with the current component rules, theme rules, and usage instructions in context.

### Install

Run these commands:

```sh:Terminal
codex plugin marketplace add saadeghi/daisyui --sparse .agents/plugins
codex plugin add daisyui@daisyui
```

### Usage

Now you can ask Codex to use daisyUI when it writes UI code.

```md:prompt
Make a login form. use daisyUI
```

For a more efficient daisyUI generation and on-demand component snippets, use [daisyUI Blueprint MCP server](/blueprint/). Blueprint MCP saves more tokens and has more control over the generated code.
