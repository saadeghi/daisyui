---
title: Grok setup for daisyUI
desc: Setup Grok to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <img src="https://img.daisyui.com/images/logos/grok.webp" alt="Grok" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Grok LLM setup

### Quick use

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.

In Chat window, enable `꩜ Deep Search` feature, and add this before your prompt:

```
https://daisyui.com/llms.txt
```

For example:

```
https://daisyui.com/llms.txt give me a light daisyUI 5 theme with tropical color palette
```
