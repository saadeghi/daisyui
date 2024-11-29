<script>
  import "prism-themes/themes/prism-material-dark.min.css"
  import "$lib/style/prism-themes-modify.css"
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props()
</script>

{@render children?.()}
