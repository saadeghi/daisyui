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
                style={`background-image: url('https://img.daisyui.com/generated/x.webp?${items.generated_at}'); 
                       background-size: ${spriteMetadata.imagesPerRow * 48}px auto;
                       background-repeat: no-repeat;
                       background-position: ${getBackgroundPosition(testimonial.originalIndex)};`}
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
