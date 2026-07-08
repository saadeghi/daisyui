---
title: Install Blueprint MCP for OpenCode
desc: Install daisyUI Blueprint MCP server for OpenCode.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>



### Step 1: License key

Get a [Blueprint license key](/blueprint/checkout/).

### Step 2: Install OpenCode CLI

Install OpenCode CLI if you haven't already.

```sh
npm install -g opencode-ai
```

### Step 3: Configure MCP settings

Create or edit `opencode.json` in your project root and add the Blueprint MCP configuration.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "daisyui-blueprint": {
      "type": "local",
      "command": ["npx", "-y", "daisyui-blueprint@latest"],
      "enabled": true,
      "environment": {
        "LICENSE": "YOUR_LICENSE_KEY",
        "EMAIL": "YOUR_EMAIL",
        "FIGMA": "YOUR_FIGMA_API_KEY (optional)"
      }
    }
  }
}
```

After configuring the server, tell the AI model to use Blueprint MCP.

<a href="/blueprint/figma/" class="btn btn-sm rounded-full not-prose">Next: Setup the Figma API</a>
