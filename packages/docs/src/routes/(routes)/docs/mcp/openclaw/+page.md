---
layout: docs
seo: false
---

<script>
  import SEO from "$components/SEO.svelte"
  import Translate from "$components/Translate.svelte"
</script>

<SEO
  title="daisyUI MCP server for OpenClaw"
  desc="Setup OpenClaw to correctly generate daisyUI code based on your prompt."
/>


<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/mcp/">MCP setup guides</a></li>
    <li>OpenClaw</li>
  </ul>
</div>


<h1><img src="https://img.daisyui.com/images/logos/openclaw.svg" alt="OpenClaw" width="40" height="40" class="inline-block me-2 -mt-2 not-prose">daisyUI MCP server for OpenClaw</h1>
<p>Setup OpenClaw to correctly generate daisyUI code based on your prompt.</p>

MCP is a an API to communicate with AI models. You can add MCP servers and OpenClaw will communicate with them to get more accurate results.  

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
  - Set your Blueprint `LICENSE` and `EMAIL` address in the command below.
  - `FIGMA` API Key is optional - Only needed for Figma-to-code conversion

```sh:terminal
openclaw mcp set daisyui-blueprint '{"command":"npx","args":["-y","daisyui-blueprint@latest"],"env":{"LICENSE":"YOUR_LICENSE_KEY","EMAIL":"YOUR_EMAIL","FIGMA":"YOUR_FIGMA_API_KEY"}}'
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

```sh:Terminal
openclaw mcp set context7 '{"command":"uvx","args":["context7-mcp"]}'
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
openclaw mcp set daisyui-gitmcp '{"command":"npx","args":["-y","mcp-remote","https://gitmcp.io/saadeghi/daisyui"]}'
```

#### Usage

Now you can ask AI anything about daisyUI, and write `use daisyui-gitmcp` at the end of your prompt.  

```md:prompt
give me a light daisyUI 5 theme with tropical color palette. use daisyui-gitmcp
```

</div>
</div>
