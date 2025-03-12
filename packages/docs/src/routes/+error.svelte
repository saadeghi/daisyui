<script>
  import { page } from "$app/stores"
</script>

<div class="grid min-h-[80vh] font-[sans-serif]">
  <div class="place-content-center text-center">
    <h1 class="text-4xl font-black opacity-10">Error</h1>
    <p>{$page.error.message}</p>
    <a class="underline" href="/">Go back</a>
  </div>
</div>

<style>
  .grid {
    display: grid;
  }
  .min-h-\[80vh\] {
    min-height: 80vh;
  }
  .place-content-center {
    place-content: center;
  }
  .text-center {
    text-align: center;
  }
  .font-\[sans-serif\] {
    font-family: sans-serif;
  }
  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  .font-black {
    font-weight: 900;
  }
  .underline {
    text-decoration-line: underline;
  }
  .opacity-10 {
    opacity: 0.1;
  }
</style>
