var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="calcite-app";var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=0;var c=false;var v=typeof window!=="undefined"?window:{};var d=v.CSS;var h=v.document||{head:{}};var p={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=function(e){return Promise.resolve(e)};var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=function(e,r,t,n){if(t){t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=e;var o=w(r,i);var l=N(n);p.ael(s,a,o,l);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return p.rel(s,a,o,l)}))}))}};var w=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var N=function(e){return(e&2)!==0};var R="{visibility:hidden}.hydrated{visibility:inherit}";var _="http://www.w3.org/1999/xlink";var S=function(e,r){if(r===void 0){r=""}{return function(){return}}};var x=function(e,r){{return function(){return}}};var k=new WeakMap;var C=function(e,r,t){var n=Ge.get(e);if(y&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Ge.set(e,n)};var L=function(e,r,t,n){var a=j(r.$tagName$);var i=Ge.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=k.get(e);var o=void 0;if(!s){k.set(e,s=new Set)}if(!s.has(a)){{if(p.$cssShim$){o=p.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=h.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var T=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=S("attachStyles",r.$tagName$);var i=L(m&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var j=function(e,r){return"sc-"+e};var E={};var P=function(e){return e!=null};var A=function(e){e=typeof e;return e==="object"||e==="function"};var M=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var O=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!A(a)){a=String(a)}if(o&&l){f[f.length-1].$text$+=a}else{f.push(o?I(null,a):a)}l=o}}};$(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,f,z)}var c=I(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var I=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var U=e("H",{});var B=function(e){return e&&e.$tag$===U};var z={forEach:function(e,r){return e.map(q).forEach(r)},map:function(e,r){return e.map(q).map(r).map(H)}};var q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var H=function(e){var r=I(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var V=function(e,r,t,n,a,i){if(t!==n){var s=ze(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=W(t);var $=W(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(ze(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){p.rel(e,r,t,false)}if(n){p.ael(e,r,n,false)}}else{var c=A(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(m){}}var h=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){r=o;h=true}}if(n==null||n===false){if(h){e.removeAttributeNS(_,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(_,r,n)}else{e.setAttribute(r,n)}}}}};var G=/\s/;var W=function(e){return!e?[]:e.split(G)};var D=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||E;var s=r.$attrs$||E;{for(n in i){if(!(n in s)){V(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){V(a,n,i[n],s[n],t,r.$flags$)}};var F=function(e,r,t,n){var l=r.$children$[t];var u=0;var c;var v;var d;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=h.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=h.createTextNode("")}else{c=l.$elm$=h.createElement(l.$flags$&2?"slot-fb":l.$tag$);{D(null,l,$)}if(P(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=F(e,l,u,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===l.$tag$&&e.$elm$){Q(e.$elm$,false)}}}return c};var Q=function(e,r){p.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==s&&a["s-ol"]){ee(a).insertBefore(a,Z(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(r){Q(a,r)}}p.$flags$&=~1};var J=function(e,r,t,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=F(null,t,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,Z(r))}}}};var K=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;se(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{Q(a,true)}}a.remove()}}};var X=function(e,r,t,n){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var f=r[0];var $=r[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(Y(f,c)){re(f,c);f=r[++a];c=n[++i]}else if(Y($,v)){re($,v);$=r[--l];v=n[--u]}else if(Y(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){Q(f.$elm$.parentNode,false)}re(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(Y($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){Q($.$elm$.parentNode,false)}re($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=F(r&&r[i],t,s,e)}else{re(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=F(r&&r[i],t,i,e);c=n[++i]}if(d){{ee(f.$elm$).insertBefore(d,Z(f.$elm$))}}}}if(a>l){J(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){K(r,a,l)}};var Y=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var Z=function(e){return e&&e["s-ol"]||e};var ee=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var re=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{if(i==="slot");else{D(e,r,$)}}if(n!==null&&a!==null){X(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}J(t,null,r,a,0,a.length-1)}else if(n!==null){K(n,0,n.length-1)}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var te=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}te(t)}}};var ne=[];var ae=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(ie(t,a)){i=ne.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{ne.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){ne.map((function(e){if(ie(e.$nodeToRelocate$,t["s-sn"])){i=ne.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!ne.some((function(e){return e.$nodeToRelocate$===t}))){ne.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){ae(r)}}};var ie=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var se=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(se)}};var oe=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||I(null,null);var u=B(r)?r:O(null,null,r);s=t.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return u.$attrs$[n]=t[r]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=t.shadowRoot||t;{a=t["s-sc"]}{i=t["s-cr"];o=m&&(n.$flags$&1)!==0;l=false}re($,u);{p.$flags$|=1;if(f){ae(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<ne.length;w++){c=ne[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<ne.length;w++){c=ne[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){te(u.$elm$)}p.$flags$&=~1;ne.length=0}};var le=e("g",(function(e){return Ie(e).$hostElement$}));var fe=e("c",(function(e,r,t){var n=le(e);return{emit:function(e){return $e(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var $e=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var ue=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ce=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=S("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return ve(e,a,r)};ue(e,n);var s;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return ge(a,r,t)}));e.$queuedListeners$=null}}{s=ge(a,"componentWillLoad")}}t();return ye(s,(function(){return Ze(i)}))};var ve=function(e,r,t){var n=e.$hostElement$;var a=S("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){T(e)}var s=S("render",e.$cmpMeta$.$tagName$);{{oe(e,de(r))}}if(p.$cssShim$){p.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return he(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var de=function(e){try{e=e.render()}catch(r){qe(r)}return e};var he=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=S("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{be(t)}{ge(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){me()}}}else{n()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ye((function(){return ce(e,false)}))}e.$flags$&=~(4|512)}};var pe=e("f",(function(e){{var r=Ie(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){ce(r,false)}return t}}));var me=function(e){{be(h.documentElement)}{p.$flags$|=2}Ye((function(){return $e(v,"appload",{detail:{namespace:n}})}))};var ge=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){qe(n)}}return undefined};var ye=function(e,r){return e&&e.then?e.then(r):r()};var be=function(e){return e.classList.add("hydrated")};var we=function(e,r){if(e!=null&&!A(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var Ne=function(e,r){return Ie(e).$instanceValues$.get(r)};var Re=function(e,r,t,n){var a=Ie(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=we(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){qe(n)}}))}}if((s&(2|16))===2){ce(a,false)}}}};var _e=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ne(this,n)},set:function(e){Re(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=Ie(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;p.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var Se=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Ve(a);if(!s.then)return[3,2];e=x();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}_e(s,a,2);s.isProxied=true}t=S("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){qe(c)}{n.$flags$&=~8}{n.$flags$|=128}t();xe(n.$lazyInstance$);i=j(a.$tagName$);if(!(!Ge.has(i)&&s.style))return[3,5];o=S("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-8b12c1a9.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=u.sent();u.label=4;case 4:C(i,l,!!(a.$flags$&1));o();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return ce(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var xe=function(e){{ge(e,"connectedCallback")}};var ke=function(e){if((p.$flags$&1)===0){var r=Ie(e);var t=r.$cmpMeta$;var n=S("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){Ce(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ue(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Se(e,r,t)}}else{b(e,r,t.$listeners$);xe(r.$lazyInstance$)}n()}};var Ce=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Le=function(e){if((p.$flags$&1)===0){var r=Ie(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(p.$cssShim$){p.$cssShim$.removeHost(e)}{ge(t,"componentDidUnload")}}};var Te=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var r=e["s-sn"]=Ee(e);var t=Pe(this.childNodes,r);if(t){var n=Ae(t,r);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var je=function(e,r){if(r.$flags$&8){var t=e.__lookupGetter__("children");var n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){var e=t.call(this);if((p.$flags$&1)===0){var r=Pe(e,"");if(r&&r.parentNode){return r.parentNode.children}}return e}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=n.call(this);if((p.$flags$&1)===0){var r=Pe(e,"");if(r&&r.parentNode){return r.parentNode.childNodes}}return e}})}};var Ee=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var Pe=function(e,r){var t=0;var n;for(;t<e.length;t++){n=e[t];if(n["s-sr"]&&n["s-sn"]===r){return n}n=Pe(n.childNodes,r);if(n){return n}}return null};var Ae=function(e,r){var t=[e];while((e=e.nextSibling)&&e["s-sn"]===r){t.push(e)}return t};var Me=e("b",(function(e,r){if(r===void 0){r={}}var t=S();var n=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var o=s.querySelector("meta[charset]");var l=h.createElement("style");var f=[];var $;var u=true;Object.assign(p,r);p.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;{if(r.syncQueue){p.$flags$|=4}}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!m&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Be(r,t);if(t.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}{je(r,t)}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{p.jmp((function(){return ke(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;p.jmp((function(){return Le(e)}))};r.prototype.forceUpdate=function(){pe(this)};r.prototype.componentOnReady=function(){return Ie(this).$onReadyPromise$};return r}(HTMLElement);{Te(o.prototype)}t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,_e(o,t,1))}}))}));{l.innerHTML=n+R;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{p.jmp((function(){return $=setTimeout(me,30)}))}}t()}));var Oe=new WeakMap;var Ie=function(e){return Oe.get(e)};var Ue=e("r",(function(e,r){return Oe.set(r.$lazyInstance$=e,r)}));var Be=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}b(e,t,r.$listeners$);return Oe.set(e,t)};var ze=function(e,r){return r in e};var qe=function(e){return console.error(e)};var He=new Map;var Ve=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=He.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{He.set(i,e)}return e[a]}),qe)};var Ge=new Map;var We=[];var De=[];var Fe=[];var Qe=function(e,r){return function(t){e.push(t);if(!c){c=true;if(r&&p.$flags$&4){Ye(Xe)}else{p.raf(Xe)}}}};var Je=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){qe(t)}}e.length=0};var Ke=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){qe(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Xe=function(){{u++}Je(We);{var e=(p.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;Ke(De,e);Ke(Fe,e);if(De.length>0){Fe.push.apply(Fe,De);De.length=0}if(c=We.length+De.length+Fe.length>0){p.raf(Xe)}else{u=0}}};var Ye=function(e){return g().then(e)};var Ze=Qe(De,true);var er=e("a",(function(){if(!(d&&d.supports&&d.supports("color","var(--c)"))){return r.import("./p-24b9f902.system.js").then((function(){if(p.$cssShim$=v.__cssshim){return p.$cssShim$.i()}else{return 0}}))}return g()}));var rr=e("p",(function(){{p.$cssShim$=v.__cssshim}var e=Array.from(h.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,v.location.href)).href;{tr(t.resourcesUrl,e)}if(!v.customElements){return r.import("./p-2295bcba.system.js").then((function(){return t}))}}return g(t)}));var tr=function(e,r){var t=M(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;v[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=h.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(v[t].m);o.remove()}}));a.set(i,s);h.head.appendChild(o)}return s}}}}}}));