<script>
  import { page } from "$app/stores"
</script>

<div class="hero not-prose min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold opacity-10 lg:text-7xl xl:text-9xl">
        {$page.status}
      </h1>
      <p class="mb-5">
        {$page.message}
      </p>
      <a class="btn" href="/">Go back</a>
    </div>
  </div>
</div>
