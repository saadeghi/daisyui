import{s as de,D as te,m as ce,E as se,a as v,e as b,H as ue,F as re,d as $,c as h,g as N,b as g,B as pe,h as d,G as ne,i as p,j as m,k as M,n as K,t as Q,f as U,I as W,J as X}from"../chunks/scheduler.4WClEtCi.js";import{S as me,i as be,c as H,b as E,m as C,t as D,a as L,d as P}from"../chunks/index.-DrkfUuQ.js";import{g as he,a as oe}from"../chunks/spread.rEx3vLA9.js";import{M as fe}from"../chunks/mdsvex-components.MAWi6nX_.js";import{p as we,C as ve,a as G,r as Z}from"../chunks/ClassTable.WfOinezV.js";import"../chunks/singletons.8Qk7uanO.js";import{T as $e}from"../chunks/Translate.8-iS0cFx.js";function ge(u){let e,n='<input id="my-drawer" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><button>Sidebar Item 1</button></li> <li><button>Sidebar Item 2</button></li></ul></div>';return{c(){e=b("div"),e.innerHTML=n,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-bcybjh"&&(e.innerHTML=n),this.h()},h(){p(e,"class","drawer h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:K,d(a){a&&d(e)}}}function _e(u){let e,n=`<div class="$$drawer">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,a,s,r,c;return{c(){e=b("pre"),a=Q(n),this.h()},l(l){e=h(l,"PRE",{slot:!0});var o=g(e);a=U(o,n),o.forEach(d),this.h()},h(){p(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=W(s=Z.call(null,e,{to:u[0]})),r=!0)},p(l,o){s&&X(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function xe(u){let e,n='<input id="my-drawer-2" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><button>Sidebar Item 1</button></li> <li><button>Sidebar Item 2</button></li></ul></div>';return{c(){e=b("div"),e.innerHTML=n,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-19dxrt2"&&(e.innerHTML=n),this.h()},h(){p(e,"class","drawer lg:drawer-open h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:K,d(a){a&&d(e)}}}function ye(u){let e,n=`<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`,a,s,r,c;return{c(){e=b("pre"),a=Q(n),this.h()},l(l){e=h(l,"PRE",{slot:!0});var o=g(e);a=U(o,n),o.forEach(d),this.h()},h(){p(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=W(s=Z.call(null,e,{to:u[0]})),r=!0)},p(l,o){s&&X(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function ke(u){let e,n='<input id="my-drawer-3" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col drawer-content"><div class="w-full navbar bg-base-300"><div class="flex-none lg:hidden"><label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="flex-1 px-2 mx-2">Navbar Title</div> <div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"><li><button>Navbar Item 1</button></li> <li><button>Navbar Item 2</button></li></ul></div></div> <div class="flex justify-center items-center flex-grow">Content</div></div> <div class="drawer-side h-full absolute"><label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="p-4 menu w-60 md:w-80 min-h-full bg-base-200"><li><button>Sidebar Item 1</button></li> <li><button>Sidebar Item 2</button></li></ul></div>';return{c(){e=b("div"),e.innerHTML=n,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-qin2o0"&&(e.innerHTML=n),this.h()},h(){p(e,"class","drawer h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:K,d(a){a&&d(e)}}}function Ie(u){let e,n=`<div class="$$drawer">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle" /> 
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full $$navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="$$btn $$btn-square $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,a,s,r,c;return{c(){e=b("pre"),a=Q(n),this.h()},l(l){e=h(l,"PRE",{slot:!0});var o=g(e);a=U(o,n),o.forEach(d),this.h()},h(){p(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=W(s=Z.call(null,e,{to:u[0]})),r=!0)},p(l,o){s&&X(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function Se(u){let e,n='<input id="my-drawer-4" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute ms-[-54rem] w-[stretch]"><label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><button>Sidebar Item 1</button></li> <li><button>Sidebar Item 2</button></li></ul></div>';return{c(){e=b("div"),e.innerHTML=n,this.h()},l(a){e=h(a,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-hw6fzj"&&(e.innerHTML=n),this.h()},h(){p(e,"class","drawer drawer-end h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:K,d(a){a&&d(e)}}}function Me(u){let e,n=`<div class="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-4" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,a,s,r,c;return{c(){e=b("pre"),a=Q(n),this.h()},l(l){e=h(l,"PRE",{slot:!0});var o=g(e);a=U(o,n),o.forEach(d),this.h()},h(){p(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=W(s=Z.call(null,e,{to:u[0]})),r=!0)},p(l,o){s&&X(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function Te(u){let e,n,a,s='<a aria-hidden="true" tabindex="-1" href="#drawer-tags-structure"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Drawer tags structure',r,c,l,o=`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  │    ├── <span class="token comment">// navbar</span>
  │    ├── <span class="token comment">// content</span>
  │    ╰── <span class="token comment">// footer</span>
  ╰── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       ╰── <span class="token comment">// Sidebar content (menu or anything)</span></code>`,O,f,w,_,ee,V,T,R,x,ae='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>You can check/uncheck the checkbox using JavaScript or by clicking the <code>&lt;label&gt;</code> tag which is assigned to the hidden checkbox</div>',q,y,A,k,F,I,J,S,Y;return e=new ve({props:{data:[{type:"component",class:"drawer",desc:"The root container"},{type:"component",class:"drawer-toggle",desc:"For the hidden checkbox that controls the drawer"},{type:"component",class:"drawer-content",desc:"Container for all page content"},{type:"component",class:"drawer-side",desc:"The sidebar container"},{type:"component",class:"drawer-overlay",desc:"The label covers the content when drawer is open"},{type:"modifier",class:"drawer-end",desc:"puts drawer to the right"},{type:"responsive",class:"drawer-open",desc:"Forces the drawer to be open"}]}}),T=new $e({props:{text:"Drawer sidebar is hidden by default. You can make it visible on larger screens using <code>lg:drawer-open</code> class (or using other responsive prefixes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)"}}),y=new G({props:{title:"Drawer",$$slots:{html:[_e],default:[ge]},$$scope:{ctx:u}}}),k=new G({props:{title:"Responsive",desc:"Sidebar is always visible on large screen, can be toggled on small screen because of lg:drawer-open class",$$slots:{html:[ye],default:[xe]},$$scope:{ctx:u}}}),I=new G({props:{title:"Navbar menu for desktop + sidebar drawer for mobile",desc:"Change screen size to show/hide menu",$$slots:{html:[Ie],default:[ke]},$$scope:{ctx:u}}}),S=new G({props:{title:"Drawer that opens from right side of page",$$slots:{html:[Me],default:[Se]},$$scope:{ctx:u}}}),{c(){H(e.$$.fragment),n=v(),a=b("h3"),a.innerHTML=s,r=v(),c=b("pre"),l=new ue(!1),O=v(),f=b("div"),w=re("svg"),_=re("path"),ee=v(),V=b("div"),H(T.$$.fragment),R=v(),x=b("div"),x.innerHTML=ae,q=v(),H(y.$$.fragment),A=v(),H(k.$$.fragment),F=v(),H(I.$$.fragment),J=v(),H(S.$$.fragment),this.h()},l(t){E(e.$$.fragment,t),n=$(t),a=h(t,"H3",{id:!0,"data-svelte-h":!0}),N(a)!=="svelte-64q3i8"&&(a.innerHTML=s),r=$(t),c=h(t,"PRE",{class:!0});var i=g(c);l=pe(i,!1),i.forEach(d),O=$(t),f=h(t,"DIV",{class:!0});var j=g(f);w=ne(j,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var z=g(w);_=ne(z,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(_).forEach(d),z.forEach(d),ee=$(j),V=h(j,"DIV",{});var B=g(V);E(T.$$.fragment,B),B.forEach(d),j.forEach(d),R=$(t),x=h(t,"DIV",{class:!0,"data-svelte-h":!0}),N(x)!=="svelte-1gaknfc"&&(x.innerHTML=ae),q=$(t),E(y.$$.fragment,t),A=$(t),E(k.$$.fragment,t),F=$(t),E(I.$$.fragment,t),J=$(t),E(S.$$.fragment,t),this.h()},h(){p(a,"id","drawer-tags-structure"),l.a=null,p(c,"class","language-js"),p(_,"stroke-linecap","round"),p(_,"stroke-linejoin","round"),p(_,"stroke-width","2"),p(_,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),p(w,"xmlns","http://www.w3.org/2000/svg"),p(w,"fill","none"),p(w,"viewBox","0 0 24 24"),p(w,"class","stroke-current shrink-0 w-6 h-6"),p(f,"class","alert text-sm mt-4"),p(x,"class","alert text-sm mt-4")},m(t,i){C(e,t,i),m(t,n,i),m(t,a,i),m(t,r,i),m(t,c,i),l.m(o,c),m(t,O,i),m(t,f,i),M(f,w),M(w,_),M(f,ee),M(f,V),C(T,V,null),m(t,R,i),m(t,x,i),m(t,q,i),C(y,t,i),m(t,A,i),C(k,t,i),m(t,F,i),C(I,t,i),m(t,J,i),C(S,t,i),Y=!0},p(t,i){const j={};i&5&&(j.$$scope={dirty:i,ctx:t}),y.$set(j);const z={};i&5&&(z.$$scope={dirty:i,ctx:t}),k.$set(z);const B={};i&5&&(B.$$scope={dirty:i,ctx:t}),I.$set(B);const le={};i&5&&(le.$$scope={dirty:i,ctx:t}),S.$set(le)},i(t){Y||(D(e.$$.fragment,t),D(T.$$.fragment,t),D(y.$$.fragment,t),D(k.$$.fragment,t),D(I.$$.fragment,t),D(S.$$.fragment,t),Y=!0)},o(t){L(e.$$.fragment,t),L(T.$$.fragment,t),L(y.$$.fragment,t),L(k.$$.fragment,t),L(I.$$.fragment,t),L(S.$$.fragment,t),Y=!1},d(t){t&&(d(n),d(a),d(r),d(c),d(O),d(f),d(R),d(x),d(q),d(A),d(F),d(J)),P(e,t),P(T),P(y,t),P(k,t),P(I,t),P(S,t)}}}function je(u){let e,n;const a=[u[1],ie];let s={$$slots:{default:[Te]},$$scope:{ctx:u}};for(let r=0;r<a.length;r+=1)s=te(s,a[r]);return e=new fe({props:s}),{c(){H(e.$$.fragment)},l(r){E(e.$$.fragment,r)},m(r,c){C(e,r,c),n=!0},p(r,[c]){const l=c&2?he(a,[c&2&&oe(r[1]),c&0&&oe(ie)]):{};c&5&&(l.$$scope={dirty:c,ctx:r}),e.$set(l)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){P(e,r)}}}const ie={title:"Drawer",desc:"Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",published:!0,layout:"components"};function He(u,e,n){let a;return ce(u,we,s=>n(0,a=s)),u.$$set=s=>{n(1,e=te(te({},e),se(s)))},e=se(e),[a,e]}class ze extends me{constructor(e){super(),be(this,e,He,je,de,{})}}export{ze as component};
