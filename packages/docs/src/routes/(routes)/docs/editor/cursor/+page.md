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

You can setup daisyUI's llms.txt file to your repo so Cursor can use it by default. ([Read more at Cursor docs](https://docs.cursor.com/context/rules))

Run this command to save the llms.txt file to `.cursor/rules/daisyui.mdc`

```sh:Terminal
curl -L https://daisyui.com/llms.txt --create-dirs -o .cursor/rules/daisyui.mdc
```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Cursor will communicate with them to get more accurate results.

I suggest using [Context7](https://context7.com/) [MCP server](https://github.com/upstash/context7-mcp) which provides many libraries including daisyUI.

1. Go to Cursor settings <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">J</kbd> (or <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">J</kbd> on Windows)
2. Click `MCP` from the left sidebar
3. Click `Add new global MCP server`
4. Add this:

   ```diff:.cursor/mcp.json
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

5. Now in `Agent Mode` you can ask AI anything about daisyUI, and write `use context7` at the end of your prompt.  
   For example:
   ```md:prompt
   give me a light daisyUI 5 theme with tropical color palette. use context7
   ```
