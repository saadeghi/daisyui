<template>
  <input type="radio" class="radio" :class="classes" :name="name" :value="value" checked />
</template>

<script>
export default {
  props: {
    classes: String,
    name: String,
    value: String,
  },
}
</script>
