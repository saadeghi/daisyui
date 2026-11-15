<script>
  import { page } from "$app/stores"
  import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
  import Countdown from "svelte-countdown"
  import { onMount } from "svelte"
  const attributes = $derived($page.data.specialDiscount?.data?.attributes)

  let now = $state(Date.now())
  let blackFriday = $state(null)
  let copyResult = $state(null)
  const copyFeedbackDuration = 3000
  const blackFridayUrl = `${PUBLIC_DAISYUI_API_PATH}/api/discount_bf.json`
  const millisecondsPerSecond = 1000
  const secondsPerMinute = 60
  const minutesPerHour = 60

  function selectDiscount(promotion, timestamp) {
    if (
      !Array.isArray(promotion?.discounts) ||
      !(
        Date.parse(promotion.starts_at) <= timestamp && timestamp < Date.parse(promotion.expires_at)
      )
    )
      return null

    for (const discount of promotion.discounts) {
      if (!discount) continue
      const start = Date.parse(discount.starts_at)
      const end = Date.parse(discount.expires_at)
      if (
        typeof discount.code === "string" &&
        discount.code.length > 0 &&
        Number.isFinite(discount.percentage) &&
        discount.percentage > 0 &&
        start <= timestamp &&
        timestamp < end
      ) {
        const next = promotion.discounts.find(
          (candidate) =>
            candidate &&
            Date.parse(candidate.starts_at) === end &&
            Date.parse(candidate.expires_at) > end &&
            end < Date.parse(promotion.expires_at) &&
            Number.isFinite(candidate.percentage) &&
            candidate.percentage > 0 &&
            candidate.percentage < discount.percentage,
        )
        const previous = promotion.discounts.find(
          (candidate) =>
            candidate &&
            Date.parse(candidate.expires_at) === start &&
            Date.parse(candidate.starts_at) < start &&
            Number.isFinite(candidate.percentage) &&
            candidate.percentage > discount.percentage,
        )
        return { discount, previous, next, start, end }
      }
    }
    return null
  }

  const activeDiscount = $derived(selectDiscount(blackFriday, now))
  const copyFeedback = $derived(
    copyResult?.code === activeDiscount?.discount.code && now < copyResult?.until
      ? copyResult
      : null,
  )
  const secondsLeft = $derived(
    activeDiscount ? Math.max(0, Math.ceil((activeDiscount.end - now) / millisecondsPerSecond)) : 0,
  )
  const hoursLeft = $derived(Math.floor(secondsLeft / (secondsPerMinute * minutesPerHour)))
  const minutesLeft = $derived(Math.floor(secondsLeft / secondsPerMinute) % minutesPerHour)
  const remainingSeconds = $derived(secondsLeft % secondsPerMinute)
  const elapsedDay = $derived(
    activeDiscount
      ? Math.min(
          1,
          Math.max(0, (now - activeDiscount.start) / (activeDiscount.end - activeDiscount.start)),
        )
      : 0,
  )

  onMount(() => {
    const controller = new AbortController()
    fetch(blackFridayUrl, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((promotion) => {
        if (!controller.signal.aborted) blackFriday = promotion
      })
      .catch(() => {
        // This optional banner stays hidden if the API is unavailable.
      })
    const timer = setInterval(() => {
      now = Date.now()
    }, 1000)
    return () => {
      clearInterval(timer)
      controller.abort()
    }
  })

  const dateFormat = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }
</script>

