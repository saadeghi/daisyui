<script>
  import ContrastMeter from "$components/themegenerator/ContrastMeter.svelte"

  let {
    colors,
    value = $bindable(),
    name = "",
    label = "",
    colorPairs = [],
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

  function getPairColor(currentColor) {
    for (const [color, contentColor] of colorPairs) {
      if (currentColor === color) {
        return themeColors[contentColor];
      } else if (currentColor === contentColor) {
        return themeColors[color];
      }
    }
    return currentColor;
  }
</script>

<svelte:window
  on:mouseup={handleGlobalMouseUp}
  on:keydown={open ? handleKeydown : null}
/>

<button
  type="button"
  class="w-14 h-10 border-1 border-base-content/10 rounded-lg cursor-pointer grid place-items-center outline-offset-2 focus:outline-2 outline-base-content"
  aria-label={`Choose ${name}: ${value}`}
  style:color={label==='A' ? value : getPairColor(name)}
  style:background-color={label==='A' ? getPairColor(name) : value}
  class:font-black={label==='A'}
  class:text-2xl={label==='A'}
  on:click={toggleModal}
>{label}</button>

<dialog
  bind:this={dialog}
  class="modal modal-bottom lg:modal-middle [&::backdrop]:hidden"
  inert={!open ? true : undefined}
>
  <div class="modal-box p-0 border border-base-300 lg:max-w-[50rem] max-lg:max-h-[80vh] flex flex-col gap-4">
    {#if open}
      <div class="flex gap-2 justify-between items-center p-8 pb-0">
        <div class="flex gap-2 items-center relative pb-4">
          <div
            class="h-8 w-12 border-1 border-base-300 rounded-lg grid place-items-center text-xl font-black"
            aria-label={`Choose ${name}: ${value}`}
            style:color={label==='A' ? value : getPairColor(name)}
            style:background-color={label==='A' ? getPairColor(name) : value}
          >
          A
          </div>
          <div
            class="h-px border border-px border-t-base-100/20 border-x-0 border-b-base-content/50 absolute"
            class:w-[2.4rem]={label==='A'}
            class:start-[1.85rem]={label==='A'}
            class:w-[1.4rem]={label!=='A'}
            class:start-[2.9rem]={label!=='A'}
          ></div>
          <h2 class="text-sm ms-5"><span class="opacity-50">Pick a color for</span> {name.replace('--color-','').replace('-',' ')}</h2>
        </div>
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
                  <span data-tip={getColorNames(color).join(', ')} class={`tooltip text-[9px] font-mono font-semibold px-px before:lowercase before:max-w-24 before:text-[10px] uppercase ${getTextColorClass(name)}`}>{getColorInitials(color)[0]}+</span>
                {:else}
                  <span data-tip={getColorNames(color)[0]} class={`tooltip text-[9px] font-mono font-semibold px-px before:lowercase before:text-[10px] uppercase ${getTextColorClass(name)}`}>{getColorInitials(color)[0]}</span>
                {/if}
              {/if}
            </div>
          </button>
        {/each}
      </div>
      <div class="flex gap-2 items-center bg-base-200 px-8 py-6 justify-between items-center">
        <div class="flex flex-col gap-1 grow">
          <span class="text-xs text-base-content/60 shrink-0">Adjust Lightness, Chroma, Hue:</span>
          <input
            class="input input-border input-sm w-full"
            type="text"
            value={inputValue}
            on:input={handleInput}
            aria-label={`${name} value`}
          />
        </div>
        <ContrastMeter
          color1={value}
          color2={getPairColor(name)}/>
      </div>
    {/if}
  </div>
  <div class="modal-backdrop" on:click={closeModal}>
    <button>close</button>
  </div>
</dialog>
