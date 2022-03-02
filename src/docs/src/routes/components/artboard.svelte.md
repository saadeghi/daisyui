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
  { type: 'utility', class: 'artboard-demo', desc: 'Adds shadow and radius. Puts items in center' },
  { type: 'utility', class: 'phone-1', desc: 'Size 1' },
  { type: 'utility', class: 'phone-2', desc: 'Size 2' },
  { type: 'utility', class: 'phone-3', desc: 'Size 3' },
  { type: 'utility', class: 'phone-4', desc: 'Size 4' },
  { type: 'utility', class: 'phone-5', desc: 'Size 5' },
  { type: 'utility', class: 'phone-6', desc: 'Size 6' },
  { type: 'utility', class: 'horizontal', desc: 'shows horizontal view' },
]}"
/>

<Component title="Artboard">
<div class="artboard phone-1 artboard-demo">320&times;568</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-1 artboard-demo">320&times;568</div>`
}</pre>
</Component>

<Component title="Artboard">
<div class="artboard phone-2 artboard-demo">375&times;667</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-2 artboard-demo">375&times;667</div>`
}</pre>
</Component>

<Component title="Artboard">
<div class="artboard phone-3 artboard-demo">414&times;736</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-3 artboard-demo">414&times;736</div>`
}</pre>
</Component>

<Component title="Artboard">
<div class="artboard phone-4 artboard-demo">375&times;812</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-4 artboard-demo">375&times;812</div>`
}</pre>
</Component>

<Component title="Artboard">
<div class="artboard phone-5 artboard-demo">414&times;896</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-5 artboard-demo">414&times;896</div>`
}</pre>
</Component>

<Component title="Artboard">
<div class="artboard phone-6 artboard-demo">320&times;1024</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-6 artboard-demo">320&times;1024</div>`
}</pre>
</Component>

<Component title="Artboard horizontal">
<div class="artboard artboard-horizontal phone-1 artboard-demo">568&times;320</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-1 artboard-demo">568&times;320</div>`
}</pre>
</Component>

<Component title="Artboard horizontal">
<div class="artboard artboard-horizontal phone-2 artboard-demo">667&times;375</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-2 artboard-demo">667&times;375</div>`
}</pre>
</Component>

<Component title="Artboard horizontal">
<div class="artboard artboard-horizontal phone-3 artboard-demo">736&times;414</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-3 artboard-demo">736&times;414</div>`
}</pre>
</Component>

<Component title="Artboard horizontal">
<div class="artboard artboard-horizontal phone-4 artboard-demo">812&times;375</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-4 artboard-demo">812&times;375</div>`
}</pre>
</Component>

<Component title="Artboard horizontal">
<div class="artboard artboard-horizontal phone-5 artboard-demo">896&times;414</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-5 artboard-demo">896&times;414</div>`
}</pre>
</Component>

<Component title="Artboard horizontal">
<div class="artboard artboard-horizontal phone-6 artboard-demo">1024&times;320</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="artboard phone-6 artboard-demo">1024&times;320</div>`
}</pre>
</Component>
