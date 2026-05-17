---
title: Using daisyUI means less LLM cost and faster UI generation
desc: If AI is writing the code, does it still matter if we use an efficient component library? See how Tailwind and daisyUI reduce token costs and speed up UI generation.
published: true
date: 2026-5-17
author: Pouya Saadeghi
thumbnail: https://img.daisyui.com/images/blog/generate-ui-code-with-less-tokens.webp
tags:
  - Insights
---

<script>
  import Translate from "$components/Translate.svelte"
</script>

## More code = more tokens, more cost, slower iteration

The more you use LLM to generate UI code, the more you realize the importance of minimizing the codebase. When LLMs read and write UI code, verbosity increases token cost, hits context limits, and slows iteration.  

The core issue is simple: most UI workflows produce too much text.

If we tell an LLM to "add a button," it must generate classes and styles. With Tailwind CSS, that can be 40 utility classes for one button. With raw CSS, it is even more code. You still cannot be sure it handles active states, focus states, and dark mode correctly.

This scales fast. In a 100-page project, the model can consume hundreds of thousands of tokens, pushing context limits and cost.

### Minimal contrast

**Without daisyUI**

```html
<button class="bg-zinc-100 border font-semibold 
text-zinc-900 text-sm px-4 duration-200 py-2.5 transition-all 
hover:border-zinc-300 hover:bg-zinc-200 focus-visible:outline-2 
focus-visible:outline-offset-2 focus-visible:outline-zinc-900 
active:translate-y-[0.5px] inline-flex gap-2 rounded-sm 
active:border-zinc-300 active:bg-zinc-200 active:shadow-none 
text-center align-middle cursor-pointer border-zinc-200 
dark:border-zinc-700 dark:bg-neutral-700 dark:text-zinc-300 
dark:hover:border-zinc-950 dark:hover:bg-zinc-950 
dark:focus-visible:outline-zinc-200 dark:active:border-zinc-950 
dark:active:bg-zinc-900"></button>
```

**With daisyUI**

```html
<button class="btn"></button>
```

### The difference for LLMs

33 classes vs 1 class. That is about 97% fewer classes for one element.

At project scale, this multiplies quickly. A page has many elements with long class lists, and this repeats across 100 pages. Even a simple button color change can force the model to rewrite thousands of tokens across multiple passes.

And this is superior, especially using LLMs, because the CSS for `btn` class does not live in your code base. It's in node_modules, so the LLM does not need to maintain it. It can just call the class name and know what it does. A semantic class name, understood by the model, is much more efficient than a long list of utility classes that the model must read, interpret and maintain.


## Common approaches and their token costs

Assumptions for 100 files of UI code:
- Tailwind-only average HTML per page: 10 KB
- Tailwind + daisyUI average HTML per page: 2.1 KB (about 79% smaller)
- Token estimate: A token is about 4 characters (A common approximation - depends on the model)
- "Project read" means what the LLM needs in context to do safe edits: pages, shared components, and style references

| Approach | Approx UI code to read (100 files) | Approx tokens spent |
| --- | --- | --- |
| Custom CSS | ~1.8 MB (HTML + CSS files + style dependencies) | ~450K |
| Custom components | ~1.4 MB (components + docs/examples needed for syntax) | ~350K |
| Tailwind only | ~1.0 MB | ~250K |
| Tailwind + daisyUI | ~210 KB | ~52.5K |

For a 100-file project, Tailwind + daisyUI saves approximately:
- **197.5K tokens** per full read pass vs Tailwind-only
- **297.5K tokens** per full read pass vs custom component libraries
- **397.5K tokens** per full read pass vs custom CSS

At 20 full passes in a real AI workflow, that is:
- **3.95M tokens saved** vs Tailwind-only
- **5.95M tokens saved** vs custom component libraries
- **7.95M tokens saved** vs custom CSS

These are rough estimates for an average project. Tooling can cut cost with summarization, caching, retrieval, or tool calls, but verbose UI code still slows AI workflows and increases token spend.

## How Tailwind + daisyUI makes a difference

Turns out, with less CSS class names, it's easier for humans to read and maintain, it's even more efficient for LLMs to maintain and generate. The model can focus on the structure and logic of the UI, rather than parsing through long lists of utility classes and dealing with lower level CSS details.

**Read efficiency for LLMs (1K pages)**

- Tailwind-only: about 10 MB HTML, about 2.5M tokens
- Tailwind + daisyUI: about 2.1 MB HTML, about 525K tokens
- Saved: about **1.975M tokens** per full read pass

**Write efficiency for LLMs (1K pages)**

LLMs generate fewer class names, shorter diffs, and shorter completions. At 1K pages, output volume drops by about the same 79%, reducing completion time and retry cost.

**End result efficiency**

Smaller HTML means fewer bytes over the network. For 1K pages, raw HTML transfer drops from about 10 MB to about 2.1 MB. Compression shrinks both, but the percentage gap stays similar.

Tailwind gives a utility system AI already knows. daisyUI removes repetitive class noise on top. For AI-assisted UI work, this is the huge advantage: lower token cost, more context headroom, faster generation, and smaller pages for browsers.
