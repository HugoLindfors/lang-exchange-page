(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function mi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Bl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vl=mi(Bl);function La(t){return!!t||t===""}function gi(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?Hl(r):gi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(he(t))return t;if(ae(t))return t}}const $l=/;(?![^(]*\))/g,jl=/:(.+)/;function Hl(t){const e={};return t.split($l).forEach(n=>{if(n){const r=n.split(jl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _i(t){let e="";if(he(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=_i(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Wl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=vr(t[r],e[r]);return n}function vr(t,e){if(t===e)return!0;let n=no(t),r=no(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=nr(t),r=nr(e),n||r)return t===e;if(n=L(t),r=L(e),n||r)return n&&r?Wl(t,e):!1;if(n=ae(t),r=ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!vr(t[o],e[o]))return!1}}return String(t)===String(e)}function yi(t,e){return t.findIndex(n=>vr(n,e))}const _e=t=>he(t)?t:t==null?"":L(t)||ae(t)&&(t.toString===Ua||!$(t.toString))?JSON.stringify(t,Ma,2):String(t),Ma=(t,e)=>e&&e.__v_isRef?Ma(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Pn(e)?{[`Set(${e.size})`]:[...e.values()]}:ae(e)&&!L(e)&&!Fa(e)?String(e):e,re={},pn=[],We=()=>{},zl=()=>!1,ql=/^on[^a-z]/,hs=t=>ql.test(t),vi=t=>t.startsWith("onUpdate:"),Ee=Object.assign,bi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kl=Object.prototype.hasOwnProperty,q=(t,e)=>Kl.call(t,e),L=Array.isArray,mn=t=>br(t)==="[object Map]",Pn=t=>br(t)==="[object Set]",no=t=>br(t)==="[object Date]",$=t=>typeof t=="function",he=t=>typeof t=="string",nr=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",xa=t=>ae(t)&&$(t.then)&&$(t.catch),Ua=Object.prototype.toString,br=t=>Ua.call(t),Gl=t=>br(t).slice(8,-1),Fa=t=>br(t)==="[object Object]",wi=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Br=mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ps=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jl=/-(\w)/g,wn=ps(t=>t.replace(Jl,(e,n)=>n?n.toUpperCase():"")),Yl=/\B([A-Z])/g,Nn=ps(t=>t.replace(Yl,"-$1").toLowerCase()),Ba=ps(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cs=ps(t=>t?`on${Ba(t)}`:""),rr=(t,e)=>!Object.is(t,e),Vr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Zr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ro;const Ql=()=>ro||(ro=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Qe;class Xl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Qe&&(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){Qe=this}off(){Qe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Zl(t,e=Qe){e&&e.active&&e.effects.push(t)}const Ii=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Va=t=>(t.w&Ut)>0,$a=t=>(t.n&Ut)>0,eu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ut},tu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Va(s)&&!$a(s)?s.delete(t):e[n++]=s,s.w&=~Ut,s.n&=~Ut}e.length=n}},js=new WeakMap;let Wn=0,Ut=1;const Hs=30;let je;const Gt=Symbol(""),Ws=Symbol("");class Ei{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zl(this,r)}run(){if(!this.active)return this.fn();let e=je,n=Dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=je,je=this,Dt=!0,Ut=1<<++Wn,Wn<=Hs?eu(this):so(this),this.fn()}finally{Wn<=Hs&&tu(this),Ut=1<<--Wn,je=this.parent,Dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(so(this),this.onStop&&this.onStop(),this.active=!1)}}function so(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dt=!0;const ja=[];function Dn(){ja.push(Dt),Dt=!1}function Ln(){const t=ja.pop();Dt=t===void 0?!0:t}function Pe(t,e,n){if(Dt&&je){let r=js.get(t);r||js.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ii()),Ha(s)}}function Ha(t,e){let n=!1;Wn<=Hs?$a(t)||(t.n|=Ut,n=!Va(t)):n=!t.has(je),n&&(t.add(je),je.deps.push(t))}function pt(t,e,n,r,s,i){const o=js.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&L(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":L(t)?wi(n)&&a.push(o.get("length")):(a.push(o.get(Gt)),mn(t)&&a.push(o.get(Ws)));break;case"delete":L(t)||(a.push(o.get(Gt)),mn(t)&&a.push(o.get(Ws)));break;case"set":mn(t)&&a.push(o.get(Gt));break}if(a.length===1)a[0]&&zs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);zs(Ii(c))}}function zs(t,e){const n=L(t)?t:[...t];for(const r of n)r.computed&&io(r);for(const r of n)r.computed||io(r)}function io(t,e){(t!==je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const nu=mi("__proto__,__v_isRef,__isVue"),Wa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nr)),ru=Si(),su=Si(!1,!0),iu=Si(!0),oo=ou();function ou(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dn();const r=J(this)[e].apply(this,n);return Ln(),r}}),t}function Si(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Iu:Ja:e?Ga:Ka).get(r))return r;const o=L(r);if(!t&&o&&q(oo,s))return Reflect.get(oo,s,i);const a=Reflect.get(r,s,i);return(nr(s)?Wa.has(s):nu(s))||(t||Pe(r,"get",s),e)?a:ue(a)?o&&wi(s)?a:a.value:ae(a)?t?Ya(a):Mn(a):a}}const au=za(),cu=za(!0);function za(t=!1){return function(n,r,s,i){let o=n[r];if(In(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!es(s)&&!In(s)&&(o=J(o),s=J(s)),!L(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=L(n)&&wi(r)?Number(r)<n.length:q(n,r),c=Reflect.set(n,r,s,i);return n===J(i)&&(a?rr(s,o)&&pt(n,"set",r,s):pt(n,"add",r,s)),c}}function lu(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pt(t,"delete",e,void 0),r}function uu(t,e){const n=Reflect.has(t,e);return(!nr(e)||!Wa.has(e))&&Pe(t,"has",e),n}function du(t){return Pe(t,"iterate",L(t)?"length":Gt),Reflect.ownKeys(t)}const qa={get:ru,set:au,deleteProperty:lu,has:uu,ownKeys:du},fu={get:iu,set(t,e){return!0},deleteProperty(t,e){return!0}},hu=Ee({},qa,{get:su,set:cu}),Ti=t=>t,ms=t=>Reflect.getPrototypeOf(t);function Pr(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(e!==i&&Pe(s,"get",e),Pe(s,"get",i));const{has:o}=ms(s),a=r?Ti:n?Ci:sr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Nr(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(t!==s&&Pe(r,"has",t),Pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Dr(t,e=!1){return t=t.__v_raw,!e&&Pe(J(t),"iterate",Gt),Reflect.get(t,"size",t)}function ao(t){t=J(t);const e=J(this);return ms(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function co(t,e){e=J(e);const n=J(this),{has:r,get:s}=ms(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?rr(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function lo(t){const e=J(this),{has:n,get:r}=ms(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pt(e,"delete",t,void 0),i}function uo(){const t=J(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function Lr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?Ti:t?Ci:sr;return!t&&Pe(a,"iterate",Gt),o.forEach((l,d)=>r.call(s,c(l),c(d),i))}}function Mr(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=mn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),d=n?Ti:e?Ci:sr;return!e&&Pe(i,"iterate",c?Ws:Gt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function wt(t){return function(...e){return t==="delete"?!1:this}}function pu(){const t={get(i){return Pr(this,i)},get size(){return Dr(this)},has:Nr,add:ao,set:co,delete:lo,clear:uo,forEach:Lr(!1,!1)},e={get(i){return Pr(this,i,!1,!0)},get size(){return Dr(this)},has:Nr,add:ao,set:co,delete:lo,clear:uo,forEach:Lr(!1,!0)},n={get(i){return Pr(this,i,!0)},get size(){return Dr(this,!0)},has(i){return Nr.call(this,i,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Lr(!0,!1)},r={get(i){return Pr(this,i,!0,!0)},get size(){return Dr(this,!0)},has(i){return Nr.call(this,i,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:Lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Mr(i,!1,!1),n[i]=Mr(i,!0,!1),e[i]=Mr(i,!1,!0),r[i]=Mr(i,!0,!0)}),[t,n,e,r]}const[mu,gu,_u,yu]=pu();function Ai(t,e){const n=e?t?yu:_u:t?gu:mu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const vu={get:Ai(!1,!1)},bu={get:Ai(!1,!0)},wu={get:Ai(!0,!1)},Ka=new WeakMap,Ga=new WeakMap,Ja=new WeakMap,Iu=new WeakMap;function Eu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Su(t){return t.__v_skip||!Object.isExtensible(t)?0:Eu(Gl(t))}function Mn(t){return In(t)?t:Ri(t,!1,qa,vu,Ka)}function Tu(t){return Ri(t,!1,hu,bu,Ga)}function Ya(t){return Ri(t,!0,fu,wu,Ja)}function Ri(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Su(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function gn(t){return In(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function In(t){return!!(t&&t.__v_isReadonly)}function es(t){return!!(t&&t.__v_isShallow)}function Qa(t){return gn(t)||In(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Xa(t){return Xr(t,"__v_skip",!0),t}const sr=t=>ae(t)?Mn(t):t,Ci=t=>ae(t)?Ya(t):t;function Za(t){Dt&&je&&(t=J(t),Ha(t.dep||(t.dep=Ii())))}function ec(t,e){t=J(t),t.dep&&zs(t.dep)}function ue(t){return!!(t&&t.__v_isRef===!0)}function Au(t){return tc(t,!1)}function Ru(t){return tc(t,!0)}function tc(t,e){return ue(t)?t:new Cu(t,e)}class Cu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:sr(e)}get value(){return Za(this),this._value}set value(e){const n=this.__v_isShallow||es(e)||In(e);e=n?e:J(e),rr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:sr(e),ec(this))}}function Me(t){return ue(t)?t.value:t}const Ou={get:(t,e,n)=>Me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function nc(t){return gn(t)?t:new Proxy(t,Ou)}var rc;class ku{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rc]=!1,this._dirty=!0,this.effect=new Ei(e,()=>{this._dirty||(this._dirty=!0,ec(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this);return Za(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}rc="__v_isReadonly";function Pu(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=We):(r=t.get,s=t.set),new ku(r,s,i||!s,n)}function Lt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){gs(i,e,n)}return s}function ze(t,e,n,r){if($(t)){const i=Lt(t,e,n,r);return i&&xa(i)&&i.catch(o=>{gs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ze(t[i],e,n,r));return s}function gs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Lt(c,null,10,[t,o,a]);return}}Nu(t,n,s,r)}function Nu(t,e,n,r=!0){console.error(t)}let ir=!1,qs=!1;const ye=[];let Ze=0;const _n=[];let at=null,Wt=0;const sc=Promise.resolve();let Oi=null;function ic(t){const e=Oi||sc;return t?e.then(this?t.bind(this):t):e}function Du(t){let e=Ze+1,n=ye.length;for(;e<n;){const r=e+n>>>1;or(ye[r])<t?e=r+1:n=r}return e}function ki(t){(!ye.length||!ye.includes(t,ir&&t.allowRecurse?Ze+1:Ze))&&(t.id==null?ye.push(t):ye.splice(Du(t.id),0,t),oc())}function oc(){!ir&&!qs&&(qs=!0,Oi=sc.then(cc))}function Lu(t){const e=ye.indexOf(t);e>Ze&&ye.splice(e,1)}function Mu(t){L(t)?_n.push(...t):(!at||!at.includes(t,t.allowRecurse?Wt+1:Wt))&&_n.push(t),oc()}function fo(t,e=ir?Ze+1:0){for(;e<ye.length;e++){const n=ye[e];n&&n.pre&&(ye.splice(e,1),e--,n())}}function ac(t){if(_n.length){const e=[...new Set(_n)];if(_n.length=0,at){at.push(...e);return}for(at=e,at.sort((n,r)=>or(n)-or(r)),Wt=0;Wt<at.length;Wt++)at[Wt]();at=null,Wt=0}}const or=t=>t.id==null?1/0:t.id,xu=(t,e)=>{const n=or(t)-or(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cc(t){qs=!1,ir=!0,ye.sort(xu);const e=We;try{for(Ze=0;Ze<ye.length;Ze++){const n=ye[Ze];n&&n.active!==!1&&Lt(n,null,14)}}finally{Ze=0,ye.length=0,ac(),ir=!1,Oi=null,(ye.length||_n.length)&&cc()}}function Uu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[d]||re;p&&(s=n.map(_=>_.trim())),f&&(s=n.map(Zr))}let a,c=r[a=Cs(e)]||r[a=Cs(wn(e))];!c&&i&&(c=r[a=Cs(Nn(e))]),c&&ze(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ze(l,t,6,s)}}function lc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const d=lc(l,e,!0);d&&(a=!0,Ee(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ae(t)&&r.set(t,null),null):(L(i)?i.forEach(c=>o[c]=null):Ee(o,i),ae(t)&&r.set(t,o),o)}function _s(t,e){return!t||!hs(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,Nn(e))||q(t,e))}let tt=null,ys=null;function ts(t){const e=tt;return tt=t,ys=t&&t.type.__scopeId||null,e}function uc(t){ys=t}function dc(){ys=null}function zn(t,e=tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wo(-1);const i=ts(e),o=t(...s);return ts(i),r._d&&wo(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Os(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:d,renderCache:f,data:p,setupState:_,ctx:A,inheritAttrs:B}=t;let C,R;const U=ts(t);try{if(n.shapeFlag&4){const G=s||r;C=Xe(d.call(G,G,f,i,_,p,A)),R=c}else{const G=e;C=Xe(G.length>1?G(i,{attrs:c,slots:a,emit:l}):G(i,null)),R=e.props?c:Fu(c)}}catch(G){Jn.length=0,gs(G,t,1),C=ge(Qt)}let W=C;if(R&&B!==!1){const G=Object.keys(R),{shapeFlag:pe}=W;G.length&&pe&7&&(o&&G.some(vi)&&(R=Bu(R,o)),W=En(W,R))}return n.dirs&&(W=En(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),C=W,ts(U),C}const Fu=t=>{let e;for(const n in t)(n==="class"||n==="style"||hs(n))&&((e||(e={}))[n]=t[n]);return e},Bu=(t,e)=>{const n={};for(const r in t)(!vi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Vu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ho(r,o,l):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(o[p]!==r[p]&&!_s(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ho(r,o,l):!0:!!o;return!1}function ho(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_s(n,i))return!0}return!1}function $u({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ju=t=>t.__isSuspense;function Hu(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Mu(t)}function $r(t,e){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[t]=e}}function ft(t,e,n=!1){const r=ve||tt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}const po={};function jr(t,e,n){return fc(t,e,n)}function fc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=re){const a=ve;let c,l=!1,d=!1;if(ue(t)?(c=()=>t.value,l=es(t)):gn(t)?(c=()=>t,r=!0):L(t)?(d=!0,l=t.some(R=>gn(R)||es(R)),c=()=>t.map(R=>{if(ue(R))return R.value;if(gn(R))return qt(R);if($(R))return Lt(R,a,2)})):$(t)?e?c=()=>Lt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),ze(t,a,3,[p])}:c=We,e&&r){const R=c;c=()=>qt(R())}let f,p=R=>{f=C.onStop=()=>{Lt(R,a,4)}};if(cr)return p=We,e?n&&ze(e,a,3,[c(),d?[]:void 0,p]):c(),We;let _=d?[]:po;const A=()=>{if(!!C.active)if(e){const R=C.run();(r||l||(d?R.some((U,W)=>rr(U,_[W])):rr(R,_)))&&(f&&f(),ze(e,a,3,[R,_===po?void 0:_,p]),_=R)}else C.run()};A.allowRecurse=!!e;let B;s==="sync"?B=A:s==="post"?B=()=>Te(A,a&&a.suspense):(A.pre=!0,a&&(A.id=a.uid),B=()=>ki(A));const C=new Ei(c,B);return e?n?A():_=C.run():s==="post"?Te(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&bi(a.scope.effects,C)}}function Wu(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?hc(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ve;Sn(this);const a=fc(s,i.bind(r),n);return o?Sn(o):Jt(),a}function hc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function qt(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))qt(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)qt(t[n],e);else if(Pn(t)||mn(t))t.forEach(n=>{qt(n,e)});else if(Fa(t))for(const n in t)qt(t[n],e);return t}function pc(t){return $(t)?{setup:t,name:t.name}:t}const Hr=t=>!!t.type.__asyncLoader,mc=t=>t.type.__isKeepAlive;function zu(t,e){gc(t,"a",e)}function qu(t,e){gc(t,"da",e)}function gc(t,e,n=ve){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(vs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)mc(s.parent.vnode)&&Ku(r,e,n,s),s=s.parent}}function Ku(t,e,n,r){const s=vs(e,t,r,!0);_c(()=>{bi(r[e],s)},n)}function vs(t,e,n=ve,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dn(),Sn(n);const a=ze(e,n,t,o);return Jt(),Ln(),a});return r?s.unshift(i):s.push(i),i}}const yt=t=>(e,n=ve)=>(!cr||t==="sp")&&vs(t,e,n),Gu=yt("bm"),Ju=yt("m"),Yu=yt("bu"),Qu=yt("u"),Xu=yt("bum"),_c=yt("um"),Zu=yt("sp"),ed=yt("rtg"),td=yt("rtc");function nd(t,e=ve){vs("ec",t,e)}function un(t,e){const n=tt;if(n===null)return t;const r=ws(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=re]=e[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&qt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Dn(),ze(c,n,8,[t.el,a,t,e]),Ln())}}const rd=Symbol();function It(t,e,n,r){let s;const i=n&&n[r];if(L(t)||he(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ks=t=>t?Cc(t)?ws(t)||t.proxy:Ks(t.parent):null,ns=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ks(t.parent),$root:t=>Ks(t.root),$emit:t=>t.emit,$options:t=>Pi(t),$forceUpdate:t=>t.f||(t.f=()=>ki(t.update)),$nextTick:t=>t.n||(t.n=ic.bind(t.proxy)),$watch:t=>Wu.bind(t)}),sd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==re&&q(r,e))return o[e]=1,r[e];if(s!==re&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==re&&q(n,e))return o[e]=4,n[e];Gs&&(o[e]=0)}}const d=ns[e];let f,p;if(d)return e==="$attrs"&&Pe(t,"get",e),d(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==re&&q(s,e)?(s[e]=n,!0):r!==re&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&q(t,o)||e!==re&&q(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(ns,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gs=!0;function id(t){const e=Pi(t),n=t.proxy,r=t.ctx;Gs=!1,e.beforeCreate&&mo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:d,beforeMount:f,mounted:p,beforeUpdate:_,updated:A,activated:B,deactivated:C,beforeDestroy:R,beforeUnmount:U,destroyed:W,unmounted:G,render:pe,renderTracked:me,renderTriggered:Ne,errorCaptured:bt,serverPrefetch:Se,expose:Ke,inheritAttrs:st,components:Fe,directives:sn,filters:on}=e;if(l&&od(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const ee=o[se];$(ee)&&(r[se]=ee.bind(n))}if(s){const se=s.call(n,n);ae(se)&&(t.data=Mn(se))}if(Gs=!0,i)for(const se in i){const ee=i[se],Ae=$(ee)?ee.bind(n,n):$(ee.get)?ee.get.bind(n,n):We,cn=!$(ee)&&$(ee.set)?ee.set.bind(n):We,it=xe({get:Ae,set:cn});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ge=>it.value=Ge})}if(a)for(const se in a)yc(a[se],r,n,se);if(c){const se=$(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ee=>{$r(ee,se[ee])})}d&&mo(d,t,"c");function de(se,ee){L(ee)?ee.forEach(Ae=>se(Ae.bind(n))):ee&&se(ee.bind(n))}if(de(Gu,f),de(Ju,p),de(Yu,_),de(Qu,A),de(zu,B),de(qu,C),de(nd,bt),de(td,me),de(ed,Ne),de(Xu,U),de(_c,G),de(Zu,Se),L(Ke))if(Ke.length){const se=t.exposed||(t.exposed={});Ke.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>n[ee],set:Ae=>n[ee]=Ae})})}else t.exposed||(t.exposed={});pe&&t.render===We&&(t.render=pe),st!=null&&(t.inheritAttrs=st),Fe&&(t.components=Fe),sn&&(t.directives=sn)}function od(t,e,n=We,r=!1){L(t)&&(t=Js(t));for(const s in t){const i=t[s];let o;ae(i)?"default"in i?o=ft(i.from||s,i.default,!0):o=ft(i.from||s):o=ft(i),ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function mo(t,e,n){ze(L(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yc(t,e,n,r){const s=r.includes(".")?hc(n,r):()=>n[r];if(he(t)){const i=e[t];$(i)&&jr(s,i)}else if($(t))jr(s,t.bind(n));else if(ae(t))if(L(t))t.forEach(i=>yc(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&jr(s,i,t)}}function Pi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>rs(c,l,o,!0)),rs(c,e,o)),ae(e)&&i.set(e,c),c}function rs(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&rs(t,i,n,!0),s&&s.forEach(o=>rs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ad[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ad={data:go,props:jt,emits:jt,methods:jt,computed:jt,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:jt,directives:jt,watch:ld,provide:go,inject:cd};function go(t,e){return e?t?function(){return Ee($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function cd(t,e){return jt(Js(t),Js(e))}function Js(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function jt(t,e){return t?Ee(Ee(Object.create(null),t),e):e}function ld(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const r in e)n[r]=we(t[r],e[r]);return n}function ud(t,e,n,r=!1){const s={},i={};Xr(i,bs,1),t.propsDefaults=Object.create(null),vc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(_s(t.emitsOptions,p))continue;const _=e[p];if(c)if(q(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const A=wn(p);s[A]=Ys(c,a,A,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{vc(t,e,s,i)&&(l=!0);let d;for(const f in a)(!e||!q(e,f)&&((d=Nn(f))===f||!q(e,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Ys(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!q(e,f)&&!0)&&(delete i[f],l=!0)}l&&pt(t,"set","$attrs")}function vc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Br(c))continue;const l=e[c];let d;s&&q(s,d=wn(c))?!i||!i.includes(d)?n[d]=l:(a||(a={}))[d]=l:_s(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||re;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Ys(s,c,f,l[f],t,!q(l,f))}}return o}function Ys(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Sn(s),r=l[n]=c.call(null,e),Jt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Nn(n))&&(r=!0))}return r}function bc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const d=f=>{c=!0;const[p,_]=bc(f,e,!0);Ee(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return ae(t)&&r.set(t,pn),pn;if(L(i))for(let d=0;d<i.length;d++){const f=wn(i[d]);_o(f)&&(o[f]=re)}else if(i)for(const d in i){const f=wn(d);if(_o(f)){const p=i[d],_=o[f]=L(p)||$(p)?{type:p}:p;if(_){const A=bo(Boolean,_.type),B=bo(String,_.type);_[0]=A>-1,_[1]=B<0||A<B,(A>-1||q(_,"default"))&&a.push(f)}}}const l=[o,a];return ae(t)&&r.set(t,l),l}function _o(t){return t[0]!=="$"}function yo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function vo(t,e){return yo(t)===yo(e)}function bo(t,e){return L(e)?e.findIndex(n=>vo(n,t)):$(e)&&vo(e,t)?0:-1}const wc=t=>t[0]==="_"||t==="$stable",Ni=t=>L(t)?t.map(Xe):[Xe(t)],fd=(t,e,n)=>{if(e._n)return e;const r=zn((...s)=>Ni(e(...s)),n);return r._c=!1,r},Ic=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wc(s))continue;const i=t[s];if($(i))e[s]=fd(s,i,r);else if(i!=null){const o=Ni(i);e[s]=()=>o}}},Ec=(t,e)=>{const n=Ni(e);t.slots.default=()=>n},hd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),Xr(e,"_",n)):Ic(e,t.slots={})}else t.slots={},e&&Ec(t,e);Xr(t.slots,bs,1)},pd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ee(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ic(e,s)),o=e}else e&&(Ec(t,e),o={default:1});if(i)for(const a in s)!wc(a)&&!(a in o)&&delete s[a]};function Sc(){return{app:null,config:{isNativeTag:zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let md=0;function gd(t,e){return function(r,s=null){$(r)||(r=Object.assign({},r)),s!=null&&!ae(s)&&(s=null);const i=Sc(),o=new Set;let a=!1;const c=i.app={_uid:md++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Dd,get config(){return i.config},set config(l){},use(l,...d){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...d)):$(l)&&(o.add(l),l(c,...d))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,d){return d?(i.components[l]=d,c):i.components[l]},directive(l,d){return d?(i.directives[l]=d,c):i.directives[l]},mount(l,d,f){if(!a){const p=ge(r,s);return p.appContext=i,d&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,ws(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,d){return i.provides[l]=d,c}};return c}}function Qs(t,e,n,r,s=!1){if(L(t)){t.forEach((p,_)=>Qs(p,e&&(L(e)?e[_]:e),n,r,s));return}if(Hr(r)&&!s)return;const i=r.shapeFlag&4?ws(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,d=a.refs===re?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(he(l)?(d[l]=null,q(f,l)&&(f[l]=null)):ue(l)&&(l.value=null)),$(c))Lt(c,a,12,[o,d]);else{const p=he(c),_=ue(c);if(p||_){const A=()=>{if(t.f){const B=p?d[c]:c.value;s?L(B)&&bi(B,i):L(B)?B.includes(i)||B.push(i):p?(d[c]=[i],q(f,c)&&(f[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else p?(d[c]=o,q(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(d[t.k]=o))};o?(A.id=-1,Te(A,n)):A()}}}const Te=Hu;function _d(t){return yd(t)}function yd(t,e){const n=Ql();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:d,parentNode:f,nextSibling:p,setScopeId:_=We,cloneNode:A,insertStaticContent:B}=t,C=(u,h,m,v=null,y=null,I=null,T=!1,w=null,E=!!h.dynamicChildren)=>{if(u===h)return;u&&!$n(u,h)&&(v=P(u),De(u,y,I,!0),u=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:b,ref:N,shapeFlag:O}=h;switch(b){case Di:R(u,h,m,v);break;case Qt:U(u,h,m,v);break;case Wr:u==null&&W(h,m,v,T);break;case fe:sn(u,h,m,v,y,I,T,w,E);break;default:O&1?me(u,h,m,v,y,I,T,w,E):O&6?on(u,h,m,v,y,I,T,w,E):(O&64||O&128)&&b.process(u,h,m,v,y,I,T,w,E,ie)}N!=null&&y&&Qs(N,u&&u.ref,I,h||u,!h)},R=(u,h,m,v)=>{if(u==null)r(h.el=a(h.children),m,v);else{const y=h.el=u.el;h.children!==u.children&&l(y,h.children)}},U=(u,h,m,v)=>{u==null?r(h.el=c(h.children||""),m,v):h.el=u.el},W=(u,h,m,v)=>{[u.el,u.anchor]=B(u.children,h,m,v,u.el,u.anchor)},G=({el:u,anchor:h},m,v)=>{let y;for(;u&&u!==h;)y=p(u),r(u,m,v),u=y;r(h,m,v)},pe=({el:u,anchor:h})=>{let m;for(;u&&u!==h;)m=p(u),s(u),u=m;s(h)},me=(u,h,m,v,y,I,T,w,E)=>{T=T||h.type==="svg",u==null?Ne(h,m,v,y,I,T,w,E):Ke(u,h,y,I,T,w,E)},Ne=(u,h,m,v,y,I,T,w)=>{let E,b;const{type:N,props:O,shapeFlag:D,transition:F,patchFlag:K,dirs:te}=u;if(u.el&&A!==void 0&&K===-1)E=u.el=A(u.el);else{if(E=u.el=o(u.type,I,O&&O.is,O),D&8?d(E,u.children):D&16&&Se(u.children,E,null,v,y,I&&N!=="foreignObject",T,w),te&&Vt(u,null,v,"created"),O){for(const ce in O)ce!=="value"&&!Br(ce)&&i(E,ce,null,O[ce],I,u.children,v,y,S);"value"in O&&i(E,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Ye(b,v,u)}bt(E,u,u.scopeId,T,v)}te&&Vt(u,null,v,"beforeMount");const ne=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;ne&&F.beforeEnter(E),r(E,h,m),((b=O&&O.onVnodeMounted)||ne||te)&&Te(()=>{b&&Ye(b,v,u),ne&&F.enter(E),te&&Vt(u,null,v,"mounted")},y)},bt=(u,h,m,v,y)=>{if(m&&_(u,m),v)for(let I=0;I<v.length;I++)_(u,v[I]);if(y){let I=y.subTree;if(h===I){const T=y.vnode;bt(u,T,T.scopeId,T.slotScopeIds,y.parent)}}},Se=(u,h,m,v,y,I,T,w,E=0)=>{for(let b=E;b<u.length;b++){const N=u[b]=w?Tt(u[b]):Xe(u[b]);C(null,N,h,m,v,y,I,T,w)}},Ke=(u,h,m,v,y,I,T)=>{const w=h.el=u.el;let{patchFlag:E,dynamicChildren:b,dirs:N}=h;E|=u.patchFlag&16;const O=u.props||re,D=h.props||re;let F;m&&$t(m,!1),(F=D.onVnodeBeforeUpdate)&&Ye(F,m,h,u),N&&Vt(h,u,m,"beforeUpdate"),m&&$t(m,!0);const K=y&&h.type!=="foreignObject";if(b?st(u.dynamicChildren,b,w,m,v,K,I):T||Ae(u,h,w,null,m,v,K,I,!1),E>0){if(E&16)Fe(w,h,O,D,m,v,y);else if(E&2&&O.class!==D.class&&i(w,"class",null,D.class,y),E&4&&i(w,"style",O.style,D.style,y),E&8){const te=h.dynamicProps;for(let ne=0;ne<te.length;ne++){const ce=te[ne],Be=O[ce],ln=D[ce];(ln!==Be||ce==="value")&&i(w,ce,Be,ln,y,u.children,m,v,S)}}E&1&&u.children!==h.children&&d(w,h.children)}else!T&&b==null&&Fe(w,h,O,D,m,v,y);((F=D.onVnodeUpdated)||N)&&Te(()=>{F&&Ye(F,m,h,u),N&&Vt(h,u,m,"updated")},v)},st=(u,h,m,v,y,I,T)=>{for(let w=0;w<h.length;w++){const E=u[w],b=h[w],N=E.el&&(E.type===fe||!$n(E,b)||E.shapeFlag&70)?f(E.el):m;C(E,b,N,null,v,y,I,T,!0)}},Fe=(u,h,m,v,y,I,T)=>{if(m!==v){for(const w in v){if(Br(w))continue;const E=v[w],b=m[w];E!==b&&w!=="value"&&i(u,w,b,E,T,h.children,y,I,S)}if(m!==re)for(const w in m)!Br(w)&&!(w in v)&&i(u,w,m[w],null,T,h.children,y,I,S);"value"in v&&i(u,"value",m.value,v.value)}},sn=(u,h,m,v,y,I,T,w,E)=>{const b=h.el=u?u.el:a(""),N=h.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:F}=h;F&&(w=w?w.concat(F):F),u==null?(r(b,m,v),r(N,m,v),Se(h.children,m,N,y,I,T,w,E)):O>0&&O&64&&D&&u.dynamicChildren?(st(u.dynamicChildren,D,m,y,I,T,w),(h.key!=null||y&&h===y.subTree)&&Tc(u,h,!0)):Ae(u,h,m,N,y,I,T,w,E)},on=(u,h,m,v,y,I,T,w,E)=>{h.slotScopeIds=w,u==null?h.shapeFlag&512?y.ctx.activate(h,m,v,T,E):an(h,m,v,y,I,T,E):de(u,h,E)},an=(u,h,m,v,y,I,T)=>{const w=u.component=Rd(u,v,y);if(mc(u)&&(w.ctx.renderer=ie),Cd(w),w.asyncDep){if(y&&y.registerDep(w,se),!u.el){const E=w.subTree=ge(Qt);U(null,E,h,m)}return}se(w,u,h,m,y,I,T)},de=(u,h,m)=>{const v=h.component=u.component;if(Vu(u,h,m))if(v.asyncDep&&!v.asyncResolved){ee(v,h,m);return}else v.next=h,Lu(v.update),v.update();else h.el=u.el,v.vnode=h},se=(u,h,m,v,y,I,T)=>{const w=()=>{if(u.isMounted){let{next:N,bu:O,u:D,parent:F,vnode:K}=u,te=N,ne;$t(u,!1),N?(N.el=K.el,ee(u,N,T)):N=K,O&&Vr(O),(ne=N.props&&N.props.onVnodeBeforeUpdate)&&Ye(ne,F,N,K),$t(u,!0);const ce=Os(u),Be=u.subTree;u.subTree=ce,C(Be,ce,f(Be.el),P(Be),u,y,I),N.el=ce.el,te===null&&$u(u,ce.el),D&&Te(D,y),(ne=N.props&&N.props.onVnodeUpdated)&&Te(()=>Ye(ne,F,N,K),y)}else{let N;const{el:O,props:D}=h,{bm:F,m:K,parent:te}=u,ne=Hr(h);if($t(u,!1),F&&Vr(F),!ne&&(N=D&&D.onVnodeBeforeMount)&&Ye(N,te,h),$t(u,!0),O&&V){const ce=()=>{u.subTree=Os(u),V(O,u.subTree,u,y,null)};ne?h.type.__asyncLoader().then(()=>!u.isUnmounted&&ce()):ce()}else{const ce=u.subTree=Os(u);C(null,ce,m,v,u,y,I),h.el=ce.el}if(K&&Te(K,y),!ne&&(N=D&&D.onVnodeMounted)){const ce=h;Te(()=>Ye(N,te,ce),y)}(h.shapeFlag&256||te&&Hr(te.vnode)&&te.vnode.shapeFlag&256)&&u.a&&Te(u.a,y),u.isMounted=!0,h=m=v=null}},E=u.effect=new Ei(w,()=>ki(b),u.scope),b=u.update=()=>E.run();b.id=u.uid,$t(u,!0),b()},ee=(u,h,m)=>{h.component=u;const v=u.vnode.props;u.vnode=h,u.next=null,dd(u,h.props,v,m),pd(u,h.children,m),Dn(),fo(),Ln()},Ae=(u,h,m,v,y,I,T,w,E=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,O=h.children,{patchFlag:D,shapeFlag:F}=h;if(D>0){if(D&128){it(b,O,m,v,y,I,T,w,E);return}else if(D&256){cn(b,O,m,v,y,I,T,w,E);return}}F&8?(N&16&&S(b,y,I),O!==b&&d(m,O)):N&16?F&16?it(b,O,m,v,y,I,T,w,E):S(b,y,I,!0):(N&8&&d(m,""),F&16&&Se(O,m,v,y,I,T,w,E))},cn=(u,h,m,v,y,I,T,w,E)=>{u=u||pn,h=h||pn;const b=u.length,N=h.length,O=Math.min(b,N);let D;for(D=0;D<O;D++){const F=h[D]=E?Tt(h[D]):Xe(h[D]);C(u[D],F,m,null,y,I,T,w,E)}b>N?S(u,y,I,!0,!1,O):Se(h,m,v,y,I,T,w,E,O)},it=(u,h,m,v,y,I,T,w,E)=>{let b=0;const N=h.length;let O=u.length-1,D=N-1;for(;b<=O&&b<=D;){const F=u[b],K=h[b]=E?Tt(h[b]):Xe(h[b]);if($n(F,K))C(F,K,m,null,y,I,T,w,E);else break;b++}for(;b<=O&&b<=D;){const F=u[O],K=h[D]=E?Tt(h[D]):Xe(h[D]);if($n(F,K))C(F,K,m,null,y,I,T,w,E);else break;O--,D--}if(b>O){if(b<=D){const F=D+1,K=F<N?h[F].el:v;for(;b<=D;)C(null,h[b]=E?Tt(h[b]):Xe(h[b]),m,K,y,I,T,w,E),b++}}else if(b>D)for(;b<=O;)De(u[b],y,I,!0),b++;else{const F=b,K=b,te=new Map;for(b=K;b<=D;b++){const Re=h[b]=E?Tt(h[b]):Xe(h[b]);Re.key!=null&&te.set(Re.key,b)}let ne,ce=0;const Be=D-K+1;let ln=!1,Zi=0;const Vn=new Array(Be);for(b=0;b<Be;b++)Vn[b]=0;for(b=F;b<=O;b++){const Re=u[b];if(ce>=Be){De(Re,y,I,!0);continue}let Je;if(Re.key!=null)Je=te.get(Re.key);else for(ne=K;ne<=D;ne++)if(Vn[ne-K]===0&&$n(Re,h[ne])){Je=ne;break}Je===void 0?De(Re,y,I,!0):(Vn[Je-K]=b+1,Je>=Zi?Zi=Je:ln=!0,C(Re,h[Je],m,null,y,I,T,w,E),ce++)}const eo=ln?vd(Vn):pn;for(ne=eo.length-1,b=Be-1;b>=0;b--){const Re=K+b,Je=h[Re],to=Re+1<N?h[Re+1].el:v;Vn[b]===0?C(null,Je,m,to,y,I,T,w,E):ln&&(ne<0||b!==eo[ne]?Ge(Je,m,to,2):ne--)}}},Ge=(u,h,m,v,y=null)=>{const{el:I,type:T,transition:w,children:E,shapeFlag:b}=u;if(b&6){Ge(u.component.subTree,h,m,v);return}if(b&128){u.suspense.move(h,m,v);return}if(b&64){T.move(u,h,m,ie);return}if(T===fe){r(I,h,m);for(let O=0;O<E.length;O++)Ge(E[O],h,m,v);r(u.anchor,h,m);return}if(T===Wr){G(u,h,m);return}if(v!==2&&b&1&&w)if(v===0)w.beforeEnter(I),r(I,h,m),Te(()=>w.enter(I),y);else{const{leave:O,delayLeave:D,afterLeave:F}=w,K=()=>r(I,h,m),te=()=>{O(I,()=>{K(),F&&F()})};D?D(I,K,te):te()}else r(I,h,m)},De=(u,h,m,v=!1,y=!1)=>{const{type:I,props:T,ref:w,children:E,dynamicChildren:b,shapeFlag:N,patchFlag:O,dirs:D}=u;if(w!=null&&Qs(w,null,m,u,!0),N&256){h.ctx.deactivate(u);return}const F=N&1&&D,K=!Hr(u);let te;if(K&&(te=T&&T.onVnodeBeforeUnmount)&&Ye(te,h,u),N&6)k(u.component,m,v);else{if(N&128){u.suspense.unmount(m,v);return}F&&Vt(u,null,h,"beforeUnmount"),N&64?u.type.remove(u,h,m,y,ie,v):b&&(I!==fe||O>0&&O&64)?S(b,h,m,!1,!0):(I===fe&&O&384||!y&&N&16)&&S(E,h,m),v&&Bn(u)}(K&&(te=T&&T.onVnodeUnmounted)||F)&&Te(()=>{te&&Ye(te,h,u),F&&Vt(u,null,h,"unmounted")},m)},Bn=u=>{const{type:h,el:m,anchor:v,transition:y}=u;if(h===fe){g(m,v);return}if(h===Wr){pe(u);return}const I=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:w}=y,E=()=>T(m,I);w?w(u.el,I,E):E()}else I()},g=(u,h)=>{let m;for(;u!==h;)m=p(u),s(u),u=m;s(h)},k=(u,h,m)=>{const{bum:v,scope:y,update:I,subTree:T,um:w}=u;v&&Vr(v),y.stop(),I&&(I.active=!1,De(T,u,h,m)),w&&Te(w,h),Te(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},S=(u,h,m,v=!1,y=!1,I=0)=>{for(let T=I;T<u.length;T++)De(u[T],h,m,v,y)},P=u=>u.shapeFlag&6?P(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Y=(u,h,m)=>{u==null?h._vnode&&De(h._vnode,null,null,!0):C(h._vnode||null,u,h,null,null,null,m),fo(),ac(),h._vnode=u},ie={p:C,um:De,m:Ge,r:Bn,mt:an,mc:Se,pc:Ae,pbc:st,n:P,o:t};let j,V;return e&&([j,V]=e(ie)),{render:Y,hydrate:j,createApp:gd(Y,j)}}function $t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Tc(t,e,n=!1){const r=t.children,s=e.children;if(L(r)&&L(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tt(s[i]),a.el=o.el),n||Tc(o,a))}}function vd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const bd=t=>t.__isTeleport,fe=Symbol(void 0),Di=Symbol(void 0),Qt=Symbol(void 0),Wr=Symbol(void 0),Jn=[];let He=null;function Q(t=!1){Jn.push(He=t?null:[])}function wd(){Jn.pop(),He=Jn[Jn.length-1]||null}let ar=1;function wo(t){ar+=t}function Ac(t){return t.dynamicChildren=ar>0?He||pn:null,wd(),ar>0&&He&&He.push(t),t}function le(t,e,n,r,s,i){return Ac(M(t,e,n,r,s,i,!0))}function zr(t,e,n,r,s){return Ac(ge(t,e,n,r,s,!0))}function Xs(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const bs="__vInternal",Rc=({key:t})=>t!=null?t:null,qr=({ref:t,ref_key:e,ref_for:n})=>t!=null?he(t)||ue(t)||$(t)?{i:tt,r:t,k:e,f:!!n}:t:null;function M(t,e=null,n=null,r=0,s=null,i=t===fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rc(e),ref:e&&qr(e),scopeId:ys,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Li(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),ar>0&&!o&&He&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&He.push(c),c}const ge=Id;function Id(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===rd)&&(t=Qt),Xs(t)){const a=En(t,e,!0);return n&&Li(a,n),ar>0&&!i&&He&&(a.shapeFlag&6?He[He.indexOf(t)]=a:He.push(a)),a.patchFlag|=-2,a}if(Nd(t)&&(t=t.__vccOpts),e){e=Ed(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=_i(a)),ae(c)&&(Qa(c)&&!L(c)&&(c=Ee({},c)),e.style=gi(c))}const o=he(t)?1:ju(t)?128:bd(t)?64:ae(t)?4:$(t)?2:0;return M(t,e,n,r,s,o,i,!0)}function Ed(t){return t?Qa(t)||bs in t?Ee({},t):t:null}function En(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Sd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rc(a),ref:e&&e.ref?n&&s?L(s)?s.concat(qr(e)):[s,qr(e)]:qr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&En(t.ssContent),ssFallback:t.ssFallback&&En(t.ssFallback),el:t.el,anchor:t.anchor}}function ke(t=" ",e=0){return ge(Di,null,t,e)}function ky(t,e){const n=ge(Wr,null,t);return n.staticCount=e,n}function Ce(t="",e=!1){return e?(Q(),zr(Qt,null,t)):ge(Qt,null,t)}function Xe(t){return t==null||typeof t=="boolean"?ge(Qt):L(t)?ge(fe,null,t.slice()):typeof t=="object"?Tt(t):ge(Di,null,String(t))}function Tt(t){return t.el===null||t.memo?t:En(t)}function Li(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Li(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(bs in e)?e._ctx=tt:s===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),r&64?(n=16,e=[ke(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_i([e.class,r.class]));else if(s==="style")e.style=gi([e.style,r.style]);else if(hs(s)){const i=e[s],o=r[s];o&&i!==o&&!(L(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ye(t,e,n,r=null){ze(t,e,7,[n,r])}const Td=Sc();let Ad=0;function Rd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Td,i={uid:Ad++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bc(r,s),emitsOptions:lc(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uu.bind(null,i),t.ce&&t.ce(i),i}let ve=null;const Sn=t=>{ve=t,t.scope.on()},Jt=()=>{ve&&ve.scope.off(),ve=null};function Cc(t){return t.vnode.shapeFlag&4}let cr=!1;function Cd(t,e=!1){cr=e;const{props:n,children:r}=t.vnode,s=Cc(t);ud(t,n,s,e),hd(t,r);const i=s?Od(t,e):void 0;return cr=!1,i}function Od(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xa(new Proxy(t.ctx,sd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Pd(t):null;Sn(t),Dn();const i=Lt(r,t,0,[t.props,s]);if(Ln(),Jt(),xa(i)){if(i.then(Jt,Jt),e)return i.then(o=>{Io(t,o,e)}).catch(o=>{gs(o,t,0)});t.asyncDep=i}else Io(t,i,e)}else Oc(t,e)}function Io(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=nc(e)),Oc(t,n)}let Eo;function Oc(t,e,n){const r=t.type;if(!t.render){if(!e&&Eo&&!r.render){const s=r.template||Pi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ee(Ee({isCustomElement:i,delimiters:a},o),c);r.render=Eo(s,l)}}t.render=r.render||We}Sn(t),Dn(),id(t),Ln(),Jt()}function kd(t){return new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}})}function Pd(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=kd(t))},slots:t.slots,emit:t.emit,expose:e}}function ws(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nc(Xa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ns)return ns[n](t)}}))}function Nd(t){return $(t)&&"__vccOpts"in t}const xe=(t,e)=>Pu(t,e,cr);function kc(t,e,n){const r=arguments.length;return r===2?ae(e)&&!L(e)?Xs(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xs(n)&&(n=[n]),ge(t,e,n))}const Dd="3.2.39",Ld="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,So=zt&&zt.createElement("template"),Md={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?zt.createElementNS(Ld,t):zt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>zt.createTextNode(t),createComment:t=>zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{So.innerHTML=r?`<svg>${t}</svg>`:t;const a=So.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xd(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ud(t,e,n){const r=t.style,s=he(n);if(n&&!s){for(const i in n)Zs(r,i,n[i]);if(e&&!he(e))for(const i in e)n[i]==null&&Zs(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const To=/\s*!important$/;function Zs(t,e,n){if(L(n))n.forEach(r=>Zs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Fd(t,e);To.test(n)?t.setProperty(Nn(r),n.replace(To,""),"important"):t[r]=n}}const Ao=["Webkit","Moz","ms"],ks={};function Fd(t,e){const n=ks[e];if(n)return n;let r=wn(e);if(r!=="filter"&&r in t)return ks[e]=r;r=Ba(r);for(let s=0;s<Ao.length;s++){const i=Ao[s]+r;if(i in t)return ks[e]=i}return e}const Ro="http://www.w3.org/1999/xlink";function Bd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ro,e.slice(6,e.length)):t.setAttributeNS(Ro,e,n);else{const i=Vl(e);n==null||i&&!La(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Vd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=La(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Pc,$d]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ei=0;const jd=Promise.resolve(),Hd=()=>{ei=0},Wd=()=>ei||(jd.then(Hd),ei=Pc());function Ct(t,e,n,r){t.addEventListener(e,n,r)}function zd(t,e,n,r){t.removeEventListener(e,n,r)}function qd(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Kd(e);if(r){const l=i[e]=Gd(r,s);Ct(t,a,l,c)}else o&&(zd(t,a,o,c),i[e]=void 0)}}const Co=/(?:Once|Passive|Capture)$/;function Kd(t){let e;if(Co.test(t)){e={};let r;for(;r=t.match(Co);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nn(t.slice(2)),e]}function Gd(t,e){const n=r=>{const s=r.timeStamp||Pc();($d||s>=n.attached-1)&&ze(Jd(r,n.value),e,5,[r])};return n.value=t,n.attached=Wd(),n}function Jd(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Oo=/^on[a-z]/,Yd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?xd(t,r,s):e==="style"?Ud(t,n,r):hs(e)?vi(e)||qd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qd(t,e,r,s))?Vd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bd(t,e,r,s))};function Qd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Oo.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Oo.test(e)&&he(n)?!1:e in t}const Tn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>Vr(e,n):e};function Xd(t){t.target.composing=!0}function ko(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zd={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Tn(s);const i=r||s.props&&s.props.type==="number";Ct(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Zr(a)),t._assign(a)}),n&&Ct(t,"change",()=>{t.value=t.value.trim()}),e||(Ct(t,"compositionstart",Xd),Ct(t,"compositionend",ko),Ct(t,"change",ko))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Tn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Zr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},jn={deep:!0,created(t,e,n){t._assign=Tn(n),Ct(t,"change",()=>{const r=t._modelValue,s=lr(t),i=t.checked,o=t._assign;if(L(r)){const a=yi(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Pn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Nc(t,i))})},mounted:Po,beforeUpdate(t,e,n){t._assign=Tn(n),Po(t,e,n)}};function Po(t,{value:e,oldValue:n},r){t._modelValue=e,L(e)?t.checked=yi(e,r.props.value)>-1:Pn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=vr(e,Nc(t,!0)))}const Py={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Pn(e);Ct(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Zr(lr(o)):lr(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Tn(r)},mounted(t,{value:e}){No(t,e)},beforeUpdate(t,e,n){t._assign=Tn(n)},updated(t,{value:e}){No(t,e)}};function No(t,e){const n=t.multiple;if(!(n&&!L(e)&&!Pn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=lr(i);if(n)L(e)?i.selected=yi(e,o)>-1:i.selected=e.has(o);else if(vr(lr(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function lr(t){return"_value"in t?t._value:t.value}function Nc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ef=Ee({patchProp:Yd},Md);let Do;function tf(){return Do||(Do=_d(ef))}const nf=(...t)=>{const e=tf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rf(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rf(t){return he(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function sf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Ps(t,e){const n={};for(const r in e){const s=e[r];n[r]=qe(s)?s.map(t):t(s)}return n}const Yn=()=>{},qe=Array.isArray,of=/\/$/,af=t=>t.replace(of,"");function Ns(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=df(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function cf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&An(e.matched[r],n.matched[s])&&Dc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function An(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uf(t[n],e[n]))return!1;return!0}function uf(t,e){return qe(t)?Mo(t,e):qe(e)?Mo(e,t):t===e}function Mo(t,e){return qe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function df(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ur;(function(t){t.pop="pop",t.push="push"})(ur||(ur={}));var Qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qn||(Qn={}));function ff(t){if(!t)if(hn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),af(t)}const hf=/^[^#]+#/;function pf(t,e){return t.replace(hf,"#")+e}function mf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Is=()=>({left:window.pageXOffset,top:window.pageYOffset});function gf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xo(t,e){return(history.state?history.state.position-e:-1)+t}const ti=new Map;function _f(t,e){ti.set(t,e)}function yf(t){const e=ti.get(t);return ti.delete(t),e}let vf=()=>location.protocol+"//"+location.host;function Lc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Lo(c,"")}return Lo(n,t)+r+s}function bf(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=Lc(t,location),A=n.value,B=e.value;let C=0;if(p){if(n.value=_,e.value=p,o&&o===A){o=null;return}C=B?p.position-B.position:0}else r(_);s.forEach(R=>{R(n.value,A,{delta:C,type:ur.pop,direction:C?C>0?Qn.forward:Qn.back:Qn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return i.push(_),_}function d(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Is()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:l,destroy:f}}function Uo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Is():null}}function wf(t){const{history:e,location:n}=window,r={value:Lc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,d){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:vf()+t+c;try{e[d?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[d?"replace":"assign"](p)}}function o(c,l){const d=X({},e.state,Uo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,d,!0),r.value=c}function a(c,l){const d=X({},s.value,e.state,{forward:c,scroll:Is()});i(d.current,d,!0);const f=X({},Uo(r.value,c,null),{position:d.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function If(t){t=ff(t);const e=wf(t),n=bf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:pf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ef(t){return typeof t=="string"||t&&typeof t=="object"}function Mc(t){return typeof t=="string"||typeof t=="symbol"}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xc=Symbol("");var Fo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fo||(Fo={}));function Rn(t,e){return X(new Error,{type:t,[xc]:!0},e)}function ot(t,e){return t instanceof Error&&xc in t&&(e==null||!!(t.type&e))}const Bo="[^/]+?",Sf={sensitive:!1,strict:!1,start:!0,end:!0},Tf=/[.+*?^${}()[\]/\\]/g;function Af(t,e){const n=X({},Sf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const d=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Tf,"\\$&"),_+=40;else if(p.type===1){const{value:A,repeatable:B,optional:C,regexp:R}=p;i.push({name:A,repeatable:B,optional:C});const U=R||Bo;if(U!==Bo){_+=10;try{new RegExp(`(${U})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${A}" (${U}): `+G.message)}}let W=B?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||(W=C&&l.length<2?`(?:/${W})`:"/"+W),C&&(W+="?"),s+=W,_+=20,C&&(_+=-8),B&&(_+=-20),U===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const d=l.match(o),f={};if(!d)return null;for(let p=1;p<d.length;p++){const _=d[p]||"",A=i[p-1];f[A.name]=_&&A.repeatable?_.split("/"):_}return f}function c(l){let d="",f=!1;for(const p of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const _ of p)if(_.type===0)d+=_.value;else if(_.type===1){const{value:A,repeatable:B,optional:C}=_,R=A in l?l[A]:"";if(qe(R)&&!B)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const U=qe(R)?R.join("/"):R;if(!U)if(C)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${A}"`);d+=U}}return d||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Rf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Rf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vo(r))return 1;if(Vo(s))return-1}return s.length-r.length}function Vo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Of={type:0,value:""},kf=/[a-zA-Z0-9_]/;function Pf(t){if(!t)return[[]];if(t==="/")return[[Of]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",d="";function f(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:kf.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Nf(t,e,n){const r=Af(Pf(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Df(t,e){const n=[],r=new Map;e=Ho({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,f,p){const _=!p,A=Lf(d);A.aliasOf=p&&p.record;const B=Ho(e,d),C=[A];if("alias"in d){const W=typeof d.alias=="string"?[d.alias]:d.alias;for(const G of W)C.push(X({},A,{components:p?p.record.components:A.components,path:G,aliasOf:p?p.record:A}))}let R,U;for(const W of C){const{path:G}=W;if(f&&G[0]!=="/"){const pe=f.record.path,me=pe[pe.length-1]==="/"?"":"/";W.path=f.record.path+(G&&me+G)}if(R=Nf(W,f,B),p?p.alias.push(R):(U=U||R,U!==R&&U.alias.push(R),_&&d.name&&!jo(R)&&o(d.name)),A.children){const pe=A.children;for(let me=0;me<pe.length;me++)i(pe[me],R,p&&p.children[me])}p=p||R,c(R)}return U?()=>{o(U)}:Yn}function o(d){if(Mc(d)){const f=r.get(d);f&&(r.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){let f=0;for(;f<n.length&&Cf(d,n[f])>=0&&(d.record.path!==n[f].record.path||!Uc(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!jo(d)&&r.set(d.record.name,d)}function l(d,f){let p,_={},A,B;if("name"in d&&d.name){if(p=r.get(d.name),!p)throw Rn(1,{location:d});B=p.record.name,_=X($o(f.params,p.keys.filter(U=>!U.optional).map(U=>U.name)),d.params&&$o(d.params,p.keys.map(U=>U.name))),A=p.stringify(_)}else if("path"in d)A=d.path,p=n.find(U=>U.re.test(A)),p&&(_=p.parse(A),B=p.record.name);else{if(p=f.name?r.get(f.name):n.find(U=>U.re.test(f.path)),!p)throw Rn(1,{location:d,currentLocation:f});B=p.record.name,_=X({},f.params,d.params),A=p.stringify(_)}const C=[];let R=p;for(;R;)C.unshift(R.record),R=R.parent;return{name:B,path:A,params:_,matched:C,meta:xf(C)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function $o(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Mf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Mf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function jo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xf(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Ho(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Uc(t,e){return e.children.some(n=>n===t||Uc(t,n))}const Fc=/#/g,Uf=/&/g,Ff=/\//g,Bf=/=/g,Vf=/\?/g,Bc=/\+/g,$f=/%5B/g,jf=/%5D/g,Vc=/%5E/g,Hf=/%60/g,$c=/%7B/g,Wf=/%7C/g,jc=/%7D/g,zf=/%20/g;function Mi(t){return encodeURI(""+t).replace(Wf,"|").replace($f,"[").replace(jf,"]")}function qf(t){return Mi(t).replace($c,"{").replace(jc,"}").replace(Vc,"^")}function ni(t){return Mi(t).replace(Bc,"%2B").replace(zf,"+").replace(Fc,"%23").replace(Uf,"%26").replace(Hf,"`").replace($c,"{").replace(jc,"}").replace(Vc,"^")}function Kf(t){return ni(t).replace(Bf,"%3D")}function Gf(t){return Mi(t).replace(Fc,"%23").replace(Vf,"%3F")}function Jf(t){return t==null?"":Gf(t).replace(Ff,"%2F")}function ss(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Yf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Bc," "),o=i.indexOf("="),a=ss(o<0?i:i.slice(0,o)),c=o<0?null:ss(i.slice(o+1));if(a in e){let l=e[a];qe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Wo(t){let e="";for(let n in t){const r=t[n];if(n=Kf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&ni(i)):[r&&ni(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Qf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Xf=Symbol(""),zo=Symbol(""),Es=Symbol(""),Hc=Symbol(""),ri=Symbol("");function Hn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function At(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Rn(4,{from:n,to:e})):f instanceof Error?a(f):Ef(f)?a(Rn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let d=Promise.resolve(l);t.length<3&&(d=d.then(c)),d.catch(f=>a(f))})}function Ds(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Zf(a)){const l=(a.__vccOpts||a)[e];l&&s.push(At(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const d=sf(l)?l.default:l;i.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&At(p,n,r,i,o)()}))}}return s}function Zf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qo(t){const e=ft(Es),n=ft(Hc),r=xe(()=>e.resolve(Me(t.to))),s=xe(()=>{const{matched:c}=r.value,{length:l}=c,d=c[l-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(An.bind(null,d));if(p>-1)return p;const _=Ko(c[l-2]);return l>1&&Ko(d)===_&&f[f.length-1].path!==_?f.findIndex(An.bind(null,c[l-2])):p}),i=xe(()=>s.value>-1&&nh(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Dc(n.params,r.value.params));function a(c={}){return th(c)?e[Me(t.replace)?"replace":"push"](Me(t.to)).catch(Yn):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const eh=pc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qo,setup(t,{slots:e}){const n=Mn(qo(t)),{options:r}=ft(Es),s=xe(()=>({[Go(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Go(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:kc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qn=eh;function th(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ko(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Go=(t,e,n)=>t!=null?t:e!=null?e:n,rh=pc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ft(ri),s=xe(()=>t.route||r.value),i=ft(zo,0),o=xe(()=>{let l=Me(i);const{matched:d}=s.value;let f;for(;(f=d[l])&&!f.components;)l++;return l}),a=xe(()=>s.value.matched[o.value]);$r(zo,xe(()=>o.value+1)),$r(Xf,a),$r(ri,s);const c=Au();return jr(()=>[c.value,a.value,t.name],([l,d,f],[p,_,A])=>{d&&(d.instances[f]=l,_&&_!==d&&l&&l===p&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),l&&d&&(!_||!An(d,_)||!p)&&(d.enterCallbacks[f]||[]).forEach(B=>B(l))},{flush:"post"}),()=>{const l=s.value,d=t.name,f=a.value,p=f&&f.components[d];if(!p)return Jo(n.default,{Component:p,route:l});const _=f.props[d],A=_?_===!0?l.params:typeof _=="function"?_(l):_:null,C=kc(p,X({},A,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return Jo(n.default,{Component:C,route:l})||C}}});function Jo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wc=rh;function sh(t){const e=Df(t.routes,t),n=t.parseQuery||Yf,r=t.stringifyQuery||Wo,s=t.history,i=Hn(),o=Hn(),a=Hn(),c=Ru(Et);let l=Et;hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ps.bind(null,g=>""+g),f=Ps.bind(null,Jf),p=Ps.bind(null,ss);function _(g,k){let S,P;return Mc(g)?(S=e.getRecordMatcher(g),P=k):P=g,e.addRoute(P,S)}function A(g){const k=e.getRecordMatcher(g);k&&e.removeRoute(k)}function B(){return e.getRoutes().map(g=>g.record)}function C(g){return!!e.getRecordMatcher(g)}function R(g,k){if(k=X({},k||c.value),typeof g=="string"){const V=Ns(n,g,k.path),u=e.resolve({path:V.path},k),h=s.createHref(V.fullPath);return X(V,u,{params:p(u.params),hash:ss(V.hash),redirectedFrom:void 0,href:h})}let S;if("path"in g)S=X({},g,{path:Ns(n,g.path,k.path).path});else{const V=X({},g.params);for(const u in V)V[u]==null&&delete V[u];S=X({},g,{params:f(g.params)}),k.params=f(k.params)}const P=e.resolve(S,k),Y=g.hash||"";P.params=d(p(P.params));const ie=cf(r,X({},g,{hash:qf(Y),path:P.path})),j=s.createHref(ie);return X({fullPath:ie,hash:Y,query:r===Wo?Qf(g.query):g.query||{}},P,{redirectedFrom:void 0,href:j})}function U(g){return typeof g=="string"?Ns(n,g,c.value.path):X({},g)}function W(g,k){if(l!==g)return Rn(8,{from:k,to:g})}function G(g){return Ne(g)}function pe(g){return G(X(U(g),{replace:!0}))}function me(g){const k=g.matched[g.matched.length-1];if(k&&k.redirect){const{redirect:S}=k;let P=typeof S=="function"?S(g):S;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=U(P):{path:P},P.params={}),X({query:g.query,hash:g.hash,params:"path"in P?{}:g.params},P)}}function Ne(g,k){const S=l=R(g),P=c.value,Y=g.state,ie=g.force,j=g.replace===!0,V=me(S);if(V)return Ne(X(U(V),{state:typeof V=="object"?X({},Y,V.state):Y,force:ie,replace:j}),k||S);const u=S;u.redirectedFrom=k;let h;return!ie&&lf(r,P,S)&&(h=Rn(16,{to:u,from:P}),cn(P,P,!0,!1)),(h?Promise.resolve(h):Se(u,P)).catch(m=>ot(m)?ot(m,2)?m:Ae(m):se(m,u,P)).then(m=>{if(m){if(ot(m,2))return Ne(X({replace:j},U(m.to),{state:typeof m.to=="object"?X({},Y,m.to.state):Y,force:ie}),k||u)}else m=st(u,P,!0,j,Y);return Ke(u,P,m),m})}function bt(g,k){const S=W(g,k);return S?Promise.reject(S):Promise.resolve()}function Se(g,k){let S;const[P,Y,ie]=ih(g,k);S=Ds(P.reverse(),"beforeRouteLeave",g,k);for(const V of P)V.leaveGuards.forEach(u=>{S.push(At(u,g,k))});const j=bt.bind(null,g,k);return S.push(j),dn(S).then(()=>{S=[];for(const V of i.list())S.push(At(V,g,k));return S.push(j),dn(S)}).then(()=>{S=Ds(Y,"beforeRouteUpdate",g,k);for(const V of Y)V.updateGuards.forEach(u=>{S.push(At(u,g,k))});return S.push(j),dn(S)}).then(()=>{S=[];for(const V of g.matched)if(V.beforeEnter&&!k.matched.includes(V))if(qe(V.beforeEnter))for(const u of V.beforeEnter)S.push(At(u,g,k));else S.push(At(V.beforeEnter,g,k));return S.push(j),dn(S)}).then(()=>(g.matched.forEach(V=>V.enterCallbacks={}),S=Ds(ie,"beforeRouteEnter",g,k),S.push(j),dn(S))).then(()=>{S=[];for(const V of o.list())S.push(At(V,g,k));return S.push(j),dn(S)}).catch(V=>ot(V,8)?V:Promise.reject(V))}function Ke(g,k,S){for(const P of a.list())P(g,k,S)}function st(g,k,S,P,Y){const ie=W(g,k);if(ie)return ie;const j=k===Et,V=hn?history.state:{};S&&(P||j?s.replace(g.fullPath,X({scroll:j&&V&&V.scroll},Y)):s.push(g.fullPath,Y)),c.value=g,cn(g,k,S,j),Ae()}let Fe;function sn(){Fe||(Fe=s.listen((g,k,S)=>{if(!Bn.listening)return;const P=R(g),Y=me(P);if(Y){Ne(X(Y,{replace:!0}),P).catch(Yn);return}l=P;const ie=c.value;hn&&_f(xo(ie.fullPath,S.delta),Is()),Se(P,ie).catch(j=>ot(j,12)?j:ot(j,2)?(Ne(j.to,P).then(V=>{ot(V,20)&&!S.delta&&S.type===ur.pop&&s.go(-1,!1)}).catch(Yn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),se(j,P,ie))).then(j=>{j=j||st(P,ie,!1),j&&(S.delta&&!ot(j,8)?s.go(-S.delta,!1):S.type===ur.pop&&ot(j,20)&&s.go(-1,!1)),Ke(P,ie,j)}).catch(Yn)}))}let on=Hn(),an=Hn(),de;function se(g,k,S){Ae(g);const P=an.list();return P.length?P.forEach(Y=>Y(g,k,S)):console.error(g),Promise.reject(g)}function ee(){return de&&c.value!==Et?Promise.resolve():new Promise((g,k)=>{on.add([g,k])})}function Ae(g){return de||(de=!g,sn(),on.list().forEach(([k,S])=>g?S(g):k()),on.reset()),g}function cn(g,k,S,P){const{scrollBehavior:Y}=t;if(!hn||!Y)return Promise.resolve();const ie=!S&&yf(xo(g.fullPath,0))||(P||!S)&&history.state&&history.state.scroll||null;return ic().then(()=>Y(g,k,ie)).then(j=>j&&gf(j)).catch(j=>se(j,g,k))}const it=g=>s.go(g);let Ge;const De=new Set,Bn={currentRoute:c,listening:!0,addRoute:_,removeRoute:A,hasRoute:C,getRoutes:B,resolve:R,options:t,push:G,replace:pe,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:an.add,isReady:ee,install(g){const k=this;g.component("RouterLink",qn),g.component("RouterView",Wc),g.config.globalProperties.$router=k,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>Me(c)}),hn&&!Ge&&c.value===Et&&(Ge=!0,G(s.location).catch(Y=>{}));const S={};for(const Y in Et)S[Y]=xe(()=>c.value[Y]);g.provide(Es,k),g.provide(Hc,Mn(S)),g.provide(ri,c);const P=g.unmount;De.add(g),g.unmount=function(){De.delete(g),De.size<1&&(l=Et,Fe&&Fe(),Fe=null,c.value=Et,Ge=!1,de=!1),P()}}};return Bn}function dn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ih(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>An(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>An(l,c))||s.push(c))}return[n,r,s]}function Ny(){return ft(Es)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[d],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),f!==64){const A=l<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ah=function(t){const e=zc(t);return qc.encodeByteArray(e,!0)},Kc=function(t){return ah(t).replace(/\./g,"")},ch=function(t){try{return qc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function dh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hh(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ph(){return typeof indexedDB=="object"}function mh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="FirebaseError";class vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gh,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_h(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vt(s,a,r)}}function _h(t,e){return t.replace(yh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yh=/\{\$([^}]+)}/g;function vh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yo(i)&&Yo(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bh(t,e){const n=new wh(t,e);return n.subscribe.bind(n)}class wh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ih(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ih(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ls(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Th(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sh(t){return t===Ht?void 0:t}function Th(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Eh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Rh={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Ch=Z.INFO,Oh={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},kh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Oh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xi{constructor(e){this.name=e,this._logLevel=Ch,this._logHandler=kh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Ph=(t,e)=>e.some(n=>t instanceof n);let Qo,Xo;function Nh(){return Qo||(Qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dh(){return Xo||(Xo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gc=new WeakMap,si=new WeakMap,Jc=new WeakMap,Ms=new WeakMap,Ui=new WeakMap;function Lh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gc.set(n,t)}).catch(()=>{}),Ui.set(e,t),e}function Mh(t){if(si.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});si.set(t,e)}let ii={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return si.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xh(t){ii=t(ii)}function Uh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xs(this),e,...n);return Jc.set(r,e.sort?e.sort():[e]),Mt(r)}:Dh().includes(t)?function(...e){return t.apply(xs(this),e),Mt(Gc.get(this))}:function(...e){return Mt(t.apply(xs(this),e))}}function Fh(t){return typeof t=="function"?Uh(t):(t instanceof IDBTransaction&&Mh(t),Ph(t,Nh())?new Proxy(t,ii):t)}function Mt(t){if(t instanceof IDBRequest)return Lh(t);if(Ms.has(t))return Ms.get(t);const e=Fh(t);return e!==t&&(Ms.set(t,e),Ui.set(e,t)),e}const xs=t=>Ui.get(t);function Bh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Vh=["get","getKey","getAll","getAllKeys","count"],$h=["put","add","delete","clear"],Us=new Map;function Zo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Us.get(e))return Us.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$h.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Us.set(e,i),i}xh(t=>({...t,get:(e,n,r)=>Zo(e,n)||t.get(e,n,r),has:(e,n)=>!!Zo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",ea="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new xi("@firebase/app"),Wh="@firebase/app-compat",zh="@firebase/analytics-compat",qh="@firebase/analytics",Kh="@firebase/app-check-compat",Gh="@firebase/app-check",Jh="@firebase/auth",Yh="@firebase/auth-compat",Qh="@firebase/database",Xh="@firebase/database-compat",Zh="@firebase/functions",ep="@firebase/functions-compat",tp="@firebase/installations",np="@firebase/installations-compat",rp="@firebase/messaging",sp="@firebase/messaging-compat",ip="@firebase/performance",op="@firebase/performance-compat",ap="@firebase/remote-config",cp="@firebase/remote-config-compat",lp="@firebase/storage",up="@firebase/storage-compat",dp="@firebase/firestore",fp="@firebase/firestore-compat",hp="firebase",pp="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="[DEFAULT]",mp={[oi]:"fire-core",[Wh]:"fire-core-compat",[qh]:"fire-analytics",[zh]:"fire-analytics-compat",[Gh]:"fire-app-check",[Kh]:"fire-app-check-compat",[Jh]:"fire-auth",[Yh]:"fire-auth-compat",[Qh]:"fire-rtdb",[Xh]:"fire-rtdb-compat",[Zh]:"fire-fn",[ep]:"fire-fn-compat",[tp]:"fire-iid",[np]:"fire-iid-compat",[rp]:"fire-fcm",[sp]:"fire-fcm-compat",[ip]:"fire-perf",[op]:"fire-perf-compat",[ap]:"fire-rc",[cp]:"fire-rc-compat",[lp]:"fire-gcs",[up]:"fire-gcs-compat",[dp]:"fire-fst",[fp]:"fire-fst-compat","fire-js":"fire-js",[hp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map,ai=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(ai.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;ai.set(e,t);for(const n of os.values())gp(n,t);return!0}function Fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},en=new wr("app","Firebase",_p);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=pp;function vp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Yc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw en.create("bad-app-name",{appName:String(r)});const s=os.get(r);if(s){if(is(t,s.options)&&is(n,s.config))return s;throw en.create("duplicate-app",{appName:r})}const i=new Ah(r);for(const a of ai.values())i.addComponent(a);const o=new yp(t,n,i);return os.set(r,o),o}function Qc(t=Yc){const e=os.get(t);if(!e)throw en.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let s=(r=mp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}Cn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="firebase-heartbeat-database",wp=1,dr="firebase-heartbeat-store";let Fs=null;function Xc(){return Fs||(Fs=Bh(bp,wp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dr)}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),Fs}async function Ip(t){var e;try{return(await Xc()).transaction(dr).objectStore(dr).get(Zc(t))}catch(n){if(n instanceof vt)Zt.warn(n.message);else{const r=en.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Zt.warn(r.message)}}}async function ta(t,e){var n;try{const s=(await Xc()).transaction(dr,"readwrite");return await s.objectStore(dr).put(e,Zc(t)),s.done}catch(r){if(r instanceof vt)Zt.warn(r.message);else{const s=en.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Zt.warn(s.message)}}}function Zc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=1024,Sp=30*24*60*60*1e3;class Tp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=na();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Sp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=na(),{heartbeatsToSend:n,unsentEntries:r}=Ap(this._heartbeatsCache.heartbeats),s=Kc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function na(){return new Date().toISOString().substring(0,10)}function Ap(t,e=Ep){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ra(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ra(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ph()?mh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ip(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ta(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ta(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ra(t){return Kc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){Cn(new Xt("platform-logger",e=>new jh(e),"PRIVATE")),Cn(new Xt("heartbeat",e=>new Tp(e),"PRIVATE")),xt(oi,ea,t),xt(oi,ea,"esm2017"),xt("fire-js","")}Cp("");function Bi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function el(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Op=el,tl=new wr("auth","Firebase",el());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new xi("@firebase/auth");function Kr(t,...e){sa.logLevel<=Z.ERROR&&sa.error(`Auth (${Er}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw Vi(t,...e)}function nt(t,...e){return Vi(t,...e)}function nl(t,e,n){const r=Object.assign(Object.assign({},Op()),{[e]:n});return new wr("auth","Firebase",r).create(e,{appName:t.name})}function kp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ue(t,"argument-error"),nl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tl.create(t,...e)}function x(t,e,...n){if(!t)throw Vi(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kr(e),new Error(e)}function mt(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map;function ut(t){mt(t instanceof Function,"Expected a class definition");let e=ia.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ia.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t,e){const n=Fi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(is(i,e!=null?e:{}))return s;Ue(s,"already-initialized")}return n.initialize({options:e})}function Np(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dp(){return oa()==="http:"||oa()==="https:"}function oa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dp()||dh()||"connection"in navigator)?navigator.onLine:!0}function Mp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=uh()||fh()}get(){return Lp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new Sr(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ar(t,e,n,r,s={}){return sl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ir(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),rl.fetch()(il(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function sl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xp),e);try{const s=new Fp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xr(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw nl(t,d,l);Ue(t,d)}}catch(s){if(s instanceof vt)throw s;Ue(t,"network-request-failed")}}async function Rr(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&Ue(t,"multi-factor-auth-required",{_serverResponse:i}),i}function il(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$i(t.config,s):`${t.config.apiScheme}://${s}`}class Fp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Up.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function Vp(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $p(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=ji(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xn(Bs(s.auth_time)),issuedAtTime:Xn(Bs(s.iat)),expirationTime:Xn(Bs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bs(t){return Number(t)*1e3}function ji(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const i=ch(r);return i?JSON.parse(i):(Kr("Failed to decode base64 JWT payload"),null)}catch(i){return Kr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function jp(t){const e=ji(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vt&&Hp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t){var e;const n=t.auth,r=await t.getIdToken(),s=await fr(t,Vp(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kp(i.providerUserInfo):[],a=qp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ol(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function zp(t){const e=Ft(t);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kp(t){return t.map(e=>{var{providerId:n}=e,r=Bi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t,e){const n=await sl(t,{},async()=>{const r=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=il(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hr;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Bi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ol(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $p(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,Bp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,B=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:W,emailVerified:G,isAnonymous:pe,providerData:me,stsTokenManager:Ne}=n;x(W&&Ne,e,"internal-error");const bt=hr.fromJSON(this.name,Ne);x(typeof W=="string",e,"internal-error"),St(f,e.name),St(p,e.name),x(typeof G=="boolean",e,"internal-error"),x(typeof pe=="boolean",e,"internal-error"),St(_,e.name),St(A,e.name),St(B,e.name),St(C,e.name),St(R,e.name),St(U,e.name);const Se=new Yt({uid:W,auth:e,email:p,emailVerified:G,displayName:f,isAnonymous:pe,photoURL:A,phoneNumber:_,tenantId:B,stsTokenManager:bt,createdAt:R,lastLoginAt:U});return me&&Array.isArray(me)&&(Se.providerData=me.map(Ke=>Object.assign({},Ke))),C&&(Se._redirectEventId=C),Se}static async _fromIdTokenResponse(e,n,r=!1){const s=new hr;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await as(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}al.type="NONE";const aa=al;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e,n){return`firebase:${t}:${e}:${n}`}class yn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yn(ut(aa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ut(aa);const o=Gr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const d=await l._get(o);if(d){const f=Yt._fromJSON(e,d);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new yn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ul(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fl(e))return"Blackberry";if(hl(e))return"Webos";if(Hi(e))return"Safari";if((e.includes("chrome/")||ll(e))&&!e.includes("edge/"))return"Chrome";if(dl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cl(t=be()){return/firefox\//i.test(t)}function Hi(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ll(t=be()){return/crios\//i.test(t)}function ul(t=be()){return/iemobile/i.test(t)}function dl(t=be()){return/android/i.test(t)}function fl(t=be()){return/blackberry/i.test(t)}function hl(t=be()){return/webos/i.test(t)}function Ss(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jp(t=be()){var e;return Ss(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yp(){return hh()&&document.documentMode===10}function pl(t=be()){return Ss(t)||dl(t)||hl(t)||fl(t)||/windows phone/i.test(t)||ul(t)}function Qp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t,e=[]){let n;switch(t){case"Browser":n=ca(be());break;case"Worker":n=`${ca(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Er}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new la(this),this.idTokenSubscription=new la(this),this.beforeStateQueue=new Xp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await yn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await as(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ft(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await yn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ml(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Cr(t){return Ft(t)}class la{constructor(e){this.auth=e,this.observer=null,this.addObserver=bh(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function em(t,e){return Ar(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e){return Rr(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function rm(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Wi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new pr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nm(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return em(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t,e){return Rr(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="http://localhost";class tn extends Wi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Bi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}buildRequest(){const e={requestUri:sm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ir(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function om(t){const e=Kn(Gn(t)).link,n=e?Kn(Gn(e)).deep_link_id:null,r=Kn(Gn(t)).deep_link_id;return(r?Kn(Gn(r)).link:null)||r||n||e||t}class zi{constructor(e){var n,r,s,i,o,a;const c=Kn(Gn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,f=im((s=c.mode)!==null&&s!==void 0?s:null);x(l&&d&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=om(e);try{return new zi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,n){return pr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zi.parseLink(n);return x(r,"argument-error"),pr._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends qi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Or{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Or{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Or{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e){return Rr(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=ua(r);return new nn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ua(r);return new nn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ua(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends vt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cs(e,n,r,s)}}function gl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(t,i,e,r):i})}async function cm(t,e,n=!1){const r=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await fr(t,gl(s,i,e,t),n);x(o.idToken,s,"internal-error");const a=ji(o.idToken);x(a,s,"internal-error");const{sub:c}=a;return x(t.uid===c,s,"user-mismatch"),nn._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ue(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t,e,n=!1){const r="signIn",s=await gl(t,r,e),i=await nn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function um(t,e){return _l(Cr(t),e)}async function Dy(t,e,n){const r=Cr(t),s=await am(r,{returnSecureToken:!0,email:e,password:n}),i=await nn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Ly(t,e,n){return um(Ft(t),xn.credential(e,n))}function dm(t,e,n,r){return Ft(t).onAuthStateChanged(e,n,r)}function fm(t){return Ft(t).signOut()}const ls="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(){const t=be();return Hi(t)||Ss(t)}const pm=1e3,mm=10;class vl extends yl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hm()&&Qp(),this.fallbackToPolling=pl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vl.type="LOCAL";const gm=vl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends yl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bl.type="SESSION";const wl=bl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ts(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await _m(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ki("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function vm(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function bm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Im(){return Il()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="firebaseLocalStorageDb",Em=1,us="firebaseLocalStorage",Sl="fbase_key";class kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function As(t,e){return t.transaction([us],e?"readwrite":"readonly").objectStore(us)}function Sm(){const t=indexedDB.deleteDatabase(El);return new kr(t).toPromise()}function li(){const t=indexedDB.open(El,Em);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(us,{keyPath:Sl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await Sm(),e(await li()))})})}async function da(t,e,n){const r=As(t,!0).put({[Sl]:e,value:n});return new kr(r).toPromise()}async function Tm(t,e){const n=As(t,!1).get(e),r=await new kr(n).toPromise();return r===void 0?null:r.value}function fa(t,e){const n=As(t,!0).delete(e);return new kr(n).toPromise()}const Am=800,Rm=3;class Tl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await li(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Il()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ts._getInstance(Im()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bm(),!this.activeServiceWorker)return;this.sender=new ym(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await li();return await da(e,ls,"1"),await fa(e,ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>da(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=As(s,!1).getAll();return new kr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tl.type="LOCAL";const Cm=Tl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function km(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Om().appendChild(r)})}function Pm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e){return e?ut(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Wi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Nm(t){return _l(t.auth,new Gi(t),t.bypassAuthState)}function Dm(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),lm(n,new Gi(t),t.bypassAuthState)}async function Lm(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),cm(n,new Gi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nm;case"linkViaPopup":case"linkViaRedirect":return Lm;case"reauthViaPopup":case"reauthViaRedirect":return Dm;default:Ue(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new Sr(2e3,1e4);async function My(t,e,n){const r=Cr(t);kp(t,e,qi);const s=Al(r,n);return new Kt(r,"signInViaPopup",e,s).executeNotNull()}class Kt extends Rl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mm.get())};e()}}Kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="pendingRedirect",Jr=new Map;class Um extends Rl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const r=await Fm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fm(t,e){const n=$m(e),r=Vm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Bm(t,e){Jr.set(t._key(),e)}function Vm(t){return ut(t._redirectPersistence)}function $m(t){return Gr(xm,t.config.apiKey,t.name)}async function jm(t,e,n=!1){const r=Cr(t),s=Al(r,e),o=await new Um(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=10*60*1e3;class Wm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ha(e))}saveEventToCache(e){this.cachedEventUids.add(ha(e)),this.lastProcessedEventTime=Date.now()}}function ha(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gm=/^https?/;async function Jm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qm(t);for(const n of e)try{if(Ym(n))return}catch{}Ue(t,"unauthorized-domain")}function Ym(t){const e=ci(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gm.test(n))return!1;if(Km.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Sr(3e4,6e4);function pa(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xm(t){return new Promise((e,n)=>{var r,s,i;function o(){pa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pa(),n(nt(t,"network-request-failed"))},timeout:Qm.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const a=Pm("iframefcb");return rt()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},km(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Yr=null,e})}let Yr=null;function Zm(t){return Yr=Yr||Xm(t),Yr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Sr(5e3,15e3),tg="__/auth/iframe",ng="emulator/auth/iframe",rg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ig(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$i(e,ng):`https://${t.config.authDomain}/${tg}`,r={apiKey:e.apiKey,appName:t.name,v:Er},s=sg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ir(r).slice(1)}`}async function og(t){const e=await Zm(t),n=rt().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:ig(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},eg.get());function c(){rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cg=500,lg=600,ug="_blank",dg="http://localhost";class ma{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fg(t,e,n,r=cg,s=lg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ag),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(a=ll(l)?ug:n),cl(l)&&(e=e||dg,c.scrollbars="yes");const d=Object.entries(c).reduce((p,[_,A])=>`${p}${_}=${A},`,"");if(Jp(l)&&a!=="_self")return hg(e||"",a),new ma(null);const f=window.open(e||"",a,d);x(f,t,"popup-blocked");try{f.focus()}catch{}return new ma(f)}function hg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="__/auth/handler",mg="emulator/auth/handler";function ga(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Er,eventId:s};if(e instanceof qi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Or){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${gg(t)}?${Ir(a).slice(1)}`}function gg({config:t}){return t.emulator?$i(t,mg):`https://${t.authDomain}/${pg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="webStorageSupport";class _g{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wl,this._completeRedirectFn=jm,this._overrideRedirectResult=Bm}async _openPopup(e,n,r,s){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ga(e,n,r,ci(),s);return fg(e,o,Ki())}async _openRedirect(e,n,r,s){return await this._originValidation(e),vm(ga(e,n,r,ci(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await og(e),r=new Wm(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vs,{type:Vs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vs];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pl()||Hi()||Ss()}}const yg=_g;var _a="@firebase/auth",ya="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wg(t){Cn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ml(t)},d=new Zp(a,c,l);return Np(d,n),d})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new Xt("auth-internal",e=>{const n=Cr(e.getProvider("auth").getImmediate());return(r=>new vg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(_a,ya,bg(t)),xt(_a,ya,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t=Qc()){const e=Fi(t,"auth");return e.isInitialized()?e.getImmediate():Pp(t,{popupRedirectResolver:yg,persistence:[Cm,gm,wl]})}wg("Browser");const Ig="modulepreload",Eg=function(t){return"/"+t},va={},Fr=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=Eg(s),s in va)return;va[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Ig,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};const Ol=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Bt=t=>(uc("data-v-5cd71fa3"),t=t(),dc(),t),Sg={class:"search"},Tg={class:"search-bar-container"},Ag={class:"filter"},Rg={class:"lvl-filter"},Cg=ke(),Og=Bt(()=>M("label",{for:"show-native"},"NATIVE",-1)),kg=ke(),Pg=Bt(()=>M("label",{for:"show-advanced"},"ADVANCED",-1)),Ng=ke(),Dg=Bt(()=>M("label",{for:"show-intermediate"},"INTERMEDIATE",-1)),Lg=ke(),Mg=Bt(()=>M("label",{for:"show-beginner"},"BEGINNER",-1)),xg={class:"score-filter"},Ug=ke(),Fg=Bt(()=>M("label",{for:"hide-negative-scores"},"HIDE NEGATIVE SCORES",-1)),Bg={id:"table",class:"table"},Vg={id:"table-head",class:"table-head"},$g={id:"table-head-row",class:"table-row table-head-row"},jg={key:0,class:"table-head-row-cell d-none d-md-block"},Hg={key:1,class:"table-head-row-cell"},Wg=Bt(()=>M("span",{class:"d-none d-md-block"},"CURRENTLY LEARNING / ALSO KNOWS",-1)),zg=Bt(()=>M("span",{class:"d-sm-block d-md-none"},"LANGUAGES",-1)),qg=[Wg,zg],Kg=Bt(()=>M("th",{class:"table-head-row-cell d-none d-md-block"}," OTHER PLATFORMS ",-1)),Gg={id:"table-body",class:"table-body"},Jg={class:"table-row table-body-row"},Yg={class:"table-row-cell"},Qg={class:"display-username"},Xg={class:"d-sm-block d-md-none"},Zg={class:"table-row-cell"},e_={class:"score-container"},t_={key:0},n_={class:"score-btn-container"},r_=["onClick"],s_=["onClick"],i_={key:0,class:"table-row-cell d-none d-md-block"},o_={key:1,class:"table-row-cell"},a_={class:"d-sm-block d-md-none"},c_={class:"table-row-cell d-none d-md-block"},l_={data(){return{store:Ve,isSortedByUsername:!1,isReverseSortedByUsername:!1,searchbarInput:null,showNative:!0,showAdvanced:!0,showIntermediate:!0,showBeginner:!1,hideNegativeScore:!1,filteredUsers:[...Ve.users],sortedUsers:[...Ve.users],copyOfUsers:[...Ve.users],isSortedByScore:!1,isReverseSortedByScore:!1}},methods:{Search(){let t=this.searchbarInput.toUpperCase();console.log(t);let e=document.getElementsByTagName("tr");for(let n=1;n<e.length;n++)for(let r=0;r<4;r++){console.log(e[n].getElementsByTagName("td")[r]);let s=e[n].getElementsByTagName("td")[r];if((s.textContent||s.innerText).toUpperCase().indexOf(t)>-1){e[n].style.display="";break}else e[n].style.display="none"}},DisplayLanguageGrouping(t){this.filteredUsers.languages.filter(e=>e.lvl===t)},SortUsersByUsername(){this.isSortedByUsername?this.isReverseSortedByUsername?this.isSortedByUsername=this.isReverseSortedByUsername=!1:(Ve.users.sort((t,e)=>e.username.localeCompare(t.username)),this.isReverseSortedByUsername=!0):(Ve.users.sort((t,e)=>t.username.localeCompare(e.username)),this.isSortedByUsername=!0)},SortUsersByScore(){this.isSortedByScore?this.isReverseSortedByScore?this.isSortedByScore=this.isReverseSortedByScore=!1:(Ve.users.sort((t,e)=>t.score-e.score),this.isReverseSortedByScore=!0):(Ve.users.sort((t,e)=>e.score-t.score),this.isSortedByScore=!0)},modifyScore:(t,e)=>{e==="add"?t.score===-1?t.score+=2:t.score++:t.score===1?t.score-=2:t.score--}}},u_=Object.assign(l_,{__name:"Content",setup(t){return(e,n)=>(Q(),le(fe,null,[M("div",Sg,[M("div",Tg,[un(M("input",{type:"text",onKeyup:n[0]||(n[0]=r=>e.Search()),"onUpdate:modelValue":n[1]||(n[1]=r=>ue(searchbarInput)?searchbarInput.value=r:null),class:"search-bar",placeholder:"Checks if row includes substring"},null,544),[[Zd,e.searchbarInput]])])]),M("div",Ag,[M("div",Rg,[un(M("input",{type:"checkbox",onClick:n[2]||(n[2]=r=>(e.Search(),e.DisplayLanguageGrouping("native",e.showNative))),id:"show-native",name:"show-native","onUpdate:modelValue":n[3]||(n[3]=r=>ue(showNative)?showNative.value=r:null),checked:"",class:"checkbox"},null,512),[[jn,e.showNative]]),Cg,Og,un(M("input",{type:"checkbox",onClick:n[4]||(n[4]=r=>(e.Search(),e.DisplayLanguageGrouping("advanced",e.showAdvanced))),id:"show-advanced",name:"show-advanced","onUpdate:modelValue":n[5]||(n[5]=r=>ue(showAdvanced)?showAdvanced.value=r:null),checked:"",class:"checkbox"},null,512),[[jn,e.showAdvanced]]),kg,Pg,un(M("input",{type:"checkbox",onClick:n[6]||(n[6]=r=>(e.Search(),e.DisplayLanguageGrouping("intermediate",e.showIntermediate))),id:"show-intermediate",name:"show-intermediate","onUpdate:modelValue":n[7]||(n[7]=r=>ue(showIntermediate)?showIntermediate.value=r:null),checked:"",class:"checkbox"},null,512),[[jn,e.showIntermediate]]),Ng,Dg,un(M("input",{type:"checkbox",onClick:n[8]||(n[8]=r=>(e.Search(),e.DisplayLanguageGrouping("beginner",e.showBeginner))),id:"show-beginner",name:"show-beginner","onUpdate:modelValue":n[9]||(n[9]=r=>ue(showBeginner)?showBeginner.value=r:null),class:"checkbox"},null,512),[[jn,e.showBeginner]]),Lg,Mg]),M("div",xg,[un(M("input",{type:"checkbox","onUpdate:modelValue":n[10]||(n[10]=r=>ue(hideNegativeScore)?hideNegativeScore.value=r:null),name:"hide-negative-scores",id:"hide-negative-scores",class:"checkbox"},null,512),[[jn,e.hideNegativeScore]]),Ug,Fg])]),M("table",Bg,[M("thead",Vg,[M("tr",$g,[M("th",{onClick:n[11]||(n[11]=r=>e.SortUsersByUsername()),class:"table-head-row-cell"}," NAME "),M("th",{onClick:n[12]||(n[12]=r=>e.SortUsersByScore()),class:"table-head-row-cell"}," SCORE "),e.showNative?(Q(),le("th",jg," NATIVE LANGUAGE(S) ")):Ce("",!0),e.showAdvanced||e.showIntermediate||e.showBeginner?(Q(),le("th",Hg,qg)):Ce("",!0),Kg])]),M("tbody",Gg,[(Q(!0),le(fe,null,It(Me(Ve).users.filter(r=>e.hideNegativeScore?r.score>0:r.score),r=>(Q(),le("tr",Jg,[M("td",Yg,[M("div",null,_e(r.displayName.toLocaleUpperCase()),1),M("div",Qg," @"+_e(r.username.toLocaleUpperCase()),1),M("div",Xg,[(Q(!0),le(fe,null,It(r.contact,s=>(Q(),le("span",null,_e(s.place.toUpperCase())+": "+_e(s.username.toUpperCase()),1))),256))])]),M("td",Zg,[M("span",e_,[!e.hideNegativeScore||r.score>=0?(Q(),le("span",t_,[M("span",null,_e(r.score),1),M("span",n_,[M("span",null,[M("button",{onClick:s=>e.modifyScore(r,"add"),class:"score-button pos-btn"},"+",8,r_)]),M("span",null,[M("button",{onClick:s=>e.modifyScore(r,"subtract"),class:"score-button neg-btn"},"\u2013",8,s_)])])])):Ce("",!0)])]),e.showNative?(Q(),le("td",i_,[(Q(!0),le(fe,null,It(r.languages.filter(s=>s.lvl==="native"),s=>(Q(),le("div",null,_e(s.name.toUpperCase()),1))),256))])):Ce("",!0),e.showAdvanced||e.showIntermediate||e.showBeginner?(Q(),le("td",o_,[e.showNative?(Q(!0),le(fe,{key:0},It(r.languages.filter(s=>s.lvl==="native"),s=>(Q(),le("div",a_,_e(s.name.toUpperCase())+" ("+_e(s.lvl.toLocaleUpperCase())+")",1))),256)):Ce("",!0),e.showAdvanced?(Q(!0),le(fe,{key:1},It(r.languages.filter(s=>s.lvl==="advanced"||s.lvl==="proficient"),s=>(Q(),le("div",null,_e(s.name.toLocaleUpperCase())+" ("+_e(s.lvl.toLocaleUpperCase())+")",1))),256)):Ce("",!0),e.showIntermediate?(Q(!0),le(fe,{key:2},It(r.languages.filter(s=>s.lvl==="intermediate"||s.lvl==="upper_intermediate"),s=>(Q(),le("div",null,_e(s.name.toLocaleUpperCase())+" ("+_e(s.lvl.toLocaleUpperCase())+")",1))),256)):Ce("",!0),e.showBeginner?(Q(!0),le(fe,{key:3},It(r.languages.filter(s=>s.lvl==="pre-intermediate"||s.lvl==="beginner"),s=>(Q(),le("div",null,_e(s.name.toLocaleUpperCase())+" ("+_e(s.lvl.toLocaleUpperCase())+")",1))),256)):Ce("",!0)])):Ce("",!0),M("td",c_,[(Q(!0),le(fe,null,It(r.contactMethods,s=>(Q(),le("span",null,_e(s.platform.toUpperCase())+": "+_e(s.username.toUpperCase()),1))),256))])]))),256))])])],64))}}),d_=Ol(u_,[["__scopeId","data-v-5cd71fa3"]]),f_={__name:"Home",setup(t){return(e,n)=>(Q(),le("main",null,[ge(d_)]))}},kl=sh({history:If("/"),routes:[{path:"/",name:"home",component:f_},{path:"/admin",name:"admin",component:()=>Fr(()=>import("./Admin.6dc2fc78.js"),[])},{path:"/profile",name:"profile",component:()=>Fr(()=>import("./Profile.495eb2c4.js"),["assets/Profile.495eb2c4.js","assets/Profile.20846812.css"])},{path:"/sign-in",name:"sign-in",component:()=>Fr(()=>import("./SignIn.b6d75dac.js"),[])},{path:"/register",name:"register",component:()=>Fr(()=>import("./Register.f3d59db8.js"),[])}]});const h_=t=>(uc("data-v-61fd0ecd"),t=t(),dc(),t),p_={class:"navbar"},m_=ke("Home"),g_=ke("Admin"),__=ke("My Profile"),y_=ke("Sign In"),v_=h_(()=>M("footer",null,[M("p",null,[ke("Thank you for using my site. See my "),M("a",{href:"https://github.com/hugolindfors2"},"GitHub"),ke(" or reach me at "),M("a",{href:"mailto:hugo.lindfors2@elev.ga.ntig.se"},"hugo.lindfors2@elev.ga.ntig.se"),ke(" for more. Pro tip, click the table headings to sort column!")])],-1)),b_={data(){return{isLoggedIn:!1,currentUserId:null,currentUserDisplayName:null}},methods:{handleSignOut(){fm(Ur()).then(()=>{kl.push("/")})}},created(){var t,e;this.currentUserId=(t=Ur().currentUser)==null?void 0:t.uid,console.log((e=Ur().currentUser)==null?void 0:e.uid),this.currentUserId&&(this.isLoggedIn=!0),dm(Ur(),n=>{n?(this.isLoggedIn=!0,this.currentUserId=n.uid):(this.isLoggedIn=!1,this.currentUserId=null,this.currentUserDisplayName=null)})}},w_=Object.assign(b_,{__name:"App",setup(t){return(e,n)=>(Q(),le(fe,null,[M("header",null,[M("nav",p_,[ge(Me(qn),{to:"/",class:"router-link"},{default:zn(()=>[m_]),_:1}),e.isLogggedIn&&e.isAdmin?(Q(),zr(Me(qn),{key:0,to:"/admin",class:"router-link"},{default:zn(()=>[g_]),_:1})):Ce("",!0),e.isLoggedIn?(Q(),zr(Me(qn),{key:1,to:"/profile",class:"router-link"},{default:zn(()=>[__]),_:1})):Ce("",!0),e.isLoggedIn?Ce("",!0):(Q(),zr(Me(qn),{key:2,to:"/sign-in",class:"router-link right sign-in"},{default:zn(()=>[y_]),_:1})),e.isLoggedIn?(Q(),le("button",{key:3,onClick:n[0]||(n[0]=(...r)=>e.handleSignOut&&e.handleSignOut(...r)),class:"router-link-button"},"Sign out")):Ce("",!0)])]),ge(Me(Wc),{class:"router-view"}),v_],64))}}),I_=Ol(w_,[["__scopeId","data-v-61fd0ecd"]]);var E_="firebase",S_="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(E_,S_,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new xi("@firebase/firestore");function ds(t,...e){if(On.logLevel<=Z.DEBUG){const n=e.map(Yi);On.debug(`Firestore (${Un}): ${t}`,...n)}}function Ji(t,...e){if(On.logLevel<=Z.ERROR){const n=e.map(Yi);On.error(`Firestore (${Un}): ${t}`,...n)}}function T_(t,...e){if(On.logLevel<=Z.WARN){const n=e.map(Yi);On.warn(`Firestore (${Un}): ${t}`,...n)}}function Yi(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+t;throw Ji(e),new Error(e)}function gt(t,e){t||rn()}function Qi(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="ok",A_="cancelled",Zn="unknown",oe="invalid-argument",R_="deadline-exceeded",C_="not-found",O_="permission-denied",ui="unauthenticated",k_="resource-exhausted",kn="failed-precondition",P_="aborted",N_="out-of-range",Pl="unimplemented",D_="internal",L_="unavailable";class H extends vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class x_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class U_{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(gt(typeof e.accessToken=="string"),new M_(e.accessToken,new Le(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class F_{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(gt(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class B_{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new F_(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $_{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(gt(typeof e.token=="string"),new V_(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mr&&e.projectId===this.projectId&&e.database===this.database}}class gr{constructor(e,n,r){n===void 0?n=0:n>e.length&&rn(),r===void 0?r=e.length-n:r>e.length-n&&rn(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends gr{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(oe,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const H_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends gr{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return H_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(oe,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(oe,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(oe,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(oe,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.path=e}static fromPath(e){return new dt(Ie.fromString(e))}static fromName(e){return new dt(Ie.fromString(e).popFirst(5))}static empty(){return new dt(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new dt(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e,n){if(!n)throw new H(oe,`Function ${t}() cannot be called with an empty ${e}.`)}function wa(t){if(dt.isDocumentKey(t))throw new H(oe,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function z_(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":rn()}function q_(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(oe,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=z_(t);throw new H(oe,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){return t==null}function Ia(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ea,z;function Sa(t){if(t===void 0)return Ji("RPC_ERROR","HTTP error has no status"),Zn;switch(t){case 200:return ba;case 400:return kn;case 401:return ui;case 403:return O_;case 404:return C_;case 409:return P_;case 416:return N_;case 429:return k_;case 499:return A_;case 500:return Zn;case 501:return Pl;case 503:return L_;case 504:return R_;default:return t>=200&&t<300?ba:t>=400&&t<500?kn:t>=500&&t<600?D_:Zn}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(z=Ea||(Ea={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";class J_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}v(e,n,r,s,i){const o=this.T(e,n);ds("RestConnection","Sending: ",o,r);const a={};return this.I(a,s,i),this.A(e,o,a,r).then(c=>(ds("RestConnection","Received: ",c),c),c=>{throw T_("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}I(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Un,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=G_[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){const i=JSON.stringify(s);let o;try{o=await this.P(n,{method:"POST",headers:r,body:i})}catch(a){throw new H(Sa(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new H(Sa(o.status),"Request failed with error: "+o.statusText);return o.json()}}function _r(t,e){return t<e?-1:t>e?1:0}function Y_(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(oe,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(oe,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(oe,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(oe,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_r(this.nanoseconds,e.nanoseconds):_r(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new $e(e)}static min(){return new $e(new ht(0,0))}static max(){return new $e(new ht(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new _t(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _r(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Q_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(gt(!!t),typeof t=="string"){let e=0;const n=Q_.exec(t);if(gt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dl(t){const e=t.mapValue.fields.__previous_value__;return Nl(e)?Dl(e):e}function fi(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nl(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:rn()}function pi(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fi(t).isEqual(fi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=yr(r.timestampValue),o=yr(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return di(r.bytesValue).isEqual(di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Oe(r.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Oe(r.integerValue)===Oe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Oe(r.doubleValue),o=Oe(s.doubleValue);return i===o?Ia(i)===Ia(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Y_(t.arrayValue.values||[],e.arrayValue.values||[],pi);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ta(i)!==Ta(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!pi(i[a],o[a])))return!1;return!0}(t,e);default:return rn()}}function Aa(t){return!!t&&"nullValue"in t}function Ra(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $s(t){return!!t&&"mapValue"in t}function er(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=er(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=er(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$s(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=er(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=er(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$s(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$s(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ct(er(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Rt(e,0,$e.min(),$e.min(),ct.empty(),0)}static newFoundDocument(e,n,r){return new Rt(e,1,n,$e.min(),r,0)}static newNoDocument(e,n){return new Rt(e,2,n,$e.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,$e.min(),ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.D=null}}function Ca(t,e=null,n=[],r=[],s=null,i=null,o=null){return new X_(t,e,n,r,s,i,o)}class Oa{constructor(e,n){this.position=e,this.inclusive=n}}class Qr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function ey(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ty(t){for(const e of t.filters)if(e.S())return e.field;return null}function ka(t){const e=Qi(t);if(e.q===null){e.q=[];const n=ty(e),r=ey(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new Qr(n)),e.q.push(new Qr(et.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new Qr(et.keyField(),i))}}}return e.q}function ny(t){const e=Qi(t);if(!e.O)if(e.limitType==="F")e.O=Ca(e.path,e.collectionGroup,ka(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ka(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qr(i.field,o))}const r=e.endAt?new Oa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Oa(e.startAt.position,e.startAt.inclusive):null;e.O=Ca(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class iy{constructor(e,n){this.databaseId=e,this.k=n}}function oy(t){return gt(!!t),$e.fromTimestamp(function(e){const n=yr(e);return new ht(n.seconds,n.nanos)}(t))}function ay(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function cy(t,e){const n=function(s){const i=Ie.fromString(s);return gt(Ll(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new H(oe,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(oe,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new dt((gt((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Pa(t,e){return ay(t.databaseId,e)}function ly(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Pa(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pa(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(d=>function(f){if(f.op==="=="){if(Ra(f.value))return{unaryFilter:{field:fn(f.field),op:"IS_NAN"}};if(Aa(f.value))return{unaryFilter:{field:fn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Ra(f.value))return{unaryFilter:{field:fn(f.field),op:"IS_NOT_NAN"}};if(Aa(f.value))return{unaryFilter:{field:fn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(f.field),op:dy(f.op),value:f.value}}}(d));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(d){return{field:fn(d.field),direction:uy(d.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.k||K_(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function uy(t){return ry[t]}function dy(t){return sy[t]}function fn(t){return{fieldPath:t.canonicalString()}}function Ll(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){return new iy(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Z=r,this.C=s,this.tt=!1}et(){if(this.tt)throw new H(kn,"The client has already been terminated.")}v(e,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.Z.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ui&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(Zn,s.toString())})}R(e,n,r,s){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Z.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ui&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(Zn,i.toString())})}terminate(){this.tt=!0}}async function py(t,e){const n=Qi(t),r=ly(n.C,ny(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=cy(i,o.name),l=oy(o.updateTime),d=new ct({mapValue:{fields:o.fields}}),f=Rt.newFoundDocument(c,l,d);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(n.C,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Map;function my(t){if(t._terminated)throw new H(kn,"The client has already been terminated.");if(!tr.has(t)){ds("ComponentProvider","Initializing Datastore");const i=function(c){return new J_(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new j_(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=fy(t._databaseId),a=function(c,l,d,f){return new hy(c,l,d,f)}(t._authCredentials,t._appCheckCredentials,i,o);tr.set(t,a)}var e,n,r,s;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return tr.get(t)}class Na{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new H(oe,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(oe,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new H(oe,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Na({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(kn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(kn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Na(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new x_;switch(n.type){case"gapi":const r=n.client;return new B_(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(oe,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=tr.get(e);n&&(ds("ComponentProvider","Removing Datastore"),tr.delete(e),n.terminate())}(this),Promise.resolve()}}function gy(t,e){const n=typeof t=="object"?t:Qc(),r=typeof t=="string"?t:e||"(default)";return Fi(n,"firestore/lite").getImmediate({identifier:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fn(this.firestore,e,this._key)}}class Rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rs(this.firestore,e,this._query)}}class bn extends Rs{constructor(e,n,r){super(e,n,new Z_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fn(this.firestore,null,new dt(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function _y(t,e,...n){if(t=Ft(t),W_("collection","path",e),t instanceof Ml){const r=Ie.fromString(e,...n);return wa(r),new bn(t,null,r)}{if(!(t instanceof Fn||t instanceof bn))throw new H(oe,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return wa(r),new bn(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(oe,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(_t.fromBase64String(e))}catch(n){throw new H(oe,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fs(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(oe,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(oe,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _r(this._lat,e._lat)||_r(this._long,e._long)}}const vy=new RegExp("[~\\*/\\[\\]]");function by(t,e,n){if(e.search(vy)>=0)throw Da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xl(...e.split("."))._internalPath}catch{throw Da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new H(oe,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ul(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ey("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ul extends wy{data(){return super.data()}}class Iy{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Ey(t,e){return typeof e=="string"?by(t,e):e instanceof xl?e._internalPath:e._delegate._internalPath}class Sy extends class{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw rn()}}convertObject(e,n){const r={};return Xi(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new yy(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const n=yr(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);gt(Ll(r));const s=new mr(r.get(1),r.get(3)),i=new dt(r.popFirst(5));return s.isEqual(n)||Ji(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fn(this.firestore,null,n)}}function Ty(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new H(Pl,"limitToLast() queries require specifying at least one orderBy() clause")})((t=q_(t,Rs))._query);const e=my(t.firestore),n=new Sy(t.firestore);return py(e,t._query).then(r=>{const s=r.map(i=>new Ul(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Iy(t,s)})}(function(t){Un=t})(`${Er}_lite`),Cn(new Xt("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Ml(new U_(t.getProvider("auth-internal")),new $_(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new H(oe,'"projectId" not provided in firebase.initializeApp.');return new mr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),xt("firestore-lite","3.4.15",""),xt("firestore-lite","3.4.15","esm2017");const Ve=Mn({users:[]}),Ay={apiKey:"AIzaSyC73oVAbqSAWb6iMbB_bdr_sXUNAdb0qyQ",authDomain:"lang-exchange-2a4fc.firebaseapp.com",projectId:"lang-exchange-2a4fc",storageBucket:"lang-exchange-2a4fc.appspot.com",messagingSenderId:"264989986369",appId:"1:264989986369:web:5fb5c160b0e4565baa00c0"},Ry=vp(Ay),Cy=gy(Ry),Oy=_y(Cy,"users");Ty(Oy).then(t=>{t.docs.forEach(e=>{Ve.users.push({...e.data(),id:e.id})}),console.log(Ve.users)}).catch(t=>{console.log(`ERROR: ${t.code}`)});const Fl=nf(I_);Fl.use(kl);Fl.mount("#app");export{fe as F,kt as G,Ol as _,M as a,Me as b,le as c,Py as d,Ce as e,ke as f,Ur as g,dc as h,ue as i,ky as j,Ly as k,My as l,Dy as m,Q as o,uc as p,It as r,Ve as s,_e as t,Ny as u,Zd as v,un as w};
