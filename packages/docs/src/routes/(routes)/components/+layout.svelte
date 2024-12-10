<script>
  import { page } from "$app/stores"
  let { data, children } = $props()
</script>

{@render children?.()}

{#if $page.url.pathname == "/components/modal/"}
  <input type="checkbox" id="my_modal_6" class="modal-toggle" aria-label="Open or close modal" />
  <div class="modal" role="dialog">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">This modal works with a hidden checkbox!</p>
      <div class="modal-action">
        <label for="my_modal_6" class="btn">Close</label>
      </div>
    </div>
  </div>

  <input type="checkbox" id="my_modal_7" class="modal-toggle" aria-label="Open or close modal" />
  <div class="modal" role="dialog">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
      <p class="py-4">
        You've been selected for a chance to get one year of subscription to use Wikipedia for free!
      </p>
    </div>
    <label class="modal-backdrop" for="my_modal_7">Close</label>
  </div>

  <div class="modal" role="dialog" id="my_modal_8">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">This modal works with anchor links</p>
      <div class="modal-action">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="btn" rel="external">Close</a>
      </div>
    </div>
  </div>
{/if}
