---
title: Zed setup for daisyUI
desc: Setup Zed editor to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> To setup Tailwind CSS syntax support and IntelliSense, see [Tailwind CSS docs](https://tailwindcss.com/docs/editor-setup).

## <img src="https://img.daisyui.com/images/logos/zed.webp" alt="Zed" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Zed LLM setup

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
Here's how to use daisyUI llms.txt in Zed:

### Quick use

In Thread chat type this before your prompt
```md:prompt
@fetch https://daisyui.com/llms.txt
```

### MCP server

MCP is an API to communicate with AI models. You can add MCP servers to your code editor and Zed will communicate with them to get more accurate results.
You can use [Context7](https://context7.com/) or [daisyUI GitMCP](https://gitmcp.io/saadeghi/daisyui) as MCP server in Zed.

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Blueprint" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### daisyUI Blueprint

Blueprint is the official MCP server for daisyUI. [Read more about Blueprint](/blueprint/).

1. Get a [Blueprint License](/blueprint/checkout/)
2. In Zed press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> ( Or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> )
3. Choose `agent: add context server`
4. Add this and set your `license key` + `email address` in it
  Figma API Key is optional - Only needed for Figma-to-code conversion

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

#### Usage

Now you can ask AI anything about daisyUI, and write `use Blueprint MCP` at the end of your prompt.  
For example:

```md:prompt
give me a light daisyUI 5 theme with tropical color palette. use Blueprint MCP
```


  </div>
  <input type="radio" name="mcp_options" class="tab" aria-label="Context7" />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup Context7 MCP server

1. In Zed press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> ( Or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> )
2. Choose `agent: add context server`
3. Add this config:

```json
{
 "context7": {
   "command": "npx",
   "args": ["-y", "@upstash/context7-mcp@latest"]
 }
}
```

#### Usage

Now in `Agent Mode` you can ask AI anything about daisyUI. write `use context7` at the end of your prompt.  
For example:

```md:prompt
give me a light daisyUI 5 theme with tropical color palette. use context7
```

  </div>

  <input type="radio" name="mcp_options" class="tab" aria-label="GitMCP" />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### Setup daisyUI GitMCP server

1. In Zed press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> ( Or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> )
2. Choose `agent: add context server`
3. Add this config:

```json
{
 "daisyui-github": {
   "command": "npx",
   "args": ["-y", "mcp-remote", "https://gitmcp.io/saadeghi/daisyui"]
 }
}
```

#### Usage

Now in `Agent Mode` you can ask AI anything about daisyUI.

```md:prompt
give me a light daisyUI 5 theme with tropical color palette
```

</div>
</div>
