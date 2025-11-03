<script>
  import SEO from "$components/SEO.svelte"
  import Footer from "$components/Footer.svelte"
  let dialogs = $state({})

  let videoModal = $state({
    dialog: null,
    videoId: "",
    ratio: "16/9",
    title: "",
    isLoading: true,
  })

  function openVideoModal(videoData) {
    return (event) => {
      const title = event.currentTarget.textContent?.trim() || "Video"
      const isSameVideo = videoModal.videoId === videoData.id

      videoModal.videoId = videoData.id || ""
      videoModal.ratio = videoData.ratio || "16/9"
      videoModal.title = title
      videoModal.isLoading = !isSameVideo

      if (videoModal.dialog) {
        videoModal.dialog.showModal()
      }
    }
  }

  $effect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1)
      const dialog = dialogs[hash]
      if (dialog && !dialog.open) {
        dialog.showModal()
      }
    }

    handleHash()
    window.addEventListener("hashchange", handleHash)

    return () => window.removeEventListener("hashchange", handleHash)
  })

  let compareTable = $state([
    [
      "",
      "daisyUI <div class='-my-1 inline-grid grid-cols-[.25rem_1fr_.25rem] grid-rows-[.25rem_1fr_.25rem] align-middle'><div class='border-s-1 border-t-1 border-blue-600 [grid-area:1/1/2/2]'></div> <div class='border-e-1 border-t-1 border-blue-600 [grid-area:1/3/2/4]'></div> <div class='border-s-1 border-b-1 border-blue-600 [grid-area:3/1/4/2]'></div> <div class='border-e-1 border-b-1 border-blue-600 [grid-area:3/3/4/4]'></div> <div class='font-title m-0.5 bg-blue-600 px-1 text-sm font-semibold tracking-wide text-white [grid-area:1/1/4/4]'>BLUEPRINT</div></div> MCP",
      "daisyUI llms.txt",
      "Context7 MCP",
      "GitMCP",
    ],
    ["daisyUI Official", true, true, false, false],
    [
      "Fine-tuned for daisyUI",
      true,
      true,
      "<span class='text-error'>Impossible to fine-tune</span>",
      "<span class='text-error'>Impossible to fine-tune</span>",
    ],
    [
      "Data source",
      "<span class='text-success'>Authored & verified</span>",
      "<span class='text-success'>Authored & verified</span>",
      "<span class='text-error'>AI generated</span>",
      "<span class='text-error'>AI generated</span>",
    ],
    [
      "Resource accuracy",
      "<span class='text-success'>100% accurate</span>",
      "<span class='text-success'>100% accurate</span>",
      "<span class='text-error'>Confuses random repos</span>",
      "<span class='text-error'>Confuses random pages</span>",
    ],
    [
      "Includes unwanted context",
      "<span class='text-success'>No</span>",
      "<span class='text-error'>Depends on the LLM</span>",
      "<span class='text-error'>Yes</span>",
      "<span class='text-error'>Yes</span>",
    ],
    ["daisyUI Design system specs", true, false, false, false],
    ["Converts Figma to daisyUI", true, false, false, false],
    ["Converts Tailwind CSS to daisyUI", true, false, false, false],
    ["Converts Bootstrap to daisyUI", true, false, false, false],
    ["Generates themes from an image", true, false, false, false],
    ["Provides component pictures to AI", true, false, false, false],
    [
      "Generates AI slop",
      "<span class='text-success'>Less likely</span>",
      "<span class='text-error'>depends on the LLM</span>",
      "<span class='text-error'>More likely</span>",
      "<span class='text-error'>More likely</span>",
    ],
    [
      "Updates",
      "<span class='text-success'>100% Synced with daisyUI</span>",
      "<span class='text-success'>100% Synced with daisyUI</span>",
      "<span class='text-error'>Depends on a crawler</span>",
      "<span class='text-error'>Depends on a crawler</span>",
    ],
    [
      "Token usage efficiency",
      "<span class='text-success'>Super efficient</span>",
      "<span class='text-error'>Not efficient</span>",
      "<span class='text-error'>Wastes token on useless context</span>",
      "<span class='text-error'>Wastes token on useless context</span>",
    ],
  ])

  const checkoutUrl = "/blueprint/checkout/"

  const code = `<body class="flex min-h-screen items-center justify-center bg-base-200">
    <div class="card w-96 bg-base-100 card-border">
      <div class="card-body">
        <h2 class="mb-4 card-title text-2xl font-bold">Login</h2>

        <form>
          <!-- Email Input -->
          <div class="mb-4">
            <label class="mb-2 block text-sm font-medium">Email</label>
            <input type="email" class="validator input input-md w-full"
              placeholder="mail@site.com" required />
            <div class="validator-hint hidden text-sm">Please enter a valid email address</div>
          </div>

          <!-- Password Input -->
          <div class="mb-4">
            <label class="mb-2 block text-sm font-medium">Password</label>
            <input type="password" class="validator input input-md w-full" 
              placeholder="Enter your password" required minlength="8" />
            <div class="validator-hint hidden text-sm">Password must be at least 8 characters</div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="mb-6 flex items-center justify-between">
            <label class="flex cursor-pointer items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-sm" />
              <span class="text-sm">Remember me</span>
            </label>
            <a href="#" class="link text-sm link-hover">Forgot password?</a>
          </div>

          <!-- Submit Button -->
          <div class="card-actions">
            <button type="submit" class="btn btn-block">Login</button>
          </div>
        </form>

        <!-- Sign up link -->
        <div class="mt-4 text-center">
          <span class="text-sm">Don't have an account? </span>
          <a href="#" class="link text-sm link-hover">Sign up</a>
        </div>
      </div>
    </div>
  </body>
`
</script>

<SEO
  title="daisyUI and Tailwind CSS MCP server"
  formatTitle={false}
  desc="daisyUI and Tailwind CSS MCP server to generate Tailwind CSS code, Convert Figma to Tailwind CSS"
  img="https://img.daisyui.com/images/blueprint.webp"
