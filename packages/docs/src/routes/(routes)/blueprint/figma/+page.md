---
title: Setup Figma API for Blueprint MCP
desc: Generate daisyUI code from a Figma design file
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>


<div role="alert" class="alert alert-soft not-prose my-6 text-xs">
  <span class="rounded-field bg-base-content/10 text-base-content border-base-content/10 inline-block shrink-0 border">
    <svg class="m-1.5 size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
        <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"></path>
        <path d="m16 2 6 6"></path>
        <path d="M12 16H4"></path>
      </g>
    </svg>
  </span>
  <p class="max-w-md">This is an experimental feature. If results are not accurate, try a smaller section of the design or simplify the design.</p>
</div>

### Step 1: Get a Figma Access Token

<Translate text="In Figma, go to Settings > Security > Personal Access Tokens > Generate new token." />

Required permissions:

- <span class="badge badge-xs font-mono">file_content:read</span>
- <span class="badge badge-xs font-mono">file_metadata:read</span>
- <span class="badge badge-xs font-mono">library_assets:read</span>
- <span class="badge badge-xs font-mono">library_content:read</span>
- <span class="badge badge-xs font-mono">team_library_content:read</span>
- <span class="badge badge-xs font-mono">file_dev_resources:read</span>

### Step 2: Add the token to Blueprint MCP

<Translate text="Set the Figma API token in the FIGMA environment variable for the Blueprint MCP server." />

```json
"daisyui-blueprint": {
  "type": "stdio",
  "command": "npx",
  "env": {
    "LICENSE": "YOUR LICENSE KEY",
    "EMAIL": "YOUR EMAIL",
    "FIGMA": "YOUR FIGMA API KEY"
  }
}
```

### Step 3: Copy a Figma selection link

<Translate text="In Figma, right click on a section and choose Copy/Paste as > Copy link to selection." />

### Step 4: Ask your editor to generate daisyUI code

In your editor, paste the link and ask the LLM to generate daisyUI code for that design.
