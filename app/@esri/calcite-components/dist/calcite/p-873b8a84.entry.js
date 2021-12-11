import{r as t,c as e,h as i,H as o,g as s}from"./p-8d9aae43.js";import{b as r,g as a}from"./p-e29d1efc.js";import{g as n}from"./p-4a8cec5c.js";const l=class{constructor(i){t(this,i),this.appearance="solid",this.layout="horizontal",this.hiddenInput=(()=>{const t=document.createElement("input");return t.type="hidden",this.el.appendChild(t),t})(),this.calciteRadioGroupChange=e(this,"calciteRadioGroupChange",7)}handleNameChange(t){this.hiddenInput.name=t}handleSelectedItemChange(t,e){if(t===e)return;const i=this.getItems(),o=Array.from(i).filter(e=>e===t).pop();o?(this.selectItem(o),this.calciteRadioGroupChange.emit()):i[0]&&(i[0].tabIndex=0)}connectedCallback(){["s","m","l"].includes(this.scale)||(this.scale=r(this.el.parentElement,"scale","m")),["solid","outline"].includes(this.appearance)||(this.appearance="solid"),["horizontal","vertical"].includes(this.layout)||(this.layout="horizontal");const t=this.getItems();let e=Array.from(t).filter(t=>t.checked).pop();e?this.selectItem(e):t[0]&&(t[0].tabIndex=0);const{hiddenInput:i,name:o}=this;o&&(i.name=o),e&&(i.value=e.value)}componentDidLoad(){this.hasLoaded=!0}render(){return i(o,{role:"radiogroup"},i("slot",null))}handleClick(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)}handleSelected(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))}handleKeyDown(t){const e=n(t.key),{el:i,selectedItem:o}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(e))return;let s=e;"rtl"===a(i)&&("ArrowRight"===e&&(s="ArrowLeft"),"ArrowLeft"===e&&(s="ArrowRight"));const r=this.getItems();let l=-1;switch(r.forEach((t,e)=>{t===o&&(l=e)}),s){case"ArrowLeft":case"ArrowUp":t.preventDefault();const e=r.item(l<1?r.length-1:l-1);return void this.selectItem(e);case"ArrowRight":case"ArrowDown":t.preventDefault();const i=-1===l?r.item(1):r.item(l+1)||r.item(0);return void this.selectItem(i);case" ":return t.preventDefault(),void this.selectItem(t.target);default:return}}async setFocus(){var t;null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t){if(t===this.selectedItem)return;const e=this.getItems();let i=null;e.forEach(e=>{const o=e.value===t.value;(o&&!e.checked||!o&&e.checked)&&(e.checked=o),e.tabIndex=o?0:-1,o&&(i=e)}),this.selectedItem=i,this.syncWithInputProxy(i),i&&i.focus()}syncWithInputProxy(t){this.hiddenInput.value=t?t.value:""}get el(){return s(this)}static get watchers(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}}};l.style=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;margin-top:0.25rem}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start;-ms-flex-item-align:start;align-self:flex-start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}";const c=class{constructor(i){t(this,i),this.checked=!1,this.mutationObserver=this.getMutationObserver(),this.calciteRadioGroupItemChange=e(this,"calciteRadioGroupItemChange",7)}handleCheckedChange(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()}connectedCallback(){let t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t}disconnectedCallback(){this.mutationObserver.disconnect()}componentDidLoad(){const t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent}render(){const{checked:t,useFallback:e,value:s}=this,a=r(this.el,"scale","m"),n=r(this.el,"appearance","m"),l=r(this.el,"layout","m");return i(o,{role:"radio","aria-checked":t.toString(),scale:a,appearance:n,layout:l},i("label",null,i("slot",null,e?s:""),i("slot",{name:"input"})))}getMutationObserver(){return new MutationObserver(()=>this.syncFromExternalInput())}syncFromExternalInput(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)}syncToExternalInput(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked","true"):this.inputProxy.removeAttribute("checked"))}get el(){return s(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};c.style=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);cursor:pointer;line-height:1.25;margin:0 -1px 0 0;border:1px solid var(--calcite-ui-border-1);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:400;-webkit-transition:background 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background 0.1s ease-in-out, border-color 0.1s ease-in-out;cursor:pointer}:host([layout=vertical]){margin:0 0 -1px 0}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host([scale=s]){font-size:0.8125rem;line-height:1.5;padding:0.25rem 0.75rem}:host([scale=m]){font-size:0.9375rem;line-height:1.5;padding:0.4rem 1rem}:host([scale=l]){font-size:1rem;line-height:1.5;padding:0.5rem 1.5rem}:host(:hover){background-color:var(--calcite-ui-foreground-2)}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host([checked]){background-color:var(--calcite-ui-blue-1);border-color:var(--calcite-ui-blue-1);color:var(--calcite-ui-background);cursor:default}:host([appearance=outline][checked]){background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-blue-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1);color:var(--calcite-ui-blue-1)}label{pointer-events:none}::slotted(input){display:none}";export{l as calcite_radio_group,c as calcite_radio_group_item}