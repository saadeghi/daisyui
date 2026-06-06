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
{#if true && !$page.url.pathname.startsWith("/store/daisyui-charts/")}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      href="/store/daisyui-charts/"
      class="alert border-base-300 hover:bg-base-200 bg-base-100 flex w-full justify-center rounded-none border-x-0 border-t-0 p-2 text-center text-xs shadow-none transition-colors"
    >
      <div class="font-mono text-[0.6875rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="inline-block size-4 opacity-40"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="#000000"
          >
            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
            <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"></path>
          </g>
        </svg>
        daisyUI Charts: 51 beautiful chart examples
        <span class="badge badge-xs badge-soft">+ SKILL.md file</span>
      </div>
    </a>
  </div>
{/if}
<!-- With timer -->
{#if false && new Date() < new Date("2026-05-28T00:00:00.000000Z")}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      data-sveltekit-preload-data
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
