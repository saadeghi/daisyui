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
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      target="_blank"
      rel="nofollow noopener"
      href="https://swag.daisyui.com/"
      class="alert bg-base-300 flex w-full justify-center rounded-t-none border-none p-2 text-center text-xs shadow-none"
    >
      <div class="font-mono text-[0.6875rem]">
        <svg
          width="15"
          height="15"
          class="mx-1 inline-block size-4 -rotate-12 align-middle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none">
            <path
              d="M6 9V16.6841C6 18.4952 6 19.4008 6.58579 19.9635C7.89989 21.2257 15.8558 21.4604 17.4142 19.9635C18 19.4008 18 18.4952 18 16.6841V9"
              stroke="currentColor"
            >
            </path>
            <path
              d="M5.74073 12L3.04321 9.38915C2.34774 8.71602 2 8.37946 2 7.96123C2 7.543 2.34774 7.20644 3.04321 6.53331L5.04418 4.59664C5.39088 4.26107 5.56423 4.09329 5.77088 3.96968C5.97753 3.84607 6.21011 3.77103 6.67526 3.62096L8.32112 3.08997C8.56177 3.01233 8.68209 2.97351 8.76391 3.02018C8.84573 3.06686 8.87157 3.2013 8.92324 3.47018C9.19358 4.87684 10.4683 5.94185 12 5.94185C13.5317 5.94185 14.8064 4.87684 15.0768 3.47018C15.1284 3.2013 15.1543 3.06686 15.2361 3.02018C15.3179 2.97351 15.4382 3.01233 15.6789 3.08997L17.3247 3.62096C17.7899 3.77103 18.0225 3.84607 18.2291 3.96968C18.4358 4.09329 18.6091 4.26107 18.9558 4.59664L20.9568 6.53331C21.6523 7.20644 22 7.543 22 7.96123C22 8.37946 21.6523 8.71602 20.9568 9.38915L18.2593 12"
              stroke="currentColor"
            >
            </path>
          </g>
        </svg>
        Get daisyUI T-shirts, Hoodies, Mugs, Stickers, and more!
        <svg
          width="15"
          height="15"
          class="mx-1 inline-block size-4 rotate-12 align-middle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="#000000"
            ><path
              d="M4.083 5h10.834a1.08 1.08 0 0 1 1.083 1.077v8.615c0 2.38 -1.94 4.308 -4.333 4.308h-4.334c-2.393 0 -4.333 -1.929 -4.333 -4.308v-8.615a1.08 1.08 0 0 1 1.083 -1.077"
            ></path><path
              d="M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334c0 1.288 -1.12 2.333 -2.5 2.333h-2.5"
            ></path></g
          ></svg
        >
      </div>
    </a>
  </div>
{/if}
<!-- With timer -->
{#if false}
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
