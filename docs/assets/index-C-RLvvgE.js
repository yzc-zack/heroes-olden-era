const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ArticleView-B1mG8yQG.js","assets/_plugin-vue_export-helper-CyGPlfrL.js","assets/ArticleView-D4icrSt9.css","assets/NotFoundView-BmgTyqUN.js","assets/NotFoundView-CfU_bwmG.css"])))=>i.map(i=>d[i]);
import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,Q as ee,R as g,S as _,T as v,U as y,V as b,W as te,X as ne,Y as x,Z as S,_ as C,a as re,b as ie,c as ae,d as oe,et as se,f as ce,g as le,h as ue,i as de,j as w,k as T,l as fe,m as pe,n as me,p as he,q as ge,r as _e,s as ve,t as ye,u as be,v as xe,w as Se,x as Ce,y as E,z as we}from"./_plugin-vue_export-helper-CyGPlfrL.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Te=void 0,Ee=typeof window<`u`&&window.trustedTypes;if(Ee)try{Te=Ee.createPolicy(`vue`,{createHTML:e=>e})}catch{}var De=Te?e=>Te.createHTML(e):e=>e,Oe=`http://www.w3.org/2000/svg`,ke=`http://www.w3.org/1998/Math/MathML`,D=typeof document<`u`?document:null,Ae=D&&D.createElement(`template`),je={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?D.createElementNS(Oe,e):t===`mathml`?D.createElementNS(ke,e):n?D.createElement(e,{is:n}):D.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>D.createTextNode(e),createComment:e=>D.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>D.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ae.innerHTML=De(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ae.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},O=`transition`,k=`animation`,A=Symbol(`_vtc`),Me={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ne=n({},xe,Me),Pe=(e=>(e.displayName=`Transition`,e.props=Ne,e))((e,{slots:n})=>t(C,Ie(e),n)),j=(e,t=[])=>{y(e)?e.forEach(e=>e(...t)):e&&e(...t)},Fe=e=>e?y(e)?e.some(e=>e.length>1):e.length>1:!1;function Ie(e){let t={};for(let n in e)n in Me||(t[n]=e[n]);if(e.css===!1)return t;let{name:r=`v`,type:i,duration:a,enterFromClass:o=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:c=`${r}-enter-to`,appearFromClass:l=o,appearActiveClass:u=s,appearToClass:d=c,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:p=`${r}-leave-active`,leaveToClass:m=`${r}-leave-to`}=e,h=Le(a),ee=h&&h[0],g=h&&h[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:y,onLeave:b,onLeaveCancelled:te,onBeforeAppear:ne=_,onAppear:x=v,onAppearCancelled:S=y}=t,C=(e,t,n,r)=>{e._enterCancelled=r,N(e,t?d:c),N(e,t?u:s),n&&n()},re=(e,t)=>{e._isLeaving=!1,N(e,f),N(e,m),N(e,p),t&&t()},ie=e=>(t,n)=>{let r=e?x:v,a=()=>C(t,e,n);j(r,[t,a]),ze(()=>{N(t,e?l:o),M(t,e?d:c),Fe(r)||Ve(t,i,ee,a)})};return n(t,{onBeforeEnter(e){j(_,[e]),M(e,o),M(e,s)},onBeforeAppear(e){j(ne,[e]),M(e,l),M(e,u)},onEnter:ie(!1),onAppear:ie(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>re(e,t);M(e,f),e._enterCancelled?(M(e,p),Ge(e)):(Ge(e),M(e,p)),ze(()=>{e._isLeaving&&(N(e,f),M(e,m),Fe(b)||Ve(e,i,g,n))}),j(b,[e,n])},onEnterCancelled(e){C(e,!1,void 0,!0),j(y,[e])},onAppearCancelled(e){C(e,!0,void 0,!0),j(S,[e])},onLeaveCancelled(e){re(e),j(te,[e])}})}function Le(e){if(e==null)return null;if(d(e))return[Re(e.enter),Re(e.leave)];{let t=Re(e);return[t,t]}}function Re(e){return se(e)}function M(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[A]||(e[A]=new Set)).add(t)}function N(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[A];n&&(n.delete(t),n.size||(e[A]=void 0))}function ze(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var Be=0;function Ve(e,t,n,r){let i=e._endId=++Be,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=He(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function He(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${O}Delay`),a=r(`${O}Duration`),o=Ue(i,a),s=r(`${k}Delay`),c=r(`${k}Duration`),l=Ue(s,c),u=null,d=0,f=0;t===O?o>0&&(u=O,d=o,f=a.length):t===k?l>0&&(u=k,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?O:k:null,f=u?u===O?a.length:c.length:0);let p=u===O&&/\b(?:transform|all)(?:,|$)/.test(r(`${O}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Ue(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>We(t)+We(e[n])))}function We(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function Ge(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ke(e,t,n){let r=e[A];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var qe=Symbol(`_vod`),Je=Symbol(`_vsh`),Ye=Symbol(``),Xe=/(?:^|;)\s*display\s*:/;function Ze(e,t,n){let r=e.style,i=x(n),a=!1;if(n&&!i){if(t)if(x(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??P(r,t,``)}else for(let e in t)n[e]??P(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?P(r,i,``):nt(e,i,!x(t)&&t?t[i]:void 0,o)||P(r,i,o)}}else if(i){if(t!==n){let e=r[Ye];e&&(n+=`;`+e),r.cssText=n,a=Xe.test(n)}}else t&&e.removeAttribute(`style`);qe in e&&(e[qe]=a?r.display:``,e[Je]&&(r.display=`none`))}var Qe=/\s*!important$/;function P(e,t,n){if(y(n))n.forEach(n=>P(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=tt(e,t);Qe.test(n)?e.setProperty(b(r),n.replace(Qe,``),`important`):e[r]=n}}var $e=[`Webkit`,`Moz`,`ms`],et={};function tt(e,t){let n=et[t];if(n)return n;let r=g(t);if(r!==`filter`&&r in e)return et[t]=r;r=we(r);for(let n=0;n<$e.length;n++){let i=$e[n]+r;if(i in e)return et[t]=i}return t}function nt(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&x(r)&&n===r}var rt=`http://www.w3.org/1999/xlink`;function it(e,t,n,r,i,a=u(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(rt,t.slice(6,t.length)):e.setAttributeNS(rt,t,n):n==null||a&&!c(n)?e.removeAttribute(t):e.setAttribute(t,a?``:ne(n)?String(n):n)}function at(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?De(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=c(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function ot(e,t,n,r){e.addEventListener(t,n,r)}function st(e,t,n,r){e.removeEventListener(t,n,r)}var ct=Symbol(`_vei`);function lt(e,t,n,r,i=null){let a=e[ct]||(e[ct]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=dt(t);r?ot(e,n,a[t]=ht(r,i),s):o&&(st(e,n,o,s),a[t]=void 0)}}var ut=/(?:Once|Passive|Capture)$/;function dt(e){let t;if(ut.test(e)){t={};let n;for(;n=e.match(ut);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):b(e.slice(2)),t]}var ft=0,pt=Promise.resolve(),mt=()=>ft||=(pt.then(()=>ft=0),Date.now());function ht(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;ie(gt(e,n.value),t,5,[e])};return n.value=e,n.attached=mt(),n}function gt(e,t){if(y(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var _t=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,vt=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Ke(e,r,o):t===`style`?Ze(e,n,r):ge(t)?s(t)||lt(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):yt(e,t,r,o))?(at(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&it(e,t,r,o,a,t!==`value`)):e._isVueCE&&(bt(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!x(r)))?at(e,g(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),it(e,t,r,o))};function yt(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&_t(t)&&te(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return _t(t)&&x(n)?!1:t in e}function bt(e,t){let n=e._def.props;if(!n)return!1;let r=g(t);return Array.isArray(n)?n.some(e=>g(e)===r):Object.keys(n).some(e=>g(e)===r)}var xt=n({patchProp:vt},je),St;function Ct(){return St||=a(xt)}var wt=((...e)=>{let t=Ct().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Et(e);if(!r)return;let i=t._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Tt(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Tt(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Et(e){return x(e)?document.querySelector(e):e}function Dt(e,t={},n){for(let r in e){let i=e[r],a=n?`${n}:${r}`:r;typeof i==`object`&&i?Dt(i,t,a):typeof i==`function`&&(t[a]=i)}return t}var Ot=(()=>{if(console.createTask)return console.createTask;let e={run:e=>e()};return()=>e})();function kt(e,t,n,r){for(let i=n;i<e.length;i+=1)try{let n=r?r.run(()=>e[i](...t)):e[i](...t);if(n&&typeof n.then==`function`)return Promise.resolve(n).then(()=>kt(e,t,i+1,r))}catch(e){return Promise.reject(e)}}function At(e,t,n){if(e.length>0)return kt(e,t,0,Ot(n))}function jt(e,t,n){if(e.length>0){let r=Ot(n);return Promise.all(e.map(e=>r.run(()=>e(...t))))}}function Mt(e,t){for(let n of[...e])n(t)}var Nt=class{_hooks;_before;_after;_deprecatedHooks;_deprecatedMessages;constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,n={}){if(!e||typeof t!=`function`)return()=>{};let r=e,i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!n.allowDeprecated){let e=i.message;e||=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:``),this._deprecatedMessages||=new Set,this._deprecatedMessages.has(e)||(console.warn(e),this._deprecatedMessages.add(e))}if(!t.name)try{Object.defineProperty(t,`name`,{get:()=>`_`+e.replace(/\W+/g,`_`)+`_hook_cb`,configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&=(this.removeHook(e,t),void 0)}}hookOnce(e,t){let n,r=(...e)=>(typeof n==`function`&&n(),n=void 0,r=void 0,t(...e));return n=this.hook(e,r),n}removeHook(e,t){let n=this._hooks[e];if(n){let r=n.indexOf(t);r!==-1&&n.splice(r,1),n.length===0&&(this._hooks[e]=void 0)}}clearHook(e){this._hooks[e]=void 0}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t==`string`?{to:t}:t;let n=this._hooks[e]||[];this._hooks[e]=void 0;for(let t of n)this.hook(e,t)}deprecateHooks(e){for(let t in e)this.deprecateHook(t,e[t])}addHooks(e){let t=Dt(e),n=Object.keys(t).map(e=>this.hook(e,t[e]));return()=>{for(let e of n)e();n.length=0}}removeHooks(e){let t=Dt(e);for(let e in t)this.removeHook(e,t[e])}removeAllHooks(){this._hooks={}}callHook(e,...t){return this.callHookWith(At,e,t)}callHookParallel(e,...t){return this.callHookWith(jt,e,t)}callHookWith(e,t,n){let r=this._before||this._after?{name:t,args:n,context:{}}:void 0;this._before&&Mt(this._before,r);let i=e(this._hooks[t]?[...this._hooks[t]]:[],n,t);return i instanceof Promise?i.finally(()=>{this._after&&r&&Mt(this._after,r)}):(this._after&&r&&Mt(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){let t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){let t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}};function Pt(){return new Nt}var Ft=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,It={base:-10,title:10},Lt={critical:-8,high:-1,low:2},Rt={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},zt=/@import/,F=e=>e===``||e===!0;function Bt(e,t){if(typeof t.tagPriority==`number`)return t.tagPriority;let n=100,r=Lt[t.tagPriority]||0,i=e.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Rt;if(t.tag in It)n=It[t.tag];else if(t.tag===`meta`){let e=t.props[`http-equiv`]===`content-security-policy`?`content-security-policy`:t.props.charset?`charset`:t.props.name===`viewport`?`viewport`:null;e&&(n=Rt.meta[e])}else if(t.tag===`link`&&t.props.rel)n=i.link[t.props.rel];else if(t.tag===`script`){let e=String(t.props.type);F(t.props.async)?n=i.script.async:t.props.src&&!F(t.props.defer)&&!F(t.props.async)&&e!==`module`&&!e.endsWith(`json`)||t.innerHTML&&!e.endsWith(`json`)?n=i.script.sync:(F(t.props.defer)&&t.props.src&&!F(t.props.async)||e===`module`)&&(n=i.script.defer)}else t.tag===`style`&&(n=t.innerHTML&&zt.test(t.innerHTML)?i.style.imported:i.style.sync);return(n||100)+r}function Vt(e,t){let n=typeof t==`function`?t(e):t,r=n.key||String(e.plugins.size+1);e.plugins.get(r)||(e.plugins.set(r,n),e.hooks.addHooks(n.hooks||{}))}function Ht(e={}){let t=Pt();t.addHooks(e.hooks||{});let n=!e.document,r=new Map,i=new Map,a=new Set,o={_entryCount:1,plugins:i,dirty:!1,resolvedOptions:e,hooks:t,ssr:n,entries:r,headEntries(){return[...r.values()]},use:e=>Vt(o,e),push(e,i){let s={...i||{}};delete s.head;let c=s._index??o._entryCount++,l={_i:c,input:e,options:s},u={_poll(e=!1){o.dirty=!0,!e&&a.add(c),t.callHook(`entries:updated`,o)},dispose(){r.delete(c)&&o.invalidate()},patch(e){(!s.mode||s.mode===`server`&&n||s.mode===`client`&&!n)&&(l.input=e,r.set(c,l),u._poll())}};return u.patch(e),u},async resolveTags(){let n={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await t.callHook(`entries:resolve`,n);a.size;){let n=a.values().next().value;a.delete(n);let i=r.get(n);if(i){let n={tags:ce(i.input,e.propResolvers||[]).map(e=>Object.assign(e,i.options)),entry:i};await t.callHook(`entries:normalize`,n),i._tags=n.tags.map((e,t)=>(e._w=Bt(o,e),e._p=(i._i<<10)+t,e._d=fe(e),e._d||(e._h=be(e)),e))}}let i=!1;n.entries.flatMap(e=>(e._tags||[]).map(e=>({...e,props:{...e.props}}))).sort(Ft).reduce((e,t)=>{let n=t._d||t._h;if(!e.has(n))return e.set(n,t);let r=e.get(n);if((t?.tagDuplicateStrategy||(ue.has(t.tag)?`merge`:null)||(t.key&&t.key===r.key?`merge`:null))===`merge`){let i={...r.props};Object.entries(t.props).forEach(([e,t])=>i[e]=e===`style`?new Map([...r.props.style||new Map,...t]):e===`class`?new Set([...r.props.class||new Set,...t]):t),e.set(n,{...t,props:i})}else t._p>>10==r._p>>10&&t.tag===`meta`&&oe(n)?(e.set(n,Object.assign([...Array.isArray(r)?r:[r],t],t)),i=!0):(t._w===r._w?t._p>r._p:t?._w<r?._w)&&e.set(n,t);return e},n.tagMap);let s=n.tagMap.get(`title`),c=n.tagMap.get(`titleTemplate`);if(o._title=s?.textContent,c){let e=c?.textContent;if(o._titleTemplate=e,e){let t=typeof e==`function`?e(s?.textContent):e;typeof t==`string`&&!o.plugins.has(`template-params`)&&(t=t.replace(`%s`,s?.textContent||``)),s?t===null?n.tagMap.delete(`title`):n.tagMap.set(`title`,{...s,textContent:t}):(c.tag=`title`,c.textContent=t)}}n.tags=Array.from(n.tagMap.values()),i&&(n.tags=n.tags.flat().sort(Ft)),await t.callHook(`tags:beforeResolve`,n),await t.callHook(`tags:resolve`,n),await t.callHook(`tags:afterResolve`,n);let l=[];for(let e of n.tags){let{innerHTML:t,tag:n,props:r}=e;le.has(n)&&(Object.keys(r).length===0&&!e.innerHTML&&!e.textContent||n===`meta`&&!r.content&&!r[`http-equiv`]&&!r.charset||(n===`script`&&t&&(String(r.type).endsWith(`json`)?e.innerHTML=(typeof t==`string`?t:JSON.stringify(t)).replace(/</g,`\\u003C`):typeof t==`string`&&(e.innerHTML=t.replace(RegExp(`</${n}`,`g`),`<\\/${n}`)),e._d=fe(e)),l.push(e)))}return l},invalidate(){for(let e of r.values())a.add(e._i);o.dirty=!0,t.callHook(`entries:updated`,o)}};return(e?.plugins||[]).forEach(e=>Vt(o,e)),o.hooks.callHook(`init`,o),e.init?.forEach(e=>e&&o.push(e)),o}async function Ut(e,t={}){let n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;let r={shouldRender:!0,tags:[]};if(await e.hooks.callHook(`dom:beforeRender`,r),r.shouldRender)return e._domUpdatePromise||=new Promise(async t=>{let r=new Map,i=new Promise(t=>{e.resolveTags().then(e=>{t(e.map(e=>{let t=r.get(e._d)||0,n={tag:e,id:(t?`${e._d}:${t}`:e._d)||e._h,shouldRender:!0};return e._d&&oe(e._d)&&r.set(e._d,t+1),n}))})}),a=e._dom;if(!a){a={title:n.title,elMap:new Map().set(`htmlAttrs`,n.documentElement).set(`bodyAttrs`,n.body)};for(let e of[`body`,`head`]){let t=n[e]?.children;for(let e of t){let t=e.tagName.toLowerCase();if(!pe.has(t))continue;let n=he({tag:t,props:{}},{innerHTML:e.innerHTML,...e.getAttributeNames().reduce((t,n)=>(t[n]=e.getAttribute(n),t),{})||{}});if(n.key=e.getAttribute(`data-hid`)||void 0,n._d=fe(n)||be(n),a.elMap.has(n._d)){let t=1,r=n._d;for(;a.elMap.has(r);)r=`${n._d}:${t++}`;a.elMap.set(r,e)}else a.elMap.set(n._d,e)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function o(e,t,n){let r=`${e}:${t}`;a.sideEffects[r]=n,delete a.pendingSideEffects[r]}function s({id:e,$el:t,tag:r}){let i=r.tag.endsWith(`Attrs`);a.elMap.set(e,t),i||(r.textContent&&r.textContent!==t.textContent&&(t.textContent=r.textContent),r.innerHTML&&r.innerHTML!==t.innerHTML&&(t.innerHTML=r.innerHTML),o(e,`el`,()=>{t?.remove(),a.elMap.delete(e)}));for(let a in r.props){if(!Object.prototype.hasOwnProperty.call(r.props,a))continue;let s=r.props[a];if(a.startsWith(`on`)&&typeof s==`function`){let e=t?.dataset;if(e&&e[`${a}fired`]){let e=a.slice(0,-5);s.call(t,new Event(e.substring(2)))}t.getAttribute(`data-${a}`)!==``&&((r.tag===`bodyAttrs`?n.defaultView:t).addEventListener(a.substring(2),s.bind(t)),t.setAttribute(`data-${a}`,``));continue}let c=`attr:${a}`;if(a===`class`){if(!s)continue;for(let n of s)i&&o(e,`${c}:${n}`,()=>t.classList.remove(n)),!t.classList.contains(n)&&t.classList.add(n)}else if(a===`style`){if(!s)continue;for(let[n,r]of s)o(e,`${c}:${n}`,()=>{t.style.removeProperty(n)}),t.style.setProperty(n,r)}else s!==!1&&s!==null&&(t.getAttribute(a)!==s&&t.setAttribute(a,s===!0?``:String(s)),i&&o(e,c,()=>t.removeAttribute(a)))}}let c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0},u=await i;for(let e of u){let{tag:t,shouldRender:r,id:i}=e;if(r){if(t.tag===`title`){n.title=t.textContent,o(`title`,``,()=>n.title=a.title);continue}e.$el=e.$el||a.elMap.get(i),e.$el?s(e):pe.has(t.tag)&&c.push(e)}}for(let e of c){let t=e.tag.tagPosition||`head`;e.$el=n.createElement(e.tag.tag),s(e),l[t]=l[t]||n.createDocumentFragment(),l[t].appendChild(e.$el)}for(let t of u)await e.hooks.callHook(`dom:renderTag`,t,n,o);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose);for(let e in a.pendingSideEffects)a.pendingSideEffects[e]();e._dom=a,await e.hooks.callHook(`dom:rendered`,{renders:u}),t()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1}),e._domUpdatePromise}function Wt(e={}){let t=e.domOptions?.render||Ut;e.document=e.document||(typeof window<`u`?document:void 0);let n=e.document?.head.querySelector(`script[id="unhead:payload"]`)?.innerHTML||!1;return Ht({...e,plugins:[...e.plugins||[],{key:`client`,hooks:{"entries:updated":t}}],init:[n?JSON.parse(n):!1,...e.init||[]]})}function Gt(e,t){let n=0;return()=>{let r=++n;t(()=>{n===r&&e()})}}function Kt(e={}){let t=Wt({domOptions:{render:Gt(()=>Ut(t),e=>setTimeout(e,0))},...e});return t.install=ae(t),t}var qt={class:`site-header`},Jt={class:`header-inner`},Yt={class:`desktop-nav`,"aria-label":`Main navigation`},Xt=[`aria-expanded`],Zt={key:0,class:`mobile-nav`,"aria-label":`Mobile navigation`},Qt=ye({__name:`AppHeader`,setup(e){let t=re(),n=l(!1);function r(){n.value=!n.value}function i(){n.value=!1}return(e,a)=>(w(),v(`header`,qt,[_(`div`,Jt,[T(f(me),{to:`/`,class:`logo-link`,onClick:i},{default:o(()=>[...a[0]||=[_(`span`,{class:`logo-icon`},`⚔️`,-1),_(`div`,{class:`logo-text`},[_(`span`,{class:`logo-title`},`HoMM: Olden Era`),_(`span`,{class:`logo-subtitle`},`Player Journal`)],-1)]]),_:1}),_(`nav`,Yt,[T(f(me),{to:`/`,class:S([`nav-link`,{active:f(t).path===`/`}])},{default:o(()=>[...a[1]||=[h(` Home `,-1)]]),_:1},8,[`class`]),_(`a`,{href:`/#stories`,class:`nav-link`,onClick:i},`Stories`),_(`a`,{href:`/#guides`,class:`nav-link`,onClick:i},`All Posts`)]),_(`button`,{class:S([`hamburger`,{open:n.value}]),onClick:r,"aria-label":`Toggle navigation menu`,"aria-expanded":n.value},[...a[2]||=[_(`span`,null,null,-1),_(`span`,null,null,-1),_(`span`,null,null,-1)]],10,Xt)]),T(Pe,{name:`slide-down`},{default:o(()=>[n.value?(w(),v(`nav`,Zt,[T(f(me),{to:`/`,class:`mobile-nav-link`,onClick:i},{default:o(()=>[...a[3]||=[h(`🏠 Home`,-1)]]),_:1}),_(`a`,{href:`/#stories`,class:`mobile-nav-link`,onClick:i},`🌟 Stories`),_(`a`,{href:`/#guides`,class:`mobile-nav-link`,onClick:i},`📖 All Posts`)])):Se(``,!0)]),_:1})]))}},[[`__scopeId`,`data-v-4f6e65ab`]]),$t={class:`site-footer`},en={class:`footer-inner`},tn={class:`footer-links`},nn={class:`footer-bottom`},rn=ye({__name:`AppFooter`,setup(t){let n=new Date().getFullYear();return(t,r)=>{let a=m(`RouterLink`);return w(),v(`footer`,$t,[_(`div`,en,[r[3]||=_(`div`,{class:`footer-brand`},[_(`span`,{class:`footer-logo`},`⚔️ HoMM: Olden Era Guide`),_(`p`,{class:`footer-desc`},` Community-driven strategy guides for Heroes of Might and Magic: Olden Era. Not affiliated with Ubisoft or Unfrozen Studio. `)],-1),_(`div`,tn,[r[2]||=_(`h3`,{class:`footer-heading`},`Quick Links`,-1),_(`ul`,null,[_(`li`,null,[T(a,{to:`/`},{default:o(()=>[...r[0]||=[h(`Home`,-1)]]),_:1})]),r[1]||=_(`li`,null,[_(`a`,{href:`/#guides`},`All Guides`)],-1)])]),r[4]||=i(`<div class="footer-links" data-v-9488fad1><h3 class="footer-heading" data-v-9488fad1>Categories</h3><ul data-v-9488fad1><li data-v-9488fad1><a href="/#guides" data-v-9488fad1>Beginner Guides</a></li><li data-v-9488fad1><a href="/#guides" data-v-9488fad1>Combat</a></li><li data-v-9488fad1><a href="/#guides" data-v-9488fad1>Economy</a></li><li data-v-9488fad1><a href="/#guides" data-v-9488fad1>Heroes &amp; Units</a></li></ul></div>`,1)]),_(`div`,nn,[_(`p`,null,`© `+e(f(n))+` HoMM: Olden Era Guide. All rights reserved.`,1),r[5]||=_(`p`,{class:`footer-disclaimer`},` Heroes of Might and Magic is a trademark of Ubisoft. This is a fan-made site. `,-1)])])}}},[[`__scopeId`,`data-v-9488fad1`]]),an={class:`flex-1`},on={__name:`App`,setup(e){return(e,t)=>{let n=m(`RouterView`);return w(),v(E,null,[T(Qt),_(`main`,an,[T(n)]),T(rn)],64)}}},sn=`---
title: "Getting Started: A Complete Beginner's Guide"
description: "Everything you need to know to begin your first campaign in Heroes of Might and Magic: Olden Era — from picking your hero to winning your first battle."
date: "2025-05-01"
category: "Beginner Guides"
tags: ["beginner", "tutorial", "campaign", "tips"]
featured: true
order: 1
---

