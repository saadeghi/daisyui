---
title: Claude Code setup for duskmoonUI
desc: Setup Claude Code to correctly generate duskmoonUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <img src="https://img.daisyui.com/images/logos/claude.webp" alt="Claude" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Claude Code LLM setup

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Claude will communicate with them to get more accurate results.  
You can use [Context7](https://context7.com/) or [duskmoonUI GitMCP](https://gitmcp.io/duskmoon-dev/duskmoon-ui) as MCP server in Claude Code.

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Context7" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup Context7 MCP server

Run this command to add Context7 MCP server:

Using HTTP transport

```sh:Terminal
claude mcp add --transport http context7 https://mcp.context7.com/mcp
```

Or using SSE transport (it's faster)

```sh:Terminal
claude mcp add --transport sse context7 https://mcp.context7.com/sse
```

Or Claude Code Local Server Connection (it's local)

```sh:Terminal
claude mcp add context7 -- npx -y @upstash/context7-mcp
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

Run this command to add duskmoonUI GitMCP server:

Using HTTP transport

```sh:Terminal
claude mcp add --transport http duskmoonui https://gitmcp.io/duskmoon-dev/duskmoon-ui
```

Or using SSE transport (it's faster)

```sh:Terminal
claude mcp add --transport sse duskmoonui https://gitmcp.io/duskmoon-dev/duskmoon-ui
```

#### Usage

Now you can ask AI anything about duskmoonUI.

```md:prompt
give me a light duskmoonUI 5 theme with tropical color palette
```

</div>
</div>
