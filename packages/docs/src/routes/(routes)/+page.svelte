<script>
  import { browser } from "$app/environment"

  import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
  import Countup from "svelte-countup"
  import Install from "$components/homepage/Install.svelte"
  import ComponentsPreview from "$components/homepage/ComponentsPreview.svelte"
  import SEO from "$components/SEO.svelte"
  import Carbon from "$components/Carbon.svelte"
  import Testimonials from "$components/Testimonials.svelte"
  import Footer from "$components/Footer.svelte"
  import Opensource from "$components/homepage/Opensource.svelte"
  import CompanyLogos from "$components/CompanyLogos.svelte"
  import MediaLogos from "$components/MediaLogos.svelte"
  import { t } from "$lib/i18n.svelte.js"

  const { data } = $props()

  let stats = $state({})
  async function fetchStats() {
    if (!browser) return
    const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/stats.json`)
    return await response.json()
  }

  let isClipboardButtonPressed = $state(false)
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    isClipboardButtonPressed = true
    setTimeout(() => {
      isClipboardButtonPressed = false
    }, 2000)
  }

  let activeMenuItemOnHeroMockup = $state(1)
  let toggleValueForCodeCompare = $state(false)

  let scrollY = $state(0)
  let innerHeight = $state(0)
  function scaleValue(value, from, to) {
    let scale = (to[1] - to[0]) / (from[1] - from[0])
    let capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
    return capped * scale + to[0]
  }
  const animateValue = (targetElement, scrollPercentage, animateRange) => {
    if (!targetElement) return 0
    return scaleValue(
      ((scrollY - targetElement.offsetTop) / targetElement.clientHeight) * 100,
      scrollPercentage,
      animateRange,
    )
  }

  let section = $state([])

  const demo_1_ClassNames = [
    "bg-zinc-100 border font-semibold text-zinc-900 text-sm px-4 duration-200 py-2.5 transition-all hover:border-zinc-300 hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 active:translate-y-[0.5px] inline-flex gap-2 rounded-sm active:border-zinc-300 active:bg-zinc-200 active:shadow-none text-center align-middle cursor-pointer border-zinc-200 dark:border-zinc-700 dark:bg-neutral-700 dark:text-zinc-300 dark:hover:border-zinc-950 dark:hover:bg-zinc-950 dark:focus-visible:outline-zinc-200 dark:active:border-zinc-950 dark:active:bg-zinc-900",
    "btn",
  ]
  const demo_1_ClassNameHandler = $derived(() => {
    if (
      section.hero &&
      (scrollY / (section.hero.offsetTop + section.hero.clientHeight)) * 100 > 25 &&
      (scrollY / (section.hero.offsetTop + section.hero.clientHeight)) * 100 < 65
    ) {
      return demo_1_ClassNames[0].slice(
        0,
        Math.trunc(animateValue(section.hero, [25, 65], [0, demo_1_ClassNames[0].length])),
      )
    }
    if (
      section.hero &&
      (scrollY / (section.hero.offsetTop + section.hero.clientHeight)) * 100 > 65 &&
      (scrollY / (section.hero.offsetTop + section.hero.clientHeight)) * 100 < 72
    ) {
      return demo_1_ClassNames[0].slice(
        0,
        Math.trunc(animateValue(section.hero, [68, 71], [demo_1_ClassNames[0].length, 0])),
      )
    }
    if (
      section.hero &&
      (scrollY / (section.hero.offsetTop + section.hero.clientHeight)) * 100 > 72
    ) {
      return demo_1_ClassNames[1].slice(
        0,
        Math.trunc(animateValue(section.hero, [71, 72], [0, demo_1_ClassNames[1].length])),
      )
    }
    return ""
  })
  const demo_1_StyleHandler = $derived(() => {
    if (
      section.hero &&
      (scrollY / (section.hero.offsetTop + section.hero.clientHeight)) * 100 > 72
    ) {
      return "text-teal-700"
    }
    return "text-rose-600"
  })
  const demo_1_ElementTextHandler = $derived(() => {
    if (
      section.hero &&
      (scrollY / (section.hero.offsetTop + section.hero.clientHeight)) * 100 > 72
    ) {
      return "daisyUI Button"
    }
    return "Tailwind Button"
  })

  // let daisyui5progress = $state(0)

  // $effect(async () => {
  //   const response = await fetch(`${PUBLIC_DAISYUI_API_PATH}/api/progress.json`)
  //   const data = await response.json()

  //   let trueCount = 0,
  //     totalCount = 0

  //   function count(obj) {
  //     Object.values(obj).forEach((value) => {
  //       if (typeof value === "object") count(value)
  //       if (typeof value === "boolean") {
  //         totalCount++
  //         trueCount += value ? 1 : 0
  //       }
  //     })
  //   }

  //   count(data)
  //   daisyui5progress = ((trueCount / totalCount) * 100).toFixed(0)
  // })
</script>

<svelte:window bind:scrollY bind:innerHeight />

<SEO
  title="daisyUI"
  desc="Best Tailwind Components Library - Free UI components for Tailwind CSS"
/>

<!-- hero content -->
<div>
  <div
    class="flex min-h-[550vh] max-w-[100vw] flex-col items-center justify-start xl:flex-row xl:items-start xl:justify-between"
    bind:this={section["hero"]}
  >
    <div class="shrink xl:w-1/2">
      <div
        class="flex min-h-[calc(100vh-4rem)] items-center justify-center px-2 py-10 text-center xl:justify-start xl:ps-10 xl:pe-0 xl:text-start"
        class:invisible={section["hero"] && scrollY > section["hero"].clientHeight}
      >
        <div>
          <div class="flex animate-[reveal-top-slow_0.5s] flex-col items-center gap-6 xl:flex-row">
            <div
              data-tip={isClipboardButtonPressed ? "copied" : "copy"}
              class="tooltip tooltip-accent"
            >
              <button
                class="btn btn-sm cursor-copy rounded-full font-mono font-light"
                onclick={() => copyText("npm i -D daisyui@latest")}
              >
                <pre><code>npm i -D daisyui@latest</code></pre>
              </button>
            </div>

            <a
              href="https://www.youtube.com/watch?v=bYznFmzL820"
              target="_blank"
              rel="nofollow"
              class="group text-base-content/70 hover:text-base-content flex items-center gap-2 rounded-lg pe-2 text-left text-[0.625rem] transition-all duration-300"
            >
              <img
                class="rounded-lg grayscale transition-all duration-500 group-hover:grayscale-0"
                width="60"
                height="33"
                src="https://img.daisyui.com/images/content/v5-video-thumb.webp"
                alt="daisyUI 5"
              />
              Watch <br />daisyUI 5.0 intro
            </a>

            <!-- {#if daisyui5progress}
              <div class="flex gap-2 grow w-full max-w-48 max-lg:my-4 sm:max-w-sm">
                <a
                  class="tooltip tooltip-accent relative flex flex-col w-full"
                  href="https://github.com/saadeghi/daisyui/discussions/3246"
                  target="_blank"
                  rel="nofollow"
                  data-tip="Try the alpha version"
                >
                  <div
                    class="text-[0.6rem] -top-4 absolute italic -translate-x-1/2 rtl:translate-x-1/2"
                    style={`inset-inline-start:${daisyui5progress}%`}
                  >
                    {daisyui5progress}%
                  </div>
                  <progress
                    class="progress bg-base-200 border border-base-200 progress-warning w-full"
                    value={daisyui5progress}
                    max="100"
                  ></progress>
                  <div class="text-[0.6rem] tracking-wide -bottom-4 absolute italic">
                    daisyUI 5 development
                  </div>
                </a>
              </div>
            {/if} -->
          </div>
          <div class="h-4"></div>
          <h1
            class="font-title text-center text-[clamp(1.5rem,3.5vw,4rem)] leading-[1.1] [word-break:auto-phrase] xl:w-[115%] xl:text-start [:root[dir=rtl]_&]:leading-[1.35]"
          >
            <div class="font-thin [&:first-line]:font-black">
              {@html $t("homepage_h1")}
            </div>
          </h1>
          <div class="h-4"></div>
          <p
            class="text-base-content/70 font-title py-4 font-light [text-wrap:balance] md:text-lg xl:text-2xl"
          >
            {@html $t("homepage_h2")}
          </p>
          <div class="h-10"></div>
          <div>
            <div
              class="inline-flex w-full animate-[reveal-slow_0.5s] flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:justify-start xl:px-0"
            >
              <!-- <a
                data-sveltekit-preload-data
                href="/components/"
                class="btn md:btn-lg grow rounded-full px-12">
                <span class="hidden sm:inline">{$t("cta-1")}</span>
                <span class="inline sm:hidden">{$t("cta-1-mobile")}</span>
              </a> -->
              <a
                href="/discord/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                class="btn md:btn-lg group shrink-0 rounded-full [@media(min-width:768px)]:px-10"
              >
                <svg
                  class="h-6 w-auto opacity-100 transition-opacity group-hover:opacity-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 124 34"
                  ><g fill="currentColor"
                    ><path
                      d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"
                    /><path
                      d="M41.2697 9.86615H47.8585C49.4394 9.86615 50.7878 10.1141 51.8883 10.6101C52.9887 11.1061 53.8102 11.7881 54.3527 12.6715C54.8951 13.555 55.1741 14.5624 55.1741 15.7094C55.1741 16.8253 54.8952 17.8328 54.3217 18.7472C53.7482 19.6462 52.8803 20.3746 51.7178 20.9016C50.5554 21.4286 49.1139 21.6921 47.3935 21.6921H41.2697V9.86615ZM47.316 18.6852C48.3854 18.6852 49.2069 18.4217 49.7804 17.8793C50.3539 17.3523 50.6484 16.6083 50.6484 15.6939C50.6484 14.8414 50.3849 14.1594 49.8734 13.648C49.3619 13.1365 48.587 12.873 47.5485 12.873H45.4871V18.6852H47.316Z"
                    /><path
                      d="M65.4362 21.6774C64.5217 21.4449 63.7003 21.1039 62.9718 20.6389V17.8335C63.5298 18.2675 64.2582 18.6085 65.1882 18.8875C66.1181 19.1665 67.0171 19.306 67.8851 19.306C68.288 19.306 68.598 19.2595 68.7995 19.151C69.001 19.0425 69.1095 18.9185 69.1095 18.7635C69.1095 18.593 69.0475 18.4535 68.939 18.345C68.8305 18.2365 68.6135 18.1435 68.288 18.0505L66.2576 17.6011C65.0952 17.3376 64.2737 16.9501 63.7777 16.4851C63.2818 16.0201 63.0493 15.3847 63.0493 14.6097C63.0493 13.9587 63.2663 13.3853 63.6847 12.9048C64.1187 12.4243 64.7232 12.0523 65.5137 11.7888C66.3041 11.5254 67.2186 11.3859 68.288 11.3859C69.2335 11.3859 70.1014 11.4789 70.8919 11.6959C71.6823 11.8973 72.3333 12.1608 72.8448 12.4708V15.1212C72.3178 14.8112 71.6979 14.5632 71.0159 14.3772C70.3184 14.1912 69.6055 14.0982 68.877 14.0982C67.823 14.0982 67.2961 14.2842 67.2961 14.6407C67.2961 14.8112 67.3736 14.9352 67.5441 15.0282C67.7146 15.1212 68.009 15.1987 68.443 15.2917L70.1324 15.6017C71.2329 15.7876 72.0543 16.1286 72.5968 16.6091C73.1393 17.0896 73.4028 17.787 73.4028 18.7325C73.4028 19.7555 72.9533 20.5769 72.0543 21.1659C71.1554 21.7704 69.8844 22.0648 68.2415 22.0648C67.2806 22.0338 66.3506 21.9098 65.4362 21.6774Z"
                    /><path
                      d="M77.5891 21.3213C76.6281 20.8408 75.8842 20.2054 75.4037 19.3994C74.9077 18.5934 74.6752 17.679 74.6752 16.656C74.6752 15.6486 74.9232 14.7341 75.4347 13.9437C75.9462 13.1377 76.6901 12.5177 77.6666 12.0528C78.643 11.6033 79.821 11.3708 81.1849 11.3708C82.8743 11.3708 84.2693 11.7273 85.3852 12.4402V15.5246C84.9977 15.2611 84.5328 15.0286 84.0058 14.8736C83.4788 14.7031 82.9208 14.6256 82.3319 14.6256C81.2779 14.6256 80.472 14.8116 79.8675 15.1991C79.2785 15.5866 78.984 16.0826 78.984 16.7025C78.984 17.307 79.263 17.803 79.852 18.1905C80.4254 18.5779 81.2624 18.7794 82.3474 18.7794C82.9053 18.7794 83.4633 18.7019 84.0058 18.5314C84.5483 18.3609 85.0287 18.175 85.4162 17.927V20.9183C84.1762 21.6623 82.7348 22.0343 81.1074 22.0343C79.728 22.0343 78.5655 21.7863 77.5891 21.3213Z"
                    /><path
                      d="M89.8041 21.3213C88.8276 20.8408 88.0837 20.2054 87.5722 19.3839C87.0607 18.5624 86.7972 17.648 86.7972 16.625C86.7972 15.6176 87.0607 14.7031 87.5722 13.9127C88.0837 13.1222 88.8276 12.5022 89.7886 12.0528C90.7495 11.6033 91.9119 11.3708 93.2464 11.3708C94.5794 11.3708 95.7418 11.5878 96.7028 12.0528C97.6637 12.5022 98.4077 13.1222 98.9192 13.9127C99.4306 14.7031 99.6786 15.6021 99.6786 16.625C99.6786 17.6325 99.4306 18.5624 98.9192 19.3839C98.4077 20.2054 97.6792 20.8563 96.7028 21.3213C95.7263 21.7863 94.5794 22.0343 93.2464 22.0343C91.9274 22.0343 90.7805 21.7863 89.8041 21.3213ZM94.9358 18.3299C95.3388 17.927 95.5558 17.369 95.5558 16.7025C95.5558 16.0206 95.3543 15.4936 94.9358 15.0906C94.5174 14.6876 93.9594 14.4861 93.2619 14.4861C92.5335 14.4861 91.9739 14.6876 91.5555 15.0906C91.1525 15.4936 90.9355 16.0206 90.9355 16.7025C90.9355 17.3845 91.137 17.927 91.5555 18.3299C91.9739 18.7484 92.5335 18.9499 93.2619 18.9499C93.9594 18.9344 94.5329 18.7329 94.9358 18.3299Z"
                    /><path
                      d="M110.048 11.9901V15.6325C109.614 15.3535 109.056 15.214 108.374 15.214C107.475 15.214 106.777 15.493 106.297 16.0354C105.816 16.5779 105.568 17.4304 105.568 18.5773V21.6772H101.43V11.8196H105.491V14.966C105.708 13.819 106.08 12.9666 106.576 12.4241C107.072 11.8816 107.723 11.5872 108.513 11.5872C109.102 11.5872 109.614 11.7267 110.048 11.9901Z"
                    /><path
                      d="M124 9.52563V21.6925H119.862V19.4761C119.505 20.3131 118.978 20.9486 118.265 21.3825C117.551 21.8165 116.667 22.0335 115.613 22.0335C114.683 22.0335 113.862 21.801 113.164 21.3515C112.467 20.9021 111.925 20.2666 111.553 19.4761C111.181 18.6702 110.995 17.7712 110.995 16.7793C110.979 15.7408 111.181 14.8109 111.599 13.9894C112.002 13.168 112.591 12.5325 113.335 12.0675C114.079 11.6025 114.931 11.37 115.892 11.37C117.861 11.37 119.18 12.2225 119.862 13.9429V9.52563H124ZM119.242 18.2517C119.66 17.8487 119.877 17.3062 119.877 16.6553C119.877 16.0198 119.676 15.5083 119.257 15.1209C118.839 14.7334 118.281 14.5319 117.582 14.5319C116.884 14.5319 116.326 14.7334 115.908 15.1364C115.489 15.5393 115.288 16.0508 115.288 16.7018C115.288 17.3527 115.489 17.8642 115.908 18.2672C116.326 18.6702 116.869 18.8717 117.566 18.8717C118.265 18.8717 118.823 18.6702 119.242 18.2517Z"
                    /><path
                      d="M58.9885 12.4091C60.1772 12.4091 61.1429 11.5416 61.1429 10.4717C61.1429 9.40164 60.1772 8.5343 58.9885 8.5343C57.7981 8.5343 56.8341 9.40164 56.8341 10.4717C56.8341 11.5416 57.7981 12.4091 58.9885 12.4091Z"
                    /><path
                      d="M61.1429 13.741C59.8254 14.3144 58.1825 14.3299 56.8341 13.741V21.6921H61.1429V13.741Z"
                    /></g
                  ></svg
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="absolute inline-block w-6 scale-90 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
                  ><path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                  ></path></svg
                >
              </a>
              <a
                data-sveltekit-preload-data
                href="/docs/install/"
                class="btn btn-neutral md:btn-lg group max-w-86 grow rounded-full px-12"
              >
                {$t("cta-2")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block rtl:rotate-180 group-hover:rtl:-translate-x-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  >
                  </path>
                </svg>
              </a>
            </div>
          </div>

          <!-- <div class="h-10"></div> -->

          <!-- <div class="flex gap-2 text-xs">
            <svg
              class="h-[3em] inline-block w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 329 628"
              fill="currentColor"
            >
              <path
                d="M87.471 224.674s24.709-31.848 8.729-76.079c-16.036-44.202-53.378-60.991-53.378-60.991s-27.944 37.956-12.327 81.043c15.59 43.115 56.976 56.027 56.976 56.027zm68.577 22.618s43.199-3.459 67.936-42.084c24.737-38.597 5.828-81.768 5.828-81.768s-40.103 8.143-65.509 47.773c-25.378 39.601-8.255 76.079-8.255 76.079zm4.379 51.035c-19.996 42.585 1.729 76.553 1.729 76.553s42.418-9.092 61.884-50.561c19.438-41.526-4.937-81.852-4.937-81.852s-38.68 13.275-58.676 55.86zm97.636 34.302s-37.286 16.9-53.183 61.131c-15.896 44.314 8.897 76.051 8.897 76.051s41.33-13.024 56.836-56.167c15.478-43.143-12.55-81.015-12.55-81.015zm31.068 232.922s35.864-24.402 38.29-70.166c2.398-45.793-35.39-73.96-35.39-73.96s-30.844 26.912-33.326 73.876c-2.455 46.936 30.426 70.25 30.426 70.25zm-146.58-426.103s38.234-12.773 49.445-58.426C203.235 35.369 181.51.676 181.51.676s-44.286 16.064-55.246 60.601c-10.932 44.51 16.287 78.171 16.287 78.171zM87.443 321.753s14.195-37.733-14.111-75.242C44.97 208.973 4.364 203.925 4.364 203.925s-15.506 44.51 12.104 81.099c27.609 36.617 70.975 36.729 70.975 36.729zm31.681 99.561s5.439-39.936-30.481-70.223c-35.976-30.314-76.692-26.187-76.692-26.187s-5.243 46.852 29.784 76.386c35.083 29.506 77.389 20.024 77.389 20.024zm48.247 82.326s-6.833-39.713-50.283-57.673c-43.477-18.016-81.015-1.757-81.015-1.757s9.203 46.238 51.537 63.808c42.334 17.486 79.76-4.378 79.76-4.378zm21.083 34.19c-45.29-12.661-80.652 7.949-80.652 7.949s14.641 44.788 58.76 57.142c44.175 12.355 78.701-13.832 78.701-13.832s-11.518-38.625-56.809-51.259zm-41.19-371.163l-20.136-9.9c-1.059 2.203-104.636 222.212 186.405 471.003l14.557-17.04C50.994 373.82 143.192 175.005 147.264 166.667z"
              />
            </svg>

            <div class="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="14"
                fill="none"
                ><g clip-path="url(#A)"
                  ><path
                    d="M9.957 6.004H5.618c-.111 0-.203.09-.203.203v2.12c0 .113.09.203.203.203h1.693v2.636s-.379.128-1.429.128c-1.24 0-2.972-.455-2.972-4.259s1.802-4.308 3.495-4.308c1.465 0 2.097.257 2.497.383.126.039.24-.087.24-.2L9.627.86c0-.052-.018-.116-.077-.159C9.386.587 8.392.029 5.878.029 2.981.029.01 1.261.01 7.185s3.4 6.804 6.267 6.804c2.373 0 3.814-1.014 3.814-1.014.059-.033.065-.114.065-.152V6.207c-.002-.113-.092-.203-.203-.203h.003zM31.897.535h-2.442c-.113 0-.203.092-.203.203v4.72h-3.808V.738c0-.113-.092-.203-.201-.203h-2.443c-.11 0-.2.092-.2.203v12.78c0 .113.09.204.2.204h2.443c.111 0 .201-.092.201-.204V8.052h3.808l-.008 5.466c0 .113.09.203.2.203h2.444a.2.2 0 0 0 .2-.203L32.095.736a.2.2 0 0 0-.2-.203l.002.002zM12.875.824c-.87 0-1.575.711-1.575 1.59s.705 1.591 1.575 1.591 1.575-.711 1.575-1.591-.705-1.59-1.575-1.59zm1.402 4.1c0-.111-.09-.204-.2-.204h-2.435c-.114 0-.211.114-.211.227V13.4c0 .247.154.322.355.322h2.195c.239 0 .303-.118.303-.327l-.002-2.571-.002-5.899h-.003zm27.076-.185h-2.424c-.111 0-.2.092-.2.204v6.266s-.615.453-1.492.453-1.107-.396-1.107-1.255V4.943c0-.113-.092-.204-.201-.204h-2.458c-.113 0-.201.092-.201.204v5.88c0 2.543 1.416 3.165 3.364 3.165 1.598 0 2.89-.883 2.89-.883l.09.518c.026.056.098.111.177.111h1.557c.111 0 .201-.092.201-.204l.007-8.586c-.005-.111-.097-.203-.206-.203h.003zm6.637-.288c-1.377 0-2.313.615-2.313.615V.739c0-.113-.092-.203-.2-.203h-2.452c-.11 0-.2.092-.2.203l-.007 12.782c0 .113.092.203.201.203h1.708c.075 0 .133-.039.177-.108s.103-.591.103-.591.999.95 2.897.95c2.227 0 3.503-1.13 3.503-5.072s-2.041-4.452-3.418-4.452zm-.955 7.203c-.841-.026-1.41-.407-1.41-.407V7.198s.563-.345 1.254-.407c.873-.077 1.717.186 1.717 2.268-.005 2.195-.384 2.628-1.56 2.594l-.002.002zm-25.7-.047c-.108 0-.381.043-.662.043-.898 0-1.205-.419-1.205-.96V7.095h1.833a.2.2 0 0 0 .201-.204V4.921a.2.2 0 0 0-.201-.204h-1.833l-.003-2.421c0-.092-.049-.137-.154-.137h-2.496c-.096 0-.15.043-.15.136v2.501l-1.336.327a.2.2 0 0 0-.144.195V6.89c0 .113.092.204.201.204h1.279v3.781c0 2.808 1.971 3.085 3.3 3.085a5.65 5.65 0 0 0 1.454-.241c.074-.026.114-.101.114-.181l.002-1.729c0-.113-.095-.203-.2-.203z"
                    fill="currentColor"
                  /></g
                ><defs><clipPath id="A"><path fill="#fff" d="M0 0h51.421v14H0z" /></clipPath></defs
                ></svg
              >
              Top 400
            </div>

            <svg
              class="h-[3em] inline-block w-auto rotate-y-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 329 628"
              fill="currentColor"
            >
              <path
                d="M87.471 224.674s24.709-31.848 8.729-76.079c-16.036-44.202-53.378-60.991-53.378-60.991s-27.944 37.956-12.327 81.043c15.59 43.115 56.976 56.027 56.976 56.027zm68.577 22.618s43.199-3.459 67.936-42.084c24.737-38.597 5.828-81.768 5.828-81.768s-40.103 8.143-65.509 47.773c-25.378 39.601-8.255 76.079-8.255 76.079zm4.379 51.035c-19.996 42.585 1.729 76.553 1.729 76.553s42.418-9.092 61.884-50.561c19.438-41.526-4.937-81.852-4.937-81.852s-38.68 13.275-58.676 55.86zm97.636 34.302s-37.286 16.9-53.183 61.131c-15.896 44.314 8.897 76.051 8.897 76.051s41.33-13.024 56.836-56.167c15.478-43.143-12.55-81.015-12.55-81.015zm31.068 232.922s35.864-24.402 38.29-70.166c2.398-45.793-35.39-73.96-35.39-73.96s-30.844 26.912-33.326 73.876c-2.455 46.936 30.426 70.25 30.426 70.25zm-146.58-426.103s38.234-12.773 49.445-58.426C203.235 35.369 181.51.676 181.51.676s-44.286 16.064-55.246 60.601c-10.932 44.51 16.287 78.171 16.287 78.171zM87.443 321.753s14.195-37.733-14.111-75.242C44.97 208.973 4.364 203.925 4.364 203.925s-15.506 44.51 12.104 81.099c27.609 36.617 70.975 36.729 70.975 36.729zm31.681 99.561s5.439-39.936-30.481-70.223c-35.976-30.314-76.692-26.187-76.692-26.187s-5.243 46.852 29.784 76.386c35.083 29.506 77.389 20.024 77.389 20.024zm48.247 82.326s-6.833-39.713-50.283-57.673c-43.477-18.016-81.015-1.757-81.015-1.757s9.203 46.238 51.537 63.808c42.334 17.486 79.76-4.378 79.76-4.378zm21.083 34.19c-45.29-12.661-80.652 7.949-80.652 7.949s14.641 44.788 58.76 57.142c44.175 12.355 78.701-13.832 78.701-13.832s-11.518-38.625-56.809-51.259zm-41.19-371.163l-20.136-9.9c-1.059 2.203-104.636 222.212 186.405 471.003l14.557-17.04C50.994 373.82 143.192 175.005 147.264 166.667z"
              />
            </svg>
          </div> -->
        </div>
      </div>
      <div class="xl:h-[calc(20vh)]"></div>
      <div>
        <div class="max-w-[100vw] px-2 py-10 lg:px-10 xl:max-w-[50vw]">
          <div class="font-title text-center xl:text-start">
            <h2 class="text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-bold">
              {@html $t("don't re-invent <br/>the wheel <br/>every time")}
              <img
                loading="lazy"
                width="72"
                height="72"
                alt="yawing face emoji"
                src="https://img.daisyui.com/images/emoji/yawning-face@80.webp"
                srcset={`https://img.daisyui.com/images/emoji/yawning-face.webp 2x`}
                class="pointer-events-none inline-block h-[1em] w-[1em] align-bottom"
              />
            </h2>

            <p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
              {@html $t(
                "In a Tailwind CSS project, you need to write utility class names for every element. Thousands of class names just to style the most basic elements.",
              )}
            </p>
            <div class="h-40"></div>
            <div class="relative h-[300vh]">
              <div class="sticky top-[16vh] xl:top-[30vh]">
                <h2 class="text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-light">
                  {@html $t(
                    "instead of writing<br /> <span class='text-error'><span class='font-black'>100</span> class names</span>",
                  )}
                </h2>
                <div class="h-6"></div>
                <p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
                  {@html $t("For every element, every page, every project,<br/>again and again")}…
                </p>
                <div class="h-24"></div>
              </div>
            </div>
            <div class="relative h-screen">
              <div class="sticky top-[16vh] xl:top-[30vh]">
                <h2 class="text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-light">
                  {@html $t(
                    "use <span class='text-success'><span class='font-black'>semantic</span> <br />class names</span>",
                  )}
                  <img
                    loading="lazy"
                    width="72"
                    height="72"
                    alt="sunglasses emoji"
                    src="https://img.daisyui.com/images/emoji/smiling-face-with-sunglasses@80.webp"
                    srcset={`https://img.daisyui.com/images/emoji/smiling-face-with-sunglasses.webp 2x`}
                    class="pointer-events-none inline-block h-[1em] w-[1em] align-bottom"
                  />
                </h2>
                <div class="h-6"></div>
                <p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
                  {@html $t("It's descriptive, faster, cleaner and easier to maintain.")}
                </p>
                <div class="h-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- hero figure -->

    <div
      class="invisible sticky bottom-4 flex w-[calc(100%-2rem)] shrink duration-700 xl:visible xl:-end-32 xl:top-16 xl:bottom-auto xl:w-auto xl:transform-none! xl:overflow-x-hidden xl:overflow-y-clip xl:bg-transparent xl:pt-16 xl:pb-16"
      style={`${
        section["hero"] && scrollY > section["hero"].clientHeight * 0.2
          ? "visibility: visible;"
          : ""
      }transform:translateY(${animateValue(section["hero"], [17, 25], [120, 0])}%)`}
    >
      <div
        class="mockup mockup-window bg-base-200/90 xl:bg-base-200 xl:backdrop-blur-0 mx-auto origin-top [transform:rotateX(20deg)rotateZ(-20deg)skewY(8deg)scale(1)] overflow-visible pb-4 backdrop-blur will-change-auto [--rtl-reverse:1] max-[1279px]:[transform:translate3d(0,0,0)]! xl:-end-20 xl:-me-10 xl:h-[32rem] xl:w-[50rem] xl:rounded-e-none xl:pe-4 xl:shadow-[-0.05rem_0.1rem_0rem_#00000014] rtl:[transform:rotateX(20deg)rotateZ(20deg)skewY(-8deg)scale(1)] rtl:[--rtl-reverse:-1]"
        style={section["hero"] &&
          `transform: rotateX(${animateValue(
            section["hero"],
            [7, 17],
            [20, 0],
          )}deg)rotateZ(calc(${animateValue(
            section["hero"],
            [7, 17],
            [-20, 0],
          )}deg * var(--rtl-reverse)))skewY(calc(${animateValue(
            section["hero"],
            [7, 17],
            [8, 0],
          )}deg * var(--rtl-reverse)))`}
        class:invisible={section["hero"] && scrollY > section["hero"].clientHeight}
      >
        <div class="grid">
          <div
            style={`opacity:${animateValue(section["hero"], [15, 17], [1, 0])}`}
            class="z-1 col-start-1 row-start-1 grid overflow-x-scroll overflow-y-hidden [scrollbar-width:none] xl:visible xl:overflow-x-visible xl:overflow-y-visible [&::-webkit-scrollbar]:hidden"
            class:invisible={section["hero"] && scrollY < section["hero"].clientHeight}
          >
            <!-- flying components -->
            <div
              class="col-start-1 row-start-1 mx-6 flex items-end gap-6 xl:mx-0 xl:items-start xl:gap-0"
            >
              <div class="flex gap-6 xl:w-60 xl:flex-col xl:gap-0">
                <div
                  class="relative z-1 w-80 will-change-auto motion-reduce:transform-none! max-[1279px]:[transform:translate3d(0,0,0)]! xl:-start-6 xl:w-auto xl:[filter:drop-shadow(-1rem_3rem_1rem_#00000012)]"
                  style={`filter: drop-shadow(calc(-1rem * var(--rtl-reverse)) 3rem 1rem #00000012);transform:translate(calc(${animateValue(
                    section["hero"],
                    [2, 9],
                    [0, 250],
                  )}px * var(--rtl-reverse)),${animateValue(
                    section["hero"],
                    [2, 9],
                    [0, -800],
                  )}px)`}
                >
                  <div class="tabs tabs-lift grid grid-cols-3">
                    <button
                      onclick={() => (activeMenuItemOnHeroMockup = 1)}
                      class:tab-active={activeMenuItemOnHeroMockup === 1}
                      class="tab me-0! text-xs whitespace-nowrap [--tab-border-color:transparent]"
                    >
                      {$t("Features")}
                    </button>
                    <button
                      onclick={() => (activeMenuItemOnHeroMockup = 2)}
                      class:tab-active={activeMenuItemOnHeroMockup === 2}
                      class="tab me-0! text-xs whitespace-nowrap [--tab-border-color:transparent]"
                    >
                      {$t("Links")}
                    </button>
                    <button
                      onclick={() => (activeMenuItemOnHeroMockup = 3)}
                      class:tab-active={activeMenuItemOnHeroMockup === 3}
                      class="tab me-0! text-xs whitespace-nowrap [--tab-border-color:transparent]"
                    >
                      {$t("Message")}
                    </button>
                  </div>
                  <div
                    class="bg-base-100 rounded-b-box h-60 shrink-0"
                    class:rounded-se-box={activeMenuItemOnHeroMockup !== 3}
                    class:rounded-ss-box={activeMenuItemOnHeroMockup !== 1}
                  >
                    {#if activeMenuItemOnHeroMockup === 1}
                      <div class="flex flex-col items-stretch p-6">
                        <fieldset class="fieldset py-2">
                          <label class="flex cursor-pointer justify-between text-xs">
                            {$t("Faster development")}
                            <input
                              type="checkbox"
                              class="toggle toggle-xs toggle-primary"
                              name="toggle"
                              checked="checked"
                            />
                          </label>
                        </fieldset>
                        <fieldset class="fieldset py-2">
                          <label class="flex cursor-pointer justify-between text-xs">
                            {$t("Cleaner HTML")}
                            <input
                              type="checkbox"
                              class="toggle toggle-xs toggle-secondary"
                              name="toggle"
                              checked="checked"
                            />
                          </label>
                        </fieldset>
                        <fieldset class="fieldset py-2">
                          <label class="flex cursor-pointer justify-between text-xs">
                            {$t("Customizable")}
                            <input
                              type="checkbox"
                              class="toggle toggle-xs toggle-accent"
                              name="toggle"
                              checked="checked"
                            />
                          </label>
                        </fieldset>
                        <fieldset class="fieldset py-2">
                          <label class="flex cursor-pointer justify-between text-xs">
                            {$t("Themeable")}
                            <input
                              type="checkbox"
                              class="toggle toggle-xs toggle-success"
                              name="toggle"
                              checked="checked"
                            />
                          </label>
                        </fieldset>
                        <fieldset class="fieldset py-2">
                          <label class="flex cursor-pointer justify-between text-xs">
                            {$t("Pure CSS")}
                            <input
                              type="checkbox"
                              class="toggle toggle-xs"
                              name="toggle"
                              checked="checked"
                            />
                          </label>
                        </fieldset>
                      </div>
                    {/if}
                    {#if activeMenuItemOnHeroMockup === 2}
                      <ul class="menu w-full">
                        <li class="menu-title">{$t("Dashboard")}</li>
                        <li>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="h-5 w-5"
                            >
                              <path
                                d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"
                              >
                              </path>
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
                              class="h-5 w-5"
                            >
                              <path
                                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                              >
                              </path>
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
                              class="h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"
                                clip-rule="evenodd"
                              >
                              </path>
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
                              class="h-5 w-5"
                            >
                              <path
                                d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"
                              >
                              </path>
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
                              class="h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd"
                              >
                              </path>
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
                                  src="https://img.daisyui.com/images/profile/demo/superperson@94.webp"
                                  alt="tailwind css avatar component"
                                />
                              </div>
                            </div>
                            <div
                              class="chat-bubble text-xs [.chat_&]:before:[inset-inline-start:-0.73rem]"
                            >
                              {$t("Use Tailwind CSS but write fewer class names.")}
                            </div>
                          </div>
                        </div>
                        <div class="join w-full">
                          <input class="input input-sm join-item w-full" placeholder="Message" />
                          <button class="btn btn-neutral btn-sm join-item">
                            <svg
                              fill="currentColor"
                              class="h-4 w-4"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"
                              >
                              </path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    {/if}
                  </div>
                </div>

                <div
                  class="flex w-60 flex-col justify-end gap-4 xl:w-auto xl:justify-normal xl:p-6"
                >
                  <div
                    class="alert rounded-field border-base-300 border will-change-auto motion-reduce:transform-none! motion-reduce:shadow-none! max-[1279px]:[transform:translate3d(0,0,0)]!"
                    style={`box-shadow:calc(${animateValue(
                      section["hero"],
                      [5, 5.5],
                      [0, -1],
                    )}rem * var(--rtl-reverse)) ${animateValue(
                      section["hero"],
                      [5, 5.5],
                      [0, 3],
                    )}rem ${animateValue(
                      section["hero"],
                      [5, 5.5],
                      [0, 1],
                    )}rem #00000012;transform:translate(calc(${animateValue(
                      section["hero"],
                      [5, 15],
                      [0, 250],
                    )}px * var(--rtl-reverse)),${animateValue(
                      section["hero"],
                      [5, 15],
                      [0, -800],
                    )}px)`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 shrink-0"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      >
                      </path>
                    </svg>
                    <span class="text-xs">
                      {@html $t("Pure CSS. <br />No JS dependency")}
                    </span>
                  </div>
                  <div
                    class="alert rounded-field border-base-300 border will-change-auto motion-reduce:transform-none! motion-reduce:shadow-none! max-[1279px]:[transform:translate3d(0,0,0)]!"
                    style={`box-shadow:calc(${animateValue(
                      section["hero"],
                      [6, 6.5],
                      [0, -1],
                    )}rem * var(--rtl-reverse)) ${animateValue(
                      section["hero"],
                      [6, 6.5],
                      [0, 3],
                    )}rem ${animateValue(
                      section["hero"],
                      [6, 6.5],
                      [0, 1],
                    )}rem #00000012;transform:translate(calc(${animateValue(
                      section["hero"],
                      [6, 16],
                      [0, 250],
                    )}px * var(--rtl-reverse)),${animateValue(
                      section["hero"],
                      [6, 16],
                      [0, -800],
                    )}px)`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 shrink-0"
                    >
                      <path
                        d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
                      >
                      </path>
                    </svg>
                    <span class="text-xs">
                      {@html $t("Works on all frameworks")}
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex shrink-0 gap-6 pe-4 xl:flex-col xl:pe-0">
                <div
                  class="card bg-base-100 shadow-sm will-change-auto motion-reduce:transform-none! motion-reduce:shadow-sm! max-[1279px]:[transform:translate3d(0,0,0)]!"
                  style={`--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05), calc(${animateValue(
                    section["hero"],
                    [0, 0.5],
                    [0, -1],
                  )}rem * var(--rtl-reverse)) ${animateValue(
                    section["hero"],
                    [0, 0.5],
                    [0, 3],
                  )}rem ${animateValue(
                    section["hero"],
                    [0, 0.5],
                    [0, 1],
                  )}rem #00000012;transform:translate(calc(${animateValue(
                    section["hero"],
                    [0, 8],
                    [0, 250],
                  )}px * var(--rtl-reverse)),${animateValue(
                    section["hero"],
                    [0, 8],
                    [0, -800],
                  )}px)`}
                >
                  <div class="card-body">
                    <h2 class="card-title mb-4 text-sm">{$t("Design system")}</h2>
                    <div class="grid grid-cols-5 items-end gap-8">
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          checked
                          class="checkbox checkbox-xs"
                          tabindex="-1"
                        />
                        <span class="text-base-content/70 text-[.6rem]">xs</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          checked
                          class="checkbox checkbox-sm"
                          tabindex="-1"
                        />
                        <span class="text-base-content/70 text-[.6rem]">sm</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          checked
                          class="checkbox checkbox-md"
                          tabindex="-1"
                        />
                        <span class="text-base-content/70 text-[.6rem]">md</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          checked
                          class="checkbox checkbox-lg"
                          tabindex="-1"
                        />
                        <span class="text-base-content/70 text-[.6rem]">lg</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input
                          name="checkbox"
                          type="checkbox"
                          checked
                          class="checkbox checkbox-xl"
                          tabindex="-1"
                        />
                        <span class="text-base-content/70 text-[.6rem]">xl</span>
                      </label>
                    </div>
                    <div class="grid grid-cols-5 items-end gap-8">
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-xs" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">xs</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-sm" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">sm</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-md" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">md</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-lg" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">lg</span>
                      </label>
                      <label class="flex cursor-pointer flex-col items-center gap-1">
                        <input name="radio" type="radio" class="radio radio-xl" tabindex="-1" />
                        <span class="text-base-content/70 text-[.6rem]">xl</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  class="card bg-base-100 shadow-sm will-change-auto motion-reduce:transform-none! motion-reduce:shadow-sm! max-[1279px]:[transform:translate3d(0,0,0)]!"
                  style={`--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05), calc(${animateValue(
                    section["hero"],
                    [4, 4.5],
                    [0, -1],
                  )}rem * var(--rtl-reverse)) ${animateValue(
                    section["hero"],
                    [4, 4.5],
                    [0, 3],
                  )}rem ${animateValue(
                    section["hero"],
                    [4, 4.5],
                    [0, 1],
                  )}rem #00000012;transform:translate(calc(${animateValue(
                    section["hero"],
                    [4, 10],
                    [0, 250],
                  )}px * var(--rtl-reverse)),${animateValue(
                    section["hero"],
                    [4, 10],
                    [0, -800],
                  )}px)`}
                >
                  <div class="card-body">
                    <h2 class="card-title mb-4 text-sm">Semantic colors</h2>
                    <div class="grid grid-cols-4 gap-4">
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-primary rounded-field aspect-square w-10"></div>
                        <div class="text-base-content/70 text-[.6rem]">primary</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-secondary rounded-field aspect-square w-10"></div>
                        <div class="text-base-content/70 text-[.6rem]">secondary</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-accent rounded-field aspect-square w-10"></div>
                        <div class="text-base-content/70 text-[.6rem]">accent</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-neutral rounded-field aspect-square w-10"></div>
                        <div class="text-base-content/70 text-[.6rem]">neutral</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-info rounded-field aspect-square w-10"></div>
                        <div class="text-base-content/70 text-[.6rem]">info</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-success rounded-field aspect-square w-10"></div>
                        <div class="text-base-content/70 text-[.6rem]">success</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-warning rounded-field aspect-square w-10"></div>
                        <div class="text-base-content/70 text-[.6rem]">warning</div>
                      </div>
                      <div class="flex flex-col items-center gap-1">
                        <div class="bg-error rounded-field aspect-square w-10"></div>
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
            class="col-start-1 row-start-1 w-11/12 ps-10 pe-10 pb-3 opacity-0 sm:pb-10 lg:pe-4 xl:ps-12 xl:pt-10 rtl:ps-0 lg:rtl:ps-20"
            style={`opacity:${animateValue(
              section["hero"],
              [16, 17],
              [0, 1],
            )};z-index:${animateValue(section["hero"], [20, 22], [0, 1])}`}
          >
            <pre class="max-w-xl text-xs sm:text-base"><code class="text-xs whitespace-pre-wrap"
                ><span class="text-base-content/40 italic">// {$t("Styling a simple button")}</span>
&lt;button class=&quot;<span class={`${demo_1_StyleHandler()}`}>{demo_1_ClassNameHandler()}</span
                >&quot;&gt;
  {demo_1_ElementTextHandler()}
&lt;/button&gt;</code
              ></pre>
            <div>
              <div class="text-base-content/40 py-6 font-mono text-xs italic">
                // {$t("Result")}:
              </div>
              <button class={`${demo_1_ClassNameHandler()}`}>
                {demo_1_ElementTextHandler()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pointer-events-none bottom-0 flex justify-center p-2 xl:sticky xl:justify-end">
    <div class="pointer-events-auto h-[116px] w-full max-w-[350px] min-w-[330px]">
      <Carbon />
    </div>
  </div>
</div>

<div class="h-12"></div>

<CompanyLogos />

<div class="w-full px-2 py-40 lg:px-10" bind:this={section["nextlevel"]}>
  <div class="text-center">
    <h2
      class="font-title relative z-2 mx-auto [transform:translate3d(0,0,0)] text-[clamp(2rem,6vw,4.5rem)] leading-none font-black will-change-auto motion-reduce:tracking-normal! max-[1279px]:tracking-normal!"
      style={`letter-spacing:${animateValue(section["nextlevel"], [-100, 20], [1, 0])}rem`}
    >
      {$t("Take Tailwind CSS")}
      <br />
      <span
        class="[transform:translate3d(0,0,0)] bg-[linear-gradient(90deg,var(--color-secondary)_4%,color-mix(in_oklch,var(--color-secondary),var(--color-error))_22%,var(--color-primary)_45%,color-mix(in_oklch,var(--color-primary),var(--color-accent))_67%,var(--color-accent)_100.2%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] motion-reduce:tracking-normal! max-[1279px]:tracking-normal!"
        style={`letter-spacing:${animateValue(section["nextlevel"], [-100, 20], [0, 1])}rem`}
      >
        {$t("to the next level")}
      </span>
    </h2>
    <p class="text-base-content/70 font-title py-4 font-light md:text-2xl">
      {@html $t(
        "daisyUI adds class names to Tailwind CSS<br />for all common UI components.<br />Class names like",
      )}
      <a target="_blank" href="/components/button/" class="link">btn</a>
      ,
      <a target="_blank" href="/components/card/" class="link">card</a>
      ,
      <a target="_blank" href="/components/toggle/" class="link">toggle</a>
      {@html $t("and many more.")}
    </p>
    <div class="h-6"></div>
    <p class="text-success font-title font-light md:text-2xl">
      {@html $t(
        "This allows us to focus on important things<br />instead of styling basic elements for every project.",
      )}
    </p>
    <div class="h-12"></div>
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
            class="font-title relative z-2 mx-auto text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-black"
          >
            <span
              class="motion-reduce:opacity-100!"
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
              }`}
            >
              {$t("No_more_ugly_HTML_part_1")}
            </span>
            <span
              class="motion-reduce:opacity-100!"
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
              }`}
            >
              {$t("No_more_ugly_HTML_part_2")}
            </span>
            <span
              class="motion-reduce:opacity-100!"
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
              }`}
            >
              {$t("No_more_ugly_HTML_part_3")}
            </span>
            <span
              class="motion-reduce:opacity-100!"
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
              }`}
            >
              {$t("No_more_ugly_HTML_part_4")}
            </span>
          </h2>
          <p class="text-base-content/70 font-title relative z-2 py-4 font-light md:text-3xl">
            {@html $t(
              "Write fewer class names<br />Use component class names<br />modify them using Tailwind CSS utilities.",
            )}
          </p>
          <div class="h-4"></div>
          <div class="mx-auto w-72 text-start">
            <span class="text-base-content/70 inline-block -translate-y-2 -rotate-12">
              {$t("Click")}
            </span>
            <svg
              class="text-base-content/20 inline-block h-8 w-20 rtl:[transform:rotateY(180deg)]"
              viewBox="0 0 45 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.50244C23.4 -1.69756 38.3333 11.1691 43 18.0024M43 18.0024L38 17.0024M43 18.0024V13.0024"
                stroke="currentColor"
              >
              </path>
            </svg>
          </div>
          <div class="flex justify-center pt-4 pb-10">
            <label class="flex cursor-pointer items-center gap-3">
              {$t("Tailwind only")}
              <div class="relative">
                <input
                  name="tailwind-va-daisyui"
                  type="checkbox"
                  class="toggle toggle-xl toggle-primary relative z-2"
                  bind:checked={toggleValueForCodeCompare}
                />
              </div>
              {$t("Tailwind + daisyUI")}
            </label>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6 xl:flex-row">
          {#if toggleValueForCodeCompare}
            <div
              class="mockup-code border-base-content/10 text-base-content relative grow border bg-transparent text-xs xl:min-h-[550px] xl:max-w-[calc(100vw-32rem)]"
            >
              <pre class="w-full px-6 whitespace-pre-wrap before:hidden"><code
                  >&lt;div class=&quot;<span class="text-teal-600">card w-80 bg-base-200</span
                  >&quot;&gt;
  &lt;div class=&quot;<span class="text-teal-600">card-body gap-3</span>&quot;&gt;
    &lt;input placeholder=&quot;Email&quot; class=&quot;<span class="text-teal-600">input</span
                  >&quot; /&gt;
    &lt;label class=&quot;<span class="text-teal-600">label</span>&quot;&gt;
      &lt;input type=&quot;checkbox&quot; class=&quot;<span class="text-teal-600"
                    >toggle toggle-sm</span
                  >&quot; /&gt;
      {$t("Submit to newsletter")}
    &lt;/label&gt;
    &lt;label class=&quot;<span class="text-teal-600">label</span>&quot;&gt;
      &lt;input type=&quot;checkbox&quot; class=&quot;<span class="text-teal-600"
                    >toggle toggle-sm</span
                  >&quot; /&gt;
      {$t("Accept terms of use")}
    &lt;/label&gt;
    &lt;button class=&quot;<span class="text-teal-600">btn btn-neutral</span>&quot;&gt;{$t(
                    "Save",
                  )}&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code
                ></pre>
            </div>
            <div class="divider xl:divider-horizontal">=</div>
            <div>
              <div class="card bg-base-200 w-80">
                <div class="card-body gap-3">
                  <input placeholder="Email" class="input" name="sample-input-field" />
                  <label class="label">
                    <input name="sample-checkbox" type="checkbox" class="toggle toggle-sm" />
                    {$t("Submit to newsletter")}
                  </label>
                  <label class="label">
                    <input name="sample-checkbox" type="checkbox" class="toggle toggle-sm" />
                    {$t("Accept terms of use")}
                  </label>
                  <button class="btn btn-neutral">{$t("Save")}</button>
                </div>
              </div>
            </div>
          {:else}
            <div
              class="mockup-code border-base-content/10 text-base-content relative grow border bg-transparent text-xs xl:min-h-[550px] xl:max-w-[calc(100vw-32rem)]"
            >
              <pre class="w-full px-6 whitespace-pre-wrap before:hidden"><code
                  >&lt;div class=&quot;<span class="text-rose-600"
                    >w-80 rounded-lg bg-zinc-50 text-zinc-800</span
                  >&quot;&gt;
  &lt;div class=&quot;<span class="text-rose-600">flex flex-col gap-3 p-8</span>&quot;&gt;
    &lt;input placeholder=&quot;Email&quot; class=&quot;<span class="text-rose-600"
                    >w-full rounded-sm border border-zinc-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-100 focus:outline-none focus-visible:border-zinc-900</span
                  >&quot;/&gt;
    &lt;label class=&quot;<span class="text-rose-600"
                    >flex cursor-pointer items-center text-sm gap-1.5 text-zinc-500</span
                  >&quot;&gt;
      &lt;div class=&quot;<span class="text-rose-600">relative inline-block h-5</span>&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;<span class="text-rose-600"
                    >peer h-5 w-8 cursor-pointer appearance-none rounded-full border border-zinc-400 peer-checked:bg-white checked:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-400 checked:focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:outline-none</span
                  >&quot;/&gt;
        &lt;span class=&quot;<span class="text-rose-600"
                    >pointer-events-none absolute start-0.75 top-0.75 block size-[0.875rem] rounded-full bg-zinc-400 transition-all duration-200 peer-checked:start-[0.9375rem] peer-checked:bg-zinc-900</span
                  >&quot;&gt;&lt;/span&gt;
      &lt;/div&gt;
      {$t("Submit to newsletter")}
    &lt;/label&gt;
    &lt;label class=&quot;<span class="text-rose-600"
                    >flex cursor-pointer items-center text-sm gap-1.5 text-zinc-500</span
                  >&quot;&gt;
      &lt;div class=&quot;<span class="text-rose-600">relative inline-block h-5</span>&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;<span class="text-rose-600"
                    >peer h-5 w-8 cursor-pointer appearance-none rounded-full border border-zinc-400 peer-checked:bg-white checked:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-400 checked:focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:outline-none</span
                  >&quot;/&gt;
        &lt;span class=&quot;<span class="text-rose-600"
                    >pointer-events-none absolute start-0.75 top-0.75 block size-[0.875rem] rounded-full bg-zinc-400 transition-all duration-200 peer-checked:start-[0.9375rem] peer-checked:bg-zinc-900</span
                  >&quot;&gt;&lt;/span&gt;
      &lt;/div&gt;
      {$t("Accept terms of use")}
    &lt;/label&gt;
    &lt;button class=&quot;<span class="text-rose-600"
                    >inline-block cursor-pointer rounded-sm bg-zinc-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_.2rem_0.3rem_-.25rem_black] active:shadow-none transition duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-2 focus-visible:outline-none active:translate-y-[1px]</span
                  >&quot; &gt;{$t("Save")}&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code
                ></pre>
            </div>
            <div class="divider xl:divider-horizontal">=</div>
            <div>
              <div class="w-80 rounded-lg bg-zinc-50 text-zinc-800">
                <div class="flex flex-col gap-3 p-8">
                  <input
                    name="Sample Email"
                    placeholder="Email"
                    class="w-full rounded-sm border border-zinc-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-zinc-100 focus:outline-none focus-visible:border-zinc-900"
                  />
                  <label class="flex cursor-pointer items-center gap-1.5 text-sm text-zinc-500">
                    <div class="relative inline-block h-5">
                      <input
                        type="checkbox"
                        name="sample-checkbox"
                        class="peer h-5 w-8 cursor-pointer appearance-none rounded-full border border-zinc-400 peer-checked:bg-white checked:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:outline-none checked:focus-visible:ring-zinc-900"
                      />
                      <span
                        class="pointer-events-none absolute start-0.75 top-0.75 block size-[0.875rem] rounded-full bg-zinc-400 transition-all duration-200 peer-checked:start-[0.9375rem] peer-checked:bg-zinc-900"
                      ></span>
                    </div>
                    {$t("Submit to newsletter")}
                  </label>
                  <label class="flex cursor-pointer items-center gap-1.5 text-sm text-zinc-500">
                    <div class="relative inline-block h-5">
                      <input
                        type="checkbox"
                        name="sample-checkbox"
                        class="peer h-5 w-8 cursor-pointer appearance-none rounded-full border border-zinc-400 peer-checked:bg-white checked:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:outline-none checked:focus-visible:ring-zinc-900"
                      />
                      <span
                        class="pointer-events-none absolute start-0.75 top-0.75 block size-[0.875rem] rounded-full bg-zinc-400 transition-all duration-200 peer-checked:start-[0.9375rem] peer-checked:bg-zinc-900"
                      ></span>
                    </div>
                    {$t("Accept terms of use")}
                  </label>
                  <button
                    class="inline-block cursor-pointer rounded-sm bg-zinc-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_.2rem_0.3rem_-.25rem_black] transition duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-2 focus-visible:outline-none active:translate-y-[1px] active:shadow-none"
                    >{$t("Save")}</button
                  >
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class="min-h-[100vh] overflow-hidden pt-32 pb-40"
  bind:this={section["performance"]}
  style="background: radial-gradient(circle at 30% 50%, var(--color-info) -200%, transparent 35%), radial-gradient(circle at 70% 60%, var(--color-success) -200%, transparent 30%);"
>
  <div class="relative">
    <div
      class="relative flex flex-col items-center justify-center gap-10 px-4 md:px-10 xl:flex-row-reverse xl:gap-20"
    >
      <div>
        <h2
          class="font-title text-center text-[clamp(2rem,8vw,4rem)] leading-none font-black xl:text-start"
        >
          <span
            class="motion-reduce:opacity-100!"
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
            }`}
          >
            {$t("Fewer class names")}
          </span>
          <br />
          <span
            class="motion-reduce:opacity-100!"
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
            }`}
          >
            {$t("Faster development")}
          </span>
          <br />
          <span
            class="motion-reduce:opacity-100!"
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
            }`}
          >
            {$t("Smaller file size")}
          </span>
        </h2>
        <div class="h-10"></div>
        <p class="text-base-content/70 font-title text-center font-light md:text-3xl xl:text-start">
          {@html $t(
            "With daisyUI, you write 88% fewer class names<br />And your HTML size will be about 79% smaller.",
          )}
        </p>
        <div class="h-10"></div>
        <div class="flex w-full justify-center xl:justify-start">
          <a data-sveltekit-preload-data href="/docs/install/" class="btn btn-lg btn-wide group">
            {$t("Get started")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block rtl:rotate-180 group-hover:rtl:-translate-x-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              >
              </path>
            </svg>
          </a>
        </div>
      </div>
      <div class="grid shrink-0 gap-6 xl:grid-cols-5">
        <div
          class="card border-base-content/10 col-span-3 col-start-1 row-start-1 flex flex-col border border-dashed will-change-auto motion-reduce:transform-none!"
          style={`transform:translateX(${animateValue(
            section["performance"],
            [-70, -20],
            [20, 0],
          )}%)`}
        >
          <div class="card-body">
            <h3>
              <span class="font-bold">{$t("CSS Class names")}</span>
            </h3>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>{$t("Tailwind only")}</span>
                <span class="font-mono text-xs">114</span>
              </div>
              <progress class="progress progress-warning w-56" value={114} max="130"></progress>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>{$t("Tailwind + daisyUI")}</span>
                <span class="font-mono text-xs">14</span>
              </div>
              <progress
                class="progress progress-success w-56"
                value={animateValue(section["performance"], [-70, -20], [130, 14])}
                max="130"
              >
              </progress>
            </div>
            <span class="mt-2 flex gap-2 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                fill="currentColor"
                class="text-success"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
              </svg>
              88% {$t("fewer class names")}
            </span>
          </div>
        </div>
        <div
          class="card border-base-content/10 col-span-3 row-start-2 flex flex-col border border-dashed will-change-auto motion-reduce:transform-none! xl:col-start-3"
          style={`transform:translateX(${animateValue(
            section["performance"],
            [-70, -20],
            [-20, 0],
          )}%)`}
        >
          <div class="card-body">
            <h3>
              <span class="font-bold">{$t("HTML size")}</span>
            </h3>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>{$t("Tailwind only")}</span>
                <span class="font-mono text-xs">2110 byte</span>
              </div>
              <progress class="progress progress-warning w-56" value={2110} max="2500"></progress>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between text-sm">
                <span>{$t("Tailwind + daisyUI")}</span>
                <span class="font-mono text-xs">427 byte</span>
              </div>
              <progress
                class="progress progress-success w-56"
                value={animateValue(section["performance"], [-65, -15], [2500, 427])}
                max="2500"
              >
              </progress>
            </div>
            <span class="mt-2 flex gap-2 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                fill="currentColor"
                class="text-success"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
              </svg>
              79% {$t("smaller DOM size")}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  class="bg-neutral text-neutral-content relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-hidden p-10 md:p-20"
  bind:this={section["customizable"]}
>
  <div
    class="relative flex max-w-[100rem] flex-col items-center justify-center xl:flex-row xl:gap-20"
  >
    <div class="relative z-1 w-full py-10">
      <h2 class="font-title text-center leading-none font-black xl:text-start">
        <span
          class="inline-block text-[clamp(2rem,8vw,3.6rem)] font-black will-change-auto [--rtl-reverse:1] motion-reduce:transform-none! max-[1279px]:[transform:translate3d(0,0,0)]! rtl:[--rtl-reverse:-1]"
          style={`transform:translateX(calc(${animateValue(
            section["customizable"],
            [-100, 100],
            [10, 0],
          )}rem * var(--rtl-reverse)))`}
        >
          {@html $t("Highly customizable")}
        </span>
        <br />
        <span
          class="inline-block text-[clamp(2rem,8vw,3rem)] font-light will-change-auto [--rtl-reverse:1] motion-reduce:transform-none! max-[1279px]:[transform:translate3d(0,0,0)]! rtl:[--rtl-reverse:-1]"
          style={`transform:translateX(calc(${animateValue(
            section["customizable"],
            [-100, 100],
            [0, 8],
          )}rem * var(--rtl-reverse)))`}
        >
          {@html $t("Powered by Tailwind&nbsp;CSS utility&nbsp;classes")}
        </span>
      </h2>
      <div class="h-10"></div>
      <p
        class="text-neutral-content/60 font-title inline-block w-full text-center font-light [text-wrap:balance] will-change-auto [--rtl-reverse:1] motion-reduce:transform-none! max-[1279px]:[transform:translate3d(0,0,0)]! md:text-2xl xl:text-start rtl:[--rtl-reverse:-1]"
        style={`transform:translateX(calc(${animateValue(
          section["customizable"],
          [-100, 100],
          [10, 2],
        )}rem * var(--rtl-reverse)))`}
      >
        {@html $t(
          "daisyUI is built on top of Tailwind&nbsp;CSS so you can customize everything using utility classes.",
        )}
      </p>
      <div class="h-10"></div>
      <div class="flex w-full justify-center">
        <a data-sveltekit-preload-data href="/docs/customize/" class="btn btn-lg btn-wide group">
          {$t("how-to-customize")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block rtl:rotate-180 group-hover:rtl:-translate-x-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            >
            </path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex flex-col">
      <div
        class="mockup-code bg-neutral-content/5 mx-auto w-full max-w-xs text-start sm:max-w-none"
      >
        <pre><code>&lt;a class="<span>btn btn-primary</span>"&gt;Button&lt;/a&gt;</code></pre>
      </div>
      <div class="divider text-neutral-content text-opacity-30">↓</div>
      <div
        class="mockup-code bg-neutral-content/5 mx-auto w-full max-w-xs text-start sm:max-w-none"
      >
        <pre><code
            >&lt;a class="<span>btn btn-primary</span> <span class="text-teal-500"
              >rounded-full</span
            >"&gt;Button&lt;/a&gt;</code
          ></pre>
      </div>
    </div>
  </div>
</div>

<div
  class="from-base-100 to-base-300 relative flex min-h-[100vh] items-center justify-center bg-linear-to-t py-16"
  bind:this={section["agnostic"]}
  style="background: radial-gradient(circle at 30% 60%, var(--color-info) -200%, transparent 30%), radial-gradient(circle at 70% 50%, var(--color-warning) -200%, transparent 30%);"
>
  <div
    class="relative flex max-w-[100rem] flex-col-reverse items-center justify-center gap-10 p-4 md:gap-20 md:p-20 xl:flex-row-reverse"
  >
    <div>
      <h2 class="font-title text-center leading-none xl:text-start">
        <span class="text-[clamp(2rem,8vw,4rem)] font-black">{$t("Pure CSS.")}</span>
        <br />
        <span class="text-[clamp(2rem,8vw,4rem)] font-black">{$t("Framework agnostic.")}</span>
        <br />
        <span class="text-[clamp(2rem,8vw,4rem)] font-light">{$t("Works everywhere.")}</span>
      </h2>
      <div class="h-10"></div>
      <p
        class="text-base-content/70 font-title mb-6 text-center font-light md:text-3xl xl:text-start"
      >
        {@html $t(
          "daisyUI is a plugin for Tailwind CSS. It works on all JS frameworks and doesn't need a JS bundle file.",
        )}
      </p>
      <p
        class="text-base-content/70 font-title mb-6 text-center font-light md:text-3xl xl:text-start"
      >
        {@html $t(
          "Install daisyUI as a dev dependency and use the class names just like any other Tailwind CSS class name.",
        )}
      </p>
      <div class="h-10"></div>
      <div class="flex w-full justify-center xl:justify-start">
        <a
          data-sveltekit-preload-data
          href="/docs/install/"
          class="btn btn-lg btn-wide btn-outline group"
        >
          {$t("cta-2")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block rtl:rotate-180 group-hover:rtl:-translate-x-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            >
            </path>
          </svg>
        </a>
      </div>
    </div>
    <div class="pointer-events-none relative z-1 shrink-0 xl:w-1/3">
      <div
        class="grid max-w-sm grid-cols-4 gap-4 px-10 pt-10 md:max-w-lg md:gap-10 xl:max-w-none xl:px-6 xl:pt-0 [&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1rem/2)] md:[&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1.5rem/2)]"
      >
        <div></div>

        {#each ["vue", "react", "svelte", "qwik", "laravel", "nextjs", "solidjs", "preact", "phoenix", "nuxtjs", "astro", "angular", "vite", "rails"] as logo, index}
          <img
            loading="lazy"
            width="80"
            height="80"
            class="aspect-square w-full will-change-auto motion-reduce:[scale:1]! motion-reduce:opacity-100! motion-reduce:filter-none!"
            style={`opacity:${animateValue(
              section["agnostic"],
              [-65 + index * 5, -55 + index * 5],
              [0, 1],
            )}; transform:translateY(${animateValue(
              section["agnostic"],
              [-65 + index * 5, -55 + index * 5],
              [1, 0],
            )}rem);`}
            alt={`daisyUI ${logo}`}
            src={`https://img.daisyui.com/images/logos/${logo}.svg`}
          />
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="min-h-[320vh] py-20" bind:this={section["themes"]}>
  <div
    class="sticky top-[calc(50vh-10rem)] mx-auto grid w-[calc(100%-2rem)] max-w-[85rem] overflow-hidden rounded-2xl sm:top-20"
  >
    {#each ["light", "valentine", "cyberpunk", "cupcake", "retro", "synthwave", "luxury", "night"] as currentTheme, index}
      <div
        class="col-start-1 row-start-1 flex [transform:translate3d(0,0,0)] items-start"
        data-theme={currentTheme}
        style={index > 0
          ? `clip-path: polygon(${animateValue(
              section["themes"],
              [0 + index * 7, 20 + index * 7],
              [-180, 100],
            )}% 0%, 0% 0%, 0% 100%, ${animateValue(
              section["themes"],
              [0 + index * 7, 20 + index * 7],
              [0, 100],
            )}% 100%)`
          : ""}
      >
        <div
          class="border-base-200 flex w-full items-stretch justify-center gap-6 rounded-2xl border p-6 xl:h-[40rem] xl:justify-normal"
          style={`--tw-border-opacity:${animateValue(section["themes"], [10, 15], [0, 1])}`}
        >
          <ComponentsPreview {animateValue} section={section["themes"]} {index} />
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="bg-base-100 min-h-[120vh] py-20" bind:this={section["designdecision"]}>
  <div class="sticky top-20 w-full px-2 pt-40 lg:px-10">
    <div class="text-center">
      <h2
        class="font-title relative z-2 mx-auto text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-black"
      >
        <span
          class="motion-reduce:opacity-100!"
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
          }`}
        >
          {$t("Apply_your_own_design_decisions_part_1")}
        </span>
        <span
          class="motion-reduce:opacity-100!"
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
          }`}
        >
          {$t("Apply_your_own_design_decisions_part_2")}
        </span>
        <span
          class="motion-reduce:opacity-100!"
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
          }`}
        >
          {$t("Apply_your_own_design_decisions_part_3")}
        </span>
        <span
          class="motion-reduce:opacity-100!"
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
          }`}
        >
          {$t("Apply_your_own_design_decisions_part_4")}
        </span>
        <span
          class="motion-reduce:opacity-100!"
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
          }`}
        >
          {$t("Apply_your_own_design_decisions_part_5")}
        </span>
      </h2>
      <p
        class="text-base-content/70 font-title relative z-2 mx-auto max-w-3xl py-4 font-light md:text-3xl"
      >
        {@html $t(
          "Your website should be unique. Create a custom theme for yourself using daisyUI theme generator. The colors you pick will be applied to all daisyUI components.",
        )}
      </p>
      <div class="h-10"></div>
      <div class="flex w-full flex-col justify-center gap-4 md:flex-row">
        <a data-sveltekit-preload-data href="/theme-generator/" class="btn">
          {$t("Theme Generator")}
        </a>
        <a
          data-sveltekit-preload-data
          href="/docs/themes/#how-to-add-custom-styles-for-a-specific-theme"
          class="btn btn-neutral"
        >
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
        class="font-title relative z-2 mx-auto text-[clamp(2rem,6vw,4.5rem)] leading-none font-black"
      >
        <span
          class="motion-reduce:opacity-100!"
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
          }`}
        >
          {data.stats.components}
          {$t("components")}
        </span>
        <br />
        <span
          class="motion-reduce:opacity-100!"
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
          }`}
        >
          {data.stats.utilities}
          {$t("utility classes")}
        </span>
        <br />
        <span class="inline-grid">
          {#if section["possibilities"] && ((scrollY - section["possibilities"].offsetTop) / section["possibilities"].clientHeight) * 100 > -100 && ((scrollY - section["possibilities"].offsetTop) / section["possibilities"].clientHeight) * 100 < -20}{:else}
            <span
              class="pointer-events-none col-start-1 row-start-1 [transform:translate3d(0,0,0)] bg-[linear-gradient(90deg,var(--color-secondary)_4%,color-mix(in_oklch,var(--color-secondary),var(--color-error))_22%,var(--color-primary)_45%,color-mix(in_oklch,var(--color-primary),var(--color-accent))_67%,var(--color-accent)_100.2%)] bg-clip-text opacity-70 blur-xl [-webkit-text-fill-color:transparent] [:root[dir=rtl]_&]:leading-[1.35]"
              aria-hidden="true"
            >
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
                ? "motion-reduce:bg-[linear-gradient(90deg,var(--color-secondary)_4%,color-mix(in_oklch,var(--color-secondary),var(--color-error))_22%,var(--color-primary)_45%,color-mix(in_oklch,var(--color-primary),var(--color-accent))_67%,var(--color-accent)_100.2%)]! motion-reduce:bg-clip-text! motion-reduce:[-webkit-text-fill-color:transparent]!"
                : "bg-[linear-gradient(90deg,var(--color-secondary)_4%,color-mix(in_oklch,var(--color-secondary),var(--color-error))_22%,var(--color-primary)_45%,color-mix(in_oklch,var(--color-primary),var(--color-accent))_67%,var(--color-accent)_100.2%)] bg-clip-text [-webkit-text-fill-color:transparent]"
            }`}
          >
            {$t("endless possibilities")}
          </span>
        </span>
      </h2>
      <p class="text-base-content/70 font-title relative z-2 py-4 font-light md:text-3xl">
        {$t("Mix and match daisyUI class names to create unique web pages.")}
      </p>
      <div class="h-10"></div>
      <div class="flex w-full justify-center">
        <a
          data-sveltekit-preload-data
          href="/components/"
          class="btn btn-outline md:btn-wide w-full"
        >
          {$t("all-components-btn")}
        </a>
      </div>
    </div>
  </div>