## Welcome to Heroes of Might and Magic: Olden Era

Heroes of Might and Magic: Olden Era is a turn-based strategy game set in a rich fantasy world. You command a hero, build towns, recruit armies, and conquer enemy territory across diverse maps. If you're new to the series, this guide will walk you through everything you need to know to start your first campaign with confidence.

## Understanding the Core Loop

Every game of Olden Era revolves around a simple but deep loop:

1. **Explore** the map with your hero to discover resources, artifacts, and enemy dwellings.
2. **Collect** resources each week to fund your town's growth.
3. **Build** structures in your town to unlock more powerful unit tiers.
4. **Recruit** troops from your town's buildings and from external dwellings.
5. **Fight** neutral creatures and enemy heroes to gain experience and territory.
6. **Win** by completing the map's victory conditions — usually defeating all enemy towns or a specific enemy hero.

## Choosing Your Starting Hero

At the beginning of most maps, you choose one or more starting heroes. Consider:

- **Warrior-type heroes** (Knights, Barbarians) level up their troops' attack and defense quickly. Ideal for aggressive early rushes.
- **Mage-type heroes** (Wizards, Sorcerers) bring powerful spells that can turn the tide in difficult fights. Better for late-game snowballing.
- **Ranger/Scout heroes** excel at exploring the map fast and claiming resources before your opponent.

