---
title: Install Blueprint MCP for Zed
desc: Install daisyUI Blueprint MCP server for Zed.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>



### Step 1: License key

Get a [Blueprint license key](/blueprint/checkout/).

### Step 2: Configure MCP settings

1. In Zed press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd>, or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd>.
2. Choose `agent: add context server`.
3. Add this configuration and set your licensing environment variables.

```json
{
  "daisyui-blueprint": {
    "command": "npx",
    "args": ["-y", "daisyui-blueprint@latest"],
    "env": {
      "LICENSE": "YOUR BLUEPRINT LICENSE KEY",
      "EMAIL": "YOUR EMAIL ADDRESS",
      "FIGMA": "YOUR FIGMA API KEY (optional)"
    }
  }
}
```

After configuring the server, tell the AI model to use Blueprint MCP.

<a href="/blueprint/figma/" class="btn btn-sm rounded-full not-prose">Next: Setup the Figma API</a>
