---
layout: docs
seo: false
---

<script>
  import SEO from "$components/SEO.svelte"
  import Translate from "$components/Translate.svelte"
</script>

<SEO
  title="daisyUI MCP server for OpenCode"
  desc="Setup OpenCode to correctly generate daisyUI code based on your prompt."
/>


<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/mcp/">MCP setup guides</a></li>
    <li>OpenCode</li>
  </ul>
</div>


<h1><img src="https://img.daisyui.com/images/logos/opencode.svg" alt="OpenCode" width="40" height="40" class="inline-block me-2 -mt-2 not-prose">daisyUI MCP server for OpenCode</h1>
<p>Setup OpenCode to correctly generate daisyUI code based on your prompt.</p>

MCP is an API to communicate with AI models. You can add MCP servers and OpenCode will communicate with them to get more accurate results.  

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
2. Install OpenCode CLI (if you haven't already)

```sh:Terminal
npm install -g opencode-ai
```
3. Create or edit your `opencode.json` in your project root and add Blueprint MCP config:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "daisyui-blueprint": {
      "type": "local",
      "command": ["npx", "-y", "daisyui-blueprint@latest"],
      "enabled": true,
      "environment": {
        "LICENSE": "YOUR_LICENSE_KEY",
        "EMAIL": "YOUR_EMAIL",
        "FIGMA": "YOUR_FIGMA_API_KEY"
      }
    }
  }
}
```
4. `FIGMA` is optional. Only include it if you need Figma-to-code conversion.

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

Add this to your `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp",
      "enabled": true
    }
  }
}
```

Optional with API key:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "context7": {
      "type": "remote",
      "url": "https://mcp.context7.com/mcp",
      "enabled": true,
      "headers": {
        "CONTEXT7_API_KEY": "{env:CONTEXT7_API_KEY}"
      }
    }
  }
}
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

Add this to your `opencode.json`:

Using HTTP transport

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "daisyui-gitmcp": {
      "type": "remote",
      "url": "https://gitmcp.io/saadeghi/daisyui",
      "enabled": true
    }
  }
}
```

#### Usage

Now you can ask AI anything about daisyUI, and write `use daisyui-gitmcp` at the end of your prompt.  

```md:prompt
give me a light daisyUI 5 theme with tropical color palette. use daisyui-gitmcp
```

</div>
</div>
