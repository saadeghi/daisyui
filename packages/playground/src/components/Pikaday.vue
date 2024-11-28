<template>
  <input class="input input-border" type="text" ref="input" value="Pikaday from Vue"/>
</template>

<script>
import Pikaday from "pikaday";

export default {
  mounted: function() {
    const picker = new Pikaday({
      field: this.$refs.input,
      format: this.format,
      onSelect: () => {
        this.$emit("input", picker.toString());
      },
      ...this.options
    });
  }
};
</script>
