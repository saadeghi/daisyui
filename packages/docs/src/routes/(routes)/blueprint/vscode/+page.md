---
title: Install Blueprint MCP for VSCode Copilot
desc: Install daisyUI Blueprint MCP server for VSCode Copilot.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>



### Step 1: License key

Get a [Blueprint license key](/blueprint/checkout/).

### Step 2: Configure MCP settings

1. In VS Code press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd>, or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd>.
2. Search for `MCP: Open User Configuration`.
3. Add this configuration and set your `LICENSE`, `EMAIL`, and optional `FIGMA` variables.

```json
{
  "servers": {
    "daisyui-blueprint": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "daisyui-blueprint@latest"],
      "env": {
        "LICENSE": "YOUR BLUEPRINT LICENSE KEY",
        "EMAIL": "YOUR EMAIL ADDRESS",
        "FIGMA": "YOUR FIGMA API KEY (optional)"
      }
    }
  }
}
```

Read [VS Code docs](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) for more info about using MCP.

After configuring the server, tell the AI model to use Blueprint MCP.

<a href="/blueprint/figma/" class="btn btn-sm rounded-full not-prose">Next: Setup the Figma API</a>
