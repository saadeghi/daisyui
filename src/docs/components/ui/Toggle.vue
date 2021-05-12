<template>
  <div>
    <input type="checkbox" class="toggle" :class="classes" checked />
    <span class="toggle-mark"></span>
  </div>
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
