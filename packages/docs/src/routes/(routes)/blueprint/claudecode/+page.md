---
title: Install Blueprint MCP for Claude Code
desc: Install daisyUI Blueprint MCP server for Claude Code.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>



### Step 1: License key

Get a [Blueprint license key](/blueprint/checkout/).

### Step 2: Configure MCP settings

Run this command to add the Blueprint MCP server. Figma API Key is optional and only needed for Figma-to-code conversion.

```sh
claude mcp add daisyui-blueprint \
  --env LICENSE=YOUR_LICENSE_KEY \
  --env EMAIL=YOUR_EMAIL \
  --env FIGMA=YOUR_FIGMA_API_KEY \
  -- npx -y daisyui-blueprint@latest
```

Read [Claude Code docs](https://docs.claude.com/en/docs/claude-code/mcp) for more info about using MCP.

After configuring the server, tell the AI model to use Blueprint MCP.

<a href="/blueprint/figma/" class="btn btn-sm rounded-full not-prose">Next: Setup the Figma API</a>
