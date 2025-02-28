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
{#if true}
  <div class="bg-base-100 flex justify-center rounded-sm p-2">
    <a
      href="/docs/v5/"
      class="btn btn-soft group btn-sm [width:clamp(20rem,100%,30rem)] rounded-full"
    >
      🎉 daisyUI 5 release notes
    </a>
  </div>
{/if}
<!-- With timer -->
{#if false}
  <div class="bg-base-100 flex justify-center rounded-sm p-1">
    <a
      href="/store/"
      class="alert hover:bg-base-300 hover:border-base-300 group flex max-w-xl justify-center rounded-full p-2 text-center text-xs transition-colors duration-300 ease-out"
    >
      <p class="leading-relaxed [text-wrap:balance]">
        <span class="text-base-content/70 group-hover:text-base-content">
          Use <code
            class="decoration-success font-mono tracking-wide underline decoration-wavy underline-offset-4"
          >
            DISCORD1000
          </code>
          code to get 25% discount on daisyUI store
          <Countdown
            from={new Date("2024-05-05T23:59:00.000000Z").toLocaleString("en-GB", dateFormat)}
            dateFormat="DD/MM/YYYY, HH:mm:ss"
          >
            {#snippet children({ remaining })}
              {#if remaining.done === false}
                <span class="border-base-content/20 rounded-full border border-dashed px-2 py-1">
                  <date
                    datetime={new Date("2024-02-11T23:59:00.000000Z").toLocaleString(
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
