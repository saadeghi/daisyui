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
You can use [Context7](https://context7.com/) or [daisyUI GitMCP](https://gitmcp.io/saadeghi/daisyui) as MCP server in Claude desktop.

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Context7" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup Context7 MCP server

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

1. Go to Settings > Developer
2. Click `Edit Config` button
3. Add this to the config file:

   ```diff:claude_desktop_config.json
   {
     "mcpServers": {
   +   "daisyui Docs": {
   +     "command": "npx",
   +     "args": [
   +       "mcp-remote",
   +       "https://gitmcp.io/saadeghi/daisyui"
   +     ]
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
