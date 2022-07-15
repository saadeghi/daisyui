---
title: Comment
desc: Comment displays discussions and user feedback.
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
  { type:'component', class: 'comment', desc: 'Comment container' },
  { type:'component', class: 'comment-message', desc: 'Comment message container' },
  { type:'component', class: 'comment-info', desc: 'Comment info container' },
  { type:'component', class: 'comment-actions', desc: 'Comment actions container' },
]}"
/>

<Component title="Comment">
<div class="comment mr-auto bg-base-300 rounded-lg">
  <div class="avatar mb-auto">
    <div class="w-8 rounded-full">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div class="comment-message">The pain itself is love, the main storage system. Integer pregnant, the author of this networks of teenagers, the fear of the arches of the housing itself, from the real fear of the bow at the park.</div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$comment bg-base-300 rounded-lg">
  <div class="avatar mb-auto">
    <div class="w-8 rounded-full">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div class="$$comment-message">The pain itself is love, the main storage system. Integer pregnant, the author of this networks of teenagers, the fear of the arches of the housing itself, from the real fear of the bow at the park.</div>
</div>`
}</pre>
</Component>

<Component title="Comment author and date">
<div class="comment mr-auto bg-base-300 rounded-lg">
  <div class="avatar mb-auto">
    <div class="w-8 rounded-full">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div class="comment-message">
    <div class="comment-info">
      <div class="font-medium">iman malekian</div>
      <div>Jul 15, 2022</div>
    </div>
    <div>The pain itself is love, the main storage system. Integer pregnant, the author of this networks of teenagers, the fear of the arches of the housing itself, from the real fear of the bow at the park.</div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$comment bg-base-300 rounded-lg">
  <div class="avatar mb-auto">
    <div class="w-8 rounded-full">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div class="$$comment-message">
    <div class="$$comment-info">
      <div class="font-medium">iman malekian</div>
      <div>Jul 15, 2022</div>
    </div>
    <div>The pain itself is love, the main storage system. Integer pregnant, the author of this networks of teenagers, the fear of the arches of the housing itself, from the real fear of the bow at the park.</div>
  </div>
</div>`
}</pre>
</Component>

<Component title="Comment with action buttons">
<div class="comment mr-auto bg-base-300 rounded-lg">
  <div class="avatar mb-auto">
    <div class="w-8 rounded-full">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div class="comment-message">
    <div class="comment-info">
      <div class="font-medium">iman malekian</div>
      <div>Jul 15, 2022</div>
    </div>
    <div>The pain itself is love, the main storage system. Integer pregnant, the author of this networks of teenagers, the fear of the arches of the housing itself, from the real fear of the bow at the park.</div>
    <div class="comment-actions text-primary">
      <button class="btn btn-ghost btn-xs">Reply</button> |
      <button class="btn btn-ghost btn-xs">Edit</button> |
      <button class="btn btn-ghost btn-xs">Like</button>
    </div>
  </div>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<div class="$$comment bg-base-300 rounded-lg">
  <div class="avatar mb-auto">
    <div class="w-8 rounded-full">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div class="$$comment-message">
    <div class="$$comment-info">
      <div class="font-medium">iman malekian</div>
      <div>Jul 15, 2022</div>
    </div>
    <div>The pain itself is love, the main storage system. Integer pregnant, the author of this networks of teenagers, the fear of the arches of the housing itself, from the real fear of the bow at the park.</div>
    <div class="$$comment-actions text-primary">
      <button class="btn btn-ghost btn-xs">Reply</button> |
      <button class="btn btn-ghost btn-xs">Edit</button> |
      <button class="btn btn-ghost btn-xs">Like</button>
    </div>
  </div>
</div>`
}</pre>
</Component>
