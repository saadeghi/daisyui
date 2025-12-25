<script>
  import Countdown from "svelte-countdown"
  import { page } from "$app/stores"

  const dateFormat = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }
</script>

<!-- Without timer -->
{#if false && !$page.url.pathname.startsWith("/blueprint/")}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      href="/blueprint/"
      class="alert border-base-300 hover:bg-base-200 bg-base-100 flex w-full justify-center rounded-none border-x-0 border-t-0 p-2 text-center text-xs shadow-none transition-colors"
    >
      <div class="font-mono text-[0.6875rem]">
        <div
          class="-my-1 inline-grid grid-cols-[.25rem_1fr_.25rem] grid-rows-[.25rem_1fr_.25rem] align-middle"
        >
          <div class="border-s-1 border-t-1 border-blue-600 [grid-area:1/1/2/2]"></div>
          <div class="border-e-1 border-t-1 border-blue-600 [grid-area:1/3/2/4]"></div>
          <div class="border-s-1 border-b-1 border-blue-600 [grid-area:3/1/4/2]"></div>
          <div class="border-e-1 border-b-1 border-blue-600 [grid-area:3/3/4/4]"></div>
          <div
            class="font-title m-0.5 bg-blue-600 px-1 text-sm font-semibold tracking-wide text-white [grid-area:1/1/4/4]"
          >
            BLUEPRINT
          </div>
        </div>
        The&nbsp;Official&nbsp;daisyUI Code&nbsp;Generator
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block size-4 opacity-40"
          viewBox="0 0 195 195"
          fill="none"
        >
          <path
            d="M25 97.8528L92.8822 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177"
            stroke="currentColor"
            stroke-width="15"
          />
          <path
            d="M76.2652 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52"
            stroke="currentColor"
            stroke-width="15"
          />
          <path
            d="M109.853 46.9411L59.6482 97.1457C50.2756 106.518 50.2756 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2167 140.459 93.5893 131.087L143.794 80.8822"
            stroke="currentColor"
            stroke-width="15"
          />
        </svg>
        MCP&nbsp;Server
        <!-- <span class="bg-warning text-warning-content rounded-selector px-2 font-semibold">New</span> -->
      </div>
    </a>
  </div>
{/if}
<!-- With timer -->
<!-- {#if true && !$page.url.pathname.startsWith("/store/")} -->
{#if true}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      data-sveltekit-preload-data
      href="/store/nexus/"
      class="alert border-base-300 hover:bg-base-200 bg-base-100 flex w-full justify-center rounded-none border-x-0 border-t-0 p-2 text-center text-xs shadow-none transition-colors"
    >
      <p class="leading-relaxed [text-wrap:balance]">
        <span class="text-base-content/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 16"
            class="mx-1 inline-block size-4 -rotate-12 align-middle"
          >
            <g fill="currentColor">
              <path
                d="M13 4h-1.38c.19-.33.33-.67.36-.91.06-.67-.11-1.22-.52-1.61C11.1 1.1 10.65 1 10.1 1h-.11c-.53.02-1.11.25-1.53.58-.42.33-.73.72-.97 1.2-.23-.48-.55-.88-.97-1.2-.42-.32-1-.58-1.53-.58h-.03c-.56 0-1.06.09-1.44.48-.41.39-.58.94-.52 1.61.03.23.17.58.36.91H1.98c-.55 0-1 .45-1 1v3h1v5c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V8h1V5c0-.55-.45-1-1-1H13zm-4.78-.88c.17-.36.42-.67.75-.92.3-.23.72-.39 1.05-.41h.09c.45 0 .66.11.8.25s.33.39.3.95c-.05.19-.25.61-.5 1h-2.9l.41-.88v.01zM4.09 2.04c.13-.13.31-.25.91-.25.31 0 .72.17 1.03.41.33.25.58.55.75.92L7.2 4H4.3c-.25-.39-.45-.81-.5-1-.03-.56.16-.81.3-.95l-.01-.01zM7 12.99H3V8h4v5-.01zm0-6H2V5h5v2-.01zm5 6H8V8h4v5-.01zm1-6H8V5h5v2-.01z"
              >
              </path>
            </g>
          </svg>
          Happy New Year! Use code
          <code
            class="decoration-success font-mono tracking-wide underline decoration-wavy underline-offset-4"
          >
            NEXUS26
          </code>
          and get 26% discount on Nexus Dashboard Template!
          <span class="inline-block w-2"></span>
          <Countdown
            from={new Date("2026-01-06T00:00:00.000000Z").toLocaleString("en-GB", dateFormat)}
            dateFormat="DD/MM/YYYY, HH:mm:ss"
          >
            {#snippet children({ remaining })}
              {#if remaining.done === false}
                <span class="border-base-content/20 rounded-full border border-dashed px-2 py-1">
                  <date
                    datetime={new Date("2025-04-19T01:01:00.000000Z").toLocaleString(
                      "en-GB",
                      dateFormat,
                    )}
                    class="countdown font-mono text-xs"
                  >
                    {remaining.days * 24 + remaining.hours}h&nbsp;
                    <span style={`--value:${remaining.minutes}`}></span>
                    m&nbsp;
                    <span style={`--value:${remaining.seconds}`}></span>
                    s
                  </date>
                  remaining
                </span>
              {/if}
            {/snippet}
          </Countdown>
        </span>
      </p>
    </a>
  </div>
{/if}
