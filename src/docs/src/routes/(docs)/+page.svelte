<script>
  // import { onMount } from "svelte"
  import Countup from "svelte-countup"
  import SEO from "$components/SEO.svelte"
  import Ads from "$components/Ads.svelte"
  // import HomepageInstall from "$components/homepage/Install.svelte"
  import Footer from "$components/Footer.svelte"
  import { t } from "$lib/i18n"

  // import ComponentsPreview from "$components/homepage/ComponentsPreview.svelte"
  // let ComponentsPreview
  // const sleep = (ms) => new Promise((f) => setTimeout(f, ms))
  // onMount(async () => {
  // await sleep(1000)
  // ComponentsPreview = (await import("../../components/homepage/ComponentsPreview.svelte")).default
  // })

  export let data

  let isClipboardButtonPressed = false
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    isClipboardButtonPressed = true
    setTimeout(() => {
      isClipboardButtonPressed = false
    }, 2000)
  }

  let activeMenuItemOnHeroMockup = 1
  let toggleValueForCodeCompare = false

  let scrollY
  let innerHeight
  function scaleValue(value, from, to) {
    let scale = (to[1] - to[0]) / (from[1] - from[0])
    let capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
    return capped * scale + to[0]
  }
  $: animateValue = function (targetElement, scrollPercentage, animateRange) {
    if (targetElement) {
      return scaleValue(
        ((scrollY - targetElement.offsetTop) / targetElement.clientHeight) * 100,
        scrollPercentage,
        animateRange
      )
    }
    return 0
  }

  let section = []

  $: scrollY = scrollY

  let demo_1_ClassNames = [
    "bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95",
    "btn btn-primary",
  ]
  $: demo_1_ClassNameHandler = () => {
    if (
      section["hero"] &&
      (scrollY / (section["hero"].offsetTop + section["hero"].clientHeight)) * 100 > 25 &&
      (scrollY / (section["hero"].offsetTop + section["hero"].clientHeight)) * 100 < 65
    ) {
      return demo_1_ClassNames[0].slice(
        0,
        Math.trunc(animateValue(section["hero"], [25, 65], [0, demo_1_ClassNames[0].length]))
      )
    } else if (
      section["hero"] &&
      (scrollY / (section["hero"].offsetTop + section["hero"].clientHeight)) * 100 > 65 &&
      (scrollY / (section["hero"].offsetTop + section["hero"].clientHeight)) * 100 < 80
    ) {
      return demo_1_ClassNames[0].slice(
        0,
        Math.trunc(animateValue(section["hero"], [75, 80], [demo_1_ClassNames[0].length, 0]))
      )
    } else if (
      section["hero"] &&
      (scrollY / (section["hero"].offsetTop + section["hero"].clientHeight)) * 100 > 80
    ) {
      return demo_1_ClassNames[1].slice(
        0,
        Math.trunc(animateValue(section["hero"], [80, 82], [0, demo_1_ClassNames[1].length]))
      )
    }
    return ""
  }
  $: demo_1_StyleHandler = () => {
    if (
      section["hero"] &&
      (scrollY / (section["hero"].offsetTop + section["hero"].clientHeight)) * 100 > 80
    ) {
      return "text-teal-700"
    }
    return "text-rose-600"
  }
  $: demo_1_ElementTextHandler = () => {
    if (
      section["hero"] &&
      (scrollY / (section["hero"].offsetTop + section["hero"].clientHeight)) * 100 > 80
    ) {
      return "daisyUI Button"
    }
    return "Tailwind Button"
  }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<SEO
  title="daisyUI"
  desc="Best Tailwind Components Library - Free UI components for Tailwind CSS" />

