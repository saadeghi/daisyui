---
title: Use daisyUI with Tachyons
desc:
thumbnail: https://api.lorem.space/image/album?w=500&h=500&hash=500B67FB
published: true
---

<script>
import { pkgVersion } from '$lib/util';
</script>

daisyUI works best with Tailwind CSS but you can use it as a component library with other utility-first libraries such as Tachyons.

- Add daisyUI <code>{pkgVersion()}</code> + Tachyons CSS files to the `head` tag of your HTML:

<pre class="language-html"><code class="language-html">
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/daisyui@{pkgVersion()}/dist/full.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/tachyons@latest/css/tachyons.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>
