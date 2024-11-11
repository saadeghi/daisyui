<script>
  import ColorPalette from "$components/ColorPalette.svelte"
  import Preview from "$components/themegenerator/Preview.svelte"
  import ThemeCSSModal from "$components/themegenerator/ThemeCSSModal.svelte";
  import Dock from "$components/themegenerator/Dock.svelte";
  import ThemeListItem from "$components/themegenerator/ThemeListItem.svelte";
  import { nameGenerator } from "$lib/nameGenerator"
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

  function openThemeCSSModal() {
    const baseProps = [
      `  name: "${activeThemeData.name}";`,
      `  color-scheme: "${activeThemeData['color-scheme']}";`,
      `  default: ${activeThemeData.default | false};`,
      `  prefersdark: ${activeThemeData.prefersdark | false};`,
    ];

    const cssProps = Object.entries(activeThemeData)
        .filter(([key]) => key.startsWith('--color'))
        .map(([key, value]) => `  ${key}: ${value};`);
    const radiusProps = Object.entries(activeThemeData)
        .filter(([key]) => key.startsWith('--radius'))
        .map(([key, value]) => `  ${key}: ${value};`);
    const borderProps = Object.entries(activeThemeData)
        .filter(([key]) => key.startsWith('--spacing'))
        .map(([key, value]) => `  ${key}: ${value};`);
    themeCSS = `@plugin "daisyui/theme" {\n${baseProps.join('\n')}\n${cssProps.join('\n')}\n${radiusProps.join('\n')}\n${borderProps.join('\n')}\n}`;

    if (themeCSSModal) {
      themeCSSModal.showModal();
    }
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
          else console.error(`Invalid theme structure for theme ${key}. Skipping.`);
          return acc;
        }, {});
        savedThemes = validatedThemes;

        if (validateThemeName(parsed.selectedTheme)) {
          selectedThemeName = parsed.selectedTheme;
          const themes = untrack(() => ({ ...data.themes, ...savedThemes }));
          selectedTheme = themes[parsed.selectedTheme];
        } else {
          console.error(`Invalid selected theme name: ${parsed.selectedTheme}. Falling back to 'light'.`);
          selectedThemeName = 'light';
          selectedTheme = data.themes.light;
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
    const isBuiltIn = id in data.themes;

    if (isBuiltIn) {
      // Generate a unique custom theme ID for the selected built-in theme
      themeIdCounter++;
      const customThemeId = `theme_${themeIdCounter}`;
      savedThemes = {
        [customThemeId]: { ...data.themes[id], name: nameGenerator() },
        ...savedThemes,
      };
      id = customThemeId;
    }

    editingTheme = id;
    const themeToEdit = savedThemes[id] || data.themes[id];

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
    // Generate a unique theme ID
    themeIdCounter++;
    const themeId = `theme_${themeIdCounter}`;

    // Generate a new theme name
    const name = nameGenerator();

    // Check if the generated name is already used
    if (themeId in savedThemes || themeId in data.themes) {
      console.error('Generated theme name already exists. Skipping theme creation.');
      return;
    }

    // Generate random colors instead of using light theme as base
    const randomColors = randomizeThemeColors(data.tailwindcolors, data.colorPairs);

    activeThemeData = {
      id: themeId,
      name,
      ...randomColors,
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

    if (!isBuiltIn) {
      // Handle non-built-in (custom) themes
      savedThemes = {
        [id]: {
          ...JSON.parse(JSON.stringify(themeData)),
          name: activeThemeData.name
        },
        ...savedThemes,
      };

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
    } else {
      // For built-in themes, only save if there are actual changes
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
          [id]: { ...themeData },
          ...savedThemes,
        };
      }
    }
  });

  function removeTheme(name) {

    if (!confirm(`Delete theme "${name}"?`)) return;

    const { [name]: _, ...rest } = savedThemes;
    savedThemes = rest;

    if (editingTheme === name) {
      editingTheme = null;
      isCreatingNew = false;
    }

    if (selectedThemeName === name) {
      // Sort themeList based on themesNewestFirst order
      const themeList = Object.keys(combinedThemes).sort((a, b) => {
        const aIndex = themesNewestFirst.findIndex(([id]) => id === a);
        const bIndex = themesNewestFirst.findIndex(([id]) => id === b);
        return aIndex - bIndex;
      });

      const currentIndex = themeList.indexOf(name);
      const newIndex = currentIndex < themeList.length - 1 ? currentIndex + 1 : currentIndex - 1;
      const newSelectedTheme = newIndex >= 0 ? themeList[newIndex] : 'light';

      selectedThemeName = newSelectedTheme;
      selectedTheme = combinedThemes[newSelectedTheme];
    }
  }

  // Add an effect to handle localStorage updates
  $effect(() => {
    const storedData = {
      themes: JSON.parse(JSON.stringify(savedThemes)),
      selectedTheme: selectedThemeName,
      counter: themeIdCounter
    };
    localStorage.setItem('theme-generator', JSON.stringify(storedData));
  });

  function deleteCustomThemes() {
    if (!confirm('Delete all custom themes?')) return;

    savedThemes = Object.entries(savedThemes).reduce((acc, [key, value]) => {
      if (key in data.themes) {
        acc[key] = value;
      } else {
        console.error(`Deleting custom theme: ${key}`);
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

<div class="flex flex-col md:flex-row relative">
  <div style="scroll-behavior: smooth" id="themelist" class="border-e shrink-0 w-full md:w-[15rem] border-dashed border-base-200 md:top-16 md:sticky bg-base-100 overflow-x-hidden md:h-[calc(100vh-4rem)] md:overflow-y-scroll p-4 pb-20" class:max-md:hidden={dockActiveItem!=="themes"}>
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
        <button class="btn bg-auto" on:click={() => { createNewTheme(); document.activeElement.blur(); }} style="background-image: radial-gradient(ellipse at 50% 270%, #0069ff47, transparent 60%), radial-gradient(ellipse at 20% 150%, #00ffca47, transparent 60%), radial-gradient(ellipse at 70% 200%, #6a00ff47, transparent 60%);">
          <svg class="size-5" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M29.5856 18.4143L5.54395 42.4559" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path></svg>
          <span>Create new theme</span>
        </button>
      </li>
      <li class="menu-title mt-6">Custom themes</li>

      {#each Object.entries(savedThemes).filter(([id]) => !(id in data.themes)) as [id, theme]}
        <ThemeListItem
          id={id}
          theme={theme}
          selectedThemeName={selectedThemeName}
          loadThemeForEditing={loadThemeForEditing}
        />
      {/each}
      <li></li>
      <li class="menu-title">daisyUI themes</li>
      {#each themesNewestFirst as [id, theme]}
        {@const currentTheme = savedThemes[id] || theme}

        {#if id in data.themes}
          <ThemeListItem
            id={id}
            theme={currentTheme}
            selectedThemeName={selectedThemeName}
            loadThemeForEditing={loadThemeForEditing}
          />
        {/if}
      {/each}
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

      <div class="grid gap-2 grid-cols-2 w-full">
        <button
          class="btn group"
          on:click={()=> {dice.rotate += 90}}
          on:click={() => {
            const newColors = randomizeThemeColors(data.tailwindcolors, data.colorPairs);
            activeThemeData = {
              ...activeThemeData,
              ...newColors
            };
          }}
        >
          <svg class="group-active:scale-95" style:rotate={`${dice.rotate}deg`} style:transition="rotate 0.4s ease" fill="currentColor" width="16" height="16" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M192,28H64A36.04061,36.04061,0,0,0,28,64V192a36.04061,36.04061,0,0,0,36,36H192a36.04061,36.04061,0,0,0,36-36V64A36.04061,36.04061,0,0,0,192,28Zm12,164a12.01312,12.01312,0,0,1-12,12H64a12.01312,12.01312,0,0,1-12-12V64A12.01312,12.01312,0,0,1,64,52H192a12.01312,12.01312,0,0,1,12,12ZM104,88A16,16,0,1,1,88,72,16.01833,16.01833,0,0,1,104,88Zm80,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,184,88Zm-80,80a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,184,168Zm-40-40a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,144,128Z"/>
          </svg>
          Random
        </button>
        <button
          class="btn btn-neutral"
          on:click={openThemeCSSModal}
        >
        <svg fill="currentColor" width="16px" height="16px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
          <path d="M54.79785,119.48535A34.95033,34.95033,0,0,1,49.05078,128a34.95033,34.95033,0,0,1,5.74707,8.51465C60,147.24414,60,159.8291,60,172c0,25.93652,1.84424,32,20,32a12,12,0,0,1,0,24c-19.14453,0-32.19775-6.90234-38.79785-20.51465C36,196.75586,36,184.1709,36,172c0-25.93652-1.84424-32-20-32a12,12,0,0,1,0-24c18.15576,0,20-6.06348,20-32,0-12.1709,0-24.75586,5.20215-35.48535C47.80225,34.90234,60.85547,28,80,28a12,12,0,0,1,0,24c-18.15576,0-20,6.06348-20,32C60,96.1709,60,108.75586,54.79785,119.48535ZM240,116c-18.15576,0-20-6.06348-20-32,0-12.1709,0-24.75586-5.20215-35.48535C208.19775,34.90234,195.14453,28,176,28a12,12,0,0,0,0,24c18.15576,0,20,6.06348,20,32,0,12.1709,0,24.75586,5.20215,35.48535A34.95033,34.95033,0,0,0,206.94922,128a34.95033,34.95033,0,0,0-5.74707,8.51465C196,147.24414,196,159.8291,196,172c0,25.93652-1.84424,32-20,32a12,12,0,0,0,0,24c19.14453,0,32.19775-6.90234,38.79785-20.51465C220,196.75586,220,184.1709,220,172c0-25.93652,1.84424-32,20-32a12,12,0,0,0,0-24Z"/>
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
      {#each data.radiusValues as [key, label, values]}
        <div class="form-control w-full max-w-fit">
          <div class="text-xs mb-2 text-base-content/60" id={`${key}-group`}>{label}</div>
          <div
            class="flex gap-2"
            role="radiogroup"
            aria-labelledby={`${key}-group`}
          >
            {#each values as value}
              <label
                class="rounded-btn overflow-hidden bg-base-200 cursor-pointer hover:bg-base-300 transition-colors relative focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-base-content"
                title={value}
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

      <h3 class="divider text-xs divider-start"></h3>

      <button class="btn btn-block text-error" on:click={() => removeTheme(activeThemeData.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-error">
          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        Delete theme
      </button>

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

<Dock bind:dockActiveItem={dockActiveItem} />

<ThemeCSSModal
  bind:themeCSSModal={themeCSSModal}
  bind:themeCSS={themeCSS}
  activeThemeData={activeThemeData}
/>
