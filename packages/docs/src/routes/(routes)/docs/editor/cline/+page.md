---
title: Cline setup for daisyUI
desc: Setup Cline VSCode extension to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <img src="https://img.daisyui.com/images/logos/cline.webp" alt="Cline VSCode extension" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Cline VSCode extension

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
Here's how to use daisyUI llms.txt in Cline:

### Quick use

In chat window type this before your prompt and Cline will use daisyUI's llms.txt file to generate code.

```md:prompt
https://daisyui.com/llms.txt
```

### Project-level permanent setup

You can setup daisyUI's llms.txt file to your repo so Cline can use it by default.

Run this command to save the llms.txt file to `.clinerules/daisyui.md`

```sh:Terminal
curl -L https://daisyui.com/llms.txt --create-dirs -o .clinerules/daisyui.md
```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Copilot will communicate with them to get more accurate results.

I suggest using [Context7](https://context7.com/) [MCP server](https://github.com/upstash/context7-mcp) which provides many libraries including daisyUI.

1. Install `Context7` from Cline MCP marketplace
2. Now can ask AI anything about daisyUI, and write `use context7` at the end of your prompt.  
   For example:

   ```md:prompt
   give me a light daisyUI 5 theme with tropical color palette. use context7
   ```
