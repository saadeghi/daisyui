<script>
  import { siteStats } from "@src/lib/data.js"
</script>

<div class="flex w-full justify-center">
  <div class="stats bg-base-200">
    <a href="/components/button" class="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
      <div class="stat-value">{siteStats.components}</div>
      <div class="stat-desc">Components</div>
    </a>
    <a href="/docs/themes" class="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
      <div class="stat-value">{siteStats.themes}</div>
      <div class="stat-desc">Themes</div>
    </a>
    <a href="https://github.com/saadeghi/daisyui" target="_blank" rel="noopener" class="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
      <div class="stat-value">{siteStats.githubStars}</div>
      <div class="stat-desc">Github Stars</div>
    </a>
    <a href="https://www.npmjs.com/package/daisyui" target="_blank" rel="noopener" class="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
      <div class="stat-value">{siteStats.npmInstalls}</div>
      <div class="stat-desc">NPM Installs</div>
    </a>
  </div>
</div>
