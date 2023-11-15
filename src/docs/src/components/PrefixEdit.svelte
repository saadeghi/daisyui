<script>
  import debounce from "lodash.debounce"
  import { prefix } from "$lib/stores"

  const onPrefixInput = debounce((e) => {
    if (e.target.value !== $prefix) {
      prefix.set(e.target.value)
    }
  }, 500)
</script>

<div class="tooltip tooltip-right rtl:tooltip-left font-normal" data-tip="Add custom prefix">
  <input
    class="input input-bordered input-xs w-min max-w-[3.8rem]"
    name="prefix"
    type="text"
    placeholder="prefix–"
    on:input={onPrefixInput}
    value={$prefix} />
</div>
