<script>
  import Carbon from "$components/Carbon.svelte"
  const componentGrid = {
    button: {
      element: "button",
      icon: true,
      baseClass: "btn",
      types: [""],
      colors: [
        "",
        "btn-primary",
        "btn-secondary",
        "btn-accent",
        "btn-info",
        "btn-success",
        "btn-warning",
        "btn-error",
        "btn-ghost",
      ],
      sizes: ["btn-xl", "btn-lg", "btn-md", "btn-sm", "btn-xs"],
      label: "Button",
    },
    badge: {
      element: "button",
      icon: true,
      baseClass: "badge",
      types: [""],
      colors: [
        "",
        "badge-primary",
        "badge-secondary",
        "badge-accent",
        "badge-info",
        "badge-success",
        "badge-warning",
        "badge-error",
      ],
      sizes: ["badge-xl", "badge-lg", "badge-md", "badge-sm", "badge-xs"],
      label: "Badge",
    },
    input: {
      element: "input",
      icon: false,
      baseClass: "input max-w-32",
      types: [""],
      colors: [
        "",
        "input-primary",
        "input-secondary",
        "input-accent",
        "input-info",
        "input-success",
        "input-warning",
        "input-error",
      ],
      sizes: ["input-xl", "input-lg", "input-md", "input-sm", "input-xs"],
      label: false,
      attributes: {
        type: "text",
        placeholder: "Input",
      },
    },
    toggle: {
      element: "input",
      icon: false,
      baseClass: "toggle",
      types: [""],
      colors: [
        "",
        "toggle-primary",
        "toggle-secondary",
        "toggle-accent",
        "toggle-info",
        "toggle-success",
        "toggle-warning",
        "toggle-error",
      ],
      sizes: ["toggle-xl", "toggle-lg", "toggle-md", "toggle-sm", "toggle-xs"],
      label: false,
      attributes: {
        type: "checkbox",
        checked: "checked",
      },
    },
    checkbox: {
      element: "input",
      icon: false,
      baseClass: "checkbox",
      types: [""],
      colors: [
        "",
        "checkbox-primary",
        "checkbox-secondary",
        "checkbox-accent",
        "checkbox-info",
        "checkbox-success",
        "checkbox-warning",
        "checkbox-error",
      ],
      sizes: ["checkbox-xl", "checkbox-lg", "checkbox-md", "checkbox-sm", "checkbox-xs"],
      label: false,
      attributes: {
        type: "checkbox",
        checked: "checked",
      },
    },
    radio: {
      element: "input",
      icon: false,
      baseClass: "radio",
      types: [""],
      colors: [
        "",
        "radio-primary",
        "radio-secondary",
        "radio-accent",
        "radio-info",
        "radio-success",
        "radio-warning",
        "radio-error",
      ],
      sizes: ["radio-xl", "radio-lg", "radio-md", "radio-sm", "radio-xs"],
      label: false,
      attributes: {
        type: "radio",
        checked: "checked",
      },
    },
    alert: {
      element: "div",
      icon: true,
      baseClass: "alert w-full",
      types: [""],
      colors: [""],
      sizes: ["alert-info", "alert-success", "alert-warning", "alert-error"],
      label: "4 New Messages",
      content: "<button class='btn btn-xs'>View</button>",
    },
    text: {
      element: "div",
      icon: false,
      baseClass: "w-full rounded-box p-12",
      types: [""],
      colors: [
        "bg-base-100 text-base-content",
        "bg-primary text-primary-content",
        "bg-secondary text-secondary-content",
        "bg-accent text-accent-content",
        "bg-neutral text-neutral-content",
        "bg-info text-info-content",
        "bg-success text-success-content",
        "bg-warning text-warning-content",
        "bg-error text-error-content",
      ],
      sizes: [""],
      label: "",
      content:
        "<div class='text-xs'>Daisy grows happily under the warm sunlight</div><div class='text-sm'>Daisy grows happily under the warm sunlight</div><div class='text-md'>Daisy grows happily under the warm sunlight</div><div class='text-lg'>Daisy grows happily under the warm sunlight</div><div class='text-xl font-semibold'>Daisy grows happily under the warm sunlight</div><div class='text-2xl font-bold'>Daisy grows happily under the warm sunlight</div><div class='text-3xl font-black'>Daisy grows happily under the warm sunlight</div>",
    },
  }
  let sliderValue = $state(50)
  let previewtabs = $state("Components Demo")
  let currentThemeStyle = $props()
  const colorGroup1 = [
    { name: "Primary", class: "bg-primary text-primary-content", variable: "--color-primary" },
    {
      name: "Secondary",
      class: "bg-secondary text-secondary-content",
      variable: "--color-secondary",
    },
    { name: "Accent", class: "bg-accent text-accent-content", variable: "--color-accent" },
    { name: "Neutral", class: "bg-neutral text-neutral-content", variable: "--color-neutral" },
  ]
  const colorGroup2 = [
    { name: "Base 100", class: "bg-base-100 text-base-content", variable: "--color-base-100" },
    { name: "Base 200", class: "bg-base-200 text-base-content", variable: "--color-base-200" },
    { name: "Base 300", class: "bg-base-300 text-base-content", variable: "--color-base-300" },
  ]
  const colorGroup3 = [
    { name: "Info", class: "bg-info text-info-content", variable: "--color-info" },
    { name: "Success", class: "bg-success text-success-content", variable: "--color-success" },
    { name: "Warning", class: "bg-warning text-warning-content", variable: "--color-success" },
    { name: "Error", class: "bg-error text-error-content", variable: "--color-success" },
  ]
