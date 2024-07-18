<script>
/* this file is spaghetti code but it works (hopefully) */

import "prism-themes/themes/prism-material-dark.min.css"
import "$lib/style/prism-themes-modify.css"

import { onMount } from "svelte"
import { browser } from "$app/environment"
import SEO from "$components/SEO.svelte"
import ColorPicker from "$components/ColorPicker.svelte"
import Translate from "$components/Translate.svelte"

import { formatHex, toGamut, interpolate, wcagContrast } from "culori"

const isDark = (color) => {
  if (wcagContrast(color, "black") < wcagContrast(color, "white")) {
    return true
  }

  return false
}

const colorObjToString = (input) => {
  const cut = (number) => {
    if (!number) {
      return 0
    }
    return +number.toFixed(4)
  }
  const { l, c, h } = input
  return `${cut(l) * 100}% ${cut(c)} ${cut(h)}`
}

const generateForegroundColorFrom = (input, percentage = 0.8) => {
  const result = interpolate([input, isDark(input) ? "white" : "black"], "oklch")(percentage)
  return formatHex(`oklch(${colorObjToString(result)})`)
}

const generateDarkenColorFrom = (input, percentage = 0.07) => {
  const result = interpolate([input, "black"], "oklch")(percentage)
  return formatHex(`oklch(${colorObjToString(result)})`)
}

function changeColorValuesToObject(input) {
  const [l, c, h] = input.match(/\d+(\.\d+)?%|\d+(\.\d+)?/g).map(Number.parseFloat)
  return { l, c, h, a: 1 }
}

// let observer
// onMount(() => {
//   observer = new MutationObserver((mutationsList) => {
//     mutationsList.forEach((mutation) => {
//       if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
//         localStorage.setItem(
//           "theme-generator-colors",
//           JSON.parse(localStorage.getItem("theme-generator-default-colors"))
//         )
//       }
//     })
//   })
//   observer.observe(document.querySelector("html"), {
//     attributes: true,
//     attributeFilter: ["data-theme"],
//   })
// })

const getColorValueFromTheme = (variable) => {
  if (browser) {
    let colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable)
    return formatHex(
      `oklch(${changeColorValuesToObject(colorValues).l} ${
        changeColorValuesToObject(colorValues).c
      } ${changeColorValuesToObject(colorValues).h})`
    )
  }
  return null
}

const requiredColorNames = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "base-100",
  "info",
  "success",
  "warning",
  "error",
]

$: onlyRequiredColorNames = true

$: colors = [
  {
    name: "primary",
    variable: "--p",
    value: getColorValueFromTheme("--p"),
  },
  {
    name: "primary-content",
    variable: "--pc",
    value: getColorValueFromTheme("--pc"),
  },
  {
    name: "secondary",
    variable: "--s",
    value: getColorValueFromTheme("--s"),
  },
  {
    name: "secondary-content",
    variable: "--sc",
    value: getColorValueFromTheme("--sc"),
  },
  {
    name: "accent",
    variable: "--a",
    value: getColorValueFromTheme("--a"),
  },
  {
    name: "accent-content",
    variable: "--ac",
    value: getColorValueFromTheme("--ac"),
  },
  {
    name: "neutral",
    variable: "--n",
    value: getColorValueFromTheme("--n"),
  },
  {
    name: "neutral-content",
    variable: "--nc",
    value: getColorValueFromTheme("--nc"),
  },
  {
    name: "base-100",
    variable: "--b1",
    value: getColorValueFromTheme("--b1"),
  },
  {
    name: "base-200",
    variable: "--b2",
    value: getColorValueFromTheme("--b2"),
  },
  {
    name: "base-300",
    variable: "--b3",
    value: getColorValueFromTheme("--b3"),
  },
  {
    name: "base-content",
    variable: "--bc",
    value: getColorValueFromTheme("--bc"),
  },
  {
    name: "info",
    variable: "--in",
    value: getColorValueFromTheme("--in"),
  },
  {
    name: "info-content",
    variable: "--inc",
    value: getColorValueFromTheme("--inc"),
  },
  {
    name: "success",
    variable: "--su",
    value: getColorValueFromTheme("--su"),
  },
  {
    name: "success-content",
    variable: "--suc",
    value: getColorValueFromTheme("--suc"),
  },
  {
    name: "warning",
    variable: "--wa",
    value: getColorValueFromTheme("--wa"),
  },
  {
    name: "warning-content",
    variable: "--wac",
    value: getColorValueFromTheme("--wac"),
  },
  {
    name: "error",
    variable: "--er",
    value: getColorValueFromTheme("--er"),
  },
  {
    name: "error-content",
    variable: "--erc",
    value: getColorValueFromTheme("--erc"),
  },
]

