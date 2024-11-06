<script>
  let {
    colors,
    value = $bindable(),
    name = "",
    label = "",
    background = undefined,
    textColor = undefined,
  } = $props();
  let open = $state(false);
  let inputValue = $state(value);
  let isDragging = $state(false);

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'Enter') {
      value = inputValue;
      closeModal();
    }
  }

  function handleDragStart(color) {
    isDragging = true;
    value = color;
    inputValue = color;
  }

  function handleDragOver(color) {
    if (isDragging) {
      value = color;
      inputValue = color;
    }
  }

  function handleDragEnd(color) {
    if (isDragging) {
      value = color;
      inputValue = color;
      isDragging = false;
    }
  }

  function handleGlobalMouseUp() {
    isDragging = false;
  }

  function handleInput(event) {
    inputValue = event.target.value;
    value = inputValue;
  }

  function toggleModal() {
    open = !open;
  }

  function closeModal() {
    open = false;
  }

  $effect(() => {
    inputValue = value;
  });
</script>

<svelte:window
  on:mouseup={handleGlobalMouseUp}
  on:keydown={open ? handleKeydown : null}
/>

<button
  type="button"
  class="w-14 h-10 border-1 border-base-content/10 rounded-lg cursor-pointer grid place-items-center outline-offset-2 focus:outline-2"
  aria-label={`Choose ${name}: ${value}`}
  style:color={label==='A' ? value : textColor}
  style:background-color={label==='A' ? background : value}
  class:font-black={label==='A'}
  class:text-2xl={label==='A'}
  on:click={toggleModal}
>{label}</button>


<dialog
  class="modal modal-bottom lg:modal-middle"
  inert={!open ? true : undefined}
  {open}>
    <div class="modal-box border border-base-300 lg:max-w-[50rem] max-lg:max-h-[50vh] flex flex-col gap-4">
      {#if open}
        <div
          class="lg:[writing-mode:vertical-lr] mx-auto w-fit grid grid-cols-11 lg:min-h-[20rem]"
          role="listbox"
        >
          {#each Object.entries(colors) as [name, color]}
            <button
              type="button"
              class="appearance-none p-px"
              aria-label={name}
              aria-selected={value === color}
              on:mousedown={() => handleDragStart(color)}
              on:mouseover={() => handleDragOver(color)}
              on:mouseup={() => handleDragEnd(color)}
              on:keypress={() => handleDragStart(color)}
            >
              <div
                class="rounded-full border border-base-content/10 w-7 m-px relative aspect-square select-none bg-transparent"
                class:[box-shadow:0_0_0_2px_white,0_0_0_4px_black]={value === color}
                class:outline-white={value === color}
                class:outline-offest-[-3px]={value === color}
                style:background-color={color}
              ></div>
            </button>
          {/each}
        </div>
        <div class="flex gap-2 items-center">
          <div
            class="h-8 w-12 border-1 border-base-300 rounded-lg grid place-items-center"
            aria-label={`Choose ${name}: ${value}`}
            style:color={label==='A' ? value : textColor}
            style:background-color={label==='A' ? background : value}
            class:font-black={label==='A'}
            class:text-xl={label==='A'}
          >{label}</div>
          <div class="input input-border input-sm flex gap-2 items-center max-w-none">
            <span class="text-xs text-base-content/60 shrink-0">{name}:</span>
            <input
              type="text"
              value={inputValue}
              on:input={handleInput}
              aria-label={`${name} value`}
            />
          </div>
        </div>
      {/if}
    </div>
    <div class="modal-backdrop" on:click={closeModal}>
      <button>close</button>
    </div>
</dialog>
