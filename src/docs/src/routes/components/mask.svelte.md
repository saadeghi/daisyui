---
title: Mask
desc: Mask crops the content of the element to common shapes.
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
  { type:'component', class: 'mask', desc: 'Masks the content with shape' },
  { type:'modifier', class: 'mask-squircle', desc: 'Applies `squircle` shape' },
  { type:'modifier', class: 'mask-heart', desc: 'Applies `heart` shape' },
  { type:'modifier', class: 'mask-hexagon', desc: 'Applies `hexagon` shape' },
  { type:'modifier', class: 'mask-hexagon-2', desc: 'Applies `hexagon` alternative shape' },
  { type:'modifier', class: 'mask-decagon', desc: 'Applies `decagon` shape' },
  { type:'modifier', class: 'mask-pentagon', desc: 'Applies `pentagon` shape' },
  { type:'modifier', class: 'mask-diamond', desc: 'Applies `diamond` shape' },
  { type:'modifier', class: 'mask-square', desc: 'Applies `square` shape' },
  { type:'modifier', class: 'mask-circle', desc: 'Applies `circle` shape' },
  { type:'modifier', class: 'mask-parallelogram', desc: 'Applies `parallelogram` shape' },
  { type:'modifier', class: 'mask-parallelogram-2', desc: 'Applies `parallelogram` alternative shape' },
  { type:'modifier', class: 'mask-parallelogram-3', desc: 'Applies `parallelogram` alternative shape' },
  { type:'modifier', class: 'mask-parallelogram-4', desc: 'Applies `parallelogram` alternative shape' },
  { type:'modifier', class: 'mask-star', desc: 'Applies `star` shape' },
  { type:'modifier', class: 'mask-star-2', desc: 'Applies `star` alternative shape' },
  { type:'modifier', class: 'mask-triangle', desc: 'Applies `triangle` shape' },
  { type:'modifier', class: 'mask-triangle-2', desc: 'Applies `triangle` alternative shape' },
  { type:'modifier', class: 'mask-triangle-3', desc: 'Applies `triangle` alternative shape' },
  { type:'modifier', class: 'mask-triangle-4', desc: 'Applies `triangle` alternative shape' },
  { type:'modifier', class: 'mask-half-1', desc: 'Crops only the first half of mask' },
  { type:'modifier', class: 'mask-half-2', desc: 'Crops only the second half of mask' },
]}"
/>

<Component title="Squircle">
<img alt="Squircle CSS mask" class="mask mask-squircle w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-squircle" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Heart">
<img alt="Heart CSS mask" class="mask mask-heart w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-heart" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Hexagon">
<img alt="Hexagon CSS mask" class="mask mask-hexagon w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-hexagon" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Hexagon-2">
<img alt="Hexagon-2 CSS mask" class="mask mask-hexagon-2 w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-hexagon-2" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Decagon">
<img alt="Decagon CSS mask" class="mask mask-decagon w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-decagon" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Pentagon">
<img alt="Pentagon CSS mask" class="mask mask-pentagon w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-pentagon" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Diamond">
<img alt="Diamond CSS mask" class="mask mask-diamond w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-diamond" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Square">
<img alt="Square CSS mask" class="mask mask-square w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-square" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Circle">
<img alt="Circle CSS mask" class="mask mask-circle w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-circle" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Parallelogram">
<img alt="Parallelogram CSS mask" class="mask mask-parallelogram w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-parallelogram" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Parallelogram-2">
<img alt="Parallelogram-2 CSS mask" class="mask mask-parallelogram-2 w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-parallelogram-2" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Parallelogram-3">
<img alt="Parallelogram-3 CSS mask" class="mask mask-parallelogram-3 w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-parallelogram-3" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Parallelogram-4">
<img alt="Parallelogram-4 CSS mask" class="mask mask-parallelogram-4 w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-parallelogram-4" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Star">
<img alt="Star CSS mask" class="mask mask-star w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-star" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Star-2">
<img alt="Star-2 CSS mask" class="mask mask-star-2 w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-star-2" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Triangle">
<img alt="Triangle CSS mask" class="mask mask-triangle w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-triangle" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Triangle-2">
<img alt="Triangle-2 CSS mask" class="mask mask-triangle-2 w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-triangle-2" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Triangle-3">
<img alt="Triangle-3 CSS mask" class="mask mask-triangle-3 w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-triangle-3" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>

<Component title="Triangle-4">
<img alt="Triangle-4 CSS mask" class="mask mask-triangle-4 w-40 h-40" src="https://api.lorem.space/image/shoes?w=320&h=320" />
<pre slot="html" use:replace={{ to: $prefix }}>{
`<img class="mask mask-triangle-4" src="https://api.lorem.space/image/shoes?w=160&h=160" />`
}</pre>
</Component>
