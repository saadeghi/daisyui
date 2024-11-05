<script>
  import ColorPalette from "$components/ColorPalette.svelte"
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
      name: `New Theme ${themeIdCounter}`,
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
        if (browser) localStorage.setItem('selectedTheme', 'light');
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
<div class="container p-8 grid grid-cols-3 gap-8">
  <div class="border-r border-gray-200 pr-8">
    <h2 class="text-2xl font-bold mb-4">Themes</h2>
    <button
      class="btn btn-primary mb-4 w-full"
      on:click={startCreatingNew}
    >
      Create New Theme
    </button>

    <ul class="menu w-full">
      {#each Object.entries(allThemes) as [id, theme]}
        <li>
          <button
            class={selectedThemeName === id ? 'menu-active' : ''}
            on:click={() => startEditing(id)}
          >
            {theme.name || id}
          </button>
        </li>
      {/each}
    </ul>

  </div>

  {#if isCreatingNew || editingTheme}
    <div class="flex flex-wrap">

      <input
        type="text"
        class="input input-sm input-border"
        bind:value={formData.name}
        placeholder="Theme name"
      />

      <button
        class="btn btn-sm"
        on:click={copyThemeToClipboard}
      >
        Copy CSS
      </button>
      {#if editingTheme}
        {#if editingTheme in data.themes && JSON.stringify(formData) !== JSON.stringify({ ...formData, ...data.themes[editingTheme] })}
          <button
            class="btn btn-error btn-sm"
            on:click={() => deleteTheme(editingTheme)}
          >
            Reset
          </button>
        {:else if !(editingTheme in data.themes)}
          <button
            class="btn btn-error btn-sm"
            on:click={() => deleteTheme(editingTheme)}
          >
            Delete
          </button>
        {/if}
      {/if}

      <label class="flex gap-2 items-center cursor-pointer">
        <span>light</span>
        <input
          type="checkbox"
          class="toggle toggle-sm"
          checked={formData['color-scheme'] === 'dark'}
          on:change={(e) => formData['color-scheme'] = e.target.checked ? 'dark' : 'light'}
        />
        <span>Dark</span>
      </label>

      <div class="flex gap-2">
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
          <div class="flex gap-1 flex-col">
            <div class="flex gap-2">
              {#each Object.entries(formData) as [key, value]}
                {#if key.startsWith(`--color-${group}`)}
                  <div class="flex items-center gap-2">
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
                  </div>
                {/if}
              {/each}
            </div>
            <div class="text-xs">{group}</div>
          </div>
        {/each}
      </div>

      {#each ['--radius-badge', '--radius-btn', '--radius-box'] as key}
        <div class="form-control w-full">
          <span class="tex-sm">{key.replace('--', '')}</span>
          <div class="flex gap-2">
            {#each [
              '0',
              '0.25rem',
              '0.5rem',
              '1rem',
              '2rem'
            ] as value}
              <label
                class="rounded-btn overflow-hidden bg-base-200 cursor-pointer hover:bg-base-300 transition-colors relative ring-2"
                class:ring-primary={formData[key] === value}
                class:ring-transparent={formData[key] !== value}
              >
                <input
                  type="radio"
                  name={key}
                  class="hidden"
                  bind:group={formData[key]}
                  value={value}
                />
                <div class="pt-3 pe-3">
                  <div class="size-8 border-e border-t border-e-2 border-t-2 border-base-content/60 bg-base-300" style={`border-start-end-radius:${value}`}></div>
                </div>
              </label>
            {/each}
          </div>
        </div>
      {/each}

      {#each ['--spacing-button-border', '--spacing-tab-border'] as key}
        <div class="form-control">
          <span class="tex-sm">{key.replace('--', '')}</span>
          <div class="join">
            {#each ['1px', '2px'] as value}
              <input
                type="radio"
                name={key}
                class="join-item btn btn-sm"
                bind:group={formData[key]}
                value={value}
                aria-label={value}
              />
            {/each}
          </div>
        </div>
      {/each}

      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Default theme</span>
          <input
            type="checkbox"
            class="checkbox"
            bind:checked={formData.default}
          />
        </label>
      </div>

      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Prefers dark</span>
          <input
            type="checkbox"
            class="checkbox"
            bind:checked={formData.prefersdark}
          />
        </label>
      </div>

    </div>
  {/if}

  {#if selectedTheme}
    <div
      class="p-8 rounded-lg bg-base-100 text-base-content rounded-box"
      style={Object.entries(selectedTheme)
        .map(([key, value]) => `${key}:${value}`)
        .join(';')}
    >
      <h3 class="text-xl font-bold mb-4">Theme Preview</h3>
      <div class="space-y-4">
        <button class="btn btn-primary">Primary Button</button>
        <button class="btn btn-secondary">Secondary Button</button>
        <button class="btn btn-accent">Accent Button</button>
      </div>
    </div>
  {/if}
</div>
