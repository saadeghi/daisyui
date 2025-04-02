---
title: Install daisyUI as a Tailwind plugin
desc: How to install daisyUI as a Tailwind CSS plugin?
---

<script>
  import Translate from "$components/Translate.svelte"
  import Install from "$components/homepage/Install.svelte"
  export let data
</script>

<Translate text="You need <a target=_blank' href='https://nodejs.org/en/download/'>Node.js</a> and <a target='_blank' href='https://tailwindcss.com/docs/installation/'>Tailwind CSS</a> installed." />

<div class="not-prose">
  <Install/>
</div>

## Framework install tutorials

<Translate text="See example setup of daisyUI and Tailwind CSS on different frameworks and build tools."/>

<div class="not-prose grid grid-cols-2 md:grid-cols-3 py-6 *:-ms-px *:-mt-px">

{#each data.frameworks as framework}
  <a href="{framework.path}" class="bg-base-100 relative overflow-hidden group flex items-center gap-4 flex-col px-4 py-8 border border-base-content/5 hover:shadow-md hover:-translate-y-1 focus:shadow-sm focus:-translate-y-0.5 transition-all">
    <div class="grid *:[grid-area:1/1] [&_svg]:size-16">
      <div class="blur-lg scale-400 saturate-200 group-hover:[transform:scaleY(.4)] [transform:scaleY(.3)] transition-all translate-y-26 duration-300 opacity-5 group-hover:opacity-30">{@html framework.logo}</div>
      <div class="size-full absolute inset-0" style="background: radial-gradient(circle, var(--color-base-100) 25%, transparent 26%),radial-gradient(circle at bottom left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at bottom right, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top left, var(--color-base-100) 12%, transparent 13%),radial-gradient(circle at top right, var(--color-base-100) 12%, transparent 13%); background-size: 0.25rem 0.25rem;"></div>
      <div class="z-2">{@html framework.logo}</div>
      <div class="z-1 group-hover:opacity-0 brightness-125 group-hover:scale-110 group-hover:duration-800 duration-0 transition-all">{@html framework.logo}</div>
    </div>
    <div class="text-xs z-3 sm:text-sm font-medium transition-colors group-hover:text-base-content text-base-content/60 [text-wrap:balance] text-center">{framework.name}</div>
  </a>
{/each}

</div>
