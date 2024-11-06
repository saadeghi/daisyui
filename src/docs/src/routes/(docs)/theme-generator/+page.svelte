<script>
  import ColorPalette from "$components/ColorPalette.svelte"
  import Preview from "$components/themegenerator/Preview.svelte"
  import { nameGenerator } from "$lib/nameGenerator"
  import { parseThemeCSS } from "$lib/themeGeneratorCssParser"
  import { randomizeThemeColors } from "$lib/themeGeneratorRandomizer"
  import { validateThemeName, validateThemeStructure } from "$lib/themeGeneratorValidation"
  import themeOrder from "../../../../../../functions/themeOrder"
  import { browser } from '$app/environment';
  import { untrack } from 'svelte';
  const { data } = $props();
  let themeCSSModal;

  let dice = $state({ rotate: 0 });
  let dockActiveItem = $state("themes");
  let themeIdCounter = $state(1);
  let savedThemes = $state({});
  let selectedTheme = $state(null);
  let selectedThemeName = $state(null);
  let editingTheme = $state(null);
  let isCreatingNew = $state(false);
  let activeThemeData = $state({
    id: themeIdCounter,
    ...data.themes.light,
    default: false,
    prefersdark: false
  });
  let lastSavedThemeData = $state(null);
  let themeCSS = $state('');
  let contextMenu = $state({
    show: false,
    x: 0,
    y: 0,
    themeId: null
  });

  let combinedThemes = $derived({ ...data.themes, ...savedThemes });
  let themesNewestFirst = $derived.by(() => {
    const customThemes = Object.entries(savedThemes)
      .filter(([id]) => !(id in data.themes))
      .reverse();

    const builtInThemes = themeOrder
      .map(id => [id, data.themes[id] || savedThemes[id]])
      .filter(([_, theme]) => theme !== undefined);

    return [...customThemes, ...builtInThemes];
  });

  function showContextMenuForTheme(e, themeId) {
    e.preventDefault();
    contextMenu = {
      show: true,
      x: e.clientX,
      y: e.clientY,
      themeId
    };
  }

  function closeContextMenuOnClickOutside(e) {
    if (contextMenu.show && !e.target.closest('.context-menu')) {
      contextMenu.show = false;
    }
  }

  function openThemeCSSModal() {
    const baseProps = [
      `  name: "${activeThemeData.name}";`,
      `  color-scheme: "${activeThemeData['color-scheme']}";`,
      `  default: ${activeThemeData.default};`,
      `  prefersdark: ${activeThemeData.prefersdark};`,
    ];

    const cssProps = Object.entries(activeThemeData)
      .filter(([key]) => key.startsWith('--'))
      .map(([key, value]) => `  ${key}: ${value};`);

    themeCSS = `@plugin "daisyui/theme" {\n${baseProps.join('\n')}\n${cssProps.join('\n')}\n}`;

    if (themeCSSModal) {
      themeCSSModal.showModal();
    }
  }

  let isClipboardButtonPressed = $state(false);
  function copyThemeCSSToClipboard() {
    navigator.clipboard.writeText(themeCSS)
      .then(() => {
        isClipboardButtonPressed = true;
        setTimeout(() => isClipboardButtonPressed = false, 2000);
      })
      .catch(err => console.error('Failed to copy:', err));
  }

  $effect(() => {
    if (!browser) return;
    try {
      const storedData = localStorage.getItem('theme-generator');
      if (storedData) {
        const parsed = JSON.parse(storedData);
        const validatedThemes = Object.entries(parsed.themes).reduce((acc, [key, value]) => {
          const sanitized = validateThemeStructure(value);
          if (sanitized) acc[key] = sanitized;
          return acc;
        }, {});
        savedThemes = validatedThemes;

        if (validateThemeName(parsed.selectedTheme)) {
          selectedThemeName = parsed.selectedTheme;
          const themes = untrack(() => ({ ...data.themes, ...savedThemes }));
          selectedTheme = themes[parsed.selectedTheme];
        }

        themeIdCounter = parsed.counter;
      }
    } catch (error) {
      console.error('Failed to load themes:', error);
      savedThemes = {};
      selectedThemeName = 'light';
      selectedTheme = data.themes.light;
    }
  });

  $effect(() => {
    if (!browser) return;
    if (selectedThemeName && !editingTheme && !isCreatingNew) {
      loadThemeForEditing(selectedThemeName);
    } else if (!selectedThemeName && !editingTheme && !isCreatingNew) {
      loadThemeForEditing('light');
    }
  });

  $effect(() => {
    if (!browser) return;
    const currentThemes = untrack(() => JSON.stringify(savedThemes));
    const storedData = {
      themes: JSON.parse(currentThemes),
      selectedTheme: selectedThemeName,
      counter: themeIdCounter
    };
    localStorage.setItem('theme-generator', JSON.stringify(storedData));
  });

  function loadThemeForEditing(id) {
    editingTheme = id;
    const isBuiltIn = id in data.themes;

    // Use the original theme data if it's built-in and not modified
    const themeToEdit = (isBuiltIn && !savedThemes[id])
      ? data.themes[id]
      : savedThemes[id] || data.themes[id];

    activeThemeData = {
      id,
      name: id,
      ...JSON.parse(JSON.stringify(themeToEdit))
    };

    isCreatingNew = false;
    lastSavedThemeData = untrack(() => JSON.stringify(activeThemeData));
    selectedThemeName = id;
    selectedTheme = themeToEdit;
  }

  function createNewTheme() {
    isCreatingNew = true;
    editingTheme = null;
    themeIdCounter++;
    const themeId = `theme_${themeIdCounter}`;
    const name = nameGenerator();

    if (!validateThemeName(name)) {
      console.error('Invalid theme name generated');
      return;
    }

    // Generate random colors instead of using light theme as base
    const randomColors = randomizeThemeColors(data.tailwindcolors, data.colorPairs);

    activeThemeData = {
      id: themeId,
      name,
      ...randomColors, // Use random colors instead of data.themes.light
      default: false,
      prefersdark: false
    };
    lastSavedThemeData = null;
  }

  $effect(() => {
    if (!browser) return;
    if (!activeThemeData.id) return;

    const currentThemeData = JSON.stringify(activeThemeData);
    if (currentThemeData === lastSavedThemeData) return;

    const { id, ...themeData } = activeThemeData;
    const isBuiltIn = id in data.themes;

    // For built-in themes, only save if there are actual changes
    if (isBuiltIn) {
      const originalData = JSON.stringify(data.themes[id]);
      const newData = JSON.stringify(themeData);
      if (originalData === newData) {
        // Remove from savedThemes if it exists and matches original
        if (savedThemes[id]) {
          const { [id]: _, ...rest } = savedThemes;
          savedThemes = rest;
        }
        return;
      } else {
        // Update both data.themes and savedThemes to ensure reactivity
        data.themes[id] = { ...themeData };
        savedThemes = {
          ...savedThemes,
          [id]: { ...themeData }
        };
      }
    } else if (validateThemeName(activeThemeData.name)) {
      // Handle non-built-in themes
      savedThemes = {
        ...savedThemes,
        [id]: {
          ...JSON.parse(JSON.stringify(themeData)),
          name: activeThemeData.name
        }
      };
    }

    selectedThemeName = id;
    selectedTheme = themeData;

    if (isCreatingNew) {
      editingTheme = id;
      isCreatingNew = false;
    }

    lastSavedThemeData = currentThemeData;
    const storedData = {
      themes: savedThemes,
      selectedTheme: selectedThemeName,
      counter: themeIdCounter
    };
    localStorage.setItem('theme-generator', JSON.stringify(storedData));
  });

  function removeOrResetTheme(name) {
    const isBuiltIn = name in data.themes;
    const themeName = combinedThemes[name]?.name || name;
    const message = isBuiltIn
      ? `Reset theme "${themeName}" to default?`
      : `Delete theme "${themeName}"?`;

    if (!confirm(message)) return;

    if (isBuiltIn) {
      savedThemes = {
        ...savedThemes,
        [name]: { ...data.themes[name] }
      };
      if (editingTheme === name) {
        activeThemeData = {
          id: activeThemeData.id,
          name,
          ...data.themes[name]
        };
        lastSavedThemeData = JSON.stringify(activeThemeData);
      }
    } else {
      const { [name]: _, ...rest } = savedThemes;
      savedThemes = rest;

      if (editingTheme === name) {
        editingTheme = null;
        isCreatingNew = false;
      }
    }

    if (selectedThemeName === name) {
      if (isBuiltIn) {
        selectedTheme = data.themes[name];
      } else {
        selectedThemeName = 'light';
        selectedTheme = data.themes.light;
      }
    }

    contextMenu.show = false;

    const storedData = {
      themes: savedThemes,
      selectedTheme: selectedThemeName,
      counter: themeIdCounter
    };
    localStorage.setItem('theme-generator', JSON.stringify(storedData));
  }

  function resetBuiltInThemes() {
    if (!confirm('Reset all built-in themes to their default values?')) return;

    savedThemes = Object.entries(savedThemes).reduce((acc, [key, value]) => {
      if (!(key in data.themes)) {
        acc[key] = value;
      }
      return acc;
    }, {});

    if (selectedThemeName in data.themes) {
      selectedTheme = data.themes[selectedThemeName];
    } else {
      selectedThemeName = 'light';
      selectedTheme = data.themes.light;
    }

    const storedData = {
      themes: savedThemes,
      selectedTheme: selectedThemeName,
      counter: themeIdCounter
    };
    localStorage.setItem('theme-generator', JSON.stringify(storedData));
  }

  function deleteCustomThemes() {
    if (!confirm('Delete all custom themes?')) return;

    savedThemes = Object.entries(savedThemes).reduce((acc, [key, value]) => {
      if (key in data.themes) {
        acc[key] = value;
      }
      return acc;
    }, {});

    if (!(selectedThemeName in data.themes)) {
      selectedThemeName = 'light';
      selectedTheme = data.themes.light;
    }

    const storedData = {
      themes: savedThemes,
      selectedTheme: selectedThemeName,
      counter: themeIdCounter
    };
    localStorage.setItem('theme-generator', JSON.stringify(storedData));
  }
