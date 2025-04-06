---
title: Code editors and LLMs
desc: Setup your code editor to correctly generate daisyUI code based on your prompt.
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.  
Here's how to use daisyUI llms.txt in your code editor:

## <img src="https://img.daisyui.com/images/logos/vscode.webp" alt="VSCode" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> VSCode and Copilot

Copilot can generate daisyUI code for you.  
Add daisyUI's llms.txt file to your repo so that Copilot can use it by default.

1. Run this command to save the llms.txt file to `.vscode/daisyui.md`

  ```sh
  curl -L https://daisyui.com/llms.txt --create-dirs -o .vscode/daisyui.md
  ```

2. In `.vscode/settings.json` Add this:
  ```json:.vscode/settings.json
  {
    "github.copilot.chat.codeGeneration.instructions": [
      {
        "file": "./.vscode/daisyui.md"
      }
    ]
  }
  ```

## <img src="https://img.daisyui.com/images/logos/cursor.webp" alt="VSCode" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Cursor

1. Press <kbd class="kbd">⌘ CMD</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd>. Or if it's Windows, press <kbd class="kbd">⌃ Ctrl</kbd> + <kbd class="kbd">⇧ Shift</kbd> + <kbd class="kbd">P</kbd>.
2. Type `Add new custom docs`
3. Add this:
  ```
  https://daisyui.com/llms.txt
  ```
4. Now in chat window you can type `@daisyui` to provide daisyUI docs to Cursor.

## <img src="https://img.daisyui.com/images/logos/zed.webp" alt="VSCode" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Zed

- In chat window click <kbd class="kbd">+</kbd>, click <kbd class="kbd">🌐 Fetch</kbd> and add this URL:
  ```sh
  https://daisyui.com/llms.txt
  ```

## <img src="https://img.daisyui.com/images/logos/windsurf.webp" alt="VSCode" width="40" height="40" class="inline-block me-2 -mt-1 not-prose"> Windsurf

- In chat window type this and write your prompt
  ```sh
  @web https://daisyui.com/llms.txt
  ```