<!-- hero content -->
<div>
  <div
    class="flex min-h-[550vh] max-w-[100vw] flex-col items-center justify-start xl:flex-row xl:items-start xl:justify-between"
    bind:this={section["hero"]}>
    <div class="shrink xl:w-1/2">
      <div
        class="flex min-h-[calc(100vh-4rem)] items-center justify-center px-2 py-10 text-center xl:justify-start xl:pe-0 xl:ps-10 xl:text-start"
        class:invisible={section["hero"] && scrollY > section["hero"].clientHeight}>
        <div>
          <div class="flex flex-col items-center gap-6 xl:flex-row">
            <div
              data-tip={isClipboardButtonPressed ? "copied" : "copy"}
              class="tooltip tooltip-accent">
              <button
                class="btn btn-sm cursor-copy rounded-full font-mono font-light"
                on:click={() => copyText("npm i -D daisyui@latest")}>
                <pre><code>npm i -D daisyui</code></pre>
              </button>
            </div>
            <div class="flex gap-2 font-mono text-xs">
              <a
                class="link link-hover text-base-content/70 italic"
                href="https://github.com/saadeghi/daisyui/discussions/2507"
                target="_blank"
                rel="noopener, noreferrer">
                {@html $t("daisyUI 4 upgrade guide")}
              </a>
            </div>
            <!-- <div class="flex gap-2">
              <a class="link link-hover link-primary rounded-full" href="/docs/changelog/">
                {@html $t("daisyUI 3 is available now!")}
              </a>
              🎉
            </div> -->
          </div>
          <div class="h-4" />
          <h1
            class="font-title text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] [word-break:auto-phrase] xl:w-[115%] xl:text-start [:root[dir=rtl]_&]:leading-[1.35]">
            <span
              class="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">
              {@html $t("The most popular")}
            </span>
            <br />
            <span class="inline-grid">
              <span
                class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [transform:translate3d(0,0,0)] [-webkit-text-fill-color:transparent] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                aria-hidden="true"
                data-text={$t("component library")}>
              </span>
              <span
                class="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                {@html $t("component library")}
              </span>
            </span>
            <br />
            <span
              class="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">
              {@html $t("for Tailwind CSS")}
            </span>
          </h1>
          <div class="h-4" />
          <p class="text-base-content/70 font-title py-4 font-light md:text-lg xl:text-2xl">
            {@html $t(
              "daisyUI adds component class names to Tailwind&nbsp;CSS<br /> so you can make beautiful websites <span class='border-base-content/20 border-b-2'>faster than ever.</span>"
            )}
          </p>
          <div class="h-10" />
          <div>
            <div
              class="inline-flex w-full flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:justify-start xl:px-0">
              <a
                data-sveltekit-preload-data
                href="/components/"
                class="btn md:btn-lg md:btn-wide group px-12">
                <span class="hidden sm:inline">{$t("cta-1")}</span>
                <span class="inline sm:hidden">{$t("cta-1-mobile")}</span>
              </a>
              <a
                data-sveltekit-preload-data
                href="/docs/install/"
                class="btn btn-neutral md:btn-lg md:btn-wide group px-12">
                {$t("cta-2")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:h-[calc(20vh)]" />
      <div>
        <div class="max-w-[100vw] px-2 py-10 lg:px-10 xl:max-w-[50vw]">
          <div class="font-title text-center xl:text-start">
            <h2 class="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none">
              {@html $t("don't re-invent <br/>the wheel <br/>every time")}
              <img
                loading="lazy"
                width="72"
                height="72"
                alt="yawing face emoji"
                src="/images/emoji/yawning-face@80.webp"
                srcset={`/images/emoji/yawning-face.webp 2x`}
                class="pointer-events-none inline-block h-[1em] w-[1em] align-bottom" />
            </h2>

            <p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
              {@html $t(
                "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements."
              )}
            </p>
            <div class="h-40" />
            <div class="relative h-[300vh]">
              <div class="sticky top-[16vh] xl:top-[30vh]">
                <h2 class="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none">
                  {@html $t(
                    "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>"
                  )}
                </h2>
                <div class="h-6" />
                <p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
                  {@html $t("For every element, every page, every project,<br/>again and again")}…
                </p>
                <div class="h-24" />
              </div>
            </div>
            <div class="relative h-screen">
              <div class="sticky top-[16vh] xl:top-[30vh]">
                <h2 class="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-none">
                  {@html $t(
                    "use <span class='text-success'><span class='font-black'>semantic</span> <br />class names</span>"
                  )}
                  <img
                    loading="lazy"
                    width="72"
                    height="72"
                    alt="sunglasses emoji"
                    src="/images/emoji/smiling-face-with-sunglasses@80.webp"
                    srcset={`/images/emoji/smiling-face-with-sunglasses.webp 2x`}
                    class="pointer-events-none inline-block h-[1em] w-[1em] align-bottom" />
                </h2>
                <div class="h-6" />
                <p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
                  {@html $t("It's descriptive, faster, cleaner and easier to maintain.")}
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
      class="invisible sticky bottom-4 flex w-[calc(100%-2rem)] shrink duration-700 xl:visible xl:-end-32 xl:bottom-auto xl:top-16 xl:w-auto xl:!transform-none xl:overflow-x-hidden xl:overflow-y-clip xl:bg-transparent xl:pb-16 xl:pt-16"
      style={`${
        section["hero"] && scrollY > section["hero"].clientHeight * 0.2
          ? "visibility: visible;"
          : ""
      }transform:translateY(${animateValue(section["hero"], [17, 25], [120, 0])}%)`}>
      <div
        class="mockup mockup-window bg-base-200/90 xl:bg-base-200 mx-auto origin-top overflow-visible pb-4 backdrop-blur will-change-auto [--rtl-reverse:1] [transform:rotateX(20deg)rotateZ(-20deg)skewY(8deg)scale(1)] rtl:[--rtl-reverse:-1] rtl:[transform:rotateX(20deg)rotateZ(20deg)skewY(-8deg)scale(1)] max-[1279px]:![transform:translate3d(0,0,0)] xl:-end-20 xl:-me-10 xl:h-[32rem] xl:w-[50rem] xl:rounded-e-none xl:pe-4 xl:shadow-[-0.05rem_0.1rem_0rem_#00000014] xl:backdrop-blur-0"
        style={section["hero"] &&
          `transform: rotateX(${animateValue(
            section["hero"],
            [7, 17],
            [20, 0]
          )}deg)rotateZ(calc(${animateValue(
            section["hero"],
            [7, 17],
            [-20, 0]
          )}deg * var(--rtl-reverse)))skewY(calc(${animateValue(
            section["hero"],
            [7, 17],
            [8, 0]
          )}deg * var(--rtl-reverse)))`}
        class:invisible={section["hero"] && scrollY > section["hero"].clientHeight}>
        <div class="grid">
          <div
            style={`opacity:${animateValue(section["hero"], [15, 17], [1, 0])}`}
            class="z-[1] col-start-1 row-start-1 grid overflow-y-hidden overflow-x-scroll [scrollbar-width:none] xl:visible xl:overflow-x-visible xl:overflow-y-visible [&::-webkit-scrollbar]:hidden"
            class:invisible={section["hero"] && scrollY < section["hero"].clientHeight}>
            <!-- flying components -->
            <div
              class="col-start-1 row-start-1 mx-6 flex items-end gap-6 xl:mx-0 xl:items-start xl:gap-0">
              <div class="flex gap-6 xl:w-60 xl:flex-col xl:gap-0">
                <div
                  class="relative z-[1] w-80 will-change-auto motion-reduce:!transform-none max-[1279px]:![transform:translate3d(0,0,0)] xl:-start-6 xl:w-auto xl:[filter:drop-shadow(-1rem_3rem_1rem_#00000012)]"
                  style={`filter: drop-shadow(calc(-1rem * var(--rtl-reverse)) 3rem 1rem #00000012);transform:translate(calc(${animateValue(
                    section["hero"],
                    [2, 9],
                    [0, 250]
                  )}px * var(--rtl-reverse)),${animateValue(
                    section["hero"],
                    [2, 9],
                    [0, -800]
                  )}px)`}>
                  <div class="tabs tabs-lifted">
                    <button
                      on:click={() => (activeMenuItemOnHeroMockup = 1)}
                      class:tab-active={activeMenuItemOnHeroMockup === 1}
                      class="tab tab-border-none whitespace-nowrap text-xs">
                      {$t("Features")}
                    </button>
                    <button
                      on:click={() => (activeMenuItemOnHeroMockup = 2)}
                      class:tab-active={activeMenuItemOnHeroMockup === 2}
                      class="tab tab-border-none whitespace-nowrap text-xs">
                      {$t("Links")}
                    </button>
                    <button
                      on:click={() => (activeMenuItemOnHeroMockup = 3)}
                      class:tab-active={activeMenuItemOnHeroMockup === 3}
                      class="tab tab-border-none whitespace-nowrap text-xs">
                      {$t("Message")}
                    </button>
                  </div>
                  <div
                    class="bg-base-100 rounded-b-box h-60 shrink-0"
                    class:rounded-se-box={activeMenuItemOnHeroMockup !== 3}
                    class:rounded-ss-box={activeMenuItemOnHeroMockup !== 1}>
                    {#if activeMenuItemOnHeroMockup === 1}
                      <div class="flex flex-col items-stretch p-6">
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">{$t("Faster development")}</span>
                            <input
                              type="checkbox"
                              class="toggle toggle-sm toggle-primary"
                              name="toggle"
                              checked />
                          </label>
                        </div>
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">{$t("Cleaner HTML")}</span>
                            <input
                              type="checkbox"
                              class="toggle toggle-sm toggle-secondary"
                              name="toggle"
                              checked />
                          </label>
                        </div>
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">{$t("Customizable")}</span>
                            <input
                              type="checkbox"
                              class="toggle toggle-sm toggle-accent"
                              name="toggle"
                              checked />
                          </label>
                        </div>
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">{$t("Themeable")}</span>
                            <input
                              type="checkbox"
                              class="toggle toggle-sm toggle-success"
                              name="toggle"
                              checked />
                          </label>
                        </div>
                        <div class="form-control">
                          <label class="label cursor-pointer">
                            <span class="label-text text-xs">{$t("Pure CSS")}</span>
                            <input type="checkbox" class="toggle toggle-sm" name="toggle" checked />
                          </label>
                        </div>
                      </div>
                    {/if}
                    {#if activeMenuItemOnHeroMockup === 2}
                      <ul class="menu">
                        <li class="menu-title">{$t("Dashboard")}</li>
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
                            {$t("Dashboard")}
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
                            {$t("Notifications")}
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
                            {$t("Messages")}
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
                            {$t("People")}
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
                            {$t("Products")}
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
                                <img
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  src="/tailwind-css-component-profile-1@94w.jpg"
                                  alt="tailwind css avatar component" />
                              </div>
                            </div>
                            <div
                              class="chat-bubble text-xs [.chat_&]:before:[inset-inline-start:-0.73rem]">
                              {$t("Use Tailwind CSS but write fewer class names.")}
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

                <div
                  class="flex w-60 flex-col justify-end gap-4 xl:w-auto xl:justify-normal xl:p-6">
                  <div
                    class="alert rounded-btn border-base-300 border will-change-auto motion-reduce:!transform-none motion-reduce:!shadow-none max-[1279px]:![transform:translate3d(0,0,0)]"
                    style={`box-shadow:calc(${animateValue(
                      section["hero"],
                      [5, 5.5],
                      [0, -1]
                    )}rem * var(--rtl-reverse)) ${animateValue(
                      section["hero"],
                      [5, 5.5],
                      [0, 3]
                    )}rem ${animateValue(
                      section["hero"],
                      [5, 5.5],
                      [0, 1]
                    )}rem #00000012;transform:translate(calc(${animateValue(
                      section["hero"],
                      [5, 15],
                      [0, 250]
                    )}px * var(--rtl-reverse)),${animateValue(
                      section["hero"],
                      [5, 15],
                      [0, -800]
                    )}px)`}>
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
                      {@html $t("Pure CSS. <br />No JS dependency")}
                    </span>
                  </div>
                  <div
                    class="alert rounded-btn border-base-300 border will-change-auto motion-reduce:!transform-none motion-reduce:!shadow-none max-[1279px]:![transform:translate3d(0,0,0)]"
                    style={`box-shadow:calc(${animateValue(
                      section["hero"],
                      [6, 6.5],
                      [0, -1]
                    )}rem * var(--rtl-reverse)) ${animateValue(
                      section["hero"],
                      [6, 6.5],
                      [0, 3]
                    )}rem ${animateValue(
                      section["hero"],
                      [6, 6.5],
                      [0, 1]
                    )}rem #00000012;transform:translate(calc(${animateValue(
                      section["hero"],
                      [6, 16],
                      [0, 250]
                    )}px * var(--rtl-reverse)),${animateValue(
                      section["hero"],
                      [6, 16],
                      [0, -800]
                    )}px)`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 shrink-0">
                      <path
                        d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                    </svg>
                    <span class="text-xs">
                      {@html $t("Works on all frameworks")}
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex shrink-0 gap-6 pe-4 xl:flex-col xl:pe-0">
                <div
                  class="card bg-base-100 shadow-sm will-change-auto motion-reduce:!transform-none motion-reduce:!shadow-sm max-[1279px]:![transform:translate3d(0,0,0)]"
                  style={`--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05), calc(${animateValue(
                    section["hero"],
                    [0, 0.5],
                    [0, -1]
                  )}rem * var(--rtl-reverse)) ${animateValue(
                    section["hero"],
                    [0, 0.5],
                    [0, 3]
                  )}rem ${animateValue(
                    section["hero"],
                    [0, 0.5],
                    [0, 1]
                  )}rem #00000012;transform:translate(calc(${animateValue(
                    section["hero"],
                    [0, 8],
                    [0, 250]
                  )}px * var(--rtl-reverse)),${animateValue(
                    section["hero"],
                    [0, 8],
                    [0, -800]
                  )}px)`}>
                  <div class="card-body">
                    <h2 class="card-title mb-4 text-sm">{$t("Design system")}</h2>
                    <div class="grid grid-cols-4 items-end gap-4">
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          class="checkbox checkbox-xs"
                          tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">checkbox-xs</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          class="checkbox checkbox-sm"
                          tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">checkbox-sm</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          class="checkbox checkbox-md"
                          tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">checkbox-md</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          class="checkbox checkbox-lg"
                          tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">checkbox-lg</span>
                      </label>
                    </div>
                    <div class="grid grid-cols-4 items-end gap-4">
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-xs" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">radio-xs</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-sm" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">radio-sm</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-md" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">radio-md</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-lg" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">radio-lg</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  class="card bg-base-100 shadow-sm will-change-auto motion-reduce:!transform-none motion-reduce:!shadow-sm max-[1279px]:![transform:translate3d(0,0,0)]"
                  style={`--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05), calc(${animateValue(
                    section["hero"],
                    [4, 4.5],
                    [0, -1]
                  )}rem * var(--rtl-reverse)) ${animateValue(
                    section["hero"],
                    [4, 4.5],
                    [0, 3]
                  )}rem ${animateValue(
                    section["hero"],
                    [4, 4.5],
                    [0, 1]
                  )}rem #00000012;transform:translate(calc(${animateValue(
                    section["hero"],
                    [4, 10],
                    [0, 250]
                  )}px * var(--rtl-reverse)),${animateValue(
                    section["hero"],
                    [4, 10],
                    [0, -800]
                  )}px)`}>
                  <div class="card-body">
                    <h2 class="card-title mb-4 text-sm">Semantic colors</h2>
                    <div class="grid grid-cols-4 gap-4">
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-primary rounded-btn aspect-square w-10" />
                        <div class="text-base-content/70 text-[.6rem]">primary</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-secondary rounded-btn aspect-square w-10" />
                        <div class="text-base-content/70 text-[.6rem]">secondary</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-accent rounded-btn aspect-square w-10" />
                        <div class="text-base-content/70 text-[.6rem]">accent</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-neutral rounded-btn aspect-square w-10" />
                        <div class="text-base-content/70 text-[.6rem]">neutral</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-info rounded-btn aspect-square w-10" />
                        <div class="text-base-content/70 text-[.6rem]">info</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-success rounded-btn aspect-square w-10" />
                        <div class="text-base-content/70 text-[.6rem]">success</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-warning rounded-btn aspect-square w-10" />
                        <div class="text-base-content/70 text-[.6rem]">warning</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-error rounded-btn aspect-square w-10" />
                        <div class="text-base-content/70 text-[.6rem]">error</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            dir="ltr"
            class="col-start-1 row-start-1 w-11/12 pb-3 pe-10 ps-10 opacity-0 rtl:ps-0 sm:pb-10 lg:pe-4 rtl:lg:ps-20 xl:ps-20 xl:pt-10"
            style={`opacity:${animateValue(
              section["hero"],
              [16, 17],
              [0, 1]
            )};z-index:${animateValue(section["hero"], [20, 22], [0, 1])}`}>
            <pre class="max-w-lg text-xs sm:text-base"><code class="whitespace-pre-wrap">
<span class="text-base-content/40 italic">// {$t("Styling a simple button")}</span>

&lt;button class=&quot;<span
                  class={`${demo_1_StyleHandler()}`}>{demo_1_ClassNameHandler()}</span>&quot;&gt;
  {demo_1_ElementTextHandler()}
&lt;/button&gt;</code></pre>
            <div>
              <div class="text-base-content/40 py-6 font-mono text-xs italic sm:text-base">
                // {$t("Result")}:
              </div>
              <button class={`${demo_1_ClassNameHandler()}`}>{demo_1_ElementTextHandler()}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pointer-events-none bottom-0 flex justify-center p-4 xl:sticky xl:justify-end">
    <Ads slot="carbon1" />
  </div>
</div>

<div class="w-full px-2 py-40 lg:px-10" bind:this={section["nextlevel"]}>
  <div class="text-center">
    <h2
      class="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none will-change-auto [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1279px]:!tracking-normal"
      style={`letter-spacing:${animateValue(section["nextlevel"], [-100, 20], [1, 0])}rem`}>
      {$t("Take Tailwind CSS")}
      <br />
      <span
        class="bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text will-change-auto [transform:translate3d(0,0,0)] [-webkit-text-fill-color:transparent] motion-reduce:!tracking-normal max-[1279px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
        style={`letter-spacing:${animateValue(section["nextlevel"], [-100, 20], [0, 1])}rem`}>
        {$t("to the next level")}
      </span>
    </h2>
    <p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
      {@html $t(
        "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like"
      )}
      <a target="_blank" href="/components/button/" class="link">btn</a>
      ,
      <a target="_blank" href="/components/card/" class="link">card</a>
      ,
      <a target="_blank" href="/components/toggle/" class="link">toggle</a>
      {@html $t("and many more.")}
    </p>
    <div class="h-6" />
    <p class="text-success font-title font-light md:text-2xl">
      {@html $t(
        "This allows us to focus on important things<br />instead of styling basic elements for every project."
      )}
    </p>
    <div class="h-12" />
    <div class="flex w-full justify-center">
      <a data-sveltekit-preload-data href="/components/" class="btn btn-primary btn-wide">
        {$t("all-components-btn")}
      </a>
    </div>
  </div>
</div>

<div bind:this={section["uglyhtml"]}>
  <div>
    <div class="relative overflow-hidden">
      <div class="w-full px-2 py-40 lg:px-10">
        <div class="text-center">
          <h2
            class="font-title relative z-[2] mx-auto text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none">
            <span
              class="motion-reduce:!opacity-100"
              style={`opacity:${
                section["uglyhtml"] &&
                ((scrollY - section["uglyhtml"].offsetTop) / section["uglyhtml"].clientHeight) *
                  100 >
                  -100 &&
                ((scrollY - section["uglyhtml"].offsetTop) / section["uglyhtml"].clientHeight) *
                  100 <
                  -30
                  ? 0.1
                  : 1
              }`}>
              {$t("No_more_ugly_HTML_part_1")}
            </span>
            <span
              class="motion-reduce:!opacity-100"
              style={`opacity:${
                section["uglyhtml"] &&
                ((scrollY - section["uglyhtml"].offsetTop) / section["uglyhtml"].clientHeight) *
                  100 >
                  -100 &&
                ((scrollY - section["uglyhtml"].offsetTop) / section["uglyhtml"].clientHeight) *
                  100 <
                  -25
                  ? 0.1
                  : 1
              }`}>
              {$t("No_more_ugly_HTML_part_2")}
            </span>
            <span
              class="motion-reduce:!opacity-100"
              style={`opacity:${
                section["uglyhtml"] &&
                ((scrollY - section["uglyhtml"].offsetTop) / section["uglyhtml"].clientHeight) *
                  100 >
                  -100 &&
                ((scrollY - section["uglyhtml"].offsetTop) / section["uglyhtml"].clientHeight) *
                  100 <
                  -20
                  ? 0.1
                  : 1
              }`}>
              {$t("No_more_ugly_HTML_part_3")}
            </span>
            <span
              class="motion-reduce:!opacity-100"
              style={`opacity:${
                section["uglyhtml"] &&
                ((scrollY - section["uglyhtml"].offsetTop) / section["uglyhtml"].clientHeight) *
                  100 >
                  -100 &&
                ((scrollY - section["uglyhtml"].offsetTop) / section["uglyhtml"].clientHeight) *
                  100 <
                  -15
                  ? 0.1
                  : 1
              }`}>
              {$t("No_more_ugly_HTML_part_4")}
            </span>
          </h2>
          <p class="text-base-content/70 font-title relative z-[2] py-4 font-light md:text-3xl">
            {@html $t(
              "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities."
            )}
          </p>
          <div class="h-4" />
          <div class="mx-auto w-72 text-start">
            <span class="text-base-content/70 inline-block -translate-y-2 -rotate-12">
              {$t("Click")}
            </span>
            <svg
              class="text-base-content/20 inline-block h-8 w-20 rtl:[transform:rotateY(180deg)]"
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
              {$t("Tailwind only")}
              <div class="relative">
                <div
                  class="pointer-events-none absolute start-1/2 top-1/2 grid h-20 w-60 -translate-x-1/2 -translate-y-1/2">
                  <div
                    class="bg-primary/30 col-start-1 row-start-1 scale-[2] rounded-full blur-[5rem] [transform:translate3d(0,0,0)]" />
                </div>
                <input
                  name="tailwind-va-daisyui"
                  type="checkbox"
                  class="toggle toggle-lg toggle-primary relative z-[2]"
                  bind:checked={toggleValueForCodeCompare} />
              </div>
              {$t("Tailwind + daisyUI")}
            </label>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6 xl:flex-row">
          {#if toggleValueForCodeCompare}
            <div
              class="mockup-code border-base-content/10 text-base-content relative max-w-[calc(100vw-2rem)] grow border bg-transparent text-xs xl:h-[550px]">
              <pre
                class="w-full whitespace-pre-wrap px-6 before:hidden"><code />&lt;div class=&quot;<span
                  class="text-teal-700">card bg-base-200 w-80</span>&quot;&gt;
  &lt;div class=&quot;<span class="text-teal-700">card-body</span>&quot;&gt;
    &lt;input placeholder=&quot;Email&quot; class=&quot;<span
                  class="text-teal-700">input input-bordered</span>&quot; /&gt;
    &lt;label class=&quot;<span class="text-teal-700">label cursor-pointer</span>&quot;&gt;
      {$t("Accept terms of use")}
      &lt;input type=&quot;checkbox&quot; class=&quot;<span
                  class="text-teal-700">toggle</span>&quot; /&gt;
    &lt;/label&gt;
    &lt;label class=&quot;<span class="text-teal-700">label cursor-pointer</span>&quot;&gt;
      {$t("Submit to newsletter")}
      &lt;input type=&quot;checkbox&quot; class=&quot;<span
                  class="text-teal-700">toggle</span>&quot; /&gt;
    &lt;/label&gt;
    &lt;button class=&quot;<span class="text-teal-700">btn btn-neutral</span>&quot;&gt;{$t(
                  "Save"
                )}&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
            </div>
            <div class="divider xl:divider-horizontal">
              <span class="hidden rtl:rotate-180 xl:inline">→</span>
              <span class="xl:hidden">↓</span>
            </div>
            <div>
              <div class="card bg-base-200 w-80">
                <div class="card-body">
                  <input
                    placeholder="Email"
                    class="input input-bordered"
                    name="sample-input-field" />
                  <label class="label cursor-pointer">
                    {$t("Accept terms of use")}
                    <input name="sample-checkbox" type="checkbox" class="toggle" />
                  </label>
                  <label class="label cursor-pointer">
                    {$t("Submit to newsletter")}
                    <input name="sample-checkbox" type="checkbox" class="toggle" />
                  </label>
                  <button class="btn btn-neutral">{$t("Save")}</button>
                </div>
              </div>
            </div>
          {:else}
            <div
              class="mockup-code border-base-content/10 text-base-content relative max-w-[calc(100vw-2rem)] grow border bg-transparent text-xs xl:h-[550px]">
              <pre
                class="w-full whitespace-pre-wrap px-6 before:hidden"><code />&lt;div class=&quot;<span
                  class="text-rose-600">w-80 rounded-2xl bg-gray-100</span>&quot;&gt;
  &lt;div class=&quot;<span class="text-rose-600">flex flex-col gap-2 p-8</span>&quot;&gt;
    &lt;input placeholder=&quot;Email&quot; class=&quot;<span
                  class="text-rose-600">w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100</span>&quot; /&gt;
    &lt;label class=&quot;<span
                  class="text-rose-600">flex cursor-pointer items-center justify-between p-1</span>&quot;&gt;
      {$t("Accept terms of use")}
      &lt;div class=&quot;<span class="text-rose-600">relative inline-block</span>&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;<span
                  class="text-rose-600">peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2</span>&quot; /&gt;
        &lt;span class=&quot;<span
                  class="text-rose-600">pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900</span>&quot;&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/label&gt;
    &lt;label class=&quot;<span
                  class="text-rose-600">flex cursor-pointer items-center justify-between p-1</span>&quot;&gt;
      {$t("Submit to newsletter")}
      &lt;div class=&quot;<span class="text-rose-600">relative inline-block</span>&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;<span
                  class="text-rose-600">peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2</span>&quot; /&gt;
        &lt;span class=&quot;<span
                  class="text-rose-600">pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900</span>&quot;&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/label&gt;
    &lt;button class=&quot;<span
                  class="text-rose-600">inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95</span>&quot;&gt;{$t(
                  "Save"
                )}&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
            </div>
            <div class="divider xl:divider-horizontal">
              <span class="hidden rtl:rotate-180 xl:inline">→</span>
              <span class="xl:hidden">↓</span>
            </div>
            <div>
              <div class="w-80 rounded-2xl bg-gray-100 text-black">
                <div class="flex flex-col gap-2 p-8">
                  <input
                    name="sample-email"
                    placeholder="Email"
                    class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                  <label class="flex cursor-pointer items-center justify-between p-1">
                    {$t("Accept terms of use")}
                    <div class="relative inline-block">
                      <input
                        name="sample-checkbox"
                        type="checkbox"
                        class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
                      <span
                        class="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900" />
                    </div>
                  </label>
                  <label class="flex cursor-pointer items-center justify-between p-1">
                    {$t("Submit to newsletter")}
                    <span class="relative inline-block">
                      <input
                        type="checkbox"
                        name="sample-checkbox"
                        class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
                      <span
                        class="pointer-events-none absolute start-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:start-7 peer-checked:bg-gray-900" />
                    </span>
                  </label>
                  <button
                    class="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
                    {$t("Save")}
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

<div class="min-h-[100vh] overflow-hidden pb-40 pt-32" bind:this={section["performance"]}>
  <div class="relative">
    <div
      class="relative flex flex-col items-center justify-center gap-10 px-4 md:px-10 xl:flex-row-reverse xl:gap-20">
      <div>
        <div
          class="bg-primary pointer-events-none absolute start-20 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]" />
        <div
          class="bg-success pointer-events-none absolute aspect-square w-full rounded-full opacity-10 blur-3xl [transform:translate3d(0,0,0)]" />
        <h2
          class="font-title text-center text-[clamp(2rem,8vw,4rem)] font-black leading-none xl:text-start">
          <span
            class="motion-reduce:!opacity-100"
            style={`opacity:${
              section["performance"] &&
              ((scrollY - section["performance"].offsetTop) / section["performance"].clientHeight) *
                100 >
                -100 &&
              ((scrollY - section["performance"].offsetTop) / section["performance"].clientHeight) *
                100 <
                -40
                ? 0.1
                : 1
            }`}>
            {$t("Fewer class names")}
          </span>
          <br />
          <span
            class="motion-reduce:!opacity-100"
            style={`opacity:${
              section["performance"] &&
              ((scrollY - section["performance"].offsetTop) / section["performance"].clientHeight) *
                100 >
                -100 &&
              ((scrollY - section["performance"].offsetTop) / section["performance"].clientHeight) *
                100 <
                -35
                ? 0.1
                : 1
            }`}>
            {$t("Faster development")}
          </span>
          <br />
          <span
            class="motion-reduce:!opacity-100"
            style={`opacity:${
              section["performance"] &&
              ((scrollY - section["performance"].offsetTop) / section["performance"].clientHeight) *
                100 >
                -100 &&
              ((scrollY - section["performance"].offsetTop) / section["performance"].clientHeight) *
                100 <
                -30
                ? 0.1
                : 1
            }`}>
            {$t("Smaller file size")}
          </span>
        </h2>
        <div class="h-10" />
        <p class="text-base-content/70 font-title text-center font-light md:text-3xl xl:text-start">
          {@html $t(
            "With daisyUI, you write 80% fewer class names<br />And your HTML size will be about 70% smaller."
          )}
        </p>
        <div class="h-10" />
        <div class="flex w-full justify-center xl:justify-start">
          <a data-sveltekit-preload-data href="/docs/install/" class="btn btn-lg btn-wide group">
            {$t("Get started")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
      <div class="grid shrink-0 gap-6 xl:grid-cols-5">
        <div
          class="card border-base-content/10 col-span-3 col-start-1 row-start-1 flex flex-col border border-dashed will-change-auto motion-reduce:!transform-none"
          style={`transform:translateX(${animateValue(
            section["performance"],
            [-70, -20],
            [20, 0]
          )}%)`}>
          <div class="card-body">
            <h3>
              <span class="font-bold">{$t("CSS Class names")}</span>
            </h3>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>{$t("Tailwind only")}</span>
                <span class="font-mono text-xs">107</span>
              </div>
              <progress class="progress progress-warning w-56" value={93} max="100" />
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>{$t("Tailwind + daisyUI")}</span>
                <span class="font-mono text-xs">14</span>
              </div>
              <progress
                class="progress progress-success w-56"
                value={animateValue(section["performance"], [-70, -20], [100, 12])}
                max="100" />
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
              86% {$t("fewer class names")}
            </span>
          </div>
        </div>
        <div
          class="card border-base-content/10 col-span-3 row-start-2 flex flex-col border border-dashed will-change-auto motion-reduce:!transform-none xl:col-start-3"
          style={`transform:translateX(${animateValue(
            section["performance"],
            [-70, -20],
            [-20, 0]
          )}%)`}>
          <div class="card-body">
            <h3>
              <span class="font-bold">{$t("HTML size")}</span>
            </h3>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>{$t("Tailwind only")}</span>
                <span class="font-mono text-xs">1884 byte</span>
              </div>
              <progress class="progress progress-warning w-56" value={93} max="100" />
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>{$t("Tailwind + daisyUI")}</span>
                <span class="font-mono text-xs">471 byte</span>
              </div>
              <progress
                class="progress progress-success w-56"
                value={animateValue(section["performance"], [-70, -20], [100, 20])}
                max="100" />
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
              74% {$t("smaller DOM size")}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class="bg-neutral text-neutral-content relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-hidden p-10 md:p-20"
  bind:this={section["customizable"]}>
  <div
    class="relative flex max-w-[100rem] flex-col items-center justify-center xl:flex-row xl:gap-20">
    <div class="relative z-[1] w-full py-10">
      <h2 class="font-title text-center font-black leading-none xl:text-start">
        <span
          class="inline-block text-[clamp(2rem,8vw,3.6rem)] font-black will-change-auto [--rtl-reverse:1] rtl:[--rtl-reverse:-1] motion-reduce:!transform-none max-[1279px]:![transform:translate3d(0,0,0)]"
          style={`transform:translateX(calc(${animateValue(
            section["customizable"],
            [-100, 100],
            [10, 0]
          )}rem * var(--rtl-reverse)))`}>
          {@html $t("Highly customizable")}
        </span>
        <br />
        <span
          class="inline-block text-[clamp(2rem,8vw,3rem)] font-light will-change-auto [--rtl-reverse:1] rtl:[--rtl-reverse:-1] motion-reduce:!transform-none max-[1279px]:![transform:translate3d(0,0,0)]"
          style={`transform:translateX(calc(${animateValue(
            section["customizable"],
            [-100, 100],
            [0, 8]
          )}rem * var(--rtl-reverse)))`}>
          {@html $t("Powered by Tailwind&nbsp;CSS utility&nbsp;classes")}
        </span>
      </h2>
      <div class="h-10" />
      <p
        class="text-neutral-content/60 font-title inline-block w-full text-center font-light will-change-auto [text-wrap:balance] [--rtl-reverse:1] rtl:[--rtl-reverse:-1] motion-reduce:!transform-none max-[1279px]:![transform:translate3d(0,0,0)] md:text-2xl xl:text-start"
        style={`transform:translateX(calc(${animateValue(
          section["customizable"],
          [-100, 100],
          [10, 2]
        )}rem * var(--rtl-reverse)))`}>
        {@html $t(
          "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes."
        )}
      </p>
      <div class="h-10" />
      <div class="flex w-full justify-center">
        <a data-sveltekit-preload-data href="/docs/customize" class="btn btn-lg btn-wide group">
          {$t("how-to-customize")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="mockup-code mx-auto w-full max-w-xs bg-black/20 text-start sm:max-w-none">
        <pre><code>&lt;a class="<span>btn btn-primary</span>"&gt;Button&lt;/a&gt;</code></pre>
      </div>
      <div class="divider text-neutral-content text-opacity-30">↓</div>
      <div class="mockup-code mx-auto w-full max-w-xs bg-black/20 text-start sm:max-w-none">
        <pre><code>&lt;a class="<span>btn btn-primary</span> <span
              class="text-teal-500">rounded-full</span>"&gt;Button&lt;/a&gt;</code></pre>
      </div>
    </div>
  </div>
</div>

<div
  class="from-base-100 to-base-300 relative flex min-h-[100vh] items-center justify-center bg-gradient-to-t py-16"
  bind:this={section["agnostic"]}>
  <div
    class="bg-primary end-1/5 pointer-events-none absolute -top-1/2 aspect-square w-full rounded-full opacity-5 blur-3xl" />
  <div
    class="bg-success pointer-events-none absolute bottom-[-110%] left-1/2 aspect-square w-2/3 -translate-x-1/2 rounded-full border-2 opacity-20 blur-3xl" />
  <div
    class="bg-info pointer-events-none absolute bottom-[-130%] left-0 aspect-square w-1/2 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]" />
  <div
    class="relative flex max-w-[100rem] flex-col-reverse items-center justify-center gap-10 p-4 md:gap-20 md:p-20 xl:flex-row-reverse">
    <div>
      <h2 class="font-title text-center leading-none xl:text-start">
        <span class="text-[clamp(2rem,8vw,4rem)] font-black">{$t("Pure CSS.")}</span>
        <br />
        <span class="text-[clamp(2rem,8vw,4rem)] font-black">{$t("Framework agnostic.")}</span>
        <br />
        <span class="text-[clamp(2rem,8vw,4rem)] font-light">{$t("Works everywhere.")}</span>
      </h2>
      <div class="h-10" />
      <p
        class="text-base-content/70 font-title mb-6 text-center font-light md:text-3xl xl:text-start">
        {@html $t(
          "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file."
        )}
      </p>
      <p
        class="text-base-content/70 font-title mb-6 text-center font-light md:text-3xl xl:text-start">
        {@html $t(
          "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name."
        )}
      </p>
      <div class="h-10" />
      <div class="flex w-full justify-center xl:justify-start">
        <a
          data-sveltekit-preload-data
          href="/docs/install/"
          class="btn btn-lg btn-wide btn-outline group">
          {$t("cta-2")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
    <div class="pointer-events-none relative z-[1] shrink-0 xl:w-1/3">
      <div
        class="grid max-w-sm grid-cols-4 gap-4 px-10 pt-10 md:max-w-none md:gap-6 xl:px-6 xl:pt-0 [&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1rem/2)] md:[&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1.5rem/2)]">
        <div />

        {#each ["vue", "react", "svelte", "qwik", "remix", "nextjs", "solidjs", "preact", "phoenix", "nuxtjs", "astro", "angular", "vite", "laravel"] as logo, index}
          <img
            loading="lazy"
            width="96"
            height="96"
            class="aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]"
            style={`opacity:${animateValue(
              section["agnostic"],
              [-70 + index * 5, -60 + index * 5],
              [0, 1]
            )};filter: brightness(${animateValue(
              section["agnostic"],
              [-70 + index * 5, -60 + index * 5],
              [2, 1]
            )})blur(${animateValue(
              section["agnostic"],
              [-70 + index * 5, -60 + index * 5],
              [2, 0]
            )}px);scale:${animateValue(
              section["agnostic"],
              [-70 + index * 5, -60 + index * 5],
              [1.05, 1]
            )}`}
            alt={`daisyUI ${logo}`}
            src={`/logos/${logo}.svg`} />
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="min-h-[320vh] py-20" bind:this={section["themes"]}>
  <div
    class="sticky top-[calc(50vh-10rem)] mx-auto grid w-[calc(100%-2rem)] max-w-[85rem] overflow-hidden rounded-2xl sm:top-20">
    {#each ["light", "valentine", "cyberpunk", "cupcake", "retro", "synthwave", "luxury", "night"] as currentTheme, index}
      <div
        class="col-start-1 row-start-1 flex items-start [transform:translate3d(0,0,0)]"
        data-theme={currentTheme}
        style={index > 0
          ? `clip-path: polygon(${animateValue(
              section["themes"],
              [0 + index * 7, 20 + index * 7],
              [-180, 100]
            )}% 0%, 0% 0%, 0% 100%, ${animateValue(
              section["themes"],
              [0 + index * 7, 20 + index * 7],
              [0, 100]
            )}% 100%)`
          : ""}>
        <div
          class="border-base-200 flex w-full items-stretch justify-center gap-6 rounded-2xl border p-6 xl:h-[40rem] xl:justify-normal"
          style={`--tw-border-opacity:${animateValue(section["themes"], [10, 15], [0, 1])}`}>
          {#await import("../../components/homepage/ComponentsPreview.svelte") then Module}
            <Module.default {animateValue} section={section["themes"]} {index} />
          {/await}
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="bg-base-100 min-h-[120vh] py-20" bind:this={section["designdecision"]}>
  <div class="sticky top-20 w-full px-2 pt-40 lg:px-10">
    <div class="text-center">
      <h2
        class="font-title relative z-[2] mx-auto text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none">
        <span
          class="motion-reduce:!opacity-100"
          style={`opacity:${
            section["designdecision"] &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 >
              -100 &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 <
              0
              ? 0.1
              : 1
          }`}>
          {$t("Apply_your_own_design_decisions_part_1")}
        </span>
        <span
          class="motion-reduce:!opacity-100"
          style={`opacity:${
            section["designdecision"] &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 >
              -100 &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 <
              5
              ? 0.1
              : 1
          }`}>
          {$t("Apply_your_own_design_decisions_part_2")}
        </span>
        <span
          class="motion-reduce:!opacity-100"
          style={`opacity:${
            section["designdecision"] &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 >
              -100 &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 <
              10
              ? 0.1
              : 1
          }`}>
          {$t("Apply_your_own_design_decisions_part_3")}
        </span>
        <span
          class="motion-reduce:!opacity-100"
          style={`opacity:${
            section["designdecision"] &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 >
              -100 &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 <
              15
              ? 0.1
              : 1
          }`}>
          {$t("Apply_your_own_design_decisions_part_4")}
        </span>
        <span
          class="motion-reduce:!opacity-100"
          style={`opacity:${
            section["designdecision"] &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 >
              -100 &&
            ((scrollY - section["designdecision"].offsetTop) /
              section["designdecision"].clientHeight) *
              100 <
              20
              ? 0.1
              : 1
          }`}>
          {$t("Apply_your_own_design_decisions_part_5")}
        </span>
      </h2>
      <p
        class="text-base-content/70 font-title relative z-[2] mx-auto max-w-3xl py-4 font-light md:text-3xl">
        {@html $t(
          "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components."
        )}
      </p>
      <div class="h-10" />
      <div class="flex w-full flex-col justify-center gap-4 md:flex-row">
        <a data-sveltekit-preload-data href="/theme-generator/" class="btn">
          {$t("Theme Generator")}
        </a>
        <a data-sveltekit-preload-data href="/docs/themes/#-4" class="btn btn-neutral">
          {$t("Learn more about themes")}
        </a>
      </div>
    </div>
  </div>
</div>

<div class="min-h-[100vh] py-20" bind:this={section["possibilities"]}>
  <div class="w-full px-2 pt-40 lg:px-10">
    <div class="text-center">
      <h2
        class="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none">
        <span
          class="motion-reduce:!opacity-100"
          style={`opacity:${
            section["possibilities"] &&
            ((scrollY - section["possibilities"].offsetTop) /
              section["possibilities"].clientHeight) *
              100 >
              -100 &&
            ((scrollY - section["possibilities"].offsetTop) /
              section["possibilities"].clientHeight) *
              100 <
              -30
              ? 0.1
              : 1
          }`}>
          {data.stats.components}
          {$t("components")}
        </span>
        <br />
        <span
          class="motion-reduce:!opacity-100"
          style={`opacity:${
            section["possibilities"] &&
            ((scrollY - section["possibilities"].offsetTop) /
              section["possibilities"].clientHeight) *
              100 >
              -100 &&
            ((scrollY - section["possibilities"].offsetTop) /
              section["possibilities"].clientHeight) *
              100 <
              -25
              ? 0.1
              : 1
          }`}>
          {data.stats.utilities}
          {$t("utility classes")}
        </span>
        <br />
        <span class="inline-grid">
          {#if section["possibilities"] && ((scrollY - section["possibilities"].offsetTop) / section["possibilities"].clientHeight) * 100 > -100 && ((scrollY - section["possibilities"].offsetTop) / section["possibilities"].clientHeight) * 100 < -20}{:else}
            <span
              class="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text opacity-70 blur-3xl [transform:translate3d(0,0,0)] [-webkit-text-fill-color:transparent] [:root[dir=rtl]_&]:leading-[1.35] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
              aria-hidden="true">
              {$t("endless possibilities")}
            </span>
          {/if}
          <span
            style={`opacity:${
              section["possibilities"] &&
              ((scrollY - section["possibilities"].offsetTop) /
                section["possibilities"].clientHeight) *
                100 >
                -100 &&
              ((scrollY - section["possibilities"].offsetTop) /
                section["possibilities"].clientHeight) *
                100 <
                -20
                ? 0.1
                : 1
            }`}
            class={`[&::selection]:text-base-content relative col-start-1 row-start-1 leading-tight motion-reduce:!opacity-100 [&::selection]:bg-blue-700/20 ${
              section["possibilities"] &&
              ((scrollY - section["possibilities"].offsetTop) /
                section["possibilities"].clientHeight) *
                100 >
                -100 &&
              ((scrollY - section["possibilities"].offsetTop) /
                section["possibilities"].clientHeight) *
                100 <
                -20
                ? "motion-reduce:!bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] motion-reduce:!bg-clip-text motion-reduce:![-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:motion-reduce:!bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                : "bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
            }`}>
            {$t("endless possibilities")}
          </span>
        </span>
      </h2>
      <p class="text-base-content/70 font-title relative z-[2] py-4 font-light md:text-3xl">
        {$t("Mix and match daisyUI class names to create unique web pages.")}
      </p>
      <div class="h-10" />
      <div class="flex w-full justify-center">
        <a
          data-sveltekit-preload-data
          href="/components/"
          class="btn btn-primary md:btn-wide w-full">
          {$t("all-components-btn")}
        </a>
      </div>
    </div>
  </div>
</div>

<div class="min-h-[200vh] w-full px-2 lg:px-10" bind:this={section["numbers"]}>
  <div class="sticky top-0 pt-40 text-center">
    <div
      class="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-10 blur-3xl" />
    <h2
      class="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none will-change-auto motion-reduce:!transform-none"
      style={`transform:scale(${animateValue(
        section["numbers"],
        [0, 20],
        [0.7, 1]
      )});opacity:${animateValue(section["numbers"], [0, 20], [0, 1])}`}>
      {@html $t("daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS")}
    </h2>
    <div class="h-32" />
    <div class="grid gap-10 p-6 xl:grid-cols-3">
      <div
        class="flex flex-col items-center gap-4 will-change-auto motion-reduce:!transform-none"
        style={`transform:translateY(${animateValue(
          section["numbers"],
          [20, 30],
          [2, 0]
        )}rem);opacity:${animateValue(section["numbers"], [20, 30], [0, 1])}`}>
        <div class="font-title text-[clamp(2rem,6vw,5rem)] font-black tabular-nums">
          <span class="motion-reduce:hidden">
            <Countup
              initial={data.stargazers_count * 0.8}
              value={data.stargazers_count}
              duration={2000} />
          </span>
          <span class="hidden motion-reduce:inline">
            {data.stargazers_count.toLocaleString("en-US")}
          </span>
        </div>
        <a
          href="https://github.com/saadeghi/daisyui"
          target="_blank"
          rel="noopener, noreferrer"
          class="text-base-content/70 hover:text-base-content hover:underline">
          GitHub Stars
        </a>
      </div>
      <div
        class="flex flex-col items-center gap-4 will-change-auto motion-reduce:!transform-none"
        style={`transform:translateY(${animateValue(
          section["numbers"],
          [30, 40],
          [2, 0]
        )}rem);opacity:${animateValue(section["numbers"], [30, 40], [0, 1])}`}>
        <div class="font-title text-[clamp(2rem,6vw,5rem)] font-black tabular-nums">
          <span class="motion-reduce:hidden">
            <Countup
              initial={data.gh_dependents.repositories * 0.8}
              value={data.gh_dependents.repositories}
              duration={2200} />
          </span>
          <span class="hidden motion-reduce:inline">
            {data.gh_dependents.repositories.toLocaleString("en-US")}
          </span>
        </div>
        <a
          href="https://github.com/saadeghi/daisyui/network/dependents"
          target="_blank"
          rel="noopener, noreferrer"
          class="text-base-content/70 hover:text-base-content hover:underline">
          {$t("open-source projects using daisyUI")}
        </a>
      </div>
      <div
        class="flex flex-col items-center gap-4 will-change-auto motion-reduce:!transform-none"
        style={`transform:translateY(${animateValue(
          section["numbers"],
          [40, 50],
          [2, 0]
        )}rem);opacity:${animateValue(section["numbers"], [40, 50], [0, 1])}`}>
        <div class="font-title text-[clamp(2rem,6vw,5rem)] font-black tabular-nums">
          <span class="motion-reduce:hidden">
            <Countup initial={data.npmInstalls * 0.8} value={data.npmInstalls} duration={2400} />
          </span>
          <span class="hidden motion-reduce:inline">
            {data.npmInstalls.toLocaleString("en-US")}
          </span>
        </div>
        <a
          href="https://www.npmjs.com/package/daisyui"
          target="_blank"
          rel="noopener, noreferrer"
          class="text-base-content/70 hover:text-base-content hover:underline">
          {$t("npm-installs")}
        </a>
      </div>
    </div>
  </div>
</div>

{#await import("../../components/homepage/Tweets.svelte") then Module}
  <Module.default tweets={data.tweets} />
{/await}

{#await import("../../components/homepage/Opensource.svelte") then Module}
  <Module.default contributors={data.contributors} backers={data.backers} />
{/await}

<div class="min-h-[150vh] py-20" bind:this={section["try"]}>
  <div class="sticky top-0 w-full px-2 pt-40 lg:px-10">
    <div class="text-center">
      <h2
        class="font-title relative z-[2] mx-auto text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none">
        <span
          class="motion-reduce:!opacity-100"
          style={`opacity:${
            section["try"] &&
            ((scrollY - section["try"].offsetTop) / section["try"].clientHeight) * 100 > -100 &&
            ((scrollY - section["try"].offsetTop) / section["try"].clientHeight) * 100 < 7
              ? 0.1
              : 1
          }`}>
          {$t("Try daisyUI")}
        </span>
        <br />
        <span
          class="font-light motion-reduce:!opacity-100"
          style={`opacity:${
            section["try"] &&
            ((scrollY - section["try"].offsetTop) / section["try"].clientHeight) * 100 > -100 &&
            ((scrollY - section["try"].offsetTop) / section["try"].clientHeight) * 100 < 16
              ? 0.1
              : 1
          }`}>
          {$t("on your favorite framework")}
        </span>
      </h2>
      <div class="h-16" />
      <div class="pointer-events-none mx-auto flex max-w-xl flex-wrap justify-center gap-10 px-6">
        {#each ["svelte", "vue", "react", "solidjs", "preact", "angular", "qwik", "nextjs", "nuxtjs", "remix", "11ty", "vite", "astro"] as logo, index}
          <img
            loading="lazy"
            width="96"
            height="96"
            class="aspect-square h-10 w-10"
            src={`/logos/${logo}.svg`}
            alt={`daisyUI ${logo}`} />
        {/each}
      </div>
      <div class="h-16" />
      <div class="flex w-full justify-center">
        <a data-sveltekit-preload-data href="/docs/install/" class="btn btn-primary btn-wide">
          {$t("See all examples")}
        </a>
      </div>
      <div class="h-10" />
      <div class="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
        <span class="text-base-content/70">{$t("Or play with daisyUI on")}:</span>
        <a target="_blank" rel="noopener, noreferrer" href="/codepen" class="btn-ghost btn-sm btn">
          <svg
            class="h-4 w-4 stroke-current"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path
              d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
              stroke-width="6.05" />
          </svg>
          CodePen
        </a>
        <a
          href="/tailwindplay"
          class="btn-ghost btn-sm btn"
          target="_blank"
          rel="noopener, noreferrer">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
            <g clip-path="url(#prefix__clip0)">
              <path
                fill="#38bdf8"
                fill-rule="evenodd"
                d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                clip-rule="evenodd" />
            </g>
            <defs>
              <clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath>
            </defs>
          </svg>
          Tailwind Play
        </a>
      </div>
    </div>
  </div>
</div>

{#await import("../../components/homepage/Install.svelte") then Module}
  <Module.default />
{/await}
<Footer />
