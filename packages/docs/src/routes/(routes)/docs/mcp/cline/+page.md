<script>
  import SEO from "$components/SEO.svelte"
  import Translate from "$components/Translate.svelte"
</script>

<SEO
  title="daisyUI MCP server for Cline"
  desc="Setup Cline to correctly generate daisyUI code based on your prompt."
/>


<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/mcp/">MCP setup guides</a></li>
    <li>Cline</li>
  </ul>
</div>


<h1><img src="https://img.daisyui.com/images/logos/cline.webp" alt="Cline" width="40" height="40" class="inline-block me-2 -mt-2 not-prose">daisyUI MCP server for Cline</h1>
<p>Setup Cline to correctly generate daisyUI code based on your prompt.</p>

MCP is a an API to communicate with AI models. You can add MCP servers and Cline will communicate with them to get more accurate results.  

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
2. Click the MCP Servers icon at the top navigation bar of the Cline pane.
3. Select the `Configure` tab.
4. Click the `Configure MCP Servers` button at the bottom of the pane.
5. Add this and set your `license key` + `email address` in it
  Figma API Key is optional - Only needed for Figma-to-code conversion

```diff:cline_mcp_settings.json
{
  "servers": {
+   "daisyui-blueprint": {
+     "type": "stdio",
+     "command": "npx",
+     "args": ["-y", "daisyui-blueprint@latest"],
+     "env": {
+       "LICENSE": "YOUR BLUEPRINT LICENSE KEY",
+       "EMAIL": "YOUR EMAIL ADDRESS",
+       "FIGMA": "YOUR FIGMA API KEY (optional)"
+     }
+     "disabled": false,
+     "autoApprove": []
+   }
  }
}
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

Install `Context7` from Cline MCP marketplace

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

1. Click the MCP Servers icon at the top navigation bar of the Cline pane.
2. Select the `Configure` tab.
3. Click the `Configure MCP Servers` button at the bottom of the pane.
4. Add this config:

```diff:cline_mcp_settings.json
{
  "mcpServers": {
+   "daisyui-github": {
+     "url": "https://gitmcp.io/saadeghi/daisyui",
+     "disabled": false,
+     "autoApprove": []
+   }
  }
}
```

#### Usage

Now you can ask AI anything about daisyUI.

```md:prompt
give me a light daisyUI 5 theme with tropical color palette
```

</div>
</div>
