<script>
  import debounce from "lodash.debounce"
  import { prefix } from "$lib/stores"

  const onPrefixInput = debounce((e) => {
    if (e.target.value !== $prefix) {
      prefix.set(e.target.value)
    }
  }, 500)
</script>

<div class="tooltip tooltip-right font-normal" data-tip="Add custom prefix">
  <input class="input input-bordered input-xs w-min max-w-[3.8rem]" type="text" placeholder="Prefix–" on:input={onPrefixInput} value={$prefix} />
</div>
