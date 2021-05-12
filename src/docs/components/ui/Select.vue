<template>
  <select class="select" :class="classes"><slot></slot></select>
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
