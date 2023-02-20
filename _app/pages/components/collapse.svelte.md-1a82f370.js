import{S as se,i as ae,s as oe,C as H,w as V,x as C,y as F,z as ce,A as ee,q as R,o as T,B as S,K as re,ag as te,k,m as I,g as x,d as i,e as f,t as g,c as m,a as h,h as y,b as v,H as d,a9 as w,Q as N}from"../../chunks/vendor-40028f80.js";import{M as ne}from"../../chunks/_markdown-dad5b1be.js";import{p as ie,C as de,a as W,r as P}from"../../chunks/actions-18e20a7d.js";import"../../chunks/stores-1979741f.js";import"../../chunks/Ads-ad9f0bf5.js";import"../../chunks/index-46a98a79.js";import"../../chunks/SEO-163d4f71.js";import"../../chunks/preload-helper-ec9aa979.js";import"../../chunks/Translate-ccad0fa6.js";function pe(u){let e,o,c,a,s,r,t;return{c(){e=f("div"),o=f("div"),c=g("Focus me to see content"),a=k(),s=f("div"),r=f("p"),t=g('tabindex="0" attribute is necessary to make the div focusable'),this.h()},l(l){e=m(l,"DIV",{tabindex:!0,class:!0});var p=h(e);o=m(p,"DIV",{class:!0});var _=h(o);c=y(_,"Focus me to see content"),_.forEach(i),a=I(p),s=m(p,"DIV",{class:!0});var $=h(s);r=m($,"P",{});var E=h(r);t=y(E,'tabindex="0" attribute is necessary to make the div focusable'),E.forEach(i),$.forEach(i),p.forEach(i),this.h()},h(){v(o,"class","collapse-title text-xl font-medium"),v(s,"class","collapse-content"),v(e,"tabindex","0"),v(e,"class","collapse")},m(l,p){x(l,e,p),d(e,o),d(o,c),d(e,a),d(e,s),d(s,r),d(r,t)},d(l){l&&i(e)}}}function ue(u){let e,o=`<div tabindex="0" class="$$collapse"> 
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function fe(u){let e,o=`<div tabIndex={0} className="$$collapse"> 
  <div className="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="$$collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function me(u){let e,o,c,a,s,r,t,l,p;return{c(){e=f("div"),o=f("input"),c=k(),a=f("div"),s=g("Click me to show/hide content"),r=k(),t=f("div"),l=f("p"),p=g("hello"),this.h()},l(_){e=m(_,"DIV",{class:!0});var $=h(e);o=m($,"INPUT",{type:!0}),c=I($),a=m($,"DIV",{class:!0});var E=h(a);s=y(E,"Click me to show/hide content"),E.forEach(i),r=I($),t=m($,"DIV",{class:!0});var D=h(t);l=m(D,"P",{});var U=h(l);p=y(U,"hello"),U.forEach(i),D.forEach(i),$.forEach(i),this.h()},h(){v(o,"type","checkbox"),v(a,"class","collapse-title text-xl font-medium"),v(t,"class","collapse-content"),v(e,"class","collapse")},m(_,$){x(_,e,$),d(e,o),d(e,c),d(e,a),d(a,s),d(e,r),d(e,t),d(t,l),d(l,p)},d(_){_&&i(e)}}}function ve(u){let e,o=`<div class="$$collapse">
  <input type="checkbox" /> 
  <div class="$$collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div class="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function he(u){let e,o=`<div className="$$collapse">
  <input type="checkbox" /> 
  <div className="$$collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div className="$$collapse-content"> 
    <p>hello</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function $e(u){let e,o,c,a,s,r,t;return{c(){e=f("div"),o=f("div"),c=g("Focus me to see content"),a=k(),s=f("div"),r=f("p"),t=g('tabindex="0" attribute is necessary to make the div focusable'),this.h()},l(l){e=m(l,"DIV",{tabindex:!0,class:!0});var p=h(e);o=m(p,"DIV",{class:!0});var _=h(o);c=y(_,"Focus me to see content"),_.forEach(i),a=I(p),s=m(p,"DIV",{class:!0});var $=h(s);r=m($,"P",{});var E=h(r);t=y(E,'tabindex="0" attribute is necessary to make the div focusable'),E.forEach(i),$.forEach(i),p.forEach(i),this.h()},h(){v(o,"class","collapse-title text-xl font-medium"),v(s,"class","collapse-content"),v(e,"tabindex","0"),v(e,"class","collapse border border-base-300 bg-base-100 rounded-box")},m(l,p){x(l,e,p),d(e,o),d(o,c),d(e,a),d(e,s),d(s,r),d(r,t)},d(l){l&&i(e)}}}function be(u){let e,o=`<div tabindex="0" class="$$collapse border border-base-300 bg-base-100 rounded-box"> 
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function _e(u){let e,o=`<div tabIndex={0} className="$$collapse border border-base-300 bg-base-100 rounded-box"> 
  <div className="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="$$collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function xe(u){let e,o,c,a,s,r,t;return{c(){e=f("div"),o=f("div"),c=g("Focus me to see content"),a=k(),s=f("div"),r=f("p"),t=g('tabindex="0" attribute is necessary to make the div focusable'),this.h()},l(l){e=m(l,"DIV",{tabindex:!0,class:!0});var p=h(e);o=m(p,"DIV",{class:!0});var _=h(o);c=y(_,"Focus me to see content"),_.forEach(i),a=I(p),s=m(p,"DIV",{class:!0});var $=h(s);r=m($,"P",{});var E=h(r);t=y(E,'tabindex="0" attribute is necessary to make the div focusable'),E.forEach(i),$.forEach(i),p.forEach(i),this.h()},h(){v(o,"class","collapse-title text-xl font-medium"),v(s,"class","collapse-content"),v(e,"tabindex","0"),v(e,"class","collapse border border-base-300 bg-base-100 rounded-box collapse-arrow")},m(l,p){x(l,e,p),d(e,o),d(o,c),d(e,a),d(e,s),d(s,r),d(r,t)},d(l){l&&i(e)}}}function ge(u){let e,o=`<div tabindex="0" class="$$collapse $$collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function ye(u){let e,o=`<div tabIndex={0} className="$$collapse $$collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="$$collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function Ee(u){let e,o,c,a,s,r,t;return{c(){e=f("div"),o=f("div"),c=g("Focus me to see content"),a=k(),s=f("div"),r=f("p"),t=g('tabindex="0" attribute is necessary to make the div focusable'),this.h()},l(l){e=m(l,"DIV",{tabindex:!0,class:!0});var p=h(e);o=m(p,"DIV",{class:!0});var _=h(o);c=y(_,"Focus me to see content"),_.forEach(i),a=I(p),s=m(p,"DIV",{class:!0});var $=h(s);r=m($,"P",{});var E=h(r);t=y(E,'tabindex="0" attribute is necessary to make the div focusable'),E.forEach(i),$.forEach(i),p.forEach(i),this.h()},h(){v(o,"class","collapse-title text-xl font-medium"),v(s,"class","collapse-content"),v(e,"tabindex","0"),v(e,"class","collapse border border-base-300 bg-base-100 rounded-box collapse-plus")},m(l,p){x(l,e,p),d(e,o),d(o,c),d(e,a),d(e,s),d(s,r),d(r,t)},d(l){l&&i(e)}}}function ke(u){let e,o=`<div tabindex="0" class="$$collapse $$collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div class="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function Ie(u){let e,o=`<div tabIndex={0} className="$$collapse $$collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="$$collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="$$collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function we(u){let e,o,c,a,s,r,t;return{c(){e=f("div"),o=f("div"),c=g("I have collapse-open class"),a=k(),s=f("div"),r=f("p"),t=g('tabindex="0" attribute is necessary to make the div focusable'),this.h()},l(l){e=m(l,"DIV",{tabindex:!0,class:!0});var p=h(e);o=m(p,"DIV",{class:!0});var _=h(o);c=y(_,"I have collapse-open class"),_.forEach(i),a=I(p),s=m(p,"DIV",{class:!0});var $=h(s);r=m($,"P",{});var E=h(r);t=y(E,'tabindex="0" attribute is necessary to make the div focusable'),E.forEach(i),$.forEach(i),p.forEach(i),this.h()},h(){v(o,"class","collapse-title text-xl font-medium"),v(s,"class","collapse-content"),v(e,"tabindex","0"),v(e,"class","collapse collapse-open border border-base-300 bg-base-100 rounded-box")},m(l,p){x(l,e,p),d(e,o),d(o,c),d(e,a),d(e,s),d(s,r),d(r,t)},d(l){l&&i(e)}}}function Ne(u){let e,o=`<div tabindex="0" class="$$collapse $$collapse-open border border-base-300 bg-base-100 rounded-box"> 
  <div class="$$collapse-title text-xl font-medium">
    I have collapse-open class
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function Pe(u){let e,o=`<div tabIndex={0} className="$$collapse $$collapse-open border border-base-300 bg-base-100 rounded-box"> 
  <div className="$$collapse-title text-xl font-medium">
    I have collapse-open className
  </div>
  <div className="$$collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function De(u){let e,o,c,a,s,r,t;return{c(){e=f("div"),o=f("div"),c=g("I have collapse-close class"),a=k(),s=f("div"),r=f("p"),t=g('tabindex="0" attribute is necessary to make the div focusable'),this.h()},l(l){e=m(l,"DIV",{tabindex:!0,class:!0});var p=h(e);o=m(p,"DIV",{class:!0});var _=h(o);c=y(_,"I have collapse-close class"),_.forEach(i),a=I(p),s=m(p,"DIV",{class:!0});var $=h(s);r=m($,"P",{});var E=h(r);t=y(E,'tabindex="0" attribute is necessary to make the div focusable'),E.forEach(i),$.forEach(i),p.forEach(i),this.h()},h(){v(o,"class","collapse-title text-xl font-medium"),v(s,"class","collapse-content"),v(e,"tabindex","0"),v(e,"class","collapse collapse-close border border-base-300 bg-base-100 rounded-box")},m(l,p){x(l,e,p),d(e,o),d(o,c),d(e,a),d(e,s),d(s,r),d(r,t)},d(l){l&&i(e)}}}function Ve(u){let e,o=`<div tabindex="0" class="$$collapse $$collapse-close border border-base-300 bg-base-100 rounded-box"> 
  <div class="$$collapse-title text-xl font-medium">
    I have collapse-close class
  </div>
  <div class="$$collapse-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function Ce(u){let e,o=`<div tabIndex={0} className="$$collapse $$collapse-close border border-base-300 bg-base-100 rounded-box"> 
  <div className="$$collapse-title text-xl font-medium">
    I have collapse-close className
  </div>
  <div className="$$collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function Fe(u){let e,o,c,a,s,r,t;return{c(){e=f("div"),o=f("div"),c=g("Focus me to see content"),a=k(),s=f("div"),r=f("p"),t=g('tabindex="0" attribute is necessary to make the div focusable'),this.h()},l(l){e=m(l,"DIV",{tabindex:!0,class:!0});var p=h(e);o=m(p,"DIV",{class:!0});var _=h(o);c=y(_,"Focus me to see content"),_.forEach(i),a=I(p),s=m(p,"DIV",{class:!0});var $=h(s);r=m($,"P",{});var E=h(r);t=y(E,'tabindex="0" attribute is necessary to make the div focusable'),E.forEach(i),$.forEach(i),p.forEach(i),this.h()},h(){v(o,"class","collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"),v(s,"class","collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"),v(e,"tabindex","0"),v(e,"class","collapse group")},m(l,p){x(l,e,p),d(e,o),d(o,c),d(e,a),d(e,s),d(s,r),d(r,t)},d(l){l&&i(e)}}}function Re(u){let e,o=`<div tabindex="0" class="collapse group">
  <div class="$$collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    Focus me to see content
  </div>
  <div class="$$collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function Te(u){let e,o=`<div tabIndex={0} className="collapse group">
  <div className="$$collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    Focus me to see content
  </div>
  <div className="$$collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function Se(u){let e,o,c,a,s,r,t,l,p;return{c(){e=f("div"),o=f("input"),c=k(),a=f("div"),s=g("Click me to show/hide content"),r=k(),t=f("div"),l=f("p"),p=g("hello"),this.h()},l(_){e=m(_,"DIV",{class:!0});var $=h(e);o=m($,"INPUT",{type:!0,class:!0}),c=I($),a=m($,"DIV",{class:!0});var E=h(a);s=y(E,"Click me to show/hide content"),E.forEach(i),r=I($),t=m($,"DIV",{class:!0});var D=h(t);l=m(D,"P",{});var U=h(l);p=y(U,"hello"),U.forEach(i),D.forEach(i),$.forEach(i),this.h()},h(){v(o,"type","checkbox"),v(o,"class","peer"),v(a,"class","collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"),v(t,"class","collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"),v(e,"class","collapse")},m(_,$){x(_,e,$),d(e,o),d(e,c),d(e,a),d(a,s),d(e,r),d(e,t),d(t,l),d(l,p)},d(_){_&&i(e)}}}function Ue(u){let e,o=`<div class="collapse">
  <input type="checkbox" class="peer" /> 
  <div class="$$collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div class="$$collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","html")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function We(u){let e,o=`<div className="collapse">
  <input type="checkbox" className="peer" /> 
  <div className="$$collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div className="$$collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>`,c,a,s,r;return{c(){e=f("pre"),c=g(o),this.h()},l(t){e=m(t,"PRE",{slot:!0});var l=h(e);c=y(l,o),l.forEach(i),this.h()},h(){v(e,"slot","react")},m(t,l){x(t,e,l),d(e,c),s||(r=w(a=P.call(null,e,{to:u[0]})),s=!0)},p(t,l){a&&N(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&i(e),s=!1,r()}}}function Ae(u){let e,o,c,a,s,r,t,l,p,_,$,E,D,U,A,j,q,z,M,B;return e=new de({props:{data:[{type:"component",class:"collapse",desc:"Container element"},{type:"component",class:"collapse-title",desc:"Title element"},{type:"component",class:"collapse-content",desc:"Container for content"},{type:"modifier",class:"collapse-arrow",desc:"Adds arrow icon"},{type:"modifier",class:"collapse-plus",desc:"Adds plus/minus icon"},{type:"modifier",class:"collapse-open",desc:"Force open"},{type:"modifier",class:"collapse-close",desc:"Force close"}]}}),c=new W({props:{title:"Collapse with focus",desc:"This collapse works with focus. When div loses focus, it gets closed",$$slots:{react:[fe],html:[ue],default:[pe]},$$scope:{ctx:u}}}),s=new W({props:{title:"Collapse with checkbox",desc:"This collapse works with checkbox instead of focus. It needs to get clicked again to get closed.",$$slots:{react:[he],html:[ve],default:[me]},$$scope:{ctx:u}}}),t=new W({props:{title:"With border and background color",$$slots:{react:[_e],html:[be],default:[$e]},$$scope:{ctx:u}}}),p=new W({props:{title:"With arrow icon",$$slots:{react:[ye],html:[ge],default:[xe]},$$scope:{ctx:u}}}),$=new W({props:{title:"With arrow plus/minus icon",$$slots:{react:[Ie],html:[ke],default:[Ee]},$$scope:{ctx:u}}}),D=new W({props:{title:"Force open",$$slots:{react:[Pe],html:[Ne],default:[we]},$$scope:{ctx:u}}}),A=new W({props:{title:"Force close",$$slots:{react:[Ce],html:[Ve],default:[De]},$$scope:{ctx:u}}}),q=new W({props:{title:"Custom colors for collapse that works with focus",desc:"Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused",$$slots:{react:[Te],html:[Re],default:[Fe]},$$scope:{ctx:u}}}),M=new W({props:{title:"Custom colors for collapse that works with checkbox",desc:"Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked",$$slots:{react:[We],html:[Ue],default:[Se]},$$scope:{ctx:u}}}),{c(){V(e.$$.fragment),o=k(),V(c.$$.fragment),a=k(),V(s.$$.fragment),r=k(),V(t.$$.fragment),l=k(),V(p.$$.fragment),_=k(),V($.$$.fragment),E=k(),V(D.$$.fragment),U=k(),V(A.$$.fragment),j=k(),V(q.$$.fragment),z=k(),V(M.$$.fragment)},l(n){C(e.$$.fragment,n),o=I(n),C(c.$$.fragment,n),a=I(n),C(s.$$.fragment,n),r=I(n),C(t.$$.fragment,n),l=I(n),C(p.$$.fragment,n),_=I(n),C($.$$.fragment,n),E=I(n),C(D.$$.fragment,n),U=I(n),C(A.$$.fragment,n),j=I(n),C(q.$$.fragment,n),z=I(n),C(M.$$.fragment,n)},m(n,b){F(e,n,b),x(n,o,b),F(c,n,b),x(n,a,b),F(s,n,b),x(n,r,b),F(t,n,b),x(n,l,b),F(p,n,b),x(n,_,b),F($,n,b),x(n,E,b),F(D,n,b),x(n,U,b),F(A,n,b),x(n,j,b),F(q,n,b),x(n,z,b),F(M,n,b),B=!0},p(n,b){const K={};b&5&&(K.$$scope={dirty:b,ctx:n}),c.$set(K);const Q={};b&5&&(Q.$$scope={dirty:b,ctx:n}),s.$set(Q);const G={};b&5&&(G.$$scope={dirty:b,ctx:n}),t.$set(G);const J={};b&5&&(J.$$scope={dirty:b,ctx:n}),p.$set(J);const L={};b&5&&(L.$$scope={dirty:b,ctx:n}),$.$set(L);const O={};b&5&&(O.$$scope={dirty:b,ctx:n}),D.$set(O);const X={};b&5&&(X.$$scope={dirty:b,ctx:n}),A.$set(X);const Y={};b&5&&(Y.$$scope={dirty:b,ctx:n}),q.$set(Y);const Z={};b&5&&(Z.$$scope={dirty:b,ctx:n}),M.$set(Z)},i(n){B||(R(e.$$.fragment,n),R(c.$$.fragment,n),R(s.$$.fragment,n),R(t.$$.fragment,n),R(p.$$.fragment,n),R($.$$.fragment,n),R(D.$$.fragment,n),R(A.$$.fragment,n),R(q.$$.fragment,n),R(M.$$.fragment,n),B=!0)},o(n){T(e.$$.fragment,n),T(c.$$.fragment,n),T(s.$$.fragment,n),T(t.$$.fragment,n),T(p.$$.fragment,n),T($.$$.fragment,n),T(D.$$.fragment,n),T(A.$$.fragment,n),T(q.$$.fragment,n),T(M.$$.fragment,n),B=!1},d(n){S(e,n),n&&i(o),S(c,n),n&&i(a),S(s,n),n&&i(r),S(t,n),n&&i(l),S(p,n),n&&i(_),S($,n),n&&i(E),S(D,n),n&&i(U),S(A,n),n&&i(j),S(q,n),n&&i(z),S(M,n)}}}function qe(u){let e,o;const c=[u[1],le];let a={$$slots:{default:[Ae]},$$scope:{ctx:u}};for(let s=0;s<c.length;s+=1)a=H(a,c[s]);return e=new ne({props:a}),{c(){V(e.$$.fragment)},l(s){C(e.$$.fragment,s)},m(s,r){F(e,s,r),o=!0},p(s,[r]){const t=r&2?ce(c,[r&2&&ee(s[1]),r&0&&ee(le)]):{};r&5&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){o||(R(e.$$.fragment,s),o=!0)},o(s){T(e.$$.fragment,s),o=!1},d(s){S(e,s)}}}const le={title:"Collapse",desc:"Collapse is used for showing and hiding content.",published:!0};function Me(u,e,o){let c;return re(u,ie,a=>o(0,c=a)),u.$$set=a=>{o(1,e=H(H({},e),te(a)))},e=te(e),[c,e]}class Oe extends se{constructor(e){super();ae(this,e,Me,qe,oe,{})}}export{Oe as default,le as metadata};
