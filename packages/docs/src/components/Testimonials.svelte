<script>
  let { items, limit = -1 } = $props()
  function highlight(node) {
    const content = node.textContent
    node.innerHTML = content.replace(
      /\*(.*?)\*/g,
      "<mark class='-rotate-1 mx-1 scale-105 inline-block bg-[oklch(91.86%_0.2209_102.42)]/35 rounded-[1px] outline-2 outline-[oklch(91.86%_0.2209_102.42)]/35'>$1</mark>",
    )

    return {
      destroy() {
        node.innerHTML = content
      },
    }
  }
</script>

<div
  class="mx-auto max-w-7xl gap-8 px-10 md:columns-2 lg:columns-3 xl:columns-3 max-md:[&>*:nth-child(n+9)]:hidden"
>
  {#each [...items.testimonials]
    .map((t, i) => ({ ...t, originalIndex: i }))
    .sort(() => Math.random() - 0.5)
    .slice(0, limit) as testimonial, index}
    <div class="card card-sm bg-base-200 mb-8 break-inside-avoid rounded-ee-[2.5rem] text-start">
      <div class="card-body gap-4">
        <p
          class="text-base-content/70 px-1 text-[0.75rem] leading-[1.75] [text-wrap:balance]"
          use:highlight
        >
          {testimonial.content}
        </p>
        <div class="flex flex-row-reverse items-center gap-3">
          <div class="avatar">
            <a
              href={`https://twitter.com/${testimonial.username}/status/${testimonial.id}`}
              target="_blank"
              rel="noopener, noreferrer"
              class="outline-base-content w-12 rounded-full outline-offset-2 hover:brightness-90 focus-visible:outline-2"
            >
              <div
                class="size-12 rounded-full"
                style={`background-image: url('https://img.daisyui.com/generated/x.webp?${items.generated_at}'); background-size:auto 48px;background-repeat:no-repeat;background-position: -${
                  testimonial.originalIndex * 48
                }px 0px;`}
              ></div>
            </a>
          </div>
          <div class="flex flex-col items-end text-xs">
            <div class="text-base-content font-bold">{testimonial.name}</div>
            <div class="text-base-content/70">{testimonial.bio}</div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
