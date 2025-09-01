---
title: Gemini setup for duskmoonUI
desc: Setup Gemini to correctly generate duskmoonUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <img src="https://img.duskmoonui.com/images/logos/gemini.webp" alt="Gemini" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Gemini LLM setup

### Quick use

[duskmoonui.com/llms.txt](https://duskmoonui.com/llms.txt) file is a compact, text version of duskmoonUI docs to help AI generate accurate duskmoonUI code based on your prompt.

In Chat window, enable `🔍 Deep research` feature, and add this before your prompt:

```md:prompt
https://duskmoonui.com/llms.txt
```

For example:

```md:prompt
https://duskmoonui.com/llms.txt give me a light duskmoonUI 5 theme with tropical color palette
```
