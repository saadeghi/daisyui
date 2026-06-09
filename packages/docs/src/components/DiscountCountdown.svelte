<script>
  import Countdown from "svelte-countdown"
  import { fade } from "svelte/transition"
  import { discountDateFormat } from "$lib/storeDiscount.js"

  let { expiresAt, compact = false, variant = "error", class: className = "" } = $props()

  const from = $derived(new Date(expiresAt).toLocaleString("en-GB", discountDateFormat))
  const datetime = $derived(from)
</script>

<Countdown {from} dateFormat="DD/MM/YYYY, HH:mm:ss">
  {#snippet children({ remaining })}
    {#if remaining.done === false}
      {#if compact}
        <span
          class={`badge badge-error badge-soft badge-xs font-mono tabular-nums ${className}`}
          transition:fade={{ duration: 400 }}
        >
          <date {datetime} class="countdown text-[0.625rem]">
            {#if remaining.days > 0}
              <span style={`--digits: 1;--value:${remaining.days};`}></span>:
            {/if}
            <span style={`--digits: 1;--value:${remaining.hours};`}></span>:
            <span style={`--digits: 2;--value:${remaining.minutes};`}></span>:
            <span style={`--digits: 2;--value:${remaining.seconds};`}></span>
          </date>
        </span>
      {:else}
        {@const gridClass =
          variant === "neutral"
            ? `grid ${remaining.days > 0 ? "grid-cols-4" : "grid-cols-3"} gap-2 text-center font-mono text-xs`
            : `grid ${remaining.days > 0 ? "grid-cols-4" : "grid-cols-3"} gap-1 text-center font-mono text-shadow-2xs text-shadow-white/30`}
        <div
          class={`shrink-0 after:hidden ${variant === "neutral" ? "tooltip" : ""} ${className}`}
          data-tip={variant === "neutral" ? "Remaining time" : undefined}
          transition:fade={{ duration: 400 }}
        >
          <date {datetime} class={gridClass}>
            {#if remaining.days > 0}
              <div
                class={variant === "neutral"
                  ? "border-neutral-content/40 rounded-field border border-dashed p-2"
                  : "bg-error text-error-content rounded-field flex flex-col pt-1"}
              >
                <span
                  class={variant === "neutral"
                    ? "countdown block text-2xl"
                    : "countdown block xl:mx-2"}
                >
                  <span style={`--digits: 1;--value:${remaining.days};`}></span>
                </span>
                <span
                  class={variant === "neutral"
                    ? "text-neutral-content/40 text-xs"
                    : "bg-error-content/20 m-px block rounded-[calc(var(--radius-field)-1px)] px-1 text-[0.5rem] uppercase text-shadow-none"}
                >
                  day
                </span>
              </div>
            {/if}
            <div
              class={variant === "neutral"
                ? "border-neutral-content/40 rounded-field border border-dashed p-2"
                : "bg-error text-error-content rounded-field flex flex-col pt-1"}
            >
              <span
                class={variant === "neutral"
                  ? "countdown block text-2xl"
                  : "countdown block xl:mx-2"}
              >
                <span style={`--digits: 1;--value:${remaining.hours};`}></span>
              </span>
              <span
                class={variant === "neutral"
                  ? "text-neutral-content/40 text-xs"
                  : "bg-error-content/20 m-px block rounded-[calc(var(--radius-field)-1px)] px-1 text-[0.5rem] uppercase text-shadow-none"}
              >
                hour
              </span>
            </div>
            <div
              class={variant === "neutral"
                ? "border-neutral-content/40 rounded-field border border-dashed p-2"
                : "bg-error text-error-content rounded-field flex flex-col pt-1"}
            >
              <span
                class={variant === "neutral"
                  ? "countdown block text-2xl"
                  : "countdown block xl:mx-2"}
              >
                <span style={`--digits: 2;--value:${remaining.minutes};`}></span>
              </span>
              <span
                class={variant === "neutral"
                  ? "text-neutral-content/40 text-xs"
                  : "bg-error-content/20 m-px block rounded-[calc(var(--radius-field)-1px)] px-1 text-[0.5rem] uppercase text-shadow-none"}
              >
                min
              </span>
            </div>
            <div
              class={variant === "neutral"
                ? "border-neutral-content/40 rounded-field border border-dashed p-2"
                : "bg-error text-error-content rounded-field flex flex-col pt-1"}
            >
              <span
                class={variant === "neutral"
                  ? "countdown block text-2xl"
                  : "countdown block xl:mx-2"}
              >
                <span style={`--digits: 2;--value:${remaining.seconds};`}></span>
              </span>
              <span
                class={variant === "neutral"
                  ? "text-neutral-content/40 text-xs"
                  : "bg-error-content/20 m-px block rounded-[calc(var(--radius-field)-1px)] px-1 text-[0.5rem] uppercase text-shadow-none"}
              >
                sec
              </span>
            </div>
          </date>
        </div>
      {/if}
    {/if}
  {/snippet}
</Countdown>