> **Tip:** On most beginner maps, a Warrior-type hero is the safest pick. Their straightforward stat bonuses are easier to use than managing spell points.

## Your First Turn Priorities

Turn order matters enormously in Olden Era. Here's what to focus on in your first few turns:

### Day 1
- Move your hero toward the nearest **resource mine** (Gold, Wood, or Ore).
- Flag as many resource generators as possible — every mine you own earns you resources every day.
- Check your town's build queue. On Day 1, prioritize the **City Hall** upgrade path to maximize gold income.

### Week 1 Goals
- Own at least **3–5 resource mines**.
- Build the **Tavern** and **Mage Guild Level 1** in your town.
- Recruit every unit available in your town at the start of week 2.
- Explore roughly **30–40%** of the map within reach.

## Combat Basics

When two armies meet on the adventure map, combat begins on a hexagonal grid. Key concepts:

| Term | Meaning |
|------|---------|
| **Initiative** | Determines which unit acts first each round |
| **Attack / Defense** | Attack reduces enemy HP; Defense reduces incoming damage |
| **Morale** | High morale grants extra turns; low morale causes units to skip turns |
| **Luck** | A chance for units to deal double damage on their attack |

**Basic combat advice:**
- Position ranged units (Archers, Mages) in the back row to avoid melee contact.
- Use fast units (Cavalry, Wolves) to intercept enemy ranged units.
- Always cast spells before moving if your hero has offensive magic (like Lightning Bolt).

## Managing Resources

There are six main resources in Olden Era:

- **Gold** — The most important resource. Used for recruiting troops and most buildings.
- **Wood & Ore** — Basic building materials. Needed for nearly every structure.
- **Crystal, Gems, Mercury, Sulfur** — Specialty resources required for higher-tier buildings and units.

> **Priority order:** Gold > Wood & Ore > specialty resources you need for your faction.

## Leveling Your Hero

Heroes gain experience from combat. Each level-up grants a choice between two skills or skill improvements. Early recommended skills:

- **Logistics** — Increases hero movement on the adventure map. More movement = more exploration = more resources.
- **Wisdom** — Required to learn higher-level spells. Essential for mage-type heroes.
- **Offense / Defense** — Flat combat bonuses that scale well throughout the game.

## Next Steps

Once you're comfortable with the basics, explore these topics:

- [Hero Classes Guide](/guide/02-hero-classes) — Learn the strengths of each hero archetype.
- [Combat System Mastery](/guide/03-combat-system) — Advanced tactics for winning tough fights.
- [Resource Management](/guide/04-resource-management) — How to build a dominant economy.

Good luck, and may your armies march to victory!
`,cn=`---
title: "Hero Classes Guide: Choosing Your Champion"
description: "A deep dive into every hero class in Heroes of Might and Magic: Olden Era — strengths, weaknesses, recommended skills, and which faction they belong to."
date: "2025-05-03"
category: "Heroes & Units"
tags: ["heroes", "classes", "factions", "skills"]
featured: true
order: 2
---

## Overview of Hero Classes

In Heroes of Might and Magic: Olden Era, each faction provides two distinct hero classes. Your choice of hero class shapes your playstyle throughout the entire campaign. Heroes don't fight directly — they lead armies and contribute through their skills, spell casting, and passive stat bonuses to their troops.

Understanding each class's strengths and weaknesses is crucial to building a cohesive strategy.

## Might Heroes vs. Magic Heroes

All hero classes fall into one of two broad archetypes:

