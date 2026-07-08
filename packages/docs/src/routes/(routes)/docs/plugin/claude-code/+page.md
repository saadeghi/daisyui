---
layout: docs
seo: false
---

<script>
  import Translate from "$components/Translate.svelte"
  import SEO from "$components/SEO.svelte"
</script>

<SEO
  title="daisyUI plugin for Claude Code"
  desc="Install the daisyUI plugin for Claude Code so your agent can use the latest daisyUI skill."
/>

<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/plugin/">Plugin setup guides</a></li>
    <li>Claude Code</li>
  </ul>
</div>

<h1><img src="https://img.daisyui.com/images/logos/claude-code.svg" alt="Claude Code" width="40" height="40" class="inline-block me-2 -mt-2 not-prose">daisyUI plugin for Claude Code</h1>
<p>Install the daisyUI plugin for Claude Code so your agent can use the latest daisyUI skill.</p>

The daisyUI plugin provides the latest version of daisyUI skill for Claude Code. Use it when you want Claude Code to generate daisyUI code with the current component rules, theme rules, and usage instructions in context.


### Install

Run these commands:

```sh:Terminal
claude plugin marketplace add saadeghi/daisyui
claude plugin install daisyui@daisyui
```

### Usage

Now you can ask Claude Code to use daisyUI when it writes UI code.

```md:prompt
Make a login form. use daisyUI
```

For a more efficient daisyUI generation and on-demand component snippets, use [daisyUI Blueprint MCP server](/blueprint/). Blueprint MCP saves more tokens and has more control over the generated code.