</script>

<div
  class={`text-base-content pt-6 transition-colors duration-500 ${previewtabs === "Components Demo" ? "bg-base-200" : "bg-base-100"}`}
>
  <div class="flex items-center justify-between gap-4 px-8 ps-10">
    <h2 class="font-title text-lg md:max-lg:hidden">{previewtabs}</h2>
    <div class="tabs tabs-box tabs-sm bg-base-300 inline-flex">
      <label class="tab" title="Components Demo">
        <input
          aria-label="Components Demo"
          name="previewtabs"
          type="radio"
          value="Components Demo"
          bind:group={previewtabs}
        />
        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <rect width="7" height="9" x="3" y="3" rx="1"> </rect>
            <rect width="7" height="5" x="14" y="3" rx="1"> </rect>
            <rect width="7" height="9" x="14" y="12" rx="1"> </rect>
            <rect width="7" height="5" x="3" y="16" rx="1"> </rect>
          </g>
        </svg>
      </label>
      <label class="tab" title="Component Variants">
        <input
          aria-label="Component Variants"
          name="previewtabs"
          type="radio"
          value="Component Variants"
          bind:group={previewtabs}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4"
          ><g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
            ><path d="M4 6l5.5 0"></path><path d="M4 10l5.5 0"></path><path d="M4 14l5.5 0"
            ></path><path d="M4 18l5.5 0"></path><path d="M14.5 6l5.5 0"></path><path
              d="M14.5 10l5.5 0"
            ></path><path d="M14.5 14l5.5 0"></path><path d="M14.5 18l5.5 0"></path></g
          ></svg
        >
      </label>
      <label class="tab" title="Color Palette">
        <input
          aria-label="Color Palette"
          name="previewtabs"
          type="radio"
          value="Color Palette"
          bind:group={previewtabs}
        />
        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"> </path>
            <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"> </path>
            <path d="M 7 17h.01"> </path>
            <path
              d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
            >
            </path>
          </g>
        </svg>
      </label>
    </div>
  </div>
  <div class="px-8 py-6">
    {#if previewtabs === "Components Demo"}
      <div
        class="text-base-content mx-auto grid gap-6 pb-20 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 [&_.carbon-responsive-wrap]:flex-nowrap! [&_.carbon-responsive-wrap]:text-[11px]! [&_:is(div,button)]:[transition:background-color_0ms,border-color_100ms,box-shadow_300ms,border-radius_500ms_ease-out] [&>*]:mb-6"
      >
        <div class="flex flex-col gap-4">
          <!-- filters -->
          <div class="card bg-base-100 card-border border-base-300 card-sm">
            <div class="card-body gap-4">
              <h2 class="flex items-center justify-between">
                <span class="flex items-center gap-2 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-40"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>
                  Preview
                </span>
                <span class="link text-xs">more</span>
              </h2>
              <div>
                <span class="badge badge-soft">
                  Shoes
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-3"
                  >
                    <path
                      d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
                    />
                  </svg>
                </span>
                <span class="badge badge-soft">
                  Bags
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-3"
                  >
                    <path
                      d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
                    />
                  </svg>
                </span>
              </div>
              <div class="flex flex-col">
                <div
                  class="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2"
                >
                  <label class="flex cursor-pointer items-center gap-2 select-none">
                    <input type="checkbox" class="checkbox checkbox-sm" checked />
                    <span>Hoodies</span>
                  </label>
                  <span class="badge badge-xs badge-neutral font-mono">25</span>
                </div>
                <div
                  class="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2"
                >
                  <label class="flex cursor-pointer items-center gap-2 select-none">
                    <input type="checkbox" class="checkbox checkbox-sm" checked />
                    <span>Bags</span>
                  </label>
                  <span class="badge badge-xs badge-neutral font-mono">3</span>
                </div>
                <div
                  class="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2"
                >
                  <label class="flex cursor-pointer items-center gap-2 select-none">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                    <span>Shoes</span>
                  </label>
                  <span class="badge badge-xs badge-warning font-mono">0</span>
                </div>
                <div
                  class="border-b-base-content/5 flex items-center justify-between gap-2 border-b border-dashed py-2"
                >
                  <label class="flex cursor-pointer items-center gap-2 select-none">
                    <input type="checkbox" class="checkbox checkbox-sm" />
                    <span>Accessories</span>
                  </label>
                  <span class="badge badge-xs badge-neutral font-mono">4</span>
                </div>
              </div>
            </div>
          </div>

          <!-- calendar -->
          <div class="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
            <div class="card-body gap-4">
              <div class="border-b-base-300 grid grid-cols-7 border-b border-dashed pb-3">
                <div class="rounded-field flex flex-col items-center px-2 py-1">
                  <span class="text-sm font-semibold">12</span>
                  <span class="text-[10px] font-semibold opacity-50">M</span>
                </div>
                <div class="rounded-field flex flex-col items-center px-2 py-1">
                  <span class="text-sm font-semibold">13</span>
                  <span class="text-[10px] font-semibold opacity-50">T</span>
                </div>
                <div
                  class="rounded-field bg-primary text-primary-content flex flex-col items-center px-2 py-1"
                >
                  <span class="text-sm font-semibold">14</span>
                  <span class="text-[10px] font-semibold opacity-50">W</span>
                </div>
                <div class="rounded-field flex flex-col items-center px-2 py-1">
                  <span class="text-sm font-semibold">15</span>
                  <span class="text-[10px] font-semibold opacity-50">T</span>
                </div>
                <div class="rounded-field flex flex-col items-center px-2 py-1">
                  <span class="text-sm font-semibold">16</span>
                  <span class="text-[10px] font-semibold opacity-50">F</span>
                </div>
                <div class="rounded-field flex flex-col items-center px-2 py-1">
                  <span class="text-sm font-semibold">17</span>
                  <span class="text-[10px] font-semibold opacity-50">S</span>
                </div>
                <div class="rounded-field flex flex-col items-center px-2 py-1">
                  <span class="text-sm font-semibold">18</span>
                  <span class="text-[10px] font-semibold opacity-50">S</span>
                </div>
              </div>
              <div>
                <label class="input input-sm input-border flex w-auto items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input type="text" placeholder="Search for events" />
                </label>
              </div>
              <div class="flex flex-col gap-2">
                <label class="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" class="toggle toggle-sm toggle-primary" checked />
                  <span class="text-xs">Show all day events</span>
                </label>
              </div>
            </div>
            <div class="bg-base-300">
              <div class="flex items-center gap-2 p-4">
                <div class="grow">
                  <div class="text-sm font-medium">Team Sync Meeting</div>
                  <div class="text-xs opacity-60">
                    Weekly product review with design and development teams
                  </div>
                </div>
                <div class="shrink-0">
                  <span class="badge badge-sm badge-neutral">1h</span>
                </div>
              </div>
            </div>
          </div>

          <!-- tabs -->
          <div>
            <div role="tablist" class="tabs tabs-lift">
              <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 1" />
              <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                class="tab"
                aria-label="Tab 2"
                checked="checked"
              />
              <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

              <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tab 3" />
              <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
            </div>
          </div>

          <!-- range -->
          <div class="card bg-base-100 card-border border-base-300 card-sm">
            <div class="card-body gap-4">
              <h2 class="flex items-center justify-between">
                <span class="flex items-center gap-2 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-40"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Price range
                </span>
              </h2>
              <div class="text-center text-5xl font-extralight">{sliderValue}</div>
              <input type="range" class="range range-sm" bind:value={sliderValue} />
            </div>
          </div>

          <!-- product -->
          <div class="card bg-base-100 card-border border-base-300 card-sm">
            <figure class="p-2">
              <img
                class="rounded-[calc(var(--radius-box)-.5rem)]"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div class="card-body gap-4">
              <h2 class="flex items-center justify-between">
                <span class="font-semibold">Nike Shoes</span>
                <span class="badge badge-success badge-sm">SALE</span>
              </h2>
              <div class="flex items-center gap-2">
                <div class="rating rating-xs">
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-5"
                    class="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
                <span class="text-xs opacity-60">420 reviews</span>
              </div>
              <div>
                <span class="text-2xl font-semibold">$120</span>
                <span class="text-sm line-through opacity-60">$150</span>
              </div>
            </div>
          </div>

          <!-- search -->
          <div class="card bg-base-100 card-border border-base-300 card-sm">
            <div class="card-body gap-4">
              <div class="join">
                <label class="join-item input-border input flex w-auto items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 shrink-0 opacity-70"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <input type="text" class="grow" placeholder="Search" />
                </label>
                <button class="join-item btn btn-neutral">Find</button>
              </div>
            </div>
          </div>

          <!-- form -->
          <div class="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
            <div class="border-base-300 border-b border-dashed">
              <div class="flex items-center gap-2 p-4">
                <div class="grow">
                  <div class="flex items-center gap-2 text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 opacity-40"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                      />
                    </svg>
                    Create new account
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body gap-4">
              <p class="text-xs opacity-60">Registration is free and only takes a minute</p>

              <div class="flex flex-col gap-1">
                <label class="input input-border flex max-w-none items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                    ></path>
                  </svg>
                  <input type="text" class="grow" placeholder="Username" />
                </label>
              </div>

              <div class="flex flex-col gap-1">
                <label class="input input-border flex max-w-none items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <input type="password" class="grow" placeholder="password" />
                </label>
                <span class="text-base-content/60 flex items-center gap-2 px-1 text-[0.6875rem]">
                  <span class="status status-error inline-block"></span>
                  Password must be 8+ characters
                </span>
              </div>

              <label class="text-base-content/60 flex items-center gap-2 text-xs">
                <input type="checkbox" class="toggle toggle-xs" />
                Accept terms without reading
              </label>
              <label class="text-base-content/60 flex items-center gap-2 text-xs">
                <input type="checkbox" class="toggle toggle-xs" />
                Subscribe to spam emails
              </label>

              <div class="card-actions items-center gap-6">
                <button class="btn btn-primary">Register</button>
                <button class="link">Or login</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <!-- chart -->
          <div class="card bg-base-100 card-border border-base-300 card-sm">
            <div class="card-body gap-4">
              <div class="*:bg-base-content mt-4 flex h-24 items-end gap-2 *:w-full *:rounded-sm">
                <div style="height: 10%"></div>
                <div style="height: 20%"></div>
                <div style="height: 10%"></div>
                <div style="height: 25%"></div>
                <div style="height: 22%"></div>
                <div style="height: 15%"></div>
                <div style="height: 20%"></div>
                <div style="height: 35%"></div>
                <div style="height: 40%"></div>
                <div style="height: 45%"></div>
                <div style="height: 30%"></div>
                <div style="height: 35%"></div>
                <div style="height: 60%"></div>
                <div style="height: 65%"></div>
                <div style="height: 80%"></div>
                <div style="height: 90%"></div>
              </div>
              <p class="py-3 text-xs">
                Sales volume reached $12,450 this week, showing a 15% increase from the previous
                period.
              </p>
              <div class="grid grid-cols-2 gap-2">
                <button class="btn">Charts</button>
                <button class="btn btn-neutral">Details</button>
              </div>
            </div>
          </div>

          <!-- stat -->
          <div class="card bg-base-100 card-border border-base-300 w-full">
            <div
              class="stats bg-base-100 w-full overflow-hidden shadow-[0_.1rem_.5rem_-.3rem_#0003]"
            >
              <div class="stat">
                <div class="stat-figure">
                  <div class="radial-progress" style="--value:91;--size:3rem;" role="progressbar">
                    91
                  </div>
                </div>
                <div class="stat-title">Page Score</div>
                <div class="stat-value">91<span class="text-sm">/100</span></div>
                <div class="stat-desc flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="text-success size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  All good
                </div>
              </div>
            </div>
          </div>

          <!-- list -->
          <div class="card bg-base-100 card-border border-base-300 card-sm">
            <div class="card-body gap-4">
              <h2 class="flex items-center justify-between">
                <span class="flex items-center gap-2 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-40"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                  Recent orders
                </span>
              </h2>
              <div class="flex flex-col text-xs">
                <div
                  class="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2"
                >
                  Charlie Chapman
                  <span class="badge badge-xs badge-info">Send</span>
                </div>
                <div
                  class="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2"
                >
                  Howard Hudson
                  <span class="badge badge-xs badge-error">Failed</span>
                </div>
                <div
                  class="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2"
                >
                  Fiona Fisher
                  <span class="badge badge-xs badge-warning">In progress</span>
                </div>
                <div
                  class="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2"
                >
                  Nick Nelson
                  <span class="badge badge-xs badge-success">Completed</span>
                </div>
                <div
                  class="border-t-base-content/5 flex items-center justify-between gap-2 border-t border-dashed py-2"
                >
                  Amanda Anderson
                  <span class="badge badge-xs badge-success">Completed</span>
                </div>
              </div>
            </div>
          </div>

          <!-- stat -->
          <div class="card bg-base-100 card-border border-base-300 w-full">
            <div class="stats">
              <div class="stat">
                <div class="stat-title">
                  {new Date().toLocaleString("default", { month: "long" })} Revenue
                </div>
                <div class="stat-value">$32,400</div>
                <div class="stat-desc flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="text-success size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.808 4.057a.75.75 0 0 1 .92-.527l3.116.849a.75.75 0 0 1 .528.915l-.823 3.121a.75.75 0 0 1-1.45-.382l.337-1.281a23.484 23.484 0 0 0-3.609 3.056.75.75 0 0 1-1.07.01L6 8.06l-3.72 3.72a.75.75 0 1 1-1.06-1.061l4.25-4.25a.75.75 0 0 1 1.06 0l1.756 1.755a25.015 25.015 0 0 1 3.508-2.85l-1.46-.398a.75.75 0 0 1-.526-.92Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  21% more than last month
                </div>
              </div>
            </div>
          </div>

          <!-- textarea -->
          <div class="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
            <div class="border-base-300 border-b border-dashed">
              <div class="flex items-center gap-2 p-4">
                <div class="grow">
                  <div class="flex items-center gap-2 text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 opacity-40"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    Write a new post
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body gap-4">
              <div class="flex items-center justify-between">
                <div class="join">
                  <input
                    class="join-item btn btn-xs px-3 font-bold"
                    type="checkbox"
                    name="options"
                    aria-label="B"
                  />
                  <input
                    class="join-item btn btn-xs px-3 font-mono italic"
                    type="checkbox"
                    name="options"
                    aria-label="I"
                  />
                  <input
                    class="join-item btn btn-xs px-3 underline"
                    type="checkbox"
                    name="options"
                    aria-label="U"
                  />
                </div>
                <button class="btn btn-xs"> Add files </button>
              </div>

              <textarea
                class="textarea textarea-border max-w-none resize-none"
                placeholder="What's happening?"
              ></textarea>

              <p class="px-2 text-xs opacity-40">1200 characters remaining</p>

              <div class="card-actions grid grid-cols-2">
                <button class="btn">Draft</button>
                <button class="btn btn-primary">Publish</button>
              </div>
            </div>
          </div>

          <!-- chat -->
          <div class="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
            <div class="card-body">
              <div class="chat chat-start">
                <div class="chat-image avatar">
                  <div class="w-8 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/profile/demo/yellingwoman@94.webp"
                    />
                  </div>
                </div>
                <div class="chat-header">
                  Obi-Wan Kenobi
                  <time class="text-xs opacity-50">12:45</time>
                </div>
                <div class="chat-bubble chat-bubble-neutral">It's over Anakin</div>
              </div>

              <div class="chat chat-start">
                <div class="chat-image avatar">
                  <div class="w-8 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/profile/demo/yellingwoman@94.webp"
                    />
                  </div>
                </div>
                <div class="chat-bubble chat-bubble-neutral">I have the high ground</div>
                <div class="chat-footer opacity-50">Delivered</div>
              </div>

              <div class="chat chat-end">
                <div class="chat-image avatar">
                  <div class="w-8 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/profile/demo/yellingcat@94.webp"
                    />
                  </div>
                </div>
                <div class="chat-bubble chat-bubble-neutral">You underestimate my power</div>
                <div class="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            </div>

            <div class="dock dock-sm bg-base-300 relative px-2">
              <button class="">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </button>
              <button class="dock-active">
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
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
              </button>
              <button class="">
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
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- menu -->
          <div class="card bg-base-100 card-border border-base-300">
            <ul class="menu w-full">
              <li class="menu-title">Admin panel</li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                  Databases
                  <span class="badge justify-self-end">7</span>
                </span>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                  Products
                </span>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  Messages
                  <span class="badge justify-self-end">29</span>
                </span>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  </svg>
                  Access tokens
                </span>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  Users
                  <span class="status status-info"></span>
                </span>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 opacity-30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg>
                  Settings
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <!-- music -->
          <div class="card bg-base-100 card-border border-base-300 card-sm overflow-hidden">
            <div class="card-body my-2">
              <div class="flex items-center justify-around">
                <button class="btn btn-square btn-neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4 shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                    />
                  </svg>
                </button>
                <button class="btn btn-square btn-neutral btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                </button>
                <button class="btn btn-square btn-neutral">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4 shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                    />
                  </svg>
                </button>
              </div>
              <div class="mt-2 text-center">
                <h6 class="text-sm font-bold">PM Zoomcall ASMR</h6>
                <p class="text-xs opacity-50">Project Manager talking for 2 hours</p>
              </div>
            </div>
            <div class="border-base-300 flex flex-col border-t px-6 py-4">
              <div class="relative mt-6">
                <div
                  class="tooltip tooltip-open absolute top-2 before:text-xs"
                  style="inset-inline-start:10%"
                  data-tip="13:39"
                ></div>
                <progress class="progress" value="10" max="100"></progress>
              </div>
              <div class="flex justify-between text-xs opacity-50">
                <span>13:39</span>
                <span>120:00</span>
              </div>
            </div>
            <div class="flex items-center justify-around px-2 pb-6">
              <button class="btn btn-square">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linejoin="round"
                  /><path
                    d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >
              </button>
              <button class="btn btn-square">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M40 33L44 37L40 41"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /><path
                    d="M40 7L44 11L40 15"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /><path
                    d="M44 11H37C29.8203 11 24 16.8203 24 24C24 31.1797 29.8203 37 37 37H44"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                  /><path
                    d="M4 37H11C18.1797 37 24 31.1797 24 24C24 16.8203 18.1797 11 11 11H4"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                  /></svg
                >
              </button>
              <button class="btn btn-square">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M4 25C4 18.3502 9.39624 13 16 13H44"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /><path
                    d="M38 7L44 13L38 19"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /><path
                    d="M44 23C44 29.6498 38.6038 35 32 35H4"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /><path
                    d="M10 41L4 35L10 29"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >
              </button>
              <button class="btn btn-square">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    d="M42 30V24.4615C42 14.2655 33.9411 6 24 6C14.0589 6 6 14.2655 6 24.4615V30"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /><path
                    d="M34 32C34 29.7909 35.7909 28 38 28H42V42H38C35.7909 42 34 40.2091 34 38V32Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linejoin="round"
                  /><path
                    d="M42 32H44C45.1046 32 46 32.8954 46 34V36C46 37.1046 45.1046 38 44 38H42V32Z"
                    fill="currentColor"
                  /><path
                    d="M6 32H4C2.89543 32 2 32.8954 2 34V36C2 37.1046 2.89543 38 4 38H6V32Z"
                    fill="currentColor"
                  /><path
                    d="M6 28H10C12.2091 28 14 29.7909 14 32V38C14 40.2091 12.2091 42 10 42H6V28Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linejoin="round"
                  /></svg
                >
              </button>
            </div>
          </div>

          <!-- code -->
          <div class="mockup-code">
            <pre class="text-sm" data-prefix="$"><code>npm i daisyui</code></pre>
            <pre class="text-sm" data-prefix=">"><code>installing...</code></pre>
            <pre class="text-sm" data-prefix=">"><code>Done!</code></pre>
          </div>

          <!-- alerts -->
          <div class="flex flex-col gap-4">
            <div class="alert max-sm:alert-vertical alert-info text-xs font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                />
              </svg>
              There are 9 new messages
            </div>
            <div class="alert alert-outline max-sm:alert-vertical alert-success text-xs font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              Verification process completed
            </div>
            <div class="alert alert-dash max-sm:alert-vertical alert-warning text-xs font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                />
              </svg>
              <span><span class="link">Click</span> to verify your email</span>
            </div>
            <div class="alert alert-soft max-sm:alert-vertical alert-error text-xs font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              Access denied
              <button class="btn btn-xs btn-ghost">Support</button>
            </div>
          </div>

          <!-- timeline -->
          <ul class="timeline timeline-vertical timeline-compact">
            <li>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Harry Potter and Sorcerer's Stack</div>
              <hr class="bg-primary" />
            </li>
            <li>
              <hr class="bg-primary" />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Harry Potter and Chamber of Servers</div>
              <hr class="bg-primary" />
            </li>
            <li>
              <hr class="bg-primary" />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Harry Potter and Prisoner of Azure</div>
              <hr class="bg-primary" />
            </li>
            <li>
              <hr class="bg-primary" />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Harry Potter and Goblet of Firebase</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Harry Potter and Elixir of Phoenix</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Harry Potter and Half-Deployed App</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Harry Potter and Deathly Frameworks</div>
            </li>
          </ul>

          <!-- pricing -->
          <div
            class="card bg-base-100 card-border border-base-300 from-base-content/5 bg-linear-to-bl to-50%"
          >
            <div class="flex justify-center">
              <div class="tabs tabs-box bg-base-300 m-4 inline-flex flex-nowrap">
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  class="tab w-1/2"
                  aria-label="Monthly"
                />
                <input
                  type="radio"
                  name="my_tabs_1"
                  role="tab"
                  class="tab w-full"
                  aria-label="Yearly"
                  checked
                />
                <div class="indicator w-1/2">
                  <div class="indicator-item badge badge-warning badge-xs">SALE</div>
                </div>
              </div>
            </div>
            <div class="card-body gap-4">
              <div class="flex flex-col">
                <h4 class="font-bold tracking-wide opacity-50">Starter Plan</h4>
                <div>
                  <span class="text-4xl font-black">$200</span><span class="opacity-50">/month</span
                  >
                </div>
              </div>
              <div class="my-2 flex flex-col text-xs">
                <div class="border-b-accent/5 flex items-center gap-2 border-b pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="text-success size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  20 Tokens per day
                </div>
                <div class="border-b-accent/5 flex items-center gap-2 border-b pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="text-success size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  10 Projects
                </div>
                <div class="border-b-accent/5 flex items-center gap-2 border-b pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="text-success size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  API Access
                </div>
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="text-error size-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Priority Support
                </div>
              </div>
              <button class="btn btn-accent">Buy Now</button>
            </div>
          </div>

          <!-- <div
            class="bg-base-100 border-base-300 rounded-box overflow-hidden border p-1 shadow-[0_.1rem_.5rem_-.3rem_#0003] [&_#carbonads]:bg-transparent! [&_img]:[border-radius:calc(var(--radius-box)-.5rem)_calc(var(--radius-box)-1rem)_calc(var(--radius-box)-1rem)_calc(var(--radius-box)-.5rem)]!"
          >
            <Carbon />
          </div> -->
        </div>
      </div>
    {/if}
    {#if previewtabs === "Component Variants"}
      {#each Object.entries(componentGrid) as [key, { element, icon, baseClass, types, colors, sizes, label, attributes, content }]}
        <h5 class="mt-10 px-3 py-2 font-semibold">{key}</h5>
        {#each types as type}
          {#if type}
            <h5 class="mt-10 px-3 py-2 font-semibold">{type}</h5>
          {/if}
          {#each colors as color}
            <div class="my-6 flex flex-wrap gap-3">
              {#each sizes as size}
                {#if element === "input"}
                  <svelte:element
                    this={element}
                    class="{baseClass} {size} {color} {type}"
                    {...attributes}
                  />
                {:else}
                  <svelte:element
                    this={element}
                    class="{baseClass} {size} {color} {type}"
                    {...attributes}
                  >
                    {#if icon}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-[1em]"
                      >
                        <path
                          d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"
                        />
                      </svg>
                    {/if}
                    {#if label}
                      {label}
                    {/if}
                    {#if content}
                      <div>{@html content}</div>
                    {/if}
                  </svelte:element>
                {/if}
              {/each}
            </div>
          {/each}
        {/each}
      {/each}
    {/if}
    {#if previewtabs === "Color Palette"}
      <div class="lg:border-base-content/5 mb-16 rounded-2xl lg:border lg:p-4">
        <div class="border-base-content/10 overflow-hidden rounded-lg border-[0.5px]">
          <div class="grid grid-cols-1">
            {#each colorGroup1 as color}
              <div
                class={`${color.class} group border-base-content/10 grid h-24 place-content-end gap-1 p-6 text-end`}
              >
                <div
                  class="font-title translate-y-1 text-sm font-semibold tracking-widest opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {color.name}
                </div>
                <div class="font-mono text-[0.625rem] tracking-widest tabular-nums">
                  {currentThemeStyle.currentThemeStyle[color.variable]}
                </div>
              </div>
            {/each}
          </div>
        </div>
        <div class="border-base-content/10 mt-4 overflow-hidden rounded-lg border-[0.5px]">
          <div class="grid xl:grid-cols-3">
            {#each colorGroup2 as color}
              <div
                class={`${color.class} group border-base-content/10 grid h-36 place-content-end gap-1 p-6 text-end`}
              >
                <div
                  class="font-title translate-y-1 text-sm font-semibold tracking-widest opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {color.name}
                </div>
                <div class="truncate font-mono text-[0.625rem] tabular-nums">
                  {currentThemeStyle.currentThemeStyle[color.variable]}
                </div>
              </div>
            {/each}
          </div>
        </div>
        <div class="border-base-content/10 mt-4 overflow-hidden rounded-lg border-[0.5px]">
          <div class="grid xl:grid-cols-4">
            {#each colorGroup3 as color}
              <div
                class={`${color.class} group border-base-content/10 grid h-24 place-content-end gap-1 p-6 text-end`}
              >
                <div
                  class="font-title translate-y-1 text-sm font-semibold tracking-widest opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {color.name}
                </div>
                <div class="truncate font-mono text-[0.625rem] tabular-nums">
                  {currentThemeStyle.currentThemeStyle[color.variable]}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
