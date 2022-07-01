---
title: Chat bubble
desc: It's a awesome chat bubble!
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
  { type:'component', class: 'bubble', desc: 'Bubble' },
  { type:'modifier', class: 'bubble-primary', desc: 'Bubble with `secondary` background' },
  { type:'modifier', class: 'bubble-secondary', desc: 'Bubble with `secondary` background' },
  { type:'modifier', class: 'bubble-accent', desc: 'Bubble with `accent` background' },
  { type:'modifier', class: 'bubble-info', desc: 'Bubble with `info` background' },
  { type:'modifier', class: 'bubble-success', desc: 'Bubble with `success` background' },
  { type:'modifier', class: 'bubble-warning', desc: 'Bubble with `warning` background' },
  { type:'modifier', class: 'bubble-error', desc: 'Bubble with `error` background' },
  { type:'modifier', class: 'bubble-left', desc: 'Left side bubble' },
  { type:'modifier', class: 'bubble-right', desc: 'Right side bubble' },
  { type:'modifier', class: 'bubble-topbar-author', desc: 'Showing author name' },
  { type:'modifier', class: 'bubble-topbar-time', desc: 'Showing message time' },
  { type:'modifier', class: 'bubble-topbar-action', desc: 'Using for more actions' },
]}"
/>

<div class="alert alert-info text-sm">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    Using dir="ltr" or dir="rtl" is required.
  </div>
</div>

<Component title="Chat Bubble">
<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="bubble bubble-left">Thank you 😊<br/> See you soon 👋</div>
  <div class="bubble bubble-right">Thank you 😊<br/> See you soon 👋</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="$$bubble $$bubble-left">Thank you 😊<br/> See you soon 👋</div>
  <div class="$$bubble $$bubble-right">Thank you 😊<br/> See you soon 👋</div>
</div>`
}</pre>
</Component>

<Component title="Chat Bubble with brand colors">
<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="bubble bubble-left bubble-primary">Thank you 😊<br/> See you soon 👋</div>
  <div class="bubble bubble-right bubble-secondary">Thank you 😊<br/> see you soon 👋</div>
  <div class="bubble bubble-left bubble-accent">Thank you 😊<br/> See you soon 👋</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="$$bubble $$bubble-left $$bubble-primary">Thank you 😊<br/> See you soon 👋</div>
  <div class="$$bubble $$bubble-right $$bubble-secondary">Thank you 😊<br/> See you soon 👋</div>
  <div class="$$bubble $$bubble-left $$bubble-accent">Thank you 😊<br/> See you soon 👋</div>
</div>`
}</pre>
</Component>

<Component title="Chat Bubble with state colors">
<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="bubble bubble-left bubble-info">Thank you 😊<br/> See you soon 👋</div>
  <div class="bubble bubble-right bubble-success">Thank you 😊<br/> See you soon 👋</div>
  <div class="bubble bubble-left bubble-warning">Thank you 😊<br/> See you soon 👋</div>
  <div class="bubble bubble-right bubble-error">Thank you 😊<br/> See you soon 👋</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="$$bubble $$bubble-left $$bubble-info">Thank you 😊<br/> See you soon 👋</div>
  <div class="$$bubble $$bubble-right $$bubble-success">Thank you 😊<br/> See you soon 👋</div>
  <div class="$$bubble $$bubble-left $$bubble-warning">Thank you 😊<br/> See you soon 👋</div>
  <div class="$$bubble $$bubble-right $$bubble-error">Thank you 😊<br/> See you soon 👋</div>
</div>`
}</pre>
</Component>

<Component title="Chat Bubble with author">
<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="bubble bubble-left">
    <div class="bubble-topbar">
      <div class="bubble-topbar-author">Iman</div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
  <div class="bubble bubble-right">
    <div class="bubble-topbar">
      <div class="bubble-topbar-author">Amin</div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="$$bubble $$bubble-left">
    <div class="$$bubble-topbar">
      <div class="$$bubble-topbar-author">Iman</div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
  <div class="$$bubble $$bubble-right">
    <div class="$$bubble-topbar">
      <div class="$$bubble-topbar-author">Amin</div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
</div>`
}</pre>
</Component>

<Component title="Chat Bubble with time">
<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="bubble bubble-left">
    <div class="bubble-topbar">
      <div class="bubble-topbar-author">Iman</div>
      <div class="bubble-topbar-time">1 min</div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
  <div class="bubble bubble-right">
    <div class="bubble-topbar">
      <div class="bubble-topbar-author">Amin</div>
      <div class="bubble-topbar-time">30 sec</div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="$$bubble $$bubble-left">
    <div class="$$bubble-topbar">
      <div class="$$bubble-topbar-author">Iman</div>
      <div class="$$bubble-topbar-time">1 min</div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
  <div class="$$bubble $$bubble-right">
    <div class="$$bubble-topbar">
      <div class="$$bubble-topbar-author">Amin</div>
      <div class="$$bubble-topbar-time">30 sec</div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
</div>`
}</pre>
</Component>

<Component title="Chat Bubble with action">
<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="bubble bubble-left">
    <div class="bubble-topbar">
      <div class="bubble-topbar-author">Iman</div>
      <div class="bubble-topbar-time">1 min</div>
      <div class="bubble-topbar-action">
        <div class="dropdown">
          <label
            tabindex="0"
            class="btn btn-circle btn-ghost btn-xs text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-neutral"
          >
            <li><a>Reply</a></li>
            <li><a>Forward</a></li>
          </ul>
        </div>
      </div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
  <div class="bubble bubble-right">
    <div class="bubble-topbar">
      <div class="bubble-topbar-author">Amin</div>
      <div class="bubble-topbar-time">30 sec</div>
      <div class="bubble-topbar-action">
        <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="btn btn-circle btn-ghost btn-xs text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-neutral"
          >
            <li><a>Reply</a></li>
            <li><a>Forward</a></li>
          </ul>
        </div>
      </div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div dir="ltr" class="container mx-auto py-4 flex flex-col">
  <div class="$$bubble $$bubble-left">
    <div class="$$bubble-topbar">
      <div class="$$bubble-topbar-author">Iman</div>
      <div class="$$bubble-topbar-time">1 min</div>
      <div class="$$bubble-topbar-action">
        <div class="dropdown">
          <label
            tabindex="0"
            class="btn btn-circle btn-ghost btn-xs text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-neutral"
          >
            <li><a>Reply</a></li>
            <li><a>Forward</a></li>
          </ul>
        </div>
      </div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
  <div class="$$bubble $$bubble-right">
    <div class="$$bubble-topbar">
      <div class="$$bubble-topbar-author">Amin</div>
      <div class="$$bubble-topbar-time">30 sec</div>
      <div class="$$bubble-topbar-action">
        <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="btn btn-circle btn-ghost btn-xs text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 text-neutral"
          >
            <li><a>Reply</a></li>
            <li><a>Forward</a></li>
          </ul>
        </div>
      </div>
    </div>
    Thank you 😊<br/> See you soon 👋
  </div>
</div>`
}</pre>
</Component>

<Component title="Chat Bubble RTL">
<div dir="rtl" class="container mx-auto py-4 flex flex-col">
  <div class="bubble bubble-left">Thank you 😊<br/> See you soon 👋</div>
  <div class="bubble bubble-right">Thank you 😊<br/> See you soon 👋</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div dir="rtl" class="container mx-auto py-4 flex flex-col">
  <div class="$$bubble $$bubble-left">Thank you 😊<br/> See you soon 👋</div>
  <div class="$$bubble $$bubble-right">Thank you 😊<br/> See you soon 👋</div>
</div>`
}</pre>
</Component>
