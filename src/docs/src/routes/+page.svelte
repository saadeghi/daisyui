<script>
  import SEO from "@components/SEO.svelte"
  import Ads from "@components/Ads.svelte"
  import HomepageHero from "@components/homepage/Hero.svelte"
  import HomepagePreview from "@components/homepage/Preview.svelte"
  import HomepageStats from "@components/homepage/Stats.svelte"
  import HomepageCleanHtml from "@components/homepage/CleanHtml.svelte"
  import HomepageCustomizable from "@components/homepage/Customizable.svelte"
  import HomepageTheming from "@components/homepage/Theming.svelte"
  import HomepageTry from "@components/homepage/Try.svelte"
  import HomepageInstall from "@components/homepage/Install.svelte"
  import Footer from "@components/Footer.svelte"
  import { siteStats } from "@src/lib/data.js"
  import { t } from "@src/lib/i18n"

  let activeMenuItemOnHeroMockup = 1
  let activeMenuItemOnCodeExample = 1
  let toggleValueForCodeCompare = false

  let scrollY
  function scaleValue(value, from, to) {
    var scale = (to[1] - to[0]) / (from[1] - from[0])
    var capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
    return capped * scale + to[0]
  }
  $: animateValue = function (targetElement, scrollPercentage, animateRange) {
    return (
      targetElement &&
      scaleValue(
        (scrollY / (targetElement.offsetTop + targetElement.clientHeight)) * 100,
        scrollPercentage,
        animateRange
      )
    )
  }

  let hero1
  let hero2

  $: scrollY = scrollY

  let demo_1_ClassNames = [
    "bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95",
    "btn btn-primary",
  ]
  $: demo_1_ClassNameHandler = () => {
    if (
      hero1 &&
      (scrollY / (hero1.offsetTop + hero1.clientHeight)) * 100 > 25 &&
      (scrollY / (hero1.offsetTop + hero1.clientHeight)) * 100 < 65
    ) {
      return demo_1_ClassNames[0].slice(
        0,
        Math.trunc(animateValue(hero1, [25, 65], [0, demo_1_ClassNames[0].length]))
      )
    } else if (
      hero1 &&
      (scrollY / (hero1.offsetTop + hero1.clientHeight)) * 100 > 65 &&
      (scrollY / (hero1.offsetTop + hero1.clientHeight)) * 100 < 80
    ) {
      return demo_1_ClassNames[0].slice(
        0,
        Math.trunc(animateValue(hero1, [75, 80], [demo_1_ClassNames[0].length, 0]))
      )
    } else if (hero1 && (scrollY / (hero1.offsetTop + hero1.clientHeight)) * 100 > 80) {
      return demo_1_ClassNames[1].slice(
        0,
        Math.trunc(animateValue(hero1, [80, 82], [0, demo_1_ClassNames[1].length]))
      )
    }
    return ""
  }
  $: demo_1_StyleHandler = () => {
    if (hero1 && (scrollY / (hero1.offsetTop + hero1.clientHeight)) * 100 > 80) {
      return "text-teal-600"
    }
    return "text-amber-600"
  }
  $: demo_1_ElementTextHandler = () => {
    if (hero1 && (scrollY / (hero1.offsetTop + hero1.clientHeight)) * 100 > 80) {
      return "daisyUI Button"
    }
    return "Tailwind Button"
  }
</script>

<svelte:window bind:scrollY />

<SEO title="daisyUI" desc="Tailwind Components Library - Free components for Tailwind CSS" />

