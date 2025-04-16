<script>
  import SEO from "$components/SEO.svelte"
  import Install from "$components/homepage/Install.svelte"
  import Footer from "$components/Footer.svelte"
  import { t } from "$lib/i18n.svelte.js"
  import { goto } from "$app/navigation"
  let { data } = $props()

  const firstAttributes = $derived(Object.entries(data.first.attributes))
  const secondAttributes = $derived(Object.entries(data.second.attributes))
  const attributeRules = data.attributeRules
  const libraries = data.libraries

  let selectedFirst = $state(data.first.key)
  let selectedSecond = $state(data.second.key)

  function isPositiveAttribute(value) {
    return typeof value === "object" && "positive" in value
  }

  function getValue(item) {
    return typeof item === "object" ? item.value : item
  }

  function getComparisonClass(attribute, value, otherValue) {
    if (isPositiveAttribute(value)) {
      return value.positive ? "text-green-500" : "text-red-500"
    }

    if (!value || !otherValue) {
      return ""
    }

    const val1 = getValue(value)
    const val2 = getValue(otherValue)
    const rule = attributeRules[attribute]

    if (val1 === val2) {
      return "text-green-500"
    }

    if (val1 === "?" || val2 === "?") {
      if (rule === "less") {
        return val1 === "?" ? "text-red-500" : "text-green-500"
      }
      if (rule === "more") {
        return val1 === "?" ? "text-red-500" : "text-green-500"
      }
    }

    if (rule === "less") {
      return val1 < val2 ? "text-green-500" : "text-red-500"
    }

    if (rule === "more") {
      return val1 > val2 ? "text-green-500" : "text-red-500"
    }

    if (typeof rule === "boolean") {
      return val1 === rule ? "text-green-500" : "text-red-500"
    }

    return ""
  }

  function formatValue(value) {
    return typeof value === "boolean" ? (value ? "Yes" : "No") : value
  }

  function handleFirstSelect(event) {
    selectedFirst = event.target.value
    updateRoute()
  }

  function handleSecondSelect(event) {
    selectedSecond = event.target.value
    updateRoute()
  }

  function updateRoute() {
    if (selectedFirst && selectedSecond) {
      goto(`/compare/${selectedFirst}-vs-${selectedSecond}`)
    }
  }
</script>

<SEO
  title={`${data.first.name} vs ${data.second.name} - daisyUI is a ${data.first.name} alternative`}
  desc={`Comparison between ${data.first.name} and ${data.second.name}`}
/>

