---
title: Menu
desc: Menu is used to display a list of links vertically or horizontally.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
</script>

<ClassTable
data="{[
  { type:'component', class: 'menu', desc: 'Container <ul> element' },
  { type:'component', class: 'menu-title', desc: 'Identify <li> as the title of menu' },
  { type:'responsive', class: 'menu-normal', desc: 'Normal text size and normal spacing (default)' },
  { type:'responsive', class: 'menu-compact', desc: 'Smaller text size and compact spacing' },
  { type:'responsive', class: 'menu-vertical', desc: 'Vertical menu (default)' },
  { type:'responsive', class: 'menu-horizontal', desc: 'Horisontal menu' }
]}"
/>

<Component title="Menu">
<ul class="menu bg-base-100 w-56 shadow-xl">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Menu with rounded corner">
<ul class="menu bg-base-100 w-56 shadow-xl rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="With padding">
<ul class="menu bg-base-100 w-56 shadow-xl p-2 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 w-56 p-2 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Item with border">
<ul class="menu bg-base-100 w-56 shadow-xl rounded-box">
  <li><a>Item 1</a></li>
  <li class="bordered"><a>I have border</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li class="bordered"><a>I have border</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Item with border (on hover)">
<ul class="menu bg-base-100 w-56 shadow-xl rounded-box">
  <li><a>Item 1</a></li>
  <li class="hover-bordered"><a>Hover me</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 w-56 rounded-box">
  <li><a>Item 1</a></li>
  <li class="hover-bordered"><a>Hover me</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Disabled items">
<ul class="menu bg-base-100 w-56 shadow-xl rounded-box">
  <li class="disabled"><a>Item 1</a></li>
  <li class="disabled"><a>Item 2</a></li>
  <li class="disabled"><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 w-56 rounded-box">
  <li class="disabled"><a>Item 1</a></li>
  <li class="disabled"><a>Item 2</a></li>
  <li class="disabled"><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Compact">
<ul class="menu bg-base-100 menu-compact w-56 shadow-xl p-2 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 menu-compact w-56 p-2 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Responsive (compact by default, normal on large screen)">
<ul class="menu bg-base-100 menu-compact lg:menu-normal w-56 shadow-xl p-2 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 menu-compact lg:menu-normal w-56 p-2 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Horizontal">
<ul class="menu bg-base-100 menu-horizontal shadow-xl rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 menu-horizontal rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Responsive (vertical by default, horizontal on large screen)">
<ul class="menu bg-base-100 menu-vertical lg:menu-horizontal shadow-xl rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 menu-vertical lg:menu-horizontal rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="With icons">
<ul class="menu bg-base-100 w-56 shadow-xl p-2 rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    Item 2
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      Item 1
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      Item 3
    </a>
  </li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 w-56 p-2 rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    Item 2
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      Item 1
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      Item 3
    </a>
  </li>
</ul>`
}</pre>
</Component>

<Component title="Only icons">
<ul class="menu bg-base-100 shadow-xl rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>`
}</pre>
</Component>

<Component title="Only icons (horizontal)">
<ul class="menu bg-base-100 menu-horizontal shadow-xl rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 menu-horizontal rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>`
}</pre>
</Component>

<Component title="Icons with padding">
<ul class="menu bg-base-100 shadow-xl p-2 rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 p-2 rounded-box">
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </a>
  </li>
</ul>`
}</pre>
</Component>

<Component title="Horizontal with submenu">
<div class="mb-40">
  <ul class="menu bg-base-100 menu-horizontal">
    <li><a>Item 1</a></li>
    <li tabindex="0">
      <span>Parent</span>
      <ul class="bg-base-100">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li><a>Submenu 3</a></li>
      </ul>
    </li>
    <li><a>Item 3</a></li>
  </ul>
</div>
<pre slot="html">{
`<ul class="menu bg-base-100 menu-horizontal">
  <li><a>Item 1</a></li>
  <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
  <li tabindex="0">
    <span>Parent</span>
    <ul class="bg-base-100">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Horizontal with submenu and padding and border radius">
<div class="mb-40">
  <ul class="menu bg-base-100 menu-horizontal shadow-xl rounded-box p-2">
    <li><a>Item 1</a></li>
    <li tabindex="0">
      <span>Parent</span>
      <ul class="rounded-box bg-base-100 p-2 shadow-xl">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li><a>Submenu 3</a></li>
      </ul>
    </li>
    <li><a>Item 3</a></li>
  </ul>
</div>
<pre slot="html">{
`<ul class="menu bg-base-100 menu-horizontal rounded-box p-2">
  <li><a>Item 1</a></li>
  <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
  <li tabindex="0">
    <span>Parent</span>
    <ul class="rounded-box bg-base-100 p-2">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Vertical with submenu">
<div class="mb-20 mr-20">
  <ul class="menu bg-base-100">
    <li><a>Item 1</a></li>
    <li tabindex="0">
      <span>Parent</span>
      <ul class="bg-base-100">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li><a>Submenu 3</a></li>
      </ul>
    </li>
    <li><a>Item 3</a></li>
  </ul>
</div>
<pre slot="html">{
`<ul class="menu bg-base-100">
  <li><a>Item 1</a></li>
  <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
  <li tabindex="0">
    <span>Parent</span>
    <ul class="bg-base-100">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="Vertical with submenu and padding and border radius">
<div class="mb-20 mr-20">
  <ul class="menu bg-base-100 shadow-xl rounded-box p-2">
    <li><a>Item 1</a></li>
    <li tabindex="0">
      <span>Parent</span>
      <ul class="rounded-box p-2 bg-base-100 shadow-xl">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li><a>Submenu 3</a></li>
      </ul>
    </li>
    <li><a>Item 3</a></li>
  </ul>
</div>
<pre slot="html">{
`<ul class="menu bg-base-100 rounded-box p-2">
  <li><a>Item 1</a></li>
  <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
  <li tabindex="0">
    <span>Parent</span>
    <ul class="rounded-box p-2 bg-base-100">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
    </ul>
  </li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>

<Component title="A lot of submenus" desc="The second level will be a dropdown and after that, to avoid a bad UX all levels will be visible with a padding.">
<div class="mb-80">
  <ul class="menu bg-base-100 menu-horizontal shadow-xl rounded-box p-2">
    <li><a>Item</a></li>
    <li tabindex="0">
      <span>Level 1</span>
      <ul class="rounded-box bg-base-100 shadow-xl p-2">
        <li>
          <span>Level 2</span>
          <ul>
            <li>
              <span>Level 3</span>
              <ul>
                <li>
                  <span>Level 4</span>
                  <ul>
                    <li>
                      <span>Level 5</span>
                      <ul>
                        <li><a>Level 6</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
<pre slot="html">{
`<ul class="menu bg-base-100 menu-horizontal rounded-box p-2">
  <li><a>Item</a></li>
  <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
  <li tabindex="0">
    <span>Level 1</span>
    <ul class="rounded-box bg-base-100 p-2">
      <li>
        <span>Level 2</span>
        <ul>
          <li>
            <span>Level 3</span>
            <ul>
              <li>
                <span>Level 4</span>
                <ul>
                  <li>
                    <span>Level 5</span>
                    <ul>
                      <li><a>Level 6</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>`
}</pre>
</Component>

<Component title="With custom color">
<ul class="menu bg-base-100 w-56 bg-secondary text-secondary-content p-2 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
<pre slot="html">{
`<ul class="menu bg-base-100 w-56 bg-secondary text-secondary-content p-2 rounded-box">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>`
}</pre>
</Component>
