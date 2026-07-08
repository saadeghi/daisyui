---
title: Install Blueprint MCP for OpenClaw
desc: Install daisyUI Blueprint MCP server for OpenClaw.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>



### Step 1: License key

Get a [Blueprint license key](/blueprint/checkout/).

### Step 2: Configure MCP settings

Run this command to add the Blueprint MCP server.

```sh
openclaw mcp set daisyui-blueprint \
  '{"command":"npx","args":["-y","daisyui-blueprint@latest"],"env":{"LICENSE":"YOUR_LICENSE_KEY","EMAIL":"YOUR_EMAIL","FIGMA":"YOUR_FIGMA_API_KEY"}}'
```

After configuring the server, tell the AI model to use Blueprint MCP.

<a href="/blueprint/figma/" class="btn btn-sm rounded-full not-prose">Next: Setup the Figma API</a>
