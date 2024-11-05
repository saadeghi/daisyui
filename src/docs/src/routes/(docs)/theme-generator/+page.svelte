<script>
  import ColorPalette from "$components/ColorPalette.svelte"
  import { nameGenerator } from "$lib/nameGenerator"
  import { browser } from '$app/environment';
  import { untrack } from 'svelte';
  const { data } = $props();

  let themeIdCounter = $state(1);
  let savedThemes = $state({});
  let selectedTheme = $state(null);
  let selectedThemeName = $state(null);
  let editingTheme = $state(null);
  let isCreatingNew = $state(false);
  let formData = $state({
    id: themeIdCounter,
    ...data.themes.light,
    default: false,
    prefersdark: false
  });
  let lastSavedFormData = $state(null);

  let isCssModalOpen = $state(false);
  let cssText = $state('');

  function openCssModal() {
    const baseProps = [
      `  name: "${formData.name}";`,
      `  color-scheme: "${formData['color-scheme']}";`,
      `  default: ${formData.default};`,
      `  prefersdark: ${formData.prefersdark};`,
    ];

    const cssProps = Object.entries(formData)
      .filter(([key]) => key.startsWith('--'))
      .map(([key, value]) => `  ${key}: ${value};`);

    cssText = `@plugin "daisyui/theme" {\n${baseProps.join('\n')}\n${cssProps.join('\n')}\n}`;
    isCssModalOpen = true;
  }

  function parseCssText(text) {
    try {
      // Extract properties from CSS text
      const props = text.match(/[^{]*\{([^}]*)\}/)[1]
        .split(';')
        .map(prop => prop.trim())
        .filter(Boolean);

      const newFormData = { ...formData };

      props.forEach(prop => {
        const [key, value] = prop.split(':').map(s => s.trim());
        if (key === 'name') {
          newFormData.name = value.replace(/['"]/g, '');
        } else if (key === 'color-scheme') {
          newFormData['color-scheme'] = value.replace(/['"]/g, '');
        } else if (key === 'default') {
          newFormData.default = value === 'true';
        } else if (key === 'prefersdark') {
          newFormData.prefersdark = value === 'true';
        } else if (key.startsWith('--')) {
          newFormData[key] = value;
        }
      });

      formData = newFormData;
    } catch (error) {
      console.error('Failed to parse CSS:', error);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(cssText)
      .then(() => alert('CSS copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));
  }

  let allThemes = $derived({ ...data.themes, ...savedThemes });

  $effect(() => {
    if (!browser) return;
    const storedThemes = localStorage.getItem('userThemes');
    const storedSelectedTheme = localStorage.getItem('selectedTheme');

    if (storedThemes) {
      savedThemes = JSON.parse(storedThemes);
    }

    if (storedSelectedTheme) {
      selectedThemeName = storedSelectedTheme;
      const themes = untrack(() => ({ ...data.themes, ...savedThemes }));
      selectedTheme = themes[storedSelectedTheme];
    }
  });
  $effect(() => {
    if (!browser) return;
    if (selectedThemeName && !editingTheme && !isCreatingNew) {
      startEditing(selectedThemeName);
    } else if (!selectedThemeName && !editingTheme && !isCreatingNew) {
      startEditing('light');
    }
  });

  $effect(() => {
    if (!browser) return;
    const currentThemes = untrack(() => JSON.stringify(savedThemes));
    localStorage.setItem('userThemes', currentThemes);
  });

  $effect(() => {
    if (!browser || !selectedThemeName) return;
    localStorage.setItem('selectedTheme', selectedThemeName);
  });

  function startEditing(id) {
    editingTheme = id;
    const isBuiltIn = id in data.themes;

    // If it's a built-in theme and hasn't been modified yet, create an entry in savedThemes
    if (isBuiltIn && !(id in savedThemes)) {
      savedThemes = {
        ...savedThemes,
        [id]: {
          ...JSON.parse(JSON.stringify(data.themes[id])),
          name: id
        }
      };
    }

    // Use the saved version if it exists, otherwise use the built-in version
    const themeToEdit = savedThemes[id] || data.themes[id];

    formData = {
      id,
      name: id,
      ...JSON.parse(JSON.stringify(themeToEdit))
    };

    isCreatingNew = false;
    lastSavedFormData = untrack(() => JSON.stringify(formData));
    selectedThemeName = id;
    selectedTheme = themeToEdit;
  }

  function startCreatingNew() {
    isCreatingNew = true;
    editingTheme = null;
    themeIdCounter++;
    const themeId = `theme_${themeIdCounter}`;
    formData = {
      id: themeId,
      name: nameGenerator(),
      ...data.themes.light,
      default: false,
      prefersdark: false
    };
    lastSavedFormData = null;
  }

  $effect(() => {
    if (!browser) return;
    if (!formData.id) return;

    const currentFormData = JSON.stringify(formData);
    if (currentFormData === lastSavedFormData) return;

    const { id, ...themeData } = formData;

    if (formData.name && formData.name.length >= 3) {
      // Always save to savedThemes, even for built-in themes
      savedThemes = {
        ...untrack(() => savedThemes),
        [id]: {
          ...JSON.parse(JSON.stringify(themeData)),
          name: formData.name
        }
      };

      selectedThemeName = id;
      selectedTheme = themeData;

      if (isCreatingNew) {
        editingTheme = id;
        isCreatingNew = false;
      }

      lastSavedFormData = currentFormData;

      localStorage.setItem('userThemes', JSON.stringify(savedThemes));
    }
  });

  function deleteTheme(name) {
    const isBuiltIn = name in data.themes;
    const message = isBuiltIn
      ? `Reset theme "${name}" to default?`
      : `Delete theme "${name}"?`;

    if (!confirm(message)) return;

    if (isBuiltIn) {
      savedThemes = {
        ...savedThemes,
        [name]: { ...data.themes[name] }
      };
      if (editingTheme === name) {
        formData = {
          id: formData.id,
          name,
          ...data.themes[name]
        };
        lastSavedFormData = JSON.stringify(formData);
      }
    } else {
      const { [name]: _, ...rest } = savedThemes;
      savedThemes = rest;
      localStorage.setItem('userThemes', JSON.stringify(rest)); // Add this line

      if (editingTheme === name) {
        editingTheme = null;
        isCreatingNew = false;
      }
    }

    if (selectedThemeName === name) {
      if (isBuiltIn) {
        selectedTheme = data.themes[name];
        localStorage.setItem('userThemes', JSON.stringify(savedThemes)); // Add this line
      } else {
        selectedThemeName = 'light';
        selectedTheme = data.themes.light;
        if (browser) {
          localStorage.setItem('selectedTheme', 'light');
        }
      }
    }
  }

  function copyThemeToClipboard() {
    if (!formData) return;

    const baseProps = [
      `  name: "${formData.name}";`,
      `  color-scheme: "${formData['color-scheme']}";`,
      `  default: ${formData.default};`,
      `  prefersdark: ${formData.prefersdark};`,
    ];

    const cssProps = Object.entries(formData)
      .filter(([key]) => key.startsWith('--'))
      .map(([key, value]) => `  ${key}: ${value};`);

    const css = `@plugin "daisyui/theme" {\n${baseProps.join('\n')}\n${cssProps.join('\n')}\n}`;

    navigator.clipboard.writeText(css)
      .then(() => alert('CSS copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));
  }
</script>
<div class="flex">
  <div class="border-e shrink-0 w-[15rem] border-dashed border-base-200 top-16 sticky h-[calc(100vh-4rem)] overflow-y-scroll p-6 pb-20">
    <h2 class="text-lg font-bold mb-4">Themes</h2>
    <button
      class="btn btn-primary mb-4 w-full"
      on:click={startCreatingNew}
    >
      Create New Theme
    </button>

    <ul class="menu w-full min-w-40">
      {#each Object.entries(allThemes) as [id, theme]}
        <li>
          <button
            class="px-2 gap-3"
            class:menu-active={selectedThemeName === id}
            on:click={() => startEditing(id)}
          >
            <div class="grid grid-cols-2 gap-0.5 p-1 rounded-md shadow-sm"
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
            <div class="w-32 truncate">{theme.name || id}</div>

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
          bind:value={formData.name}
          placeholder="mytheme"
        />

        <svg class="justify-self-end" width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </label>

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
              {#each Object.entries(formData) as [key, value]}
                {#if key.startsWith(`--color-${group}`)}
                  <ColorPalette
                    name={key}
                    colors={data.tailwindcolors}
                    bind:value={formData[key]}
                    label={
                      key.endsWith('-content')
                        ? 'A'
                        : /\d/.test(key)
                          ? key.replace(`--color-${group}-`, '')
                          : ''
                    }
                    background={data.assignedBgColors[key] ? formData[data.assignedBgColors[key]] : undefined}
                    textColor={data.assignerFgColors[key] ? formData[data.assignerFgColors[key]] : undefined}

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
                class="rounded-btn overflow-hidden bg-base-200 cursor-pointer hover:bg-base-300 transition-colors relative focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary"
              >
                <input
                  type="radio"
                  name={key}
                  class="sr-only"
                  bind:group={formData[key]}
                  value={value}
                  aria-label={`${value} border radius`}
                />
                <div
                  class="pt-2 pe-2"
                  aria-hidden="true"
                >
                  <div
                    class="w-10 h-6 border-e border-t border-e-2 border-t-2 border-base-content/20 bg-base-200"
                    style={`border-start-end-radius:${value}`}
                    class:border-primary={formData[key] === value}
                    class:bg-base-300={formData[key] !== value}
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
          <span class="text-sm">{label}</span>
          <div class="join">
            {#each ['1px', '2px'] as value}
              <input
                type="radio"
                name={key}
                class="join-item btn btn-xs"
                bind:group={formData[key]}
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
            bind:checked={formData.default}
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
            bind:checked={formData.prefersdark}
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
            checked={formData['color-scheme'] === 'dark'}
            on:change={(e) => formData['color-scheme'] = e.target.checked ? 'dark' : 'light'}
          />
          Dark
        </label>
      </div>

      <h3 class="divider"></h3>

      <button
        class="btn btn-primary"
        on:click={openCssModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
          <path fill-rule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clip-rule="evenodd" />
        </svg>
        Get CSS
      </button>

      {#if isCssModalOpen}
        <dialog class="modal" open>
          <div class="modal-box max-sm:modal-bottom">
            <h3 class="font-bold text-lg mb-4">Add this to your CSS file</h3>
            <textarea
              class="textarea textarea-border w-full max-w-none h-96 font-mono text-sm"
              bind:value={cssText}
              on:input={() => parseCssText(cssText)}
            ></textarea>
            <div class="modal-action">
              <button class="btn btn-sm" on:click={copyToClipboard}>
                Copy to Clipboard
              </button>
            </div>
          </div>
          <div class="modal-backdrop" on:click={() => isCssModalOpen = false}></div>
        </dialog>
      {/if}

      {#if editingTheme}
        <div class="flex flex-col">
          {#if editingTheme in data.themes && JSON.stringify(formData) !== JSON.stringify({ ...formData, ...data.themes[editingTheme] })}
            <button
              class="btn btn-sm"
              on:click={() => deleteTheme(editingTheme)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                <path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" />
              </svg>
              Reset theme
            </button>
          {:else if !(editingTheme in data.themes)}
            <button
              class="btn btn-sm"
              on:click={() => deleteTheme(editingTheme)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />
            </svg>
            Delete theme
            </button>
          {/if}
        </div>
      {/if}

    </div>
  {/if}

  {#if selectedTheme}
    <div class="p-8 grow">
      <div
      class="p-8 rounded-lg bg-base-100 text-base-content rounded-box"
      style={Object.entries(selectedTheme)
        .map(([key, value]) => `${key}:${value}`)
        .join(';')}
      >
        <h3 class="text-xl font-bold mb-4">Theme Preview</h3>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-primary">Primary Button</button>
          <button class="btn btn-secondary">Secondary Button</button>
          <button class="btn btn-accent">Accent Button</button>
        </div>
      </div>
    </div>
  {/if}
</div>