function darken(name, variable, source, percentage = 0.2) {
  return generateDarkenColorFrom(colors.find((item) => item.name === source).value, percentage)
}
function contrastMaker(name, variable, source, percentage = 0.8) {
  return generateForegroundColorFrom(colors.find((item) => item.name === source).value, percentage)
}

function generateOptionalColors() {
  colors[9].value = darken("base-200", "--b2", "base-100", 0.1)
  colors[10].value = darken("base-300", "--b3", "base-100", 0.2)
  colors[11].value = contrastMaker("base-content", "--bc", "base-100")

  colors[1].value = contrastMaker("primary-content", "--pc", "primary")
  colors[3].value = contrastMaker("secondary-content", "--sc", "secondary")
  colors[5].value = contrastMaker("accent-content", "--ac", "accent")
  colors[7].value = contrastMaker("neutral-content", "--nc", "neutral")

  colors[13].value = contrastMaker("info-content", "--inc", "info")
  colors[15].value = contrastMaker("success-content", "--suc", "success")
  colors[17].value = contrastMaker("warning-content", "--wac", "warning")
  colors[19].value = contrastMaker("error-content", "--erc", "error")
}

function generateColors(newColorToCheck = "transparent") {
  if (CSS.supports("color", newColorToCheck)) {
    if (onlyRequiredColorNames) {
      generateOptionalColors()
    }
    for (const color of colors) {
      wrapper.style.setProperty(
        color.variable,
        colorObjToString(toGamut("oklch")(color.value), "oklch")
      )
    }
    if (browser) {
      localStorage.setItem("theme-generator-colors", JSON.stringify(colors))
    }
  } else {
    console.log(`${newColorToCheck} is not a valid color`)
  }
}
//prevent paste span tag outside text
function handlePastedText(event, color) {
  const text = event.clipboardData.getData("Text")
  color.value = text
  event.preventDefault()
}

function resetColors() {
  if (browser && localStorage.getItem("theme-generator-colors")) {
    localStorage.removeItem("theme-generator-colors")
    colors = JSON.parse(localStorage.getItem("theme-generator-default-colors"))
    generateOptionalColors()
    generateColors()
  }
}

function randomBetween(min, max) {
  const result = Math.random() * (max - min) + min
  return Math.round(result * 100) / 100
}

function randomize() {
  localStorage.removeItem("theme-generator-colors")
  // ;["primary", "secondary", "accent"].forEach((element) => {
  colors[0].value = formatHex(
    `oklch(${randomBetween(0.5, 0.7)} ${randomBetween(0.4, 0.5)} ${randomBetween(180, 360)})`
  ) //primary
  colors[2].value = formatHex(
    `oklch(${randomBetween(0.4, 0.8)} ${randomBetween(0.4, 0.5)} ${randomBetween(70, 270)})`
  ) //secondary
  colors[4].value = formatHex(
    `oklch(${randomBetween(0.4, 0.8)} ${randomBetween(0.4, 0.5)} ${randomBetween(70, 270)})`
  ) //accent
  colors[6].value = formatHex(
    `oklch(${randomBetween(0.1, 0.3)} ${randomBetween(0, 0.05)} ${randomBetween(0, 360)})`
  ) //neutral
  colors[8].value = formatHex(
    `oklch(${
      [randomBetween(0.99, 1), randomBetween(0.25, 0.3)][Math.round(Math.random())]
    } ${randomBetween(0, 0.05)} ${randomBetween(0, 360)})`
  ) //base-100
  colors[12].value = formatHex(
    `oklch(${randomBetween(0.5, 0.9)} ${randomBetween(0.18, 0.293)} ${randomBetween(200, 260)})`
  ) //info
  colors[14].value = formatHex(
    `oklch(${randomBetween(0.5, 0.9)} ${randomBetween(0.18, 0.293)} ${randomBetween(120, 180)})`
  ) //success
  colors[16].value = formatHex(
    `oklch(${randomBetween(0.5, 0.9)} ${randomBetween(0.18, 0.293)} ${randomBetween(50, 100)})`
  ) //warning
  colors[18].value = formatHex(
    `oklch(${randomBetween(0.5, 0.9)} ${randomBetween(0.18, 0.293)} ${randomBetween(12, 24)})`
  )
  //error
  // })
  generateOptionalColors()
  generateColors()
}

