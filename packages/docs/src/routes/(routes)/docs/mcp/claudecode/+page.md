---
layout: docs
seo: false
---

<script>
  import SEO from "$components/SEO.svelte"
  import Translate from "$components/Translate.svelte"
</script>

<SEO
  title="daisyUI MCP server for Claude Code"
  desc="Setup Claude Code to correctly generate daisyUI code based on your prompt."
/>


<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/mcp/">MCP setup guides</a></li>
    <li>Claude Code</li>
  </ul>
</div>


<h1><img src="https://img.daisyui.com/images/logos/claude-code.svg" alt="Claude Code" width="40" height="40" class="inline-block me-2 -mt-2 not-prose">daisyUI MCP server for Claude Code</h1>
<p>Setup Claude Code to correctly generate daisyUI code based on your prompt.</p>

MCP is a an API to communicate with AI models. You can add MCP servers and Claude will communicate with them to get more accurate results.  

There are 3 options:

1. [Blueprint](/blueprint/): The Official MCP server from daisyUI (Recommended for best results)
2. [Context7](https://context7.com/): Free 3rd party MCP server
3. [daisyUI GitMCP](https://gitmcp.io/saadeghi/daisyui): Free 3rd party MCP server

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Blueprint" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### daisyUI Blueprint

Blueprint is the official MCP server for daisyUI. [Read more about Blueprint](/blueprint/).

1. Get a [Blueprint License](/blueprint/checkout/)
2. Run this command to add Blueprint MCP server.  
  Figma API Key is optional - Only needed for Figma-to-code conversion

```sh:terminal
claude mcp add daisyui-blueprint
  --env LICENSE=YOUR_LICENSE_KEY
  --env EMAIL=YOUR_EMAIL
  --env FIGMA=YOUR_FIGMA_API_KEY
  -- npx -y daisyui-blueprint@latest
```

#### Usage

Now you can ask AI anything about daisyUI, and write `use Blueprint MCP` at the end of your prompt.  
For example:

```md:prompt
give me a light daisyUI 5 theme with tropical color palette. use Blueprint MCP
```


  </div>
  <input type="radio" name="mcp_options" class="tab" aria-label="Context7" />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup Context7 MCP server

Run this command to add Context7 MCP server:

Using HTTP transport

```sh:Terminal
claude mcp add --transport http context7 https://mcp.context7.com/mcp
```

Or Claude Code Local Server Connection (it's local)

```sh:Terminal
claude mcp add context7 -- npx -y @upstash/context7-mcp
```

#### Usage

Now you can ask AI anything about daisyUI, and write `use context7` at the end of your prompt.  
For example:

```md:prompt
give me a light daisyUI 5 theme with tropical color palette. use context7
```

  </div>

  <input type="radio" name="mcp_options" class="tab" aria-label="GitMCP" />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup daisyUI GitMCP server

Run this command to add daisyUI GitMCP server:

Using HTTP transport

```sh:Terminal
claude mcp add --transport http daisyui https://gitmcp.io/saadeghi/daisyui
```

#### Usage

Now you can ask AI anything about daisyUI.

```md:prompt
give me a light daisyUI 5 theme with tropical color palette
```

</div>
</div>
