<script>
  import { page } from "$app/stores"
  import { currentLang, defaultLang, t } from "$lib/i18n.svelte.js"

  let { pages = [] } = $props()

  function extractPages(obj) {
    const items = []
    function recursiveExtract(obj) {
      if (obj.href) {
        items.push(obj)
      }
      if (obj.items) {
        for (const item of obj.items) {
          recursiveExtract(item)
        }
      }
    }
    for (const item of obj) {
      recursiveExtract(item)
    }
    return items
  }
  let arrayOfPagesInOrder = extractPages(pages)

  let currentPageIndex = $derived(
    arrayOfPagesInOrder.findIndex((item) => item.href === $page.url.pathname),
  )
</script>

<div class="not-prose pb-10">
  <div class="bg-base-content/10 mx-1 my-10 h-px"></div>
  {#if arrayOfPagesInOrder[currentPageIndex]}
    <div class="flex justify-between">
      <div>
        {#if currentPageIndex > 0 && arrayOfPagesInOrder[currentPageIndex - 1]}
          <a
            href={arrayOfPagesInOrder[currentPageIndex - 1].href}
            class="btn btn-sm md:btn-md gap-2 lg:gap-3"
          >
            <svg
              class="h-6 w-6 fill-current md:h-8 md:w-8 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
            </svg>
            <div class="flex flex-col items-start gap-0.5 leading-[1.1]">
              <span
                class="text-base-content/50 hidden text-[0.5625rem] font-semibold tracking-wide md:block"
              >
                {$t("Prev")}
              </span>
              <span>{$t(arrayOfPagesInOrder[currentPageIndex - 1].name)}</span>
            </div>
          </a>
        {/if}
      </div>
      <div>
        {#if currentPageIndex < arrayOfPagesInOrder.length - 1 && arrayOfPagesInOrder[currentPageIndex + 1]}
          <a
            href={arrayOfPagesInOrder[currentPageIndex + 1].href}
            class="btn btn-neutral btn-sm md:btn-md gap-2 lg:gap-3"
          >
            <div class="flex flex-col items-end gap-0.5 leading-[1.1]">
              <span
                class="text-neutral-content/50 hidden text-[0.5625rem] font-semibold tracking-wide md:block"
              >
                {$t("Next")}
              </span>
              <span>{$t(arrayOfPagesInOrder[currentPageIndex + 1].name)}</span>
            </div>
            <svg
              class="h-6 w-6 fill-current md:h-8 md:w-8 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
            </svg>
          </a>
        {/if}
      </div>
    </div>
    <div class="bg-base-content/10 mx-1 my-10 h-px"></div>
  {/if}

  <div class="flex flex-col justify-between gap-2 px-4 text-xs md:flex-row">
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <svg
          class="inline-block size-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt"
            ><circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
            ></circle><circle cx="12" cy="17.25" r="1.25" fill="currentColor" stroke-width="2"
            ></circle><path
              d="m9.244,8.369c.422-1.608,1.733-2.44,3.201-2.364,1.45.075,2.799.872,2.737,2.722-.089,2.63-2.884,2.273-3.197,4.773h.011"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
            ></path></g
          ></svg
        >
        <div>
          {$t("Do you have a question?")}
          <a
            target="_blank"
            rel="noopener, noreferrer"
            class="link"
            href="https://github.com/saadeghi/daisyui/discussions"
          >
            Ask on GitHub
          </a>
          or
          <a
            target="_blank"
            rel="noopener, noreferrer"
            class="link"
            href="https://daisyui.com/discord/"
          >
            Discord server
          </a>
        </div>
      </div>
      {#if arrayOfPagesInOrder[currentPageIndex]}
        <div class="flex items-center gap-2">
          <svg
            class="inline-block size-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              ><path d="M9 9v-1a3 3 0 0 1 6 0v1"></path><path
                d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"
              ></path><path d="M3 13l4 0"></path><path d="M17 13l4 0"></path><path d="M12 20l0 -6"
              ></path><path d="M4 19l3.35 -2"></path><path d="M20 19l-3.35 -2"></path><path
                d="M4 7l3.75 2.4"
              ></path><path d="M20 7l-3.75 2.4"></path></g
            ></svg
          >
          <div>
            {$t("Do you see a bug?")}
            <a
              target="_blank"
              rel="noopener, noreferrer"
              class="link"
              href={`https://github.com/saadeghi/daisyui/issues?q=${arrayOfPagesInOrder[currentPageIndex].name}`}
            >
              {$t("open an issue on GitHub")}
            </a>
          </div>
        </div>
      {/if}
      <div class="flex items-center gap-2">
        <svg viewBox="0 0 300 271" height="12" width="16" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
          />
        </svg>
        <div>
          {$t("Do you like daisyUI?")}
          <a
            target="_blank"
            rel="noopener, noreferrer"
            class="link"
            href={`https://x.com/intent/post?text=daisyUI%20%0D%0AComponents%20for%20Tailwind%20CSS%20%0D%0Ahttps://daisyui.com`}
          >
            Post about it!
          </a>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <svg class="inline-block size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          ><g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
            ><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
            ></path></g
          ></svg
        >
        <div>
          {$t("Support daisyUI's development")}:
          <a
            target="_blank"
            rel="noopener, noreferrer"
            class="link"
            href={`https://opencollective.com/daisyui`}
          >
            {$t("Open Collective")}
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <svg
          class="inline-block size-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
            ><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path><path
              d="M13.5 6.5l4 4"
            ></path></g
          ></svg
        >
        <div>
          <a
            target="_blank"
            rel="noopener, noreferrer"
            class="link"
            href={`https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/routes/(routes)${$page.url.pathname.replace(
              /\/$/,
              "",
            )}/+page.md?plain=1`}
          >
            {$t("Edit this page on GitHub")}
          </a>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <svg
          class="inline-block size-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
            ><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path
              d="M16.5 15h3"
            ></path><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path><path d="M4.5 15h3"
            ></path><path d="M6 15v6"></path><path d="M18 15v6"></path><path d="M10 15l4 6"
            ></path><path d="M10 21l4 -6"></path></g
          ></svg
        >
        <div>
          <a
            target="_blank"
            rel="noopener, noreferrer"
            class="link"
            href={`https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/src/routes/(routes)${$page.url.pathname.replace(
              /\/$/,
              "",
            )}/+page.md?plain=1`}
          >
            Text version for AI prompts
          </a>
        </div>
      </div>
      {#if $currentLang != defaultLang}
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="inline-block size-4 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z"
              clip-rule="evenodd"
            >
            </path>
          </svg>

          <div>
            <a
              target="_blank"
              rel="noopener, noreferrer"
              class="link"
              href={`https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/translation/${$currentLang}.json`}
            >
              {$t("Contribute to translation")}
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<!-- <div
  class="card bg-base-100 from-base-200 not-prose outline-base-content/5 relative overflow-hidden bg-linear-to-b font-sans shadow-lg outline -outline-offset-1 md:flex-row-reverse">
  <figure class="max-md:bg-primary/10 isolate shrink-0 md:w-2/3">
    <a>
      <img
        class="pointer-events-none"
        alt="daisyUI store"
        src="https://img.daisyui.com/images/store/admin-dashboard.webp" />
    </a>
  </figure>
  <div
    class="bg-accent -left-1/5 pointer-events-none absolute bottom-[-50%] aspect-square w-3/4 -translate-x-1/2 rounded-full opacity-20 blur-3xl">
  </div>
  <div
    class="bg-primary pointer-events-none absolute bottom-[-120%] left-1/2 aspect-square w-full -translate-x-1/2 rounded-full opacity-20 blur-3xl">
  </div>
  <div
    class="bg-base-100 pointer-events-none absolute -top-3/4 right-1/4 z-3 aspect-square w-1/2 rounded-full opacity-60 blur-3xl">
  </div>
  <div class="card-body relative isolate z-3">
    <h2
      class="card-title text-base-content text-xl font-black contrast-200 [text-wrap:balance] sm:w-[250%] sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl">
      <span>
        Start your next project
        <span class="italic">even faster</span>
      </span>
    </h2>
    <div class="grow">
      <h2
        class="card-title text-xl font-light sm:w-[250%] sm:text-2xl md:text-3xl lg:text-xl xl:text-3xl">
        <svg
          class="inline size-4 md:h-6 md:w-6"
          width="32"
          height="32"
          viewBox="0 0 415 415"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5" />
          <circle cx="207.5" cy="135" r="125" fill="white" />
          <circle cx="207.5" cy="135" r="56" fill="#FF9903" />
        </svg>
        with daisyUI Admin Dashboard
      </h2>
    </div>
    <a class="btn btn-block btn-primary group" href="/store">
      More details
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 group-hover:rtl:-translate-x-1 md:inline-block">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
        </path>
      </svg>
    </a>
  </div>
</div> -->

<div
  class="card not-prose outline-base-content/5 bg-primary/5 relative overflow-hidden font-sans shadow-lg outline -outline-offset-1 [direction:ltr] md:flex-row-reverse"
>
  <figure class="max-md:bg-primary/10 isolate md:w-2/3">
    <img
      class="pointer-events-none"
      alt="daisyUI store"
      src="https://img.daisyui.com/images/store/nexus.webp"
    />
  </figure>
  <div class="card-body relative isolate z-3">
    <h2
      class="card-title text-base-content text-xl [text-wrap:balance] contrast-200 sm:w-[250%] sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl"
    >
      <span>
        <svg
          class="relative -mt-2 inline-block h-[0.75em]"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="43"
          viewBox="0 0 34 43"
          fill="none"
        >
          <g clip-path="url(#clip0_123_2)">
            <g clip-path="url(#clip1_123_2)">
              <path
                d="M1.92057 23.9917L12.5271 13.385"
                stroke="#636EFF"
                stroke-width="3.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6968 3.31591C10.1584 5.85432 10.1584 9.9699 12.6968 12.5083C15.2352 15.0467 19.3507 15.0467 21.8892 12.5083C24.4276 9.9699 24.4276 5.85432 21.8892 3.31591C19.3507 0.777507 15.2352 0.777507 12.6968 3.31591Z"
                fill="#636EFF"
                fill-opacity="0.25"
                stroke="#636EFF"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.6067 19.6903L19 30.2969"
                stroke="#7257FF"
                stroke-width="3.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.93091 30.4665C11.4693 27.9281 15.5849 27.9281 18.1233 30.4665C20.6617 33.005 20.6617 37.1205 18.1233 39.6589C15.5849 42.1973 11.4693 42.1973 8.93091 39.6589C6.3925 37.1205 6.3925 33.005 8.93091 30.4665Z"
                fill="#7257FF"
                fill-opacity="0.25"
                stroke="#7257FF"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_123_2"
              x1="47"
              y1="-0.243764"
              x2="225.267"
              y2="43.145"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4B7EFF" />
              <stop offset="0.995417" stop-color="#7C4CFE" />
            </linearGradient>
            <clipPath id="clip0_123_2">
              <rect width="222" height="43" fill="white" />
            </clipPath>
            <clipPath id="clip1_123_2">
              <rect
                width="41.2048"
                height="51.925"
                fill="white"
                transform="translate(9.13647 60.4919) rotate(-135)"
              />
            </clipPath>
          </defs>
        </svg>
        <span class="font-black lg:tracking-[1.5rem]">NEXUS</span>
        <br />
        <span class="text-2xl font-light"> Official daisyUI Dashboard Template </span>
      </span>
    </h2>
    <div class="mb-4 grow">
      <h2
        class="card-title text-sm font-light opacity-50 sm:w-[250%] sm:text-lg md:text-lg lg:text-lg xl:text-xl"
      >
        Available on daisyUI store
      </h2>
    </div>
    <a class="btn btn-block btn-primary group" href="/store">
      More details
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
  <!-- <div class="card-body relative isolate z-3">
    <h2
      class="card-title text-base-content text-xl [text-wrap:balance] contrast-200 sm:w-[250%] sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl"
    >
      <span>
        <span class="font-black">Official daisyUI</span>
        <br />
        <span class="font-black"> Figma Library </span>
      </span>
    </h2>
    <div class="grow">
      <h2
        class="card-title text-sm font-light sm:w-[250%] sm:text-lg md:text-lg lg:text-lg xl:text-xl"
      >
        <svg
          class="inline size-4 md:h-6 md:w-6"
          width="32"
          height="32"
          viewBox="0 0 415 415"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
          <circle cx="207.5" cy="135" r="125" fill="white"></circle>
          <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
        </svg>
        Available on daisyUI store
      </h2>
    </div>
    <a class="btn btn-block btn-primary group" href="/store/">
      More details
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
  </div> -->
</div>
