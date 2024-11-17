<script>
  import SEO from "$components/SEO.svelte"
  import ColorPalette from "$components/ColorPalette.svelte";
  import Preview from "$components/themegenerator/Preview.svelte";
  import ThemeCSSModal from "$components/themegenerator/ThemeCSSModal.svelte";
  import Dock from "$components/themegenerator/Dock.svelte";
  import ThemeListItem from "$components/themegenerator/ThemeListItem.svelte";
  import { nameGenerator } from "$lib/nameGenerator";
  import { randomizeThemeColors } from "$lib/themeGeneratorRandomizer";
  import { validateThemeName, validateThemeStructure } from "$lib/themeGeneratorValidation";
  import { browser } from '$app/environment';

  const { data } = $props();
  let showCssModal = $state(false);
  let dice = $state({ rotate: 0 });
  let dockActiveItem = $state("themes");
  let themeCSS = $state('');

  const getStoredThemesByType = (type) => {
    if (!browser) return [];
    return JSON.parse(localStorage.getItem('gen-themes') || '[]').filter(item => item.type === type);
  }

  let builtinThemes = $state(getStoredThemesByType('builtin'));
  let customThemes = $state(getStoredThemesByType('custom'));
  let currentTheme = $state({});
  let themes = $derived([...builtinThemes, ...customThemes]);

  let currentThemeStyle = $derived.by(() => {
    let styleString = Object.entries(currentTheme)
      .filter(([key]) => !['prefersdark', 'default', 'name'].includes(key))
      .map(([key, value]) => `${key}:${value}`)
      .join(';');
    return styleString;
  });

  $effect.pre(() => {
    builtinThemes = data.builtinThemes;
    const LSthemes = localStorage.getItem('gen-themes');
    if (LSthemes) {
      builtinThemes = JSON.parse(LSthemes).filter(item => item.type === 'builtin');
    }
    const LSthemeId = localStorage.getItem('gen-theme-id');
    if (LSthemeId && JSON.parse(LSthemes).some(item => item.id === LSthemeId)) {
      currentTheme = JSON.parse(LSthemes).find(item => item.id === LSthemeId);
    } else {
      const lightTheme = themes.find(item => item.name === 'light');
      currentTheme = lightTheme;
    }
  });

  $effect(() => {
    const allValid = themes.every(theme => validateThemeName(theme.name) && validateThemeStructure(theme));
    if (allValid) {
      localStorage.setItem('gen-themes', JSON.stringify(themes));
      localStorage.setItem('gen-theme-id', currentTheme.id);
    }
    if (validateThemeName(currentTheme.name) && validateThemeStructure(currentTheme)) {
      currentTheme = themes.find(item => item.id === currentTheme.id);
    }
  });



  const loadTheme = (id) => {
    currentTheme = themes.find(theme => theme.id === id);
  };

  const random = () => {
    const updateThemeColors = (themes) => {
      return themes.map(theme => {
        if (theme.id !== currentTheme.id) {
          return theme;
        }
        return { ...theme, ...randomizeThemeColors(data.tailwindcolors, data.colorPairs) };
      });
    };
    if (currentTheme.type === 'builtin') {
      builtinThemes = updateThemeColors(builtinThemes);
    } else if (currentTheme.type === 'custom') {
      customThemes = updateThemeColors(customThemes);
    }
  };

  const openThemeCSSModal=()=> {
    themeCSS = generateCSS(currentTheme);
    showCssModal = true
  }

  const createNewTheme=()=> {
    const newTheme = {
      id: crypto.randomUUID(),
      name: nameGenerator(),
      type: 'custom',
      ...randomizeThemeColors(data.tailwindcolors, data.colorPairs),
      default: false,
      prefersdark: false,
    };
    customThemes = [newTheme,...customThemes];
    currentTheme = newTheme;
  }

  const remove = (id, type) => {
    if (type === 'builtin') {
      const index = builtinThemes.findIndex(item => item.id === id);
      if (index !== -1) {
        if (confirm(`Reset "${currentTheme.name}" themes to default?`)) {
          builtinThemes[index] = data.builtinThemes[index];
          currentTheme = data.builtinThemes[index];
        }
      }
    } else if (type === 'custom') {
      if (confirm(`Remove "${currentTheme.name}" themes?`)) {
        customThemes = customThemes.filter(item => item.id !== id);
        currentTheme = themes[0];
      }
    }
  }

  const removeAll = () => {
    if (confirm("Remove all custom themes?")) {
      customThemes = [];
      currentTheme = themes[0];
    }
  }

  const resetAll = () => {
    if (confirm("Reset all themes to default?")) {
      builtinThemes = data.builtinThemes;
      currentTheme = data.builtinThemes[0];
    }
  }

  const generateCSS = (theme) => {
    const baseProps = [
      `  name: "${theme.name}";`,
      `  default: ${theme.default ? "true" : "false"};`,
      `  prefersdark: ${theme.prefersdark ? "true" : "false"};`,
      `  color-scheme: "${theme['color-scheme']}";`,
    ];
    const cssProps = Object.entries(theme)
        .filter(([key]) => key.startsWith('--color'))
        .map(([key, value]) => `  ${key}: ${value};`);
    const radiusProps = Object.entries(theme)
        .filter(([key]) => key.startsWith('--radius'))
        .map(([key, value]) => `  ${key}: ${value};`);
    const borderProps = Object.entries(theme)
        .filter(([key]) => key.startsWith('--spacing'))
        .map(([key, value]) => `  ${key}: ${value};`);
    return `@plugin "daisyui/theme" {\n${baseProps.join('\n')}\n${cssProps.join('\n')}\n${radiusProps.join('\n')}\n${borderProps.join('\n')}\n}\n`;
  }


