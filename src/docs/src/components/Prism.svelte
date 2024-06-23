<script context="module">
import _prism from "svelte-prism/src/import"
export const prism = _prism
export const highlight = _prism.highlightElement
export const globalConfig = { transform: (x) => x }
</script>

<script>
  import "prism-svelte"

  let { children, language = "javascript", source = "", transform = (x) => x, ...props } = $props()

  let element
  let formattedCode = $state()

	import { run } from 'svelte/legacy';
  run(() => {
		props && (source || element) && highlightCode();
	});

  function highlightCode() {
    const grammar = prism.languages[language]
    let body = source || element.textContent
    body = globalConfig.transform(body)
    body = transform(body)
    formattedCode = language === "none" ? body : prism.highlight(body, grammar, language)
  }

  $effect(() => {
    highlightCode()
  })
</script>

<code bind:this="{element}" style="display:none">
  {@render children()}
</code>

<pre class="language-{language}" command-line data-output="2-17"><code
    class="language-{language}">{#if language === "none"}{formattedCode}{:else}{@html formattedCode}{/if}</code></pre>
