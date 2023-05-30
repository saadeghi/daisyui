---
title: Avatar
desc: Avatars are used to show a thumbnail representation of an individual or business in the interface.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<ClassTable
data="{[
  { type:'component', class: 'avatar', desc: 'Container element' },
  { type:'component', class: 'avatar-group', desc: 'Container for grouping multiple avatars' },
  { type:'modifier', class: 'online', desc: 'shows a green dot as online indicator' },
  { type:'modifier', class: 'offline', desc: 'shows a gray dot as offline indicator' },
  { type:'modifier', class: 'placeholder', desc: 'to show some letters as avatar placeholder' },
]}"
/>

<Component title="Avatar">
<div class="avatar">
  <div class="w-24 rounded bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar">
  <div class="w-24 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar in custom sizes">
<div class="avatar">
  <div class="w-24 rounded bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="avatar">
  <div class="w-16 rounded bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="avatar">
  <div class="w-12 rounded bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="avatar">
  <div class="w-8 rounded bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar">
  <div class="w-32 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-20 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-16 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-8 rounded">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar rounded">
<div class="avatar">
  <div class="w-24 rounded-xl bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="avatar">
  <div class="w-24 rounded-full bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar">
  <div class="w-24 rounded-xl">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-24 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar with mask">
<div class="avatar">
  <div class="w-24 mask mask-squircle bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="avatar">
  <div class="w-24 mask mask-hexagon bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="avatar">
  <div class="w-24 mask mask-triangle bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar">
  <div class="w-24 $$mask $$mask-squircle">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-24 $$mask $$mask-hexagon">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar">
  <div class="w-24 $$mask $$mask-triangle">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar group">
<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12 bg-base-300">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12 bg-base-300">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12 bg-base-300">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12 bg-base-300">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar-group -space-x-6">
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar group with counter">
<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12  bg-base-300">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12  bg-base-300">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12  bg-base-300">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
    </div>
  </div>
  <div class="avatar placeholder">
    <div class="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar-group -space-x-6">
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar">
    <div class="w-12">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="$$avatar $$placeholder">
    <div class="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar with ring">
<div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar with presence indicator">
<div class="avatar online">
  <div class="w-24 rounded-full bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div class="avatar offline">
  <div class="w-24 rounded-full bg-base-300">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar $$online">
  <div class="w-24 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div class="$$avatar $$offline">
  <div class="w-24 rounded-full">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>`
}</pre>
</Component>

<Component title="Avatar placeholder">
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span class="text-3xl">K</span>
  </div>
</div> 
<div class="avatar online placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
    <span class="text-xl">JO</span>
  </div>
</div> 
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
    <span>MX</span>
  </div>
</div> 
<div class="avatar placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span class="text-xs">AA</span>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$avatar $$placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span class="text-3xl">K</span>
  </div>
</div> 
<div class="$$avatar $$online $$placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
    <span class="text-xl">JO</span>
  </div>
</div> 
<div class="$$avatar $$placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
    <span>MX</span>
  </div>
</div> 
<div class="$$avatar $$placeholder">
  <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
    <span class="text-xs">AA</span>
  </div>
</div>`
}</pre>
</Component>
