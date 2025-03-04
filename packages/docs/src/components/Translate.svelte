<script>
  import { t } from "$lib/i18n.svelte.js"
  let { text, variables = {} } = $props()
</script>

{@html $t(text, variables)}
