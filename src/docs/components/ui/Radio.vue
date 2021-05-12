<template>
  <div>
    <input type="radio" class="radio" :class="classes" :name="name" :value="value" checked />
    <span class="radio-mark"></span>
  </div>
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
