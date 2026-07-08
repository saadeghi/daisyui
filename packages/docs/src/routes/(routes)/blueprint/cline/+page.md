---
title: Install Blueprint MCP for Cline
desc: Install daisyUI Blueprint MCP server for Cline.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>



### Step 1: License key

Get a [Blueprint license key](/blueprint/checkout/).

### Step 2: Configure MCP settings

1. Click the MCP Servers icon at the top navigation bar of the Cline pane.
2. Select the **Configure** tab.
3. Click the **Configure MCP Servers** button at the bottom of the pane.
4. Add this configuration to `cline_mcp_settings.json`.

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
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

After configuring the server, tell the AI model to use Blueprint MCP.

<a href="/blueprint/figma/" class="btn btn-sm rounded-full not-prose">Next: Setup the Figma API</a>
