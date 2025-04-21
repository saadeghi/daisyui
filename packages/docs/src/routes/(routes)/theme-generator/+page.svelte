<script>
  import SEO from "$components/SEO.svelte"
  import ColorPalette from "$components/ColorPalette.svelte"
  import Preview from "$components/themegenerator/Preview.svelte"
  // import PreviewGrid from "$components/themegenerator/PreviewGrid.svelte"
  import ThemeCSSModal from "$components/themegenerator/ThemeCSSModal.svelte"
  import Dock from "$components/themegenerator/Dock.svelte"
  import ThemeListItem from "$components/themegenerator/ThemeListItem.svelte"
  import { nameGenerator } from "$lib/nameGenerator"
  import { randomizeThemeColors } from "$lib/themeGeneratorRandomizer"
  import { validateThemeName, validateThemeStructure } from "$lib/themeGeneratorValidation"
  import { browser } from "$app/environment"
  // import { pushState, replaceState } from "$app/navigation"
  import { onMount, tick } from "svelte"

  import { confetti } from "@neoconfetti/svelte"
  import pako from "pako"

  // Add state to control confetti visibility
  let showConfetti = $state(false)
  let confettiTarget = null

  // Function to trigger confetti effect
  const triggerConfetti = async () => {
    showConfetti = false
    await tick()
    showConfetti = true
    setTimeout(() => {
      showConfetti = false
    }, 3000)
  }

  function toBase64Url(uint8array) {
    return btoa(String.fromCharCode(...uint8array))
      .replace(/\+/g, "-") // + => -
      .replace(/\//g, "_") // / => _
      .replace(/=+$/, "") // remove padding
  }

  function fromBase64Url(str) {
    const base64 = str
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(str.length + ((4 - (str.length % 4)) % 4), "=")
    return new Uint8Array([...atob(base64)].map((c) => c.charCodeAt(0)))
  }

  const pack = (obj) => {
    const jsonString = JSON.stringify(obj)
    const compressed = pako.deflate(jsonString)
    // return btoa(String.fromCharCode.apply(null, new Uint8Array(compressed)))
    return toBase64Url(compressed)
  }
  const unpack = (str) => {
    // const compressed = Uint8Array.from(atob(str), (c) => c.charCodeAt(0))
    const compressed = fromBase64Url(str)
    const jsonString = pako.inflate(compressed, { to: "string" })
    return JSON.parse(jsonString)
  }
  const LS_KEY = "gen-themes-0.2"
  const { data } = $props()
  let showCssModal = $state(false)
  let dice = $state({ rotate: 0 })
  let dockActiveItem = $state("editor")
  let themeCSS = $state("")
  let highlightedThemeId = $state(null)

  const getStoredThemesByType = (type) => {
    if (!browser) return []
    const themes = JSON.parse(localStorage.getItem(LS_KEY) || "[]")
    return themes
      .map((theme) => ({
        ...theme,
        ...Object.fromEntries(
          Object.entries(theme)
            .filter(([key]) => key.startsWith("--color-"))
            .map(([key, value]) => [key, value.trim()]),
        ),
      }))
      .filter((item) => item.type === type)
  }

  let builtinThemes = $state(getStoredThemesByType("builtin"))
  let customThemes = $state(getStoredThemesByType("custom"))
  let currentTheme = $state({})
  let themes = $derived([...builtinThemes, ...customThemes])

  let currentThemeStyle = $derived.by(() => {
    let styleString = Object.entries(currentTheme)
      .filter(([key]) => !["prefersdark", "default", "name", "type", "id"].includes(key))
      .map(([key, value]) => `${key}:${value}`)
      .join(";")
    return styleString
  })

  let firstItemStyle = $state("scale:1;opacity:1;")
  const createNewTheme = (id, name, colors) => {
    if (!customThemes.some((theme) => theme.id === id)) {
      const newTheme = {
        id: id,
        name: name,
        type: "custom",
        ...colors,
        default: false,
        prefersdark: false,
      }
      customThemes = [newTheme, ...customThemes]
      currentTheme = newTheme
      firstItemStyle = "scale:.9; opacity: 0;"
      setTimeout(() => {
        firstItemStyle = "scale:1; transition: scale .3s ease, opacity .2s ease;"
      }, 200)
    }
  }

  function getThemeFromUrl() {
    if (!browser) return null

    const url = new URL(window.location)

    // Check if we have theme parameters in the URL
    if (url.hash.startsWith("#theme=")) {
      try {
        // Try to get the theme from the hash
        const themeData = unpack(url.hash.substring(7))
        // Ensure the theme has a name and id
        if (!themeData.name) {
          themeData.name = nameGenerator()
        }
        themeData.id = crypto.randomUUID()
        themeData.type = "custom"
        return themeData
      } catch (e) {
        console.error("Failed to parse theme from URL hash", e)
      }
    }

    // Check if we have theme parameters in search params
    const themeParams = {}
    let hasThemeParams = false

    for (const [key, value] of url.searchParams.entries()) {
      if (
        key === "name" ||
        key === "color-scheme" ||
        key === "default" ||
        key === "prefersdark" ||
        key.startsWith("--color-") ||
        key.startsWith("--radius-") ||
        key.startsWith("--size-") ||
        key === "--border" ||
        key === "--depth" ||
        key === "--noise"
      ) {
        themeParams[key] = key === "default" || key === "prefersdark" ? value === "true" : value
        hasThemeParams = true
      }
    }

    if (hasThemeParams) {
      // Create a theme object from the URL parameters
      const urlTheme = {
        id: crypto.randomUUID(),
        type: "custom",
        name: themeParams.name || nameGenerator(),
        "color-scheme": themeParams["color-scheme"] || "light",
        default: themeParams.default || false,
        prefersdark: themeParams.prefersdark || false,
        ...themeParams,
      }

      return urlTheme
    }

    return null
  }

  function findMatchingCustomTheme(theme, customThemes) {
    if (!theme) return null

    // Check if a theme with same properties already exists in custom themes
    return customThemes.find((customTheme) => {
      // Check name
      if (customTheme.name !== theme.name) return false

      // Check all color values
      for (const [key, value] of Object.entries(theme)) {
        if (key.startsWith("--color-") && customTheme[key] !== value) {
          return false
        }
      }

      return true
    })
  }

  onMount(() => {
    // First, try to get theme from URL
    const urlTheme = getThemeFromUrl()

    // Then, load themes from localStorage
    builtinThemes = data.builtinThemes
    const LSthemes = localStorage.getItem(LS_KEY)
    if (LSthemes) {
      const parsedThemes = JSON.parse(LSthemes)
      builtinThemes = parsedThemes?.filter((item) => item.type === "builtin")
      customThemes = parsedThemes?.filter((item) => item.type === "custom")
    }

    // If we have a URL theme, check if it matches an existing custom theme
    if (urlTheme) {
      const isValid = validateThemeStructure(urlTheme)
      if (isValid) {
        const matchingTheme = findMatchingCustomTheme(urlTheme, customThemes)

        if (matchingTheme) {
          // Select the matching theme
          currentTheme = matchingTheme
        } else {
          // Add this theme to custom themes and select it
          customThemes = [urlTheme, ...customThemes]
          currentTheme = urlTheme
          highlightedThemeId = urlTheme.id
          setTimeout(triggerConfetti, 500)

          setTimeout(() => {
            highlightedThemeId = null
          }, 2000)
        }
        return // Skip the regular theme selection process
      }
    }

    // If no URL theme or invalid URL theme, proceed with regular theme selection
    const LSthemeId = localStorage.getItem("gen-theme-id")
    if (LSthemeId && JSON.parse(LSthemes)?.some((item) => item.id === LSthemeId)) {
      currentTheme = JSON.parse(LSthemes)?.find((item) => item.id === LSthemeId)
    } else {
      const lightTheme = themes.find((item) => item.name === "light")
      currentTheme = lightTheme
    }
  })

  function setThemeInUrl(theme) {
    if (!browser) return
    const { id, type, ...themeWithoutIdType } = theme
    const url = new URL(window.location)
    url.hash = `theme=${pack(themeWithoutIdType)}`
    // replaceState(url, {})
    history.replaceState({}, "", url)
  }

  $effect(() => {
    const allValid = themes.every(
      (theme) => validateThemeName(theme.name) && validateThemeStructure(theme),
    )
    if (allValid) {
      localStorage.setItem(LS_KEY, JSON.stringify(themes))
      localStorage.setItem("gen-theme-id", currentTheme.id)
      setThemeInUrl(currentTheme)
    }
    if (validateThemeName(currentTheme.name) && validateThemeStructure(currentTheme)) {
      currentTheme = themes.find((item) => item.id === currentTheme.id)
    }
  })

  const loadTheme = (id) => {
    currentTheme = themes.find((theme) => theme.id === id)
  }

  const random = () => {
    const updateThemeColors = (themes) => {
      return themes.map((theme) => {
        if (theme.id !== currentTheme.id) {
          return theme
        }
        return { ...theme, ...randomizeThemeColors(data.tailwindcolors, data.colorPairs) }
      })
    }
    if (currentTheme.type === "builtin") {
      builtinThemes = updateThemeColors(builtinThemes)
    } else if (currentTheme.type === "custom") {
      customThemes = updateThemeColors(customThemes)
    }
  }

  const openThemeCSSModal = () => {
    themeCSS = generateCSS(currentTheme)
    showCssModal = true
  }

  const remove = (id, type) => {
    if (type === "builtin") {
      const index = builtinThemes.findIndex((item) => item.id === id)
      if (index !== -1) {
        if (confirm(`Reset "${currentTheme.name}" themes to default?`)) {
          builtinThemes[index] = data.builtinThemes[index]
          currentTheme = data.builtinThemes[index]
        }
      }
    } else if (type === "custom") {
      if (confirm(`Remove "${currentTheme.name}" theme?`)) {
        customThemes = customThemes.filter((item) => item.id !== id)
        currentTheme = themes[0]
      }
    }
  }

  const removeAll = () => {
    if (confirm("Remove all custom themes?")) {
      customThemes = []
      currentTheme = themes[0]
    }
  }

  const resetAll = () => {
    if (confirm("Reset all themes to default?")) {
      builtinThemes = data.builtinThemes
      currentTheme = data.builtinThemes[0]
    }
  }

  const generateCSS = (theme) => {
    const baseProps = [
      `  name: "${theme.name}";`,
      `  default: ${theme.default ? "true" : "false"};`,
      `  prefersdark: ${theme.prefersdark ? "true" : "false"};`,
      `  color-scheme: "${theme["color-scheme"]}";`,
    ]

    const cssProps = data.orderedColorKeys
      .filter((key) => theme[key])
      .map((key) => `  ${key}: ${theme[key]};`)

    const radiusProps = ["--radius-selector", "--radius-field", "--radius-box"]
      .filter((key) => theme[key])
      .map((key) => `  ${key}: ${theme[key]};`)

    const sizeProps = ["--size-selector", "--size-field", "--border"]
      .filter((key) => theme[key])
      .map((key) => `  ${key}: ${theme[key]};`)

    const effectProps = ["--depth", "--noise"]
      .filter((key) => theme[key])
      .map((key) => `  ${key}: ${theme[key]};`)

    return `\n@plugin "daisyui/theme" {\n${baseProps.join("\n")}\n${cssProps.join("\n")}\n${radiusProps.join("\n")}\n${sizeProps.join("\n")}\n${effectProps.join("\n")}\n}\n`
  }

  let holdTimeout
  let holdInterval
  let startTime
  let btnElement
  let svgElement

  const handleMouseDown = (event) => {
    if (holdTimeout || holdInterval) return

    startTime = Date.now()
    btnElement = event.currentTarget
    svgElement = event.currentTarget.querySelector("svg")
    svgElement.style.transition = "rotate 3s linear"
    btnElement.style.transition = "box-shadow 3s ease-out"
    holdInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const rotation = 90 * (elapsedTime / 1000)
      const boxShadowOffset = -2 * (elapsedTime / 1000) - 3.5
      if (rotation >= 90) {
        svgElement.style.rotate = "90deg"
        clearInterval(holdInterval)
        holdInterval = null
      } else {
        svgElement.style.rotate = `${rotation}deg`
        btnElement.style.boxShadow = `0 ${boxShadowOffset}rem 0 -3rem color-mix(in oklab, var(--color-base-content) 30%, transparent) inset`
      }
    }, 10)
    holdTimeout = setTimeout(() => {
      new Audio("https://img.daisyui.com/fx/tap.mp3").play()
      createNewTheme(
        crypto.randomUUID(),
        nameGenerator(),
        randomizeThemeColors(data.tailwindcolors, data.colorPairs),
      )
      // document.activeElement.blur();
      holdInterval = null
      svgElement?.style?.removeProperty("transition")
      svgElement?.style?.removeProperty("rotate")
      btnElement?.style?.removeProperty("transition")
      btnElement?.style?.removeProperty("box-shadow")
    }, 3000)
  }

  const handleMouseUpOrLeave = () => {
    clearTimeout(holdTimeout)
    clearInterval(holdInterval)
    holdTimeout = null
    holdInterval = null
    svgElement?.style?.removeProperty("transition")
    svgElement?.style?.removeProperty("rotate")
    btnElement?.style?.removeProperty("transition")
    btnElement?.style?.removeProperty("box-shadow")
  }
