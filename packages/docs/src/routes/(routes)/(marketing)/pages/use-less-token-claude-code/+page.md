---
title: Use less token with Claude Code
desc: Use daisyUI skill or Blueprint MCP with Claude Code to reduce repeated UI instructions in prompts.
layout: contentLanding
keywords: use less token claude code, claude code token ui, daisyui mcp claude code
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

To use less token with Claude Code, move repeated UI rules out of the prompt. The prompt should describe the screen. A skill or [MCP server](/pages/ui-design-mcp-server-for-claude-code/) should provide the reusable daisyUI context.

## Where tokens go

UI prompts often repeat the same guidance: use consistent buttons, support themes, keep forms aligned, avoid hardcoded colors, and avoid AI slop. [Claude](/pages/ui-design-skill-for-claude-code/) needs those rules, but not as pasted text every time.

## Free path: skill

```sh:Terminal
npx skills add saadeghi/daisyui --agent claude-code --yes
```

Prompt: "Build a password reset page with daisyUI skill. Include validation and a success state."

## On-demand path: MCP

```sh:Terminal
claude mcp add daisyui-blueprint --env LICENSE=YOUR_LICENSE_KEY --env EMAIL=YOUR_EMAIL --env FIGMA=YOUR_FIGMA_API_KEY -- npx -y daisyui-blueprint@latest
```

Prompt: "Create a billing dashboard with daisyUI. use Blueprint MCP"

Use the skill for static guidance. Use MCP for larger builds where targeted context saves more prompt space. See [skill](/docs/skill/claude-code/) and [MCP](/docs/mcp/claudecode/) guides.

## A practical prompt pattern

Keep the task prompt short after setup. Name the screen, list the states, and name the component layer. For example: "Build a failed-payment recovery screen with daisyUI. Include invoice summary, retry payment action, warning alert, and support link."

That prompt works because the repeated design rules live elsewhere. The skill or MCP server carries the daisyUI knowledge, while the prompt carries the product intent. This is the cleanest way to reduce token waste without lowering output quality.
