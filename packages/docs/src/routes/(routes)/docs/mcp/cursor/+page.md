---
layout: docs
seo: false
---

<script>
  import SEO from "$components/SEO.svelte"
  import Translate from "$components/Translate.svelte"
</script>

<SEO
  title="daisyUI MCP server for Cursor"
  desc="Setup Cursor to correctly generate daisyUI code based on your prompt."
/>


<div class="breadcrumbs text-sm not-prose opacity-40">
  <ul>
    <li><a href="/docs/mcp/">MCP setup guides</a></li>
    <li>Cursor</li>
  </ul>
</div>


<h1><img src="https://img.daisyui.com/images/logos/cursor.svg" alt="Cursor" width="40" height="40" class="inline-block me-2 -mt-2 not-prose">daisyUI MCP server for Cursor</h1>
<p>Setup Cursor to correctly generate daisyUI code based on your prompt.</p>

MCP is a an API to communicate with AI models. You can add MCP servers and Cursor will communicate with them to get more accurate results.  

There are 3 options:

1. [Blueprint](/blueprint/): The Official MCP server from daisyUI (Recommended for best results)
2. [Context7](https://context7.com/): Free 3rd party MCP server
3. [daisyUI GitMCP](https://gitmcp.io/saadeghi/daisyui): Free 3rd party MCP server


<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Blueprint" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### daisyUI Blueprint

Blueprint is the official MCP server for daisyUI. [Read more about Blueprint](/blueprint/).

1. Automatic setup

    1. Click the button below:

    <div class="bg-base-200 border-base-content/10 my-6 flex items-center justify-center rounded border py-8 s-dlPzHLlKQ81H"><a class="btn btn-neutral s-dlPzHLlKQ81H" target="_blank" href="https://cursor.com/en/install-mcp?name=daisyui-blueprint&amp;config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImRhaXN5dWktYmx1ZXByaW50QGxhdGVzdCJdLCJlbnYiOnsiTElDRU5TRSI6IiIsIkVNQUlMIjoiIiwiRklHTUEiOiIifX0="><img class="me-2 size-4 max-sm:hidden s-dlPzHLlKQ81H" src="https://img.daisyui.com/images/logos/cursor.webp?2" alt="Cursor"> Install MCP Server</a></div>

    2. In the MCP settings form add the following environment variables:
      - LICENSE: YOUR BLUEPRINT LICENSE KEY
      - EMAIL: YOUR EMAIL ADDRESS
      - FIGMA: YOUR FIGMA API KEY (optional)

2. Manual setup

    1. Get a [Blueprint License](/blueprint/checkout/)
    2. In Cursor press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> ( Or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> )
    3. Choose `MCP: Open MCP Settings`
    4. Add this and set your `license key` + `email address` in it
    Figma API Key is optional - Only needed for Figma-to-code conversion

    ```diff:~/.cursor/mcp.json
    {
      "mcpServers": {
    +   "daisyui-blueprint": {
    +     "type": "stdio",
    +     "command": "npx",
    +     "args": ["-y", "daisyui-blueprint@latest"],
    +     "env": {
    +       "LICENSE": "YOUR BLUEPRINT LICENSE KEY",
    +       "EMAIL": "YOUR EMAIL ADDRESS",
    +       "FIGMA": "YOUR FIGMA API KEY (optional)"
    +     }
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

1. In Cursor press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> ( Or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> )
2. Choose `MCP: Open MCP Settings`
3. Click `Add MCP server`
4. Add this:

   ```diff:~/.cursor/mcp.json
   {
     "mcpServers": {
   +   "Context7": {
   +     "type": "stdio",
   +     "command": "npx",
   +     "args": ["-y", "@upstash/context7-mcp@latest"]
   +   }
     }
   }
   ```

#### Usage

Now in `Agent Mode` you can ask AI anything about daisyUI. write `use context7` at the end of your prompt.  
For example:

```md:prompt
give me a light daisyUI 5 theme with tropical color palette. use context7
```

  </div>

  <input type="radio" name="mcp_options" class="tab" aria-label="GitMCP" />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup daisyUI GitMCP server

1. In Cursor press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> ( Or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> )
2. Choose `MCP: Open MCP Settings`
3. Click `Add MCP server`
4. Add this:

   ```diff:~/.cursor/mcp.json
   {
     "mcpServers": {
   +   "daisyui-github": {
   +     "url": "https://gitmcp.io/saadeghi/daisyui"
   +   }
     }
   }
   ```

#### Usage

Now in `Agent Mode` you can ask AI anything about daisyUI.

```md:prompt
give me a light daisyUI 5 theme with tropical color palette
```

</div>
</div>
