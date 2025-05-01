---
title: Zed setup for daisyUI
desc: Setup Zed editor to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> To setup Tailwind CSS syntax support and IntelliSense, see [Tailwind CSS docs](https://tailwindcss.com/docs/editor-setup).

## <img src="https://img.daisyui.com/images/logos/zed.webp" alt="Zed" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Zed LLM setup

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
Here's how to use daisyUI llms.txt in Zed:

### Quick use

- In Thread chat type this before your prompt
  ```md:prompt
  @fetch https://daisyui.com/llms.txt
  ```
- Or in Text thread chat type this before your prompt
  ```md:prompt
  /fetch https://daisyui.com/llms.txt
  ```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers to your code editor and Cursor will communicate with them to get more accurate results.

I suggest using [Context7](https://context7.com/) [MCP server](https://github.com/upstash/context7-mcp) which provides many libraries including daisyUI.

1. Press <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd> (or <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd> on Windows)
2. Type `agent: add context server`
3. Add this name and srver:

   ```sh:name
   context7
   ```

   ```sh:server
   npx -y @upstash/context7-mcp@latest
   ```

4. Now in `Agent Mode` you can ask AI anything about daisyUI, and write `use context7` at the end of your prompt.  
    For example:
   ```md:prompt
   give me a light daisyUI 5 theme with tropical color palette. use context7
   ```
