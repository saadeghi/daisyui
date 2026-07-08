---
title: Install Blueprint MCP for Codex
desc: Install daisyUI Blueprint MCP server for Codex.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>



### Step 1: License key

Get a [Blueprint license key](/blueprint/checkout/).

### Step 2: Install Codex CLI

Install Codex CLI if you haven't already.

```sh
npm install -g @codex/cli
```

### Step 3: Configure MCP settings

Run this command to add the Blueprint MCP server.

```sh
codex mcp add daisyui-blueprint \
  --env LICENSE=YOUR_LICENSE_KEY \
  --env EMAIL=YOUR_EMAIL \
  --env FIGMA=YOUR_FIGMA_API_KEY \
  -- npx -y daisyui-blueprint@latest
```

After configuring the server, tell the AI model to use Blueprint MCP.

<a href="/blueprint/figma/" class="btn btn-sm rounded-full not-prose">Next: Setup the Figma API</a>