<!-- hero content -->
<div>
  <div class="items-top flex min-h-[600vh] items-start justify-between" bind:this={hero1}>
    <div class="shrink-0">
      <div
        class="px-2 py-32 lg:pl-10 lg:pr-0"
        class:invisible={hero1 && scrollY > hero1.clientHeight}>
        <div class="badge badge-lg border-success/20 bg-success/5 w-full max-w-[13rem] font-mono">
          <pre><code>npm i -D daisyui</code></pre>
        </div>
        <div class="h-4" />
        <h1 class="font-title text-[clamp(2.5rem,8vw,5rem)] font-black leading-none">
          <span
            class="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">
            The most popular
          </span>
          <br />
          <span class="inline-grid">
            <span
              class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text opacity-70 blur-3xl [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]"
              aria-hidden="true">
              component library
            </span>
            <span
              class="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text leading-tight [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
              component library
            </span>
          </span>
          <br />
          <span
            class="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">
            for Tailwind CSS
          </span>
        </h1>
        <div class="h-4" />
        <p class="text-base-content/60 font-title py-4 text-2xl font-light">
          This plugin adds component class names to Tailwind CSS
          <br />
          so you can make beautiful websites
          <span class="border-base-content/20 border-b-2">faster than ever.</span>
        </p>
        <div class="h-10" />
        <div>
          <div>
            <a
              data-sveltekit-preload-data="hover"
              href="/components"
              class="btn group px-12 normal-case">
              <span class="hidden sm:inline">{$t("cta-1")}</span>
              <span class="inline sm:hidden">{$t("cta-1-mobile")}</span>
            </a>
            <a
              data-sveltekit-preload-data="hover"
              href="/docs/install"
              class="btn btn-neutral group px-12 normal-case">
              {$t("cta-2")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="h-[calc(30vh)]" />
      <div>
        <div class="max-w-[50vw] px-2 py-10 lg:px-10">
          <div class="font-title">
            <h2 class="text-7xl font-bold leading-none">
              Don't re-invent
              <br />
              the wheel
              <br />
              every time 🥱
            </h2>

            <p class="text-base-content/60 font-title py-4 text-2xl font-light">
              In a Tailwind CSS project, you need to write utiltiy class names for every element.
              Thousands of class names just to style the most basic elements.
            </p>
            <div class="h-32" />
            <div class="relative h-[300vh]">
              <div class="sticky top-[30vh]">
                <h2 class="text-7xl font-light leading-none">
                  Instead of writing
                  <span class="text-error">
                    <span class="font-black">100</span>
                    class names
                  </span>
                </h2>
                <div class="h-6" />
                <p class="text-base-content/60 font-title py-4 text-2xl font-light">
                  For every element, every page, every project,
                  <br />
                  again and again...
                </p>
                <div class="h-24" />
              </div>
            </div>
            <div class="relative h-screen">
              <div class="sticky top-[30vh]">
                <h2 class="text-7xl font-light leading-none">
                  use
                  <span class="text-success">
                    <span class="font-black">semantic</span>
                    <br />
                    class names
                  </span>
                </h2>
                <div class="h-6" />
                <p class="text-base-content/60 font-title py-4 text-2xl font-light">
                  It's faster, cleaner and easier to maintain.
                </p>
                <div class="h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- hero figure -->

    <div
      class="sticky -right-32 top-16 flex shrink overflow-x-hidden overflow-y-clip pb-16 pt-16 duration-700">
      <div
        class="mockup mockup-window bg-base-200 -right-20 h-[32rem] w-[50rem] origin-top overflow-visible rounded-r-none pb-4 pr-4 shadow-[-0.05rem_0.1rem_0rem_#00000014] [transform:rotateX(20deg)rotateZ(-20deg)skewY(8deg)scale(1)]"
        style={`transform: rotateX(${animateValue(
          hero1,
          [10, 20],
          [20, 0]
        )}deg)rotateZ(${animateValue(hero1, [7, 22], [-20, 0])}deg)skewY(${animateValue(
          hero1,
          [10, 20],
          [8, 0]
        )}deg)`}
        class:invisible={hero1 && hero2 && scrollY > hero1.clientHeight + hero2.clientHeight}>
        <div class="grid">
          <div class="col-start-1 row-start-1 grid">
            <!-- flying components -->
            <div
              class="col-start-1 row-start-1 flex items-start"
              class:invisible={hero1 && scrollY > hero1.clientHeight}>
              <div class="w-60">
                <div
                  class="relative -left-6 [filter:drop-shadow(-1rem_3rem_1rem_#00000012)]"
                  style={`transform:translate(${animateValue(
                    hero1,
                    [3, 23],
                    [0, 250]
                  )}px,${animateValue(hero1, [3, 23], [0, -800])}px)`}>
                  <div class="tabs">
                    <button
                      on:click={() => (activeMenuItemOnHeroMockup = 1)}
                      class:tab-active={activeMenuItemOnHeroMockup === 1}
                      class="tab tab-lifted tab-border-none w-1/3 grow text-xs">
                      Features
                    </button>
                    <button
                      on:click={() => (activeMenuItemOnHeroMockup = 2)}
                      class:tab-active={activeMenuItemOnHeroMockup === 2}
                      class="tab tab-lifted tab-border-none w-1/3 grow text-xs">
                      Links
                    </button>
                    <button
                      on:click={() => (activeMenuItemOnHeroMockup = 3)}
                      class:tab-active={activeMenuItemOnHeroMockup === 3}
                      class="tab tab-lifted tab-border-none w-1/3 grow text-xs">
                      Message
                    </button>
                  </div>
                  <div
                    class="bg-base-100 rounded-b-box h-60 shrink-0"
                    class:rounded-tr-box={activeMenuItemOnHeroMockup !== 3}
                    class:rounded-tl-box={activeMenuItemOnHeroMockup !== 1}>
                    {#if activeMenuItemOnHeroMockup === 1}
                      <div class="flex flex-col items-stretch px-6 py-8">
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">Faster development</span>
                            <input
                              type="checkbox"
                              class="toggle toggle-sm toggle-primary"
                              checked />
                          </label>
                        </div>
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">Cleaner HTML</span>
                            <input
                              type="checkbox"
                              class="toggle toggle-sm toggle-secondary"
                              checked />
                          </label>
                        </div>
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">Customizable</span>
                            <input type="checkbox" class="toggle toggle-sm toggle-accent" checked />
                          </label>
                        </div>
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">Themeable</span>
                            <input
                              type="checkbox"
                              class="toggle toggle-sm toggle-success"
                              checked />
                          </label>
                        </div>
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">Pure CSS</span>
                            <input type="checkbox" class="toggle toggle-sm" checked />
                          </label>
                        </div>
                      </div>
                    {/if}
                    {#if activeMenuItemOnHeroMockup === 2}
                      <ul class="menu">
                        <li class="menu-title">Dashboard</li>
                        <li>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-5 w-5">
                              <path
                                d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                            </svg>
                            Dashboard
                          </button>
                        </li>
                        <li>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-5 w-5">
                              <path
                                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                            </svg>
                            Notifications
                          </button>
                        </li>
                        <li>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-5 w-5">
                              <path
                                fill-rule="evenodd"
                                d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"
                                clip-rule="evenodd" />
                            </svg>
                            Messages
                          </button>
                        </li>
                        <li>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-5 w-5">
                              <path
                                d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                            </svg>
                            People
                          </button>
                        </li>
                        <li>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-5 w-5">
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd" />
                            </svg>
                            Products
                          </button>
                        </li>
                      </ul>
                    {/if}
                    {#if activeMenuItemOnHeroMockup === 3}
                      <div class="flex h-full flex-col px-4 py-4">
                        <div class="grow">
                          <div class="chat chat-start">
                            <div class="chat-image avatar">
                              <div class="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                              </div>
                            </div>
                            <div class="chat-bubble text-xs [.chat_&]:before:[left:-0.73rem]">
                              Use Tailwind CSS but write fewer class names.
                            </div>
                          </div>
                        </div>
                        <div class="join w-full">
                          <input
                            class="input input-bordered input-sm join-item w-full"
                            placeholder="Message" />
                          <button class="btn btn-neutral btn-sm join-item">
                            <svg
                              fill="currentColor"
                              class="h-4 w-4"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>

                <div class="flex flex-col gap-4 p-6">
                  <div
                    class="alert"
                    style={`transform:translate(${animateValue(
                      hero1,
                      [8, 28],
                      [0, 250]
                    )}px,${animateValue(hero1, [8, 28], [0, -800])}px)`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 shrink-0">
                      <path
                        fill-rule="evenodd"
                        d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="text-xs">
                      Pure CSS. <br />
                      No JS dependency
                    </span>
                  </div>
                  <div
                    class="alert"
                    style={`transform:translate(${animateValue(
                      hero1,
                      [10, 30],
                      [0, 250]
                    )}px,${animateValue(hero1, [10, 30], [0, -800])}px)`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 shrink-0">
                      <path
                        d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                    </svg>

                    <span class="text-xs">Works on all frameworks</span>
                  </div>
                </div>
              </div>

              <div class="flex shrink-0 flex-col gap-6">
                <div
                  class="card bg-base-100 shadow-sm"
                  style={`transform:translate(${animateValue(
                    hero1,
                    [0, 20],
                    [0, 250]
                  )}px,${animateValue(hero1, [0, 20], [0, -800])}px)`}>
                  <div class="card-body">
                    <h2 class="card-title mb-4 text-sm">Design system</h2>
                    <div class="grid grid-cols-4 items-end gap-4">
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input type="checkbox" class="checkbox checkbox-xs" />
                        <div class="text-base-content/60 text-[.6rem]">checkbox-xs</div>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input type="checkbox" class="checkbox checkbox-sm" />
                        <div class="text-base-content/60 text-[.6rem]">checkbox-sm</div>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input type="checkbox" class="checkbox checkbox-md" />
                        <div class="text-base-content/60 text-[.6rem]">checkbox-md</div>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input type="checkbox" class="checkbox checkbox-lg" />
                        <div class="text-base-content/60 text-[.6rem]">checkbox-lg</div>
                      </label>
                    </div>
                    <div class="grid grid-cols-4 items-end gap-4">
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-xs" />
                        <div class="text-base-content/60 text-[.6rem]">radio-xs</div>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-sm" />
                        <div class="text-base-content/60 text-[.6rem]">radio-sm</div>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-md" />
                        <div class="text-base-content/60 text-[.6rem]">radio-md</div>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-lg" />
                        <div class="text-base-content/60 text-[.6rem]">radio-lg</div>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  class="card bg-base-100 shadow-sm"
                  style={`transform:translate(${animateValue(
                    hero1,
                    [5, 25],
                    [0, 250]
                  )}px,${animateValue(hero1, [5, 25], [0, -800])}px)`}>
                  <div class="card-body">
                    <h2 class="card-title mb-4 text-sm">Semantic colors</h2>
                    <div class="grid grid-cols-4 gap-4">
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-primary rounded-btn aspect-square w-10" />
                        <div class="text-base-content/60 text-[.6rem]">primary</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-secondary rounded-btn aspect-square w-10" />
                        <div class="text-base-content/60 text-[.6rem]">secondary</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-accent rounded-btn aspect-square w-10" />
                        <div class="text-base-content/60 text-[.6rem]">accent</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-neutral rounded-btn aspect-square w-10" />
                        <div class="text-base-content/60 text-[.6rem]">neutral</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-info rounded-btn aspect-square w-10" />
                        <div class="text-base-content/60 text-[.6rem]">info</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-success rounded-btn aspect-square w-10" />
                        <div class="text-base-content/60 text-[.6rem]">success</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-warning rounded-btn aspect-square w-10" />
                        <div class="text-base-content/60 text-[.6rem]">warning</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-error rounded-btn aspect-square w-10" />
                        <div class="text-base-content/60 text-[.6rem]">error</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-start-1 row-start-1 w-11/12 p-10 opacity-0"
            style={`opacity:${animateValue(hero1, [20, 22], [0, 1])}`}>
            <pre class="max-w-lg"><code class="whitespace-pre-wrap">
<span class="text-base-content/40 italic">// Styling a simple button</span>

&lt;button class=&quot;<span
                  class={`${demo_1_StyleHandler()}`}>{demo_1_ClassNameHandler()}</span>&quot;&gt;
  {demo_1_ElementTextHandler()}
&lt;/button&gt;</code></pre>
            <div>
              <div class="text-base-content/40 py-6 font-mono italic">// Result:</div>
              <button class={`${demo_1_ClassNameHandler()}`}>{demo_1_ElementTextHandler()}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sticky bottom-0 flex justify-end p-4">
    <Ads slot="carbon1" />
  </div>
</div>

<div class="w-full px-2 py-40 lg:px-10">
  <div class="text-center">
    <h2 class="font-title relative z-[2] mx-auto text-7xl font-black leading-none">
      Take Tailwind CSS <br />
      to the
      <span
        class="bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
        next level
      </span>
    </h2>
    <p class="text-base-content/60 font-title py-4 text-2xl font-light">
      daisyUI adds class names to Tailwind CSS
      <br />
      for all common UI components.
      <br />
      Class names like
      <a href="/components/button/" class="link">btn</a>
      ,
      <a href="/components/card/" class="link">card</a>
      ,
      <a href="/components/toggle/" class="link">toggle</a>
      and many more.
    </p>
    <div class="h-6" />
    <p class="text-success font-title text-2xl font-light">
      This allows us to focus on important things
      <br />
      instead of styling basic elements for every project.
    </p>
    <div class="h-12" />
    <div class="flex w-full justify-center">
      <a data-sveltekit-preload-data="hover" href="/components/" class="btn btn-primary btn-wide">
        {$t("all-components-btn")}
      </a>
    </div>
  </div>
</div>

<div>
  <div>
    <div class="relative">
      <div class="w-full px-2 py-40 lg:px-10">
        <div class="text-center">
          <h2 class="font-title relative z-[2] mx-auto text-7xl font-black leading-none">
            No more ugly HTML!
          </h2>
          <p class="text-base-content/60 font-title relative z-[2] py-4 text-3xl font-light">
            Write fewer class names
            <br />
            Use component class names, modify them using Tailwind CSS utilities.
          </p>
          <div class="h-4" />
          <div class="text-base-content/40 mx-auto w-72 text-left">
            <span class="inline-block -translate-y-2 -rotate-12">Click</span>
            <svg
              class="inline-block h-8 w-20"
              viewBox="0 0 45 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1.50244C23.4 -1.69756 38.3333 11.1691 43 18.0024M43 18.0024L38 17.0024M43 18.0024V13.0024"
                stroke="currentColor" />
            </svg>
          </div>
          <div class="flex justify-center pb-10 pt-4">
            <label class="flex cursor-pointer items-center gap-3">
              Tailwind only
              <div class="relative">
                <div
                  class="pointer-events-none absolute left-1/2 top-1/2 grid h-20 w-60 -translate-x-1/2 -translate-y-1/2">
                  <div
                    class="bg-primary/30 col-start-1 row-start-1 scale-[2] rounded-full blur-[5rem]" />
                </div>
                <input
                  type="checkbox"
                  class="toggle toggle-lg toggle-primary relative z-[2]"
                  bind:checked={toggleValueForCodeCompare} />
              </div>
              Tailwind + daisyUI
            </label>
          </div>
        </div>
        <div class="flex items-center gap-6">
          {#if toggleValueForCodeCompare}
            <div
              class="mockup-code border-base-content/10 text-base-content relative h-[550px] max-w-[calc(70vw-5rem)] grow border bg-transparent text-xs">
              <pre
                class="w-full whitespace-pre-wrap px-6 before:hidden"><code />&lt;div class=&quot;<span
                  class="text-teal-600">card bg-base-200 w-80</span>&quot;&gt;
  &lt;div class=&quot;<span class="text-teal-600">card-body</span>&quot;&gt;
    &lt;input placeholder=&quot;Email&quot; class=&quot;<span
                  class="text-teal-600">input input-bordered</span>&quot; /&gt;
    &lt;label class=&quot;<span class="text-teal-600">label cursor-pointer</span>&quot;&gt;
      Accept terms of use
      &lt;input type=&quot;checkbox&quot; class=&quot;<span
                  class="text-teal-600">toggle</span>&quot; /&gt;
    &lt;/label&gt;
    &lt;label class=&quot;<span class="text-teal-600">label cursor-pointer</span>&quot;&gt;
      Submit to newsletter
      &lt;input type=&quot;checkbox&quot; class=&quot;<span
                  class="text-teal-600">toggle</span>&quot; /&gt;
    &lt;/label&gt;
    &lt;button class=&quot;<span
                  class="text-teal-600">btn btn-neutral</span>&quot;&gt;Save&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
            </div>
            <div class="divider divider-horizontal">→</div>
            <div>
              <div class="card bg-base-200 w-80">
                <div class="card-body">
                  <input placeholder="Email" class="input input-bordered" />
                  <label class="label cursor-pointer">
                    Accept terms of use
                    <input type="checkbox" class="toggle" />
                  </label>
                  <label class="label cursor-pointer">
                    Submit to newsletter
                    <input type="checkbox" class="toggle" />
                  </label>
                  <button class="btn btn-neutral">Save</button>
                </div>
              </div>
            </div>
          {:else}
            <div
              class="mockup-code border-base-content/10 text-base-content relative h-[550px] max-w-[calc(70vw-5rem)] grow border bg-transparent text-xs">
              <pre
                class="w-full whitespace-pre-wrap px-6 before:hidden"><code />&lt;div class=&quot;<span
                  class="text-amber-600">w-80 rounded-2xl bg-gray-100</span>&quot;&gt;
  &lt;div class=&quot;<span class="text-amber-600">flex flex-col gap-2 p-8</span>&quot;&gt;
    &lt;input placeholder=&quot;Email&quot; class=&quot;<span
                  class="text-amber-600">w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100</span>&quot; /&gt;
    &lt;label class=&quot;<span
                  class="text-amber-600">flex cursor-pointer items-center justify-between p-1</span>&quot;&gt;
      Accept terms of use
      &lt;div class=&quot;<span class="text-amber-600">relative inline-block</span>&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;<span
                  class="text-amber-600">peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2</span>&quot; /&gt;
        &lt;span class=&quot;<span
                  class="text-amber-600">pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900</span>&quot;&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/label&gt;
    &lt;label class=&quot;<span
                  class="text-amber-600">flex cursor-pointer items-center justify-between p-1</span>&quot;&gt;
      Submit to newsletter
      &lt;div class=&quot;<span class="text-amber-600">relative inline-block</span>&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;<span
                  class="text-amber-600">peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2</span>&quot; /&gt;
        &lt;span class=&quot;<span
                  class="text-amber-600">pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900</span>&quot;&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/label&gt;
    &lt;button class=&quot;<span
                  class="text-amber-600">inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95</span>&quot;&gt;Save&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
            </div>
            <div class="divider divider-horizontal">→</div>
            <div>
              <div class="w-80 rounded-2xl bg-gray-100">
                <div class="flex flex-col gap-2 p-8">
                  <input
                    placeholder="Email"
                    class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                  <label class="flex cursor-pointer items-center justify-between p-1">
                    Accept terms of use
                    <div class="relative inline-block">
                      <input
                        type="checkbox"
                        class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
                      <span
                        class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900" />
                    </div>
                  </label>
                  <label class="flex cursor-pointer items-center justify-between p-1">
                    Submit to newsletter
                    <div class="relative inline-block">
                      <input
                        type="checkbox"
                        class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
                      <span
                        class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900" />
                    </div>
                  </label>
                  <button
                    class="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
                    Save
                  </button>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
<div class="h-[100vh]" bind:this={hero2}>
  <div class="relative">
    <div class="flex items-center justify-between">
      <div class="shrink-0 px-2 py-10 lg:pl-10 lg:pr-0">
        <h2 class="font-title text-[clamp(2.5rem,8vw,5rem)] font-black leading-none">
          <span>Fewer class names</span>
          <br />
          <span>Faster development</span>
          <br />
          <span>Smaller file size</span>
        </h2>
        <div class="h-10" />
        <p class="text-base-content/60 font-title text-3xl font-light">
          With daisyUI, you write 80% fewer class names
          <br />
          And your HTML size will be about 50% smaller.
        </p>
      </div>
      <div class="grid grow-0 grid-cols-5 gap-6 p-10">
        <div
          class="card border-base-content/10 col-span-3 col-start-1 row-start-1 flex flex-col border border-dashed">
          <div class="card-body">
            <h3>
              <span class="font-bold">CSS Class names</span>
            </h3>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>Tailwind only</span>
                <span class="font-mono text-xs">107</span>
              </div>
              <progress class="progress progress-warning w-56" value="93" max="100" />
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>Tailwind + daisyUI</span>
                <span class="font-mono text-xs">14</span>
              </div>
              <progress class="progress progress-success w-56" value="46" max="100" />
            </div>
            <span class="mt-2 flex gap-2 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                fill="currentColor"
                class="text-success">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              86% fewer class names
            </span>
          </div>
        </div>
        <div
          class="card border-base-content/10 col-span-3 col-start-3 row-start-2 flex flex-col border border-dashed">
          <div class="card-body">
            <h3>
              <span class="font-bold">HTML size</span>
            </h3>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>Tailwind only</span>
                <span class="font-mono text-xs">1884 byte</span>
              </div>
              <progress class="progress progress-warning w-56" value="84" max="100" />
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>Tailwind + daisyUI</span>
                <span class="font-mono text-xs">471 byte</span>
              </div>
              <progress class="progress progress-success w-56" value="37" max="100" />
            </div>
            <span class="mt-2 flex gap-2 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                fill="currentColor"
                class="text-success">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              74% smaller DOM size
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- <HomepageHero /> -->

<div class="bg-base-200 flex flex-col items-center gap-20 py-20">
  <!-- <HomepagePreview /> -->
  <HomepageStats />
  <div class="flex w-full justify-center">
    <a data-sveltekit-preload-data="hover" href="/components" class="btn btn-primary btn-wide">
      {$t("all-components-btn")}
    </a>
  </div>
</div>
<!-- <HomepageCleanHtml /> -->
<!-- <HomepageCustomizable /> -->
<HomepageTheming />
<HomepageTry />
<HomepageInstall />
<Footer />
