var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l,a;function r(e,t){return l||(l=document.createElement("a")),l.href=t,e===l.href}function c(e){return null==e?"":e}function h(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function m(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function v(){return f(" ")}function b(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function C(e){a=e}const x=[],y=[],k=[],A=[],L=Promise.resolve();let M=!1;function S(e){k.push(e)}const T=new Set;let B=0;function E(){const e=a;do{for(;B<x.length;){const e=x[B];B++,C(e),z(e.$$)}for(C(null),x.length=0,B=0;y.length;)y.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];T.has(t)||(T.add(t),t())}k.length=0}while(x.length);for(;A.length;)A.pop()();M=!1,T.clear(),C(e)}function z(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const H=new Set;let I;function V(){I={r:0,c:[],p:I}}function P(){I.r||i(I.c),I=I.p}function D(e,t){e&&e.i&&(H.delete(e),e.i(t))}function _(e,t,n,i){if(e&&e.o){if(H.has(e))return;H.add(e),I.c.push((()=>{H.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}function N(e){e&&e.c()}function R(e,n,o,l){const{fragment:a,on_mount:r,on_destroy:c,after_update:h}=e.$$;a&&a.m(n,o),l||S((()=>{const n=r.map(t).filter(s);c?c.push(...n):i(n),e.$$.on_mount=[]})),h.forEach(S)}function O(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(x.push(e),M||(M=!0,L.then(E)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function j(t,s,o,l,r,c,h,u=[-1]){const m=a;C(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:s.target||m.$$.root};h&&h(p.root);let g=!1;if(p.ctx=o?o(t,s.props||{},((e,n,...i)=>{const s=i.length?i[0]:n;return p.ctx&&r(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),g&&W(t,e)),n})):[],p.update(),g=!0,i(p.before_update),p.fragment=!!l&&l(p.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);p.fragment&&p.fragment.l(e),e.forEach(d)}else p.fragment&&p.fragment.c();s.intro&&D(t.$$.fragment),R(t,s.target,s.anchor,s.customElement),E()}C(m)}class F{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function U(t){let n;return{c(){n=p("div"),n.innerHTML='<div class="title svelte-vamvaf"><p class="larger svelte-vamvaf">Welcome to my CV,</p> \n    <h1 class="svelte-vamvaf">I&#39;m Nicola Toscan</h1> \n    <p class="svelte-vamvaf">Developer and data scientist</p></div>',w(n,"class","header svelte-vamvaf")},m(e,t){u(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class G extends F{constructor(e){super(),j(this,e,null,U,o,{})}}function J(t){let n,i;return{c(){n=g("svg"),i=g("path"),w(i,"d","M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"),w(i,"fill",t[2]),w(n,"width",t[0]),w(n,"height",t[1]),w(n,"viewBox",t[3])},m(e,t){u(e,n,t),h(n,i)},p(e,[t]){4&t&&w(i,"fill",e[2]),1&t&&w(n,"width",e[0]),2&t&&w(n,"height",e[1]),8&t&&w(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function Z(e,t,n){let{size:i="1em"}=t,{width:s=i}=t,{height:o=i}=t,{color:l="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,s=e.width),"height"in e&&n(1,o=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,a=e.viewBox)},[s,o,l,a,i]}class q extends F{constructor(e){super(),j(this,e,Z,J,o,{size:4,width:0,height:1,color:2,viewBox:3})}}function K(t){let n,i;return{c(){n=g("svg"),i=g("path"),w(i,"d","M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"),w(i,"fill",t[2]),w(n,"width",t[0]),w(n,"height",t[1]),w(n,"viewBox",t[3])},m(e,t){u(e,n,t),h(n,i)},p(e,[t]){4&t&&w(i,"fill",e[2]),1&t&&w(n,"width",e[0]),2&t&&w(n,"height",e[1]),8&t&&w(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function Q(e,t,n){let{size:i="1em"}=t,{width:s=i}=t,{height:o=i}=t,{color:l="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,s=e.width),"height"in e&&n(1,o=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,a=e.viewBox)},[s,o,l,a,i]}class X extends F{constructor(e){super(),j(this,e,Q,K,o,{size:4,width:0,height:1,color:2,viewBox:3})}}function Y(t){let n,i;return{c(){n=g("svg"),i=g("path"),w(i,"d","M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"),w(i,"fill",t[2]),w(n,"width",t[0]),w(n,"height",t[1]),w(n,"viewBox",t[3])},m(e,t){u(e,n,t),h(n,i)},p(e,[t]){4&t&&w(i,"fill",e[2]),1&t&&w(n,"width",e[0]),2&t&&w(n,"height",e[1]),8&t&&w(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function ee(e,t,n){let{size:i="1em"}=t,{width:s=i}=t,{height:o=i}=t,{color:l="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,s=e.width),"height"in e&&n(1,o=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,a=e.viewBox)},[s,o,l,a,i]}class te extends F{constructor(e){super(),j(this,e,ee,Y,o,{size:4,width:0,height:1,color:2,viewBox:3})}}function ne(t){let n,i;return{c(){n=g("svg"),i=g("path"),w(i,"d","M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"),w(i,"fill",t[2]),w(n,"width",t[0]),w(n,"height",t[1]),w(n,"viewBox",t[3])},m(e,t){u(e,n,t),h(n,i)},p(e,[t]){4&t&&w(i,"fill",e[2]),1&t&&w(n,"width",e[0]),2&t&&w(n,"height",e[1]),8&t&&w(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function ie(e,t,n){let{size:i="1em"}=t,{width:s=i}=t,{height:o=i}=t,{color:l="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,s=e.width),"height"in e&&n(1,o=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,a=e.viewBox)},[s,o,l,a,i]}class se extends F{constructor(e){super(),j(this,e,ie,ne,o,{size:4,width:0,height:1,color:2,viewBox:3})}}function oe(t){let n,i;return{c(){n=g("svg"),i=g("path"),w(i,"d","M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18A2,2 0 0,1 18,20H6A2,2 0 0,1 4,18V6A2,2 0 0,1 6,4H18A2,2 0 0,1 20,6M9.5,10.5A1.5,1.5 0 0,0 8,9H5.5V15H7V13H8A1.5,1.5 0 0,0 9.5,11.5V10.5M14.5,10.5A1.5,1.5 0 0,0 13,9H10.5V15H13A1.5,1.5 0 0,0 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z"),w(i,"fill",t[2]),w(n,"width",t[0]),w(n,"height",t[1]),w(n,"viewBox",t[3])},m(e,t){u(e,n,t),h(n,i)},p(e,[t]){4&t&&w(i,"fill",e[2]),1&t&&w(n,"width",e[0]),2&t&&w(n,"height",e[1]),8&t&&w(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function le(e,t,n){let{size:i="1em"}=t,{width:s=i}=t,{height:o=i}=t,{color:l="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,s=e.width),"height"in e&&n(1,o=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,a=e.viewBox)},[s,o,l,a,i]}class ae extends F{constructor(e){super(),j(this,e,le,oe,o,{size:4,width:0,height:1,color:2,viewBox:3})}}function re(t){let n,i,s,o,l,a,r,c,m,g,b,$,C,x,y,k,A,L,M,S,T,B,E,z,H,I,V,P,W,j,F,U,G,J,Z,K,Q,Y,ee,ne,ie;return I=new q({props:{size:"48"}}),W=new X({props:{size:"48"}}),U=new te({props:{size:"48"}}),Z=new se({props:{size:"48"}}),ne=new ae({props:{size:"32"}}),{c(){n=p("h2"),n.textContent="ABOUT ME",i=v(),s=p("div"),o=p("p"),o.innerHTML='<span class="info-name svelte-16c0ngt">Name:</span>Nicola Toscan',l=v(),a=p("p"),a.innerHTML='<span class="info-name svelte-16c0ngt">From:</span>Italy',r=v(),c=p("p"),m=p("span"),m.textContent="Age:",g=f(t[0]),b=v(),$=p("p"),$.innerHTML='<span class="info-name svelte-16c0ngt">Now in:</span>Pieve del Grappa',C=v(),x=p("div"),y=p("div"),k=v(),A=p("p"),L=f("I'm a "),M=f(t[0]),S=f(" years old Italian student, currently attending a Masters Degree in Data Science at KTH Royal Institute of Technology and TU Berlin."),T=p("br"),B=f("\n        I'm passionate about data science and web development."),E=v(),z=p("div"),H=p("a"),N(I.$$.fragment),V=v(),P=p("a"),N(W.$$.fragment),j=v(),F=p("a"),N(U.$$.fragment),G=v(),J=p("a"),N(Z.$$.fragment),K=v(),Q=p("div"),Y=p("a"),ee=p("p"),ee.textContent="Download resume as PDF",N(ne.$$.fragment),w(o,"class","svelte-16c0ngt"),w(a,"class","svelte-16c0ngt"),w(m,"class","info-name svelte-16c0ngt"),w(c,"class","svelte-16c0ngt"),w($,"class","svelte-16c0ngt"),w(s,"class","my-info svelte-16c0ngt"),w(y,"class","picture svelte-16c0ngt"),w(A,"class","svelte-16c0ngt"),w(x,"class","about svelte-16c0ngt"),w(H,"href","https://www.github.com/nicolatoscan/"),w(H,"aria-label","GitHub"),w(H,"class","themed-icon svelte-16c0ngt"),w(H,"target","_blank"),w(P,"href","https://www.linkedin.com/in/nicolatoscan/"),w(P,"aria-label","LinkedIn"),w(P,"class","themed-icon svelte-16c0ngt"),w(P,"target","_blank"),w(F,"href","mailto:me@toscan.dev"),w(F,"aria-label","Email"),w(F,"class","themed-icon svelte-16c0ngt"),w(F,"target","_blank"),w(J,"href","https://www.t.me/nicolatoscan/"),w(J,"aria-label","Telegram"),w(J,"class","themed-icon svelte-16c0ngt"),w(J,"target","_blank"),w(z,"class","urls svelte-16c0ngt"),w(ee,"class","svelte-16c0ngt"),w(Y,"href","./files/NicolaToscan_CV.pdf"),w(Y,"target","_blank"),w(Y,"class","svelte-16c0ngt"),w(Q,"class","download-as-pdf svelte-16c0ngt")},m(e,t){u(e,n,t),u(e,i,t),u(e,s,t),h(s,o),h(s,l),h(s,a),h(s,r),h(s,c),h(c,m),h(c,g),h(s,b),h(s,$),u(e,C,t),u(e,x,t),h(x,y),h(x,k),h(x,A),h(A,L),h(A,M),h(A,S),h(A,T),h(A,B),u(e,E,t),u(e,z,t),h(z,H),R(I,H,null),h(z,V),h(z,P),R(W,P,null),h(z,j),h(z,F),R(U,F,null),h(z,G),h(z,J),R(Z,J,null),u(e,K,t),u(e,Q,t),h(Q,Y),h(Y,ee),R(ne,Y,null),ie=!0},p:e,i(e){ie||(D(I.$$.fragment,e),D(W.$$.fragment,e),D(U.$$.fragment,e),D(Z.$$.fragment,e),D(ne.$$.fragment,e),ie=!0)},o(e){_(I.$$.fragment,e),_(W.$$.fragment,e),_(U.$$.fragment,e),_(Z.$$.fragment,e),_(ne.$$.fragment,e),ie=!1},d(e){e&&d(n),e&&d(i),e&&d(s),e&&d(C),e&&d(x),e&&d(E),e&&d(z),O(I),O(W),O(U),O(Z),e&&d(K),e&&d(Q),O(ne)}}}function ce(e){return[Math.floor(((new Date).getTime()-new Date(1999,0,31).getTime())/315576e5)]}class he extends F{constructor(e){super(),j(this,e,ce,re,o,{})}}function ue(e,t,n){const i=e.slice();return i[7]=t[n],i[8]=t,i[9]=n,i}function de(e,t,n){const i=e.slice();return i[10]=t[n],i}function me(e){let t,n;return{c(){t=p("img"),w(t,"loading","lazy"),r(t.src,n=e[7].img)||w(t,"src",n),w(t,"alt",""),w(t,"class","svelte-1eesav3")},m(e,n){u(e,t,n)},p(e,i){2&i&&!r(t.src,n=e[7].img)&&w(t,"src",n)},d(e){e&&d(t)}}}function pe(e){let t,n=e[7].subtitles,i=[];for(let t=0;t<n.length;t+=1)i[t]=fe(de(e,n,t));return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=f("")},m(e,n){for(let t=0;t<i.length;t+=1)i[t].m(e,n);u(e,t,n)},p(e,s){if(2&s){let o;for(n=e[7].subtitles,o=0;o<n.length;o+=1){const l=de(e,n,o);i[o]?i[o].p(l,s):(i[o]=fe(l),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(e){m(i,e),e&&d(t)}}}function ge(e){let t,n;return{c(){t=p("img"),w(t,"loading","lazy"),r(t.src,n="./images/flags/"+e[10].flag.toLowerCase()+".svg")||w(t,"src",n),w(t,"alt","flag"),w(t,"class","flag svelte-1eesav3"),w(t,"width","640"),w(t,"height","480")},m(e,n){u(e,t,n)},p(e,i){2&i&&!r(t.src,n="./images/flags/"+e[10].flag.toLowerCase()+".svg")&&w(t,"src",n)},d(e){e&&d(t)}}}function fe(e){let t,n,i,s,o,l=e[10].text+"",a=e[10].flag&&ge(e);return{c(){t=p("div"),a&&a.c(),n=v(),i=p("h4"),s=f(l),o=v(),w(i,"class","svelte-1eesav3"),w(t,"class","subtitle svelte-1eesav3")},m(e,l){u(e,t,l),a&&a.m(t,null),h(t,n),h(t,i),h(i,s),u(e,o,l)},p(e,i){e[10].flag?a?a.p(e,i):(a=ge(e),a.c(),a.m(t,n)):a&&(a.d(1),a=null),2&i&&l!==(l=e[10].text+"")&&$(s,l)},d(e){e&&d(t),a&&a.d(),e&&d(o)}}}function ve(e){let t,n,i,s,o,l=e[7].showMore?"Show less":"Show more",a=e[7].showMore&&be(e);function r(){return e[3](e[7],e[8],e[9])}return{c(){a&&a.c(),t=v(),n=p("p"),i=f(l),w(n,"class","show-more")},m(e,l){a&&a.m(e,l),u(e,t,l),u(e,n,l),h(n,i),s||(o=b(n,"click",r),s=!0)},p(n,s){(e=n)[7].showMore?a?a.p(e,s):(a=be(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),2&s&&l!==(l=e[7].showMore?"Show less":"Show more")&&$(i,l)},d(e){a&&a.d(e),e&&d(t),e&&d(n),s=!1,o()}}}function be(e){let t,n=e[7].more+"";return{c(){t=p("p"),w(t,"class","more")},m(e,i){u(e,t,i),t.innerHTML=n},p(e,i){2&i&&n!==(n=e[7].more+"")&&(t.innerHTML=n)},d(e){e&&d(t)}}}function we(e){let t,n,i,s,o,l,a,r,m,g,b,C,x,y,k,A,L,M=e[7].title+"",S=e[7].description+"",T=e[7].img&&me(e),B=e[7].subtitles&&pe(e),E=e[7].more&&ve(e);return{c(){t=p("div"),n=p("div"),T&&T.c(),i=v(),s=p("div"),o=p("h3"),l=f(M),a=v(),B&&B.c(),r=v(),m=p("div"),g=p("p"),b=v(),E&&E.c(),C=v(),x=p("span"),y=v(),k=p("span"),A=v(),w(n,"class","box-img svelte-1eesav3"),w(o,"class","svelte-1eesav3"),w(s,"class","box-title"),w(x,"class","fi fi-gr"),w(k,"class","fi fi-gr fis"),w(m,"class","box-description"),w(t,"class",L=c(e[7].flipped?"box flipped":"box")+" svelte-1eesav3")},m(e,c){u(e,t,c),h(t,n),T&&T.m(n,null),h(t,i),h(t,s),h(s,o),h(o,l),h(s,a),B&&B.m(s,null),h(t,r),h(t,m),h(m,g),g.innerHTML=S,h(m,b),E&&E.m(m,null),h(m,C),h(m,x),h(m,y),h(m,k),h(t,A)},p(e,i){e[7].img?T?T.p(e,i):(T=me(e),T.c(),T.m(n,null)):T&&(T.d(1),T=null),2&i&&M!==(M=e[7].title+"")&&$(l,M),e[7].subtitles?B?B.p(e,i):(B=pe(e),B.c(),B.m(s,null)):B&&(B.d(1),B=null),2&i&&S!==(S=e[7].description+"")&&(g.innerHTML=S),e[7].more?E?E.p(e,i):(E=ve(e),E.c(),E.m(m,C)):E&&(E.d(1),E=null),2&i&&L!==(L=c(e[7].flipped?"box flipped":"box")+" svelte-1eesav3")&&w(t,"class",L)},d(e){e&&d(t),T&&T.d(),B&&B.d(),E&&E.d()}}}function $e(t){let n,i,s,o,l=t[2][t[0]]+"",a=t[1],r=[];for(let e=0;e<a.length;e+=1)r[e]=we(ue(t,a,e));return{c(){n=p("h2"),i=f(l),s=v(),o=p("div");for(let e=0;e<r.length;e+=1)r[e].c();w(o,"class","boxes")},m(e,t){u(e,n,t),h(n,i),u(e,s,t),u(e,o,t);for(let e=0;e<r.length;e+=1)r[e].m(o,null)},p(e,[t]){if(1&t&&l!==(l=e[2][e[0]]+"")&&$(i,l),2&t){let n;for(a=e[1],n=0;n<a.length;n+=1){const i=ue(e,a,n);r[n]?r[n].p(i,t):(r[n]=we(i),r[n].c(),r[n].m(o,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=a.length}},i:e,o:e,d(e){e&&d(n),e&&d(s),e&&d(o),m(r,e)}}}function Ce(e,t,n){var i;let{type:s}=t;const o={Education:[{img:"./images/kth.webp",title:"Attending Master's in Data Science",subtitles:[{flag:"Se",text:"KTH, Stockholm, Sweden | August 2021 - June 2022"},{flag:"De",text:"TUB, Berlin, Germany | October 2022 - Current"}],description:"                I am currently attending a joint Master degree in Stockholm and Berlin in Data Science, with a minor in Entrepreneur & Innovation.                I spent the first year in Stockholm and I will spend the second year in Berlin.",showMore:!1,more:"The complete list of courses I have taken:                <ul>                <li>Machine Learning</li>                <li>Scalable Machine Learning and Deep Learning</li>                <li>Programming for Data Science</li>                <li>Data Mining, Basic Course</li>                <li>Research Methodology and Scientific Writing</li>                <li>Entrepreneurship for Engineers</li>                <li>Business Development Lab of Entrepreneurship Engineers</li>                <li>e-Business Strategies</li>                </ui>                "},{img:"./images/trento.webp",title:"Bachelor's in Computer Science",subtitles:[{flag:"It",text:"University of Trento, Trento, Italy | September 2018 - July 2022"}],description:"                I have taken courses in Software Engineering, Data Structures, Algorithms, and Programming and Mathematics.                I graduated with the highest grade of 110 cum laude in July 2022",showMore:!1,more:"The complete list of courses I have taken:                <ul>                <li>Algorithms and Data Structures</li>                <li>Computer Programming 1</li>                <li>Programming Languages</li>                <li>Software Engineering 1 & 2</li>                <li>Formal Languages and Compilers</li>                <li>Geometry and Linear Algebra</li>                <li>Calculus 1</li>                <li>Probability and Statistics</li>                <li>Mathematical Foundations of Computer Science</li>                <li>Physics</li>                <li>Operating Systems</li>                <li>Logic</li>                <li>Databases</li>                <li>Networks</li>                <li>Computer Architectures</li>                <li>Human-Computer Interaction</li>                <li>Introduction to Computer and Network Security</li>                <li>Introduction to Web Programming</li>                <li>Introduction to Mobile Development</li>                <li>Introduction to Machine Learning</li>                </ui>                "}],Experience:[{flipped:!0,img:"./images/wiki.webp",title:"Data Science Internship",subtitles:[{flag:"Es",text:"Eurecat, Barcelona, Spain | January - June 2021"}],description:"Analyzing emotions in messages written and received by a user in Wikipedia talk pages over time using Python."},{flipped:!0,img:"./images/aqrate.webp",title:"Web Developer Internship",subtitles:[{flag:"It",text:"Aqrate, Montebelluna, Italy | Summer of 2016 and 2017"}],description:"Continuous development of multiple restful web apps and APIs used by the company itself or their clients. Developed with Angular, .NET Framework, ASP-NET MVC and Azure authentication services with TypeScript, JavaScript and C#."}],Projects:[{img:"./images/rennes.webp",title:"Summer School - Solutions for Healthier Digital Cities",subtitles:[{flag:"Fr",text:"Université de Rennes 1, Rennes, France | July 2022"}],description:"Two week summer school in Rennes on the topic of digital solutions for healthier cities organazied by EiT.                Work in teams on challenging cases, with the end goal of creating a start-up solving the problem.                We took courses on Entrepreneurship and Business analysis."},{img:"./images/eagle.webp",title:"Eletric Racing Car Telemetry",subtitles:[{flag:"It",text:"Eagle TRT, Trento, Italy | Semptember 2020 - June 2021"}],description:"Developing a telemetry software using C for an electric formula SAE car, designed and build by the Eagle Trento racing team since September 2020."},{img:"./images/webapp.webp",title:"Web Apps as management software",description:"Developed the following two management software applications as web apps using Vue, Node.js, MongoDB and SQL databases:<br />                <ul>                <li>Management software for the accomodation offered by the University of Trento through Opera.</li>                <li>Management software to catalogued books of the libraries of Bolzano through librilib(e)ri.</li>                </ui>"}]},l=null!==(i=null==o?void 0:o[s])&&void 0!==i?i:[];return e.$$set=e=>{"type"in e&&n(0,s=e.type)},[s,l,{Education:"Education",Experience:"Work Experiences",Projects:"Other Experiences"},(e,t,i)=>{n(1,t[i].showMore=!e.showMore,l)}]}class xe extends F{constructor(e){super(),j(this,e,Ce,$e,o,{type:0})}}function ye(t){let n,i,s;return{c(){n=p("h2"),n.textContent="Skills",i=v(),s=p("div"),s.innerHTML='<h3 class="spacer svelte-18ifcb">SOFT SKILLS:</h3> \n    <p class="spacer svelte-18ifcb">Flexibility, Team work, Work under pressure</p> \n\n    <h3 class="svelte-18ifcb">PROGRAMMING LANGUAGES:</h3> \n    <p class="svelte-18ifcb">Typescript, Javascript, Python, C#, C++, Java</p> \n\n    <h3 class="svelte-18ifcb">JS FRAMEWORKS:</h3> \n    <p class="svelte-18ifcb">Vue, React, Angular, Express.js</p> \n\n    <h3 class="svelte-18ifcb">DESKTOP &amp; MOBILE:</h3> \n    <p class="svelte-18ifcb">.NET, Android Studio</p> \n\n    <h3 class="svelte-18ifcb">DATABASES:</h3> \n    <p class="svelte-18ifcb">Postgtres, MongoDB</p> \n\n    <h3 class="svelte-18ifcb">IT SOFTWARES:</h3> \n    <p class="svelte-18ifcb">Linux, Git, Docker</p> \n\n    <h3 class="svelte-18ifcb">CLOUD INFRASTRUCTURE:</h3> \n    <p class="svelte-18ifcb">Google Cloud, Azure, Aws, Heroku</p> \n\n    <h3 class="svelte-18ifcb">OTHER SOFTWARES:</h3> \n    <p class="svelte-18ifcb">Office suite, Photoshop, Premiere Pro</p>',w(s,"class","skills svelte-18ifcb")},m(e,t){u(e,n,t),u(e,i,t),u(e,s,t)},p:e,i:e,o:e,d(e){e&&d(n),e&&d(i),e&&d(s)}}}class ke extends F{constructor(e){super(),j(this,e,null,ye,o,{})}}function Ae(t){let n,i,s;return{c(){n=p("h2"),n.textContent="and more",i=v(),s=p("div"),s.innerHTML='<div class="something svelte-1bbalib"><h3 class="svelte-1bbalib">Hackathon and Competitive Coding challenge</h3> \n        <div><ul class="svelte-1bbalib"><li class="svelte-1bbalib">Google HashCode (2019 and 2020)</li> \n                <li class="svelte-1bbalib">Reply Code challenge (2020)</li> \n                <li class="svelte-1bbalib">“Code vs Covid19” online (2020) - WebApp to track Covid19 in Vue.js</li> \n                <li class="svelte-1bbalib">“NOI Hackathon” in Bolzano (2019) - Alexa voice recognition skill - 1st position</li> \n                <li class="svelte-1bbalib">&quot;hack.developers&quot; in Venice (2017) - Angular Component for Italian public administration</li></ul></div></div> \n\n    <div class="something svelte-1bbalib"><h3 class="svelte-1bbalib">Tutor and organizer</h3> \n        <p>Tutor and organizer of 3 courses addressed to members of voluntary associations and other students about “Computer use essentials”, “The basics of Photoshop” and “The basics of Angular” from 2016 to 2018</p></div> \n\n    <div class="something svelte-1bbalib"><h3 class="svelte-1bbalib">Photo &amp; Video Editing</h3> \n        <p>Filmed and edited short videos and photos for local public initiative like calendars, local festival posters and short videos for some of my city events. Edited using Adobe Photoshop, Adobe Premiere Pro and Adobe After Effects.</p></div>',w(s,"class","somethings")},m(e,t){u(e,n,t),u(e,i,t),u(e,s,t)},p:e,i:e,o:e,d(e){e&&d(n),e&&d(i),e&&d(s)}}}class Le extends F{constructor(e){super(),j(this,e,null,Ae,o,{})}}function Me(e){let t;return{c(){t=p("ul"),t.innerHTML="<li>Understand and describe the devices and services used to support communications in data networks and the Internet</li> \n                <li>Understand and describe the role of protocol layers in data networks</li> \n                <li>Understand and describe the importance of addressing and naming schemes at various layers of data networks in IPv4 and IPv6 environments</li> \n                <li>Design, calculate, and apply subnet masks and addresses to fulfill given requirements in IPv4 and IPv6 networks</li> \n                <li>Explain fundamental Ethernet concepts such as media, services, and operations</li> \n                <li>Build a simple Ethernet network using routers and switches</li> \n                <li>Use Cisco command-line interface (CLI) commands to perform basic router and switch configurations</li> \n                <li>Utilize common network utilities to verify small network operations and analyze data traffic</li>"},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function Se(e){let t,n;return{c(){t=f("Overal Score: 189\n        "),n=p("ul"),n.innerHTML="<li>Reading: 195</li> \n            <li>Use of English: 190</li> \n            <li>Writing: 171</li> \n            <li>Listening: 201</li> \n            <li>Speaking: 188</li>"},m(e,i){u(e,t,i),u(e,n,i)},d(e){e&&d(t),e&&d(n)}}}function Te(t){let n,s,o,l,a,r,c,m,g,C,x,y,k,A,L,M,S,T,B,E,z,H,I,V,P=t[0]?"Show less":"Show more",D=t[1]?"Show less":"Show more",_=t[0]&&Me(),N=t[1]&&Se();return{c(){n=p("h2"),n.textContent="Certificates",s=v(),o=p("div"),l=p("div"),a=p("h3"),a.textContent="CCNA Routing and Switching: Introduction to Networks",r=v(),c=p("h4"),c.textContent="Cisco Network accademy | November 2017",m=v(),_&&_.c(),g=v(),C=p("p"),x=f(P),y=v(),k=p("div"),A=p("h3"),A.textContent="Certificate in Advance English (CAE)",L=v(),M=p("h4"),M.textContent="Cambridge English | March 2017",S=v(),T=p("p"),T.textContent="Cambridge English Level 2 Certificate in ESOL International (Advance)",B=v(),N&&N.c(),E=v(),z=p("p"),H=f(D),w(a,"class","svelte-1frl63b"),w(c,"class","svelte-1frl63b"),w(C,"class","show-more"),w(l,"class","something svelte-1frl63b"),w(A,"class","svelte-1frl63b"),w(M,"class","svelte-1frl63b"),w(z,"class","show-more"),w(k,"class","something svelte-1frl63b"),w(o,"class","somethings")},m(e,i){u(e,n,i),u(e,s,i),u(e,o,i),h(o,l),h(l,a),h(l,r),h(l,c),h(l,m),_&&_.m(l,null),h(l,g),h(l,C),h(C,x),h(o,y),h(o,k),h(k,A),h(k,L),h(k,M),h(k,S),h(k,T),h(k,B),N&&N.m(k,null),h(k,E),h(k,z),h(z,H),I||(V=[b(C,"click",t[2]),b(z,"click",t[3])],I=!0)},p(e,[t]){e[0]?_||(_=Me(),_.c(),_.m(l,g)):_&&(_.d(1),_=null),1&t&&P!==(P=e[0]?"Show less":"Show more")&&$(x,P),e[1]?N||(N=Se(),N.c(),N.m(k,E)):N&&(N.d(1),N=null),2&t&&D!==(D=e[1]?"Show less":"Show more")&&$(H,D)},i:e,o:e,d(e){e&&d(n),e&&d(s),e&&d(o),_&&_.d(),N&&N.d(),I=!1,i(V)}}}function Be(e,t,n){let i=!1,s=!1;return[i,s,()=>{n(0,i=!i)},()=>{n(1,s=!s)}]}class Ee extends F{constructor(e){super(),j(this,e,Be,Te,o,{})}}function ze(e,t,n){const i=e.slice();return i[1]=t[n],i}function He(e,t,n){const i=e.slice();return i[4]=t[n],i}function Ie(t){let n,i,s,o,l,a,r,c,m=t[4].name+"",g=t[4].description+"";return{c(){n=p("a"),i=p("p"),s=f(m),o=v(),l=p("p"),a=f(g),r=v(),w(i,"class","name svelte-rfo546"),w(l,"class","description svelte-rfo546"),w(n,"href",c=t[4].link),w(n,"target","”_blank”"),w(n,"class","svelte-rfo546")},m(e,t){u(e,n,t),h(n,i),h(i,s),h(n,o),h(n,l),h(l,a),h(n,r)},p:e,d(e){e&&d(n)}}}function Ve(e){let t,n,i,s,o,l,a=e[1].name+"",r=e[1].projects,c=[];for(let t=0;t<r.length;t+=1)c[t]=Ie(He(e,r,t));return{c(){t=p("div"),n=p("h3"),i=f(a),s=v(),o=p("div");for(let e=0;e<c.length;e+=1)c[e].c();l=v(),w(n,"class","svelte-rfo546"),w(o,"class","list"),w(t,"class","something svelte-rfo546")},m(e,a){u(e,t,a),h(t,n),h(n,i),h(t,s),h(t,o);for(let e=0;e<c.length;e+=1)c[e].m(o,null);h(t,l)},p(e,t){if(1&t){let n;for(r=e[1].projects,n=0;n<r.length;n+=1){const i=He(e,r,n);c[n]?c[n].p(i,t):(c[n]=Ie(i),c[n].c(),c[n].m(o,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}},d(e){e&&d(t),m(c,e)}}}function Pe(e){let t,n,i,s,o,l,a,r,c,g=e[0],f=[];for(let t=0;t<g.length;t+=1)f[t]=Ve(ze(e,g,t));return r=new q({props:{size:"32"}}),{c(){t=p("h2"),t.textContent="Personal Projects",n=v(),i=p("div");for(let e=0;e<f.length;e+=1)f[e].c();s=v(),o=p("div"),l=p("a"),a=p("p"),a.textContent="And many more on my Github",N(r.$$.fragment),w(i,"class","somethings"),w(a,"class","svelte-rfo546"),w(l,"href","https://github.com/nicolatoscan"),w(l,"target","_blank"),w(l,"class","svelte-rfo546"),w(o,"class","more-github svelte-rfo546")},m(e,d){u(e,t,d),u(e,n,d),u(e,i,d);for(let e=0;e<f.length;e+=1)f[e].m(i,null);u(e,s,d),u(e,o,d),h(o,l),h(l,a),R(r,l,null),c=!0},p(e,[t]){if(1&t){let n;for(g=e[0],n=0;n<g.length;n+=1){const s=ze(e,g,n);f[n]?f[n].p(s,t):(f[n]=Ve(s),f[n].c(),f[n].m(i,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=g.length}},i(e){c||(D(r.$$.fragment,e),c=!0)},o(e){_(r.$$.fragment,e),c=!1},d(e){e&&d(t),e&&d(n),e&&d(i),m(f,e),e&&d(s),e&&d(o),O(r)}}}function De(e){return[[{name:"Web",projects:[{name:"CV",link:"https://github.com/nicolatoscan/cv",description:"This website"},{name:"Rememo",link:"https://github.com/nicolatoscan/rememo-webapp",description:"WebApp with flashcards to learn languages"},{name:"Monopoly Bank",link:"https://github.com/nicolatoscan/monopoly-bank",description:'Manage a "Credit card Monopoly" game when the card reader breaks'},{name:"Concorso Presepi",link:"https://github.com/nicolatoscan/concorso-presepi-2020",description:"Vote for the best nativity scene in my Village"},{name:"Copy Lorem Ipsum",link:"https://github.com/nicolatoscan/copy-lorem-ipsum",description:"By opening this site Lorem Ipsum will be copied in your clipboard"}]},{name:"Telegram & Discord Bots",projects:[{name:"Twitch to MP3",link:"https://github.com/nicolatoscan/twitch-to-mp3-telegram-bot",description:"Get a twitch live as a mp3 podcast on Telegram"},{name:"Laundry",link:"https://github.com/nicolatoscan/laundry-bot",description:"Check availability and book laundry in a student accomodation"},{name:"Aurora",link:"https://github.com/nicolatoscan/aurora-bot",description:"Allerts you when the northen lights may be visible"},{name:"P&S Grades",link:"https://github.com/nicolatoscan/probabilita-statistica-unitn-telegram-bot",description:"Get the latest daily grade of a course at the University of Trento"},{name:"Discord cinema",link:"https://github.com/nicolatoscan/cinebiscotto-discord-bot",description:"Create a channel on Discord and launch a countdown to watch a movie together"},{name:"Auto Suscriber Exam",link:"https://github.com/nicolatoscan/automatic-suscribe-exam",description:"Automatically suscribes you to the exam you want when a new place is available"},{name:"Telegram shell controller",link:"https://github.com/nicolatoscan/telegram-shell-controller",description:"Control your shell from your phone"},{name:"Files bot",link:"https://github.com/nicolatoscan/file-bot",description:"Remotely download a file and upload it to Telegram"}]},{name:"Android",projects:[{name:"Rememo",link:"https://github.com/nicolatoscan/rememo-android-app",description:"Android App with flashcards to learn languages"},{name:"Frier Timer",link:"https://github.com/nicolatoscan/FrierTimer",description:"Android app to check fring time in two basket friers"}]},{name:"Arduino",projects:[{name:"Smart lights",link:"https://github.com/nicolatoscan/smart-hub-console-controller",description:"Controll the lights of my house with Arduino"}]},{name:"Data Science & Algorithms",projects:[{name:"Wikipedia communities",link:"https://github.com/nicolatoscan/wikipedia-communities",description:"Detect wikipedia communities from the interaction graph"},{name:"Galaxies",link:"https://github.com/nicolatoscan/ml-galaxies",description:"Classify galaxies from their images"},{name:"Wikipedia emotions",link:"https://github.com/nicolatoscan/wiki-emo-dp",description:"Analysis of wikipedia emotions"},{name:"Masyu",link:"https://github.com/nicolatoscan/SWRace-JeffWho",description:"Our proposal to solve the Masyu puzzle, a NP problem"}]}]]}class _e extends F{constructor(e){super(),j(this,e,De,Pe,o,{})}}function Ne(t){let n,i;return{c(){n=g("svg"),i=g("path"),w(i,"d","M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"),w(i,"fill",t[2]),w(n,"width",t[0]),w(n,"height",t[1]),w(n,"viewBox",t[3])},m(e,t){u(e,n,t),h(n,i)},p(e,[t]){4&t&&w(i,"fill",e[2]),1&t&&w(n,"width",e[0]),2&t&&w(n,"height",e[1]),8&t&&w(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function Re(e,t,n){let{size:i="1em"}=t,{width:s=i}=t,{height:o=i}=t,{color:l="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,s=e.width),"height"in e&&n(1,o=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,a=e.viewBox)},[s,o,l,a,i]}class Oe extends F{constructor(e){super(),j(this,e,Re,Ne,o,{size:4,width:0,height:1,color:2,viewBox:3})}}function We(t){let n,i;return{c(){n=g("svg"),i=g("path"),w(i,"d","M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"),w(i,"fill",t[2]),w(n,"width",t[0]),w(n,"height",t[1]),w(n,"viewBox",t[3])},m(e,t){u(e,n,t),h(n,i)},p(e,[t]){4&t&&w(i,"fill",e[2]),1&t&&w(n,"width",e[0]),2&t&&w(n,"height",e[1]),8&t&&w(n,"viewBox",e[3])},i:e,o:e,d(e){e&&d(n)}}}function je(e,t,n){let{size:i="1em"}=t,{width:s=i}=t,{height:o=i}=t,{color:l="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&n(4,i=e.size),"width"in e&&n(0,s=e.width),"height"in e&&n(1,o=e.height),"color"in e&&n(2,l=e.color),"viewBox"in e&&n(3,a=e.viewBox)},[s,o,l,a,i]}class Fe extends F{constructor(e){super(),j(this,e,je,We,o,{size:4,width:0,height:1,color:2,viewBox:3})}}function Ue(e){let t,n;return t=new Fe({props:{color:"#ffad6b",size:"32"}}),{c(){N(t.$$.fragment)},m(e,i){R(t,e,i),n=!0},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function Ge(e){let t,n;return t=new Oe({props:{color:"#ffad6b",size:"32"}}),{c(){N(t.$$.fragment)},m(e,i){R(t,e,i),n=!0},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function Je(e){let t,n,i,s,o,l,a,r,m,g,f,$,C,x,y,k,A,L,M,S,T,B,E,z,H,I,W,j,F,U,J,Z,q,K,Q;n=new G({});let X=e[0]&&Ue(),Y=!e[0]&&Ge();return r=new he({}),f=new xe({props:{type:"Education"}}),x=new xe({props:{type:"Experience"}}),A=new ke({}),S=new xe({props:{type:"Projects"}}),E=new _e({}),I=new Le({}),F=new Ee({}),{c(){t=p("div"),N(n.$$.fragment),i=v(),s=p("div"),X&&X.c(),o=v(),Y&&Y.c(),l=v(),a=p("div"),N(r.$$.fragment),m=v(),g=p("div"),N(f.$$.fragment),$=v(),C=p("div"),N(x.$$.fragment),y=v(),k=p("div"),N(A.$$.fragment),L=v(),M=p("div"),N(S.$$.fragment),T=v(),B=p("div"),N(E.$$.fragment),z=v(),H=p("div"),N(I.$$.fragment),W=v(),j=p("div"),N(F.$$.fragment),U=v(),J=p("footer"),J.innerHTML='<p class="svelte-19nitbs">Made with Svelte by Me</p> \n    <p class="svelte-19nitbs">Last updated September 2022</p>',w(s,"class","theme-switch themed-icon svelte-19nitbs"),w(a,"id","about-me"),w(a,"class","section svelte-19nitbs"),w(g,"id","education"),w(g,"class","section svelte-19nitbs"),w(C,"id","experiences"),w(C,"class","section svelte-19nitbs"),w(k,"id","skills"),w(k,"class","section svelte-19nitbs"),w(M,"id","other-experiences"),w(M,"class","section svelte-19nitbs"),w(B,"id","projects"),w(B,"class","section svelte-19nitbs"),w(H,"id","else"),w(H,"class","section svelte-19nitbs"),w(j,"id","certifications"),w(j,"class","section svelte-19nitbs"),w(J,"class","svelte-19nitbs"),w(t,"class",Z=c(e[0]?"main dark":"main light")+" svelte-19nitbs")},m(c,d){u(c,t,d),R(n,t,null),h(t,i),h(t,s),X&&X.m(s,null),h(s,o),Y&&Y.m(s,null),h(t,l),h(t,a),R(r,a,null),h(t,m),h(t,g),R(f,g,null),h(t,$),h(t,C),R(x,C,null),h(t,y),h(t,k),R(A,k,null),h(t,L),h(t,M),R(S,M,null),h(t,T),h(t,B),R(E,B,null),h(t,z),h(t,H),R(I,H,null),h(t,W),h(t,j),R(F,j,null),h(t,U),h(t,J),q=!0,K||(Q=b(s,"click",e[1]),K=!0)},p(e,[n]){e[0]?X?1&n&&D(X,1):(X=Ue(),X.c(),D(X,1),X.m(s,o)):X&&(V(),_(X,1,1,(()=>{X=null})),P()),e[0]?Y&&(V(),_(Y,1,1,(()=>{Y=null})),P()):Y?1&n&&D(Y,1):(Y=Ge(),Y.c(),D(Y,1),Y.m(s,null)),(!q||1&n&&Z!==(Z=c(e[0]?"main dark":"main light")+" svelte-19nitbs"))&&w(t,"class",Z)},i(e){q||(D(n.$$.fragment,e),D(X),D(Y),D(r.$$.fragment,e),D(f.$$.fragment,e),D(x.$$.fragment,e),D(A.$$.fragment,e),D(S.$$.fragment,e),D(E.$$.fragment,e),D(I.$$.fragment,e),D(F.$$.fragment,e),q=!0)},o(e){_(n.$$.fragment,e),_(X),_(Y),_(r.$$.fragment,e),_(f.$$.fragment,e),_(x.$$.fragment,e),_(A.$$.fragment,e),_(S.$$.fragment,e),_(E.$$.fragment,e),_(I.$$.fragment,e),_(F.$$.fragment,e),q=!1},d(e){e&&d(t),O(n),X&&X.d(),Y&&Y.d(),O(r),O(f),O(x),O(A),O(S),O(E),O(I),O(F),K=!1,Q()}}}function Ze(e,t,n){let i=!("false"===localStorage.getItem("darkTheme"));return[i,function(){n(0,i=!i),localStorage.setItem("darkTheme",i?"true":"false")}]}return new class extends F{constructor(e){super(),j(this,e,Ze,Je,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
