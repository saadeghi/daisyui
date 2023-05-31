<script>
  import Changelog from "../../../../../../CHANGELOG.md"
</script>

<div class="changelog-body">
  <Changelog />
</div>

<style global>
  .prose .changelog-body h1 + p {
    display: none;
  }
  .changelog-body img {
    @apply rounded-box border border-base-content/10;
  }
</style>
