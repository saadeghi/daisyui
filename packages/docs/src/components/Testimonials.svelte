<script>
  let { items, limit = -1 } = $props()

  // Default sprite metadata in case JSON doesn't provide it
  let spriteMetadata = $state({
    imagesPerRow: 0,
    rows: 0,
    avatarSize: 72,
  })

  $effect(() => {
    // Extract sprite metadata if available in the items
    if (items && items.sprite) {
      spriteMetadata = items.sprite
    } else {
      // Legacy format - assume single row
      spriteMetadata = {
        imagesPerRow: items?.testimonials?.length || 0,
        rows: 1,
        avatarSize: 72,
      }
    }
  })

  // Calculate background position based on index and sprite metadata
  function getBackgroundPosition(index) {
    const row = Math.floor(index / spriteMetadata.imagesPerRow)
    const col = index % spriteMetadata.imagesPerRow
    // Scale down positions to match the display size (48px vs 72px source)
    const scale = 48 / spriteMetadata.avatarSize
    return `${-col * spriteMetadata.avatarSize * scale}px ${-row * spriteMetadata.avatarSize * scale}px`
  }

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
  class="[&_a]:outline-base-content [&_.card]:bg-base-200 [&_p]:text-base-content/70 mx-auto max-w-7xl gap-8 px-10 md:columns-2 lg:columns-3 xl:columns-3 [&_.card]:mb-8 [&_.card]:break-inside-avoid [&_.card]:rounded-ee-[2.5rem] [&_.card]:text-start [&_.card-body>div]:flex [&_.card-body>div]:flex-row-reverse [&_.card-body>div]:items-center [&_.card-body>div]:gap-3 [&_a]:w-12 [&_a]:rounded-full [&_a]:outline-offset-2 [&_a]:hover:brightness-90 [&_a]:focus-visible:outline-2 [&_a_div]:size-12 [&_a_div]:rounded-full [&_a_div]:bg-no-repeat [&_p]:px-1 [&_p]:text-[0.75rem] [&_p]:leading-[1.75] [&_p]:[text-wrap:balance] max-md:[&>*:nth-child(n+9)]:hidden"
>
  {#each [...items.testimonials]
    .map((t, i) => ({ ...t, originalIndex: i }))
    .sort(() => Math.random() - 0.5)
    .slice(0, limit) as testimonial, index}
    <div class="card card-sm">
      <div class="card-body gap-4">
        <p use:highlight>
          {testimonial.content}
        </p>
        <div>
          <div class="avatar">
            <a
              aria-label={`${testimonial.name}`}
              href={`https://x.com/${testimonial.username}/status/${testimonial.id}`}
              target="_blank"
              rel="noopener, noreferrer"
            >
              <div
                style={`background-image: url('https://img.daisyui.com/generated/x.webp?${items.generated_at}'); 
                       background-size: ${spriteMetadata.imagesPerRow * 48}px auto;
                       background-position: ${getBackgroundPosition(testimonial.originalIndex)};`}
              ></div>
            </a>
          </div>
          <div class="flex flex-col items-end gap-1">
            <div class="text-xs font-semibold">{testimonial.name}</div>
            <div class="text-base-content/60 text-[0.625rem]">{testimonial.bio}</div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
