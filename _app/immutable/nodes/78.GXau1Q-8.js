import{s as Ge,z as ve,A as ze,e as l,a as p,H as N,c as i,b as y,h as a,d as c,x as O,g as K,i as o,M as Ye,j as s,k as ge,n as De}from"../chunks/scheduler.jKSdkVml.js";import{S as Ve,i as Be,c as f,b as g,m as b,t as k,a as $,d as h}from"../chunks/index.JO8G5L4l.js";import{g as Fe,a as Le}from"../chunks/spread.rEx3vLA9.js";import{M as Je}from"../chunks/mdsvex.f1nFEeby.js";import{T as x}from"../chunks/Translate.815zePbJ.js";function Ke(J){let n,d,v,u,r,m,L,Ae=`<code class="language-json">bg-primary
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
bg-primary/<span class="token number">50</span></code>`,Q,C,_,ye='<span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span>',q,W,A,X,E,xe='<div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-box">rounded-box</div> <div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-btn">rounded-btn</div> <div class="w-28 aspect-square grid place-content-center text-xs bg-primary text-primary-content rounded-badge">rounded-badge</div>',Z,P,ee,Pe=`<code class="language-json">rounded-box     <span class="token comment">// var(--rounded-box)</span>
                <span class="token comment">// for large sized components like card, modal, etc.</span>

rounded-btn     <span class="token comment">// var(--rounded-btn)</span>
                <span class="token comment">// for medium sized components like button, input, etc.</span>

rounded-badge   <span class="token comment">// var(--rounded-badge)</span>
                <span class="token comment">// for small sized components like badge, etc.</span></code>`,ae,M,w,_e='<span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span>',I,te,R,se,T,we='<div class="glass w-full h-40 rounded-box grid place-content-center">Glass</div>',ne,U,oe,Ie='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>glass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Glass<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>',re,j,H,Te='<span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span>',G,le,Y,pe,D,ie,Re=`<code class="language-json"><span class="token property">"--rounded-box"</span><span class="token operator">:</span> <span class="token string">"1rem"</span><span class="token punctuation">,</span>          <span class="token comment">// border radius rounded-box utility class, used in card and other large boxes</span>
<span class="token property">"--rounded-btn"</span><span class="token operator">:</span> <span class="token string">"0.5rem"</span><span class="token punctuation">,</span>        <span class="token comment">// border radius rounded-btn utility class, used in buttons and similar element</span>
<span class="token property">"--rounded-badge"</span><span class="token operator">:</span> <span class="token string">"1.9rem"</span><span class="token punctuation">,</span>      <span class="token comment">// border radius rounded-badge utility class, used in badges and similar</span>
<span class="token property">"--animation-btn"</span><span class="token operator">:</span> <span class="token string">"0.25s"</span><span class="token punctuation">,</span>       <span class="token comment">// duration of animation when you click on button</span>
<span class="token property">"--animation-input"</span><span class="token operator">:</span> <span class="token string">"0.2s"</span><span class="token punctuation">,</span>      <span class="token comment">// duration of animation for inputs like checkbox, toggle, radio, etc</span>
<span class="token property">"--btn-focus-scale"</span><span class="token operator">:</span> <span class="token string">"0.95"</span><span class="token punctuation">,</span>      <span class="token comment">// scale transform of button when you focus on it</span>
<span class="token property">"--border-btn"</span><span class="token operator">:</span> <span class="token string">"1px"</span><span class="token punctuation">,</span>            <span class="token comment">// border width of buttons</span>
<span class="token property">"--tab-border"</span><span class="token operator">:</span> <span class="token string">"1px"</span><span class="token punctuation">,</span>            <span class="token comment">// border width of tabs</span>
<span class="token property">"--tab-radius"</span><span class="token operator">:</span> <span class="token string">"0.5rem"</span><span class="token punctuation">,</span>         <span class="token comment">// border radius of tabs</span></code>`,ce,z,S,He='<span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span>',V,me,B,de,F,ue,Ue=`<code class="language-json">tab
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
  --glass-text-shadow-opacity <span class="token comment">// opacity of text shadow</span></code>`,fe;return d=new x({props:{text:"Color utility classes"}}),u=new x({props:{text:"All daisyUI colors can be used as utility classes. Just like any other Tailwind CSS color. For example you can use `primary` color with any of Tailwind CSS color utilities."}}),q=new x({props:{text:"Border radius"}}),A=new x({props:{text:"These extended border radius are being used in daisyUI components. The values depend on the theme so you can have a different design decision about border radius of elements based on the active theme. You can use any Tailwind CSS border radius class for these names as well. Like `rounded-r-box` or `rounded-tr-btn`"}}),I=new x({props:{text:"Glass"}}),R=new x({props:{text:"These glass class to give elements a matte glass effect"}}),G=new x({props:{text:"CSS variables"}}),Y=new x({props:{text:"These CSS variables are being used internally. You can customize them in your custom theme in `tailwind.config.js` or you can even customize them with a class name like `[--animation-btn:0]`"}}),V=new x({props:{text:"Component specific CSS variables"}}),B=new x({props:{text:"These CSS variables are being used internally for a specific component"}}),{c(){n=l("h2"),f(d.$$.fragment),v=p(),f(u.$$.fragment),r=p(),m=l("pre"),L=new N(!1),Q=p(),C=l("h2"),_=l("a"),_.innerHTML=ye,f(q.$$.fragment),W=p(),f(A.$$.fragment),X=p(),E=l("div"),E.innerHTML=xe,Z=p(),P=l("pre"),ee=new N(!1),ae=p(),M=l("h2"),w=l("a"),w.innerHTML=_e,f(I.$$.fragment),te=p(),f(R.$$.fragment),se=p(),T=l("div"),T.innerHTML=we,ne=p(),U=l("pre"),oe=new N(!1),re=p(),j=l("h2"),H=l("a"),H.innerHTML=Te,f(G.$$.fragment),le=p(),f(Y.$$.fragment),pe=p(),D=l("pre"),ie=new N(!1),ce=p(),z=l("h2"),S=l("a"),S.innerHTML=He,f(V.$$.fragment),me=p(),f(B.$$.fragment),de=p(),F=l("pre"),ue=new N(!1),this.h()},l(e){n=i(e,"H2",{id:!0});var t=y(n);g(d.$$.fragment,t),t.forEach(a),v=c(e),g(u.$$.fragment,e),r=c(e),m=i(e,"PRE",{class:!0});var Se=y(m);L=O(Se,!1),Se.forEach(a),Q=c(e),C=i(e,"H2",{id:!0});var be=y(C);_=i(be,"A",{"aria-hidden":!0,tabindex:!0,href:!0,"data-svelte-h":!0}),K(_)!=="svelte-1trhte2"&&(_.innerHTML=ye),g(q.$$.fragment,be),be.forEach(a),W=c(e),g(A.$$.fragment,e),X=c(e),E=i(e,"DIV",{class:!0,"data-svelte-h":!0}),K(E)!=="svelte-lddepc"&&(E.innerHTML=xe),Z=c(e),P=i(e,"PRE",{class:!0});var Ce=y(P);ee=O(Ce,!1),Ce.forEach(a),ae=c(e),M=i(e,"H2",{id:!0});var ke=y(M);w=i(ke,"A",{"aria-hidden":!0,tabindex:!0,href:!0,"data-svelte-h":!0}),K(w)!=="svelte-les9x9"&&(w.innerHTML=_e),g(I.$$.fragment,ke),ke.forEach(a),te=c(e),g(R.$$.fragment,e),se=c(e),T=i(e,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),K(T)!=="svelte-qjy0oz"&&(T.innerHTML=we),ne=c(e),U=i(e,"PRE",{class:!0});var Ee=y(U);oe=O(Ee,!1),Ee.forEach(a),re=c(e),j=i(e,"H2",{id:!0});var $e=y(j);H=i($e,"A",{"aria-hidden":!0,tabindex:!0,href:!0,"data-svelte-h":!0}),K(H)!=="svelte-10vq208"&&(H.innerHTML=Te),g(G.$$.fragment,$e),$e.forEach(a),le=c(e),g(Y.$$.fragment,e),pe=c(e),D=i(e,"PRE",{class:!0});var Me=y(D);ie=O(Me,!1),Me.forEach(a),ce=c(e),z=i(e,"H2",{id:!0});var he=y(z);S=i(he,"A",{"aria-hidden":!0,tabindex:!0,href:!0,"data-svelte-h":!0}),K(S)!=="svelte-1esoxbv"&&(S.innerHTML=He),g(V.$$.fragment,he),he.forEach(a),me=c(e),g(B.$$.fragment,e),de=c(e),F=i(e,"PRE",{class:!0});var je=y(F);ue=O(je,!1),je.forEach(a),this.h()},h(){o(n,"id",""),L.a=null,o(m,"class","language-json"),o(_,"aria-hidden","true"),o(_,"tabindex","-1"),o(_,"href","#-1"),o(C,"id","-1"),o(E,"class","flex gap-4 py-6 justify-between max-w-3xl"),ee.a=null,o(P,"class","language-json"),o(w,"aria-hidden","true"),o(w,"tabindex","-1"),o(w,"href","#-2"),o(M,"id","-2"),o(T,"class","rounded p-10 max-w-3xl "),Ye(T,"background-image","url(/images/stock/photo-1507358522600-9f71e620c44e.jpg)"),oe.a=null,o(U,"class","language-html"),o(H,"aria-hidden","true"),o(H,"tabindex","-1"),o(H,"href","#-3"),o(j,"id","-3"),ie.a=null,o(D,"class","language-json"),o(S,"aria-hidden","true"),o(S,"tabindex","-1"),o(S,"href","#-4"),o(z,"id","-4"),ue.a=null,o(F,"class","language-json")},m(e,t){s(e,n,t),b(d,n,null),s(e,v,t),b(u,e,t),s(e,r,t),s(e,m,t),L.m(Ae,m),s(e,Q,t),s(e,C,t),ge(C,_),b(q,C,null),s(e,W,t),b(A,e,t),s(e,X,t),s(e,E,t),s(e,Z,t),s(e,P,t),ee.m(Pe,P),s(e,ae,t),s(e,M,t),ge(M,w),b(I,M,null),s(e,te,t),b(R,e,t),s(e,se,t),s(e,T,t),s(e,ne,t),s(e,U,t),oe.m(Ie,U),s(e,re,t),s(e,j,t),ge(j,H),b(G,j,null),s(e,le,t),b(Y,e,t),s(e,pe,t),s(e,D,t),ie.m(Re,D),s(e,ce,t),s(e,z,t),ge(z,S),b(V,z,null),s(e,me,t),b(B,e,t),s(e,de,t),s(e,F,t),ue.m(Ue,F),fe=!0},p:De,i(e){fe||(k(d.$$.fragment,e),k(u.$$.fragment,e),k(q.$$.fragment,e),k(A.$$.fragment,e),k(I.$$.fragment,e),k(R.$$.fragment,e),k(G.$$.fragment,e),k(Y.$$.fragment,e),k(V.$$.fragment,e),k(B.$$.fragment,e),fe=!0)},o(e){$(d.$$.fragment,e),$(u.$$.fragment,e),$(q.$$.fragment,e),$(A.$$.fragment,e),$(I.$$.fragment,e),$(R.$$.fragment,e),$(G.$$.fragment,e),$(Y.$$.fragment,e),$(V.$$.fragment,e),$(B.$$.fragment,e),fe=!1},d(e){e&&(a(n),a(v),a(r),a(m),a(Q),a(C),a(W),a(X),a(E),a(Z),a(P),a(ae),a(M),a(te),a(se),a(T),a(ne),a(U),a(re),a(j),a(le),a(pe),a(D),a(ce),a(z),a(me),a(de),a(F)),h(d),h(u,e),h(q),h(A,e),h(I),h(R,e),h(G),h(Y,e),h(V),h(B,e)}}}function Ne(J){let n,d;const v=[J[0],qe];let u={$$slots:{default:[Ke]},$$scope:{ctx:J}};for(let r=0;r<v.length;r+=1)u=ve(u,v[r]);return n=new Je({props:u}),{c(){f(n.$$.fragment)},l(r){g(n.$$.fragment,r)},m(r,m){b(n,r,m),d=!0},p(r,[m]){const L=m&1?Fe(v,[m&1&&Le(r[0]),m&0&&Le(qe)]):{};m&2&&(L.$$scope={dirty:m,ctx:r}),n.$set(L)},i(r){d||(k(n.$$.fragment,r),d=!0)},o(r){$(n.$$.fragment,r),d=!1},d(r){h(n,r)}}}const qe={title:"Utility classes and CSS variables",desc:"Additional utility classes and CSS variables that daisyUI uses for components and themes",published:!0};function Oe(J,n,d){return J.$$set=v=>{d(0,n=ve(ve({},n),ze(v)))},n=ze(n),[n]}class aa extends Ve{constructor(n){super(),Be(this,n,Oe,Ne,Ge,{})}}export{aa as component};
