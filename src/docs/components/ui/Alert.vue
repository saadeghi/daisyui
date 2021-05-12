<template>
  <div class="alert" :class="classes"><slot></slot></div>
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
