<script>
  import { prefix } from "$lib/stores"
  let prefixValue = $state($prefix)

  function handleInput(e) {
    const newValue = e.target.value.toLowerCase()
    const validValue = newValue.match(/^[a-z]*[a-z-]{0,11}$/)?.[0] ?? prefixValue
    e.target.value = validValue
    prefixValue = validValue
  }

  $effect(() => {
    prefix.set(prefixValue)
  })
</script>

<div class="tooltip tooltip-right rtl:tooltip-left font-normal" data-tip="Add custom prefix">
  <input
    class="input input-bordered input-xs w-min max-w-[3.8rem]"
    name="prefix"
    type="text"
    placeholder="prefix–"
    autocomplete="off"
    pattern={`[a-z]*[a-z\-]{0,11}`}
    minlength="0"
    maxlength="12"
    value={prefixValue}
    oninput={handleInput}
  />
</div>
