---
title: Install Blueprint MCP for Cursor
desc: Install daisyUI Blueprint MCP server for Cursor.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>



### Step 1: License key

Get a [Blueprint license key](/blueprint/checkout/).

### Step 2: Configure MCP settings

**Option 1: Automatic setup**

Click the button below to automatically install in Cursor.

<div class="bg-base-200 border-base-content/10 my-6 flex items-center justify-center rounded border py-8 not-prose">
  <a class="btn btn-neutral" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" href="https://cursor.com/en-US/install-mcp?name=daisyui-blueprint&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImRhaXN5dWktYmx1ZXByaW50QGxhdGVzdCJdLCJlbnYiOnsiTElDRU5TRSI6IiIsIkVNQUlMIjoiIiwiRklHTUEiOiIifX0=">
    <img class="me-2 size-4 max-sm:hidden" src="https://img.daisyui.com/images/logos/cursor.svg" alt="Cursor">
    Install MCP Server
  </a>
</div>

On the MCP settings page, set:

- `LICENSE`: Your Blueprint license key
- `EMAIL`: Your email address
- `FIGMA`: Your Figma API key (optional)

**Option 2: Manual setup**

In Cursor press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd>, or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd>, search for `MCP: Open MCP Settings`, and add this configuration to `mcp.json`:

```json:mcp.json
{
  "mcpServers": {
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

After configuring the server, tell the AI model to use Blueprint MCP.

<a href="/blueprint/figma/" class="btn btn-sm rounded-full not-prose">Next: Setup the Figma API</a>
