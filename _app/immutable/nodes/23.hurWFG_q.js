import{a as B,t as D,b as s,s as e,f as F}from"../chunks/disclose-version.CEbLymSa.js";import{h as a}from"../chunks/html.CRu8H1xh.js";import{l as J,s as R}from"../chunks/props.CBRLfZBG.js";import{M as V}from"../chunks/mdsvex-blog.Cqtokb61.js";var Z=D(`<p>The biggest advantage of using Svelte, aside from speed and developer experience, is that it’s a disappearing framework. It doesn’t add any runtime library to your app, so you would only ship the code that you actually use.</p> <p>If you haven’t used Svelte before, You would be surprised how easy it is to learn compared to other frameworks.</p> <h2 id="how-to-install-sveltekit"><a aria-hidden="true" tabindex="-1" href="#how-to-install-sveltekit"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install SvelteKit?</h2> <ol><li>To start new <a href="https://kit.svelte.dev/" rel="nofollow" target="_blank">SvelteKit</a> project, you can use the following command:</li></ol> <pre class="language-undefined"><!></pre> <p>It asks you a few questions.
Let’s pick <code>Skeleton project</code>:</p> <pre class="language-undefined"><!></pre> <ol start="2"><li>After the setup is done, go to the project directory and install dependencies and start the development server:</li></ol> <pre class="language-undefined"><!></pre> <p>It opens a new browser tab at <code>http://localhost:5173/</code> and you can see <code>Welcome to SvelteKit</code> message!</p> <p>That’s it! You have a new SvelteKit project.</p> <h2 id="how-to-add-tailwind-css-and-daisyui-to-sveltekit"><a aria-hidden="true" tabindex="-1" href="#how-to-add-tailwind-css-and-daisyui-to-sveltekit"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to add Tailwind CSS and daisyUI to SvelteKit?</h2> <ol><li>Install Tailwind CSS, PostCSS, Autoprefixer and daisyUI,
Then generate tailwind.config.js and postcss.config.js files:</li></ol> <pre class="language-undefined"><!></pre> <ol start="2"><li>Edit <code>tailwind.config.js</code> file. Add <code>content</code> and <code>plugins</code> to it:</li></ol> <pre class="language-diff"><!></pre> <ol start="3"><li>Add the following lines to <code>svelte.config.js</code> file:</li></ol> <pre class="language-diff"><!></pre> <ol start="4"><li>Create a new <code>src/routes/+layout.svelte</code> file and import <code>tailwindcss/tailwind.css</code> in it using this command</li></ol> <pre class="language-sh"><!></pre> <h2 id="how-to-use-daisyui-components-in-sveltekit"><a aria-hidden="true" tabindex="-1" href="#how-to-use-daisyui-components-in-sveltekit"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to use daisyUI components in SvelteKit?</h2> <p>Add a daisyUI button to <code>src/routes/+page.svelte</code> file:</p> <pre class="language-diff"><!></pre> <p>Run the development server and see the button with daisyUI styles!</p> <pre class="language-undefined"><!></pre> <p>Easy, right?</p> <p>Explore all the <a href="https://daisyui.com/components/" rel="nofollow" target="_blank">daisyUI components</a> you can use in your project,
And also check out the <a href="https://kit.svelte.dev/" rel="nofollow" target="_blank">SvelteKit docs</a> to learn more about SvelteKit.</p>`,1);const G={title:"How to install SvelteKit with daisyUI?",desc:"SvelteKit is a meta framework for building web applications. It is based on Svelte, a compiler that turns your Svelte components into fast and efficient JavaScript.",published:!0,date:"2023-11-25T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/install-sveltekit-daisyui.webp",tags:["Frameworks"]};function se(u,v){const f=J(v,["children","$$slots","$$events","$$legacy"]);V(u,R(()=>f,G,{children:(g,N)=>{var t=Z(),h=F(t),m=e(e(h,!0)),k=e(e(m,!0)),y=e(e(k,!0)),n=e(e(y,!0)),w=s(n);a(w,()=>'<code class="language-undefined">npm create svelte@latest my-app</code>');var b=e(e(n,!0)),o=e(e(b,!0)),_=s(o);a(_,()=>`<code class="language-undefined">┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ○ SvelteKit demo app
│  ● Skeleton project (Barebones scaffolding for your new SvelteKit app)
│  ○ Library project
└</code>`);var x=e(e(o,!0)),l=e(e(x,!0)),S=s(l);a(S,()=>`<code class="language-undefined">cd my-app
npm install
npm run dev -- --open</code>`);var j=e(e(l,!0)),I=e(e(j,!0)),K=e(e(I,!0)),$=e(e(K,!0)),i=e(e($,!0)),U=s(i);a(U,()=>`<code class="language-undefined">npm install -D tailwindcss postcss autoprefixer daisyui
npx tailwindcss init -p</code>`);var T=e(e(i,!0)),p=e(e(T,!0)),A=s(p);a(A,()=>`<code class="language-diff">/** @type &#123;import('tailwindcss').Config&#125; */
export default &#123;
<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> content: [],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> content: ['./src/**/*.&#123;html,svelte,js,ts&#125;'],
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> theme: &#123;
</span><span class="token prefix unchanged"> </span><span class="token line">   extend: &#123;&#125;,
</span><span class="token prefix unchanged"> </span><span class="token line"> &#125;,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> plugins: [],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> plugins: [require('daisyui')],
</span></span>&#125;</code>`);var C=e(e(p,!0)),r=e(e(C,!0)),H=s(r);a(H,()=>`<code class="language-diff">import adapter from '@sveltejs/adapter-auto';
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">import &#123; vitePreprocess &#125; from '@sveltejs/vite-plugin-svelte';
</span></span>/** @type &#123;import('@sveltejs/kit').Config&#125; */
const config = &#123;
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> preprocess: vitePreprocess(),
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> kit: &#123;
</span><span class="token prefix unchanged"> </span><span class="token line">   // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
</span><span class="token prefix unchanged"> </span><span class="token line">   // If your environment is not supported or you settled on a specific environment, switch out the adapter.
</span><span class="token prefix unchanged"> </span><span class="token line">   // See https://kit.svelte.dev/docs/adapters for more information about adapters.
</span><span class="token prefix unchanged"> </span><span class="token line">   adapter: adapter()
</span><span class="token prefix unchanged"> </span><span class="token line"> &#125;
</span></span>&#125;;

export default config;</code>`);var P=e(e(r,!0)),d=e(e(P,!0)),W=s(d);a(W,()=>`<code class="language-sh"><span class="token builtin class-name">echo</span> <span class="token string">'
&lt;script>
  import "tailwindcss/tailwind.css";
&lt;/script>

&lt;slot />
'</span> <span class="token operator">></span> src/routes/+layout.svelte</code>`);var E=e(e(d,!0)),q=e(e(E,!0)),c=e(e(q,!0)),L=s(c);a(L,()=>`<code class="language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;h1>Welcome to SvelteKit&lt;/h1>
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;p>Visit &lt;a href="https://kit.svelte.dev">kit.svelte.dev&lt;/a> to read the documentation&lt;/p>
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">&lt;button class="btn btn-primary">Hello daisyUI&lt;/button></span></span></code>`);var M=e(e(c,!0)),Y=e(e(M,!0)),z=s(Y);a(z,()=>'<code class="language-undefined">npm run dev -- --open</code>'),B(g,t)},$$slots:{default:!0},$$legacy:!0}))}export{se as component};