</script>

<!-- <button onclick={() => {
  const url = new URL(window.location);
  url.searchParams.set('theme', pack(currentTheme));
  pushState(url);
}}>Set param</button>

<button onclick={() => {
  const url = new URL(window.location);
  const param = url.searchParams.get('theme');
  if (param) {
    console.log(unpack(param));
  }
}}>read param</button> -->

<svelte:head>
  <link rel="canonical" href="https://daisyui.com/theme-generator/" />
</svelte:head>

<SEO
  title="daisyUI and Tailwind CSS theme generator"
  desc="OKLCH Theme Generator for daisyUI and Tailwind CSS"
  img={`https://img.daisyui.com/images/theme-generator.webp`}
/>

<div class="relative grid md:grid-cols-[14rem_17rem_1fr]">
  <div
    style="scroll-behavior: smooth"
    id="themelist"
    class="border-base-200 bg-base-100 w-full shrink-0 overflow-x-hidden border-e border-dashed p-4 pb-20 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-scroll"
    class:max-md:hidden={dockActiveItem !== "themes"}
  >
    <div class="mb-4 flex items-center justify-between gap-2">
      <h2 class="font-title ms-2 font-semibold">Themes</h2>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-square btn-sm m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 border-base-300 rounded-box z-1 w-48 border p-2 shadow-xl"
        >
          <li class="menu-title">Options</li>
          <li>
            <button class="text-xs" onclick={removeAll}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="text-error size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
              Remove my themes
            </button>
          </li>
          <li>
            <button class="text-xs" onclick={resetAll}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="text-error size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
              Reset daisyUI themes
            </button>
          </li>
        </ul>
      </div>
    </div>

    <ul class="menu w-full min-w-40 p-0">
      <li>
        <button
          class="btn group theme-generator-btn bg-auto px-2"
          onmousedown={handleMouseDown}
          onmouseup={handleMouseUpOrLeave}
          onmouseleave={handleMouseUpOrLeave}
          onblur={handleMouseUpOrLeave}
          ontouchstart={handleMouseDown}
          ontouchend={handleMouseUpOrLeave}
          onkeydown={(event) => {
            if ((event.key === "Enter" || event.key === " ") && !holdTimeout && !holdInterval) {
              handleMouseDown(event)
            }
          }}
          onkeyup={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              handleMouseUpOrLeave(event)
            }
          }}
        >
          <svg
            class="size-5 origin-[40%_60%] [transition:rotate_.2s_ease] group-hover:-rotate-12"
            width="18"
            height="18"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="butt"
              stroke-linejoin="bevel"
            ></path><path
              d="M29.5856 18.4143L5.54395 42.4559"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="butt"
              stroke-linejoin="bevel"
            ></path></svg
          >
          <span class="font-normal"><span class="font-semibold">Hold</span> to add theme</span>
        </button>
      </li>
      <li class="menu-title mt-6">My themes</li>
      <div class="pointer-events-none flex items-center justify-center"></div>
      {#if showConfetti}
        <div class="pointer-events-none flex items-center justify-center">
          <div
            use:confetti={{
              particleCount: 100,
              particleSize: 5,
              force: 0.6,
              stageWidth: 200,
              stageHeight: 600,
            }}
          ></div>
        </div>
      {/if}
      {#each themes?.filter((item) => item.type === "custom") as theme, index}
        <ThemeListItem
          id={theme.id}
          type={theme.type}
          {theme}
          isCurrent={currentTheme.id === theme.id && currentTheme.type === theme.type}
          loadTheme={() => loadTheme(theme.id)}
          style={index === 0 ? firstItemStyle : ""}
          classes={theme.id === highlightedThemeId ? "[animation:received_2s_both]" : ""}
        />
      {:else}
        <li class="menu-disabled"><div>&nbsp;</div></li>
      {/each}
      <li></li>
      <li class="menu-title">daisyUI themes</li>
      {#each themes?.filter((item) => item.type === "builtin") as theme}
        <ThemeListItem
          id={theme.id}
          type={theme.type}
          {theme}
          isCurrent={currentTheme.id === theme.id && currentTheme.type === theme.type}
          loadTheme={() => loadTheme(theme.id)}
        />
      {/each}
    </ul>
  </div>

  <div
    class="bg-base-100 flex w-full shrink-0 flex-col items-center gap-4 p-6 pb-20 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:items-start md:overflow-y-scroll lg:items-stretch"
    class:max-md:hidden={dockActiveItem !== "editor"}
  >
    <label class="input input-ghost input-sm flex w-full shrink-0 items-center gap-2 font-semibold">
      <span class="shrink-0 text-xs opacity-60 select-none">Name</span>
      <input
        class="w-full shrink"
        type="text"
        bind:value={currentTheme.name}
        placeholder="mytheme"
      />

      <svg
        class="justify-self-end opacity-40"
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </label>

    <div class="grid w-full grid-cols-2 gap-2">
      <button
        class="btn group"
        onclick={() => {
          dice.rotate += 90
          random()
        }}
      >
        <svg
          class="shrink-0 group-active:scale-95"
          style:rotate={`${dice.rotate}deg`}
          style:transition="rotate 0.4s ease"
          fill="currentColor"
          width="16"
          height="16"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M192,28H64A36.04061,36.04061,0,0,0,28,64V192a36.04061,36.04061,0,0,0,36,36H192a36.04061,36.04061,0,0,0,36-36V64A36.04061,36.04061,0,0,0,192,28Zm12,164a12.01312,12.01312,0,0,1-12,12H64a12.01312,12.01312,0,0,1-12-12V64A12.01312,12.01312,0,0,1,64,52H192a12.01312,12.01312,0,0,1,12,12ZM104,88A16,16,0,1,1,88,72,16.01833,16.01833,0,0,1,104,88Zm80,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,184,88Zm-80,80a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,104,168Zm80,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,184,168Zm-40-40a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,144,128Z"
          />
        </svg>
        Random
      </button>
      <button class="btn btn-neutral" onclick={() => openThemeCSSModal()}>
        <svg
          class="shrink-0"
          fill="currentColor"
          width="16px"
          height="16px"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.79785,119.48535A34.95033,34.95033,0,0,1,49.05078,128a34.95033,34.95033,0,0,1,5.74707,8.51465C60,147.24414,60,159.8291,60,172c0,25.93652,1.84424,32,20,32a12,12,0,0,1,0,24c-19.14453,0-32.19775-6.90234-38.79785-20.51465C36,196.75586,36,184.1709,36,172c0-25.93652-1.84424-32-20-32a12,12,0,0,1,0-24c18.15576,0,20-6.06348,20-32,0-12.1709,0-24.75586,5.20215-35.48535C47.80225,34.90234,60.85547,28,80,28a12,12,0,0,1,0,24c-18.15576,0-20,6.06348-20,32C60,96.1709,60,108.75586,54.79785,119.48535ZM240,116c-18.15576,0-20-6.06348-20-32,0-12.1709,0-24.75586-5.20215-35.48535C208.19775,34.90234,195.14453,28,176,28a12,12,0,0,0,0,24c18.15576,0,20,6.06348,20,32,0,12.1709,0,24.75586,5.20215,35.48535A34.95033,34.95033,0,0,0,206.94922,128a34.95033,34.95033,0,0,0-5.74707,8.51465C196,147.24414,196,159.8291,196,172c0,25.93652-1.84424,32-20,32a12,12,0,0,0,0,24c19.14453,0,32.19775-6.90234,38.79785-20.51465C220,196.75586,220,184.1709,220,172c0-25.93652,1.84424-32,20-32a12,12,0,0,0,0-24Z"
          />
        </svg>
        CSS
      </button>
    </div>

    <h3 class="divider divider-start text-xs">
      <span class="flex gap-1.5">
        <svg
          class="opacity-40"
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37 37C39.2091 37 41 35.2091 41 33C41 31.5272 39.6667 29.5272 37 27C34.3333 29.5272 33 31.5272 33 33C33 35.2091 34.7909 37 37 37Z"
            fill="currentColor"
          /><path
            d="M20.8535 5.50439L24.389 9.03993"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
          /><path
            d="M23.6818 8.33281L8.12549 23.8892L19.4392 35.2029L34.9955 19.6465L23.6818 8.33281Z"
            stroke="currentColor"
            stroke-width="4"
            stroke-linejoin="round"
          /><path
            d="M12 20.0732L28.961 25.6496"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
          /></svg
        >
        Change Colors
      </span>
    </h3>
    <div class="grid w-fit grid-cols-4 gap-4">
      {#each ["base", "primary", "secondary", "accent", "neutral", "info", "success", "warning", "error"] as group}
        <div
          class="flex flex-col gap-1"
          class:col-span-4={group === "base"}
          class:col-span-2={group !== "base"}
        >
          <div class="flex gap-4">
            {#each Object.entries(currentTheme) as [key, value]}
              {#if key.startsWith(`--color-${group}`)}
                <ColorPalette
                  name={key}
                  colors={data.tailwindcolors}
                  colorInitials={data.colorInitials}
                  bind:value={currentTheme[key]}
                  label={key.endsWith("-content")
                    ? "A"
                    : /\d/.test(key)
                      ? key.replace(`--color-${group}-`, "")
                      : ""}
                  colorPairs={data.colorPairs}
                  themeColors={currentTheme}
                />
              {/if}
            {/each}
          </div>
          <div class="text-base-content/60 text-xs">{group}</div>
        </div>
      {/each}
    </div>

    <h3 class="divider divider-start text-xs">
      <span class="flex gap-1.5">
        <svg
          class="opacity-40"
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M24 42V27M42 24H27"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><circle
            cx="24"
            cy="24"
            r="3"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M42 6H24C14.0589 6 6 14.0589 6 24V42"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
        >
        Radius
      </span>
    </h3>
    {#each data.radiusValues as [key, label, desc, values]}
      <div class="w-full max-w-fit">
        <div class="mb-2 flex flex-col" id={`${key}-group`}>
          <span class="text-base-content/70 text-[0.6875rem]">{label}</span>
          <span class="text-base-content/40 text-[0.625rem] italic">{desc}</span>
        </div>
        <div class="flex gap-2" role="radiogroup" aria-labelledby={`${key}-group`}>
          {#each values as value}
            <label
              class="rounded-field bg-base-200 hover:bg-base-300 focus-within:outline-base-content relative cursor-pointer overflow-hidden transition-colors focus-within:outline-2 focus-within:outline-offset-2"
              title={value}
            >
              <input
                type="radio"
                name={key}
                class="sr-only"
                bind:group={currentTheme[key]}
                {value}
                aria-label={`${value} border radius`}
              />
              <div class="pe-3 pt-2" aria-hidden="true">
                <div
                  class="border-base-content/20 bg-base-200 h-6 w-8 border-e-2 border-t-2"
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

    <h3 class="divider divider-start text-xs">
      <span class="flex gap-1.5">
        <svg
          class="opacity-40"
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M36.1777 36.0537L44.1777 44.0179"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
        >
        Effects
      </span>
    </h3>

    {#each data.effectValues as [key, label, desc, values]}
      <div class="w-full">
        <label class="flex cursor-pointer items-center justify-between gap-2">
          <span class="flex flex-col">
            <span class="text-base-content/70 text-xs text-[0.6875rem]">{label}</span>
            <span class="text-base-content/40 text-[0.625rem] italic">{desc}</span>
          </span>
          <input
            type="checkbox"
            class="toggle toggle-xs"
            checked={currentTheme[key] === "1"}
            onchange={(e) => (currentTheme[key] = e.target.checked ? "1" : "0")}
          />
        </label>
      </div>
    {/each}

    <h3 class="divider divider-start text-xs">
      <span class="flex gap-1.5">
        <svg
          class="opacity-40"
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M44 14L34 4L30.25 7.75L26.5 11.5L19 19L11.5 26.5L7.75 30.25L4 34L14 44L44 14Z"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M30.25 7.75L7.75 30.25"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M9 29L13 33"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M14 24L20 30"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M19 19L23 23"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M24 14L30 20"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><path
            d="M29 9L33 13"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
        >
        Sizes
      </span>
    </h3>
    {#each data.sizeValues as [key, label, desc, values, scale]}
      <div class="w-full">
        <div class="mb-2 flex flex-col" id={`${key}-group`}>
          <span class="text-base-content/70 text-[0.6875rem]">{label}</span>
          <span class="text-base-content/40 text-[0.625rem] italic">{desc}</span>
        </div>
        <div class="bg-base-200 rounded-box flex items-end justify-center gap-4 p-4 px-6">
          <div class="flex gap-1">
            {#each scale as size, index}
              <div class="flex flex-col items-center gap-1">
                <div
                  class="flex items-end"
                  style={`height:calc(${values[values.length - 1]} * ${scale[scale.length - 1]} )`}
                >
                  <div
                    class="bg-base-content w-1 rounded-full"
                    style={`height:calc(${currentTheme[key]} * ${size} )`}
                  ></div>
                </div>
                <div class="text-base-content/50 flex flex-col font-mono uppercase tabular-nums">
                  <span class="text-[0.5rem] font-semibold"
                    >{["xs", "sm", "md", "lg", "xl"][index]}</span
                  >
                  <span class="text-[0.5625rem]"
                    >{(parseFloat(currentTheme[key]) * 16 * size).toFixed(0)}</span
                  >
                </div>
              </div>
            {/each}
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex flex-col items-center">
              <div class="text-base-content/50 text-[0.5625rem]">{label} base size</div>
              <div class="text-3xl font-black tabular-nums" title={currentTheme[key]}>
                {(parseFloat(currentTheme[key]) * 16).toFixed(1)}
              </div>
              <div class="text-base-content/50 text-[0.5rem]">Pixels</div>
            </div>
            <input
              type="range"
              min="0"
              max={values.length - 1}
              step="1"
              value={values.indexOf(currentTheme[key])}
              class="range range-xs"
              aria-labelledby={`${key}-group`}
              oninput={(e) => (currentTheme[key] = values[e.target.value])}
            />

            <div class="mx-1.5 flex justify-between">
              {#each values as value, index}
                <div
                  class="bg-base-content h-1.5 w-px"
                  class:opacity-20={value !== "0.25rem"}
                ></div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
    {#each data.borderValues as [key, label, desc, values]}
      <div class="w-full">
        <div class="mb-2 flex flex-col" id={`${key}-group`}>
          <span class="text-base-content/70 text-[0.6875rem]">{label}</span>
          <span class="text-base-content/40 text-[0.625rem] italic">{desc}</span>
        </div>

        <div class="bg-base-200 rounded-box relative mt-6 p-4 px-6">
          <div class="mx-2 w-[calc(100%-1rem)]">
            <div
              class="tooltip tooltip-open relative block w-0 font-mono before:text-[0.6875rem]"
              style={`inset-inline-start:${(values.indexOf(currentTheme[key]) / (values.length - 1)) * 100}%`}
              data-tip={currentTheme[key]}
            ></div>
          </div>
          <input
            type="range"
            min="0"
            max={values.length - 1}
            step="1"
            value={values.indexOf(currentTheme[key])}
            class="range range-xs max-w-none"
            aria-labelledby={`${key}-group`}
            oninput={(e) => (currentTheme[key] = values[e.target.value])}
          />
          <div class="mx-1.5 flex justify-between py-1">
            {#each values as value, index}
              <div class="bg-base-content h-1.5 w-px" class:opacity-20={value !== "1px"}></div>
            {/each}
          </div>
        </div>
      </div>
    {/each}

    <h3 class="divider divider-start text-xs">
      <span class="flex gap-1.5">
        <svg
          class="opacity-40"
          width="16"
          height="16"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="4"
          /><path
            d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="4"
          /></svg
        >
        Options
      </span>
    </h3>

    <div class="flex items-center justify-between gap-2">
      <span class="text-base-content/60 flex items-center gap-1 text-xs"> Default theme </span>
      <label class="cursor-pointer">
        <input type="checkbox" class="toggle toggle-xs" bind:checked={currentTheme.default} />
      </label>
    </div>

    <div class="flex items-center justify-between gap-2">
      <span class="text-base-content/60 flex items-center gap-1 text-xs">
        Default dark theme
        <div class="tooltip before:text-[0.6875rem]" data-tip="prefers-color-scheme:dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
      </span>
      <label class="cursor-pointer">
        <input type="checkbox" class="toggle toggle-xs" bind:checked={currentTheme.prefersdark} />
      </label>
    </div>

    <div class="flex items-center justify-between gap-2">
      <span class="text-base-content/60 flex items-center gap-1 text-xs">
        Dark color scheme
        <div class="tooltip before:text-[0.6875rem]" data-tip="Color of browser-provided UI">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
      </span>
      <label class="flex cursor-pointer items-center gap-2 text-xs">
        <input
          type="checkbox"
          class="toggle toggle-xs"
          checked={currentTheme["color-scheme"] === "dark"}
          onchange={(e) => (currentTheme["color-scheme"] = e.target.checked ? "dark" : "light")}
        />
      </label>
    </div>

    <div class="divider divider-start text-xs"></div>

    <button
      class="btn btn-block text-error"
      onclick={() => remove(currentTheme.id, currentTheme.type)}
    >
      {#if currentTheme.type === "builtin"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        Reset theme
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-error size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
        Remove theme
      {/if}
    </button>
  </div>

  <div class="overflow-x-hidden">
    <div class="border-base-300 overflow-hidden border-s border-t md:rounded-ss-xl">
      <div style={currentThemeStyle}>
        <div class:max-md:hidden={dockActiveItem !== "preview"}>
          <Preview currentThemeStyle={currentTheme} />
        </div>
      </div>
    </div>
  </div>
</div>

<Dock bind:dockActiveItem />

<ThemeCSSModal
  bind:showCssModal
  bind:themeCSS
  {currentTheme}
  bind:builtinThemes
  bind:customThemes
/>

<style>
  .theme-generator-btn {
    background-image:
      radial-gradient(ellipse at 50% 270%, #0069ff47, transparent 60%),
      radial-gradient(ellipse at 20% 150%, #00ffca47, transparent 60%),
      radial-gradient(ellipse at 70% 200%, #6a00ff47, transparent 60%);
  }
</style>
