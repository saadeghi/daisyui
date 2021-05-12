<template>
  <div class="navbar" :class="classes"><slot></slot></div>
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