/>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="w-full px-4 pt-20 md:px-20" dir="ltr">
  <!-- hero -->

  <div>
    <div class="inline-block">
      <div class="me-6 -mb-2 self-end text-end font-mono text-[0.625rem] text-blue-600">
        Version 1.1
      </div>
      <div class="mb-4 inline-grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>
        <div class="[grid-area:1/1/4/4]">
          <div>
            <h1
              class="group font-title m-2 text-[clamp(2.5rem,12vw,8rem)] leading-none font-semibold text-white"
              style="
                background-image: linear-gradient(#3B72FE 1px, transparent 1px), linear-gradient(90deg, #3B72FE 1px, transparent 1px), linear-gradient(#3B72FE 0.5px, transparent 0.5px), linear-gradient(90deg, #3B72FE 0.5px, #155dfc 0.5px);
                background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
                background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;"
            >
              <div
                class="blueprint_logo_animated flex size-full bg-transparent px-4 transition-colors duration-2000 group-hover:bg-blue-600"
              >
                <span class="[animation-delay:50ms]"> B </span>
                <span class="[animation-delay:100ms]"> L </span>
                <span class="[animation-delay:150ms]"> U </span>
                <span class="[animation-delay:200ms]"> E </span>
                <span class="[animation-delay:250ms]"> P </span>
                <span class="[animation-delay:300ms]"> R </span>
                <span class="[animation-delay:350ms]"> I </span>
                <span class="[animation-delay:400ms]"> N </span>
                <span class="[animation-delay:450ms]"> T </span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="font-title ms-2 mt-2 mb-8 inline-flex items-center text-lg lg:text-[1.75rem]">
      <img
        src="https://img.daisyui.com/images/daisyui/mark.svg"
        alt="daisyUI"
        class="border-base-content/5 me-2 size-[2.4em] shrink-0 border border-dashed p-2 max-md:hidden"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="border-base-content/5 ms-1 me-2 inline-block size-[2.4em] shrink-0 border border-dashed p-2 align-middle max-md:hidden"
        viewBox="0 0 195 195"
        fill="none"
      >
        <path
          d="M25 97.8528L92.8822 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177"
          stroke="currentColor"
          stroke-width="12"
          stroke-linecap="round"
        />
        <path
          d="M76.2652 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52"
          stroke="currentColor"
          stroke-width="12"
          stroke-linecap="round"
        />
        <path
          d="M109.853 46.9411L59.6482 97.1457C50.2756 106.518 50.2756 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2167 140.459 93.5893 131.087L143.794 80.8822"
          stroke="currentColor"
          stroke-width="12"
          stroke-linecap="round"
        />
      </svg>
      <div>
        Official daisyUI Code Generator
        <span class="tooltip" data-tip="Model Context Protocol"> MCP </span> Server
      </div>
    </div>
    <div class="ms-2 py-1.5 max-sm:text-xs">
      <svg
        class="me-1 mb-1 inline-block size-4 align-middle opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 665.8 1000"
      >
        <path
          fill="currentColor"
          d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
        ></path>
      </svg>
      Provides on-demand, fine-tuned daisyUI design system resources to AI
    </div>
    <div class="ms-2 py-1.5 max-sm:text-xs">
      <svg
        class="me-1 mb-1 inline-block size-4 align-middle opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 665.8 1000"
      >
        <path
          fill="currentColor"
          d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
        ></path>
      </svg>
      daisyUI code generation with
      <span
        class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
      >
        <svg
          class="text-success mx-1 inline-block size-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="3"
            fill="none"
            stroke="currentColor"
          >
            <path d="M22 7L13.5 15.5 8.5 10.5 2 17"></path>
            <path d="M16 7L22 7 22 13"></path>
          </g>
        </svg>
        10x code quality
      </span>
      +
      <span
        class="inline-block rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
      >
        <svg
          class="text-success mx-1 inline-block size-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="3"
            fill="none"
            stroke="currentColor"
          >
            <path d="M22 7L13.5 15.5 8.5 10.5 2 17"></path>
            <path d="M16 7L22 7 22 13"></path>
          </g>
        </svg>
        10x faster result
      </span>
      and
      <span
        class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
      >
        90% less token cost
      </span>
    </div>
    <div class="ms-2 py-1.5 max-sm:text-xs">
      <svg
        class="me-1 mb-1 inline-block size-4 align-middle opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 665.8 1000"
      >
        <path
          fill="currentColor"
          d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
        ></path>
      </svg>
      Generate unlimited and accurate daisyUI code, with any code editor, any LLM
    </div>
    <div class="ms-2 py-1.5 max-sm:text-xs">
      <svg
        class="me-1 mb-1 inline-block size-4 align-middle opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 665.8 1000"
      >
        <path
          fill="currentColor"
          d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
        ></path>
      </svg>
      Convert
      <span class="badge badge-soft">Image</span>
      <span class="opacity-20">|</span>
      <span class="badge badge-soft">Figma</span>
      <span class="opacity-20">|</span>
      <span class="badge badge-soft">Tailwind CSS</span>
      <span class="opacity-20">|</span>
      <span class="badge badge-soft">Bootstrap</span>
      to daisyUI
    </div>
  </div>

  <!-- CTA -->

  <div class="ms-6 mt-10 flex flex-col gap-2 p-1">
    <div class="flex gap-2 max-md:flex-col">
      <button class="btn btn-lg btn-wide" onclick={() => dialogs.install.showModal()}>
        <svg
          viewBox="0 0 48 48"
          class="size-4 opacity-40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          ></path><path
            d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          ></path></svg
        >
        Install guide
      </button>
      <a
        class="btn btn-neutral btn-lg btn-wide"
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg class="size-4 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
            ></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
        Get the license
      </a>
    </div>

    <div class="flex items-center gap-2 ps-6 pt-2 pb-4">
      <div class="text-[0.625rem] opacity-40">Compatible with</div>
      <img class="size-4" src="https://img.daisyui.com/images/logos/cursor.webp?2" alt="Cursor" />
      <img class="size-4" src="https://img.daisyui.com/images/logos/vscode.webp" alt="VS Code" />
      <img class="size-4" src="https://img.daisyui.com/images/logos/claude.webp" alt="Claude" />
      <div class="text-[0.625rem] opacity-40">and more</div>
    </div>
  </div>

  <!-- mockup -->

  <div class="relative h-[60rem] rtl:overflow-clip">
    <div
      class="mockup-code my-20 min-w-280 bg-black py-2 text-white outline outline-offset-1 outline-white/5 before:-ms-2.5 max-xl:absolute max-xl:end-10 max-md:-me-10"
    >
      <div class="-mt-9 flex items-center justify-center border-b border-white/10 pt-2 pb-1">
        <div class="font-mono text-xs opacity-30">Your text editor</div>
      </div>
      <div class="flex">
        <div
          class="absolute end-10 top-140 z-1 flex -rotate-10 flex-col items-center text-blue-500 max-sm:hidden lg:end-130 lg:top-80"
        >
          <div class="text-center font-[Fuzzy_Bubbles] uppercase">
            <div class="text-center text-3xl lg:text-5xl">
              Design System
              <br />
              Resources
            </div>
            <div class="mt-2 text-3xl text-white">(on-demand)</div>
          </div>
          <svg
            class="relative -me-65 max-lg:hidden"
            width="120"
            height="50"
            viewBox="0 0 68 27"
            fill="none"
          >
            <path
              d="M0.00570263 1.10585C-0.0527213 0.556661 0.34512 0.0640961 0.894306 0.00567211C1.44349 -0.0527519 1.93606 0.345089 1.99448 0.894275L1.00009 1.00006L0.00570263 1.10585ZM67.1237 17.7183C67.5554 18.0627 67.6262 18.6919 67.2818 19.1237L61.6692 26.1592C61.3248 26.5909 60.6956 26.6617 60.2639 26.3173C59.8321 25.9729 59.7613 25.3437 60.1058 24.9119L65.0947 18.6581L58.8409 13.6692C58.4092 13.3247 58.3384 12.6955 58.6828 12.2638C59.0273 11.8321 59.6565 11.7613 60.0882 12.1057L67.1237 17.7183ZM1.00009 1.00006L1.99448 0.894275C2.6018 6.60311 4.43848 10.678 7.36681 13.5698C10.3063 16.4727 14.4502 18.287 19.8655 19.266C30.7523 21.2342 46.3375 19.762 66.3883 17.5063L66.5001 18.5L66.6119 19.4938C46.6627 21.738 30.7478 23.2658 19.5097 21.2341C13.8624 20.2131 9.28759 18.2775 5.9615 14.9928C2.6242 11.6972 0.648381 7.14703 0.00570263 1.10585L1.00009 1.00006Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="grow pt-4">
          <pre class="font-mono text-xs whitespace-break-spaces opacity-20 select-none">{code}</pre>
        </div>
        <div
          class="-mb-2 flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 p-4 text-xs text-white/70 sm:w-120"
        >
          <div class="flex justify-end gap-3 opacity-50">
            <svg
              class="size-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"></path>
            </svg>
            <svg class="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M25.99 6C16.04 6 8 14.06 8 24H2l7.79 7.79.14.29L18 24h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83C16.53 39.98 21.02 42 25.99 42 35.94 42 44 33.94 44 24S35.94 6 25.99 6zM24 16v10l8.56 5.08L34 28.65l-7-4.15V16h-3z"
              ></path>
            </svg>
            <svg
              class="size-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM128.4 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zM384 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
              ></path>
            </svg>
          </div>
          <div class="rounded-box border border-white/5 bg-white/5 p-4">
            Create a daisyUI login form with form validator, a remember me checkbox and a forgot
            password link
          </div>
          <div class="opacity-30">Thought for 1s</div>
          <div>Fetching required daisyUI code snippets</div>
          <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
            <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
            <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
            <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
            <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

            <div
              class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
            >
              <div class="flex justify-between">
                <div>
                  <svg
                    class="text-success inline-block size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <g fill="none">
                      <path
                        d="M10 24L20 34L40 14"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <span class="opacity-50">Ran</span>
                  <span
                    class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500"
                  >
                    <svg
                      class="size-3 fill-current opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                      ></path>
                    </svg>
                    daisyUI Blueprint
                  </span>
                  <span class="opacity-50">MCP tool</span>
                </div>
                <svg
                  class="inline-block size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.97-2.97,2.97,2.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.97,11.22l-2.97,2.97-2.97-2.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>Received required components from MCP:</div>
              <div>card, input, button, link, checkbox, validator</div>
              <div class="flex- my-2 columns-2 items-start gap-2">
                <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
                  <img
                    src="https://img.daisyui.com/images/components-screenshot/checkbox.png"
                    alt="button"
                  />
                </div>
                <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
                  <img
                    src="https://img.daisyui.com/images/components-screenshot/button.png"
                    alt="button"
                  />
                </div>
                <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
                  <img
                    src="https://img.daisyui.com/images/components-screenshot/input.png"
                    alt="button"
                  />
                </div>
                <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
                  <img
                    src="https://img.daisyui.com/images/components-screenshot/card.png"
                    alt="button"
                  />
                </div>
              </div>
              <div>
                <svg
                  class="text-success inline-block size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <g fill="none">
                    <path
                      d="M10 24L20 34L40 14"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                Reading specs, docs and examples.
              </div>
              <div>
                <svg
                  class="text-success inline-block size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <g fill="none">
                    <path
                      d="M10 24L20 34L40 14"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                Done.
              </div>
            </div>
          </div>
          <div>
            Creating login form with daisyUI components with a remember me checkbox and a forgot
            password link
          </div>
          <div>
            <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M16 18L22 12 16 6"></path>
                  <path d="M8 6L2 12 8 18"></path>
                </g>
              </svg>
              index.html
              <span class="text-green-400">+50</span>
              <span class="text-red-400">-1</span>
            </span>
          </div>
          <div>
            <svg
              class="text-success inline-block size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path
                  d="M10 24L20 34L40 14"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Login form made with daisyUI components has been added to index.html using daisyUI Blueprint
            MCP server.
          </div>
          <!-- AI input -->
          <div class="rounded-box border border-white/5 bg-white/5 p-2">
            <div class="flex gap-2 leading-none">
              <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
                <svg
                  class="size-3 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                  </g>
                </svg>
              </div>
              <div
                class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
              >
                index.html
              </div>
            </div>
            <div class="py-2 opacity-50">Ask AI...</div>
            <div class="flex justify-between">
              <div class="flex gap-2 leading-none">
                <div
                  class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
                >
                  Agent
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="inline-block size-3"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                  </svg>
                </div>
                <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
                  <svg
                    class="size-3 fill-current opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                    >
                    </path>
                  </svg>
                  daisyUI Blueprint
                </span>
              </div>
              <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
                <svg
                  class="size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                >
                  <path
                    d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- problem -->

  <div
    class="from-error/10 relative mb-20 flex min-h-[100vh] items-start gap-12 bg-radial to-50% max-lg:flex-col lg:gap-24"
  >
    <div class="grow">
      <div class="prose pt-10 lg:min-h-[60vh]">
        <span class="badge badge-soft mb-4">Problem</span>
        <h2
          id="problem"
          class="text-error font-title mt-0 mb-8 text-[clamp(2.5rem,8vw,3rem)] leading-none"
        >
          Why AI sucks at UI?
        </h2>
        <div>
          <p>
            If you open an LLM and simply ask for UI code, you're probably going to get broken,
            outdated or mediocre results. But why is that?
          </p>
          <p>To generate a good looking UI, LLM needs:</p>
          <ol>
            <li>Docs and tutorials</li>
            <li>Design system resources</li>
            <li>List of all available components and their specs</li>
            <li>Code examples and syntax</li>
            <li>Design tokens, colors, states, variants and variables</li>
            <li>Modification guide and best practices</li>
          </ol>
          <div class="chat chat-end text-sm">
            <div class="chat-bubble">
              I see, let's put them all in a 600KB .md file and give it to LLM.
            </div>
          </div>
          <div class="chat chat-end text-sm">
            <div class="chat-bubble">That should work!</div>
          </div>
          <div class="chat chat-start text-sm">
            <div class="chat-bubble">Well... no.</div>
          </div>
          <div class="chat chat-start text-sm">
            <div class="chat-bubble">
              Providing too much context won't work either.
              <br />LLM will ignore most of it, hallucinates the rest and lies to you about it.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="rounded-box sticky top-32 mt-28 flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black/70 p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div class="flex justify-end gap-3 opacity-50">
        <svg class="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"></path>
        </svg>
        <svg class="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path
            d="M25.99 6C16.04 6 8 14.06 8 24H2l7.79 7.79.14.29L18 24h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83C16.53 39.98 21.02 42 25.99 42 35.94 42 44 33.94 44 24S35.94 6 25.99 6zM24 16v10l8.56 5.08L34 28.65l-7-4.15V16h-3z"
          ></path>
        </svg>
        <svg class="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M256 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM128.4 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zM384 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
          ></path>
        </svg>
      </div>
      <div class="rounded-box border border-white/5 bg-white/5 p-4">
        Create a daisyUI login form with form validator, a remember me checkbox and a forgot
        password link
      </div>
      <div class="opacity-30">Thought for 5s</div>
      <div>
        Let me <span class="text-error italic">guess</span> how a daisyUI login form looks like...
      </div>
      <div>
        Based on my 2023 coding knowledge, let me <span class="text-error italic">guess</span> the syntax...
      </div>
      <div>
        <span class="text-error italic">I'm not sure</span> what's the correct way to put it together.
        Let me search the web...
      </div>
      <div>
        I found 20 random pages that I'm not going to read anyway. But who cares... Here's a
        mediocre AI slop for you.
      </div>
      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white">
          <svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M16 18L22 12 16 6"></path>
              <path d="M8 6L2 12 8 18"></path>
            </g>
          </svg>
          index.html
          <span class="text-green-400">+183</span>
          <span class="text-red-400">-29</span>
        </span>
      </div>
      <div>Do you want me to add more purple gradients? I love purple.</div>
      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs border-error/10 bg-error/10 text-error gap-1">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              No MCP
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <svg
        class="text-error absolute end-2 bottom-21 size-12 rotate-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <g fill="currentColor">
          <path
            d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></path>
          <line
            x1="9"
            y1="6.5"
            x2="9"
            y2="10"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></line>
          <path
            d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
            fill="currentColor"
            data-stroke="none"
            stroke="none"
          ></path>
        </g>
      </svg>
    </div>
  </div>

  <!-- solution -->

  <div class="relative flex items-start gap-12 max-lg:flex-col lg:gap-24">
    <div class="grow max-lg:mb-20">
      <div class="prose lg:min-h-[80vh]">
        <span class="badge badge-soft mb-4">Solution</span>
        <h2 id="solution" class="font-title mt-0 mb-8 text-[clamp(2.5rem,8vw,3rem)] leading-none">
          Providing <span class="text-blue-500">context</span> to LLM
          <div class="font-semibold">right time, right place</div>
        </h2>
        <div>
          <p>
            MCP (Model Context Protocol) is an API protocol for AI to get accurate, reliable context
            information on demand, instead of guessing or searching through irrelevant data
            everytime.
          </p>
          <p>
            The official daisyUI Blueprint MCP server provide <span class="font-semibold"
              >real-time context</span
            > to the LLM, using MCP tools, MCP prompts and MCP resources.
          </p>
          <p>No more guessworks, no hallucinations, no outdated syntax.</p>
          <p>
            It
            <span
              class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
            >
              increases code quality
            </span>, because LLM gains access to the correct context right away instead of reading a
            big llms.txt file or searching the web for random pages, or guessing the results based
            on outdated info.
          </p>
          <p>
            Providing the right context at the right time means fast, efficient, and accurate
            results. The LLM receives exactly what it needs, which means
            <span
              class="inline-block rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
            >
              faster code generation
            </span>
            and
            <span
              class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
            >
              less token usage.
            </span>
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box sticky top-50 mt-40 -mb-4 flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-lg:hidden sm:w-120"
    >
      <div class="flex justify-end gap-3 opacity-50">
        <svg class="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"></path>
        </svg>
        <svg class="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path
            d="M25.99 6C16.04 6 8 14.06 8 24H2l7.79 7.79.14.29L18 24h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83C16.53 39.98 21.02 42 25.99 42 35.94 42 44 33.94 44 24S35.94 6 25.99 6zM24 16v10l8.56 5.08L34 28.65l-7-4.15V16h-3z"
          ></path>
        </svg>
        <svg class="size-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M256 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM128.4 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zM384 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
          ></path>
        </svg>
      </div>
      <div class="rounded-box border border-white/5 bg-white/5 p-4">
        Create a daisyUI form for profile settings with form validator and a save button
      </div>
      <div class="opacity-30">Thought for 1s</div>
      <div>
        <svg class="inline-block size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path class="opacity-100" d="M12 6l0 -3"></path>
            <path class="opacity-90" d="M16.25 7.75l2.15 -2.15"></path>
            <path class="opacity-80" d="M18 12l3 0"></path>
            <path class="opacity-70" d="M16.25 16.25l2.15 2.15"></path>
            <path class="opacity-60" d="M12 18l0 3"></path>
            <path class="opacity-50" d="M7.75 16.25l-2.15 2.15"></path>
            <path class="opacity-40" d="M6 12l-3 0"></path>
            <path class="opacity-30" d="M7.75 7.75l-2.15 -2.15"></path>
          </g>
        </svg>
        Fetching daisyUI code snippets and design system resources...
      </div>
    </div>
  </div>
</div>
<div
  class="border-base-300 mt-20 min-h-[50rem] w-full border-t border-b px-4 py-20 md:px-20"
  dir="ltr"
  style="
                background-image: linear-gradient(var(--color-base-300) 1px, transparent 1px), linear-gradient(90deg, var(--color-base-300) 1px, transparent 1px), linear-gradient(var(--color-base-300) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--color-base-300) 0.5px, var(--color-base-100) 0.5px);
                background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
                background-position: -1px -1px, -1px -1px, -.5px -.5px, -.5px -.5px;"
