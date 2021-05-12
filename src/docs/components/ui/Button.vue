<template>
  <button class="btn" :class="classes"><slot></slot></button>
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
