<script>
  import Countdown from "svelte-countdown"

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
{#if false}
  <div class="bg-base-100 flex justify-center rounded-sm p-2">
    <a
      href="/docs/upgrade/"
      class="btn btn-soft group btn-sm [width:clamp(20rem,100%,30rem)] rounded-full"
    >
      🎉 daisyUI 5.0 upgrade guide
    </a>
  </div>
{/if}
<!-- With timer -->
{#if true}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      data-sveltekit-preload-data
      href="/store/475050/"
      class="alert bg-base-300 flex w-full justify-center rounded-none border-none p-2 text-center text-xs shadow-none"
    >
      <p class="leading-relaxed [text-wrap:balance]">
        <span class="text-base-content/70">
          🎉 Scalo template is live – Use code <code
            class="decoration-success font-mono tracking-wide underline decoration-wavy underline-offset-4"
          >
            SCALO20
          </code>
          to get 20% discount.
          <span class="inline-block w-2"></span>
          <Countdown
            from={new Date("2025-04-19T01:01:00.000000Z").toLocaleString("en-GB", dateFormat)}
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