>
  <!-- introducing -->

  <div
    class="relative flex items-start gap-12 max-lg:flex-col lg:gap-24"
    style="background: radial-gradient(at 40% 40%, var(--color-indigo-500) -200%, transparent 30%), radial-gradient(at 60% 60%, var(--color-pink-500) -200%, transparent 30%);"
  >
    <div class="grow">
      <div class="prose lg:min-h-[60vh]">
        <div class="font-title text-base-content/50 mb-4 text-2xl">
          Introducing
          <div
            class="inline-grid grid-cols-[.5rem_1fr_.5rem] grid-rows-[.5rem_1fr_.5rem] align-middle"
          >
            <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
            <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
            <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
            <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>
            <div
              class="font-title m-1 bg-blue-600 px-1 font-semibold text-white [grid-area:1/1/4/4]"
            >
              BLUEPRINT
            </div>
          </div>
          MCP server
        </div>
        <h2
          id="design-system-provider"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-5xl"
        >
          Design System
          <br />
          Resource Provider
          <br />
          for daisyUI
        </h2>
        <div>
          <p>
            Blueprint MCP server provides <span
              class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
            >
              curated resources
            </span> to your LLM
          </p>
          <ul class="list-none p-0">
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              daisyUI code snippets
            </li>
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              Pictures of daisyUI components
            </li>
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              Docs, specs, class names, variants, variables
            </li>
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              Layout examples
            </li>
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              Best practices
            </li>
          </ul>
          <p>
            This will guarantee an accurate and efficient result, without guessworks or
            hallucinations.
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box sticky -mb-2 flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120 md:top-32 lg:-mt-55"
    >
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using <span class="text-blue-500">daisyUI Blueprint</span> MCP
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div class="flex justify-between">
            <div>
              <svg
                class="text-success inline-block size-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <g fill="none">
                  <path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span class="opacity-50">Ran</span>
              <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
                <svg
                  class="size-3 fill-current opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                  ></path>
                </svg>
                daisyUI Blueprint
              </span>
              <span class="opacity-50">MCP tool</span>
            </div>
            <svg class="inline-block size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
              <path
                d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.97-2.97,2.97,2.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.97,11.22l-2.97,2.97-2.97-2.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>Received required components from MCP:</div>
          <div>
            checkbox, toggle, radio, button, input, select, label, fieldset, validator, accordion
          </div>
          <div class="flex- my-2 columns-2 items-start gap-2">
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/checkbox.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/toggle.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/radio.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/input.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/select.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/accordion.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/button.png"
                alt="button"
              />
            </div>
          </div>
          <div>
            <svg
              class="text-success inline-block size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path
                  d="M10 24L20 34L40 14"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Reading specs, docs and examples.
          </div>
          <div>
            <svg
              class="text-success inline-block size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path
                  d="M10 24L20 34L40 14"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Done.
          </div>
        </div>
      </div>
      <div>Creating a daisyUI form for profile settings using the provided resources...</div>
      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white">
          <svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M16 18L22 12 16 6"></path>
              <path d="M8 6L2 12 8 18"></path>
            </g>
          </svg>
          index.html
          <span class="text-green-400">+50</span>
          <span class="text-red-400">-1</span>
        </span>
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <g fill="none">
            <path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        Profile settings form made with daisyUI components has been added to index.html using daisyUI
        Blueprint MCP server.
      </div>
      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="-mt-20 w-full px-4 pt-20 md:px-20" dir="ltr">
  <!-- features -->

  <div class="mt-50 mb-16 flex justify-center">
    <div class="font-title text-base-content/50 text-center text-2xl">
      daisyUI <div
        class="inline-grid grid-cols-[.5rem_1fr_.5rem] grid-rows-[.5rem_1fr_.5rem] align-middle"
      >
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>
        <div class="font-title m-1 bg-blue-600 px-1 font-semibold text-white [grid-area:1/1/4/4]">
          BLUEPRINT
        </div>
      </div>
      : The essential MCP server
      <br />
      for higher code quality, faster LLM results, and less token cost
    </div>
  </div>

  <!-- <div class="mx-auto mb-40 grid max-w-2xl place-items-center justify-around gap-10 md:grid-cols-3">
    <div class="flex flex-col items-center gap-2">
      <div class="font-title text-7xl tabular-nums">74</div>
      <div class="text-xs opacity-50">Resource files</div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="font-title text-7xl tabular-nums">5.6k</div>
      <div class="text-xs opacity-50">Lines of context (on demand)</div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="font-title text-7xl tabular-nums">4</div>
      <div class="text-xs opacity-50">Prompts</div>
    </div>
  </div> -->

  <div class="flex justify-center">
    <div class="mb-40 flex flex-wrap items-center justify-center gap-16">
      <img
        class="bg-base-200 border-base-300 size-16 border p-4"
        src="https://img.daisyui.com/images/logos/cursor.webp?2"
        alt="Cursor"
      />
      <img
        class="bg-base-200 border-base-300 size-16 border p-4"
        src="https://img.daisyui.com/images/logos/vscode.webp"
        alt="VS Code"
      />
      <img
        class="bg-base-200 border-base-300 size-16 border p-4"
        src="https://img.daisyui.com/images/logos/claude.webp"
        alt="Claude"
      />
      <img
        class="bg-base-200 border-base-300 size-16 border p-4"
        src="https://img.daisyui.com/images/logos/zed.webp"
        alt="Zed"
      />
      <img
        class="bg-base-200 border-base-300 size-16 border p-4"
        src="https://img.daisyui.com/images/logos/cline.webp"
        alt="Cline"
      />
      <img
        class="bg-base-200 border-base-300 size-16 border p-4"
        src="https://img.daisyui.com/images/logos/chatgpt.webp"
        alt="ChatGPT"
      />
      <img
        class="bg-base-200 border-base-300 size-16 border p-4"
        src="https://img.daisyui.com/images/logos/windsurf.webp"
        alt="Windsurf"
      />
    </div>
  </div>

  <!-- Code Snippets -->

  <div class="relative mt-20 flex items-start gap-12 max-lg:flex-col lg:flex-row-reverse lg:gap-24">
    <div class="grow">
      <div class="prose pt-10">
        <span class="badge badge-soft mb-4">
          <svg
            class="size-4 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
            ></path></svg
          >
          MCP Tool
        </span>
        <h2
          id="feature-1"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-3xl"
        >
          <div class="text-base-content/30 me-2 inline-block tabular-nums lg:me-4 lg:-ml-12">
            1.
          </div>
          On-demand code Snippets
        </h2>
        <div>
          <p>Blueprint MCP server provides curated daisyUI code snippets to your LLM</p>
          <p>Including:</p>
          <ul class="list-none p-0">
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              Component examples
            </li>
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              Page layouts
            </li>
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              UI blocks
            </li>
            <li>
              <svg
                class="text-success me-2 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                ><g fill="none"
                  ><path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path></g
                ></svg
              >
              Useful combinations
            </li>
          </ul>

          <p>
            It also <span
              class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
            >
              provides actual picture
            </span>
            of the components to help the LLM better understand the design system, and generate a more
            accurate code.
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using <span class="text-blue-500">daisyUI Blueprint</span> MCP
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div>Received 4 components from MCP:</div>
          <div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              toggle
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              filter
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              modal
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              drawer
            </span>
          </div>
          <div>Components preview:</div>
          <div class="flex- my-2 columns-2 items-start gap-2">
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/toggle.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/modal.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/filter.png"
                alt="button"
              />
            </div>
            <div class="mb-2 rounded-lg bg-white/10 p-2 outline outline-black">
              <img
                src="https://img.daisyui.com/images/components-screenshot/drawer.png"
                alt="button"
              />
            </div>
          </div>

          <div>
            <svg
              class="text-success inline-block size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path
                  d="M10 24L20 34L40 14"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Analyzed code snippets, layouts, UI blocks and usage examples.
          </div>
        </div>
      </div>

      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white">
          <svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M16 18L22 12 16 6"></path>
              <path d="M8 6L2 12 8 18"></path>
            </g>
          </svg>
          index.html
          <span class="text-green-400">+50</span>
          <span class="text-red-400">-1</span>
        </span>
      </div>

      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <g fill="none">
            <path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        Page generated successfully with daisyUI code snippets.
      </div>

      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:bg-base-300 rounded-box mt-30 mb-10 max-sm:-mx-4 sm:px-4 sm:py-20">
    <div class="mx-auto aspect-[16/10.05] max-h-[80vh] w-auto overflow-hidden sm:rounded-xl">
      <iframe
        class="h-full w-full"
        src="https://www.youtube.com/embed/ICmVdS-sJKU?mute=1&autoplay=0&controls=1&rel=0&modestbranding=1&loop=1&playlist=ICmVdS-sJKU"
        title="Blueprint MCP server"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <!-- Design system resources -->

  <div class="relative mt-20 flex items-start gap-12 max-lg:flex-col lg:flex-row-reverse lg:gap-24">
    <div class="grow">
      <div class="prose pt-10">
        <span class="badge badge-soft mb-4">
          <svg
            class="size-4 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            fill="currentColor"
          >
            <path
              d="M428 336h825q75 0 75 75v900q0 25-18 43l-64 64q-8 8-13 5.5t-5-12.5V461q0-10-7.5-17.5T1203 436H503q-25 0-43 18l-64 64q-8 8-5.5 13t12.5 5h700q10 0 17.5 7.5t7.5 17.5v950q0 10-7.5 17.5t-17.5 7.5H253q-10 0-17.5-7.5T228 1511V536q0-25 18-43l139-139q18-18 43-18z"
            ></path>
          </svg>
          MCP Resource
        </span>
        <h2
          id="feature-2"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-3xl"
        >
          <div class="text-base-content/30 me-2 inline-block tabular-nums lg:me-4 lg:-ml-12">
            2.
          </div>
          Design system resources
        </h2>
        <div>
          <p>
            Blueprint MCP server provides specific details about each component. Including
            <span
              class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
              >dimensions</span
            >
            &nbsp;
            <span
              class="inline-block rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
              >spacing</span
            >
            &nbsp;
            <span
              class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
              >variants</span
            >
            &nbsp;
            <span
              class="inline-block rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
              >variables</span
            >
            and more
          </p>
          <p>
            This helps the LLM to better understand the design system and generate a higher quality
            UI. Knowing the exact size of components, their variants and how they they look like in
            practice, the LLM can make more informed decisions when generating code instead of
            guessing the styles just by looking at the name of the component.
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using <span class="text-blue-500">daisyUI Blueprint</span> MCP
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div>Received checkbox component from daisyUI Blueprint MCP server.</div>

          <div>
            <svg
              class="text-success inline-block size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path
                  d="M10 24L20 34L40 14"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Reading design system specs for daisyUI checkbox component.
          </div>
        </div>
      </div>
      <div>
        According to daisyUI design system specs, the checkbox component is 24px by 24px. That's why
        the alignment looks off. Let's use checkbox-sm variant instead, so it fits better with the
        other form elements.
      </div>
      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white">
          <svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M16 18L22 12 16 6"></path>
              <path d="M8 6L2 12 8 18"></path>
            </g>
          </svg>
          index.html
          <span class="text-green-400">+1</span>
          <span class="text-red-400">-1</span>
        </span>
      </div>

      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <g fill="none">
            <path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        Checkbox component updated to checkbox-sm variant successfully. Now the design looks perfect.
      </div>

      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Figma to daisyUI -->

  <div class="relative mt-20 flex items-start gap-12 max-lg:flex-col lg:flex-row-reverse lg:gap-24">
    <div class="grow">
      <div class="prose pt-10">
        <span class="badge badge-soft mb-4">
          <svg
            class="size-4 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
            ></path></svg
          >
          MCP Tool
        </span>
        <span class="badge badge-soft mb-4">Experimental</span>
        <h2
          id="feature-3"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-3xl"
        >
          <div class="text-base-content/30 me-2 inline-block tabular-nums lg:me-4 lg:-ml-12">
            3.
          </div>
          Convert Figma ➞ daisyUI
        </h2>
        <div>
          <p>Blueprint MCP server can generate a daisyUI code based on a figma design.</p>
          <p>
            This is done by processing the properties of the design elements, their styles, and
            layout from
            <span
              class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
            >
              Figma API to LLM
            </span> along with daisyUI component details so LLM can map the design to the closest daisyUI
            components.
          </p>
          <p>
            <span class="font-semibold">This works with any UI made with Figma</span>, whether if
            you used the official daisyUI Figma library or not. AI will understand the context of
            the elements and generate the closest possible daisyUI code.
          </p>
          <p>
            For example if have a login form in Figma made with Material design, AI will still be
            able to generate the equivalent daisyUI code for it!
          </p>
          <p class="alert alert-soft alert-info">
            The accuracy of the generated code depends on the complexity of the design.
            <br />
            For best result, convert smaller pieces of the design at a time, instead of the whole page.
          </p>
          <div>
            <button class="btn btn-neutral btn-wide" onclick={() => dialogs.figma.showModal()}>
              <svg
                class="inline-block size-3"
                viewBox="-64 0 384 384"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                ><g
                  ><path
                    d="M64,384 C99.328,384 128,355.328 128,320 L128,256 L64,256 C28.672,256 0,284.672 0,320 C0,355.328 28.672,384 64,384 Z"
                    fill="#0ACF83"
                  ></path><path
                    d="M0,192 C0,156.672 28.672,128 64,128 L128,128 L128,256 L64,256 C28.672,256 0,227.328 0,192 Z"
                    fill="#A259FF"
                  ></path><path
                    d="M0,64 C0,28.672 28.672,0 64,0 L128,0 L128,128 L64,128 C28.672,128 0,99.328 0,64 Z"
                    fill="#F24E1E"
                  ></path><path
                    d="M128,0 L192,0 C227.328,0 256,28.672 256,64 C256,99.328 227.328,128 192,128 L128,128 L128,0 Z"
                    fill="#FF7262"
                  ></path><path
                    d="M256,192 C256,227.328 227.328,256 192,256 C156.672,256 128,227.328 128,192 C128,156.672 156.672,128 192,128 C227.328,128 256,156.672 256,192 Z"
                    fill="#1ABCFE"
                  ></path></g
                ></svg
              >
              Figma API setup guide
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="rounded-box flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div class="rounded-box border border-white/5 bg-white/5 p-4">
        Convert this Figma frame to daisyUI
        <div class="mt-[1em] break-all underline">
          https://www.figma.com/file/ABCDEFG1234567/my-design?node-id=100%3A200
        </div>
      </div>
      <div class="opacity-30">Thought for 1s</div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using daisyUI Blueprint <span class="text-blue-500">Figma to daisyUI</span> MCP tool
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div class="flex justify-between">
            <div>
              <svg
                class="inline-block size-3"
                viewBox="-64 0 384 384"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M64,384 C99.328,384 128,355.328 128,320 L128,256 L64,256 C28.672,256 0,284.672 0,320 C0,355.328 28.672,384 64,384 Z"
                    fill="#0ACF83"
                  >
                  </path>
                  <path
                    d="M0,192 C0,156.672 28.672,128 64,128 L128,128 L128,256 L64,256 C28.672,256 0,227.328 0,192 Z"
                    fill="#A259FF"
                  >
                  </path>
                  <path
                    d="M0,64 C0,28.672 28.672,0 64,0 L128,0 L128,128 L64,128 C28.672,128 0,99.328 0,64 Z"
                    fill="#F24E1E"
                  >
                  </path>
                  <path
                    d="M128,0 L192,0 C227.328,0 256,28.672 256,64 C256,99.328 227.328,128 192,128 L128,128 L128,0 Z"
                    fill="#FF7262"
                  >
                  </path>
                  <path
                    d="M256,192 C256,227.328 227.328,256 192,256 C156.672,256 128,227.328 128,192 C128,156.672 156.672,128 192,128 C227.328,128 256,156.672 256,192 Z"
                    fill="#1ABCFE"
                  >
                  </path>
                </g>
              </svg>
              Received Figma design nodes from Figma API.
            </div>
            <svg class="inline-block size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
              ><path
                d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.97-2.97,2.97,2.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
                fill="currentColor"
              ></path><path
                d="M11.97,11.22l-2.97,2.97-2.97-2.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
                fill="currentColor"
              ></path></svg
            >
          </div>
        </div>
      </div>

      <div>
        The figma design contains a pricing table with a toggle to switch between monthly and yearly
        billing. There's a payment button at the bottom as well.
      </div>

      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using daisyUI Blueprint <span class="text-blue-500">Get Snippet</span> MCP tool to get required
        daisyUI components that match the Figma design.
      </div>

      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div>Received 4 components from MCP server:</div>
          <div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              card
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              toggle
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              divider
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              button
            </span>
          </div>
        </div>
      </div>

      <div>
        Perfect! Now we can generate the daisyUI code for the Figma design using these components.
      </div>

      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white"
          ><svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              ><path d="M16 18L22 12 16 6"></path><path d="M8 6L2 12 8 18"></path></g
            ></svg
          >
          index.html <span class="text-green-400">+1</span>
          <span class="text-red-400">-1</span></span
        >
      </div>

      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        index.html file was updated successfully. The pricing table design from Figma is now implemented
        using daisyUI components.
      </div>

      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:bg-base-300 rounded-box mt-30 mb-10 max-sm:-mx-4 sm:px-4 sm:py-20">
    <div class="mx-auto aspect-[16/10.05] max-h-[80vh] w-auto overflow-hidden sm:rounded-xl">
      <iframe
        class="h-full w-full"
        src="https://www.youtube.com/embed/4ZYKxkibJT0?mute=1&autoplay=0&controls=1&rel=0&modestbranding=1&loop=1&playlist=4ZYKxkibJT0"
        title="Blueprint MCP server"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <!-- Screenshot to daisyUI -->

  <div class="relative mt-20 flex items-start gap-12 max-lg:flex-col lg:flex-row-reverse lg:gap-24">
    <div class="grow">
      <div class="prose pt-10">
        <span class="badge badge-soft mb-4">
          <svg
            class="size-4 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.91307 2.65823C6.9877 2.38888 9.10296 2.25 11.2503 2.25C13.3974 2.25 15.5124 2.38885 17.5869 2.65815C19.5091 2.90769 20.8783 4.51937 20.9923 6.38495C20.6665 6.27614 20.3212 6.20396 19.96 6.17399C18.5715 6.05874 17.1673 6 15.75 6C14.3326 6 12.9285 6.05874 11.54 6.17398C9.1817 6.36971 7.5 8.36467 7.5 10.6082V14.8937C7.5 16.5844 8.45468 18.1326 9.9328 18.8779L7.28033 21.5303C7.06583 21.7448 6.74324 21.809 6.46299 21.6929C6.18273 21.5768 6 21.3033 6 21V16.9705C5.63649 16.9316 5.27417 16.8887 4.91308 16.8418C2.90466 16.581 1.5 14.8333 1.5 12.8626V6.63738C1.5 4.66672 2.90466 2.91899 4.91307 2.65823Z"
              fill="currentColor"
            ></path>
            <path
              d="M15.75 7.5C14.3741 7.5 13.0114 7.55702 11.6641 7.66884C10.1248 7.7966 9 9.10282 9 10.6082V14.8937C9 16.4014 10.128 17.7083 11.6692 17.8341C12.9131 17.9357 14.17 17.9912 15.4384 17.999L18.2197 20.7803C18.4342 20.9948 18.7568 21.059 19.037 20.9429C19.3173 20.8268 19.5 20.5533 19.5 20.25V17.8601C19.6103 17.8518 19.7206 17.8432 19.8307 17.8342C21.372 17.7085 22.5 16.4015 22.5 14.8938V10.6082C22.5 9.10283 21.3752 7.79661 19.836 7.66885C18.4886 7.55702 17.1259 7.5 15.75 7.5Z"
              fill="currentColor"
            ></path>
          </svg>
          MCP Prompt
        </span>
        <h2
          id="feature-4"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-3xl"
        >
          <div class="text-base-content/30 me-2 inline-block tabular-nums lg:me-4 lg:-ml-12">
            4.
          </div>
          Convert Screenshot ➞ daisyUI
        </h2>
        <div>
          <p>Attach a picture and receive daisyUI code!</p>
          <p>
            This is a detailed prompt that generates daisyUI + Tailwind CSS code from a screenshot.
          </p>
          <p>
            The prompt guides the AI to analyze the screenshot, identify UI components, and generate
            the corresponding daisyUI code using existing daisyUI components which will be received
            from daisyUI Blueprint MCP server.
          </p>
          <p>
            <span class="font-semibold">This works with any screenshot of a web UI</span>, whether
            it's from a design tool, a live website, or a mobile app. AI will understand the context
            of the elements and generate the closest daisyUI code.
          </p>
          <p class="alert alert-soft alert-info">
            The accuracy of the generated code depends on the clarity and complexity of the
            screenshot.
            <br />
            For best result, use smaller parts of the UI instead of a full-page screenshot.
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div class="rounded-box border border-white/5 bg-white/5 p-4">
        Convert this image to daisyUI code
        <div class="mt-2 flex gap-2 leading-none">
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            <img
              class="-ms-0.5 me-2 rounded-xs border border-white/10"
              src="data:image/jpeg;base64,/9j/4QDKRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAABSgAwAEAAAAAQAAAA6kBgADAAAAAQAAAAAAAAAAAAD/2wCEAAEBAQEBAQIBAQIDAgICAwQDAwMDBAUEBAQEBAUGBQUFBQUFBgYGBgYGBgYHBwcHBwcICAgICAkJCQkJCQkJCQkBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAAv/AABEIAA4AFAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP57v2Rv2TPhN8a/2OvF3xG8R6XqN54l0zxKNPs3tLu5jj+z/wBn2s+z7PAwWR/Mkc7ipbBA6AAfJ+r/AAf8I2aS2v8AYniJ2ilkRZdLhluRwANs4mgmWMo3HybTwd3zCu5/Zy/bI+If7NPgbUfBngjS7e5/tHUHv/tUl1LC0TSW8FuUWNI2UjbADuLDrjHANeEeLfih408VeKdV8UxX13pTavdTXc9vZXk8cPmTyGWQgKy53OxYnFehlMqccQ3i7+z8rX6fd/S2PLrqu/4Z4zfWstnfTWcyeW8MjRsnzfKUO0j5sNwRjkZ9eaq4PpXSywNPK88zF3dizMxJJJ5JJPJJ7mo/sS03OHQ71M//2Q=="
              alt="img"
            />
            settings-screenshot.png
          </div>
        </div>
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using <span class="text-blue-500">daisyUI Blueprint</span> MCP prompt
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div class="flex justify-between">
            <div>Image to daisyUI conversion</div>
            <svg class="inline-block size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
              ><path
                d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.97-2.97,2.97,2.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
                fill="currentColor"
              ></path><path
                d="M11.97,11.22l-2.97,2.97-2.97-2.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
                fill="currentColor"
              ></path></svg
            >
          </div>

          <div>
            You are analyzing a UI screenshot to recreate it using daisyUI components.
            <br />Follow below steps strictly. If you miss any step, your code will be rejected.
            <br />
            <br />## Step By Step Instructions:
            <br />1. Carefully examine the screenshot provided...
          </div>
          <div>
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"> </path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        The screenshot shows a settings page with a sidebar on the left and various settings options
        on the right. Now we need to identify the daisyUI components required to build this UI.
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using daisyUI Blueprint <span class="text-blue-500">Get Snippet</span> MCP tool to get required
        daisyUI components that match the UI from the screenshot.
      </div>

      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div>Received 7 components from MCP server:</div>
          <div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              drawer
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              navbar
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              modal
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              dropdown
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              button
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              toggle
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              menu
            </span>
          </div>
        </div>
      </div>

      <div>Perfect! Now we can generate the daisyUI code using these components.</div>

      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white"
          ><svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              ><path d="M16 18L22 12 16 6"></path><path d="M8 6L2 12 8 18"></path></g
            ></svg
          >
          index.html <span class="text-green-400">+123</span>
          <span class="text-red-400">-1</span></span
        >
      </div>

      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        index.html file was updated successfully.
      </div>

      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tailwind CSS to daisyUI -->

  <div class="relative mt-20 flex items-start gap-12 max-lg:flex-col lg:flex-row-reverse lg:gap-24">
    <div class="grow">
      <div class="prose pt-10">
        <span class="badge badge-soft mb-4">
          <svg
            class="size-4 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.91307 2.65823C6.9877 2.38888 9.10296 2.25 11.2503 2.25C13.3974 2.25 15.5124 2.38885 17.5869 2.65815C19.5091 2.90769 20.8783 4.51937 20.9923 6.38495C20.6665 6.27614 20.3212 6.20396 19.96 6.17399C18.5715 6.05874 17.1673 6 15.75 6C14.3326 6 12.9285 6.05874 11.54 6.17398C9.1817 6.36971 7.5 8.36467 7.5 10.6082V14.8937C7.5 16.5844 8.45468 18.1326 9.9328 18.8779L7.28033 21.5303C7.06583 21.7448 6.74324 21.809 6.46299 21.6929C6.18273 21.5768 6 21.3033 6 21V16.9705C5.63649 16.9316 5.27417 16.8887 4.91308 16.8418C2.90466 16.581 1.5 14.8333 1.5 12.8626V6.63738C1.5 4.66672 2.90466 2.91899 4.91307 2.65823Z"
              fill="currentColor"
            ></path>
            <path
              d="M15.75 7.5C14.3741 7.5 13.0114 7.55702 11.6641 7.66884C10.1248 7.7966 9 9.10282 9 10.6082V14.8937C9 16.4014 10.128 17.7083 11.6692 17.8341C12.9131 17.9357 14.17 17.9912 15.4384 17.999L18.2197 20.7803C18.4342 20.9948 18.7568 21.059 19.037 20.9429C19.3173 20.8268 19.5 20.5533 19.5 20.25V17.8601C19.6103 17.8518 19.7206 17.8432 19.8307 17.8342C21.372 17.7085 22.5 16.4015 22.5 14.8938V10.6082C22.5 9.10283 21.3752 7.79661 19.836 7.66885C18.4886 7.55702 17.1259 7.5 15.75 7.5Z"
              fill="currentColor"
            ></path>
          </svg>
          MCP Prompt
        </span>
        <h2
          id="feature-5"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-3xl"
        >
          <div class="text-base-content/30 me-2 inline-block tabular-nums lg:me-4 lg:-ml-12">
            5.
          </div>
          Convert Tailwind CSS ➞ daisyUI
        </h2>
        <div>
          <p>Convert existing Tailwind CSS code to daisyUI components effortlessly!</p>
          <p>
            This is a detailed prompt provided by Blueprint MCP server that helps AI to analyze
            existing Tailwind CSS code blocks, identify UI components, that can be replaced with
            daisyUI components, then it uses daisyUI MCP server to get the required components and
            finally generates the updated code with daisyUI components.
          </p>
          <p>
            This works best with well-structured Tailwind CSS code and clear design specifications.
            For really complicated parts of your HTML, adding comments to the code can also help the
            AI understand the semantics better and produce more accurate results.
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div class="rounded-box border border-white/5 bg-white/5 p-4">
        Convert this page from Tailwind CSS to daisyUI
        <div class="mt-2 flex gap-2 leading-none">
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            +page.svelte
          </div>
        </div>
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using <span class="text-blue-500">daisyUI Blueprint</span> MCP prompt
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div class="flex justify-between">
            <div>Tailwind CSS to daisyUI conversion</div>
            <svg class="inline-block size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
              ><path
                d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.97-2.97,2.97,2.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
                fill="currentColor"
              ></path><path
                d="M11.97,11.22l-2.97,2.97-2.97-2.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
                fill="currentColor"
              ></path></svg
            >
          </div>

          <div>
            You are analyzing a Tailwind CSS page to recreate it using daisyUI components.
            <br />Follow below steps strictly. If you miss any step, your code will be rejected.
            <br />
            <br />## Step By Step Instructions:
            <br />1. Carefully examine the each section of the page...
          </div>
          <div>
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"> </path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        +page.svelte includes a settings UI with a sidebar on the left and various settings options
        on the right. Now we need to identify the daisyUI components required to build this UI.
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using daisyUI Blueprint <span class="text-blue-500">Get Snippet</span> MCP tool to get required
        daisyUI components that match the UI from the screenshot.
      </div>

      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div>Received 7 components from MCP server:</div>
          <div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              drawer
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              navbar
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              modal
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              dropdown
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              button
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              toggle
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              menu
            </span>
          </div>
        </div>
      </div>

      <div>Perfect! Now we can generate the daisyUI code using these components.</div>

      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white"
          ><svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              ><path d="M16 18L22 12 16 6"></path><path d="M8 6L2 12 8 18"></path></g
            ></svg
          >
          +page.svelte <span class="text-green-400">+123</span>
          <span class="text-red-400">-1</span></span
        >
      </div>

      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Done. All the the parts that could be converted to daisyUI components have been updated. Now
        the page is smaller and uses less class names.
      </div>

      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:bg-base-300 rounded-box mt-30 mb-10 max-sm:-mx-4 sm:px-4 sm:py-20">
    <div class="mx-auto aspect-[16/10.05] max-h-[80vh] w-auto overflow-hidden sm:rounded-xl">
      <iframe
        class="h-full w-full"
        src="https://www.youtube.com/embed/S4Xz2iEMaAA?mute=1&autoplay=0&controls=1&rel=0&modestbranding=1&loop=1&playlist=S4Xz2iEMaAA"
        title="Blueprint MCP server"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <!-- Bootstrap to daisyUI -->

  <div class="relative mt-20 flex items-start gap-12 max-lg:flex-col lg:flex-row-reverse lg:gap-24">
    <div class="grow">
      <div class="prose pt-10">
        <span class="badge badge-soft mb-4">
          <svg
            class="size-4 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.91307 2.65823C6.9877 2.38888 9.10296 2.25 11.2503 2.25C13.3974 2.25 15.5124 2.38885 17.5869 2.65815C19.5091 2.90769 20.8783 4.51937 20.9923 6.38495C20.6665 6.27614 20.3212 6.20396 19.96 6.17399C18.5715 6.05874 17.1673 6 15.75 6C14.3326 6 12.9285 6.05874 11.54 6.17398C9.1817 6.36971 7.5 8.36467 7.5 10.6082V14.8937C7.5 16.5844 8.45468 18.1326 9.9328 18.8779L7.28033 21.5303C7.06583 21.7448 6.74324 21.809 6.46299 21.6929C6.18273 21.5768 6 21.3033 6 21V16.9705C5.63649 16.9316 5.27417 16.8887 4.91308 16.8418C2.90466 16.581 1.5 14.8333 1.5 12.8626V6.63738C1.5 4.66672 2.90466 2.91899 4.91307 2.65823Z"
              fill="currentColor"
            ></path>
            <path
              d="M15.75 7.5C14.3741 7.5 13.0114 7.55702 11.6641 7.66884C10.1248 7.7966 9 9.10282 9 10.6082V14.8937C9 16.4014 10.128 17.7083 11.6692 17.8341C12.9131 17.9357 14.17 17.9912 15.4384 17.999L18.2197 20.7803C18.4342 20.9948 18.7568 21.059 19.037 20.9429C19.3173 20.8268 19.5 20.5533 19.5 20.25V17.8601C19.6103 17.8518 19.7206 17.8432 19.8307 17.8342C21.372 17.7085 22.5 16.4015 22.5 14.8938V10.6082C22.5 9.10283 21.3752 7.79661 19.836 7.66885C18.4886 7.55702 17.1259 7.5 15.75 7.5Z"
              fill="currentColor"
            ></path>
          </svg>
          MCP Prompt
        </span>
        <h2
          id="feature-6"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-3xl"
        >
          <div class="text-base-content/30 me-2 inline-block tabular-nums lg:me-4 lg:-ml-12">
            6.
          </div>
          Convert Bootstrap ➞ daisyUI
        </h2>
        <div>
          <p>Convert existing Bootstrap code to daisyUI components effortlessly!</p>
          <p>
            This is a detailed prompt provided by Blueprint MCP server that helps AI to analyze
            existing Bootstrap code blocks, identify UI components, that can be replaced with
            daisyUI components, then it uses daisyUI MCP server to get the required components and
            finally generates the updated code with daisyUI components.
          </p>
          <p>
            This works best with well-structured Bootstrap code and clear design specifications. For
            really complicated parts of your HTML, adding comments to the code can also help the AI
            understand the semantics better and produce more accurate results.
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div class="rounded-box border border-white/5 bg-white/5 p-4">
        Convert this page from Bootstrap to daisyUI
        <div class="mt-2 flex gap-2 leading-none">
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.php
          </div>
        </div>
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using <span class="text-blue-500">daisyUI Blueprint</span> MCP prompt
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div class="flex justify-between">
            <div>Bootstrap to daisyUI conversion</div>
            <svg class="inline-block size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
              ><path
                d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.97-2.97,2.97,2.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
                fill="currentColor"
              ></path><path
                d="M11.97,11.22l-2.97,2.97-2.97-2.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
                fill="currentColor"
              ></path></svg
            >
          </div>

          <div>
            You are analyzing a Bootstrap page to recreate it using daisyUI components.
            <br />Follow below steps strictly. If you miss any step, your code will be rejected.
            <br />
            <br />## Step By Step Instructions:
            <br />1. Carefully examine the each section of the page...
          </div>
          <div>
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"> </path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        index.php includes a settings UI with a sidebar on the left and various settings options on
        the right. Now we need to identify the daisyUI components required to build this UI.
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using daisyUI Blueprint <span class="text-blue-500">Get Snippet</span> MCP tool to get required
        daisyUI components that match the UI from the screenshot.
      </div>

      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div>Received 7 components from MCP server:</div>
          <div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              drawer
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              navbar
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              modal
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              dropdown
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              button
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              toggle
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              menu
            </span>
          </div>
        </div>
      </div>

      <div>Perfect! Now we can generate the daisyUI code using these components.</div>

      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white"
          ><svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              ><path d="M16 18L22 12 16 6"></path><path d="M8 6L2 12 8 18"></path></g
            ></svg
          >
          index.php <span class="text-green-400">+123</span>
          <span class="text-red-400">-1</span></span
        >
      </div>

      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Done. All the the parts that could be converted to daisyUI components have been updated. Now
        the page is smaller and uses less class names.
      </div>

      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Picture color palette to daisyUI theme -->

  <div class="relative mt-20 flex items-start gap-12 max-lg:flex-col lg:flex-row-reverse lg:gap-24">
    <div class="grow">
      <div class="prose pt-10">
        <span class="badge badge-soft mb-4">
          <svg
            class="size-4 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.91307 2.65823C6.9877 2.38888 9.10296 2.25 11.2503 2.25C13.3974 2.25 15.5124 2.38885 17.5869 2.65815C19.5091 2.90769 20.8783 4.51937 20.9923 6.38495C20.6665 6.27614 20.3212 6.20396 19.96 6.17399C18.5715 6.05874 17.1673 6 15.75 6C14.3326 6 12.9285 6.05874 11.54 6.17398C9.1817 6.36971 7.5 8.36467 7.5 10.6082V14.8937C7.5 16.5844 8.45468 18.1326 9.9328 18.8779L7.28033 21.5303C7.06583 21.7448 6.74324 21.809 6.46299 21.6929C6.18273 21.5768 6 21.3033 6 21V16.9705C5.63649 16.9316 5.27417 16.8887 4.91308 16.8418C2.90466 16.581 1.5 14.8333 1.5 12.8626V6.63738C1.5 4.66672 2.90466 2.91899 4.91307 2.65823Z"
              fill="currentColor"
            ></path>
            <path
              d="M15.75 7.5C14.3741 7.5 13.0114 7.55702 11.6641 7.66884C10.1248 7.7966 9 9.10282 9 10.6082V14.8937C9 16.4014 10.128 17.7083 11.6692 17.8341C12.9131 17.9357 14.17 17.9912 15.4384 17.999L18.2197 20.7803C18.4342 20.9948 18.7568 21.059 19.037 20.9429C19.3173 20.8268 19.5 20.5533 19.5 20.25V17.8601C19.6103 17.8518 19.7206 17.8432 19.8307 17.8342C21.372 17.7085 22.5 16.4015 22.5 14.8938V10.6082C22.5 9.10283 21.3752 7.79661 19.836 7.66885C18.4886 7.55702 17.1259 7.5 15.75 7.5Z"
              fill="currentColor"
            ></path>
          </svg>
          MCP Prompt
        </span>
        <h2
          id="feature-7"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-3xl"
        >
          <div class="text-base-content/30 me-2 inline-block tabular-nums lg:me-4 lg:-ml-12">
            7.
          </div>
          Extract Color Palette from a picture to generate daisyUI Theme
        </h2>
        <div>
          <p>
            Are you bad at color palettes? It was never easier to generate a custom daisyUI theme!
          </p>
          <p>
            Attach any picture that you like its colors, and the AI will extract the color palette
            for you.
          </p>
          <p>
            Then daisyUI MCP server will generate a custom daisyUI theme based on the extracted
            colors.
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div class="rounded-box border border-white/5 bg-white/5 p-4">
        Generate a dark daisyUI theme based on the colors in this picture
        <div class="mt-2 flex gap-2 leading-none">
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            <img
              class="-ms-0.5 me-2 rounded-xs border border-white/10"
              src="data:image/jpeg;base64,/9j/4QDKRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAABSgAwAEAAAAAQAAAA6kBgADAAAAAQAAAAAAAAAAAAD/2wCEAAEBAQEBAQIBAQIDAgICAwQDAwMDBAUEBAQEBAUGBQUFBQUFBgYGBgYGBgYHBwcHBwcICAgICAkJCQkJCQkJCQkBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAAv/AABEIAA4AFAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP57v2Rv2TPhN8a/2OvF3xG8R6XqN54l0zxKNPs3tLu5jj+z/wBn2s+z7PAwWR/Mkc7ipbBA6AAfJ+r/AAf8I2aS2v8AYniJ2ilkRZdLhluRwANs4mgmWMo3HybTwd3zCu5/Zy/bI+If7NPgbUfBngjS7e5/tHUHv/tUl1LC0TSW8FuUWNI2UjbADuLDrjHANeEeLfih408VeKdV8UxX13pTavdTXc9vZXk8cPmTyGWQgKy53OxYnFehlMqccQ3i7+z8rX6fd/S2PLrqu/4Z4zfWstnfTWcyeW8MjRsnzfKUO0j5sNwRjkZ9eaq4PpXSywNPK88zF3dizMxJJJ5JJPJJ7mo/sS03OHQ71M//2Q=="
              alt="img"
            />
            my-cat.jpg
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            app.css
          </div>
        </div>
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using <span class="text-blue-500">daisyUI Blueprint</span> MCP prompt
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div class="flex justify-between">
            <div>Extract dominant colors from picture</div>
            <svg class="inline-block size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
              ><path
                d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.97-2.97,2.97,2.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
                fill="currentColor"
              ></path><path
                d="M11.97,11.22l-2.97,2.97-2.97-2.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
                fill="currentColor"
              ></path></svg
            >
          </div>

          <div>
            You are analyzing a picture to create a color palette for a daisyUI theme based on
            provided syntax.
            <br />Follow below steps strictly. If you miss any step, your code will be rejected.
            <br />
            <br />## Step By Step Instructions:
            <br />1. Carefully examine the picture provided...
          </div>
          <div>
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"> </path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        20 colors were extracted from the picture based on the instructions. Now we need to map the
        colors to a daisyUI theme.
      </div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using daisyUI Blueprint <span class="text-blue-500">Get Snippet</span> MCP tool to get required
        daisyUI examples.
      </div>

      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div>Received 2 snippets from MCP server:</div>
          <div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              colors
            </span>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              custom-theme
            </span>
          </div>
        </div>
      </div>

      <div>
        Perfect! Now we can generate a custom daisyUI theme with the extracted colors, based on the
        instructions.
      </div>

      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white"
          ><svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              ><path d="M16 18L22 12 16 6"></path><path d="M8 6L2 12 8 18"></path></g
            ></svg
          >
          app.css <span class="text-green-400">+27</span>
          <span class="text-red-400">-1</span></span
        >
      </div>

      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        app.css file was updated successfully with a new custom daisyUI.
      </div>

      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Layouts and code blocks -->

  <div class="relative mt-20 flex items-start gap-12 max-lg:flex-col lg:flex-row-reverse lg:gap-24">
    <div class="grow">
      <div class="prose pt-10">
        <span class="badge badge-soft mb-4">
          <svg
            class="size-4 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            fill="currentColor"
          >
            <path
              d="M428 336h825q75 0 75 75v900q0 25-18 43l-64 64q-8 8-13 5.5t-5-12.5V461q0-10-7.5-17.5T1203 436H503q-25 0-43 18l-64 64q-8 8-5.5 13t12.5 5h700q10 0 17.5 7.5t7.5 17.5v950q0 10-7.5 17.5t-17.5 7.5H253q-10 0-17.5-7.5T228 1511V536q0-25 18-43l139-139q18-18 43-18z"
            ></path>
          </svg>
          MCP Resource
        </span>
        <h2
          id="feature-8"
          class="font-title mt-0 mb-8 text-xl leading-none font-semibold lg:text-3xl"
        >
          <div class="text-base-content/30 me-2 inline-block tabular-nums lg:me-4 lg:-ml-12">
            8.
          </div>
          Layouts and code blocks
        </h2>
        <div>
          <p>
            Blueprint MCP server includes layout examples and code blocks for useful design
            patterns.
          </p>
          <p>
            For example if you're making a dashboard, Blueprint MCP will look into the possible
            layout structures and provide you the one that best fits your UI. And then it fills the
            layout with the appropriate daisyUI components.
          </p>
          <p>
            Additonally, there are code blocks for combination of different UI pieces. For example,
            a responsive navbar with a button, a menu and a dropdown. It can be challenging to
            connect them all together, but Blueprint MCP provides ready-to-use code snippets to help
            you.
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-box flex w-80 shrink-0 flex-col gap-4 border-s border-white/10 bg-black p-4 text-xs text-white/70 max-md:mx-auto sm:w-120"
    >
      <div class="rounded-box border border-white/5 bg-white/5 p-4">
        Create a collapsible daisyUI drawer sidebar. It should be icon only/or expanded on desktop.
        I should be off-canvas on mobile. Put a menu inside the sidebar with 4 items: Dashboard,
        Settings, Profile, Logout. Add proper icons. Also add a settings button at the bottom of the
        sidebar.
      </div>
      <div class="opacity-30">Thought for 1s</div>
      <div>
        <svg
          class="text-success inline-block size-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          ><g fill="none"
            ><path
              d="M10 24L20 34L40 14"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></g
          ></svg
        >
        Using <span class="text-blue-500">daisyUI Blueprint</span> MCP
      </div>
      <div class="-m-2 grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>

        <div
          class="m-2 flex flex-col gap-2 border-2 border-blue-500 bg-white/5 p-4 outline-2 outline-offset-2 outline-white/5 [grid-area:1/1/4/4]"
        >
          <div class="flex justify-between">
            <div>
              <svg
                class="text-success inline-block size-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <g fill="none">
                  <path
                    d="M10 24L20 34L40 14"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span class="opacity-50">Ran</span>
              <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
                <svg
                  class="size-3 fill-current opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                  ></path>
                </svg>
                daisyUI Blueprint
              </span>
              <span class="opacity-50">MCP tool</span>
            </div>
            <svg class="inline-block size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
              <path
                d="M9.53,2.22c-.293-.293-.768-.293-1.061,0l-3.5,3.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l2.97-2.97,2.97,2.97c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.5-3.5Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.97,11.22l-2.97,2.97-2.97-2.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.5,3.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>Received required code snippets from MCP:</div>
          <div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500"
              >collapsible sidebar</span
            >
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500"
              >navbar</span
            >
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500"
              >menu</span
            >
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500"
              >button</span
            >
          </div>

          <div>
            <svg
              class="text-success inline-block size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path
                  d="M10 24L20 34L40 14"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Reading specs, docs and examples.
          </div>
          <div>
            <svg
              class="text-success inline-block size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g fill="none">
                <path
                  d="M10 24L20 34L40 14"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            Done.
          </div>
        </div>
      </div>

      <div>
        Perfect. Now let's combine these components into a cohesive layout, according to the
        instructions provided and the design specs.
      </div>

      <div>
        <span class="badge badge-xs gap-1 border-white/10 bg-white/10 text-white"
          ><svg
            class="size-3 fill-current opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              ><path d="M16 18L22 12 16 6"></path><path d="M8 6L2 12 8 18"></path></g
            ></svg
          >
          index.html <span class="text-green-400">+27</span>
          <span class="text-red-400">-1</span></span
        >
      </div>

      <p>collapsible drawer sidebar was added to index.html</p>

      <!-- AI input -->
      <div class="rounded-box border border-white/5 bg-white/5 p-2">
        <div class="flex gap-2 leading-none">
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg class="size-3 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
              </g>
            </svg>
          </div>
          <div
            class="rounded-field flex items-center border border-white/5 px-1 py-0.5 text-[0.625rem]"
          >
            index.html
          </div>
        </div>
        <div class="py-2 opacity-50">Ask AI...</div>
        <div class="flex justify-between">
          <div class="flex gap-2 leading-none">
            <div
              class="rounded-field inline-block border border-white/5 px-1 py-0.5 text-[0.625rem]"
            >
              Agent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="inline-block size-3"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
              </svg>
            </div>
            <span class="badge badge-xs gap-1 border-blue-400/10 bg-blue-400/10 text-blue-500">
              <svg
                class="size-3 fill-current opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
                >
                </path>
              </svg>
              daisyUI Blueprint
            </span>
          </div>
          <div class="rounded-field inline-block border border-white/5 px-1 py-0.5">
            <svg
              class="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                d="M16.345,1.654c-.344-.344-.845-.463-1.305-.315L2.117,5.493c-.491,.158-.831,.574-.887,1.087-.056,.512,.187,.992,.632,1.251l4.576,2.669,3.953-3.954c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.954,3.954,2.669,4.576c.235,.402,.65,.639,1.107,.639,.048,0,.097-.003,.146-.008,.512-.056,.929-.396,1.086-.886L16.661,2.96h0c.148-.463,.027-.963-.316-1.306Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- compare table -->

  {#if compareTable}
    <div id="compare" class="mt-50 mb-16 flex justify-center">
      <div class="font-title text-base-content/50 text-center text-2xl">
        <div
          class="inline-grid grid-cols-[.5rem_1fr_.5rem] grid-rows-[.5rem_1fr_.5rem] align-middle"
        >
          <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
          <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
          <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
          <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>
          <div class="font-title m-1 bg-blue-600 px-1 font-semibold text-white [grid-area:1/1/4/4]">
            BLUEPRINT
          </div>
        </div>
        vs. other tools
        <br />
        to generate daisyUI code
      </div>
    </div>

    <div class="border-base-300 rounded-box mt-10 overflow-x-auto border whitespace-nowrap">
      <table class="table-xs sm:table-sm lg:table-md table-zebra table">
        <!-- Table head -->
        <thead>
          <tr>
            {#each compareTable[0] as header, headerIndex}
              <th class:text-center={headerIndex !== 0}>{@html header}</th>
            {/each}
          </tr>
        </thead>
        <!-- Table body -->
        <tbody>
          {#each compareTable.slice(1) as row}
            <tr>
              {#each row as cell, cellIndex}
                <td class:text-center={cellIndex !== 0}>
                  {#if typeof cell === "boolean"}
                    {#if cell}
                      <svg
                        aria-label="Yes"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-success inline-block size-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M5 12l5 5L20 7"
                        />
                      </svg>
                    {:else}
                      <svg
                        aria-label="No"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-error inline-block size-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M18 6L6 18M6 6l12 12"
                        />
                      </svg>
                    {/if}
                  {:else}
                    {@html cell}
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}

  <!-- steps -->

  <div id="steps" class="mt-40 flex justify-center">
    <div class="flex w-full max-w-3xl flex-col items-center gap-2">
      <div class="font-title mb-8 flex items-center text-lg lg:text-[1.75rem]">
        Get Started with daisyUI
        <div
          class="ms-1 inline-grid grid-cols-[.5rem_1fr_.5rem] grid-rows-[.5rem_1fr_.5rem] align-middle"
        >
          <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
          <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
          <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
          <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>
          <div class="font-title m-1 bg-blue-600 px-1 font-semibold text-white [grid-area:1/1/4/4]">
            BLUEPRINT
          </div>
        </div>
      </div>
      <ul class="steps w-full text-sm">
        <li class="step">
          <a
            class="link link-hover mt-3 flex flex-col items-center gap-2"
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="size-5 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              ><g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
                ><path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g
              ></svg
            >
            Get a Licence
          </a>
        </li>
        <li class="step">
          <button
            class="link link-hover mt-3 flex flex-col items-center gap-2"
            onclick={() => dialogs.install.showModal()}
          >
            <svg
              viewBox="0 0 48 48"
              class="size-5 opacity-60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
              ></path><path
                d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
              ></path></svg
            >
            Install MCP server
          </button>
        </li>
        <li class="step">
          <div class="mt-3 flex flex-col items-center gap-2">
            <svg
              class="size-5 opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 665.8 1000"
              ><path
                fill="currentColor"
                d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
              ></path></svg
            >
            Generate daisyUI code
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- FAQ -->
  <div id="faq" class="mx-auto max-w-[100rem]">
    <div class="w-full px-4 pt-20 md:px-20">
      <div class="mx-auto my-40 grid gap-2 gap-y-16 lg:grid-cols-2" id="faq">
        <div class="flex flex-col gap-6">
          <h2 class="font-title lg:text-base-content/10 text-4xl font-semibold lg:text-[10rem]">
            F.A.Q
          </h2>
          <p class="text-base-content/60 text-xs">
            If you have any questions before purchase <br />send me an email to pouya@daisyui.com
            <br />I will do my best to help you.
          </p>
        </div>
        <div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">
              Is this one time payment or a subscription?
            </div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              Both are possible. You can purchase a monthly licence, yearly license or a lifetime
              license.
            </div>
          </div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">
              What happens after I pay?
            </div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              You will receive an email address with a license key which you can use to activate the
              MCP server. If you don't see the email, check your spam folder.
            </div>
          </div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">Will I receive updates?</div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              Yes, the package will be updated automatically with latest version of daisyUI. New MCP
              tools, MCP resources and MCP prompts will be added automatically.
            </div>
          </div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">
              Do I get customer support?
            </div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              We offer support via Discord. You can join the server https://daisyui.com/discord and
              ask your questions there. We will do our best to help you.
            </div>
          </div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">
              Can I cancel my subscription?
            </div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              Yes you can cancel your subscription at any time. If you cancel, you will still have
              access to the product until the end of your billing cycle.
            </div>
          </div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">Can I get a refund?</div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              If there was an issue, send an email to help@daisyui.com so I can help you. I will do
              my best to resolve the issue. We don't offer refunds for digital products, however if
              there was a mistake in payment, for example if you paid twice, send an email to
              help@daisyui.com.
            </div>
          </div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">
              I didn't receive the email
            </div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              Please check your spam folder. If you still can't find it, send an email to
              help@daisyui.com so I can help you.
            </div>
          </div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">
              I bought the wrong package
            </div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              Send me an email at help@daisyui.com and I will help you get the right package.
            </div>
          </div>
          <div class="collapse-plus collapse">
            <input type="radio" name="faq" class="min-h-0!" />
            <div class="collapse-title min-h-0! text-sm font-semibold">
              There was an issue with the payment
            </div>
            <div
              class="collapse-content text-base-content/70 border-base-content/10 ms-4 border-s-2 px-6 text-xs"
            >
              If the payment failed and you didn't receive the product, it usually means the payment
              didn't go through. Please try again. If the money was deducted from your account, it
              will be refunded automatically within a week or two. If the issue persists, send an
              email to help@daisyui.com so I can help you.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Big logo -->

  <!-- <div class="h-[40vh]"></div> -->
  <div class="flex justify-center">
    <div class="flex flex-col items-center gap-2">
      <div class="font-title mb-8 flex items-center text-lg lg:text-[1.75rem]">
        Official daisyUI Code Generator MCP Server
      </div>
      <div class="mb-4 inline-grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
        <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
        <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
        <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
        <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>
        <div class="[grid-area:1/1/4/4]">
          <div>
            <h2
              class="group font-title m-2 text-[clamp(2.5rem,12vw,8rem)] leading-none font-semibold text-white"
              style="
                background-image: linear-gradient(#3B72FE 1px, transparent 1px), linear-gradient(90deg, #3B72FE 1px, transparent 1px), linear-gradient(#3B72FE 0.5px, transparent 0.5px), linear-gradient(90deg, #3B72FE 0.5px, #155dfc 0.5px);
                background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
                background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;"
            >
              <div
                class="flex size-full bg-transparent px-4 transition-colors duration-2000 group-hover:bg-blue-600"
              >
                BLUEPRINT
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="sticky bottom-6 z-1 flex justify-center">
    <div
      class="bg-base-100/30 rounded-box flex justify-end gap-2 border border-white/10 p-2 outline outline-offset-1 outline-black/20 backdrop-blur-sm"
    >
      <div class="flex items-center gap-2">
        <img
          class="ms-2 size-4 max-sm:hidden"
          src="https://img.daisyui.com/images/logos/cursor.webp?2"
          alt="Cursor"
        />
        <img
          class="size-4 max-sm:hidden"
          src="https://img.daisyui.com/images/logos/vscode.webp"
          alt="VS Code"
        />
        <img
          class="size-4 max-sm:hidden"
          src="https://img.daisyui.com/images/logos/claude.webp"
          alt="Claude"
        />
        <div class="ps-2 text-[0.625rem]">daisyUI Blueprint MCP server</div>
      </div>
      <button class="btn btn-sm" onclick={() => dialogs.install.showModal()}>
        Install guide
      </button>
      <a class="btn btn-neutral btn-sm" href={checkoutUrl} target="_blank" rel="noopener noreferrer"
        >Get the license</a
      >
    </div>
  </div>

  <div class="h-[40vh]"></div>
</div>

<!-- install modal -->

<dialog bind:this={dialogs.install} class="modal max-md:modal-bottom">
  <div
    class="modal-box bg-base-300 p-0 shadow-none md:max-h-[70vh] md:max-w-3xl"
    style="filter: drop-shadow(0 1rem 2rem #0005);"
  >
    <!-- name of each tab group should be unique -->
    <div class="tabs max-sm:tabs-xs max-md:tabs-sm tabs-lift p-1">
      <label class="tab">
        <input type="radio" name="editors" checked />
        <img
          class="me-2 size-4 max-sm:hidden"
          src="https://img.daisyui.com/images/logos/cursor.webp?2"
          alt="Cursor"
        />
        Cursor
      </label>
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <div>
          <div class="prose prose-sm !ps-0 text-sm">
            <p>
              1. Get a <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Blueprint License
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="ms-1 inline-block size-3 fill-current opacity-50"
                  ><path
                    fill-rule="evenodd"
                    d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                  ></path></svg
                >
              </a>
            </p>
            <p>2. Click this button to open the MCP server in Cursor settings</p>
          </div>
          <div
            class="bg-base-200 border-base-content/10 my-6 flex items-center justify-center rounded border py-8"
          >
            <a
              class="btn btn-neutral"
              target="_blank"
              href={`https://cursor.com/en/install-mcp?name=daisyui-blueprint&config=${btoa(
                JSON.stringify({
                  command: "npx",
                  args: ["-y", "daisyui-blueprint@latest"],
                  env: {
                    LICENSE: "",
                    EMAIL: "",
                    FIGMA: "",
                  },
                }),
              )}`}
            >
              <img
                class="me-2 size-4 max-sm:hidden"
                src="https://img.daisyui.com/images/logos/cursor.webp?2"
                alt="Cursor"
              />
              Install MCP Server
            </a>
          </div>
          <div class="prose prose-sm !ps-0 text-sm">
            <p>3. In the MCP settings page, add the following environment variables:</p>
            <ul>
              <li>
                <span class="font-bold">LICENSE</span>: Your license key
              </li>
              <li>
                <span class="font-bold">EMAIL</span>: Your email address
              </li>
            </ul>
          </div>
          <div class="prose prose-sm ps-0!">
            <p>
              4. Now tell the LLM to <span class="font-bold">use daisyUI Blueprint MCP</span> to access
              the tools on demand.
            </p>
            <p>
              Read <a
                href="https://cursor.com/docs/context/mcp"
                target="_blank"
                rel="noopener noreferrer">Cursor docs</a
              > for more info about using MCP.
            </p>
          </div>
        </div>
      </div>

      <label class="tab">
        <input type="radio" name="editors" />
        <img
          class="me-2 size-4 max-sm:hidden"
          src="https://img.daisyui.com/images/logos/vscode.webp"
          alt="VS Code"
        />
        VS Code
      </label>
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <div>
          <div class="prose prose-sm !ps-0 text-sm">
            <p>
              1. Get a <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Blueprint License
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="ms-1 inline-block size-3 fill-current opacity-50"
                  ><path
                    fill-rule="evenodd"
                    d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                  ></path></svg
                >
              </a>
            </p>
            <p>
              2. In VS Code press
              <kbd class="kbd kbd-sm">⌘ CMD</kbd>
              +
              <kbd class="kbd kbd-sm">⇧ Shift</kbd>
              +
              <kbd class="kbd kbd-sm">P</kbd>
              ( Or
              <kbd class="kbd kbd-sm">Ctrl</kbd>
              +
              <kbd class="kbd kbd-sm">Shift</kbd>
              +
              <kbd class="kbd kbd-sm">P</kbd>
              )
            </p>
            <p>
              3. Search for <span class="badge">MCP: Open User Configuration</span>
            </p>
            <p>
              4. Add this and put your <span class="font-bold">license key</span> +
              <span class="font-bold">email address</span> in it
            </p>
          </div>
          <div class="mockup-code my-2 w-full leading-none">
            <pre><code class="text-xs"
                >{`{
    "servers": {
      "daisyui-blueprint": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "daisyui-blueprint@latest"],
        "env": {
          "LICENSE": "",
          "EMAIL": ""
        }
      }
    }
  }`}</code
              ></pre>
          </div>
          <div class="prose prose-sm ps-0!">
            <p>
              5. Now tell the LLM to <span class="font-bold">use daisyUI Blueprint MCP</span> to access
              the tools on demand.
            </p>
            <p>
              Read <a
                href="https://code.visualstudio.com/docs/copilot/customization/mcp-servers"
                target="_blank"
                rel="noopener noreferrer">VS Code docs</a
              > for more info about using MCP.
            </p>
          </div>
        </div>
      </div>

      <label class="tab">
        <input type="radio" name="editors" />
        <img
          class="me-2 size-4 max-sm:hidden"
          src="https://img.daisyui.com/images/logos/claude.webp"
          alt="Claude"
        />
        Claude Code
      </label>
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <div>
          <div class="prose prose-sm !ps-0 text-sm">
            <p>
              1. Get a <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Blueprint License
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="ms-1 inline-block size-3 fill-current opacity-50"
                  ><path
                    fill-rule="evenodd"
                    d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                  ></path></svg
                >
              </a>
            </p>
            <p>
              2. Run this command
              <br />
              <span class="inline-block w-[2ch]"></span><span class="font-bold">Figma API Key</span>
              is optional - Only needed for Figma-to-code conversion
            </p>
          </div>

          <div class="mockup-code my-2 w-full leading-none">
            <pre><code class="text-xs"
                >claude mcp add daisyui-blueprint -- npx -y daisyui-blueprint@latest
    --env LICENSE=<span class="text-info">YOUR_LICENSE_KEY</span>
    --env EMAIL=<span class="text-info">YOUR_EMAIL</span>
    --env FIGMA=<span class="text-info">YOUR_FIGMA_API_KEY</span></code
              ></pre>
          </div>

          <div class="prose prose-sm ps-0!">
            <p>
              3. Now tell the Claude Code to <span class="font-bold">use daisyUI Blueprint MCP</span
              > to access the tools on demand.
            </p>
            <p>
              Read <a
                href="https://docs.claude.com/en/docs/claude-code/mcp"
                target="_blank"
                rel="noopener noreferrer">Claude Code docs</a
              > for more info about using MCP.
            </p>
          </div>
        </div>
      </div>

      <label class="tab">
        <input type="radio" name="editors" />
        <svg
          class="me-2 size-4 max-sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path
            d="M86.257 23.405l-3.866 3.866-3.737 3.737-4.759 4.759a9.08 9.08 0 0 1-9.663-9.663l4.759-4.759 3.737-3.737 3.866-3.866a.645.645 0 0 0 0-.911c-.046-.046-.101-.074-.155-.103l.001-.001-.01-.004a.649.649 0 0 0-.102-.043 21.424 21.424 0 0 0-8.749-1.878c-11.939 0-21.618 9.679-21.618 21.618 0 2.28.358 4.475 1.012 6.538L24.428 61.504c-7.545.122-13.627 6.267-13.627 13.842 0 7.65 6.203 13.853 13.853 13.853 7.574 0 13.72-6.083 13.842-13.628l22.546-22.546a21.602 21.602 0 0 0 6.539 1.012c11.939 0 21.618-9.679 21.618-21.618 0-3.118-.686-6.066-1.877-8.742a.605.605 0 0 0-.05-.118l-.022-.052-.007.007c-.024-.037-.041-.078-.074-.111a.646.646 0 0 0-.912.002zM30.378 75.346a5.724 5.724 0 1 1-11.449 0 5.724 5.724 0 0 1 11.449 0z"
          ></path>
        </svg>
        <div>Manual <span class="max-sm:hidden">Setup</span></div>
      </label>
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <div>
          <div class="prose prose-sm !ps-0 text-sm">
            <p>
              1. Get a <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Blueprint License
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="ms-1 inline-block size-3 fill-current opacity-50"
                  ><path
                    fill-rule="evenodd"
                    d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
                  ></path></svg
                >
              </a>
            </p>
            <p>2. Find and open MCP settings in your LLM tool or code editor</p>
            <p>3. Add this MCP server and put your license key + email address in it</p>
          </div>

          <div class="mockup-code my-2 w-full leading-none">
            <pre><code class="text-xs"
                >{`"daisyui-blueprint": {
    "type": "stdio",
    "command": "npx",
    "args": ["-y", "daisyui-blueprint@latest"],
    "env": {
      "LICENSE": "",
      "EMAIL": ""
    }
  }`}</code
              ></pre>
          </div>

          <div class="prose prose-sm ps-0!">
            <p>
              4. Now tell the LLM to <span class="font-bold">use daisyUI Blueprint MCP</span> to access
              the tools on demand.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        onclick={() => {
          dialogs.figma.showModal()
          dialogs.install.close()
        }}
        class="link link-hover mx-4 mb-2 text-xs decoration-dashed underline-offset-5 opacity-80"
        >Next: Setup Figma API key for Figma-to-code conversion</button
      >
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

<!-- figma setup modal -->

<dialog bind:this={dialogs.figma} class="modal max-md:modal-bottom">
  <div
    class="modal-box bg-base-100 shadow-none md:max-h-[70vh] md:max-w-3xl"
    style="filter: drop-shadow(0 1rem 2rem #0005);"
  >
    <div class="p-4 text-sm">
      <div class="prose prose-sm ps-0!">
        <h2>Figma API setup guide</h2>
        <p>How to Figma API and generate daisyUI code from a Figma design file</p>
      </div>
      <div class="alert alert-soft my-4 w-full text-xs">
        <span
          class="rounded-field bg-base-content/10 text-base-content border-base-content/10 inline-block shrink-0 border"
        >
          <svg class="m-1.5 size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"></path>
              <path d="m16 2 6 6"></path>
              <path d="M12 16H4"></path>
            </g>
          </svg>
        </span>
        <p class="max-w-md">
          This is an experimental feature. If results are not accurate, try a smaller section of the
          design or simplify the design.
        </p>
      </div>
      <div class="prose prose-sm ps-0!">
        <p>
          1. Get a Figma Access Token from
          <br />
          <span class="badge badge-xs font-mono"
            >Settings &gt; Security &gt; Personal Access Tokens &gt; Generate new token</span
          >
          <br />
          Required permissions:
        </p>
        <ul class="text-xs">
          <li><span class="badge badge-xs font-mono">file_content:read</span></li>
          <li><span class="badge badge-xs font-mono">file_metadata:read</span></li>
          <li><span class="badge badge-xs font-mono">library_assets:read</span></li>
          <li><span class="badge badge-xs font-mono">library_content:read</span></li>
          <li>
            <span class="badge badge-xs font-mono">team_library_content:read</span>
          </li>
          <li><span class="badge badge-xs font-mono">file_dev_resources:read</span></li>
        </ul>
        <p>
          2. Set the Figma API token in<span class="badge badge-sm font-mono">FIGMA</span> environment
          variable for the Blueprint MCP server
        </p>
      </div>
      <div class="mockup-code my-2 w-full">
        <pre><code class="text-xs"
            >{`"daisyui-blueprint": {
    "type": "stdio",
    "command": "npx",
    "env": {
      "LICENSE": "YOUR LICENSE KEY",
      "EMAIL": "YOUR EMAIL",
      "FIGMA": "YOUR FIGMA API KEY"
    }
  }`}</code
          ></pre>
      </div>
      <p>
        3. In Figma, right click on a section, choose
        <span class="badge badge-sm font-mono"> Copy/Paste as &gt; Copy link to selection </span>
      </p>
      <p>
        4. In your editor, paste the link and ask the LLM to generate daisyUI code for that design.
      </p>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

<!-- video  modal -->
<!-- <button onclick={openVideoModal({ id: "4ZYKxkibJT0", ratio: "16/9" })} class="btn"
  >Figma to daisyUI</button
> -->
<!-- <dialog
  bind:this={videoModal.dialog}
  class="modal max-md:modal-bottom"
  onclose={() => {
    const iframe = videoModal.dialog?.querySelector("iframe")
    if (iframe) {
      iframe.src = iframe.src
    }
  }}
>
  <div
    class="modal-box rounded-box overflow-hidden p-0 shadow-none md:h-[75vh] md:w-auto md:max-w-none"
    style={`aspect-ratio: ${videoModal.ratio};`}
  >
    <div class="max-xl:h-full xl:w-full" style={`aspect-ratio: ${videoModal.ratio};`}>
      {#if videoModal.isLoading}
        <div class="bg-base-200 flex h-full w-full items-center justify-center">
          <span class="loading loading-spinner loading-lg"></span>
        </div>
      {/if}
      <iframe
        class="h-full w-full"
        class:hidden={videoModal.isLoading}
        src="https://www.youtube.com/embed/{videoModal.videoId}?mute=0&autoplay=0&controls=0&rel=0&modestbranding=1&loop=1&playlist={videoModal.videoId}"
        title={videoModal.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        onload={() => {
          videoModal.isLoading = false
        }}
      ></iframe>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog> -->

<Footer />

<style>
  @keyframes fade-in {
    20% {
      color: #fff;
    }
    100% {
      color: #fff;
      margin-inline-end: 0rem;
    }
  }
  .blueprint_logo_animated {
    overflow: hidden;
    span {
      color: #1447e6;
      margin-inline-end: -0.25rem;
      animation-name: fade-in;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
    }
  }
</style>
