<template>
  <div class="collapse w-96" :tabindex="checkbox ? null : 0">
    <input type="checkbox" v-if="checkbox">
    <div class="collapse-title text-xl font-medium" :class="titleClass">
      {{  title }}
    </div>
    <div class="collapse-content">
      <slot></slot>
      <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using <span class="badge badge-outline">collapse-open</span> and <span class="badge badge-outline">collapse-close</span> classes.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleClass: String,
    title: String,
    checkbox: Boolean,
  },
}
</script>
