---
title: Add daisyUI agent plugin
desc: Install the daisyUI plugin for Codex, Cursor, or Claude Code so your agent can use the latest daisyUI skill.
---

<script>
  import Translate from "$components/Translate.svelte"
  const editors = [
    { name: "Codex", slug: "codex", icon: "codex.svg" },
    { name: "Cursor", slug: "cursor", icon: "cursor.svg" },
    { name: "Claude Code", slug: "claude-code", icon: "claude-code.svg" },
  ]
</script>


The daisyUI plugin gives your coding agent the latest daisyUI skill. Once installed, the agent can pull in daisyUI-specific instructions when you ask it to build UI with daisyUI.

If you already use [daisyUI Blueprint MCP server](/blueprint/), you don't need to install this plugin.

## Install daisyUI agent plugin

Choose your coding tool:

<div class="not-prose grid grid-cols-2 md:grid-cols-3! py-6 *:-ms-px *:-mt-px">
  {#each editors as editor}
    <a href="/docs/plugin/{editor.slug}/" class="bg-base-100 relative overflow-hidden group flex items-center gap-4 flex-col px-4 py-8 border-base-content/5 border-[length:var(--border)] hover:shadow-md hover:-translate-y-1 focus:shadow-sm focus:-translate-y-0.5 transition-all">
      <div class="grid *:[grid-area:1/1] [&_svg]:size-16 [&_img]:size-16">
        <div class="blur-lg scale-400 saturate-200 group-hover:[transform:scaleY(.4)] [transform:scaleY(.3)] transition-all translate-y-26 duration-300 opacity-5 group-hover:opacity-30">
          <img src="https://img.daisyui.com/images/logos/{editor.icon}" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
        <div class="size-full absolute inset-0" style="background: radial-gradient(circle, var(--color-base-100) 25%, transparent 26%),radial-gradient(circle at bottom left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at bottom right, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top right, var(--color-base-100) 12%, transparent 13%); background-size: 0.25rem 0.25rem;"></div>
        <div class="z-2">
          <img src="https://img.daisyui.com/images/logos/{editor.icon}" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
        <div class="z-1 group-hover:opacity-0 brightness-125 group-hover:scale-110 group-hover:duration-800 duration-0 transition-all">
          <img src="https://img.daisyui.com/images/logos/{editor.icon}" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
      </div>
      <div class="text-xs z-3 sm:text-sm font-medium transition-colors group-hover:text-base-content text-base-content/60 [text-wrap:balance] text-center">{editor.name}</div>
    </a>
  {/each}
</div>
