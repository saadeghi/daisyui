<template>
  <input type="checkbox" class="toggle" :class="classes" checked />
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
