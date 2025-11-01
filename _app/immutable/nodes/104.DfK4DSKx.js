import{a as L,t as P,b as s,s as a,f as D}from"../chunks/disclose-version.CEbLymSa.js";import{h as n}from"../chunks/html.CRu8H1xh.js";import{l as E,s as H}from"../chunks/props.CBRLfZBG.js";import{M as K}from"../chunks/mdsvex.B5TX9o5R.js";import{T as e}from"../chunks/Translate.DrWRpquh.js";var N=P('<h2 id=""><!></h2> <!> <pre class="language-json"><!></pre> <h2 id="-1"><a aria-hidden="true" tabindex="-1" href="#-1"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a><!></h2> <!> <div class="flex gap-4 py-6 justify-between max-w-3xl"><div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-box">rounded-box</div> <div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-btn">rounded-btn</div> <div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-badge">rounded-badge</div></div> <pre class="language-json"><!></pre> <h2 id="-2"><a aria-hidden="true" tabindex="-1" href="#-2"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a><!></h2> <!> <div class="rounded p-10 max-w-3xl " style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"><div class="glass w-full h-40 rounded-box grid place-content-center">Glass</div></div> <pre class="language-html"><!></pre> <h2 id="-3"><a aria-hidden="true" tabindex="-1" href="#-3"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a><!></h2> <!> <pre class="language-json"><!></pre> <h2 id="-4"><a aria-hidden="true" tabindex="-1" href="#-4"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a><!></h2> <!> <pre class="language-json"><!></pre>',1);const O={title:"Utility classes and CSS variables",desc:"Additional utility classes and CSS variables that daisyUI uses for components and themes",published:!0};function aa(h,v){const x=E(v,["children","$$slots","$$events","$$legacy"]);K(h,H(()=>x,O,{children:(_,Q)=>{var t=N(),o=D(t),$=s(o);e($,{text:"Color utility classes",$$legacy:!0});var r=a(a(o,!0));e(r,{text:"All daisyUI colors can be used as utility classes. Just like any other Tailwind CSS color. For example you can use `primary` color with any of Tailwind CSS color utilities.",$$legacy:!0});var p=a(a(r,!0)),w=s(p);n(w,()=>`<code class="language-json">bg-primary
to-primary
via-primary
from-primary
text-primary
ring-primary
fill-primary
caret-primary
stroke-primary
border-primary
divide-primary
accent-primary
shadow-primary
outline-primary
decoration-primary
placeholder-primary
ring-offset-primary

<span class="token comment">// You can also change the opacity</span>
bg-primary/<span class="token number">50</span></code>`);var c=a(a(p,!0)),S=s(c),z=a(S);e(z,{text:"Border radius",$$legacy:!0});var l=a(a(c,!0));e(l,{text:"These extended border radius are being used in daisyUI components. The values depend on the theme so you can have a different design decision about border radius of elements based on the active theme. You can use any Tailwind CSS border radius class for these names as well. Like `rounded-r-box` or `rounded-tr-btn`",$$legacy:!0});var C=a(a(l,!0)),i=a(a(C,!0)),j=s(i);n(j,()=>`<code class="language-json">rounded-box     <span class="token comment">// var(--rounded-box)</span>
                <span class="token comment">// for large sized components like card, modal, etc.</span>

rounded-btn     <span class="token comment">// var(--rounded-btn)</span>
                <span class="token comment">// for medium sized components like button, input, etc.</span>

rounded-badge   <span class="token comment">// var(--rounded-badge)</span>
                <span class="token comment">// for small sized components like badge, etc.</span></code>`);var d=a(a(i,!0)),T=s(d),q=a(T);e(q,{text:"Glass",$$legacy:!0});var m=a(a(d,!0));e(m,{text:"These glass class to give elements a matte glass effect",$$legacy:!0});var U=a(a(m,!0)),u=a(a(U,!0)),G=s(u);n(G,()=>'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>glass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Glass<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>');var g=a(a(u,!0)),I=s(g),Y=a(I);e(Y,{text:"CSS variables",$$legacy:!0});var b=a(a(g,!0));e(b,{text:"These CSS variables are being used internally. You can customize them in your custom theme in `tailwind.config.js` or you can even customize them with a class name like `[--animation-btn:0]`",$$legacy:!0});var k=a(a(b,!0)),A=s(k);n(A,()=>`<code class="language-json"><span class="token property">"--rounded-box"</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span>          <span class="token comment">// border radius rounded-box utility class, used in card and other large boxes</span>
<span class="token property">"--rounded-btn"</span><span class="token operator">:</span> <span class="token string">"0.5rem"</span><span class="token punctuation">,</span>        <span class="token comment">// border radius rounded-btn utility class, used in buttons and similar element</span>
<span class="token property">"--rounded-badge"</span><span class="token operator">:</span> <span class="token string">"1.9rem"</span><span class="token punctuation">,</span>      <span class="token comment">// border radius rounded-badge utility class, used in badges and similar</span>
<span class="token property">"--animation-btn"</span><span class="token operator">:</span> <span class="token string">"0.25s"</span><span class="token punctuation">,</span>       <span class="token comment">// duration of animation when you click on button</span>
<span class="token property">"--animation-input"</span><span class="token operator">:</span> <span class="token string">"0.2s"</span><span class="token punctuation">,</span>      <span class="token comment">// duration of animation for inputs like checkbox, toggle, radio, etc</span>
<span class="token property">"--btn-focus-scale"</span><span class="token operator">:</span> <span class="token string">"0.95"</span><span class="token punctuation">,</span>      <span class="token comment">// scale transform of button when you focus on it</span>
<span class="token property">"--border-btn"</span><span class="token operator">:</span> <span class="token string">"1px"</span><span class="token punctuation">,</span>            <span class="token comment">// border width of buttons</span>
<span class="token property">"--tab-border"</span><span class="token operator">:</span> <span class="token string">"1px"</span><span class="token punctuation">,</span>            <span class="token comment">// border width of tabs</span>
<span class="token property">"--tab-radius"</span><span class="token operator">:</span> <span class="token string">"0.5rem"</span><span class="token punctuation">,</span>         <span class="token comment">// border radius of tabs</span></code>`);var f=a(a(k,!0)),M=s(f),B=a(M);e(B,{text:"Component specific CSS variables",$$legacy:!0});var y=a(a(f,!0));e(y,{text:"These CSS variables are being used internally for a specific component",$$legacy:!0});var F=a(a(y,!0)),J=s(F);n(J,()=>`<code class="language-json">tab
  --tab-border <span class="token comment">// border width of tab</span>
  --tab-border-color <span class="token comment">// border color of tab</span>
  --tab-padding <span class="token comment">// horizontal padding of tab</span>
  --tab-bg <span class="token comment">// background color of tabs-lifted</span>
  --tab-radius <span class="token comment">// border radius of tabs-lifted</span>
  --tab-corner-bg <span class="token comment">// background color of tabs-lifted corner</span>
  --circle-pos <span class="token comment">// position of circle in the corner of tabs-lifted</span>
  --tab-grad <span class="token comment">// radial-gradient size in the corner of tabs-lifted</span>

countdown
  --value <span class="token comment">// value of countdown</span>

radial-progress
  --value <span class="token comment">// value of progress circle</span>
  --size <span class="token comment">// size of progress circle</span>
  --thickness <span class="token comment">// thickness of progress circle</span>

tooltip
  --tooltip-color <span class="token comment">// background color of tooltip</span>
  --tooltip-text-color <span class="token comment">// text color of tooltip</span>
  --tooltip-offset <span class="token comment">// offset of tooltip from target element</span>
  --tooltip-tail <span class="token comment">// size of tooltip tail</span>
  --tooltip-tail-offset <span class="token comment">// offset of tooltip tail from target element</span>

checkbox
  --chkbg <span class="token comment">// background color of checkbox</span>
  --chkfg <span class="token comment">// foreground color of checkbox</span>

toggle
  --tglbg <span class="token comment">// background color of toggle</span>
  --handleoffset <span class="token comment">// offset of toggle handle</span>

range
  --filler-size <span class="token comment">// size of range thumb</span>
  --filler-offset <span class="token comment">// offset of range thumb</span>
  --range-shdw <span class="token comment">// shadow color of range thumb</span>

glass
  --glass-blur <span class="token comment">// blur value of glass effect</span>
  --glass-opacity <span class="token comment">// opacity of glass effect</span>
  --glass-border-opacity <span class="token comment">// opacity of glass border</span>
  --glass-reflex-degree <span class="token comment">// degree of glass reflex</span>
  --glass-reflex-opacity <span class="token comment">// opacity of glass reflex</span>
  --glass-text-shadow-opacity <span class="token comment">// opacity of text shadow</span></code>`),L(_,t)},$$slots:{default:!0},$$legacy:!0}))}export{aa as component};
