---
title: "daisyUI Skill: Essential for all daisyUI projects"
desc: daisyUI Skill gives AI coding agents the right component, theme, and color rules so they can generate better Tailwind CSS and daisyUI code.
published: true
date: 2026-07-06
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/skills.png?1
tags:
  - Guides
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

AI coding agents are getting better at writing UI code, but they still have one big problem:

They don't always know the rules of your UI system.

They may know Tailwind CSS. They may even know daisyUI from training data. But that doesn't mean they know the current component list, the correct class names, the theme rules, or the small details that make the generated code actually fit a real project.

That's why we now have [daisyUI Skill](/skills/daisyui/).

## What is a skill?

A skill is a set of instructions and reference files for your coding agent. It tells the agent how to do a specific kind of work.

For daisyUI, that means the agent gets compact docs for:

- Components
- Component parts and modifiers
- Theme and color rules
- Installation
- Configuration
- Usage patterns

The important part is that this lives outside your prompt.

You don't need to paste a long explanation every time you want a button, card, modal, table, or theme-aware layout. You install the skill once, then ask your agent to use daisyUI.

## Why daisyUI needs this

daisyUI is simple to use:

```html
<button class="btn btn-primary">Save</button>
```

But simple does not mean there are no rules.

There are semantic colors like `primary`, `base-100`, `base-content`, `success`, `warning`, and `error`. These colors are theme-aware, so they change correctly when the theme changes.

There are component classes like `card`, `modal`, `alert`, `navbar`, `menu`, `table`, and `input`.

There are modifiers like `btn-outline`, `card-border`, `modal-open`, `menu-horizontal`, `input-error`, and many more.

And there are things an agent should avoid. For example, it should not randomly use `text-gray-800` on a page that must work with dark themes. It should not invent class names that don't exist. It should not use custom CSS for something daisyUI already provides.

Humans learn these patterns by reading docs and building projects.

Agents need the same context.

## What daisyUI Skill gives to agents

[daisyUI Skill](/skills/daisyui/) includes the official daisyUI instructions in markdown format.

It tells the agent when to use daisyUI, how to choose components, how to use semantic colors, and how to avoid common mistakes.

It also includes component docs. So when an agent needs to build a form, it can look at `input`, `select`, `textarea`, `fieldset`, `label`, `validator`, `button`, and related components instead of guessing from memory.

This matters because UI generation is not only about writing shorter code.

It's about writing code that belongs in the project.

For example, this is not great:

```html
<button class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Save changes
</button>
```

It may look fine in one theme, but now the agent made a fixed blue button. If the project changes theme, the button does not follow it.

This is better:

```html
<button class="btn btn-primary">Save changes</button>
```

Now the button uses the current daisyUI theme. It also gets the correct hover, active, focus, disabled, sizing, and accessibility-related styles from daisyUI.

Less code. Better result.

## Install it once

You can install daisyUI Skill with:

```sh:Terminal
npx skills add saadeghi/daisyui
```
It works with any coding agent (Codex, Claude, Cursor, etc.)

After that, prompt your agent like this:

```md:prompt
Make a pricing card with daisyUI. Use daisyUI skill.
```

Or be more specific:

```md:prompt
Create a settings page with daisyUI. 
Use tabs for sections, cards for settings groups, 
alerts for warnings, and btn-primary for the save action. 
Use daisyUI skill.
```

The second prompt is better because it gives the agent a clear UI shape. The skill gives it the implementation rules.

## Skills are good for repeat work

Prompts are great for one task.

Skills are better for things you do again and again.

If you build with daisyUI often, you probably don't want to keep explaining:

- Use semantic colors
- Prefer daisyUI component classes
- Avoid unnecessary custom CSS
- Check component docs before choosing class names
- Keep generated markup readable

The skill carries that instruction every time. It reduces the chance of random class names and makes follow-up edits easier because the generated code uses known daisyUI patterns.

This is especially useful when you ask an agent to modify an existing page. The agent can inspect the code, see `btn`, `card`, `alert`, `menu`, or `table`, and continue with the same component language instead of drifting into one-off Tailwind styles.

## Skill or MCP?

Skills are not the only way to give daisyUI context to AI.

We also have [Blueprint MCP](/blueprint/), the official daisyUI MCP server.

Should I use a skill or MCP?

- Use [daisyUI Skill](/skills/daisyui/) when you want a free option to provide resources to your LLM.
- Use [Blueprint MCP](/blueprint/) when you want an efficient workflow, to provide context ONLY when needed, with less guesswork, less token usage, and faster response times.

Skills are simple to install and easy to understand. MCP is strict, dynamic and it's more efficient with LLM tokens because it gives context only when needed.

Both solve the same core problem: agents generate better UI when they have the right daisyUI context.

## The goal is less AI slop

AI can generate a lot of UI code.

That's useful, but speed alone is not enough. Mediocre UI takes even time to review, clean up, and rewrite. You wouldn't want your UI to look like every other AI generated UI. You need a design system to take full control over the UI, make it consistent, and easy to maintain.

daisyUI Skill helps the agent stay inside the daisyUI system. It knows the component names. It knows the color rules. It knows that `btn btn-primary` is better than a pile of fixed blue utility classes for a primary action.

The result is code that is shorter, more theme-aware, and easier to maintain.

If you use AI agents for UI work, install the skill and try a few prompts:

```sh:Terminal
npx skills add saadeghi/daisyui
```

Then ask your agent to build something real:

```md:prompt
Build a responsive dashboard header with navbar, menu, 
theme controller, and user dropdown. Use daisyUI skill.
```

That's where skills become useful. Not in a demo, but in the everyday work of generating, reviewing, and improving UI.

## More daisyUI skills

The free [daisyUI Skill](/skills/daisyui/) is the general-purpose skill for daisyUI components and themes.

There are also specialized skills:

- [daisyUI Charts Skill](/skills/daisyui-charts/) includes chart examples made with ApexCharts and daisyUI, with skill files for generating charts and graphs in the daisyUI style.
- [daisyUI Dashboard Skill](/skills/daisyui-dashboard/) includes dashboard design instructions and patterns based on Nexus Dashboard, for generating admin panels and dashboard layouts.

Start with the free daisyUI Skill. If your project needs lots of charts or dashboards, those specialized skills can save even more prompting and cleanup time.
