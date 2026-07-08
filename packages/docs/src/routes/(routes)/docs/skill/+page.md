---
title: Add daisyUI skill to your agent
desc: Setup your coding agent to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"

  export let data
</script>

[daisyUI skill](https://daisyui.com/SKILL.md) is a compact, markdown version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
You can easily add daisyUI skill to your project and your agent will be able to use it automatically when you ask for daisyUI code.

## Install daisyUI skill

Choose your coding agent:

<div class="not-prose grid grid-cols-2 md:grid-cols-3! py-6 *:-ms-px *:-mt-px">
  {#each data.skillEditors as editor}
    <a href="/docs/skill/{editor.slug}/" class="bg-base-100 relative overflow-hidden group flex items-center gap-4 flex-col px-4 py-8 border-base-content/5 border-[length:var(--border)] hover:shadow-md hover:-translate-y-1 focus:shadow-sm focus:-translate-y-0.5 transition-all">
      <div class="grid *:[grid-area:1/1] [&_svg]:size-16 [&_img]:size-16">
        <div class="blur-lg scale-400 saturate-200 group-hover:[transform:scaleY(.4)] [transform:scaleY(.3)] transition-all translate-y-26 duration-300 opacity-5 group-hover:opacity-30">
          <img src="https://img.daisyui.com/images/logos/{editor.icon}.svg" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
        <div class="size-full absolute inset-0" style="background: radial-gradient(circle, var(--color-base-100) 25%, transparent 26%),radial-gradient(circle at bottom left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at bottom right, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top right, var(--color-base-100) 12%, transparent 13%); background-size: 0.25rem 0.25rem;"></div>
        <div class="z-2">
          <img src="https://img.daisyui.com/images/logos/{editor.icon}.svg" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
        <div class="z-1 group-hover:opacity-0 brightness-125 group-hover:scale-110 group-hover:duration-800 duration-0 transition-all">
          <img src="https://img.daisyui.com/images/logos/{editor.icon}.svg" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
      </div>
      <div class="text-xs z-3 sm:text-sm font-medium transition-colors group-hover:text-base-content text-base-content/60 [text-wrap:balance] text-center">{editor.name}</div>
    </a>
  {/each}
</div>


### Other agents

Run this command

```md:prompt
npx skills add saadeghi/daisyui
```

### Usage

Now in `Agent Mode` you can tell AI to use daisyUI skill. For example:

```md:prompt
Make a login form. use daisyUI skill
```

### Use an MCP server to save tokens and get faster results
We recommend using an [MCP server](/docs/mcp/) for daisyUI.  
MCP servers are more efficient and faster than skills, they provide context on demand, instead of a static skill file. An MCP server will save you LLM tokens and will generate the code faster.

<a href="/docs/mcp/" class="btn"><Translate text="See daisyUI MCP setup guides" /></a>
