---
title: Grok setup for duskmoonUI
desc: Setup Grok to correctly generate duskmoonUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## <img src="https://img.duskmoonui.com/images/logos/grok.webp" alt="Grok" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Grok LLM setup

### Quick use

[duskmoonui.com/llms.txt](https://duskmoonui.com/llms.txt) file is a compact, text version of duskmoonUI docs to help AI generate accurate duskmoonUI code based on your prompt.

#### Through Deep Search

In Chat window, enable `꩜ Deep Search` feature, and add this before your prompt:

```md:prompt
https://duskmoonui.com/llms.txt
```

For example:

```md:prompt
https://duskmoonui.com/llms.txt give me a light duskmoonUI 5 theme with tropical color palette
```

#### Through Workspace (SuperGrok Only)

This method gives much faster result as you don't need the `꩜ Deep Search` feature.

You can create a dedicated `Workspace` where you can upload the `llms.txt` file. To download the file, visit [https://duskmoonui.com/llms.txt](https://duskmoonui.com/llms.txt), right-click, and select "Save As...". Once downloaded, upload the file as an attachment in the Grok Workspace.

From then on, every conversation in this Workspace will have access to the duskmoonUI documentation.
