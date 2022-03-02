---
title: Alert
desc: Alert informs users about important events.
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
  { type: 'component', class: 'alert', desc: 'Container element' },
  { type: 'responsive', class: 'alert-info', desc: 'Alert with `info` color' },
  { type: 'responsive', class: 'alert-info', desc: 'Alert with `info` color' },
  { type: 'responsive', class: 'alert-success', desc: 'Alert with `success` color' },
  { type: 'responsive', class: 'alert-warning', desc: 'Alert with `warning` color' },
  { type: 'responsive', class: 'alert-error', desc: 'Alert with `error` color' },
]}"
/>

<Component title="Alert">
<div class="alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>12 unread messages. Tap to see.</span>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>12 unread messages. Tap to see.</span>
  </div>
</div>`
}</pre>
</Component>

<Component title="Info color">
<div class="alert alert-info">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>New software update available.</span>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$alert $$alert-info shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>New software update available.</span>
  </div>
</div>`
}</pre>
</Component>

<Component title="Success color">
<div class="alert alert-success">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Your purchase has been confirmed!</span>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$alert $$alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Your purchase has been confirmed!</span>
  </div>
</div>`
}</pre>
</Component>

<Component title="Warning color">
<div class="alert alert-warning">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>Warning: Invalid email address!</span>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$alert $$alert-warning shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>Warning: Invalid email address!</span>
  </div>
</div>`
}</pre>
</Component>

<Component title="Error color">
<div class="alert alert-error">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Error! Task failed successfully.</span>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$alert $$alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Error! Task failed successfully.</span>
  </div>
</div>`
}</pre>
</Component>

<Component title="Alert with buttons">
<div class="alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>we use cookies for no reason.</span>
  </div>
  <div class="flex-none">
    <button class="btn btn-sm btn-ghost">Deny</button>
    <button class="btn btn-sm btn-primary">Accept</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>we use cookies for no reason.</span>
  </div>
  <div class="flex-none">
    <button class="btn btn-sm btn-ghost">Deny</button>
    <button class="btn btn-sm btn-primary">Accept</button>
  </div>
</div>`
}</pre>
</Component>

<Component title="Alert with title and description">
<div class="alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div>
      <h3 class="font-bold">New message!</h3>
      <div class="text-xs">You have 1 unread message</div>
    </div>
  </div>
  <div class="flex-none">
    <button class="btn btn-sm">See</button>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$alert shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div>
      <h3 class="font-bold">New message!</h3>
      <div class="text-xs">You have 1 unread message</div>
    </div>
  </div>
  <div class="flex-none">
    <button class="btn btn-sm">See</button>
  </div>
</div>`
}</pre>
</Component>
