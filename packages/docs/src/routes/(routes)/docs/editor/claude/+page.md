---
title: Claude desktop setup for daisyUI
desc: Setup Claude desktop to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <img src="https://img.daisyui.com/images/logos/claude.webp" alt="Claude" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Claude desktop LLM setup

### Quick use

coming soon…

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Claude will communicate with them to get more accurate results.

I suggest using [Context7](https://context7.com/) [MCP server](https://github.com/upstash/context7-mcp) which provides many libraries including daisyUI.

1. Go to Settings > Developer
2. Click `Edit Config` button
3. Add this to the config file:

   ```diff:claude_desktop_config.json
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

4. Now you can ask AI anything about daisyUI, and write `use context7` at the end of your prompt.  
   For example:
   ```md:prompt
   give me a light daisyUI 5 theme with tropical color palette. use context7
   ```
