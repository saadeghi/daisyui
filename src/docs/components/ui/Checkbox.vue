<template>
  <input type="checkbox" class="checkbox" :class="classes" checked />
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
