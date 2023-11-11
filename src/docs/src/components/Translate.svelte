<script>
  import { t } from "$lib/i18n"
  export let text
  export let variables = {}
</script>

{@html $t(text, variables)}