let wrapper
onMount(() => {
  localStorage.setItem("theme-generator-default-colors", JSON.stringify(colors))
  if (localStorage.getItem("theme-generator-colors")) {
    colors = JSON.parse(localStorage.getItem("theme-generator-colors"))
  }

  generateColors()
})
</script>

<SEO
  title="daisyUI Theme Generator"
  desc="Tailwind CSS Theme Generator - Tailwind CSS daisyUI custom theme and custom colors"
  img="{`https://img.daisyui.com/images/theme-generator.webp`}" />

<div class="prose mb-10 pt-10">
  <h1><Translate text="daisyUI Theme Generator" /></h1>
  <p>
    <Translate
      text="You can add your custom themes to <span class='badge badge-outline'>tailwind.config.js</span> file in <span class='badge badge-outline'>daisyui > themes</span> array. On this page, you can pick required color values and see how the components will look like with them." />
  </p>

  <p>
    <Translate
      text="You can also define optional colors to have more control on the color values (for example: the color of a button when it's focused on the color of the text on a button)" />
  </p>
  <p>
    <Translate
      text="Check out <a class='link font-bold' href='/docs/colors/'>colors page</a> to see all the color names you can use." />
  </p>

  <p>
    <Translate
      text="Check out <a class='link font-bold' href='/docs/themes/'>themes page</a> to see all the CSS variables you can use to customize the design decision (example: border-radius, animations, etc.)" />
  </p>
