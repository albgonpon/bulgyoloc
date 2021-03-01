var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(s,a)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(a){s=[6,a];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-701843af.system.js","./p-c5bab80f.system.js","./p-ee3d2281.system.js","./p-bf6e760c.system.js"],(function(e){"use strict";var t,n,r,i,o,s,a,c,f;return{setters:[function(e){t=e.r;n=e.h;r=e.H;i=e.g},function(e){o=e.H},function(e){s=e.g},function(e){a=e.d;c=e.u;f=e.c}],execute:function(){var u={container:"container",arrow:"arrow"};var l=e("calcite_tooltip",function(){function e(e){var n=this;t(this,e);this.offsetDistance=a;this.offsetSkidding=0;this.open=false;this.placement="auto";this.theme="light";this._referenceElement=this.getReferenceElement();this.getId=function(){return n.el.id||"calcite-tooltip-"+s()};this.addReferenceAria=function(){var e=n._referenceElement;if(e&&!e.hasAttribute("aria-describedby")){e.setAttribute("aria-describedby",n.getId())}};this.addReferenceListeners=function(){var e=n._referenceElement;if(!e){return}e.addEventListener("mouseenter",n.show);e.addEventListener("mouseleave",n.hide);e.addEventListener("focus",n.show);e.addEventListener("blur",n.hide)};this.removeReferenceListeners=function(){var e=n._referenceElement;if(!e){return}e.removeEventListener("mouseenter",n.show);e.removeEventListener("mouseleave",n.hide);e.removeEventListener("focus",n.show);e.removeEventListener("blur",n.hide)};this.show=function(){n.open=true};this.hide=function(){n.open=false}}e.prototype.offsetDistanceOffsetHandler=function(){this.reposition()};e.prototype.offsetSkiddingHandler=function(){this.reposition()};e.prototype.openHandler=function(e){if(e){this.createPopper()}else{this.destroyPopper()}};e.prototype.placementHandler=function(){this.reposition()};e.prototype.referenceElementHandler=function(){this.removeReferenceListeners();this._referenceElement=this.getReferenceElement();this.addReferenceListeners();this.addReferenceAria();this.createPopper()};e.prototype.componentDidLoad=function(){this.addReferenceListeners();this.addReferenceAria();this.createPopper()};e.prototype.componentDidUnload=function(){this.removeReferenceListeners();this.destroyPopper()};e.prototype.reposition=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,r,i;return __generator(this,(function(o){e=this,t=e.popper,n=e.el,r=e.placement;i=this.getModifiers();t?c({el:n,modifiers:i,placement:r,popper:t}):this.createPopper();return[2]}))}))};e.prototype.getReferenceElement=function(){var e=this.referenceElement;return(typeof e==="string"?document.getElementById(e):e)||null};e.prototype.getModifiers=function(){var e=this,t=e.arrowEl,n=e.offsetDistance,r=e.offsetSkidding;var i={name:"arrow",enabled:true,options:{element:t}};var o={name:"offset",enabled:true,options:{offset:[r,n]}};return[i,o]};e.prototype.createPopper=function(){this.destroyPopper();var e=this,t=e.el,n=e.open,r=e.placement,i=e._referenceElement;var o=this.getModifiers();this.popper=f({el:t,modifiers:o,open:n,placement:r,referenceEl:i})};e.prototype.destroyPopper=function(){var e=this.popper;if(e){e.destroy()}this.popper=null};e.prototype.render=function(){var e;var t=this;var i=this,s=i._referenceElement,a=i.open;var c=s&&a;return n(r,{role:"tooltip",class:(e={},e[o.hydratedInvisible]=!c,e),"aria-hidden":!c?"true":"false",id:this.getId()},n("div",{class:u.arrow,ref:function(e){return t.arrowEl=e}}),n("div",{class:u.container},n("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}:host([aria-hidden=true]){pointer-events:none}:host([aria-hidden=false]){-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16)}.arrow,.arrow:before{position:absolute;width:8px;height:8px;z-index:-1}.arrow:before{content:\"\";-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground)}:host([data-popper-placement^=top])>.arrow{bottom:-4px}:host([data-popper-placement^=bottom])>.arrow{top:-4px}:host([data-popper-placement^=left])>.arrow{right:-4px}:host([data-popper-placement^=right])>.arrow{left:-4px}.container{position:relative;border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:.8125rem;line-height:1.5}"},enumerable:true,configurable:true});return e}())}}}));