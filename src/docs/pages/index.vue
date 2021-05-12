<template>
  <div>
    <div
      class="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-primary to-secondary text-primary-content"
    >
      <div
        class="inline-block w-full transform scale-150 opacity-5 -rotate-12 text-base-content"
        v-html="svgLogoSolid"
      ></div>
      <div class="flex-col justify-between w-full max-w-6xl hero-content lg:flex-row">
        <div
          class="flex-grow"
        >
          <!--
      <div class="btn-group">
        <button class="btn btn-xs btn-square" style="background:white;border-color:white;color:gray" data-set-theme="" title="auto" data-act-class="ACTIVECLASS">A</button>
        <button class="btn btn-xs btn-square" style="background:hsl(259 94% 51%);border-color:hsl(259 94% 51%);" data-set-theme="light" title="light" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(259 94% 61%);border-color:hsl(259 94% 61%);" data-set-theme="dark" title="dark" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(3 74% 76%);border-color:hsl(3 74% 76%);" data-set-theme="retro" title="retro" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(0 0% 100%);border-color:hsl(0 0% 100%);" data-set-theme="black" title="black" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(353 74% 67%);border-color:hsl(353 74% 67%);" data-set-theme="valentine" title="valentine" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(330 100% 85%);border-color:hsl(330 100% 85%);" data-set-theme="dracula" title="dracula" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(189 100% 63%);border-color:hsl(189 100% 63%);" data-set-theme="aqua" title="aqua" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(345 100% 73%);border-color:hsl(345 100% 73%);" data-set-theme="cyberpunk" title="cyberpunk" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(321 70% 69%);border-color:hsl(321 70% 69%);" data-set-theme="synthwave" title="synthwave" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(50 94% 58%);border-color:hsl(50 94% 58%);" data-set-theme="bumblebee" title="bumblebee" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(296 83% 25%);border-color:hsl(296 83% 25%);" data-set-theme="fantasy" title="fantasy" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(141 72% 42%);border-color:hsl(141 72% 42%);" data-set-theme="forest" title="forest" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(138 16% 43%);border-color:hsl(138 16% 43%);" data-set-theme="garden" title="garden" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(32 89% 52%);border-color:hsl(32 89% 52%);" data-set-theme="halloween" title="halloween" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(0 0% 100%);border-color:hsl(0 0% 100%);" data-set-theme="luxury" title="luxury" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(283 21% 80%);border-color:hsl(283 21% 80%);" data-set-theme="pastel" title="pastel" data-act-class="ACTIVECLASS"></button>
        <button class="btn btn-xs btn-square" style="background:hsl(183 47% 59%);border-color:hsl(183 47% 59%);" data-set-theme="cupcake" title="cupcake" data-act-class="ACTIVECLASS"></button>
      </div>
      -->
          <h1 class="py-20 mb-5 text-3xl font-extrabold text-center md:text-5xl md:py-0 lg:text-left xl:text-6xl">
            <div class="w-32 mb-2" v-html="svgLogoSolid"></div>
            Tailwind CSS <br/>Components
          </h1>

          <div
            class="w-full max-w-xs mx-auto mb-6 text-left shadow-lg lg:max-w-sm mockup-code glass lg:mx-0 text-primary-content"
          >
            <pre data-prefix="$"><code>npm i daisyui --save</code></pre>
          </div>
          <div class="max-w-sm mx-auto my-2 text-left md:max-w-md lg:mx-0 md:my-0">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 mb-2 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Clean HTML with component classes
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 mb-2 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Customizable and themeable
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 mb-2 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Pure CSS, No dependencies
            </div>
          </div>
          <div class="flex justify-center space-x-2 lg:justify-start">
            <NuxtLink to="/docs/install" class="mt-4 shadow-2xl btn-lg btn">
              Get started
            </NuxtLink>
            <NuxtLink
              to="/components/button"
              class="mt-4 btn-lg btn btn-ghost"
            >
              <span class="hidden md:inline">See</span>&nbsp; components
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div id="slider" class="grid items-center flex-grow-0">
            <div
              class="grid grid-cols-3 col-start-1 row-start-1 gap-6 p-6 glass rounded-box place-items-center"
            >
              <Button classes="">Button</Button>
              <Button classes="btn-primary">Button</Button>
              <Button classes="btn-secondary">Button</Button>
              <Button classes="btn-accent">Button</Button>
              <Button classes="btn-success">Button</Button>
              <Button classes="btn-info">Button</Button>
              <Button classes="btn-warning">Button</Button>
              <Button classes="btn-error">Button</Button>
              <Button classes="glass">Button</Button>
              <Button classes="btn-outline">Button</Button>
              <Button classes="btn-ghost">Button</Button>
              <Button classes="btn-disabled">Button</Button>
            </div>
            <div
              class="col-start-1 row-start-1 place-items-center place-content-center"
            >
              <div>
                <div class="justify-center w-full tabs">
                  <span
                    class="tab tab-lg tab-border-none tab-lifted text-secondary-content"
                    >Tab one</span
                  >
                  <span class="tab tab-lg tab-border-none tab-lifted tab-active"
                    >Tab two</span
                  >
                  <span
                    class="tab tab-lg tab-border-none tab-lifted text-secondary-content"
                    >Tab three</span
                  >
                </div>
                <div class="w-full p-4 card bg-base-100">
                  <div class="w-4/5 h-4 m-3 rounded-full bg-base-200"></div>
                  <div class="w-2/5 h-4 m-3 rounded-full bg-base-200"></div>
                  <div class="w-3/5 h-4 m-3 rounded-full bg-base-200"></div>
                </div>
              </div>
            </div>

            <div
              class="col-start-1 row-start-1 place-items-center place-content-center"
            >
              <Menu
                class="py-3 shadow-lg bg-base-100 text-base-content rounded-box"
              >
                <MenuItem class="menu-title">
                  <span>
                    List Title
                  </span>
                </MenuItem>
                <MenuItem>
                  <a href="#">
                    <Icon
                      glyph="lightning-bolt"
                      class="inline-block w-5 h-5 mr-2 stroke-current"
                    />
                    List item with icon
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#">
                    <Icon
                      glyph="bell"
                      class="inline-block w-5 h-5 mr-2 stroke-current"
                    />
                    List item with icon
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#">
                    <Icon
                      glyph="folder"
                      class="inline-block w-5 h-5 mr-2 stroke-current"
                    />
                    List item with icon
                    <Badge class="ml-2 success">9</Badge>
                  </a>
                </MenuItem>
              </Menu>
            </div>

            <div
              class="grid grid-cols-1 col-start-1 row-start-1 gap-6 place-items-center place-content-center"
            >
              <div class="btn-group">
                <button class="btn btn-sm">Previous</button>
                <button class="btn btn-sm">1</button>
                <button class="btn btn-sm btn-active">2</button>
                <button class="btn btn-sm">3</button>
                <button class="btn btn-sm">4</button>
                <button class="btn btn-sm">Next</button>
              </div>
              <div class="btn-group">
                <button class="btn">Previous</button>
                <button class="btn">1</button>
                <button class="btn btn-active">2</button>
                <button class="btn">3</button>
                <button class="btn">4</button>
                <button class="btn">Next</button>
              </div>
              <div class="btn-group">
                <button class="btn btn-xs">Previous</button>
                <button class="btn btn-xs">1</button>
                <button class="btn btn-xs btn-active">2</button>
                <button class="btn btn-xs">3</button>
                <button class="btn btn-xs">4</button>
                <button class="btn btn-xs">Next</button>
              </div>
            </div>

            <div
              class="grid grid-cols-4 col-start-1 row-start-1 gap-6 p-6 shadow-xl bg-base-100 bg-opacity-80 rounded-box place-items-center place-content-center"
            >
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-primary"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-secondary"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-accent"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes=""/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-primary"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-secondary"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-accent"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes=""/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-primary"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-secondary"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-accent"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes=""/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-primary"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-secondary"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes="toggle-accent"/></label>
              <label class="label" aria-label="toggle"> <Toggle classes=""/></label>
            </div>
          </div>
        </div>
      </div>
    </div>





























    <div class="min-h-screen hero bg-base-100 text-base-content">
      <div class="w-full max-w-xs text-center md:max-w-5xl hero-content">
        <div class="w-full">
          <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
            Clean HTML
          </h2>
          <h3 class="mb-5 text-3xl font-bold">with component classes</h3>
          <p class="w-full mx-auto mb-5 md:max-w-lg">
            Your HTML doesn't need to be messy.
            DaisyUI adds component classes to Tailwind CSS. Classes like
            <span class="badge badge-outline">btn</span>,
            <span class="badge badge-outline">card</span>, etc... No need to
            deal with hundreds of utility classes.
          </p>

          <div class="flex flex-col w-full my-20 lg:flex-row">
            <div class="flex-1 w-full max-w-xl mx-auto text-left shadow-lg mockup-code">
              <pre><code>&#x3C;a class=&#x22;<span class="text-warning">inline-block px-4 py-3
      text-sm font-semibold text-center
      text-white uppercase transition
      duration-200 ease-in-out bg-indigo-500
      rounded-md cursor-pointer
      hover:bg-indigo-600</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
            </div>

            <div class="hidden divider lg:flex divider-vertical text-base-content text-opacity-30">VS</div>
            <div class="divider lg:hidden text-base-content text-opacity-30">VS</div>

            <div class="flex-1 w-full max-w-xl mx-auto text-left shadow-lg mockup-code">
              <pre><code>&#x3C;a class=&#x22;<span class="text-success">btn btn-primary</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>






























    <div class="min-h-screen hero bg-neutral text-neutral-content">
      <div class="w-full text-center md:max-w-2xl hero-content">
        <div class="w-full">
          <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
            Highly customizable
          </h2>
          <h3 class="mb-5 text-3xl font-bold">using Tailwind's utility classes</h3>
          <p class="w-full mx-auto mb-5 md:max-w-lg">
            DaisyUI is based on Tailwind's utility classes and all components have low specificity so you can customize everything using utility classes.
            <br/>You can even <NuxtLink to="/docs/customize" class="link">use @apply</NuxtLink> to add your custom styles to components or you can <NuxtLink to="/docs/add-themes" class="link">change colors and other design decisions</NuxtLink> using CSS variables.
          </p>

          <div class="flex flex-col w-full max-w-xs mx-auto my-20 md:max-w-md lg:max-w-xl">
            <div class="flex-1 w-full text-left shadow-lg mockup-code bg-neutral-focus">
              <pre><code>&#x3C;a class=&#x22;<span class="text-info">btn btn-primary</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
            </div>

            <div
              class="divider text-neutral-content text-opacity-30"
            >
              ↓
            </div>

            <div class="flex-1 w-full text-left shadow-lg mockup-code bg-neutral-focus">
              <pre><code>&#x3C;a class=&#x22;<span class="text-info">btn btn-primary</span> <span class="text-success">rounded-full</span>&#x22;&#x3E;Button&#x3C;/a&#x3E;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>











    <div class="min-h-screen hero bg-gradient-to-br from-primary to-accent text-primary-content">
      <div class="w-full text-center md:max-w-2xl hero-content">
        <div class="w-full">
          <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
            Powerful theming
          </h2>
          <h3 class="mb-5 text-3xl font-bold">Apply your own design decisions</h3>
          <p class="w-full mx-auto mb-5 md:max-w-lg">
            DaisyUI adds a set of semantic color names to Tailwind. So instead of using generic color names
            like <span class="badge badge-ghost">bg-blue-500</span>,
            we can use semantic role names like <span class="badge badge-ghost">bg-primary</span>
            or <span class="badge badge-ghost">bg-success</span>.
            <br>All colors are CSS variables so you easily add dark mode by changing a few CSS variables.
            Try DaisyUI <NuxtLink to="/docs/default-themes" class="link">default themes</NuxtLink> or <NuxtLink to="/docs/add-themes" class="link">create your own theme</NuxtLink> in less than a minute!
          </p>

          <div class="flex flex-col w-full my-20 space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
            <div class="flex-1 w-full max-w-xs p-8 mx-auto card bg-base-100 text-base-content" data-theme="luxury">
              <h3 class="text-sm font-bold">Luxury Theme</h3>
              <div class="flex flex-col mt-2 space-y-2">
                <progress class="progress" value="40" max="100"></progress>
                <div class="flex items-center justify-center space-x-2">
                  <div class="btn btn-accent btn-sm btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><!----> <!----> <!---->
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
                    </svg>
                  </div>
                  <label class="label" aria-label="toggle"> <Toggle/></label>
                  <label class="label" aria-label="Checkbox"> <Checkbox/></label>
                </div>
                <button class="btn btn-block btn-sm btn-primary">Primary</button>
                <button class="btn btn-block btn-sm btn-secondary">Secondary</button>
                <button class="btn btn-block btn-sm btn-outline">Outline</button>
              </div>
            </div>

            <div class="flex-1 w-full max-w-xs p-8 mx-auto card bg-base-100 text-base-content" data-theme="cupcake">
              <h3 class="text-sm font-bold">Cupcake Theme</h3>
              <div class="flex flex-col mt-2 space-y-2">
                <progress class="progress" value="40" max="100"></progress>
                <div class="flex items-center justify-center space-x-2">
                  <div class="btn btn-accent btn-sm btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><!----> <!----> <!---->
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
                    </svg>
                  </div>
                  <label class="label" aria-label="toggle"> <Toggle/></label>
                  <label class="label" aria-label="Checkbox"> <Checkbox/></label>
                </div>
                <button class="btn btn-block btn-sm btn-primary">Primary</button>
                <button class="btn btn-block btn-sm btn-secondary">Secondary</button>
                <button class="btn btn-block btn-sm btn-outline">Outline</button>
              </div>
            </div>

            <div class="flex-1 w-full max-w-xs p-8 mx-auto card bg-base-100 text-base-content" data-theme="cyberpunk">
              <h3 class="text-sm font-bold">Cyberpunk Theme</h3>
              <div class="flex flex-col mt-2 space-y-2">
                <progress class="progress" value="40" max="100"></progress>
                <div class="flex items-center justify-center space-x-2">
                  <div class="btn btn-accent btn-sm btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><!----> <!----> <!---->
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
                    </svg>
                  </div>
                  <label class="label" aria-label="toggle"> <Toggle/></label>
                  <label class="label" aria-label="Checkbox"> <Checkbox/></label>
                </div>
                <button class="btn btn-block btn-sm btn-primary">Primary</button>
                <button class="btn btn-block btn-sm btn-secondary">Secondary</button>
                <button class="btn btn-block btn-sm btn-outline">Outline</button>
              </div>
            </div>

          </div>
            <NuxtLink to="/docs/default-themes" class="mb-20 btn btn-ghost btn-sm">Read more about themes</NuxtLink>
          <div>
          </div>

        </div>
      </div>
    </div>






































    <div class="min-h-screen hero bg-base-200 text-base-content">
      <div class="w-full text-center lg:max-w-5xl hero-content">
        <div class="w-full">
          <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
            Try it online
          </h2>
          <h3 class="mb-5 text-3xl font-bold"></h3>
          <p class="w-full mx-auto mb-5 md:max-w-lg">
            Use DaisyUI file from CDN (Tailwind CSS default style included)
          </p>
          <div class="w-full max-w-xs mx-auto my-2 md:max-w-md lg:max-w-2xl">
            <div class="text-sm shadow-lg mockup-code bg-neutral-focus">
              <pre><code><span class="text-neutral-content text-opacity-40">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ DAISYUI_VERSION }}/dist/full.css<span class="text-neutral-content text-opacity-40">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
            </div>
          </div>
          <p class="max-w-lg mx-auto mt-10 mb-5">
            Or try it online:
          </p>
          <div class="w-full max-w-xs mx-auto space-x-2 md:max-w-md">
            <a class="btn-outline btn-sm btn" target="_blank" rel="noopener" href="https://codepen.io/saadeghi/pen/gOwWKvv">Codepen</a>
            <a class="btn-outline btn-sm btn" target="_blank" rel="noopener" href="https://play.tailwindcss.com/RcIZd1Mwho">Tailwind Play</a>
          </div>
        </div>
      </div>
    </div>














    <div class="min-h-screen hero bg-base-100 text-base-content">
      <div class="w-full max-w-xs text-center md:max-w-5xl hero-content">
        <div class="w-full max-w-md">
          <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">
            Install DaisyUI
          </h2>
          <p class="w-full mx-auto mt-5 md:max-w-lg">
            No dependencies, pure CSS. Can be used as a Tailwind CSS plugin or as an independent CSS library
          </p>
          <p class="w-full mx-auto mt-5 text-left md:max-w-lg">
            1. Install DaisyUI as a Node package:
          </p>

          <div class="w-full max-w-md mx-auto my-2">
            <div class="text-left shadow-lg mockup-code">
              <pre data-prefix="$"><code>npm i daisyui --save</code></pre>
            </div>
            <p class="w-full mx-auto mt-5 text-left md:max-w-lg">
              2. Use DaisyUI as a Tailwind CSS plugin <span class="badge badge-outline badge-sm">recommended</span>
            </p>

            <div class="w-full max-w-4xl my-2">
              <div class="text-sm text-left shadow-lg mockup-code">
        <pre><code><span class="text-neutral-content text-opacity-40">// tailwind.config.js</span>
    module.exports = {
      plugins: [
        <span class="badge badge-secondary">require('daisyui'),</span>
      ],
    }</code></pre>
              </div>
            </div>


            <p class="w-full mx-auto mt-5 text-left md:max-w-lg">
              Or import the CSS file and use it only as a component library:
            </p>

            <div class="w-full max-w-4xl my-2">
              <div class="text-sm text-left shadow-lg mockup-code">
        <pre><code>import 'daisyui/dist/styled.css';</code></pre>
              </div>
            </div>

            <NuxtLink to="/docs/install" class="mt-4 mb-20 shadow-lg btn-wide btn-primary btn">
              Install guide
            </NuxtLink>

          </div>



        </div>
      </div>
    </div>











    <div class="hero bg-neutral text-neutral-content">
      <div class="w-full max-w-6xl py-20 text-center hero-content">
        <div>
          <div class="mb-10 text-center">
            <a class="my-1 btn btn-ghost btn-xs" target="_blank" rel="noopener" href="https://play.tailwindcss.com/RcIZd1Mwho">Tailwind Play</a>
            <a class="my-1 btn btn-ghost btn-xs" target="_blank" rel="noopener" href="https://codepen.io/saadeghi/pen/gOwWKvv">Codepen</a>
            <a class="my-1 btn btn-ghost btn-xs" target="_blank" rel="noopener" href="https://github.com/saadeghi/daisyui">Github</a>
            <a class="my-1 btn btn-ghost btn-xs" target="_blank" rel="noopener" href="https://www.npmjs.com/package/daisyui">NPM</a>
            <a class="my-1 btn btn-ghost btn-xs" target="_blank" rel="noopener" href="https://unpkg.com/browse/daisyui/">Unpkg</a>
            <a class="my-1 btn btn-ghost btn-xs" target="_blank" rel="noopener" href="https://www.jsdelivr.com/package/npm/daisyui">JSdeliver</a>
          </div>
          <div>
            <a href="https://twitter.com/Saadeghi" rel="noopener" target="_blank" class="inline-flex items-center justify-center hover:opacity-90">
              <div class="mr-3 avatar">
                <div class="p-px w-14 h-14 mask mask-squircle bg-neutral-focus">
                  <img src="https://github.com/saadeghi.png" class="mask mask-squircle" alt="Pouya Saadeghi">
                </div>
              </div>
              <div class="text-left">
                <p class="text-xs text-opacity-50 text-neutral-content">Designed and developed by</p>
                <h2 class="text-lg font-bold text-neutral-content">Pouya Saadeghi</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>














  </div>
</template>
<style>
#slider > div {
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  transform: scale(0.95);
  opacity: 0;
  --items: 5;
  --pause: 4s;
  animation: slider calc(var(--pause) * var(--items)) linear infinite;
}
#slider > div:nth-child(1) {
  animation-delay: calc(var(--pause) * 0);
}
#slider > div:nth-child(2) {
  animation-delay: calc(var(--pause) * 1);
}
#slider > div:nth-child(3) {
  animation-delay: calc(var(--pause) * 2);
}
#slider > div:nth-child(4) {
  animation-delay: calc(var(--pause) * 3);
}
#slider > div:nth-child(5) {
  animation-delay: calc(var(--pause) * 4);
}
@keyframes slider {
  100%,
  0%,
  16% {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  17%,
  99% {
    visibility: hidden;
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
<script>
import { themeChange } from "theme-change";

export default {
  layout: "landing",
  data() {
    return {
      DAISYUI_VERSION: process.env.DAISYUI_VERSION
    };
  },
  computed: {
    svgLogo() {
      return require(`~/static/logo.svg?raw`);
    },
    svgLogoSolid() {
      return require(`~/static/logo-solid.svg?raw`);
    }
  },
  mounted() {
    themeChange(false);
  }
};
</script>
