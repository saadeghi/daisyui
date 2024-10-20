export const pluginOptionsHandler = (() => {
  let firstRun = true;
  return (options, addBase, allThemes, packageVersion) => {
    const {
      logs = true,
      root = ":root",
      themes = ['light --default', 'dark --prefersdark'],
      include,
      exclude
    } = options || {};

    if (logs !== false && firstRun) {
      console.log(`/*! 🌼 daisyUI ${packageVersion} */`);
      firstRun = false;
    }

    const applyTheme = (themeName, flags) => {
      if (allThemes[themeName]) {
        let selector = `${root}:has(input.theme-controller[value=${themeName}]:checked),[data-theme=${themeName}]`;
        if (flags.includes('--default')) {
          selector = `:where(${root}),${selector}`;
        }
        addBase({ [selector]: allThemes[themeName] });

        if (flags.includes('--prefersdark')) {
          addBase({ "@media (prefers-color-scheme: dark)": { [root]: allThemes[themeName] } });
        }
      }
    };

    if (themes) {
      if (Array.isArray(themes)) {
        themes.forEach(themeOption => {
          const [themeName, ...flags] = themeOption.split(' ');
          applyTheme(themeName, flags);
        });
      } else {
        const [themeName, ...flags] = themes.split(' ');
        applyTheme(themeName, flags);
      }
    }
    return { include, exclude };
  };
})();
