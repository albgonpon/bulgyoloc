import{r as t,c as e,h as i,H as o,g as s}from"./p-8d9aae43.js";import{g as l}from"./p-e29d1efc.js";const n=class{constructor(i){t(this,i),this.active=!1,this.color="blue",this.scale="m",this.width="auto",this.dismissible=!1,this.icon=!1,this.noticeId=this.el.id,this.iconDefaults={green:"checkCircle",yellow:"exclamationMarkTriangle",red:"exclamationMarkTriangle",blue:"lightbulb"},this.calciteNoticeClose=e(this,"calciteNoticeClose",7),this.calciteNoticeOpen=e(this,"calciteNoticeOpen",7)}connectedCallback(){["blue","red","green","yellow"].includes(this.color)||(this.color="blue"),["s","m","l"].includes(this.scale)||(this.scale="m"),["auto","half","full"].includes(this.width)||(this.width="auto")}componentDidLoad(){this.noticeLinkEl=this.el.querySelectorAll("calcite-link")[0]}render(){const t=l(this.el),e=i("button",{class:"notice-close","aria-label":"close",onClick:()=>this.close(),ref:t=>this.closeButton=t},i("calcite-icon",{icon:"x",scale:"m"}));return i(o,{active:this.active,dir:t},this.icon?this.setIcon():null,i("div",{class:"notice-content"},i("slot",{name:"notice-title"}),i("slot",{name:"notice-message"}),i("slot",{name:"notice-link"})),this.dismissible?e:null)}async close(){this.active=!1,this.calciteNoticeClose.emit({requestedNotice:this.noticeId})}async open(){this.active=!0,this.calciteNoticeOpen.emit({requestedNotice:this.noticeId})}async setFocus(){(this.closeButton||this.noticeLinkEl)&&(this.noticeLinkEl?this.noticeLinkEl.setFocus():this.closeButton&&this.closeButton.focus())}setIcon(){return i("div",{class:"notice-icon"},i("calcite-icon",{icon:this.iconDefaults[this.color],scale:"m"}))}get el(){return s(this)}};n.style=":host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=s]) slot[name=notice-title]::slotted(div),:host([scale=s]) div::slotted([slot=notice-title]){font-size:0.875rem;line-height:1.5}:host([scale=s]) slot[name=notice-message]::slotted(div),:host([scale=s]) div::slotted([slot=notice-message]){font-size:0.8125rem;line-height:1.5}:host([scale=s]) ::slotted(calcite-link){font-size:0.8125rem;line-height:1.5}:host([scale=m]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.5rem}:host([scale=m]) slot[name=notice-title]::slotted(div),:host([scale=m]) div::slotted([slot=notice-title]){font-size:0.9375rem;line-height:1.5}:host([scale=m]) slot[name=notice-message]::slotted(div),:host([scale=m]) div::slotted([slot=notice-message]){font-size:0.875rem;line-height:1.5}:host([scale=m]) ::slotted(calcite-link){font-size:0.875rem;line-height:1.5}:host([scale=l]){--calcite-notice-spacing-token-small:1.2rem;--calcite-notice-spacing-token-large:1.875rem}:host([scale=l]) slot[name=notice-title]::slotted(div),:host([scale=l]) div::slotted([slot=notice-title]){font-size:1rem;line-height:1.5}:host([scale=l]) slot[name=notice-message]::slotted(div),:host([scale=l]) div::slotted([slot=notice-message]){font-size:0.9375rem;line-height:1.5}:host([scale=l]) ::slotted(calcite-link){font-size:0.9375rem;line-height:1.5}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;text-align:left;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--calcite-notice-width);max-height:0;background-color:var(--calcite-ui-foreground-1);opacity:0;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host([dir=rtl]){text-align:right;border-left:none;border-right:0px solid}:host([active]){display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;pointer-events:initial;border-width:3px;-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.08);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.08)}slot[name=notice-title]::slotted(div),div::slotted([slot=notice-title]){color:var(--calcite-ui-text-1);font-weight:500}slot[name=notice-message]::slotted(div),div::slotted([slot=notice-message]){display:inline;margin-right:var(--calcite-notice-spacing-token-small);color:var(--calcite-ui-text-2)}:host([dir=rtl]) slot[name=notice-message]::slotted(div),:host([dir=rtl]) div::slotted([slot=notice-message]){margin-right:unset;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-child{padding:var(--calcite-notice-spacing-token-small)}:host([dir=rtl]) .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}:host([dir=rtl]) .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.notice-icon{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.notice-close{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;color:var(--calcite-ui-text-3)}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}:host([color=blue]){border-color:var(--calcite-ui-blue-1)}:host([color=blue]) .notice-icon{color:var(--calcite-ui-blue-1)}:host([color=red]){border-color:var(--calcite-ui-red-1)}:host([color=red]) .notice-icon{color:var(--calcite-ui-red-1)}:host([color=yellow]){border-color:var(--calcite-ui-yellow-1)}:host([color=yellow]) .notice-icon{color:var(--calcite-ui-yellow-1)}:host([color=green]){border-color:var(--calcite-ui-green-1)}:host([color=green]) .notice-icon{color:var(--calcite-ui-green-1)}";export{n as calcite_notice}