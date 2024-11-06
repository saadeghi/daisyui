<script>
  import ColorPalette from "$components/ColorPalette.svelte"
  import Preview from "$components/themegenerator/Preview.svelte"
  import { nameGenerator } from "$lib/nameGenerator"
  import { parseThemeCSS } from "$lib/themeGeneratorCssParser"
  import { randomizeThemeColors } from "$lib/themeGeneratorRandomizer"
  import {validateThemeName,validateThemeStructure } from "$lib/themeGeneratorValidation"
  import themeOrder from "../../../../../../functions/themeOrder"
  import { browser } from '$app/environment';
  import { untrack } from 'svelte';
  const { data } = $props();

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
  let isThemeCSSModalOpen = $state(false);
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

  function isThemeModified(themeId) {
    if (!(themeId in data.themes)) {
      // Custom themes are always considered modified
      return true;
    }

    if (!savedThemes[themeId]) {
      // Built-in theme with no saved version is not modified
      return false;
    }

    // Compare saved version with original
    return JSON.stringify(savedThemes[themeId]) !== JSON.stringify(data.themes[themeId]);
  }

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
    isThemeCSSModalOpen = true;
  }

  function copyThemeCSSToClipboard() {
    navigator.clipboard.writeText(themeCSS)
      .then(() => alert('CSS copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));
  }

  $effect(() => {
    if (!browser) return;
    try {
      const storedThemes = localStorage.getItem('daisyUI-5-theme-generator-custom-themes');
      const storedSelectedTheme = localStorage.getItem('daisyUI-5-theme-generator-selected-theme');

      if (storedThemes) {
        const parsed = JSON.parse(storedThemes);
        const validated = Object.entries(parsed).reduce((acc, [key, value]) => {
          const sanitized = validateThemeStructure(value);
          if (sanitized) acc[key] = sanitized;
          return acc;
        }, {});
        savedThemes = validated;
      }

      if (storedSelectedTheme && validateThemeName(storedSelectedTheme)) {
        selectedThemeName = storedSelectedTheme;
        const themes = untrack(() => ({ ...data.themes, ...savedThemes }));
        selectedTheme = themes[storedSelectedTheme];
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
    localStorage.setItem('daisyUI-5-theme-generator-custom-themes', currentThemes);
  });

  $effect(() => {
    if (!browser || !selectedThemeName) return;
    localStorage.setItem('daisyUI-5-theme-generator-selected-theme', selectedThemeName);
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
    const randomColors = randomizeThemeColors(data.tailwindcolors, data.assignedBgColors);

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
      }
    }

    if (validateThemeName(activeThemeData.name)) {
      savedThemes = {
        ...untrack(() => savedThemes),
        [id]: {
          ...JSON.parse(JSON.stringify(themeData)),
          name: activeThemeData.name
        }
      };

      selectedThemeName = id;
      selectedTheme = themeData;

      if (isCreatingNew) {
        editingTheme = id;
        isCreatingNew = false;
      }

      lastSavedThemeData = currentThemeData;
      localStorage.setItem('daisyUI-5-theme-generator-custom-themes', JSON.stringify(savedThemes));
    }
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
      localStorage.setItem('daisyUI-5-theme-generator-custom-themes', JSON.stringify(savedThemes));
    } else {
      const { [name]: _, ...rest } = savedThemes;
      savedThemes = rest;
      localStorage.setItem('daisyUI-5-theme-generator-custom-themes', JSON.stringify(rest));

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
        if (browser) {
          localStorage.setItem('daisyUI-5-theme-generator-selected-theme', 'light');
        }
      }
    }

    contextMenu.show = false;
  }
</script>
<svelte:window on:click={closeContextMenuOnClickOutside} />
<div class="flex">
  <div class="border-e shrink-0 w-[15rem] border-dashed border-base-200 top-16 sticky h-[calc(100vh-4rem)] overflow-y-scroll p-6 pb-20">
    <h2 class="text-lg font-bold mb-4">Themes</h2>
    <button
      class="btn btn-primary mb-4 w-full"
      on:click={createNewTheme}
    >
      Create New Theme
    </button>

    <ul class="menu w-full min-w-40 p-0">
      {#each themesNewestFirst as [id, theme]}
        {@const currentTheme = savedThemes[id] || theme}
        <li>
          <button
            class="px-2 gap-3"
            class:menu-active={selectedThemeName === id}
            on:click={() => loadThemeForEditing(id)}
            on:contextmenu|preventDefault={(e) => showContextMenuForTheme(e, id)}
          >
            <div class="grid grid-cols-2 gap-0.5 p-1 rounded-md shadow-sm"
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
      {/each}
    </ul>

  </div>

  {#if isCreatingNew || editingTheme}
    <div class="flex flex-col pb-20 shrink-0 w-[18rem] top-16 sticky h-[calc(100vh-4rem)] overflow-y-scroll p-6 gap-4 border-e border-dashed border-base-200">
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

      <button
        class="btn btn-ghost btn-sm btn-square"
        on:click={() => {
          const newColors = randomizeThemeColors(data.tailwindcolors, data.assignedBgColors);
          activeThemeData = {
            ...activeThemeData,
            ...newColors
          };
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="fill-current">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
          <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
        </svg>
      </button>

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
                    bind:value={activeThemeData[key]}
                    label={
                      key.endsWith('-content')
                        ? 'A'
                        : /\d/.test(key)
                          ? key.replace(`--color-${group}-`, '')
                          : ''
                    }
                    background={data.assignedBgColors[key] ? activeThemeData[data.assignedBgColors[key]] : undefined}
                    textColor={data.assignerFgColors[key] ? activeThemeData[data.assignerFgColors[key]] : undefined}
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
        <div class="form-control w-full">
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
        <div class="flex justify-between items-center">
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

      <div class="flex gap-2 items-center justify-between">
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

      <div class="flex gap-2 items-center justify-between">
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

      <div class="flex gap-2 items-center justify-between">
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

      <h3 class="divider"></h3>

      <button
        class="btn btn-primary"
        on:click={openThemeCSSModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
          <path fill-rule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clip-rule="evenodd" />
        </svg>
        Get CSS
      </button>

      {#if isThemeCSSModalOpen}
        <dialog class="modal" open>
          <div class="modal-box border border-base-300 sm:max-w-[40rem] max-sm:modal-bottom">
            <h3 class="font-bold text-lg mb-4">Add this to your CSS file</h3>
            <textarea
              data-theme="dark"
              class="textarea textarea-border w-full max-w-none h-96 font-mono textarea-xs min-h-96"
              bind:value={themeCSS}
              on:input={(e) => {
                const newThemeData = parseThemeCSS(e.target.value, activeThemeData)
                if (newThemeData) {
                  activeThemeData = newThemeData
                }
              }}
            ></textarea>
            <div class="modal-action">
              <button class="btn btn-sm" on:click={copyThemeCSSToClipboard}>
                Copy to Clipboard
              </button>
              <button class="btn btn-sm" on:click={() => isThemeCSSModalOpen = false}>
                Close
              </button>
            </div>
          </div>
          <div class="modal-backdrop" on:click={() => isThemeCSSModalOpen = false}></div>
        </dialog>
      {/if}
    </div>
  {/if}

  {#if selectedTheme}
    <div class="p-8 grow">
      <div
      class="p-8"
      style={Object.entries(selectedTheme)
        .map(([key, value]) => `${key}:${value}`)
        .join(';')}
      >
        <Preview/>
      </div>
    </div>
  {/if}
</div>


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
