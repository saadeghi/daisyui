<script>
  let {
    colors,
    value = $bindable(),
    name = "",
    label = "",
    background = undefined,
    textColor = undefined,
    themeColors = {},
    colorInitials = {}
  } = $props();
  let open = $state(false);
  let inputValue = $state(value);
  let isDragging = $state(false);
  let dialog;

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
    if (open) {
      closeModal();
    } else {
      openModal();
    }
  }

  function openModal() {
    open = true;
    dialog.showModal();
  }

  function closeModal() {
    open = false;
    dialog.close();
  }

  $effect(() => {
    inputValue = value;
  });

  function getColorNames(color) {
    const names = [];
    for (const [key, themeColor] of Object.entries(themeColors)) {
      if (themeColor === color) {
        names.push(key.replace("--color-", ""));
      }
    }
    return names.length > 0 ? names : null;
  }

  function getColorInitials(color) {
    const initials = [];
    for (const [key, themeColor] of Object.entries(themeColors)) {
      if (themeColor === color) {
        initials.push(colorInitials[key] || null);
      }
    }
    return initials.length > 0 ? initials : null;
  }
  function getTextColorClass(name) {
    const numberMatch = name.match(/\d+/);
    const number = numberMatch ? parseInt(numberMatch[0], 10) : null;
    if (number > 500 || name.includes('black')) {
      return 'text-white';
    }
    return 'text-black';
  }
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
  bind:this={dialog}
  class="modal modal-bottom lg:modal-middle [&::backdrop]:hidden"
  inert={!open ? true : undefined}
>
  <div class="modal-box border border-base-300 lg:max-w-[50rem] max-lg:max-h-[50vh] flex flex-col gap-4">
    {#if open}
    <div class="flex gap-2 items-center">
      <div
        class="h-8 w-12 border-1 border-base-300 rounded-lg grid place-items-center"
        aria-label={`Choose ${name}: ${value}`}
        style:color={label==='A' ? value : textColor}
        style:background-color={label==='A' ? background : value}
        class:font-black={label==='A'}
        class:text-xl={label==='A'}
      >{label}</div>
        <h2 class="text-sm"><span class="opacity-50">Pick a color for</span> {name.replace('--color-','').replace('-',' ')}</h2>
      </div>
      <div
        class="lg:[writing-mode:vertical-lr] mx-auto w-fit grid grid-cols-11 lg:min-h-[20rem]"
        role="listbox"
      >
        {#each Object.entries(colors) as [name, color]}
          <button
            type="button"
            class="appearance-none p-px [writing-mode:lr]"
            aria-label={name}
            aria-selected={value === color}
            on:mousedown={() => handleDragStart(color)}
            on:mouseover={() => handleDragOver(color)}
            on:mouseup={() => handleDragEnd(color)}
            on:keypress={() => handleDragStart(color)}
          >
            <div
              class="rounded-full border border-base-content/10 w-7 m-px relative aspect-square select-none bg-transparent grid place-items-center"
              class:[box-shadow:0_0_0_2px_white,0_0_0_4px_black]={value === color}
              class:outline-white={value === color}
              class:outline-offest-[-3px]={value === color}
              style:background-color={color}
            >
              {#if getColorInitials(color)}
                {#if getColorInitials(color).length > 1}
                  <span data-tip={getColorNames(color).join(', ')} class={`tooltip text-[9px] font-mono font-semibold px-px before:lowercase before:text-[10px] uppercase ${getTextColorClass(name)}`}>{getColorInitials(color)[0]}+</span>
                {:else}
                  <span data-tip={getColorNames(color)[0]} class={`tooltip text-[9px] font-mono font-semibold px-px before:lowercase before:text-[10px] uppercase ${getTextColorClass(name)}`}>{getColorInitials(color)[0]}</span>
                {/if}
              {/if}
            </div>
          </button>
        {/each}
      </div>
      <div class="flex gap-2 items-center">
        <div class="input input-border input-sm flex gap-2 items-center max-w-none">
          <span class="text-xs text-base-content/60 shrink-0">Adjust Lightness, Chroma, Hue:</span>
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
