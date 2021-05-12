<template>
  <div>
    <input type="checkbox" class="checkbox" :class="classes" checked />
    <span class="checkbox-mark"></span>
  </div>
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