<!-- decremental -->
{#if true && activeDiscount}
  <section
    dir="ltr"
    aria-label="Black Friday daily discounts in UTC"
    class="bg-neutral text-neutral-content border-neutral-content/10 border-b px-4 py-2 font-mono text-xs sm:px-6"
  >
    <div
      class="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
    >
      <div class="min-w-0 flex flex-col gap-1">
        <div class="font-title text-base font-bold uppercase">
          Black Friday discount
        </div>
        <div class="text-[0.6875rem] opacity-60 mb-3">
          For daisyUI
          <a href="/blueprint/" class="link underline-offset-3">MCP</a>,
          <a href="/store/daisyui-figma-library/" class="link underline-offset-3">Figma</a> and
          <a href="/store/" class="link underline-offset-3">templates</a>
        </div>
        <div class="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.6875rem]">
          <span>Use code</span>
          <div class="tooltip tooltip-error" class:tooltip-open={copyFeedback?.success === true}>
            <div class="tooltip-content text-xs">
              {copyFeedback?.success ? "copied" : "copy"}
            </div>
            <button
              type="button"
              class="btn btn-xs border-neutral-content/25 bg-neutral-content/10 text-neutral-content hover:border-neutral-content/50 hover:bg-neutral-content/20 shadow-none"
              aria-label={`Copy discount code ${activeDiscount.discount.code}`}
              onclick={async () => {
                const code = activeDiscount.discount.code
                try {
                  await navigator.clipboard.writeText(code)
                  copyResult = { code, success: true, until: Date.now() + copyFeedbackDuration }
                } catch {
                  copyResult = { code, success: false, until: Date.now() + copyFeedbackDuration }
                }
              }}
            >
              <code class="font-mono text-xs font-normal tracking-wide select-all"
                >{activeDiscount.discount.code}</code
              >
              <svg
                aria-hidden="true"
                class="size-3.5 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {#if copyFeedback?.success}
                  <path d="m5 12 4 4L19 6" />
                {:else}
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <path d="M16 8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4" />
                {/if}
              </svg>
            </button>
          </div>
          <span class="inline-flex items-center gap-1.5 whitespace-nowrap">
            Expires in
            <span
              class="countdown text-error font-mono text-xs font-semibold tabular-nums"
              role="timer"
              aria-live="off"
              aria-label={`${hoursLeft} hours, ${minutesLeft} minutes, ${remainingSeconds} seconds left for today's discount`}
              dir="ltr"
              title={`Ends ${new Date(activeDiscount.end).toISOString().slice(0, 16).replace("T", " ")} UTC`}
            >
              <span aria-hidden="true" style={`--value:${hoursLeft}; --digits:2;`}>{hoursLeft}</span
              >:<span aria-hidden="true" style={`--value:${minutesLeft}; --digits:2;`}
                >{minutesLeft}</span
              >:<span aria-hidden="true" style={`--value:${remainingSeconds}; --digits:2;`}
                >{remainingSeconds}</span
              >
            </span>
          </span>
        </div>
        <span
          role="status"
          class="block text-[0.625rem]"
          class:sr-only={copyFeedback?.success !== false}
        >
          {#if copyFeedback?.success}Copied!{:else if copyFeedback?.success === false}Copy failed.
            Select the code to copy it.{/if}
        </span>
      </div>
      <div
        class="relative h-16 w-full max-w-80 shrink-0 self-center"
        dir="ltr"
        aria-label="Daily discount time indicator (UTC)"
      >
        <div
          class="absolute inset-x-0 top-5 h-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          aria-hidden="true"
        >
          <progress
            class="progress text-neutral-content absolute -left-1/2 block h-1 w-[200%] rounded-none"
            value={3 + elapsedDay}
            max="6"
          ></progress>
        </div>
        {#if activeDiscount.previous}
          <div
            class="text-neutral-content/55 absolute start-1/6 top-0 flex -translate-x-1/2 flex-col items-center text-[0.625rem]"
          >
            <span>Yesterday</span>
            <span
              class="bg-neutral border-neutral-content my-2.75 h-2 w-px border-s"
              aria-hidden="true"
            ></span>
            <span class="text-sm leading-none tabular-nums line-through"
              >{activeDiscount.previous ? `${activeDiscount.previous.percentage}%` : ""}</span
            >
          </div>
        {/if}
        <div
          class="absolute start-1/2 top-0 flex -translate-x-1/2 flex-col items-center text-[0.625rem]"
        >
          <span class="font-bold">Today</span>
          <span class="bg-neutral-content my-2.75 h-2 w-0.5" aria-hidden="true"></span>
          <span class="text-lg leading-none font-semibold font-title tabular-nums text-error"
            >{activeDiscount.discount.percentage}%</span
          >
        </div>
        {#if activeDiscount.next}
          <div
            class="text-neutral-content/65 absolute start-5/6 top-0 flex -translate-x-1/2 flex-col items-center text-[0.625rem]"
          >
            <span>Tomorrow</span>
            <span
              class="bg-neutral border-neutral-content/30 my-2.75 h-2 w-px border-s"
              aria-hidden="true"
            ></span>
            <span class="text-sm leading-none tabular-nums"
              >{activeDiscount.next ? `${activeDiscount.next.percentage}%` : "—"}</span
            >
          </div>
        {/if}
      </div>
    </div>
  </section>
{/if}

<!-- Without timer -->
{#if false && !$page.url.pathname.startsWith("/blueprint/")}
  <div class="bg-base-100 flex justify-center rounded-sm">
    <a
      href="/blueprint/"
      class="alert border-base-300 hover:bg-base-200 bg-base-100 flex w-full justify-center rounded-none border-x-0 border-t-0 p-2 text-center text-xs shadow-none transition-colors"
    >
      <div class="font-mono text-[0.6875rem] lg:tracking-wide" dir="ltr">
        Stop generating AI slop. Use <span class="text-blue-500 uppercase lg:tracking-wider"
          >Blueprint</span
        > MCP server →
      </div>
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
{#if false && attributes?.expires_at && now < new Date(attributes.expires_at).getTime()}
  <div class="bg-base-100 h-20 overflow-y-auto sm:h-10">
    <div class="bg-base-100 flex min-h-full justify-center rounded-sm">
      <a
        data-sveltekit-preload-code="viewport"
        href={attributes.banner_url || "/store/"}
        class="alert border-base-300 hover:bg-base-200 bg-base-100 flex w-full justify-center rounded-none border-x-0 border-t-0 p-2 text-center text-[0.6875rem] shadow-none transition-colors"
      >
        <p class="leading-relaxed [text-wrap:balance]">
          <span class="text-base-content/70">
            <span class="font-bold">{attributes.name}</span>
            {attributes.banner_text || ""} - Use code
            <code
              class="decoration-error font-mono tracking-wide underline decoration-wavy underline-offset-4"
            >
              {attributes.code}
            </code>
            to get {attributes.amount}% discount
            <Countdown
              from={new Date(attributes.expires_at).toLocaleString("en-GB", dateFormat)}
              dateFormat="DD/MM/YYYY, HH:mm:ss"
            >
              {#snippet children({ remaining })}
                {#if remaining.done === false}
                  <span class="border-base-content/20 rounded-full border border-dashed px-2 py-1">
                    <date datetime={attributes.expires_at} class="countdown font-mono text-xs">
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
  </div>
{/if}
