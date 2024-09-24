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
  <div class="bg-base-100 flex justify-center rounded-sm p-1">
    <a
      href="/store/"
      target="_blank"
      class="alert hover:bg-base-300 hover:border-base-300 group flex w-auto max-w-xl justify-center rounded-full p-2 px-6 text-center text-xs transition-colors duration-300 ease-out">
      <p class="inline-flex items-center justify-center gap-3 leading-relaxed">
        <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd" transform="translate(4)">
            <circle cx="12" cy="12" r="4" fill="#19BCFE"/>
            <path fill="#09CF83" d="M4,24 C6.209139,24 8,22.209139 8,20 C8,19.3969461 8,18.0636128 8,16 C6.20303877,16 4.86970543,16 4,16 C1.790861,16 0,17.790861 0,20 C0,22.209139 1.790861,24 4,24 Z"/>
            <path fill="#A259FF" d="M4,16 C4.73637967,16 6.069713,16 8,16 L8,8 C6.069713,8 4.73637967,8 4,8 C1.790861,8 0,9.790861 0,12 C0,14.209139 1.790861,16 4,16 Z"/>
            <path fill="#F24E1E" d="M4,8 C4.73637967,8 6.069713,8 8,8 L8,0 C6.069713,0 4.73637967,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z"/>
            <path fill="#FF7262" d="M12,8 L8,8 L8,8 L8,0 L12,0 L12,0 C14.209139,0 16,1.790861 16,4 C16,6.209139 14.209139,8 12,8 Z"/>
          </g>
        </svg>
        <span class="text-base-content/70 group-hover:text-base-content [text-wrap:balance]">
          Official daisyUI Figma Library is now available for designers!
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
            from="{new Date('2024-05-05T23:59:00.000000Z').toLocaleString('en-GB', dateFormat)}"
            dateFormat="DD/MM/YYYY, HH:mm:ss"
            let:remaining>
            {#if remaining.done === false}
              <span class="border-base-content/20 rounded-full border border-dashed px-2 py-1">
                <date
                  datetime="{new Date('2024-02-11T23:59:00.000000Z').toLocaleString(
                    'en-GB',
                    dateFormat
                  )}"
                  class="countdown font-mono text-xs">
                  {remaining.days * 24 + remaining.hours}h&nbsp;
                  <span style="{`--value:${remaining.minutes}`}"></span>
                  m&nbsp;
                  <span style="{`--value:${remaining.seconds}`}"></span>
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
