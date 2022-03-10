<script>
  import { siteStats } from "@src/lib/data.js"
  import Countup from "svelte-countup"
  import { t } from "@src/lib/i18n"

  async function getGithubStars() {
    const res = await fetch("https://api.github.com/repos/saadeghi/daisyui")
    const json = await res.json()
    if (res.ok) {
      // return (Math.round(json.stargazers_count)).toLocaleString()
      return json.stargazers_count
    } else {
      return siteStats.githubStars
    }
  }
  const githubStars = getGithubStars()

  async function getNpmInstalls() {
    const res = await fetch(`https://api.npmjs.org/downloads/point/1970:${new Date().getFullYear() + 1}/daisyui`)
    const json = await res.json()
    if (res.ok) {
      // return (Math.round(json.downloads)).toLocaleString()
      return json.downloads
    } else {
      return siteStats.npmInstalls
    }
  }
  const npmInstalls = getNpmInstalls()
</script>

<div class="flex w-full justify-center">
  <div class="stats bg-base-200">
    <a href="/components" class="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
      <div class="stat-value tabular-nums">{siteStats.components}</div>
      <div class="stat-desc">{$t("components")}</div>
    </a>
    <a href="/docs/themes" class="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
      <div class="stat-value tabular-nums">{siteStats.themes}</div>
      <div class="stat-desc">{$t("themes")}</div>
    </a>
    <a href="https://github.com/saadeghi/daisyui" target="_blank" rel="noopener" class="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
      <div class="stat-value tabular-nums">
        {#await githubStars}
          {siteStats.githubStars}
        {:then value}
          {#if value > 0}
            <Countup initial={value * 0.9} {value} duration={1000} roundto={100} />
          {:else}
            {siteStats.githubStars}
          {/if}
        {:catch error}
          {siteStats.githubStars}
        {/await}
      </div>
      <div class="stat-desc">{$t("github-stars")}</div>
    </a>
    <a href="https://www.npmjs.com/package/daisyui" target="_blank" rel="noopener" class="stat place-items-center gap-0 bg-transparent px-10 hover:opacity-70">
      <div class="stat-value tabular-nums">
        {#await npmInstalls}
          {siteStats.npmInstalls}
        {:then value}
          {#if value > 0}
            <Countup initial={value * 0.9} {value} duration={1000} roundto={100} />
          {:else}
            {siteStats.npmInstalls}
          {/if}
        {:catch error}
          {siteStats.npmInstalls}
        {/await}
      </div>
      <div class="stat-desc">{$t("npm-installs")}</div>
    </a>
  </div>
</div>