### Might Heroes
Might heroes specialize in boosting their armies through direct stat improvements. They typically have:
- **Higher Attack and Defense** primary stats
- Access to combat-focused secondary skills (Offense, Archery, Artillery)
- Limited spell book capacity without the Wisdom skill
- Stronger early-to-mid game power spikes

### Magic Heroes
Magic heroes amplify their power through spellcasting and knowledge. They feature:
- **Higher Spell Power and Knowledge** primary stats
- A spell book included by default at the start
- Access to advanced spells earlier
- Stronger late-game scaling when high-level spells are available

> **General rule:** Might heroes are easier for beginners. Magic heroes reward players who understand spell synergies and can manage limited spell points efficiently.

## Class Breakdown by Faction

### Knight (Castle Faction)
- **Type:** Might
- **Specialty focus:** Leadership and troop morale bonuses
- **Best skills:** Leadership, Offense, Logistics, Estates
- **Strengths:** High morale army, excellent gold generation with Estates, strong against undead factions
- **Weaknesses:** Limited magical capability, struggles against high-initiative enemies

### Cleric (Castle Faction)
- **Type:** Magic
- **Specialty focus:** Healing and blessing spells
- **Best skills:** Wisdom, Earth Magic, Prayer, Diplomacy
- **Strengths:** Keeps troops alive with healing spells, strong defensive support
- **Weaknesses:** Offensive power is average, relies heavily on spell points

### Barbarian (Stronghold Faction)
- **Type:** Might
- **Specialty focus:** Raw offensive power
- **Best skills:** Offense, Tactics, Resistance, Artillery
- **Strengths:** Highest Attack growth of any class, devastating in direct combat
- **Weaknesses:** Very low magical resistance, no native spell book

### Battle Mage (Stronghold Faction)
- **Type:** Magic
- **Specialty focus:** Combat spells and crowd control
- **Best skills:** Wisdom, Fire Magic, Offense, Tactics
- **Strengths:** Combines martial ability with fire spell devastation
- **Weaknesses:** Spread stat growth means neither excellent Attack nor excellent Spell Power early

### Necromancer (Necropolis Faction)
- **Type:** Magic
- **Specialty focus:** Raising slain enemies as undead
- **Best skills:** Necromancy, Wisdom, Earth Magic, Intelligence
- **Strengths:** Grows army passively through the Necromancy skill; undead units are immune to morale penalties
- **Weaknesses:** Weak starting army; strong prejudice from Diplomacy interactions

### Death Knight (Necropolis Faction)
- **Type:** Might
- **Specialty focus:** Curse and debuff application
- **Best skills:** Necromancy, Offense, Curse, Ballistics
- **Strengths:** Weakens enemy units while strengthening own undead army
- **Weaknesses:** Slow early game, relies on army growth from Necromancy

### Wizard (Tower Faction)
- **Type:** Magic
- **Specialty focus:** Summoning and intellect spells
- **Best skills:** Wisdom, Intelligence, Air Magic, Water Magic
- **Strengths:** Access to the strongest spells in the game; highest Knowledge growth
- **Weaknesses:** Extremely fragile army; heavily punished if magic is countered

### Alchemist (Tower Faction)
- **Type:** Might
- **Specialty focus:** Siege and ranged combat support
- **Best skills:** Artillery, Ballistics, Intelligence, Engineering
- **Strengths:** Exceptional at siege warfare; Alchemist labs provide powerful artifacts
- **Weaknesses:** Less powerful in open-field combat

## Skill Development Tips

Regardless of your hero class, these skill investments rarely disappoint:

| Skill | Why It Matters |
|-------|---------------|
| **Logistics** | +20% movement per rank. More map coverage = more resources |
| **Wisdom** | Required for Level 3–5 spells. Essential for any spellcaster |
| **Offense** | Each rank adds +10% to troop damage. Scales throughout the game |
| **Eagle Eye** | Useful only if facing enemies with unique spells you want to learn |
| **Diplomacy** | Can convert neutral stacks to join you — powerful on large maps |

## Choosing Heroes for Multiplayer

In competitive play, the meta generally favors:
1. **Fast explorers** with high Logistics to claim key map resources before opponents.
2. **Mage heroes** with Earth or Air spells for battlefield control.
3. **Necromancers** on maps with many neutrals to snowball army size through Necromancy.

The "right" hero is always situational — adapt to your map, faction, and opponent.
`,ln=`---
title: "Combat System Mastery: Win Every Battle"
description: "Master the tactical combat system of Heroes of Might and Magic: Olden Era. Learn about initiative, terrain, morale, luck, and advanced battle strategies."
date: "2025-05-05"
category: "Combat"
tags: ["combat", "tactics", "battle", "strategy", "advanced"]
featured: false
order: 3
---

## Understanding the Battle Grid

Every combat in Olden Era takes place on an **11×9 hexagonal grid**. Your units occupy one or two hexes depending on their size (most creatures are single-hex; some large creatures like Dragons occupy two). Position, terrain, and the order your units move all determine who wins.

## Initiative and Turn Order

Units act in descending **Initiative** order. Higher initiative units move first — this is a critical advantage. The turn order bar is displayed at the top of the battle screen, showing which unit will act next.

**Key initiative concepts:**
- Units with equal initiative use a tiebreaker based on the defending unit going last.
- Spells that reduce initiative (like Slow) are extremely powerful because they push enemy units down the action queue.
- The **Haste** spell is among the most useful in the game for this reason — it effectively gives your fastest unit an extra early turn.

## Attack and Defense Calculations

Damage dealt by a unit is calculated using this formula:

