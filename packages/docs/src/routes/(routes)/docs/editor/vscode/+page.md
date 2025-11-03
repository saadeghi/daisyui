---
title: VSCode setup for daisyUI
desc: Setup VSCode to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

> To setup Tailwind CSS syntax support and IntelliSense, see [Tailwind CSS docs](https://tailwindcss.com/docs/editor-setup).

## <img src="https://img.daisyui.com/images/logos/vscode.webp" alt="VSCode" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> VSCode and Copilot LLM setup

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
Here's how to use daisyUI llms.txt in VSCode:

### Quick use

In chat window type this and VSCode will use daisyUI's llms.txt file to generate code.

```md:prompt
#fetch https://daisyui.com/llms.txt
```

### Project-level permanent setup

You can setup daisyUI's llms.txt file to your workspace so Copilot can use it by default. ([Read more at VSCode docs](https://code.visualstudio.com/docs/copilot/customization/overview))

Run this command to save the llms.txt file to `.github/instructions/daisyui.instructions.md`

```sh:Terminal
curl -L https://daisyui.com/llms.txt --create-dirs -o .github/instructions/daisyui.instructions.md
```

### MCP server

MCP is a an API to communicate with AI models. You can add MCP servers and Copilot will communicate with them to get more accurate results.  
You can use [Context7](https://context7.com/) or [daisyUI GitMCP](https://gitmcp.io/saadeghi/daisyui) as MCP server in VSCode.

<div class="tabs tabs-lift max-sm:tabs-sm">
  <input type="radio" name="mcp_options" class="tab" aria-label="Blueprint" checked />
  <div class="tab-content bg-base-100 border-base-300 px-12 py-3">

#### daisyUI Blueprint

Blueprint is the official MCP server for daisyUI. [Read more about Blueprint](/blueprint/).

1. Get a [Blueprint License](/blueprint/checkout/)
2. In VS Code press <kbd class="kbd kbd-sm">⌘ CMD</kbd> + <kbd class="kbd kbd-sm">⇧ Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> ( Or <kbd class="kbd kbd-sm">Ctrl</kbd> + <kbd class="kbd kbd-sm">Shift</kbd> + <kbd class="kbd kbd-sm">P</kbd> )
3. Search for `MCP: Open User Configuration`
4. Add this and set your `license key` + `email address` in it
  Figma API Key is optional - Only needed for Figma-to-code conversion

```diff:mcp.json
{
  "servers": {
+   "daisyui-blueprint": {
+     "type": "stdio",
+     "command": "npx",
+     "args": ["-y", "daisyui-blueprint@latest"],
+     "env": {
+       "LICENSE": "YOUR BLUEPRINT LICENSE KEY",
+       "EMAIL": "YOUR EMAIL ADDRESS",
+       "FIGMA": "YOUR FIGMA API KEY (optional)"
+     }
+   }
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

#### Option 1. Setup Context7 MCP server for VSCode

Click this button to install Context7 MCP server in VSCode:

<a href="vscode:mcp/install?%7B%22name%22%3A%22context7%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40upstash%2Fcontext7-mcp%40latest%22%5D%7D" class="btn">
  <img src="https://img.daisyui.com/images/logos/vscode.webp" alt="VSCode" width="24" height="24" class="inline-block me-2">
  Install Context7 MCP
</a>

#### Option 2. Setup Context7 MCP server for current workspace only

1.  Create a `.vscode/mcp.json` file in your project root if it doesn't exist.
2.  Add Context7 MCP server:

```diff:.vscode/mcp.json
{
  "servers": {
+   "context7": {
+     "type": "stdio",
+     "command": "npx",
+     "args": [
+       "-y",
+       "@upstash/context7-mcp@latest"
+     ]
+   }
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

#### Option 1. Setup daisyUI GitMCP server for VSCode

Click this button to install GitMCP server in VSCode:

<a href="vscode:mcp/install?%7B%22name%22%3A%22daisyUI%22%2C%22type%22%3A%22sse%22%2C%22url%22%3A%22https%3A%2F%2Fgitmcp.io%2Fsaadeghi%2Fdaisyui%22%7D" class="btn">
  <img src="https://img.daisyui.com/images/logos/vscode.webp" alt="VSCode" width="24" height="24" class="inline-block me-2">
  Install daisyUI GitMCP
</a>

#### Option 2. Setup daisyUI GitMCP server for current workspace only

1.  Create a `.vscode/mcp.json` file in your project root if it doesn't exist.
2.  Add daisyUI GitMCP server:

```diff:.vscode/mcp.json
{
  "servers": {
+   "daisyUI": {
+     "type": "sse",
+     "url": "https://gitmcp.io/saadeghi/daisyui"
+   }
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
