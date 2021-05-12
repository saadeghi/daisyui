<template>
  <li class="accordion-item">
    <input :id="'item-'+id" type="checkbox" />
    <label :for= "'item-'+id" :class="classes">
      {{  title }}
    </label>
    <div class="accordion-body">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    classes: String,
    title: String,
  },
  data() {
    return {
      'id': Math.floor(Math.random() * 999999) + 1
    }
  }
}
</script>
