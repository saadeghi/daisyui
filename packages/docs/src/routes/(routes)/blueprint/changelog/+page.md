---
title: Blueprint changelog
desc: New and updated tools, prompts, and resources in daisyUI Blueprint.
layout: docs
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## v1.6

_August 2026_

- Update MCP SDK
- Fix: Claude Desktop JSON Schema issue

## v1.5

_July 2026_

Blueprint now helps your LLM generate the whole UI, not only individual components.

### MCP tools

- **New: daisyUI Setup Expert.** Knows how to set up and configure daisyUI, themes, fonts, and icons.
- **New: daisyUI Rules Enforcer.** Enforces the rules and principles.
- **New: daisyUI Creative Director.** Provides a design trends catalog, UX principles, creative decisions, and taste.
- **New: daisyUI Page Architect.** Knows how to structure pages and layouts, what content they need, and which components to use.
- **Updated: daisyUI Component Syntax Expert.** Provides exact code syntax, daisyUI snippets, and examples.
- **New: daisyUI Quality Inspector.** Checks design and code quality, then requires the LLM to fix any issues.
- **Updated: Figma to daisyUI.** Improved Figma conversion.

### Prompts

The Tailwind CSS, Bootstrap, and Screenshot to daisyUI prompts, plus Image to daisyUI theme, are now available as MCP tools. MCP clients that don't support MCP prompts can use them too.

### MCP resources

- **Updated:** Snippet
- **New:** Setup
- **New:** Rule
- **New:** Page
