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

### Permanent setup

1. Press <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd>. Or if it's Windows, press <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd>.
2. Type `Add new custom docs`
3. Add this:

   ```md
   https://daisyui.com/llms.txt
   ```

4. Now in chat window you can type `@docs` and choose `daisyUI` to provide daisyUI docs to Cursor.

### Project-level permanent setup

You can setup daisyUI's llms.txt file to your workspace so Cursor can use it by default. ([Read more at Cursor docs](https://docs.cursor.com/context/rules))

Run this command to save the llms.txt file to `.cursor/rules/daisyui.mdc`

```sh:Terminal
curl -L https://daisyui.com/llms.txt --create-dirs -o .cursor/rules/daisyui.mdc
```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Cursor will communicate with them to get more accurate results.  
You can use [Context7](https://context7.com/) or [daisyUI GitMCP](https://gitmcp.io/saadeghi/daisyui) as MCP server in Cursor.

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Context7" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup Context7 MCP server

1. Go to Cursor settings <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">J</kbd> (or <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">J</kbd> on Windows)
2. Click `MCP` from the left sidebar
3. Click `Add new global MCP server`
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

1. Go to Cursor settings <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">J</kbd> (or <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">J</kbd> on Windows)
2. Click `MCP` from the left sidebar
3. Click `Add new global MCP server`
4. Add this:

   ```diff:~/.cursor/mcp.json
   {
     "mcpServers": {
   +   "daisyui Docs": {
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
