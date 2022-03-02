---
title: Artboard
desc: Artboard provides fixed size container to display a demo content on mobile size.
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
  { type: 'component', class: 'artboard', desc: 'Container element' },
  { type: 'modifier', class: 'artboard-demo', desc: 'Adds shadow and radius. Puts items in center' },
  { type: 'modifier', class: 'phone-1', desc: 'Size 1 (320×568)' },
  { type: 'modifier', class: 'phone-2', desc: 'Size 2 (375×667)' },
  { type: 'modifier', class: 'phone-3', desc: 'Size 3 (414×736)' },
  { type: 'modifier', class: 'phone-4', desc: 'Size 4 (375×812)' },
  { type: 'modifier', class: 'phone-5', desc: 'Size 5 (414×896)' },
  { type: 'modifier', class: 'phone-6', desc: 'Size 6 (320×1024)' },
  { type: 'modifier', class: 'horizontal', desc: 'shows horizontal view' },
]}"
/>

<Component title="Artboard size 6">
<div class="artboard phone-1 artboard-demo">320×568</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$phone-1">320×568</div>`
}</pre>
</Component>

<Component title="Artboard size 6">
<div class="artboard phone-2 artboard-demo">375×667</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$phone-2">375×667</div>`
}</pre>
</Component>

<Component title="Artboard size 6">
<div class="artboard phone-3 artboard-demo">414×736</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$phone-3">414×736</div>`
}</pre>
</Component>

<Component title="Artboard size 6">
<div class="artboard phone-4 artboard-demo">375×812</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$phone-4">375×812</div>`
}</pre>
</Component>

<Component title="Artboard size 6">
<div class="artboard phone-5 artboard-demo">414×896</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$phone-5">414×896</div>`
}</pre>
</Component>

<Component title="Artboard size 6">
<div class="artboard phone-6 artboard-demo">320×1024</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$phone-6">320×1024</div>`
}</pre>
</Component>

<Component title="Artboard horizontal size 1 (568×320)">
<div class="artboard artboard-horizontal phone-1 artboard-demo">568×320</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$artboard-horizontal $$phone-1">568×320</div>`
}</pre>
</Component>

<Component title="Artboard horizontal size 2 (667×375)">
<div class="artboard artboard-horizontal phone-2 artboard-demo">667×375</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$artboard-horizontal $$phone-2">667×375</div>`
}</pre>
</Component>

<Component title="Artboard horizontal size 3 (736×414)">
<div class="artboard artboard-horizontal phone-3 artboard-demo">736×414</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$artboard-horizontal $$phone-3">736×414</div>`
}</pre>
</Component>

<Component title="Artboard horizontal size 4 (812×375)">
<div class="artboard artboard-horizontal phone-4 artboard-demo">812×375</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$artboard-horizontal $$phone-4">812×375</div>`
}</pre>
</Component>

<Component title="Artboard horizontal size 5 (896×414)">
<div class="artboard artboard-horizontal phone-5 artboard-demo">896×414</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$artboard-horizontal $$phone-5">896×414</div>`
}</pre>
</Component>

<Component title="Artboard horizontal size 6 (1024×320)">
<div class="artboard artboard-horizontal phone-6 artboard-demo">1024×320</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$artboard $$artboard-horizontal $$phone-6">1024×320</div>`
}</pre>
</Component>
