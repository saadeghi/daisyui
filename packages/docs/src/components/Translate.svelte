<script>
  import { t } from "$lib/i18n"
  let { text, variables = {} } = $props()
</script>

{@html $t(text, variables)}
