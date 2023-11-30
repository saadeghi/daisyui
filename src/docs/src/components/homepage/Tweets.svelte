<script>
  export let tweets
</script>

<div>
  <div class="h-32" />
  <div
    class="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-10 md:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n-1)]:translate-y-16">
    {#each tweets as tweet, index}
      <div class="card border-base-content/5 card-compact border text-start">
        <div class="card-body">
          <div class="flex items-center gap-2">
            <div class="avatar">
              <a
                href={`https://twitter.com/${tweet.username}/status/${tweet.id}`}
                target="_blank"
                rel="noopener, noreferrer"
                class="w-12">
                <img
                  loading="lazy"
                  src={`/twitter-profile-pics/${tweet.username}-72.webp`}
                  alt={tweet.name}
                  width="48"
                  height="48"
                  class="pointer-events-none rounded-full" />
              </a>
            </div>
            <div class="flex flex-col items-start text-xs">
              <div class="text-base-content font-bold">{tweet.name}</div>
              <div class="text-base-content/70">{tweet.bio}</div>
            </div>
          </div>
          <p class="text-base-content">{tweet.content}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
