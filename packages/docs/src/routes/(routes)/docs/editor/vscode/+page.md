---
title: VSCode setup for daisyUI
desc: Setup VSCode to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> To setup Tailwind CSS syntax support and IntelliSense, see [Tailwind CSS docs](https://tailwindcss.com/docs/editor-setup).

## <img src="https://img.daisyui.com/images/logos/vscode.webp" alt="VSCode" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> VSCode and Copilot LLM setup

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
Here's how to use daisyUI llms.txt in VSCode:

### Quick use

In chat window type this and VSCode will use daisyUI's llms.txt file to generate code.

```md:prompt
#fetch https://daisyui.com/llms.txt
```

### Project-level permanent setup

You can setup daisyUI's llms.txt file to your repo so Copilot can use it by default. ([Read more at VSCode docs](https://code.visualstudio.com/docs/copilot/copilot-customization))

1. Run this command to save the llms.txt file to `.vscode/daisyui.md`

   ```sh:Terminal
   curl -L https://daisyui.com/llms.txt --create-dirs -o .vscode/daisyui.md
   ```

2. In `.vscode/settings.json` Add this:

   ```json:.vscode/settings.json
   {
     "github.copilot.chat.codeGeneration.instructions": [
       {
         "file": "./.vscode/daisyui.md"
       }
     ]
   }
   ```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Copilot will communicate with them to get more accurate results.

I suggest using [Context7](https://context7.com/) [MCP server](https://github.com/upstash/context7-mcp) which provides many libraries including daisyUI.

1. Go to MCP settings in VSCode: [`vscode://settings/mcp`](vscode://settings/mcp)
2. Click `Edit in settings.json`
3. Add this:

   ```diff:settings.json
   {
     "mcp": {
       "servers": {
   +     "Context7": {
   +       "type": "stdio",
   +       "command": "npx",
   +       "args": ["-y", "@upstash/context7-mcp@latest"]
   +     }
       }
     }
   }
   ```

4. Now in `Agent Mode` you can ask AI anything about daisyUI, and write `use context7` at the end of your prompt.  
   For example:

   ```md:prompt
   give me a light daisyUI 5 theme with tropical color palette. use context7
   ```
