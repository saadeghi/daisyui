---
title: Code editors and LLM setup
desc: How to use code editors, LLMs (large language models) and MCP (Model Context Protocol) servers to generate Tailwind CSS and daisyUI code
---

<script>
  import Translate from "$components/Translate.svelte"
  
const editors = [
  { name: "VSCode", slug: "vscode" },
  { name: "Cursor", slug: "cursor" },
  { name: "Zed", slug: "zed" },
  { name: "Windsurf", slug: "windsurf" },
  { name: "Claude Desktop", slug: "claude" },
  { name: "ChatGPT", slug: "chatgpt" },
  { name: "Gemini", slug: "gemini" },
  { name: "Grok", slug: "grok" },
  { name: "Cline – VSCode", slug: "cline" },
]
</script>

## Pick your tool

Let's setup your code editors and LLMs to correctly generate daisyUI code based on your prompt.

<div class="not-prose grid grid-cols-2 md:grid-cols-3 py-6 *:-ms-px *:-mt-px">
  {#each editors as editor}
    <a href="/docs/editor/{editor.slug}/" class="bg-base-100 relative overflow-hidden group flex items-center gap-4 flex-col px-4 py-8 border border-base-content/5 hover:shadow-md hover:-translate-y-1 focus:shadow-sm focus:-translate-y-0.5 transition-all">
      <div class="grid *:[grid-area:1/1] [&_svg]:size-16 [&_img]:size-16">
        <div class="blur-lg scale-400 saturate-200 group-hover:[transform:scaleY(.4)] [transform:scaleY(.3)] transition-all translate-y-26 duration-300 opacity-5 group-hover:opacity-30">
          <img src="https://img.daisyui.com/images/logos/{editor.slug}.webp" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
        <div class="size-full absolute inset-0" style="background: radial-gradient(circle, var(--color-base-100) 25%, transparent 26%),radial-gradient(circle at bottom left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at bottom right, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top right, var(--color-base-100) 12%, transparent 13%); background-size: 0.25rem 0.25rem;"></div>
        <div class="z-2">
          <img src="https://img.daisyui.com/images/logos/{editor.slug}.webp" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
        <div class="z-1 group-hover:opacity-0 brightness-125 group-hover:scale-110 group-hover:duration-800 duration-0 transition-all">
          <img src="https://img.daisyui.com/images/logos/{editor.slug}.webp" alt="{editor.name}" width="40" height="40" class="not-prose">
        </div>
      </div>
      <div class="text-xs z-3 sm:text-sm font-medium transition-colors group-hover:text-base-content text-base-content/60 [text-wrap:balance] text-center">{editor.name}</div>
    </a>
  {/each}
</div>
