import{b as Be,B as ue}from"./Button-BHDTfwow.js";import{j as Te,aK as Fe,aL as je,am as Me,aG as J,aM as Le,ad as ee,a5 as ve,r as F,p as N,ap as ne,q as S,s as R,K as I,d as B,h as s,y as ke,al as Ee,X as We,aF as H,aa as be,aN as te,a7 as G,x as Se,aO as He,aP as Ge,aQ as Ue,aR as qe,aS as _e,B as k,ag as oe,aT as we,F as Ve,v as Xe,aU as Qe,aV as Ye,aW as Ze,aX as Je,aY as eo,aZ as oo,a_ as no,af as to,ae as A,a$ as ro,z as Ne,b0 as io,G as L,C as ao,a3 as ce,b1 as Pe,b2 as ye,c as lo,o as so,w as E,a as W,u as O,N as ge,e as pe,t as fe,_ as uo}from"./app-BwSICZOQ.js";import{N as co}from"./Icon-Db1QaLyo.js";import{C as po}from"./ChevronRight-CrbikE9Z.js";import{N as fo}from"./Image-D14MWweb.js";function ho(e={},o){const t=Te({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,n=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==a.key)return;const v=r[y];if(typeof v=="function")v(a);else{const{stop:_=!1,prevent:P=!1}=v;_&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},u=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(y=>{if(y!==a.key)return;const v=i[y];if(typeof v=="function")v(a);else{const{stop:_=!1,prevent:P=!1}=v;_&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},c=()=>{(o===void 0||o.value)&&(ee("keydown",document,n),ee("keyup",document,u)),o!==void 0&&ve(o,a=>{a?(ee("keydown",document,n),ee("keyup",document,u)):(J("keydown",document,n),J("keyup",document,u))})};return Fe()?(je(c),Me(()=>{(o===void 0||o.value)&&(J("keydown",document,n),J("keyup",document,u))})):c(),Le(t)}function vo(e,o,t){const r=F(e.value);let i=null;return ve(e,n=>{i!==null&&window.clearTimeout(i),n===!0?t&&!t.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function bo(e){return o=>{o?e.value=o.$el:e.value=null}}const h="0!important",Re="-1px!important";function V(e){return S(`${e}-type`,[R("& +",[N("button",{},[S(`${e}-type`,[I("border",{borderLeftWidth:h}),I("state-border",{left:Re})])])])])}function X(e){return S(`${e}-type`,[R("& +",[N("button",[S(`${e}-type`,[I("border",{borderTopWidth:h}),I("state-border",{top:Re})])])])])}const mo=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[N("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),V("default"),S("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),S("vertical",{flexDirection:"column"},[N("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${h};
 border-radius: ${h};
 `),X("default"),S("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},yo=B({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=ke(e);return Ee("-button-group",mo,o),H(Be,e),{rtlEnabled:We("ButtonGroup",t,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),me=be("n-dropdown-menu"),re=be("n-dropdown"),xe=be("n-dropdown-option"),$e=B({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),go=B({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=G(me),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:i,renderOptionRef:n}=G(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:i,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:r,nodeProps:i,renderLabel:n,renderOption:u}=this,{rawNode:c}=this.tmNode,a=s("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(c)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(c.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(c):te((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:a,option:c}):a}});function he(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Ke=B({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=G(re),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:n,activeKeyPathRef:u,animatedRef:c,mergedShowRef:a,renderLabelRef:y,renderIconRef:v,labelFieldRef:_,childrenFieldRef:P,renderOptionRef:K,nodePropsRef:C,menuPropsRef:x}=o,g=G(xe,null),z=G(me),Q=G(_e),ie=k(()=>e.tmNode.rawNode),Y=k(()=>{const{value:l}=P;return he(e.tmNode.rawNode,l)}),ae=k(()=>{const{disabled:l}=e.tmNode;return l}),de=k(()=>{if(!Y.value)return!1;const{key:l,disabled:w}=e.tmNode;if(w)return!1;const{value:D}=t,{value:j}=r,{value:se}=i,{value:M}=n;return D!==null?M.includes(l):j!==null?M.includes(l)&&M[M.length-1]!==l:se!==null?M.includes(l):!1}),le=k(()=>r.value===null&&!c.value),Z=vo(de,300,le),U=k(()=>!!(g!=null&&g.enteringSubmenuRef.value)),q=F(!1);H(xe,{enteringSubmenuRef:q});function T(){q.value=!0}function d(){q.value=!1}function m(){const{parentKey:l,tmNode:w}=e;w.disabled||a.value&&(i.value=l,r.value=null,t.value=w.key)}function f(){const{tmNode:l}=e;l.disabled||a.value&&t.value!==l.key&&m()}function p(l){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:w}=l;w&&!we({target:w},"dropdownOption")&&!we({target:w},"scrollbarRail")&&(t.value=null)}function $(){const{value:l}=Y,{tmNode:w}=e;a.value&&!l&&!w.disabled&&(o.doSelect(w.key,w.rawNode),o.doUpdateShow(!1))}return{labelField:_,renderLabel:y,renderIcon:v,siblingHasIcon:z.showIconRef,siblingHasSubmenu:z.hasSubmenuRef,menuProps:x,popoverBody:Q,animated:c,mergedShowSubmenu:k(()=>Z.value&&!U.value),rawNode:ie,hasSubmenu:Y,pending:oe(()=>{const{value:l}=n,{key:w}=e.tmNode;return l.includes(w)}),childActive:oe(()=>{const{value:l}=u,{key:w}=e.tmNode,D=l.findIndex(j=>w===j);return D===-1?!1:D<l.length-1}),active:oe(()=>{const{value:l}=u,{key:w}=e.tmNode,D=l.findIndex(j=>w===j);return D===-1?!1:D===l.length-1}),mergedDisabled:ae,renderOption:K,nodeProps:C,handleClick:$,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:n,siblingHasIcon:u,siblingHasSubmenu:c,renderLabel:a,renderIcon:y,renderOption:v,nodeProps:_,props:P,scrollable:K}=this;let C=null;if(i){const Q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);C=s(Ce,Object.assign({},Q,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const x={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=_==null?void 0:_(r),z=s("div",Object.assign({class:[`${n}-dropdown-option`,g==null?void 0:g.class],"data-dropdown-option":!0},g),s("div",Se(x,P),[s("div",{class:[`${n}-dropdown-option-body__prefix`,u&&`${n}-dropdown-option-body__prefix--show-icon`]},[y?y(r):te(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,c&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(co,null,{default:()=>s(po,null)}):null)]),this.hasSubmenu?s(He,null,{default:()=>[s(Ge,null,{default:()=>s("div",{class:`${n}-dropdown-offset-container`},s(Ue,{show:this.mergedShowSubmenu,placement:this.placement,to:K&&this.popoverBody||void 0,teleportDisabled:!K},{default:()=>s("div",{class:`${n}-dropdown-menu-wrapper`},t?s(qe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return v?v({node:z,option:r}):z}}),So=B({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:r}=e;return s(Ve,null,s(go,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(i=>{const{rawNode:n}=i;return n.show===!1?null:Ie(n)?s($e,{clsPrefix:t,key:i.key}):i.isGroup?(Xe("dropdown","`group` node is not allowed to be put in `group` node."),null):s(Ke,{clsPrefix:t,tmNode:i,parentKey:o,key:i.key})}))}}),_o=B({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),Ce=B({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=G(re);H(me,{showIconRef:k(()=>{const i=o.value;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:a})=>i?i(a):a.icon);const{rawNode:c}=n;return i?i(c):c.icon})}),hasSubmenuRef:k(()=>{const{value:i}=t;return e.tmNodes.some(n=>{var u;if(n.isGroup)return(u=n.children)===null||u===void 0?void 0:u.some(({rawNode:a})=>he(a,i));const{rawNode:c}=n;return he(c,i)})})});const r=F(null);return H(Ze,null),H(Je,null),H(_e,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,r=this.tmNodes.map(i=>{const{rawNode:n}=i;return n.show===!1?null:ko(n)?s(_o,{tmNode:i,key:i.key}):Ie(n)?s($e,{clsPrefix:o,key:i.key}):xo(n)?s(So,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):s(Ke,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:n.props,scrollable:t})});return s("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?s(Qe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ye({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),No=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[eo(),N("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[S("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),S("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),S("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),S("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),S("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[S("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[S("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[S("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),S("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Pe),$o=Object.assign(Object.assign(Object.assign({},Pe),Po),Ne.props),Io=B({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=F(!1),t=to(A(e,"show"),o),r=k(()=>{const{keyField:d,childrenField:m}=e;return ro(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),i=k(()=>r.value.treeNodes),n=F(null),u=F(null),c=F(null),a=k(()=>{var d,m,f;return(f=(m=(d=n.value)!==null&&d!==void 0?d:u.value)!==null&&m!==void 0?m:c.value)!==null&&f!==void 0?f:null}),y=k(()=>r.value.getPath(a.value).keyPath),v=k(()=>r.value.getPath(e.value).keyPath),_=oe(()=>e.keyboard&&t.value);ho({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:Y},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:Q}},_);const{mergedClsPrefixRef:P,inlineThemeDisabled:K}=ke(e),C=Ne("Dropdown","-dropdown",No,io,e,P);H(re,{labelFieldRef:A(e,"labelField"),childrenFieldRef:A(e,"childrenField"),renderLabelRef:A(e,"renderLabel"),renderIconRef:A(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:u,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:y,activeKeyPathRef:v,animatedRef:A(e,"animated"),mergedShowRef:t,nodePropsRef:A(e,"nodeProps"),renderOptionRef:A(e,"renderOption"),menuPropsRef:A(e,"menuProps"),doSelect:x,doUpdateShow:g}),ve(t,d=>{!e.animated&&!d&&z()});function x(d,m){const{onSelect:f}=e;f&&ce(f,d,m)}function g(d){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&ce(m,d),f&&ce(f,d),o.value=d}function z(){n.value=null,u.value=null,c.value=null}function Q(){g(!1)}function ie(){U("left")}function Y(){U("right")}function ae(){U("up")}function de(){U("down")}function le(){const d=Z();d!=null&&d.isLeaf&&t.value&&(x(d.key,d.rawNode),g(!1))}function Z(){var d;const{value:m}=r,{value:f}=a;return!m||f===null?null:(d=m.getNode(f))!==null&&d!==void 0?d:null}function U(d){const{value:m}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(m===null){const $=f();$!==null&&(p=$.key)}else{const $=Z();if($){let l;switch(d){case"down":l=$.getNext();break;case"up":l=$.getPrev();break;case"right":l=$.getChild();break;case"left":l=$.getParent();break}l&&(p=l.key)}}p!==null&&(n.value=null,u.value=p)}const q=k(()=>{const{size:d,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:p}=C.value,{padding:$,dividerColor:l,borderRadius:w,optionOpacityDisabled:D,[L("optionIconSuffixWidth",d)]:j,[L("optionSuffixWidth",d)]:se,[L("optionIconPrefixWidth",d)]:M,[L("optionPrefixWidth",d)]:ze,[L("fontSize",d)]:Oe,[L("optionHeight",d)]:De,[L("optionIconSize",d)]:Ae}=p,b={"--n-bezier":f,"--n-font-size":Oe,"--n-padding":$,"--n-border-radius":w,"--n-option-height":De,"--n-option-prefix-width":ze,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":j,"--n-option-icon-size":Ae,"--n-divider-color":l,"--n-option-opacity-disabled":D};return m?(b["--n-color"]=p.colorInverted,b["--n-option-color-hover"]=p.optionColorHoverInverted,b["--n-option-color-active"]=p.optionColorActiveInverted,b["--n-option-text-color"]=p.optionTextColorInverted,b["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,b["--n-option-text-color-active"]=p.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,b["--n-prefix-color"]=p.prefixColorInverted,b["--n-suffix-color"]=p.suffixColorInverted,b["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(b["--n-color"]=p.color,b["--n-option-color-hover"]=p.optionColorHover,b["--n-option-color-active"]=p.optionColorActive,b["--n-option-text-color"]=p.optionTextColor,b["--n-option-text-color-hover"]=p.optionTextColorHover,b["--n-option-text-color-active"]=p.optionTextColorActive,b["--n-option-text-color-child-active"]=p.optionTextColorChildActive,b["--n-prefix-color"]=p.prefixColor,b["--n-suffix-color"]=p.suffixColor,b["--n-group-header-text-color"]=p.groupHeaderTextColor),b}),T=K?ao("dropdown",k(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:P,mergedTheme:C,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&z()},doUpdateShow:g,cssVars:K?void 0:q,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,i,n,u,c)=>{var a;const{mergedClsPrefix:y,menuProps:v}=this;(a=this.onRender)===null||a===void 0||a.call(this);const _=(v==null?void 0:v(void 0,this.tmNodes.map(K=>K.rawNode)))||{},P={ref:bo(i),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:c};return s(Ce,Se(this.$attrs,P,_))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(no,Object.assign({},oo(this.$props,Ro),t),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}}),To="/img/desktop/logIn_mbd.png",Fo="/img/desktop/key_lemonsqueezy.png",jo="/img/desktop/login_lemonsqueezy.png",Mo="/img/desktop/mianbaoduo.png",Lo="/img/desktop/lemonsqueezy.png",Ko="https://ghfast.top/",Co=B({__name:"Desktop",async setup(e){let o,t;const r=([o,t]=ye(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),o=await o,t(),o),n=([o,t]=ye(()=>r.json()),o=await o,t(),o).version,u=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://github.com/NewAlist/desktop-release/releases/latest/download/alist-desktop_${n}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://github.com/NewAlist/desktop-release/releases/latest/download/alist-desktop_${n}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://github.com/NewAlist/desktop-release/releases/latest/download/alist-desktop_${n}_x64_en-US.msi`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://github.com/NewAlist/desktop-release/releases/latest/download/alist-desktop_${n}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://github.com/NewAlist/desktop-release/releases/latest/download/alist-desktop_${n}_amd64.deb`}],c=navigator.platform.toLowerCase(),a=F("win_x64");c.includes("win")?a.value="win_x64":c.includes("linux")?a.value="linux":c.includes("mac")&&(a.value="mac_arm64"),console.log(a.value);let y={down:"Download",website:"Website"};const v=k(()=>{var x;return(x=u.find(g=>g.key===a.value))==null?void 0:x.label}),_=k(()=>u.map(x=>({...x,label:`${x.label} ${a.value===x.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(y={down:"下载",website:"官网"});function P(){var g;const x=(g=u.find(z=>z.key===a.value))==null?void 0:g.url;window.open(`${Ko}${x}`,"_blank")}function K(x){a.value=x}function C(){window.open("https://ad.nn.ci/","_blank")}return(x,g)=>(so(),lo(O(ge),{align:"center",vertical:"",size:"large"},{default:E(()=>[W(O(ge),{class:"btn"},{default:E(()=>[W(O(ue),{size:"large",type:"info",onClick:C,tertiary:""},{default:E(()=>[pe(fe(O(y).website),1)]),_:1}),W(O(yo),null,{default:E(()=>[W(O(Io),{trigger:"hover",options:_.value,onSelect:K,size:"large"},{default:E(()=>[W(O(ue),{size:"large",type:"primary",tertiary:""},{default:E(()=>[pe("💻"+fe(v.value),1)]),_:1})]),_:1},8,["options"]),W(O(ue),{size:"large",onClick:P,type:"info",secondary:""},{default:E(()=>[pe(fe(O(y).down),1)]),_:1})]),_:1})]),_:1}),W(O(fo),{src:"/img/guide/desktop.png"})]),_:1}))}}),Eo=uo(Co,[["__scopeId","data-v-8e6aedab"]]);export{Eo as D,Fo as _,jo as a,To as b,Lo as c,Mo as d};
