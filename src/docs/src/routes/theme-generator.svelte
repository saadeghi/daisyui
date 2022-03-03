<script>
  import { onMount } from "svelte"
  import { browser } from "$app/env"
  import SEO from "@components/SEO.svelte"
  import ColorPicker from "@components/ColorPicker.svelte"

  import { default as Color } from "color"
  import { default as randomColor } from "randomcolor"

  function getColorValueFromTheme(variable) {
    if (browser) {
      return Color(`hsl(${getComputedStyle(document.documentElement).getPropertyValue(variable)})`).hex()
    }
    return null
  }

  const requiredColorNames = ["primary", "secondary", "accent", "neutral", "base-100", "info", "success", "warning", "error"]

  $: colors = [
    {
      name: "primary",
      variable: "--p",
      value: getColorValueFromTheme("--p"),
    },
    {
      name: "primary-focus",
      variable: "--pf",
      value: getColorValueFromTheme("--pf"),
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
      name: "secondary-focus",
      variable: "--sf",
      value: getColorValueFromTheme("--sf"),
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
      name: "accent-focus",
      variable: "--af",
      value: getColorValueFromTheme("--af"),
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
      name: "neutral-focus",
      variable: "--nf",
      value: getColorValueFromTheme("--nf"),
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
    return {
      name: name,
      variable: variable,
      value: Color(colors.find((item) => item.name === source).value)
        .darken(percentage)
        .hex(),
    }
  }
  function contrastMaker(name, variable, source, percentage = 0.8) {
    if (Color(colors.find((item) => item.name === source).value).isDark()) {
      return {
        name: name,
        variable: variable,
        value: Color(colors.find((item) => item.name === source).value)
          .mix(Color("white"), percentage)
          .saturate(10),
      }
    } else {
      return {
        name: name,
        variable: variable,
        value: Color(colors.find((item) => item.name === source).value)
          .mix(Color("black"), percentage)
          .saturate(10),
      }
    }
  }

  function generateOptionalColors(colors) {
    let optionalColors = []
    optionalColors.push(darken("primary-focus", "--pf", "primary"))
    optionalColors.push(darken("secondary-focus", "--sf", "secondary"))
    optionalColors.push(darken("accent-focus", "--af", "accent"))
    optionalColors.push(darken("neutral-focus", "--nf", "neutral"))

    optionalColors.push(darken("base-200", "--b2", "base-100", 0.1))
    optionalColors.push(darken("base-300", "--b3", "base-100", 0.2))
    optionalColors.push(contrastMaker("base-content", "--bc", "base-100"))

    optionalColors.push(contrastMaker("primary-content", "--pc", "primary"))
    optionalColors.push(contrastMaker("secondary-content", "--sc", "secondary"))
    optionalColors.push(contrastMaker("accent-content", "--ac", "accent"))
    optionalColors.push(contrastMaker("neutral-content", "--nc", "neutral"))

    optionalColors.push(contrastMaker("info-content", "--inc", "info"))
    optionalColors.push(contrastMaker("success-content", "--suc", "success"))
    optionalColors.push(contrastMaker("warning-content", "--wac", "warning"))
    optionalColors.push(contrastMaker("error-content", "--erc", "error"))
    return optionalColors
  }

  function generateColors(newColorToCheck = "transparent") {
    if (CSS.supports("color", newColorToCheck)) {
      colors
        .filter((item) => requiredColorNames.includes(item.name))
        .forEach((color) => {
          let hslValue = Color(color.value).hsl().round().array()
          wrapper.style.setProperty(color.variable, hslValue[0] + " " + hslValue[1] + "% " + hslValue[2] + "%")
        })
      generateOptionalColors(colors).forEach((color) => {
        let hslValue = Color(color.value).hsl().round().array()
        wrapper.style.setProperty(color.variable, hslValue[0] + " " + hslValue[1] + "% " + hslValue[2] + "%")
      })
      if (browser) {
        localStorage.setItem("daisyui-theme-generator-colors", JSON.stringify(colors))
      }
    } else {
      console.log(`${newColorToCheck} is not a valid color`)
    }
  }

  function resetColors() {
    if (browser && localStorage.getItem("daisyui-theme-generator-colors")) {
      localStorage.removeItem("daisyui-theme-generator-colors")
      colors = JSON.parse(localStorage.getItem("daisyui-theme-generator-default-colors"))
      generateColors()
    }
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function randomize() {
    localStorage.removeItem("daisyui-theme-generator-colors")
    ;["primary", "secondary", "accent"].forEach((element) => {
      colors[0].value = randomColor() //primary
      colors[3].value = randomColor() //secondary
      colors[6].value = randomColor() //accent
      colors[9].value = Color(`hsl(${randomBetween(200, 300)} ${randomBetween(10, 30)}% ${randomBetween(10, 20)}%)`).hex() //neutral
      colors[12].value = Color(`hsl(${randomBetween(200, 300)} ${randomBetween(0, 40)}% ${[randomBetween(20, 30), randomBetween(90, 100)][Math.round(Math.random())]}%)`).hex() //base-100
      colors[16].value = Color(`hsl(${randomBetween(190, 230)} ${randomBetween(50, 90)}% ${randomBetween(50, 80)}%)`).hex() //info
      colors[18].value = Color(`hsl(${randomBetween(142, 175)} ${randomBetween(60, 80)}% ${randomBetween(20, 70)}%)`).hex() //success
      colors[20].value = Color(`hsl(${randomBetween(30, 50)} ${randomBetween(80, 97)}% ${randomBetween(30, 70)}%)`).hex() //warning
      colors[22].value = Color(`hsl(${randomBetween(340, 370)} ${randomBetween(70, 97)}% ${randomBetween(50, 70)}%)`).hex() //error
    })
    generateColors()
  }

  let wrapper
  onMount(() => {
    if (browser) {
      localStorage.setItem("daisyui-theme-generator-default-colors", JSON.stringify(colors))
      if (localStorage.getItem("daisyui-theme-generator-colors")) {
        colors = JSON.parse(localStorage.getItem("daisyui-theme-generator-colors"))
      }
    }
    generateColors()
  })
</script>

<SEO title="daisyUI Theme Generator" desc="Tailwind CSS Theme Generator - Tailwind CSS daisyUI custom theme and custom colors" img={`/images/theme-generator.jpg`} />

<div class="prose mb-10">
  <h1>daisyUI Theme Generator</h1>
  <p>
    You can add your custom themes to <span class="badge badge-outline">tailwind.config.js</span>
    file in
    <span class="badge badge-outline">daisyui > themes</span>
    array. In this page, you can pick required color values and see how the components will look like with them.
  </p>
  <div class="alert alert-info not-prose mb-2 text-sm">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content h-6 w-6 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <div>
        <p>You can also define optional colors to have more control on the color values (for example: the color of button when it's focused of the color of the text on a button)</p>
        <p>
          Check out <a class="link font-bold" href="/docs/colors/">colors page</a>
          to see all the color names you can use.
        </p>
      </div>
    </div>
  </div>
  <div class="alert alert-info not-prose text-sm">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info-content h-6 w-6 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <div>
        <p>
          check out <a class="link font-bold" href="/docs/themes/">themes page</a>
          to see all the CSS variables you can use to customize the design desicion (example: border-radius, animations, etc.)
        </p>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-col gap-4 xl:flex-row">
  <div class="flex-shrink-0 xl:min-w-[29rem]">
    <div class="sticky top-[5.5rem]">
      <h2 class="px-2 pb-4 text-xl font-bold">tailwind.config.js</h2>
      {#if browser}
        <div class="mockup-code not-prose relative">
          <div class="absolute top-2 right-2">
            <button class="btn btn-xs normal-case" on:click={() => randomize()}>Randomize</button>
            <button class="btn btn-xs normal-case" on:click={() => resetColors()}>Reset</button>
          </div>
          <pre><code class="text-neutral-content/30">{`module.exports = {`}</code>
<code>{`    daisyui: {
      themes: [
        {
          mytheme: {`}</code>
{#each colors.filter((item) => requiredColorNames.includes(item.name)) as color}
              <code>          <span data-tip="Pick →" class:tooltip={colors.filter((item) => requiredColorNames.includes(item.name))[0] == color} class="tooltip-open tooltip-accent tooltip-left align-middle"><span class="inline-block w-1" /><ColorPicker bind:value={color.value} on:set={() => generateColors(color.value)} /></span>"{color.name}": "<span class="bg-neutral-focus hover:outline-neutral-content/20 focus:outline-neutral-content rounded-sm px-1 hover:outline focus:outline" contenteditable="true" bind:innerHTML={color.value} on:input={() => generateColors(color.value)} on:keyup={() => generateColors(color.value)}>{color.value}</span>",
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
  <div data-theme="light">
    <h2 class="px-2 pb-4 text-xl font-bold">Preview</h2>
    <div class="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6" data-theme="mytheme" bind:this={wrapper}>
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
            <div class="tabs">
              <button class="tab tab-lifted">Tab</button>
              <button class="tab tab-lifted tab-active">Tab</button>
              <button class="tab tab-lifted">Tab</button>
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
            <progress value="30" max="100" class="progress progress-secondary">Secondary</progress>
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
              <input type="checkbox" class="toggle" checked />
              <input type="checkbox" class="toggle toggle-primary" checked />
              <input type="checkbox" class="toggle toggle-secondary" checked />
              <input type="checkbox" class="toggle toggle-accent" checked />
            </div>
            <!-- checkbox -->
            <div>
              <input type="checkbox" class="checkbox" checked />
              <input type="checkbox" class="checkbox checkbox-primary" checked />
              <input type="checkbox" class="checkbox checkbox-secondary" checked />
              <input type="checkbox" class="checkbox checkbox-accent" checked />
            </div>
            <!-- radio -->
            <div>
              <input type="radio" name="radio-1" class="radio" checked />
              <input type="radio" name="radio-1" class="radio radio-primary" />
              <input type="radio" name="radio-1" class="radio radio-secondary" />
              <input type="radio" name="radio-1" class="radio radio-accent" />
            </div>
          </div>
          <!-- range -->
          <div class="md:w-1/2">
            <input type="range" min="0" max="100" value="90" class="range range-xs" />
            <input type="range" min="0" max="100" value="70" class="range range-xs range-primary" />
            <input type="range" min="0" max="100" value="50" class="range range-xs range-secondary" />
            <input type="range" min="0" max="100" value="40" class="range range-xs range-accent" />
          </div>
        </div>
        <!-- input -->
        <div class="flex flex-col gap-3 md:flex-row">
          <div class="flex flex-col gap-3 md:w-1/2">
            <input type="text" placeholder="Default" class="input input-bordered w-full" />
            <input type="text" placeholder="Primary" class="input input-primary input-bordered w-full" />
            <input type="text" placeholder="Secondary" class="input input-secondary input-bordered w-full" />
            <input type="text" placeholder="Accent" class="input input-accent input-bordered w-full" />
          </div>
          <div class="flex flex-col gap-3 md:w-1/2">
            <input type="text" placeholder="Info" class="input input-info input-bordered w-full" />
            <input type="text" placeholder="Success" class="input input-success input-bordered w-full" />
            <input type="text" placeholder="Warning" class="input input-warning input-bordered w-full" />
            <input type="text" placeholder="Error" class="input input-error input-bordered w-full" />
          </div>
        </div>
        <!-- navbar -->
        <div class="navbar bg-neutral text-neutral-content rounded-box">
          <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          <div class="flex-1">
            <button class="btn btn-ghost text-xl normal-case">daisyUI</button>
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
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 flex-shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>12 unread messages. Tap to see.</span>
          </div>
        </div>
        <div class="alert alert-info">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 flex-shrink-0 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>New software update available.</span>
          </div>
        </div>
        <div class="alert alert-success">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
        <div class="alert alert-warning">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>Warning: Invalid email address!</span>
          </div>
        </div>
        <div class="alert alert-error">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
