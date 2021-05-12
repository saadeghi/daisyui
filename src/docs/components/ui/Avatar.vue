<template>
  <div class="avatar"><div :class="classes"><slot></slot></div></div>
</template>

<script>
export default {
  props: {
    classes: String
  },
}
</script>