\`\`\`
Damage = Base Unit Damage × (1 + 0.05 × (Attacker's Attack - Defender's Defense))
\`\`\`

- If Attack exceeds Defense, each point above the defender's Defense adds **+5% damage**.
- If Defense exceeds Attack, each point above reduces damage by **2.5%** (diminishing returns cap at 70% reduction).

> **Practical tip:** It's better to increase your Attack when it's already high than to raise Defense — the Attack bonus scales linearly while Defense has diminishing returns.

## Morale and Luck

### Morale
Morale ranges from **-3 to +3**. Positive morale gives your units a random chance to act **twice in a single turn**. Negative morale causes units to occasionally **skip their turn** entirely.

**Morale bonuses come from:**
- All units in the army belonging to the same alignment
- The hero's **Leadership** skill
- The **Prayer** spell
- Certain artifacts (e.g., Collar of Conjuring)

**Morale penalties come from:**
- Mixing undead with living units (always -1 minimum)
- Combining units from different factions without alignment compatibility

### Luck
Luck also ranges from -3 to +3. Positive luck gives a chance for units to deal **double damage** on a hit. Negative luck causes units to occasionally deal **half damage**.

The **Good Luck** skill and artifacts like the **Four-Leaf Clover** improve Luck.

## Terrain Effects

The battle terrain affects unit performance significantly:

| Terrain | Effect |
|---------|--------|
| Cursed Ground | Spells cannot be cast; magic immunity to all units |
| Magic Plains | Spell power increased by 50% |
| Fiery Fields | Fire-element units gain +2 Attack; non-fire units take periodic damage |
| Frozen Tundra | Initiative of all units reduced by 25% |
| Obstacle-heavy | Ranged units penalized; melee units gain approach cover |

Always check the terrain type before battle — some heroes specialize in terrain-specific bonuses through the **Navigator**, **Pathfinding**, or native faction skills.

## Combat Tactics: Core Principles

### 1. Protect Your Ranged Units
Archers, Mages, and Cannoneers deal enormous damage but are fragile. Keep them behind your melee line. Use your fastest melee units to intercept enemy ranged attackers.

### 2. Focus Fire
Don't spread your attacks across multiple enemy stacks. Concentrate damage to eliminate stacks completely — a stack with 0 units deals no damage, while a reduced stack still hits back.

### 3. Wait Strategically
The **Wait** command delays your unit to act later in the round. This is powerful for:
- Moving a slow unit after a fast enemy has repositioned
- Stacking multiple units' attacks to focus fire in a single round
- Avoiding the first strike from a melee-focused opponent

### 4. Use Obstacles
The battle grid often has rocks, trees, and ruins as impassable terrain. Use them to funnel enemies into chokepoints where only 1–2 of their units can attack your line simultaneously.

### 5. Spell Timing
Don't cast offensive spells randomly. The best times to cast:
- **Before moving**: Use Slow or Blind on the most dangerous enemy unit at the start of a round.
- **Mass buffs (Bless, Haste, Prayer)**: Cast immediately when battle starts to affect all subsequent turns.
- **Town Portal / Dimension Door**: Reserve these for emergencies or strategic repositioning outside combat.

## Special Combat Mechanics

### Retaliation
By default, each unit retaliates once per round when attacked in melee. Units with the **No Retaliation** ability (like Sprites or Shadow Dragons) bypass this entirely — extremely powerful.

### Double Attack
Some units (Crusaders, Cavaliers) attack twice per action. This doubles their effectiveness against units without retaliation.

### Ranged Penalty at Close Range
Ranged units suffer a **50% damage penalty** when an enemy is adjacent to them. Try to keep your archers positioned away from melee contact, or cast **Free Shot** to remove this penalty.

## Advanced: Hero Spell Combinations

Some spells work together to produce devastating effects:

- **Slow + Armageddon**: Slow reduces all enemies' initiative, then Armageddon deals AoE fire damage before they can scatter. Requires Fire Immunity on your own army.
- **Blind + Berserk**: Blind a dangerous unit, then Berserk a weaker enemy unit to attack it — spending two spells to redirect the strongest threat.
- **Haste + Double Strike heroes**: Haste your highest-initiative double-attack unit for devastating first-round burst damage.

## Retreat and Surrender

Knowing when to **Retreat** (hero escapes, army is lost) or **Surrender** (pay gold to stop combat, save your hero and army) is critical. A live hero with no army is far better than a dead hero — you can always rebuild troops.

> **Never let your primary hero die if you can avoid it.** Experienced heroes can carry maps; lost heroes are very costly to replace.
`,un=`---
title: "Resource Management: Building a Thriving Empire"
description: "Learn how to efficiently collect, prioritize, and spend resources in Heroes of Might and Magic: Olden Era to out-develop your opponents every game."
date: "2025-05-07"
category: "Economy"
tags: ["economy", "resources", "gold", "mines", "strategy"]
featured: false
order: 4
---

## The Six Resources

Heroes of Might and Magic: Olden Era uses six resource types, each with a distinct role:

| Resource | Primary Use |
|----------|-------------|
| **Gold** | Universal currency — troops, most buildings, hiring heroes |
| **Wood** | Basic construction material; needed in large quantities early |
| **Ore** | Basic construction material alongside Wood |
| **Crystal** | Required for certain mid-tier buildings and units |
| **Gems** | Required for high-tier magic buildings |
| **Mercury** | Required for magic-faction buildings (Tower, Conflux) |
| **Sulfur** | Required for offensive/undead faction buildings (Necropolis, Inferno) |

> **Priority rule:** Gold > Wood + Ore > the specialty resource your faction needs most.

## Daily Income vs. Lump Sums

Resources come from two sources:

### Daily Income (Mines & Buildings)
- **Mines** on the adventure map produce resources every day at midnight.
- Your town's **City Hall → Capitol** chain increases daily gold income dramatically.
- Flagging mines early locks opponents out of them and compounds your income advantage over time.

### Lump Sum Sources
- **Treasure Chests** — found on the map; usually offer gold or experience.
- **Treasure Banks** — guarded locations (Cyclops Stockpiles, Dragon Utopias, etc.) that yield large resource bounties.
- **Quests** — some scenarios reward resources for completing objectives.
- **Windmills & Watermills** — yield random bonus resources weekly without requiring a fight.

## Mine Priority and Flagging

Not all mines are equal. Here is the recommended flagging priority:

1. **Gold Mine** (+1,000 gold/day) — Flag immediately; it's the most impactful single mine.
2. **Sawmill** (+2 Wood/day) — Wood runs out fast with early building rushes.
3. **Ore Pit** (+2 Ore/day) — Same priority as Sawmill.
4. **Specialty Mines** (Crystal, Gems, Mercury, Sulfur) — Priority depends on your faction and build path.

### Map Control Strategy
On larger maps, **don't overextend your main hero** trying to flag distant mines in week 1. Instead:
- Use your **main hero** to secure nearby mines and fight guarding neutrals.
- Hire a **secondary scout hero** on Day 2–3 with a small army to flag remote, unguarded mines.
- Block key mine chokepoints with your secondary hero to deny opponents access.

## Town Economy Buildings

Your town's economic buildings compound your income. Build in this order when possible:

### Castle Faction Example Build Order

| Day | Building | Purpose |
|-----|----------|---------|
| Day 1 | Town Hall → City Hall | Gold income |
| Day 2 | Tavern | Hire secondary heroes |
| Day 3 | Blacksmith | Basic equipment for heroes |
| Day 4 | Mage Guild Level 1 | Access to basic spells |
| Day 5–7 | Tier 1–3 unit buildings | Begin recruiting armies |
| Week 2+ | City Hall → Capitol | Max gold income (+4,000/day) |

> **Note:** The Capitol requires a second owned town to construct. Capturing an enemy town and building Capitol there can double your income advantage.

## Spending Resources Efficiently

### Gold Traps to Avoid
- **Hiring too many heroes early**: Each hero costs 2,500 gold + weekly upkeep. A third or fourth hero is often wasteful before you have strong income.
- **Upgrading troops before building Tier 5+**: Upgrades are expensive. Prioritize unlocking higher-tier units before upgrading lower tiers.
- **Spending gold on artifacts in shops**: Unless the artifact is exceptional (e.g., Dragon Wing Tabard, Pendant of Courage), save your gold for troops.

### Wood & Ore Optimization
Many players run out of Wood early because they don't realize it is consumed by almost every building. Solutions:
- Flag the **Sawmill** on Day 1 if possible.
- Visit **Lumber Mills** (map encounters that grant +5–15 Wood) when passing by.
- Build the **Marketplace** early — it allows you to trade excess Ore or specialty resources for Wood/Gold.

## The Marketplace: Your Economic Safety Net

The **Marketplace** building lets you trade any resource for another. The exchange rate improves as you build more Marketplaces:

| Marketplaces Owned | Exchange Rate |
|-------------------|--------------|
| 1 | 4:1 |
| 2 | 3:1 |
| 3+ | 2:1 |
| Thieves' Guild perk | 1:1 (rare) |

Having 2–3 Marketplaces across your towns is very powerful in mid-game, allowing you to convert excess resources into what you actually need.

## Resource Management on Different Map Sizes

### Small Maps (1–2 players)
- Economy barely matters — aggressive combat wins.
- Spend almost everything on troops week 1.
- Don't invest in City Hall if you can attack in week 2.

### Medium Maps
- Balance combat and economy.
- Reach City Hall by week 2, Capitol by week 3.
- Secure 4–6 mines in week 1.

### Large / XL Maps
- Economy is king. The player who caps their income first snowballs hard.
- Prioritize Capitol construction above almost everything else.
- Maintain 2–3 heroes to maximize map exploration and mine flagging.

## Weekly Resource Checklist

Use this checklist at the start of each new week:

- [ ] Am I at **City Hall** income level? Can I afford Capitol next?
- [ ] Are all nearby mines **flagged**?
- [ ] Do I have enough **Wood/Ore** for my planned buildings this week?
- [ ] Is my **Marketplace** trade rate at 3:1 or better?
- [ ] Can I afford to **recruit all available units** at week reset?

Keeping up with this rhythm ensures you never fall behind in the economic race.
`,dn=`---
title: "Town Building Guide: Maximize Your Castle"
description: "Optimize your town development strategy in Heroes of Might and Magic: Olden Era. Learn building order priorities, faction-specific tips, and how to outpace enemies."
date: "2025-05-09"
category: "Town Building"
tags: ["town", "building", "castle", "economy", "development"]
featured: false
order: 5
---

## Why Town Building Order Matters

In Heroes of Might and Magic: Olden Era, your town is your economic and military engine. Every building you construct either unlocks new unit tiers, increases resource income, or provides utility. **The order in which you build determines when you can field powerful armies** — and timing is everything.

A player who rushes Tier 6 units by Week 3 will almost always defeat an opponent still stuck at Tier 4, even if the weaker player has more gold.

## Universal Building Priorities

Regardless of faction, follow these general priorities:

### Week 1 Goals
1. **Income buildings first** — Build Town Hall → City Hall on Day 1–2.
2. **Tavern** on Day 2–3 — Unlocks hiring of additional heroes (scout/secondary hero).
3. **Mage Guild Level 1** on Day 3–4 — Gives your hero access to utility spells like Haste and Slow.
4. **Tier 1 & 2 unit buildings** — Begin filling your army with the most resource-efficient units.

### Week 2 Goals
1. **Tier 3 unit building** — Your first "real" fighting unit.
2. **Mage Guild Level 2** — Opens access to Level 2 spells (Town Portal, Blind, etc.).
3. Begin the **Tier 4 building prerequisite chain**.

### Week 3 Goals
1. **Tier 4 unit building** — Powerful mid-game units like Crusaders, Minotaurs, or Liches.
2. Start working toward **Capitol** (requires Town Hall → City Hall → Capitol, plus owning a second town).

## Faction-Specific Building Guides

### Castle (Knight/Cleric)

The Castle faction has excellent economic utility and a well-rounded army.

**Key buildings:**
- **Blacksmith** — Provides heroes with Ballista and First Aid Tent. Always worth building early.
- **Brotherhood of the Sword** — Increases morale for Castle-aligned creatures. Stack with Leadership skill.
- **Grail Building (Fort of Light)** — Massive defensive bonus and gold bonus. Build if you have the Grail artifact.

**Recommended Day-by-Day (Week 1):**
| Day | Build |
|-----|-------|
| 1 | Town Hall → City Hall |
| 2 | Tavern |
| 3 | Blacksmith + Mage Guild 1 |
| 4 | Barracks (Pikemen/Halberdiers) |
| 5 | Archery Range (Archers/Marksmen) |
| 6 | Griffin Tower |
| 7 | Recruit all available units |

### Necropolis (Necromancer/Death Knight)

Necropolis has weak starting units but becomes powerful through Necromancy skill and Liches.

**Key buildings:**
- **Undead Transformer** — Converts living creatures into skeleton warriors. Useful with Necromancy.
- **Mage Guild** — Essential for Earth Magic spells, especially Animate Dead and Slow.
- **Lich building** — Your primary mid-game damage dealer; prioritize its construction.

**Warning:** Don't skip the Mage Guild for Necropolis heroes. Earth Magic spells synergize heavily with your undead army.

### Tower (Wizard/Alchemist)

Tower has the most powerful late-game army (Titans) but the slowest, most fragile early units.

**Key buildings:**
- **Library** — Adds one extra spell to the Mage Guild's selection per level. Extremely valuable.
- **Lookout Tower** — Reveals a large portion of the map. Powerful on fog-of-war maps.
- **Cloud Temple (Titans)** — Your win condition. Rush this by Week 3 on medium maps.

**Tip:** Tower players must rely on strong spells in the early game to compensate for weaker early units. Never skip the Mage Guild, and always take the Library.

### Stronghold (Barbarian/Battle Mage)

Stronghold has the strongest individual units but the fewest magical options.

**Key buildings:**
- **Cyclops Cave** — Cyclops are exceptional siege-breakers and mid-game fighters.
- **Behemoth Lair** — Behemoths are among the strongest tier 7 creatures; reach this early.
- **Stables** — Increases movement for cavalry units both in combat and on the adventure map.

## The Capitol: Your Ultimate Economic Upgrade

The Capitol is the top of the income building chain:
- **Town Hall**: +500 gold/day
- **City Hall**: +2,000 gold/day  
- **Capitol**: +4,000 gold/day

**Requirements:**
- Must own **at least 2 towns**
- Must have already built City Hall in the Capitol town
- Costs 20,000 Gold + 20 Wood + 20 Ore

The Capitol pays for itself in roughly 5 days, then generates massive excess gold. **Whoever builds Capitol first almost always wins an economic war.**

## Building a Second Town

Capturing or building a second town is a pivotal moment in any game. When you control multiple towns:

1. **Split your build focus** — one town for economy, one for military.
2. **Build Capitol in your richest gold-production town**.
3. **Staff each town with a garrison hero** to prevent counter-attacks.

## The Grail: Bonus Objective

On maps that include the **Obelisk puzzle mechanic**, fully uncovering the puzzle reveals the location of the Grail — an artifact that can be brought to any of your towns to build a unique **Grail Building**. Every faction's Grail Building provides:
- +5,000 gold/day
- A powerful faction-specific bonus (increased stats, additional units, spell modifiers)

The Grail is a strong secondary objective on maps where it appears.

## Common Building Mistakes

- **Skipping income buildings to rush units**: You end up unable to replenish troops after your first battle.
- **Building Mage Guild before Tavern**: You have no second hero to explore the map in the critical first week.
- **Upgrading units before reaching Tier 5+**: Upgrades are expensive. Reach higher tiers first.
- **Not building Market early**: The Market allows resource trading. It costs very little and pays dividends the entire game.

## Quick Reference: Universal Build Order

\`\`\`
Day 1: Town Hall → City Hall (start construction)
Day 2: City Hall (completes) → Tavern
Day 3: Mage Guild 1 → Tier 1 Unit Building
Day 4: Tier 1 Upgrade or Tier 2 Unit Building
Day 5: Blacksmith / Market
Day 6: Mage Guild 2 (if affordable) / Tier 3 Building prerequisites
Day 7: Recruit all units at week reset
\`\`\`

Stick to this backbone and adapt based on your faction and map size. The key principle: **never let gold sit idle** — always have a building under construction.
`,fn=`---
title: "5 Things I Wish I Knew Before My First Real Run"
description: "A player's honest breakdown of HoMM: Olden Era's deeper mechanics — from the dual-hero early game system to PvP timing traps and Nature faction unit upgrades. Hard-earned insights, not theory."
date: "2025-05-10"
category: "Player Insights"
tags: ["early-game", "strategy", "nature-faction", "pvp", "magic", "tips"]
featured: true
order: 6
---

I've put enough hours into this game to feel the shift from "fumbling through the first week" to "knowing exactly what I'm doing wrong." This guide is everything I'd tell myself before my first serious playthrough — five areas where the game is deeper than it looks, and where most players (including past-me) leave a ton of value on the table.

---

## 1. The Dual-Hero Opening: Stop Doing Everything with One Hero

The most common early-game mistake is treating your starting hero like a Swiss Army knife — exploring, fighting, collecting, garrisoning, all at once. You'll move slowly, miss mines, and burn initiative on walking back to town.

**The fix: split responsibilities from Day 1.**

Hire a second hero from the Tavern by Day 2 or 3 and assign roles permanently:

- **Main hero** — fights everything. Full army, dedicated to clearing map sectors and claiming guarded mines. Never sends troops home unless necessary.
- **Support hero** — small escort, zero fighting. Their job is to trail behind the main hero collecting loose resources, ferry reinforcements from town, and flag any unguarded mines the main hero passes.

The support hero's movement covers ground that the main hero would have backtracked to cover, effectively doubling your map coverage. On the first Sunday (week end), your main hero should have a full army from recruitment. Your support hero should have flagged 4–6 mines without spending a single unit.

> **Week 1 economy goal:** Town Hall → City Hall construction started on Day 1. Mage Guild Level 1 by Day 3–4. All nearby mines flagged by the Sunday reset.

---

## 2. Zero Casualties Isn't Perfectionism — It's XP Farming

When clearing neutral stacks, a lot of players accept "acceptable losses" — a few units here, a few there. This feels harmless, but it compounds badly.

**The real reason to chase zero casualties: Law XP.**

Every time you fully wipe out an enemy stack (no escapees, no partial retreats), you earn bonus Law Experience on top of normal combat XP. Law XP feeds into the **Law system** — a separate progression layer that lets you make major choices about your hero's identity: boosting economy multipliers, unlocking faction-specific unit traits, or strengthening spells permanently.

Practical rules for zero-casualty clearing:

- If you can't beat a stack without losing units, **wait**. Come back in a day or two with more troops.
- Never let enemies flee — use spells or fast units to intercept routers. A fleeing enemy stack that escapes gives you nothing.
- Use spells proactively. Even a Level 1 Slow or Blind from your Mage Guild changes the damage calculus completely.

The compounding effect is real: players who obsess over zero casualties end up with significantly more powerful Law upgrades by Week 3 compared to players who fought more but sloppily.

---

## 3. Magic in Olden Era Isn't What You Think

The magic system is one of the most misunderstood parts of this game, especially for veterans of earlier HoMM titles.

**Key shift: spell levels are independent of your hero level.**

Spells have their own upgrade tier from Level 1 to Level 4, and the upgrade path doesn't automatically follow your hero's growth. To raise a spell's level, you need specific resources — primarily **Alchemy Dust** (found on the map at special shrines and resource caches) or **Map Totem upgrades** in the Mage Guild.

More importantly: **the Mage Guild operates as a global cloud sync.** Any spell your hero learns at a high-level Mage Guild (like in a captured city) is available everywhere — you don't need to visit every city to re-learn spells. This means:

- Prioritize capturing cities with higher-level Mage Guilds early.
- One trip to a Level 3 Mage Guild unlocks your entire spell roster for the campaign.

**Managing Star Points (strategic ability cooldowns):**

Strategic spells like Town Portal consume Star Points, not gold — but they share a cooldown pool. Don't spam Town Portal early in the day if you might need it defensively later. Star Points regenerate daily, so plan your strategic magic around the day cycle, not just combat needs.

**Law XP allocation** is where most players make irreversible mistakes. The temptation is to dump Law XP into immediate combat bonuses, but the real high-value choices are:

- **Economy modifiers** early (they compound every day for the rest of the map)
- **Unit trait unlocks** for your faction's key creatures (timing-dependent on when you reach certain tiers)
- **Spell permanence upgrades** only once you've committed to a specific school

Don't spread Law XP thin. Pick a lane and commit.

---

## 4. Nature Faction Unit Upgrades: The Choices That Actually Matter

If you're playing Grove (Nature faction), the unit upgrade tree is more branched than most factions — and more punishing if you upgrade without a plan.

**Tier 1: Keep Thornshot archers in their base form for early clearing.**

The Thornshot Archer (Tier 1 base form) has no range penalty, which makes them ideal for picking off neutrals without taking retaliation. Don't rush their upgrade until you have a real engagement that demands it — the upgrade cost is better spent elsewhere in Week 1.

**Tier 3: The Iron Wall formation is your best tool against dangerous stacks.**

Split your Iriad (Tier 3, extremely tanky) into multiple small stacks. Surround your fragile ranged units with these small Iriad stacks. A single large Iriad group is inefficient; distributed Iriad stacks act as body shields while your archers and mages output freely. This formation genuinely changes how many units you lose against "too strong" neutral camps.

**Tier 4 — Brumal Niad — is your tempo controller.**

This unit reduces the initiative and action speed of enemies it touches. In fights with multiple dangerous units, getting Brumal Niads into contact with the highest-threat enemies first effectively gives your whole army more turns. Build this timing into your battle setup before every fight.

**Tier 5 and 6 diverge based on your hero type:**

| Hero Path | Tier 5 Upgrade | Tier 6 Upgrade |
|-----------|---------------|---------------|
| **Magic** | Mist Kirin — inflicts -30% magic resist on enemies it faces, devastating with spell combos | Thorned Warrior — bunker, high armor, protection role |
| **Might** | Thunder Kirin — pure attack conversion, excellent against armored targets | Thornshot Elite — best sustained ranged damage in the faction |

**Tier 7: Almost always go Blazing Phoenix over the alternative.**

The Blazing Phoenix has the highest initiative in the faction, a built-in self-preservation passive that can save it from lethal hits, and an active ability that performs far above its tier in PvP where one good use can swing the entire battle. The main alternative Phoenix form is situationally powerful but the Blazing version's forgiveness makes it the safer competitive choice.

---

## 5. Online PvP: It Plays Like an RTS Until It Doesn't

Coming from the singleplayer experience, multiplayer in Olden Era can feel disorienting at first. The core reason: **before armies make contact, the game functions like an RTS** — both players are moving simultaneously, not in turns.

**The moment two players breach each other's territory on the same day, the RTS transitions into the familiar turn-based resolution.** Whoever destroyed the main garrison guard (GO) first that day gets **Priority 1** — they resolve their turn before the opponent. This single moment decides much of how the early engagement plays out.

**Practical PvP early-game rules:**

1. **Race to breach on the same day your opponent does.** If you breach on different days, the system applies catch-up compensation to the later player — so the timing advantage matters most when both players push simultaneously.

2. **Use Z to check zone boundaries before moving.** This is a QoL feature that experienced players use constantly. Before committing a hero to a jump, press Z to see the exact border of your controlled zone. Blind jumps into unconfirmed territory is one of the most punishing and avoidable mistakes in competitive play.

3. **The Ban/Pick draft (BP) is not optional in ranked modes.** It works similarly to MOBA draft systems. If you're new to competitive play, prioritize banning the Nature faction's Tier 7 and any hero with very high base Logistics — these are the most tempo-defining early picks and the hardest to answer once established.

4. **Don't ignore the late-entry compensation rule.** If your opponent breaks through before you, you receive a turn-order bonus in the following day's resolution. Players who understand this will sometimes deliberately delay a breach to bait the opponent into overextending, then use the compensation priority to hit back harder.

---

## Bonus: Common Traps I See New Players Fall Into

A few things that don't fit neatly into the categories above but cost players a surprising amount:

**Hero specialization must match your unit upgrade path.** If you're running a Magic hero, your Tier 6 spell-synergy upgrade is gated behind the hero having a specific trait category ("Spellbinder" type). Check this before locking in your hero's specialization tree — choosing a trait that doesn't match your intended unit path means your Tier 6 upgrade will underperform significantly.

**The Spellbook UI hides higher-level spells.** This sounds trivial but it's genuinely easy to miss: spells above Level 2 are on a different tab in the Spellbook UI. Many players don't realize they've unlocked higher-tier spells because they never scroll or tab over. If a fight felt harder than it should have, open the full Spellbook — you might have had the answer sitting unused in a tab you didn't know existed.

**Never release retreating enemies out of mercy.** I know it feels wrong to chase down a fleeing unit. Do it anyway. Escaped units respawn over time, which means the same camp regenerates and blocks your territory. More importantly, you miss the full Law XP reward. In the early game especially, every full-wipe is a meaningful investment.

---

These five areas are where I see the biggest skill gap between players who stall out in Week 2 and players who snowball into dominance. None of it is particularly hard once you know it exists — the game just doesn't explain any of it clearly, which is exactly why sharing this stuff feels worthwhile.

Good luck out there. May your armies never retreat.
`;function pn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var I=pn();function mn(e){I=e}var L={exec:()=>null};function R(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(z.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var z={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`)},hn=/^(?:[ \t]*(?:\n|$))+/,gn=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,_n=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,B=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vn=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yn=/(?:[*+-]|\d{1,9}[.)])/,bn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,xn=R(bn).replace(/bull/g,yn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Sn=R(bn).replace(/bull/g,yn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Cn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,wn=/^[^\n]+/,Tn=/(?!\s*\])(?:\\.|[^\[\]\\])+/,En=R(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Tn).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Dn=R(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,yn).getRegex(),V=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,On=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,kn=R(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,On).replace(`tag`,V).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),An=R(Cn).replace(`hr`,B).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,V).getRegex(),jn={blockquote:R(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,An).getRegex(),code:gn,def:En,fences:_n,heading:vn,hr:B,html:kn,lheading:xn,list:Dn,newline:hn,paragraph:An,table:L,text:wn},Mn=R(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,B).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,V).getRegex(),Nn={...jn,lheading:Sn,table:Mn,paragraph:R(Cn).replace(`hr`,B).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Mn).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)]) `).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,V).getRegex()},Pn={...jn,html:R(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,On).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:L,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:R(Cn).replace(`hr`,B).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,xn).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Fn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,In=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ln=/^( {2,}|\\)\n(?!\s*$)/,Rn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,H=/[\p{P}\p{S}]/u,zn=/[\s\p{P}\p{S}]/u,Bn=/[^\s\p{P}\p{S}]/u,Vn=R(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,zn).getRegex(),Hn=/(?!~)[\p{P}\p{S}]/u,Un=/(?!~)[\s\p{P}\p{S}]/u,Wn=/(?:[^\s\p{P}\p{S}]|~)/u,Gn=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Kn=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,qn=R(Kn,`u`).replace(/punct/g,H).getRegex(),Jn=R(Kn,`u`).replace(/punct/g,Hn).getRegex(),Yn=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Xn=R(Yn,`gu`).replace(/notPunctSpace/g,Bn).replace(/punctSpace/g,zn).replace(/punct/g,H).getRegex(),Zn=R(Yn,`gu`).replace(/notPunctSpace/g,Wn).replace(/punctSpace/g,Un).replace(/punct/g,Hn).getRegex(),Qn=R(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Bn).replace(/punctSpace/g,zn).replace(/punct/g,H).getRegex(),$n=R(/\\(punct)/,`gu`).replace(/punct/g,H).getRegex(),er=R(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),tr=R(On).replace(`(?:-->|$)`,`-->`).getRegex(),nr=R(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,tr).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),U=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,rr=R(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace(`label`,U).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ir=R(/^!?\[(label)\]\[(ref)\]/).replace(`label`,U).replace(`ref`,Tn).getRegex(),ar=R(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Tn).getRegex(),or={_backpedal:L,anyPunctuation:$n,autolink:er,blockSkip:Gn,br:Ln,code:In,del:L,emStrongLDelim:qn,emStrongRDelimAst:Xn,emStrongRDelimUnd:Qn,escape:Fn,link:rr,nolink:ar,punctuation:Vn,reflink:ir,reflinkSearch:R(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,ir).replace(`nolink`,ar).getRegex(),tag:nr,text:Rn,url:L},sr={...or,link:R(/^!?\[(label)\]\((.*?)\)/).replace(`label`,U).getRegex(),reflink:R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,U).getRegex()},cr={...or,emStrongRDelimAst:Zn,emStrongLDelim:Jn,url:R(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,`i`).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},lr={...cr,br:R(Ln).replace(`{2,}`,`*`).getRegex(),text:R(cr.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},W={normal:jn,gfm:Nn,pedantic:Pn},G={normal:or,gfm:cr,breaks:lr,pedantic:sr},ur={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},dr=e=>ur[e];function K(e,t){if(t){if(z.escapeTest.test(e))return e.replace(z.escapeReplace,dr)}else if(z.escapeTestNoEncode.test(e))return e.replace(z.escapeReplaceNoEncode,dr);return e}function fr(e){try{e=encodeURI(e).replace(z.percentDecode,`%`)}catch{return null}return e}function pr(e,t){let n=e.replace(z.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(z.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(z.slashPipe,`|`);return n}function q(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function mr(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function hr(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function gr(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var _r=class{options;rules;lexer;constructor(e){this.options=e||I}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:q(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=gr(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=q(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:q(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=q(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>` `.repeat(3*e.length)),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=t[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d);for(;e;){let f=e.split(`
`,1)[0],p;if(l=f,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),p=l):p=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||t.test(l)||n.test(l))break;if(p.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+p.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}!u&&!l.trim()&&(u=!0),r+=f+`
`,e=e.substring(f.length+1),c=p.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0));let f=null,p;this.options.gfm&&(f=this.rules.other.listIsTask.exec(s),f&&(p=f[0]!==`[ ] `,s=s.replace(this.rules.other.listReplaceTask,``))),i.items.push({type:`list_item`,raw:r,task:!!f,checked:p,loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e=0;e<i.items.length;e++)if(this.lexer.state.top=!1,i.items[e].tokens=this.lexer.blockTokens(i.items[e].text,[]),!i.loose){let t=i.items[e].tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(i.loose)for(let e=0;e<i.items.length;e++)i.items[e].loose=!0;return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=pr(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(pr(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=q(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=mr(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),hr(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return hr(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(r&&!(r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:`del`,raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},J=class e{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||I,this.options.tokenizer=this.options.tokenizer||new _r,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:z,block:W.normal,inline:G.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=G.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=G.breaks:t.inline=G.gfm),this.tokenizer.rules=t}static get rules(){return{block:W,inline:G}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(z.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(z.tabCharGlobal,`    `).replace(z.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=`
`+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=`
`+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a=``;for(;e;){i||(a=``),i=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,a)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let o=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(o)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(a=r.raw.slice(-1)),i=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},Y=class{options;parser;constructor(e){this.options=e||I}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(z.notSpaceStart)?.[0],i=e.replace(z.endingNewline,``)+`
`;return r?`<pre><code class="language-`+K(r)+`">`+(n?i:K(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:K(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){let t=``;if(e.task){let n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type===`paragraph`?(e.tokens[0].text=n+` `+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type===`text`&&(e.tokens[0].tokens[0].text=n+` `+K(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:`text`,raw:n+` `,text:n+` `,escaped:!0}):t+=n+` `}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox">`}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${K(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=fr(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+K(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=fr(e);if(i===null)return K(n);e=i;let a=`<img src="${e}" alt="${n}"`;return t&&(a+=` title="${K(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:K(e.text)}},vr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}},X=class e{options;renderer;textRenderer;constructor(e){this.options=e||I,this.options.renderer=this.options.renderer||new Y,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new vr}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e,t=!0){let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=i,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(t!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`paragraph`,`text`].includes(e.type)){n+=t||``;continue}}let a=i;switch(a.type){case`space`:n+=this.renderer.space(a);continue;case`hr`:n+=this.renderer.hr(a);continue;case`heading`:n+=this.renderer.heading(a);continue;case`code`:n+=this.renderer.code(a);continue;case`table`:n+=this.renderer.table(a);continue;case`blockquote`:n+=this.renderer.blockquote(a);continue;case`list`:n+=this.renderer.list(a);continue;case`html`:n+=this.renderer.html(a);continue;case`paragraph`:n+=this.renderer.paragraph(a);continue;case`text`:{let i=a,o=this.renderer.text(i);for(;r+1<e.length&&e[r+1].type===`text`;)i=e[++r],o+=`
`+this.renderer.text(i);t?n+=this.renderer.paragraph({type:`paragraph`,raw:o,text:o,tokens:[{type:`text`,raw:o,text:o,escaped:!0}]}):n+=o;continue}default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}parseInline(e,t=this.renderer){let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},yr=class{options;block;constructor(e){this.options=e||I}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?J.lex:J.lexInline}provideParser(){return this.block?X.parse:X.parseInline}},Z=new class{defaults=pn();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=X;Renderer=Y;TextRenderer=vr;Lexer=J;Tokenizer=_r;Hooks=yr;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Y(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new _r(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new yr;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];yr.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async)return Promise.resolve(i.call(t,e)).then(e=>a.call(t,e));let n=i.call(t,e);return a.call(t,n)}:t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return X.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(t==null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));i.hooks&&(i.hooks.options=i,i.hooks.block=e);let o=i.hooks?i.hooks.provideLexer():e?J.lex:J.lexInline,s=i.hooks?i.hooks.provideParser():e?X.parse:X.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(e=>o(e,i)).then(e=>i.hooks?i.hooks.processAllTokens(e):e).then(e=>i.walkTokens?Promise.all(this.walkTokens(e,i.walkTokens)).then(()=>e):e).then(e=>s(e,i)).then(e=>i.hooks?i.hooks.postprocess(e):e).catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let e=o(t,i);i.hooks&&(e=i.hooks.processAllTokens(e)),i.walkTokens&&this.walkTokens(e,i.walkTokens);let n=s(e,i);return i.hooks&&(n=i.hooks.postprocess(n)),n}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+K(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Q(e,t){return Z.parse(e,t)}Q.options=Q.setOptions=function(e){return Z.setOptions(e),Q.defaults=Z.defaults,mn(Q.defaults),Q},Q.getDefaults=pn,Q.defaults=I,Q.use=function(...e){return Z.use(...e),Q.defaults=Z.defaults,mn(Q.defaults),Q},Q.walkTokens=function(e,t){return Z.walkTokens(e,t)},Q.parseInline=Z.parseInline,Q.Parser=X,Q.parser=X.parse,Q.Renderer=Y,Q.TextRenderer=vr,Q.Lexer=J,Q.lexer=J.lex,Q.Tokenizer=_r,Q.Hooks=yr,Q.parse=Q,Q.options,Q.setOptions,Q.use,Q.walkTokens,Q.parseInline,X.parse,J.lex;function br(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{data:{},content:e};let n={};for(let e of t[1].split(`
`)){let t=e.indexOf(`:`);if(t<0)continue;let r=e.slice(0,t).trim(),i=e.slice(t+1).trim();r&&(i.startsWith(`"`)&&i.endsWith(`"`)||i.startsWith(`'`)&&i.endsWith(`'`)?i=i.slice(1,-1):i.startsWith(`[`)&&i.endsWith(`]`)?i=i.slice(1,-1).split(`,`).map(e=>e.trim().replace(/['"]/g,``)).filter(Boolean):i===`true`?i=!0:i===`false`?i=!1:!isNaN(i)&&i!==``&&(i=Number(i)),n[r]=i)}return{data:n,content:t[2]}}Q.setOptions({breaks:!0});var $=Object.entries(Object.assign({"../articles/01-getting-started.md":sn,"../articles/02-hero-classes.md":cn,"../articles/03-combat-system.md":ln,"../articles/04-resource-management.md":un,"../articles/05-town-building.md":dn,"../articles/06-hardcore-early-game-guide.md":fn})).map(([e,t])=>{let{data:n,content:r}=br(t),i=e.split(`/`).pop().replace(`.md`,``),a=r.trim().split(/\s+/).length;return{...n,slug:i,html:Q(r),readingTime:Math.max(1,Math.ceil(a/200))}}).sort((e,t)=>new Date(t.date)-new Date(e.date));function xr(e){return $.find(t=>t.slug===e)??null}var Sr=[...new Set($.map(e=>e.category).filter(Boolean))];function Cr(e,t=3){let n=xr(e);return n?$.filter(t=>t.slug!==e&&t.category===n.category).slice(0,t):[]}var wr={class:`card-body`},Tr={class:`card-meta`},Er={key:0,class:`featured-badge`},Dr={class:`card-title`},Or={class:`card-desc`},kr={class:`card-footer`},Ar={class:`card-date`},jr={class:`card-reading`},Mr=ye({__name:`ArticleCard`,props:{article:{type:Object,required:!0},featured:{type:Boolean,default:!1}},setup(t){let n={"Beginner Guides":{bg:`rgba(58,110,168,0.15)`,text:`#7eaee0`,border:`rgba(58,110,168,0.4)`},"Heroes & Units":{bg:`rgba(155,35,53,0.15)`,text:`#e07e8e`,border:`rgba(155,35,53,0.4)`},Combat:{bg:`rgba(201,162,39,0.12)`,text:`#c9a227`,border:`rgba(201,162,39,0.4)`},Economy:{bg:`rgba(34,197,94,0.1)`,text:`#4ade80`,border:`rgba(34,197,94,0.3)`},"Town Building":{bg:`rgba(168,130,58,0.15)`,text:`#d4a45a`,border:`rgba(168,130,58,0.4)`},"Player Insights":{bg:`rgba(139,92,246,0.12)`,text:`#a78bfa`,border:`rgba(139,92,246,0.4)`}};function i(e){let t=n[e]||{bg:`rgba(107,114,128,0.15)`,text:`#9ca3af`,border:`rgba(107,114,128,0.3)`};return{background:t.bg,color:t.text,border:`1px solid ${t.border}`}}function a(e){return e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`}):``}return(n,s)=>(w(),r(f(me),{to:`/guide/${t.article.slug}`,class:S([`article-card`,{"article-card--featured":t.featured}])},{default:o(()=>[_(`div`,wr,[_(`div`,Tr,[_(`span`,{class:`category-badge`,style:ee(i(t.article.category))},e(t.article.category),5),t.featured&&t.article.featured?(w(),v(`span`,Er,`⭐ Featured`)):Se(``,!0)]),_(`h2`,Dr,e(t.article.title),1),_(`p`,Or,e(t.article.description),1),_(`div`,kr,[_(`span`,Ar,e(a(t.article.date)),1),_(`span`,jr,e(t.article.readingTime)+` min read`,1),s[0]||=_(`span`,{class:`card-cta`},`Read Guide →`,-1)])])]),_:1},8,[`to`,`class`]))}},[[`__scopeId`,`data-v-561d8f22`]]),Nr={key:0,id:`stories`,class:`section-featured`},Pr={class:`container`},Fr={class:`featured-grid`},Ir={id:`guides`,class:`section-guides`},Lr={class:`container`},Rr={class:`guides-header`},zr={class:`guides-count`},Br={class:`category-filter`,role:`group`,"aria-label":`Filter by category`},Vr=[`onClick`],Hr={key:1,class:`empty-state`},Ur=ye({__name:`HomeView`,setup(t){ve({title:`Olden Era Journal – Player Experiences & Insights for HoMM: Olden Era`,meta:[{name:`description`,content:`A community space for Heroes of Might and Magic: Olden Era players to share experiences, discoveries, and insights — not just tips, but the stories behind the strategies.`},{property:`og:title`,content:`Olden Era Journal – Player Experiences & Insights`},{property:`og:description`,content:`A community space for Heroes of Might and Magic: Olden Era players to share experiences, discoveries, and insights.`},{property:`og:url`,content:`https://homm-olden-era.com/`}]});let n=l(`All`),a=Ce(()=>[`All`,...Sr]),s=Ce(()=>n.value===`All`?$:$.filter(e=>e.category===n.value)),c=Ce(()=>$.filter(e=>e.featured));return(t,l)=>(w(),v(E,null,[l[3]||=i(`<section class="hero-banner" data-v-a055f487><div class="hero-bg" data-v-a055f487></div><div class="hero-content" data-v-a055f487><div class="hero-badge" data-v-a055f487>🏰 Player Community</div><h1 class="hero-title" data-v-a055f487>Olden Era<br data-v-a055f487><span class="hero-highlight" data-v-a055f487>Journal</span></h1><p class="hero-subtitle" data-v-a055f487> A space where players of <em data-v-a055f487>Heroes of Might and Magic: Olden Era</em> share what they&#39;ve discovered, what surprised them, and what keeps drawing them back. </p><div class="hero-actions" data-v-a055f487><a href="#stories" class="hero-cta" data-v-a055f487>Read Stories ↓</a><a href="#guides" class="hero-cta-secondary" data-v-a055f487>Browse Guides</a></div></div><div class="hero-ornament" aria-hidden="true" data-v-a055f487>⚔</div></section><section class="section-about" data-v-a055f487><div class="container" data-v-a055f487><div class="about-grid" data-v-a055f487><div class="about-item" data-v-a055f487><span class="about-icon" data-v-a055f487>🗺️</span><h3 data-v-a055f487>Shared Experiences</h3><p data-v-a055f487>Real stories from real playthroughs — the unexpected moments, turning points, and lessons learned.</p></div><div class="about-item" data-v-a055f487><span class="about-icon" data-v-a055f487>💡</span><h3 data-v-a055f487>Practical Insights</h3><p data-v-a055f487>Tips that come from actually playing, not just theorycrafting. Useful context alongside the strategy.</p></div><div class="about-item" data-v-a055f487><span class="about-icon" data-v-a055f487>🤝</span><h3 data-v-a055f487>Community Voice</h3><p data-v-a055f487>Written by fans, for fans. No corporate tone — just players who love this game talking about it honestly.</p></div></div></div></section>`,2),c.value.length?(w(),v(`section`,Nr,[_(`div`,Pr,[l[0]||=_(`h2`,{class:`section-title`},`✨ Community Picks`,-1),_(`div`,Fr,[(w(!0),v(E,null,p(c.value,e=>(w(),r(Mr,{key:e.slug,article:e,featured:!0},null,8,[`article`]))),128))])])])):Se(``,!0),_(`section`,Ir,[_(`div`,Lr,[_(`div`,Rr,[l[1]||=_(`h2`,{class:`section-title`},`📚 All Posts`,-1),_(`p`,zr,e(s.value.length)+` article`+e(s.value.length===1?``:`s`),1)]),_(`div`,Br,[(w(!0),v(E,null,p(a.value,t=>(w(),v(`button`,{key:t,class:S([`filter-btn`,{active:n.value===t}]),onClick:e=>n.value=t},e(t),11,Vr))),128))]),T(Pe,{name:`fade`,mode:`out-in`},{default:o(()=>[s.value.length?(w(),v(`div`,{key:n.value,class:`articles-grid`},[(w(!0),v(E,null,p(s.value,e=>(w(),r(Mr,{key:e.slug,article:e},null,8,[`article`]))),128))])):(w(),v(`div`,Hr,[...l[2]||=[_(`p`,null,`No posts in this category yet — check back soon.`,-1)]]))]),_:1})])]),l[4]||=i(`<section class="section-contribute" data-v-a055f487><div class="container" data-v-a055f487><div class="contribute-box" data-v-a055f487><span class="contribute-icon" data-v-a055f487>✍️</span><h3 class="contribute-title" data-v-a055f487>Have something to share?</h3><p data-v-a055f487> Played something interesting? Stumbled on an unexpected strategy? Drop a new <code data-v-a055f487>.md</code> file in <code data-v-a055f487>src/articles/</code> — it shows up here automatically. </p></div></div></section>`,1)],64))}},[[`__scopeId`,`data-v-a055f487`]]),Wr=`modulepreload`,Gr=function(e){return`/`+e},Kr={},qr=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Gr(t,n),t in Kr)return;Kr[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Wr,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Jr=[{path:`/`,name:`home`,component:Ur},{path:`/guide/:slug`,name:`article`,component:()=>qr(()=>import(`./ArticleView-B1mG8yQG.js`),__vite__mapDeps([0,1,2]))},{path:`/:pathMatch(.*)*`,name:`not-found`,component:()=>qr(()=>import(`./NotFoundView-BmgTyqUN.js`),__vite__mapDeps([3,1,4]))}],Yr=_e({history:de(`/`),routes:Jr,scrollBehavior(e,t,n){return n||(e.hash?{el:e.hash,behavior:`smooth`}:{top:0,behavior:`smooth`})}}),Xr=wt(on),Zr=Kt();Xr.use(Yr),Xr.use(Zr),Xr.mount(`#app`);export{xr as n,Cr as r,$ as t};