</script>

<SEO title="daisyUI and Tailwind CSS theme generator" desc="OKLCH Theme Generator for daisyUI and Tailwind CSS" />

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
        <ul tabindex="0" class="dropdown-content menu bg-base-100 border border-base-300 rounded-box z-[1] w-52 p-2 shadow-xl">
          <li class="menu-title">Options</li>
          <li>
            <button class="text-xs" onclick={removeAll}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-error">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              Remove my themes
            </button>
          </li>
          <li>
            <button class="text-xs" onclick={resetAll}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-error">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
              Reset daisyUI themes
            </button>
        </ul>
      </div>

    </div>

    <ul class="menu w-full min-w-40 p-0">
      <li>
        <button class="btn bg-auto" onclick={() => { createNewTheme(); document.activeElement.blur(); }} style="background-image: radial-gradient(ellipse at 50% 270%, #0069ff47, transparent 60%), radial-gradient(ellipse at 20% 150%, #00ffca47, transparent 60%), radial-gradient(ellipse at 70% 200%, #6a00ff47, transparent 60%);">
          <svg class="size-5" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path><path d="M29.5856 18.4143L5.54395 42.4559" stroke="currentColor" stroke-width="4" stroke-linecap="butt" stroke-linejoin="bevel"></path></svg>
          <span>Create new theme</span>
        </button>
      </li>
      <li class="menu-title mt-6">My themes</li>
      {#each themes?.filter(item => item.type === 'custom') as theme}
        <ThemeListItem
          id={theme.id}
          type={theme.type}
          theme={theme}
          isCurrent={currentTheme.id === theme.id && currentTheme.type === theme.type}
          loadTheme={() => loadTheme(theme.id)}
        />
      {:else}
        <li class="menu-disabled"><div>&nbsp;</div></li>
      {/each}
      <li></li>
      <li class="menu-title">daisyUI themes</li>
      {#each themes?.filter(item => item.type === 'builtin') as theme}
        <ThemeListItem
          id={theme.id}
          type={theme.type}
          theme={theme}
          isCurrent={currentTheme.id === theme.id && currentTheme.type === theme.type}
          loadTheme={() => loadTheme(theme.id)}
        />
      {/each}
    </ul>

  </div>

  <div class="flex flex-col pb-20 shrink-0 w-full md:w-[18rem] md:top-16 md:sticky bg-base-100 md:h-[calc(100vh-4rem)] md:overflow-y-scroll p-6 gap-4 items-center md:items-start" class:max-md:hidden={dockActiveItem!=="editor"}>
    <label class="input flex font-semibold text-lg input-sm w-full items-center gap-2 shrink-0">
      <input
        class="shrink w-full"
        type="text"
        bind:value={currentTheme.name}
        placeholder="mytheme"
      />

      <svg class="justify-self-end" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </label>

    <div class="grid gap-2 grid-cols-2 w-full">
      <button
        class="btn group"
        onclick={() => {
          dice.rotate += 90;
          random()
        }}
      >
        <svg class="group-active:scale-95" style:rotate={`${dice.rotate}deg`} style:transition="rotate 0.4s ease" fill="currentColor" width="16" height="16" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="M192,28H64A36.04061,36.04061,0,0,0,28,64V192a36.04061,36.04061,0,0,0,36,36H192a36.04061,36.04061,0,0,0,36-36V64A36.04061,36.04061,0,0,0,192,28Zm12,164a12.01312,12.01312,0,0,1-12,12H64a12.01312,12.01312,0,0,1-12-12V64A12.01312,12.01312,0,0,1,64,52H192a12.01312,12.01312,0,0,1,12,12ZM104,88A16,16,0,1,1,88,72,16.01833,16.01833,0,0,1,104,88Zm80,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,184,88Zm-80,80a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,184,168Zm-40-40a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,144,128Z"/>
        </svg>
        Random
      </button>
      <button
        class="btn btn-neutral"
        onclick={()=>openThemeCSSModal()}
      >
      <svg fill="currentColor" width="16px" height="16px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
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
            {#each Object.entries(currentTheme) as [key, value]}
              {#if key.startsWith(`--color-${group}`)}
                <ColorPalette
                  name={key}
                  colors={data.tailwindcolors}
                  colorInitials={data.colorInitials}
                  bind:value={currentTheme[key]}
                  label={
                    key.endsWith('-content')
                      ? 'A'
                      : /\d/.test(key)
                        ? key.replace(`--color-${group}-`, '')
                        : ''
                  }
                  colorPairs={data.colorPairs}
                  themeColors={currentTheme}
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
              class="rounded-btn overflow-hidden bg-base-200 cursor-pointer hover:bg-base-300 transition-colors relative focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-base-content"
              title={value}
            >
              <input
                type="radio"
                name={key}
                class="sr-only"
                bind:group={currentTheme[key]}
                value={value}
                aria-label={`${value} border radius`}
              />
              <div
                class="pt-2 pe-3"
                aria-hidden="true"
              >
                <div
                  class="w-8 h-6 border-e-2 border-t-2 border-base-content/20 bg-base-200"
                  style={`border-start-end-radius:${value}`}
                  class:border-primary={currentTheme[key] === value}
                  class:bg-base-300={currentTheme[key] !== value}
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
              bind:group={currentTheme[key]}
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
          bind:checked={currentTheme.default}
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
          bind:checked={currentTheme.prefersdark}
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
          checked={currentTheme['color-scheme'] === 'dark'}
          onchange={(e) => currentTheme['color-scheme'] = e.target.checked ? 'dark' : 'light'}
        />
        Dark
      </label>
    </div>

    <div class="divider text-xs divider-start"></div>

    <button class="btn btn-block text-error" onclick={() => remove(currentTheme.id, currentTheme.type)}>
      {#if currentTheme.type === 'builtin'}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
        </svg>
        Reset theme
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-error">
          <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        Remove theme
      {/if}
    </button>
  </div>

  <div class="grow md:rounded-ss-xl overflow-hidden" class:max-md:hidden={dockActiveItem!=="preview"}>
    <div
      class="p-8 bg-base-200"
      style={currentThemeStyle}
    >
      <Preview/>
    </div>
  </div>
</div>

<Dock bind:dockActiveItem={dockActiveItem} />

<ThemeCSSModal
  bind:showCssModal
  bind:themeCSS={themeCSS}
  bind:currentTheme={currentTheme}
  builtinThemes={builtinThemes}
  customThemes={customThemes}
/>
