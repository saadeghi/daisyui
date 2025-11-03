---
title: Cursor setup for daisyUI
desc: Setup Cursor editor to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> To setup Tailwind CSS syntax support and IntelliSense, see [Tailwind CSS docs](https://tailwindcss.com/docs/editor-setup).

## <img src="https://img.daisyui.com/images/logos/cursor.webp" alt="Cursor" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Cursor LLM setup

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
Here's how to use daisyUI llms.txt in Cursor:

### Quick use

In chat window type this and Cursor will use daisyUI's llms.txt file to generate code.

```md:prompt
@web https://daisyui.com/llms.txt
```

### Project-level permanent setup

You can setup daisyUI's llms.txt file to your workspace so Cursor can use it by default. ([Read more at Cursor docs](https://docs.cursor.com/context/rules))

Run this command to save the llms.txt file to `.cursor/rules/daisyui.mdc`

```sh:Terminal
curl -L https://daisyui.com/llms.txt --create-dirs -o .cursor/rules/daisyui.mdc
```

### Add as an optional document to Cursor

1. Press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd>. Or if it's Windows, press <kbd class="kbd kbd-sm">⌃ Ctrl</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd>.
2. Type `Add new custom docs`
3. Add this:

   ```md
   https://daisyui.com/llms.txt
   ```

4. Now in chat window you can type `@docs` and choose `daisyUI` to provide daisyUI docs to Cursor.


### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Cursor will communicate with them to get more accurate results.  
You can use [Context7](https://context7.com/) or [daisyUI GitMCP](https://gitmcp.io/saadeghi/daisyui) as MCP server in Cursor.

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