</script>

<svelte:window on:click={closeContextMenuOnClickOutside} />
<div class="flex flex-col md:flex-row relative">
  <div class="border-e shrink-0 w-full md:w-[15rem] border-dashed border-base-200 md:top-16 md:sticky bg-base-100 overflow-x-hidden md:h-[calc(100vh-4rem)] md:overflow-y-scroll p-4 pb-20" class:max-md:hidden={dockActiveItem!=="themes"}>
    <div class="flex gap-2 justify-between items-center mb-4">

      <h2 class="font-bold ms-2">Themes</h2>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-square btn-sm m-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 border border-base-300 rounded-box z-[1] w-48 p-2 shadow-xl">
          <li class="menu-title">Options</li>
          <li>
            <button class="text-xs" on:click={resetBuiltInThemes} title="Reset all default themes">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-error">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              Reset defaults
            </button>
          </li>
          <li>
            <button class="text-xs" on:click={deleteCustomThemes} title="Delete all custom themes">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-error">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              Delete all
            </button>
          </li>
        </ul>
      </div>

    </div>

    <ul class="menu w-full min-w-40 p-0">
      <li>
        <details open>
          <summary>Custom themes</summary>
          <ul>
            <li>
              <button class="text-xs text-base-content/60 flex border border-base-content/10 border-dashed border-2 my-2 flex-col h-20 items-center justify-center w-full" on:click={() => { createNewTheme(); document.activeElement.blur(); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Create new
              </button>
            </li>
            {#each Object.entries(savedThemes).filter(([id]) => !(id in data.themes)).reverse() as [id, theme]}
              <li>
                <button
                  class="px-2 gap-3"
                  class:menu-active={selectedThemeName === id}
                  on:click={() => loadThemeForEditing(id)}
                  on:contextmenu|preventDefault={(e) => showContextMenuForTheme(e, id)}
                >
                  <div class="grid grid-cols-2 gap-0.5 p-1 rounded-md shadow-sm shrink-0"
                    style={`background-color: ${theme['--color-base-100']}`}
                  >
                    <div
                      class="size-1 rounded-full"
                      style={`background-color: ${theme['--color-base-content']}`}
                    >
                    </div>
                    <div
                      class="size-1 rounded-full"
                      style={`background-color: ${theme['--color-primary']}`}
                    >
                    </div>
                    <div
                      class="size-1 rounded-full"
                      style={`background-color: ${theme['--color-secondary']}`}
                    >
                    </div>
                    <div
                      class="size-1 rounded-full"
                      style={`background-color: ${theme['--color-accent']}`}
                    >
                    </div>
                  </div>
                  <div class="w-32 truncate">
                    {theme.name || id}
                  </div>
                </button>
              </li>
            {/each}
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary>Built-in themes</summary>
          <ul>
            <!-- {#each themeOrder as id} -->
            {#each themesNewestFirst as [id, theme]}
              {@const currentTheme = savedThemes[id] || theme}

              {#if id in data.themes}
                <li>
                  <button
                    class="px-2 gap-3"
                    class:menu-active={selectedThemeName === id}
                    on:click={() => loadThemeForEditing(id)}
                    on:contextmenu|preventDefault={(e) => showContextMenuForTheme(e, id)}
                  >
                    <div class="grid grid-cols-2 gap-0.5 p-1 rounded-md shadow-sm shrink-0"
                      style={`background-color: ${currentTheme['--color-base-100']}`}
                    >
                      <div
                        class="size-1 rounded-full"
                        style={`background-color: ${currentTheme['--color-base-content']}`}
                      >
                      </div>
                      <div
                        class="size-1 rounded-full"
                        style={`background-color: ${currentTheme['--color-primary']}`}
                      >
                      </div>
                      <div
                        class="size-1 rounded-full"
                        style={`background-color: ${currentTheme['--color-secondary']}`}
                      >
                      </div>
                      <div
                        class="size-1 rounded-full"
                        style={`background-color: ${currentTheme['--color-accent']}`}
                      >
                      </div>
                    </div>
                    <div class="w-32 truncate">
                      {currentTheme.name || id}
                    </div>
                  </button>
                </li>
              {/if}
            {/each}
          </ul>
        </details>
      </li>
    </ul>

  </div>

  {#if isCreatingNew || editingTheme}
    <div class="flex flex-col pb-20 shrink-0 w-full md:w-[18rem] md:top-16 md:sticky bg-base-100 md:h-[calc(100vh-4rem)] md:overflow-y-scroll p-6 gap-4 items-center md:items-start" class:max-md:hidden={dockActiveItem!=="editor"}>
      <label class="input flex font-semibold text-lg input-sm w-full items-center gap-2 shrink-0">
        <input
          class="shrink w-full"
          type="text"
          bind:value={activeThemeData.name}
          placeholder="mytheme"
        />

        <svg class="justify-self-end" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </label>

      <div class="grid gap-2 grid-cols-2">
        <button
          class="btn"
          on:click={()=> {dice.rotate += 90}}
          on:click={() => {
            const newColors = randomizeThemeColors(data.tailwindcolors, data.colorPairs);
            activeThemeData = {
              ...activeThemeData,
              ...newColors
            };
          }}
        >
          <svg style:rotate={`${dice.rotate}deg`} style:transition="rotate 0.4s ease" fill="currentColor" width="16" height="16" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M192,28H64A36.04061,36.04061,0,0,0,28,64V192a36.04061,36.04061,0,0,0,36,36H192a36.04061,36.04061,0,0,0,36-36V64A36.04061,36.04061,0,0,0,192,28Zm12,164a12.01312,12.01312,0,0,1-12,12H64a12.01312,12.01312,0,0,1-12-12V64A12.01312,12.01312,0,0,1,64,52H192a12.01312,12.01312,0,0,1,12,12ZM104,88A16,16,0,1,1,88,72,16.01833,16.01833,0,0,1,104,88Zm80,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,184,88Zm-80,80a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,184,168Zm-40-40a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,144,128Z"/>
          </svg>
          Random
        </button>
        <button
          class="btn btn-primary"
          on:click={openThemeCSSModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
            <path fill-rule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clip-rule="evenodd" />
          </svg>
          Get CSS
        </button>
      </div>

      <h3 class="divider text-xs divider-start">Colors</h3>
      <div class="grid grid-cols-4 gap-4 w-fit">
        {#each [
          'base',
          'primary',
          'secondary',
          'accent',
          'neutral',
          'info',
          'success',
          'warning',
          'error',
        ] as group}
          <div
            class="flex gap-1 flex-col"
            class:col-span-4={group === 'base'}
            class:col-span-2={group !== 'base'}
          >
            <div class="flex gap-4">
              {#each Object.entries(activeThemeData) as [key, value]}
                {#if key.startsWith(`--color-${group}`)}
                  <ColorPalette
                    name={key}
                    colors={data.tailwindcolors}
                    colorInitials={data.colorInitials}
                    bind:value={activeThemeData[key]}
                    label={
                      key.endsWith('-content')
                        ? 'A'
                        : /\d/.test(key)
                          ? key.replace(`--color-${group}-`, '')
                          : ''
                    }
                    colorPairs={data.colorPairs}
                    themeColors={activeThemeData}
                  />
                {/if}
              {/each}
            </div>
            <div class="text-xs text-base-content/60">{group}</div>
          </div>
        {/each}
      </div>

      <h3 class="divider text-xs divider-start">Radius</h3>
      {#each [
        ['--radius-badge', 'Badge, toggle, etc.'],
        ['--radius-btn', 'Button, input, select, etc.'],
        ['--radius-box', 'Card, modal, etc.']
      ] as [key, label]}
        <div class="form-control w-full max-w-fit">
          <div class="text-xs mb-2 text-base-content/60" id={`${key}-group`}>{label}</div>
          <div
            class="flex gap-2"
            role="radiogroup"
            aria-labelledby={`${key}-group`}
          >
            {#each [
              '0',
              '0.25rem',
              '0.5rem',
              '1rem',
              '2rem'
            ] as value}
              <label
                class="rounded-btn overflow-hidden bg-base-200 cursor-pointer hover:bg-base-300 transition-colors relative focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-base-content"
              >
                <input
                  type="radio"
                  name={key}
                  class="sr-only"
                  bind:group={activeThemeData[key]}
                  value={value}
                  aria-label={`${value} border radius`}
                />
                <div
                  class="pt-2 pe-3"
                  aria-hidden="true"
                >
                  <div
                    class="w-8 h-6 border-e border-t border-e-2 border-t-2 border-base-content/20 bg-base-200"
                    style={`border-start-end-radius:${value}`}
                    class:border-primary={activeThemeData[key] === value}
                    class:bg-base-300={activeThemeData[key] !== value}
                  ></div>
                </div>
              </label>
            {/each}
          </div>
        </div>
      {/each}

      <h3 class="divider text-xs divider-start">Border size</h3>
      {#each [
        ['--spacing-button-border', 'Button'],
        ['--spacing-tab-border', 'Tab']
      ] as [key, label]}
        <div class="flex justify-between items-center w-[15rem]">
          <span class="text-xs text-base-content/60">{label}</span>
          <div class="join">
            {#each ['1px', '2px'] as value}
              <input
                type="radio"
                name={key}
                class="join-item btn btn-xs"
                bind:group={activeThemeData[key]}
                value={value}
                aria-label={value}
              />
            {/each}
          </div>
        </div>
      {/each}

      <h3 class="divider text-xs divider-start">Options</h3>

      <div class="flex gap-2 items-center justify-between w-[15rem]">
        <span class="text-xs flex items-center gap-1 text-base-content/60">
          Default theme
        </span>
        <label class="label cursor-pointer">
          <input
            type="checkbox"
            class="toggle toggle-sm"
            bind:checked={activeThemeData.default}
          />
        </label>
      </div>

      <div class="flex gap-2 items-center justify-between w-[15rem]">
        <span class="text-xs flex items-center gap-1 text-base-content/60">
          Default dark theme
          <div class="tooltip" data-tip="prefers-color-scheme:dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </div>
        </span>
        <label class="label cursor-pointer">
          <input
            type="checkbox"
            class="toggle toggle-sm"
            bind:checked={activeThemeData.prefersdark}
          />
        </label>
      </div>

      <div class="flex gap-2 items-center justify-between w-[15rem]">
        <span class="text-xs flex items-center gap-1 text-base-content/60">
          Color scheme
          <div class="tooltip" data-tip="Color of browser-provided UI">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </div>
        </span>
        <label class="flex gap-2 items-center cursor-pointer text-xs">
          light
          <input
            type="checkbox"
            class="toggle toggle-sm"
            checked={activeThemeData['color-scheme'] === 'dark'}
            on:change={(e) => activeThemeData['color-scheme'] = e.target.checked ? 'dark' : 'light'}
          />
          Dark
        </label>
      </div>

    </div>
  {/if}

  {#if selectedTheme}
    <div class="grow md:rounded-ss-xl overflow-hidden" class:max-md:hidden={dockActiveItem!=="preview"}>
      <div
      class="p-8 bg-base-200"
      style={Object.entries(selectedTheme)
        .filter(([key]) => !['prefersdark', 'default', 'name'].includes(key))
        .map(([key, value]) => `${key}:${value}`)
        .join(';')}
    >
        <Preview/>
      </div>
    </div>
  {/if}
</div>

<nav class="dock md:hidden">
  <button class:dock-active={dockActiveItem === "themes"} on:click={()=>{dockActiveItem='themes'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v2A1.5 1.5 0 0 0 3.5 7h2A1.5 1.5 0 0 0 7 5.5v-2A1.5 1.5 0 0 0 5.5 2h-2ZM3.5 9A1.5 1.5 0 0 0 2 10.5v2A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5v-2A1.5 1.5 0 0 0 5.5 9h-2ZM9 3.5A1.5 1.5 0 0 1 10.5 2h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2ZM10.5 9A1.5 1.5 0 0 0 9 10.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12.5 9h-2Z" />
    </svg>
    <span class="dock-label">Themes</span>
  </button>
  <button class:dock-active={dockActiveItem === "editor"} on:click={()=>{dockActiveItem='editor'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path d="M12.613 1.258a1.535 1.535 0 0 1 2.13 2.129l-1.905 2.856a8 8 0 0 1-3.56 2.939 4.011 4.011 0 0 0-2.46-2.46 8 8 0 0 1 2.94-3.56l2.855-1.904ZM5.5 8A2.5 2.5 0 0 0 3 10.5a.5.5 0 0 1-.7.459.75.75 0 0 0-.983 1A3.5 3.5 0 0 0 8 10.5 2.5 2.5 0 0 0 5.5 8Z" />
    </svg>
    <span class="dock-label">Editor</span>
  </button>
  <button class:dock-active={dockActiveItem === "preview"} on:click={()=>{dockActiveItem='preview'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path fill-rule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
    </svg>
    <span class="dock-label">Preview</span>
  </button>
</nav>


{#if contextMenu.show}
  {@const hasActions = (contextMenu.themeId in data.themes &&
    savedThemes[contextMenu.themeId] &&
    JSON.stringify(savedThemes[contextMenu.themeId]) !== JSON.stringify(data.themes[contextMenu.themeId])) ||
    (!(contextMenu.themeId in data.themes) && savedThemes[contextMenu.themeId])}

  {#if hasActions}
    <div
      class="context-menu fixed z-50"
      style="left: {contextMenu.x}px; top: {contextMenu.y}px"
    >
      <ul class="menu bg-base-100 border border-base-200 w-48 rounded-box shadow-2xl">
        <li class="menu-title">{combinedThemes[contextMenu.themeId]?.name || contextMenu.themeId}</li>
        <li>
          <button on:click={() => removeOrResetTheme(contextMenu.themeId)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="text-error size-4">
              <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />
            </svg>
            {contextMenu.themeId in data.themes ? 'Reset to default' : 'Delete'}
          </button>
        </li>
      </ul>
    </div>
  {/if}
{/if}


<dialog bind:this={themeCSSModal} class="modal max-md:modal-bottom">
  <div class="modal-box border border-base-300 md:max-w-[40rem] max-sm:modal-bottom">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-bold">Add this to your CSS file</h3>
      <button class="btn btn-sm" on:click={copyThemeCSSToClipboard}>
        {#if isClipboardButtonPressed}
						<svg
							class="h-5 w-5 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
						>
							<path
								d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z"
							>
							</path>
						</svg>
					{:else}
						<svg
							class="h-5 w-5 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
						>
							<path
								d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"
							>
							</path>
						</svg>
					{/if}
        Copy to clipboard
      </button>
    </div>
    <textarea
      spellcheck="false"
      data-theme="dark"
      class="block resize-none textarea textarea-border w-full max-w-none h-96 font-mono textarea-xs min-h-80"
      bind:value={themeCSS}
      on:input={(e) => {
        const newThemeData = parseThemeCSS(e.target.value, activeThemeData)
        if (newThemeData) {
          activeThemeData = newThemeData
        }
      }}
    ></textarea>
  </div>
  <div class="modal-backdrop" on:click={() => themeCSSModal.close()}></div>
</dialog>
