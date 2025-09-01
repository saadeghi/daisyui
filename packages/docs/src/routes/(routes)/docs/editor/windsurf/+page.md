---
title: Windsurf setup for duskmoonUI
desc: Setup Windsurf editor to correctly generate duskmoonUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> To setup Tailwind CSS syntax support and IntelliSense, see [Tailwind CSS docs](https://tailwindcss.com/docs/editor-setup).

## <img src="https://img.daisyui.com/images/logos/windsurf.webp" alt="Windsurf" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Windsurf LLM setup

[duskmoonui.com/llms.txt](https://duskmoonui.com/llms.txt) file is a compact, text version of duskmoonUI docs to help AI generate accurate duskmoonUI code based on your prompt.
Here's how to use duskmoonUI llms.txt in Windsurf:

### Quick use

- In chat window type this and write your prompt

```md:prompt
@web https://duskmoonui.com/llms.txt
```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Windsurf will communicate with them to get more accurate results.  
You can use [Context7](https://context7.com/) or [duskmoonUI GitMCP](https://gitmcp.io/duskmoon-dev/duskmoon-ui) as MCP server in Windsurf.

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Context7" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup Context7 MCP server

1. Press <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd> (or <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd> on Windows)
2. Type `Windsurf: MCP Configuration Panel`
3. Click `Add custom server +`
4. Add this:

```diff:~/.codeium/windsurf/mcp_config.json
{
  "mcpServers": {
+   "context7": {
+     "command": "npx",
+     "args": ["-y", "@upstash/context7-mcp@latest"]
+   }
  }
}
```

#### Usage

Now you can ask AI anything about duskmoonUI, and write `use context7` at the end of your prompt.
For example:

```md:prompt
give me a light duskmoonUI 5 theme with tropical color palette. use context7
```

  </div>

  <input type="radio" name="mcp_options" class="tab" aria-label="GitMCP" />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup duskmoonUI GitMCP server

1. Press <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd> (or <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd> on Windows)
2. Type `Windsurf: MCP Configuration Panel`
3. Click `Add custom server +`
4. Add this:

```diff:~/.codeium/windsurf/mcp_config.json
{
  "mcpServers": {
+   "duskmoonui Docs": {
+     "serverUrl": "https://gitmcp.io/duskmoon-dev/duskmoon-ui"
+   }
  }
}
```

#### Usage

Now you can ask AI anything about duskmoonUI.

```md:prompt
give me a light duskmoonUI 5 theme with tropical color palette
```

</div>
</div>
