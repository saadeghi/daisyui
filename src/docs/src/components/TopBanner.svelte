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
  <div class="bg-base-100 flex justify-center rounded-sm p-1">
    <a
      href="/discord/"
      target="_blank"
      class="alert hover:bg-base-300 hover:border-base-300 group flex w-auto max-w-xl justify-center rounded-full p-2 px-6 text-center text-xs transition-colors duration-300 ease-out">
      <p class="inline-flex items-center justify-center gap-3 leading-relaxed">
        <svg class="inline-block shrink-0" width="16px" height="16px" viewBox="0 -28.5 256 256">
          <path
            d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
            fill="currentColor">
          </path>
        </svg>
        <span class="text-base-content/70 group-hover:text-base-content [text-wrap:balance]">
          daisyUI discord server is open! Join us for discussions, support, and updates.
        </span>
      </p>
    </a>
  </div>
{/if}
<!-- With timer -->
{#if false}
  <div class="bg-base-100 flex justify-center rounded-sm p-1">
    <a
      href="/store/"
      class="alert hover:bg-base-300 hover:border-base-300 group flex max-w-xl justify-center rounded-full p-2 text-center text-xs transition-colors duration-300 ease-out">
      <p class="leading-relaxed [text-wrap:balance]">
        <span class="text-base-content/70 group-hover:text-base-content">
          Use <code
            class="decoration-success font-mono tracking-wide underline decoration-wavy underline-offset-4">
            DISCORD1000
          </code>
          code to get 25% discount on daisyUI store
          <Countdown
            from={new Date("2024-05-05T23:59:00.000000Z").toLocaleString("en-GB", dateFormat)}
            dateFormat="DD/MM/YYYY, HH:mm:ss"
            let:remaining>
            {#if remaining.done === false}
              <span class="border-base-content/20 rounded-full border border-dashed px-2 py-1">
                <date
                  datetime={new Date("2024-02-11T23:59:00.000000Z").toLocaleString(
                    "en-GB",
                    dateFormat
                  )}
                  class="countdown font-mono text-xs">
                  {remaining.days * 24 + remaining.hours}h&nbsp;
                  <span style={`--value:${remaining.minutes}`}></span>
                  m&nbsp;
                  <span style={`--value:${remaining.seconds}`}></span>
                  s
                </date>
                remaining
              </span>
            {/if}
          </Countdown>
        </span>
      </p>
    </a>
  </div>
{/if}
