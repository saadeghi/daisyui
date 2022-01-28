---
title: Button Title
desc: Button Description
published: true
---

<script>
  import Component from "@components/Component.svelte"
</script>

<Component title="Button!">

<button class="btn">button</button><button class="btn">button</button>

<pre slot="html">{
`<button class="btn">button</button>
  <button class="btn">button</button>`
}</pre>

</Component>

<Component title="Button!">
<button class="btn">button</button>
</Component>

<Component title="Button!">
<button class="btn">button</button>
</Component>