</div>
<div class="flex flex-col gap-4 xl:flex-row">
  <div class="shrink-0 xl:min-w-[29rem]">
    <div class="sticky top-8">
      <h2 class="px-2 pb-4 text-xl font-bold">tailwind.config.js</h2>
      {#if browser}
        <div class="mockup-code not-prose relative overflow-visible before:[content:none]">
          <div class="absolute right-2 top-2">
            <div
              class="tooltip tooltip-bottom tooltip-info"
              data-tip="Fix contrast of optional colors">
              {#if !onlyRequiredColorNames}
                <button
                  class="btn btn-xs btn-neutral btn-square"
                  onclick="{() => {
                    generateOptionalColors()
                    generateColors()
                  }}">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V4Z"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                    </path>
                    <path
                      d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44V4Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linejoin="round">
                    </path>
                    <path
                      d="M24 36H9"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                    </path>
                    <path
                      d="M24 28H5"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                    </path>
                    <path
                      d="M24 20H5"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                    </path>
                    <path
                      d="M24 12H9"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                    </path>
                  </svg>
                </button>
              {/if}
            </div>
            <div
              class="tooltip tooltip-bottom tooltip-info"
              data-tip="{onlyRequiredColorNames ? 'Show optional colors' : 'Hide optional colors'}">
              <button
                class="btn btn-xs btn-neutral btn-square"
                onclick="{() => (onlyRequiredColorNames = !onlyRequiredColorNames)}">
                {#if !onlyRequiredColorNames}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24">
                    <path
                      d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z">
                    </path>
                  </svg>
                {/if}
                {#if onlyRequiredColorNames}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z">
                    </path>
                  </svg>
                {/if}
              </button>
            </div>
            <div class="tooltip tooltip-bottom tooltip-info" data-tip="Randomize">
              <button class="btn btn-xs btn-neutral btn-square" onclick="{() => randomize()}">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.25 7.75H16.255M16.25 16.25H16.255M7.75 7.75H7.755M12 11.75H12.005M7.75 16.25H7.755M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21ZM16.5 7.75C16.5 7.88807 16.3881 8 16.25 8C16.1119 8 16 7.88807 16 7.75C16 7.61193 16.1119 7.5 16.25 7.5C16.3881 7.5 16.5 7.61193 16.5 7.75ZM16.5 16.25C16.5 16.3881 16.3881 16.5 16.25 16.5C16.1119 16.5 16 16.3881 16 16.25C16 16.1119 16.1119 16 16.25 16C16.3881 16 16.5 16.1119 16.5 16.25ZM8 7.75C8 7.88807 7.88807 8 7.75 8C7.61193 8 7.5 7.88807 7.5 7.75C7.5 7.61193 7.61193 7.5 7.75 7.5C7.88807 7.5 8 7.61193 8 7.75ZM12.25 11.75C12.25 11.8881 12.1381 12 12 12C11.8619 12 11.75 11.8881 11.75 11.75C11.75 11.6119 11.8619 11.5 12 11.5C12.1381 11.5 12.25 11.6119 12.25 11.75ZM8 16.25C8 16.3881 7.88807 16.5 7.75 16.5C7.61193 16.5 7.5 16.3881 7.5 16.25C7.5 16.1119 7.61193 16 7.75 16C7.88807 16 8 16.1119 8 16.25Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                  </path>
                </svg>
              </button>
            </div>
            <div class="tooltip tooltip-bottom tooltip-info" data-tip="Reset">
              <button class="btn btn-xs btn-neutral btn-square" onclick="{() => resetColors()}">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                  </path>
                  <path
                    d="M42 8V17H33"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                  </path>
                </svg>
              </button>
            </div>
          </div>
          <pre class="text-sm"><code class="text-neutral-content/30">{`module.exports = {`}</code>
<code>{`  daisyui: {
    themes: [
      {
        mytheme: {`}</code>
{#each colors.filter((item) => !onlyRequiredColorNames || requiredColorNames.includes(item.name)) as color}<code>          <span
                  data-tip="Pick"
                  class:tooltip="{colors.filter(
                    (item) => !onlyRequiredColorNames || requiredColorNames.includes(item.name)
                  )[0] === color}"
                  class="tooltip-open tooltip-accent tooltip-left align-middle before:py-0"><span
                    class="inline-block align-middle"><ColorPicker
                      bind:value="{color.value}"
                      onset={() =>
                        generateColors(color.value)} /></span></span>"{color.name}": "<button
                  class="hover:outline-neutral-content/20 focus:outline-neutral-content rounded-sm bg-black/20 px-1 hover:outline focus:outline"
                  contenteditable="true"
                  bind:innerHTML="{color.value}"
                  oninput="{() => generateColors(color.value)}"
                  onpaste="{ event => handlePastedText(event,color)}"
                  onkeyup="{() => generateColors(color.value)}">{color.value}</button>",
</code>{/each}<code>{`          },
        },
      ],
    },`}</code>
<code class="text-neutral-content/30">{`    plugins: [
      require('daisyui'),
    ],
    //...
  }
`}</code></pre>
        </div>
      {/if}
    </div>
  </div>
  <div>
    <h2 class="px-2 pb-4 text-xl font-bold"><Translate text="Preview" /></h2>
    <div data-theme="light" class="bg-transparent">
      <div
        class="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6"
        data-theme="mytheme"
        bind:this="{wrapper}">
        <!-- button -->
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
          <button class="btn">Default</button>
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-accent">Accent</button>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
        </div>
        <!-- badge -->
        <div class="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
          <span class="badge">Default</span>
          <span class="badge badge-primary">Primary</span>
          <span class="badge badge-secondary">Secondary</span>
          <span class="badge badge-accent">Accent</span>
          <span class="badge badge-info">Info</span>
          <span class="badge badge-success">Success</span>
          <span class="badge badge-warning">Warning</span>
          <span class="badge badge-error">Error</span>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="md:w-1/2">
              <!-- tabs -->
              <div class="tabs tabs-lifted">
                <button class="tab">Tab</button>
                <button class="tab tab-active">Tab</button>
                <button class="tab">Tab</button>
              </div>
              <!-- link -->
              <div class="flex flex-col">
                <span class="link">I'm a simple link</span>
                <span class="link link-primary">I'm a simple link</span>
                <span class="link link-secondary">I'm a simple link</span>
                <span class="link link-accent">I'm a simple link</span>
              </div>
            </div>
            <div class="flex flex-col gap-3 md:w-1/2">
              <progress value="20" max="100" class="progress">Default</progress>
              <progress value="25" max="100" class="progress progress-primary">Primary</progress>
              <progress value="30" max="100" class="progress progress-secondary">
                Secondary
              </progress>
              <progress value="40" max="100" class="progress progress-accent">Accent</progress>
              <progress value="45" max="100" class="progress progress-info">Info</progress>
              <progress value="55" max="100" class="progress progress-success">Success</progress>
              <progress value="70" max="100" class="progress progress-warning">Warning</progress>
              <progress value="90" max="100" class="progress progress-error">Error</progress>
            </div>
          </div>

          <div class="flex flex-col gap-3 md:flex-row">
            <!-- stat -->
            <div class="stats bg-base-300 border-base-300 border md:w-1/2">
              <div class="stat">
                <div class="stat-title">Total Page Views</div>
                <div class="stat-value">89,400</div>
                <div class="stat-desc">21% more than last month</div>
              </div>
            </div>

            <!-- radial progress -->
            <div class="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
              <div class="radial-progress" style="--value:60;--size:3.5rem">60%</div>
              <div class="radial-progress" style="--value:75;--size:3.5rem">75%</div>
              <div class="radial-progress" style="--value:90;--size:3.5rem">90%</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="md:w-1/2">
              <!-- toggle -->
              <div>
                <input type="checkbox" class="toggle" checked="checked" />
                <input type="checkbox" class="toggle toggle-primary" checked="checked" />
                <input type="checkbox" class="toggle toggle-secondary" checked="checked" />
                <input type="checkbox" class="toggle toggle-accent" checked="checked" />
              </div>
              <!-- checkbox -->
              <div>
                <input type="checkbox" class="checkbox" checked="checked" />
                <input type="checkbox" class="checkbox checkbox-primary" checked="checked" />
                <input type="checkbox" class="checkbox checkbox-secondary" checked="checked" />
                <input type="checkbox" class="checkbox checkbox-accent" checked="checked" />
              </div>
              <!-- radio -->
              <div>
                <input type="radio" name="radio-1" class="radio" checked="checked" />
                <input type="radio" name="radio-1" class="radio radio-primary" />
                <input type="radio" name="radio-1" class="radio radio-secondary" />
                <input type="radio" name="radio-1" class="radio radio-accent" />
              </div>
            </div>
            <!-- range -->
            <div class="md:w-1/2">
              <input type="range" min="0" max="100" value="90" class="range range-xs" />
              <input
                type="range"
                min="0"
                max="100"
                value="70"
                class="range range-xs range-primary" />
              <input
                type="range"
                min="0"
                max="100"
                value="50"
                class="range range-xs range-secondary" />
              <input
                type="range"
                min="0"
                max="100"
                value="40"
                class="range range-xs range-accent" />
            </div>
          </div>
          <!-- input -->
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="flex flex-col gap-3 md:w-1/2">
              <input type="text" placeholder="Default" class="input input-bordered w-full" />
              <input
                type="text"
                placeholder="Primary"
                class="input input-primary input-bordered w-full" />
              <input
                type="text"
                placeholder="Secondary"
                class="input input-secondary input-bordered w-full" />
              <input
                type="text"
                placeholder="Accent"
                class="input input-accent input-bordered w-full" />
            </div>
            <div class="flex flex-col gap-3 md:w-1/2">
              <input
                type="text"
                placeholder="Info"
                class="input input-info input-bordered w-full" />
              <input
                type="text"
                placeholder="Success"
                class="input input-success input-bordered w-full" />
              <input
                type="text"
                placeholder="Warning"
                class="input input-warning input-bordered w-full" />
              <input
                type="text"
                placeholder="Error"
                class="input input-error input-bordered w-full" />
            </div>
          </div>
          <!-- navbar -->
          <div class="navbar bg-neutral text-neutral-content rounded-box">
            <div class="flex-none">
              <button class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block h-5 w-5 stroke-current">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16">
                  </path>
                </svg>
              </button>
            </div>
            <div class="flex-1">
              <button class="btn btn-ghost text-xl">daisyUI</button>
            </div>
          </div>
          <div class="flex gap-3">
            <!-- headings -->
            <div class="flex flex-grow flex-col gap-3">
              <div class="text-4xl font-bold">Text Size 1</div>
              <div class="text-3xl font-bold">Text Size 2</div>
              <div class="text-2xl font-bold">Text Size 3</div>
              <div class="text-xl font-bold">Text Size 4</div>
              <div class="text-lg font-bold">Text Size 5</div>
              <div class="text-sm font-bold">Text Size 6</div>
              <div class="text-xs font-bold">Text Size 7</div>
            </div>
            <!-- step -->
            <ul class="steps steps-vertical">
              <li class="step step-primary">Step 1</li>
              <li class="step step-primary">Step 2</li>
              <li class="step">Step 3</li>
              <li class="step">Step 4</li>
            </ul>
          </div>
        </div>

        <!-- alert -->
        <div class="flex flex-col gap-3">
          <div class="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="stroke-info h-6 w-6 shrink-0">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
              </path>
            </svg>
            <span>12 unread messages. Tap to see.</span>
          </div>
          <div class="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="h-6 w-6 shrink-0 stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
              </path>
            </svg>
            <span>New software update available.</span>
          </div>
          <div class="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z">
              </path>
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
          <div class="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
              </path>
            </svg>
            <span>Warning: Invalid email address!</span>
          </div>
          <div class="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
              </path>
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
