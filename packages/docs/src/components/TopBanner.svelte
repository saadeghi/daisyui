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
{#if true && !$page.url.pathname.startsWith("/blog/v5.6/")}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      href="/blog/v5.6/"
      class="alert border-base-300 hover:bg-base-200 bg-base-100 flex w-full justify-center rounded-none border-x-0 border-t-0 p-2 text-center text-xs shadow-none transition-colors"
    >
      <div class="font-mono text-[0.6875rem]">daisyUI v5.6 is now available!</div>
    </a>
  </div>
{/if}

<!-- Without timer -->
{#if false && !$page.url.pathname.startsWith("/skills/")}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      href="/skills/daisyui-dashboard/"
      class="alert border-base-300 hover:bg-base-200 bg-base-100 flex w-full justify-center rounded-none border-x-0 border-t-0 p-2 text-center text-xs shadow-none transition-colors"
    >
      <div class="font-mono text-[0.6875rem]">
        <svg
          class="inline-block w-3"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="22"
          viewBox="0 0 40 44"
          fill="none"
          ><g clip-path="url(#clip0_656_249)"
            ><g clip-path="url(#clip1_656_249)"
              ><path
                d="M12.7297 29.1088C15.9028 26.4463 20.6335 26.8602 23.296 30.0333C25.9585 33.2063 25.5446 37.937 22.3716 40.5995C19.1985 43.262 14.4678 42.8481 11.8053 39.6751C9.1428 36.502 9.55668 31.7714 12.7297 29.1088Z"
                fill="#7257FF"
                fill-opacity="0.25"
                stroke="#7257FF"
                stroke-width="3.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path><path
                d="M35.5527 19.7487L23.2959 30.0332"
                stroke="#7257FF"
                stroke-width="3.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path><path
                d="M15.3311 3.42839C12.1581 6.0909 11.7442 10.8216 14.4067 13.9946C17.0692 17.1677 21.7999 17.5816 24.9729 14.9191C28.146 12.2565 28.5599 7.52587 25.8974 4.35281C23.2348 1.17975 18.5042 0.765873 15.3311 3.42839Z"
                fill="#636EFF"
                fill-opacity="0.25"
                stroke="#636EFF"
                stroke-width="3.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path><path
                d="M2.15009 24.2793L14.4067 13.9946"
                stroke="#636EFF"
                stroke-width="3.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></g
            ></g
          ><defs
            ><linearGradient
              id="paint0_linear_656_249"
              x1="51.5137"
              y1="-1.59929"
              x2="235.884"
              y2="43.0696"
              gradientUnits="userSpaceOnUse"
              ><stop stop-color="#4B7EFF"></stop><stop offset="0.995417" stop-color="#7C4CFE"
              ></stop></linearGradient
            ><clipPath id="clip0_656_249"
              ><rect width="233" height="44" fill="white"></rect></clipPath
            ><clipPath id="clip1_656_249"
              ><rect
                width="64.5597"
                height="65.0528"
                fill="white"
                transform="translate(-26.7571 17.2483) rotate(-40)"
              ></rect></clipPath
            ></defs
          ></svg
        >
        Introducing <span class="font-bold">daisyUI Dashboard Skill</span>. Generate premium-quality
        dashboards with LLM
      </div>
    </a>
  </div>
{/if}

<!-- With timer -->
{#if false && new Date() < new Date("2026-05-28T00:00:00.000000Z")}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      data-sveltekit-preload-code="viewport"
      href="/store/nexus/"
      class="alert border-base-300 hover:bg-base-200 bg-base-100 flex w-full justify-center rounded-none border-x-0 border-t-0 p-2 text-center text-[0.6875rem] shadow-none transition-colors"
    >
      <p class="leading-relaxed [text-wrap:balance]">
        <span class="text-base-content/70">
          <span class="font-bold">Nexus Dashboard</span> v4.0 is now available! – Use code
          <code
            class="decoration-success font-mono tracking-wide underline decoration-wavy underline-offset-4"
          >
            SPRING40
          </code>
          to get 40% discount on <span class="font-bold">Nexus</span> or
          <span class="font-bold">Scalo</span>
          <span class="inline-block w-2"></span>
          <Countdown
            from={new Date("2026-05-28T00:00:00.000000Z").toLocaleString("en-GB", dateFormat)}
            dateFormat="DD/MM/YYYY, HH:mm:ss"
          >
            {#snippet children({ remaining })}
              {#if remaining.done === false}
                <span class="border-base-content/20 rounded-full border border-dashed px-2 py-1">
                  <date
                    datetime={new Date("2026-04-13T00:00:00.000000Z").toLocaleString(
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
                  <!-- remaining -->
                </span>
              {/if}
            {/snippet}
          </Countdown>
        </span>
      </p>
    </a>
  </div>
{/if}
