---
title: Windsurf setup for daisyUI
desc: Setup Windsurf editor to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> To setup Tailwind CSS syntax support and IntelliSense, see [Tailwind CSS docs](https://tailwindcss.com/docs/editor-setup).

## <img src="https://img.daisyui.com/images/logos/windsurf.webp" alt="Windsurf" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Windsurf LLM setup

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
Here's how to use daisyUI llms.txt in Windsurf:

### Quick use

- In chat window type this and write your prompt

```md:prompt
@web https://daisyui.com/llms.txt
```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Windsurf will communicate with them to get more accurate results.

I suggest using [Context7](https://context7.com/) [MCP server](https://github.com/upstash/context7-mcp) which provides many libraries including daisyUI.

1. Press <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd> (or <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd> on Windows)
2. Type `Windsurf: MCP Configuration Panel`
3. Click `Add custom server +`
4. Add this:

```diff:mcp_config.json
{
  "mcpServers": {
+   "context7": {
+     "command": "npx",
+     "args": ["-y", "@upstash/context7-mcp@latest"]
+   }
  }
}
```

5. Now you can ask AI anything about daisyUI, and write `use context7` at the end of your prompt.  
   For example:

```md:prompt
give me a light daisyUI 5 theme with tropical color palette. use context7
```