</div>

<div
  class="min-h-[200vh] w-full px-2 lg:px-10"
  bind:this={section["numbers"]}
  style="background: radial-gradient(at 40% 40%, var(--color-primary) -200%, transparent 30%), radial-gradient(at 60% 60%, var(--color-secondary) -200%, transparent 30%);"
>
  <div class="sticky top-0 pt-40 text-center">
    <h2
      class="font-title relative z-2 mx-auto text-[clamp(2rem,6vw,4.5rem)] leading-none font-black will-change-auto motion-reduce:transform-none!"
      style={`transform:scale(${animateValue(
        section["numbers"],
        [0, 20],
        [0.7, 1],
      )});opacity:${animateValue(section["numbers"], [0, 20], [0, 1])}`}
    >
      {@html $t("daisyUI is the most popular<br />component library for Tailwind&nbsp;CSS")}
    </h2>
    <div class="h-32"></div>
    <div class="grid gap-10 p-6 xl:grid-cols-3">
      <div
        class="flex flex-col items-center gap-4 will-change-auto motion-reduce:transform-none!"
        style={`transform:translateY(${animateValue(
          section["numbers"],
          [20, 30],
          [2, 0],
        )}rem);opacity:${animateValue(section["numbers"], [20, 30], [0, 1])}`}
      >
        <div class="font-title text-[clamp(2rem,6vw,4rem)] font-black tabular-nums">
          <span class="motion-reduce:hidden">
            {#await fetchStats() then stats}
              <Countup
                initial={stats.stargazers_count - 50}
                value={stats.stargazers_count + 50}
                roundto={10}
                duration={10 * 1000}
              />
            {/await}
          </span>
          <span class="hidden motion-reduce:inline">
            {stats.stargazers_count?.toLocaleString("en-US")}
          </span>
        </div>
        <a
          href="https://github.com/saadeghi/daisyui"
          target="_blank"
          rel="noopener, noreferrer"
          class="text-base-content/70 hover:text-base-content hover:underline"
        >
          GitHub Stars
        </a>
      </div>
      <div
        class="flex flex-col items-center gap-4 will-change-auto motion-reduce:transform-none!"
        style={`transform:translateY(${animateValue(
          section["numbers"],
          [30, 40],
          [2, 0],
        )}rem);opacity:${animateValue(section["numbers"], [30, 40], [0, 1])}`}
      >
        <div class="font-title text-[clamp(2rem,6vw,4rem)] font-black tabular-nums">
          <span class="motion-reduce:hidden">
            {#await fetchStats() then stats}
              <Countup
                initial={stats.dependents_count - 200}
                value={stats.dependents_count + 200}
                roundto={10}
                duration={10 * 1000}
              />
            {/await}
          </span>
          <span class="hidden motion-reduce:inline">
            {stats.dependents_count?.toLocaleString("en-US")}
          </span>
        </div>
        <a
          href="https://github.com/saadeghi/daisyui/network/dependents"
          target="_blank"
          rel="noopener, noreferrer"
          class="text-base-content/70 hover:text-base-content hover:underline"
        >
          {$t("open-source projects using daisyUI")}
        </a>
      </div>
      <div
        class="flex flex-col items-center gap-4 will-change-auto motion-reduce:transform-none!"
        style={`transform:translateY(${animateValue(
          section["numbers"],
          [40, 50],
          [2, 0],
        )}rem);opacity:${animateValue(section["numbers"], [40, 50], [0, 1])}`}
      >
        <div class="font-title text-[clamp(2rem,6vw,4rem)] font-black tabular-nums">
          <span class="motion-reduce:hidden">
            {#await fetchStats() then stats}
              <Countup
                initial={stats.npm_downloads_count_total - 500}
                value={stats.npm_downloads_count_total + 500}
                roundto={100}
                duration={20 * 1000}
              />
            {/await}
          </span>
          <span class="hidden motion-reduce:inline">
            {stats.npm_downloads_count_total?.toLocaleString("en-US")}
          </span>
        </div>
        <a
          href="https://www.npmjs.com/package/daisyui"
          target="_blank"
          rel="noopener, noreferrer"
          class="text-base-content/70 hover:text-base-content hover:underline"
        >
          {$t("npm-installs")}
        </a>
      </div>
    </div>
  </div>
</div>

<div class="h-32"></div>
<MediaLogos />

<div class="h-32"></div>

<Testimonials items={data.testimonials} limit="-1" />

<Opensource />

<div class="min-h-[150vh] py-20" bind:this={section["try"]}>
  <div class="sticky top-0 w-full px-2 pt-40 lg:px-10">
    <div class="text-center">
      <h2
        class="font-title relative z-2 mx-auto text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-black"
      >
        <span
          class="motion-reduce:opacity-100!"
          style={`opacity:${
            section["try"] &&
            ((scrollY - section["try"].offsetTop) / section["try"].clientHeight) * 100 > -100 &&
            ((scrollY - section["try"].offsetTop) / section["try"].clientHeight) * 100 < 7
              ? 0.1
              : 1
          }`}
        >
          {$t("Try daisyUI")}
        </span>
        <br />
        <span
          class="font-light motion-reduce:opacity-100!"
          style={`opacity:${
            section["try"] &&
            ((scrollY - section["try"].offsetTop) / section["try"].clientHeight) * 100 > -100 &&
            ((scrollY - section["try"].offsetTop) / section["try"].clientHeight) * 100 < 16
              ? 0.1
              : 1
          }`}
        >
          {$t("on your favorite framework")}
        </span>
      </h2>
      <div class="h-16"></div>
      <div class="pointer-events-none mx-auto flex max-w-xl flex-wrap justify-center gap-10 px-6">
        {#each ["svelte", "vue", "react", "solidjs", "rails", "preact", "angular", "astro", "qwik", "nextjs", "nuxtjs", "laravel", "phoenix", "vite"] as logo, index}
          <img
            loading="lazy"
            width="96"
            height="96"
            class="aspect-square h-10 w-10"
            src={`https://img.daisyui.com/images/logos/${logo}.svg`}
            alt={`daisyUI ${logo}`}
          />
        {/each}
      </div>
      <div class="h-16"></div>
      <div class="flex w-full justify-center">
        <a data-sveltekit-preload-data href="/docs/install/" class="btn btn-primary btn-wide">
          {$t("See all examples")}
        </a>
      </div>
      <div class="h-10"></div>
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
            stroke-linejoin="round"
          >
            <path
              d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
              stroke-width="6.05"
            >
            </path>
          </svg>
          CodePen
        </a>
        <a
          href="/tailwindplay/"
          class="btn-ghost btn-sm btn"
          target="_blank"
          rel="noopener, noreferrer"
        >
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
            <g clip-path="url(#prefix__clip0)">
              <path
                fill="#38bdf8"
                fill-rule="evenodd"
                d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                clip-rule="evenodd"
              >
              </path>
            </g>
            <defs>
              <clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath>
            </defs>
          </svg>
          Tailwind Play
        </a>
      </div>
    </div>
  </div>
</div>

<div class="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
  <div class="hero-content w-full text-center">
    <div class="w-full max-w-md">
      <h2 class="font-title mt-20 mb-8 text-[clamp(2rem,8vw,5rem)] font-semibold md:text-6xl">
        {$t("install-title")}
      </h2>
      <div class="mx-auto my-2 w-full max-w-md">
        <Install />
        <a href="/docs/install/" class="btn-primary btn btn-wide mt-4 mb-20 shadow-lg">
          {$t("install-btn")}
        </a>
      </div>
    </div>
  </div>
</div>
<Footer />