<div class="mx-auto max-w-4xl px-4 py-20">
  <div class="text-center">
    <span class="badge badge-outline">
      Comparing {data.first.name} vs {data.second.name}. Which one is better in
      {new Date().getFullYear()}?
    </span>
  </div>
  <div class="h-6"></div>
  <h1 class="font-title group text-center text-2xl font-semibold lg:text-5xl">
    {data.first.name}
    <svg
      class="-mr-[.25em] -ml-[.5em] inline-block h-[2em] text-red-500 group-hover:scale-105 group-hover:animate-[vibrate_0.35s_infinite] group-hover:[filter:drop-shadow(0_2px_black)]"
      viewBox="0 0 256 256"
      aria-label="versus"
    >
      <path
        fill="currentColor"
        d="M100,224.3c-0.2,1.5-1.3,1.9-2.5,2.1c-5.2,0.9-9.4,3.9-13.9,6.5c-2.8,1.6-5.9,2.8-8.9,4.2c-0.4,0.2-1.1,0.3-1.3,0.1c-1.5-2-3.2-0.4-4.5,0.1c-2.6,1-4.9,2.7-7.3,4c-1.3,0.7-2.6,1.5-4,2.1c-1.5,0.6-3.1,0.8-4.3,2.2c-0.4,0.4-1.3,0.5-1.9,0.5c-0.5,0-0.9-0.5-1.4-0.7c0.2-0.4,0.4-0.8,0.8-1c1.3-0.8,2.7-1.5,4-2.2c2-1.1,4-2.3,6.1-3.4c0.3-0.2,0.6-0.4,0.9-0.5c4.9-1.2,9-4,13.3-6.3c1.6-0.9,3-2.1,4.6-3.2c-1.3-1.7-2.6-1.2-3.6-0.6c-4,2-7.9,4.1-11.8,6.2c-0.6,0.3-1.1,0.9-1.8,1.1c-0.6,0.2-1.6,0.1-1.8-0.2c-0.3-0.5-0.3-1.5,0-1.9c1.9-2.5,3.6-5.2,7.2-5.6c1.1-0.1,2.3-0.4,1.4-2c-0.4-0.7-0.6-1.3,0.1-1.8c0.8-0.6,1.7-1.4,2.8-0.7c1.1,0.8,2.4,1.1,3.6,0.5c1.2-0.5,2.4-1.1,1.5-2.8c-0.6-1.1,0.2-1.7,1.1-2.2c1.9-0.9,3.8-1.9,5.7-2.7c0.6-0.3,1.7-0.6,2-0.3c1.9,2.1,3.1,0.2,4.4-0.7c0.5-0.4,1.2-0.6,1.8-0.8c1.2,2-1.3,2-1.5,3.4c0.5,0.1,1,0.4,1.4,0.3c2.7-1.1,5.3-2.4,7.9-3.6c0.2-0.1,0.2-0.7,0.4-1.1c-0.3-0.1-0.7-0.3-0.9-0.2c-0.9,0.4-1.8,0.9-3.1,1c0.7-0.8,1.4-1.7,2.3-2.3c3.1-1.9,6.3-3.6,9.5-5.3c0.6-0.3,1.7-0.6,2.2-0.3c1.3,0.8,2.5,0.5,3.7,0c2.4-1,4.7-2,7-3.1c0.4-0.2,0.5-0.7,0.9-1.2c-2.2-1.5-3.9,0.2-6.1,0.7c0.4-0.9,0.4-1.7,0.8-1.9c1.5-0.9,3-1.8,4.6-2.5c1.3-0.6,2.7-0.6,3.7-2.3c-0.8-0.2-1.4-0.5-1.9-0.4c-4.4,0.3-8.6,0.9-11.6,4.7c-1.6,1.9-4.1,2-6.4,2.2c-1.3,0.1-1.7-0.8-1.4-1.9c0.3-1,0.6-2.2,1.4-2.7c2.3-1.4,4.4-3.6,7.6-2.7c0.6,0.2,1.4,0.1,2-0.1c3.2-1.1,6.4-2.3,9.5-3.6c1.1-0.4,2.7-0.9,1-2.6c-0.1-0.1,0.5-1.2,1-1.5c3.8-2.6,7.6-5.1,11.4-7.6c7.2-4.8,15-8.5,22.8-12.4c4.8-2.4,8.8-5.8,12.9-9.1c0.9-0.7,1.7-1.7,2.4-2.6c1.7-2.3,1.4-4.1-1.2-5.4c-1.6-0.8-3.5-1.4-5.3-1.7c-6.4-1-12.8-1.7-19.1-2.8c-5.1-0.9-9.3-3.7-11.6-8.3c-1.3-2.6-1.8-6-1.3-8.8c1.4-7.7,4.6-14.7,10.2-20.4c5.6-5.8,12.1-9.9,19.7-12.4c4.6-1.5,9.5-1,14.2,0.1c3,0.7,5.9,0.7,8.9-0.6c2.9-1.3,5.8-2.5,8.3-4.5c0.2-0.1,0.4-0.3,0.6-0.4c1-0.3,1.8,1.7,2.9,0c0.6-0.8,1.4-1.5,2.1-2.2c0,0,0.2,0,0.6,0c0,0.7,0.1,1.5,0.1,2.2c0,1.5-0.7,2.9,0.5,4.3c0.4,0.5,0,1.6,0,2.4c0,3.1,0.2,6.3,0.1,9.4c-0.2,3.4-0.7,6.8-2.7,9.7c-2.4,3.5-5.3,6.5-8.8,8.9c-1,0.6-1.8,0.7-2.9,0.4c-2.6-0.7-4.9-2-6.8-4.1c-2.9-3.2-6.4-5.8-10.3-7.9c-2.9-1.5-5.5-1.3-8.2,0.6c-3.3,2.4-6.6,4.8-8.7,8.5c-2.1,3.8-2.6,7.8-0.9,11.7c0.9,2,3,3,5.1,3.4c4.4,0.8,8.8,1.5,13.2,2c3.8,0.4,7.8,0.2,11.5,1c5.2,1.1,10,3.2,12.6,8.4c1,2.1,2.3,4.1,3.1,6.3c0.9,2.7,1,5.4-0.5,8.1c-2.3,4-5.2,7.4-8.9,10.3c-6,4.6-12.6,8-19.1,11.8c-2.4,1.4-4.3,3.1-5.9,5.3c-1,1.4-2.3,2.7-3.8,3.6c-7.3,4.3-14.6,8.3-22,12.5c-2.4,1.3-5,1.2-7.5,1.3c-0.4,0-0.9-0.4-1-0.7s0.3-0.9,0.7-1.1c2-1,3.9-2,6-2.9c1.1-0.5,2.2-0.9,2.3-2.8c-1.3,0.3-2.4,0.5-3.4,0.9c-4.2,1.7-8.4,3.5-12.7,5.1c-2.8,1-5.8,1.6-8.4,3.4c-0.5,0.3-1.4,0.2-2,0.1c-1.9-0.5-3.4,0-5,0.9c-2.9,1.5-5.8,3-8.8,4.4c-4.6,2.2-9.4,4.2-13.7,7.1c-1.2,0.8-2.2,1.7-3.3,2.6c-0.2,0.1-0.2,0.7-0.1,0.9c0.1,0.2,0.6,0.6,0.8,0.5c1.6-0.5,3.2-0.9,4.6-1.5c2.1-1,4.1-2.3,6.2-3.3c2-1,4-2.3,6.6-1.5c1,0.3,2.3-0.8,3.6-1.1c0.5-0.1,1.2,0.2,1.8,0.4c-0.2,0.6-0.3,1.5-0.7,1.7c-1.6,0.9-3.3,1.5-5.1,2.2C101.7,223.9,100.8,224.1,100,224.3c-0.1-0.1-0.1-0.4-0.2-0.6c-0.1-0.3-0.3-0.5-0.5-0.7c0,0-0.3,0.2-0.5,0.3c0.2,0.2,0.3,0.5,0.6,0.7C99.5,224.2,99.8,224.2,100,224.3z"
      />
      <path
        fill="currentColor"
        d="M151.9,59.6c4.8-6.5,8.4-13.4,13.6-19.1c0.3,0.2,0.6,0.4,0.8,0.5c-1.8,3.5-3.5,7.1-5.3,10.6c0.2,0.1,0.5,0.3,0.7,0.4c0.8-1.1,1.7-2.2,2.4-3.4c1.6-2.7,2.9-5.6,4.6-8.3c4.5-7.2,8.7-14.6,15-20.6c0.4-0.4,0.8-0.9,1.3-1.2c1.5-1.1,2.7-1.1,4.3,0.1c0.2,0.2,0.4,0.8,0.3,1.1c-0.4,0.9-1,1.9-1.6,2.7c-1.7,2.5-3.3,5-5.1,7.5c-1.9,2.6-2.7,5.4-2.7,8.5c0,1.9-0.8,3.3-2.9,4c-0.1-0.8-0.1-1.4-0.2-2.4c-2.6,3.8-5.1,7.3-7.5,10.9c-0.1,0.1-0.4,0-1,0c2.3-5.4,6.6-9.7,7.7-15.6c-3,1.4-4.2,4.3-5.9,6.6c-1.7,2.3-2.9,5-4.2,7.6c-1.4,2.7-2.8,5.4-4,8.2c-1.1,2.6-3.2,4.9-2.6,8.4c3.1-1.2,3.5-4.9,6.5-6.2c0,0.6,0.1,1,0,1.3c-3.2,7.1-6.1,14.4-10.8,20.8c-2.6,3.5-4.6,7.6-6.8,11.4c-1,1.7-2.2,3.3-3.3,4.9c-0.4,0.6-0.8,1.1-1.1,1.8c-1,2.4-1.7,4.9-3,7.1c-1.3,2.2-1.1,4.7-1.8,7c-1.6,5.5-3.3,10.9-5,16.4c-2.3,7.7-3.8,15.7-5.1,23.6c-0.6,3.9-0.8,7.9-0.8,11.9c0,4.1-4.4,7.1-8.1,5.5c-0.4-0.2-0.8-0.5-1-0.9c-1.9-3.5-4.8-6.4-7.7-9c-2.5-2.3-2.8-4.8-2-7.6c0.6-2.2,0.4-4.1-0.1-6.1c-0.8-3.2-1.7-6.3-2-9.6c-0.2-2.1-1.6-3.5-2.3-5.3c-1.3-3.1-2.5-6.3-3.6-9.4c-1.9-5.3-3.7-10.6-5.6-15.8c-0.9-2.6-2.2-5.1-2.9-7.8c-0.8-3.3-2.8-5.7-5.3-7.7c-2.2-1.7-3.2-3.9-2.9-6.4c0.3-2.9-0.1-6,1.7-8.7c1.2-1.7,1.7-3.8,2.6-5.8c0.5-1.3,1.3-2.1,2.6-1.2c1.1,0.8,2,0.4,2.9-0.2c2.3-1.7,4.7-0.5,7.1-0.3c2.6,2.6,5.8,4.5,6.4,8.7c0.9,6.5,2.2,12.9,3.7,19.2c1.3,5.6,3,11.1,4.5,16.6c0.2,0.9,0.3,1.9,0.5,2.8c0.4,1.4,0.7,2.9,1.2,4.3c0.2,0.6,0.5,1.1,0.7,1.6c0.4,1-0.1,2.7,1.5,2.7c0.6,0,1.2-1.8,1.6-2.8c2.5-7.3,4.8-14.6,7.3-21.9c2.1-6.1,4.4-12.1,6.4-18.2c1.2-3.5,1.5-7.3,3.3-10.7c1.6-3,3.2-5.9,5-8.8c0.5-0.9,1.4-2.1,2.8-0.8c0.1,0.1,1-0.3,1.3-0.7c0.7-0.9,1.3-1.9,2-2.9C150.4,57.3,150.6,57.4,151.9,59.6z M184.2,23.8c-1.2,0.3-2,0.2-2.2,0.6c-1.6,2-3.2,4-4.7,6c-0.1,0.2,0,0.8,0.2,0.9c0.4,0.1,1,0.2,1.2,0C180.8,29.3,182.8,27.2,184.2,23.8z"
      />
      <path
        fill="currentColor"
        d="M177,13.6c-1.3,1.8-1.4,4.9-4.3,6.2c-0.5,0.2-1.4,0.1-1.9-0.1c-0.3-0.1-0.3-1-0.2-1.5c0.4-1.8,1-3.6,1.5-5.4c0.1-0.3,0.2-0.7,0.3-1c0.8-1.5,1.8-2,3.1-1.6C176.7,10.5,177.1,11.3,177,13.6z"
      />
    </svg>
    {data.second.name}
  </h1>
  <div class="h-6"></div>
  <p class="font-title text-base-content/60 mx-auto max-w-xl text-center text-sm">
    Looking for a <a
      href={`/alternative/${data.first.key === "daisyui" ? data.second.key : data.first.key}`}
      >{data.first.key === "daisyui" ? data.second.name : data.first.name} alternative</a
    >? This page compares {data.first.name}
    and {data.second.name}, two popular UI component libraries. We are comparing features, size,
    efficiency and usage data to help you choose which component library is better for your next
    project.
  </p>
  <div class="h-16"></div>
  <table class="table">
    <thead>
      <tr>
        <th class="ps-0 pe-2">
          <div
            class="from-base-content/10 rounded-box mb-16 flex flex-col items-center gap-2 bg-linear-170 from-[-25%] to-[75%] pt-16 text-center"
          >
            <div
              class="flex h-12 w-full max-w-18 items-center *:mx-auto *:h-full lg:h-20 lg:max-w-30"
            >
              {@html data.first.logo}
            </div>
            <div>
              {data.first.name}
              <!-- <select class="select select-sm" value={selectedFirst} on:change={handleFirstSelect}>
                {#each data.libraries as library}
                  <option value={library.key} disabled={library.key === selectedSecond}>
                    {library.name}
                  </option>
                {/each}
              </select> -->
            </div>
          </div>
        </th>
        <th class="ps-2 pe-0">
          <div
            class="from-base-content/10 rounded-box mb-16 flex flex-col items-center gap-2 -bg-linear-170 from-[-25%] to-[75%] pt-16 text-center"
          >
            <div
              class="flex h-12 w-full max-w-18 items-center *:mx-auto *:h-full lg:h-20 lg:max-w-30"
            >
              {@html data.second.logo}
            </div>
            <div>
              {data.second.name}
              <!-- <select
                class="select select-sm"
                value={selectedSecond}
                on:change={handleSecondSelect}
              >
                {#each data.libraries as library}
                  <option value={library.key} disabled={library.key === selectedFirst}>
                    {library.name}
                  </option>
                {/each}
              </select> -->
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each [...firstAttributes, ...secondAttributes.filter(([key]) => !(key in data.first.attributes))] as [key, attribute]}
        <tr>
          <td class="w-1/2">
            {#if key in data.first.attributes}
              <div class="flex flex-col gap-2 text-center">
                <div
                  class={`font-title text-2xl font-semibold tabular-nums lg:text-4xl ${getComparisonClass(key, data.first.attributes[key], data.second.attributes[key])}`}
                >
                  {formatValue(data.first.attributes[key].value)}
                </div>
                <div class="tracking-wide">{key}</div>
                <div class="text-base-content/40 mx-auto max-w-xs text-[0.625rem] italic">
                  {data.first.attributes[key].desc}
                </div>
              </div>
            {/if}
          </td>
          <td class="w-1/2">
            {#if key in data.second.attributes}
              <div class="flex flex-col gap-2 text-center">
                <div
                  class={`font-title text-2xl font-semibold tabular-nums lg:text-4xl ${getComparisonClass(key, data.second.attributes[key], data.first.attributes[key])}`}
                >
                  {formatValue(data.second.attributes[key].value)}
                </div>
                <div class="tracking-wide">{key}</div>
                <div class="text-base-content/40 mx-auto max-w-xs text-[0.625rem] italic">
                  {data.second.attributes[key].desc}
                </div>
              </div>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <th class="ps-0 pe-2">
          <div
            class="from-base-content/10 rounded-box mt-16 flex flex-col items-center gap-2 bg-linear-10 from-[-25%] to-[75%] py-16 text-center"
          >
            {#if data.first.key !== "daisyui" && data.second.key !== "daisyui"}
              <div class="mb-6 flex items-center gap-1 md:gap-6">
                <div class="flex size-10 items-center">{@html data.first.logo}</div>
                <span class="text-error">vs</span>
                <div class="flex size-10 items-center">
                  {@html libraries.find((lib) => lib.key === "daisyui").logo}
                </div>
              </div>
              <a href="/compare/{data.first.key}-vs-daisyui" class="btn btn-xs md:btn-sm">
                Compare {data.first.name} vs daisyUI
              </a>
            {:else}
              <div
                class="flex h-12 w-full max-w-18 items-center *:mx-auto *:h-full lg:h-20 lg:max-w-30"
              >
                {@html data.first.logo}
              </div>
            {/if}
          </div>
        </th>
        <th class="ps-2 pe-0">
          <div
            class="from-base-content/10 rounded-box mt-16 flex flex-col items-center gap-2 -bg-linear-10 from-[-25%] to-[75%] py-16 text-center"
          >
            {#if data.first.key !== "daisyui" && data.second.key !== "daisyui"}
              <div class="mb-6 flex items-center gap-1 md:gap-6">
                <div class="flex size-10 items-center">
                  {@html libraries.find((lib) => lib.key === "daisyui").logo}
                </div>
                <span class="text-error">vs</span>
                <div class="flex size-10 items-center">{@html data.second.logo}</div>
              </div>
              <a href="/compare/daisyui-vs-{data.second.key}" class="btn btn-xs md:btn-sm">
                Compare daisyUI vs {data.second.name}
              </a>
            {:else}
              <div
                class="flex h-12 w-full max-w-18 items-center *:mx-auto *:h-full lg:h-20 lg:max-w-30"
              >
                {@html data.second.logo}
              </div>
            {/if}
          </div>
        </th>
      </tr>
    </tfoot>
  </table>
  <div class="h-64"></div>
  <h2 class="font-title text-3xl font-semibold">Install daisyUI</h2>
  <div class="h-8"></div>
  <Install />
  <div class="h-8"></div>
  <div class="text-center">
    <a href="/docs/install/" class="btn-primary btn btn-wide mt-4 mb-20 shadow-lg">
      {$t("install-btn")}
    </a>
  </div>
  <div class="h-16"></div>
  <div class="divider"></div>
  <p class="text-base-content/30 mx-auto max-w-xl text-center text-xs">
    This comparison page is for informational purposes only and does not mean to criticize libraries
    or projects. Information is based on GitHub public data, NPM registry data and official
    documentation websites of the libraries. If you found any outdated information, please open a PR
    to update it. All trademarks, logos and brand names are the property of their respective owners.
  </p>
</div>
<Footer />
