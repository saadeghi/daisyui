---
title: Cline setup for duskmoonUI
desc: Setup Cline VSCode extension to correctly generate duskmoonUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <img src="https://img.daisyui.com/images/logos/cline.webp" alt="Cline VSCode extension" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Cline VSCode extension

[duskmoonui.com/llms.txt](https://duskmoonui.com/llms.txt) file is a compact, text version of duskmoonUI docs to help AI generate accurate duskmoonUI code based on your prompt.
Here's how to use duskmoonUI llms.txt in Cline:

### Quick use

In chat window type this before your prompt and Cline will use duskmoonUI's llms.txt file to generate code.

```md:prompt
https://duskmoonui.com/llms.txt
```

### Project-level permanent setup

You can setup duskmoonUI's llms.txt file to your workspace so Cline can use it by default.

Run this command to save the llms.txt file to `.clinerules/duskmoonui.md`

```sh:Terminal
curl -L https://duskmoonui.com/llms.txt --create-dirs -o .clinerules/duskmoonui.md
```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Cline will communicate with them to get more accurate results.  
You can use [Context7](https://context7.com/) or [duskmoonUI GitMCP](https://gitmcp.io/duskmoon-dev/duskmoon-ui) as MCP server in Cline.

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Context7" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup Context7 MCP server

1. Install `Context7` from Cline MCP marketplace

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

Update your Cline MCP settings file at `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`:

```diff:cline_mcp_settings.json
{
  "mcpServers": {
+   "duskmoonui Docs": {
+     "url": "https://gitmcp.io/duskmoon-dev/duskmoon-ui",
+     "disabled": false,
+     "autoApprove": []
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
