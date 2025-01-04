"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{8943:(e,t,r)=>{function n(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}r.d(t,{U1:()=>ef,zD:()=>eb,Z0:()=>eE});var o,i="function"==typeof Symbol&&Symbol.observable||"@@observable",a=()=>Math.random().toString(36).substring(7).split("").join("."),u={INIT:`@@redux/INIT${a()}`,REPLACE:`@@redux/REPLACE${a()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${a()}`};function c(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function f(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}function l(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var s=l(),d=Symbol.for("immer-nothing"),p=Symbol.for("immer-draftable"),y=Symbol.for("immer-state");function h(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var _=Object.getPrototypeOf;function b(e){return!!e&&!!e[y]}function w(e){return!!e&&(g(e)||Array.isArray(e)||!!e[p]||!!e.constructor?.[p]||S(e)||j(e))}var m=Object.prototype.constructor.toString();function g(e){if(!e||"object"!=typeof e)return!1;let t=_(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===m}function E(e,t){0===v(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function v(e){let t=e[y];return t?t.type_:Array.isArray(e)?1:S(e)?2:j(e)?3:0}function O(e,t){return 2===v(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function P(e,t,r){let n=v(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function S(e){return e instanceof Map}function j(e){return e instanceof Set}function A(e){return e.copy_||e.base_}function C(e,t){if(S(e))return new Map(e);if(j(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=g(e);if(!0!==t&&("class_only"!==t||r)){let t=_(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[y];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(_(e),t)}}function T(e,t=!1){return k(e)||b(e)||!w(e)||(v(e)>1&&(e.set=e.add=e.clear=e.delete=N),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>T(t,!0))),e}function N(){h(2)}function k(e){return Object.isFrozen(e)}var R={};function D(e){let t=R[e];return t||h(0,e),t}function z(e,t){t&&(D("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function M(e){x(e),e.drafts_.forEach(F),e.drafts_=null}function x(e){e===o&&(o=e.parent_)}function I(e){return o={drafts_:[],parent_:o,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function F(e){let t=e[y];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function W(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[y].modified_&&(M(t),h(4)),w(e)&&(e=L(t,e),t.parent_||U(t,e)),t.patches_&&D("Patches").generateReplacementPatches_(r[y].base_,e,t.patches_,t.inversePatches_)):e=L(t,r,[]),M(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==d?e:void 0}function L(e,t,r){if(k(t))return t;let n=t[y];if(!n)return E(t,(o,i)=>$(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return U(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),E(o,(o,a)=>$(e,n,t,o,a,r,i)),U(e,t,!1),r&&e.patches_&&D("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function $(e,t,r,n,o,i,a){if(b(o)){let a=L(e,o,i&&t&&3!==t.type_&&!O(t.assigned_,n)?i.concat(n):void 0);if(P(r,n,a),!b(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(w(o)&&!k(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;L(e,o),(!t||!t.scope_.parent_)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&U(e,o)}}function U(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&T(t,r)}var K={get(e,t){if(t===y)return e;let r=A(e);if(!O(r,t))return function(e,t,r){let n=q(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!w(n)?n:n===V(e.base_,t)?(G(e),e.copy_[t]=Z(n,e)):n},has:(e,t)=>t in A(e),ownKeys:e=>Reflect.ownKeys(A(e)),set(e,t,r){let n=q(A(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=V(A(e),t),o=n?.[y];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||O(e.base_,t)))return!0;G(e),B(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==V(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,G(e),B(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=A(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){h(11)},getPrototypeOf:e=>_(e.base_),setPrototypeOf(){h(12)}},X={};function V(e,t){let r=e[y];return(r?A(r):e)[t]}function q(e,t){if(!(t in e))return;let r=_(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=_(r)}}function B(e){!e.modified_&&(e.modified_=!0,e.parent_&&B(e.parent_))}function G(e){e.copy_||(e.copy_=C(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function Z(e,t){let r=S(e)?D("MapSet").proxyMap_(e,t):j(e)?D("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:o,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},i=n,a=K;r&&(i=[n],a=X);let{revoke:u,proxy:c}=Proxy.revocable(i,a);return n.draft_=c,n.revoke_=u,c}(e,t);return(t?t.scope_:o).drafts_.push(r),r}E(K,(e,t)=>{X[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),X.deleteProperty=function(e,t){return X.set.call(this,e,t,void 0)},X.set=function(e,t,r){return K.set.call(this,e[0],t,r,e[0])};var H=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,e=>t.call(this,e,...o))}}if("function"!=typeof t&&h(6),void 0!==r&&"function"!=typeof r&&h(7),w(e)){let o=I(this),i=Z(e,void 0),a=!0;try{n=t(i),a=!1}finally{a?M(o):x(o)}return z(o,r),W(n,o)}if(e&&"object"==typeof e)h(1,e);else{if(void 0===(n=t(e))&&(n=e),n===d&&(n=void 0),this.autoFreeze_&&T(n,!0),r){let t=[],o=[];D("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}},this.produceWithPatches=(e,t)=>{let r,n;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;w(e)||h(8),b(e)&&(b(t=e)||h(10,t),e=function e(t){let r;if(!w(t)||k(t))return t;let n=t[y];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=C(t,n.scope_.immer_.useStrictShallowCopy_)}else r=C(t,!0);return E(r,(t,n)=>{P(r,t,e(n))}),n&&(n.finalized_=!1),r}(t));let r=I(this),n=Z(e,void 0);return n[y].isManual_=!0,x(r),n}finishDraft(e,t){let r=e&&e[y];r&&r.isManual_||h(9);let{scope_:n}=r;return z(n,t),W(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=D("Patches").applyPatches_;return b(e)?n(e,t):this.produce(e,e=>n(e,t))}},J=H.produce;H.produceWithPatches.bind(H),H.setAutoFreeze.bind(H),H.setUseStrictShallowCopy.bind(H),H.applyPatches.bind(H),H.createDraft.bind(H),H.finishDraft.bind(H),r(2818);var Q="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?f:f.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var Y=e=>e&&"function"==typeof e.match;function ee(e,t){function r(...n){if(t){let r=t(...n);if(!r)throw Error(eF(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>c(t)&&"type"in t&&"string"==typeof t.type&&t.type===e,r}function et(e){return["type","payload","error","meta"].indexOf(e)>-1}var er=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function en(e){return w(e)?J(e,()=>{}):e}function eo(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}var ei=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{},i=new er;return t&&("boolean"==typeof t?i.push(s):i.push(l(t.extraArgument))),i},ea=e=>t=>{setTimeout(t,e)},eu=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,a=!1,u=new Set,c="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:ea(10):"callback"===e.type?e.queueNotification:ea(e.timeout),f=()=>{a=!1,i&&(i=!1,u.forEach(e=>e()))};return Object.assign({},n,{subscribe(e){let t=n.subscribe(()=>o&&e());return u.add(e),()=>{t(),u.delete(e)}},dispatch(e){try{return(i=!(o=!e?.meta?.RTK_autoBatch))&&!a&&(a=!0,c(f)),n.dispatch(e)}finally{o=!0}}})},ec=e=>function(t){let{autoBatch:r=!0}=t??{},n=new er(e);return r&&n.push(eu("object"==typeof r?r:void 0)),n};function ef(e){let t,r;let o=ei(),{reducer:a,middleware:l,devTools:s=!0,preloadedState:d,enhancers:p}=e||{};if("function"==typeof a)t=a;else if(c(a))t=function(e){let t;let r=Object.keys(e),o={};for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof e[n]&&(o[n]=e[n])}let i=Object.keys(o);try{!function(e){Object.keys(e).forEach(t=>{let r=e[t];if(void 0===r(void 0,{type:u.INIT}))throw Error(n(12));if(void 0===r(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw Error(n(13))})}(o)}catch(e){t=e}return function(e={},r){if(t)throw t;let a=!1,u={};for(let t=0;t<i.length;t++){let c=i[t],f=o[c],l=e[c],s=f(l,r);if(void 0===s)throw r&&r.type,Error(n(14));u[c]=s,a=a||s!==l}return(a=a||i.length!==Object.keys(e).length)?u:e}}(a);else throw Error(eF(1));r="function"==typeof l?l(o):o();let y=f;s&&(y=Q({trace:!1,..."object"==typeof s&&s}));let h=ec(function(...e){return t=>(r,o)=>{let i=t(r,o),a=()=>{throw Error(n(15))},u={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=f(...e.map(e=>e(u)))(i.dispatch),{...i,dispatch:a}}}(...r));return function e(t,r,o){if("function"!=typeof t)throw Error(n(2));if("function"==typeof r&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw Error(n(0));if("function"==typeof r&&void 0===o&&(o=r,r=void 0),void 0!==o){if("function"!=typeof o)throw Error(n(1));return o(e)(t,r)}let a=t,f=r,l=new Map,s=l,d=0,p=!1;function y(){s===l&&(s=new Map,l.forEach((e,t)=>{s.set(t,e)}))}function h(){if(p)throw Error(n(3));return f}function _(e){if("function"!=typeof e)throw Error(n(4));if(p)throw Error(n(5));let t=!0;y();let r=d++;return s.set(r,e),function(){if(t){if(p)throw Error(n(6));t=!1,y(),s.delete(r),l=null}}}function b(e){if(!c(e))throw Error(n(7));if(void 0===e.type)throw Error(n(8));if("string"!=typeof e.type)throw Error(n(17));if(p)throw Error(n(9));try{p=!0,f=a(f,e)}finally{p=!1}return(l=s).forEach(e=>{e()}),e}return b({type:u.INIT}),{dispatch:b,subscribe:_,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw Error(n(10));a=e,b({type:u.REPLACE})},[i]:function(){return{subscribe(e){if("object"!=typeof e||null===e)throw Error(n(11));function t(){e.next&&e.next(h())}return t(),{unsubscribe:_(t)}},[i](){return this}}}}}(t,d,y(..."function"==typeof p?p(h):h()))}function el(e){let t;let r={},n=[],o={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw Error(eF(28));if(n in r)throw Error(eF(29));return r[n]=t,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(t=e,o)};return e(o),[r,n,t]}var es=(e,t)=>Y(e)?e.match(t):e(t),ed=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},ep=["name","message","stack","code"],ey=class{constructor(e,t){this.payload=e,this.meta=t}_type},eh=class{constructor(e,t){this.payload=e,this.meta=t}_type},e_=e=>{if("object"==typeof e&&null!==e){let t={};for(let r of ep)"string"==typeof e[r]&&(t[r]=e[r]);return t}return{message:String(e)}},eb=(()=>{function e(e,t,r){let n=ee(e+"/fulfilled",(e,t,r,n)=>({payload:e,meta:{...n||{},arg:r,requestId:t,requestStatus:"fulfilled"}})),o=ee(e+"/pending",(e,t,r)=>({payload:void 0,meta:{...r||{},arg:t,requestId:e,requestStatus:"pending"}})),i=ee(e+"/rejected",(e,t,n,o,i)=>({payload:o,error:(r&&r.serializeError||e_)(e||"Rejected"),meta:{...i||{},arg:n,requestId:t,rejectedWithValue:!!o,requestStatus:"rejected",aborted:e?.name==="AbortError",condition:e?.name==="ConditionError"}}));return Object.assign(function(e){return(a,u,c)=>{let f,l;let s=r?.idGenerator?r.idGenerator(e):ed(),d=new AbortController;function p(e){l=e,d.abort()}let y=async function(){let y;try{var h;let i=r?.condition?.(e,{getState:u,extra:c});if(h=i,null!==h&&"object"==typeof h&&"function"==typeof h.then&&(i=await i),!1===i||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let _=new Promise((e,t)=>{f=()=>{t({name:"AbortError",message:l||"Aborted"})},d.signal.addEventListener("abort",f)});a(o(s,e,r?.getPendingMeta?.({requestId:s,arg:e},{getState:u,extra:c}))),y=await Promise.race([_,Promise.resolve(t(e,{dispatch:a,getState:u,extra:c,requestId:s,signal:d.signal,abort:p,rejectWithValue:(e,t)=>new ey(e,t),fulfillWithValue:(e,t)=>new eh(e,t)})).then(t=>{if(t instanceof ey)throw t;return t instanceof eh?n(t.payload,s,e,t.meta):n(t,s,e)})])}catch(t){y=t instanceof ey?i(null,s,e,t.payload,t.meta):i(t,s,e)}finally{f&&d.signal.removeEventListener("abort",f)}return r&&!r.dispatchConditionRejection&&i.match(y)&&y.meta.condition||a(y),y}();return Object.assign(y,{abort:p,requestId:s,arg:e,unwrap:()=>y.then(ew)})}},{pending:o,rejected:i,fulfilled:n,settled:function(...e){return t=>e.some(e=>es(e,t))}(i,n),typePrefix:e})}return e.withTypes=()=>e,e})();function ew(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var em=Symbol.for("rtk-slice-createasyncthunk"),eg=(e=>(e.reducer="reducer",e.reducerWithPrepare="reducerWithPrepare",e.asyncThunk="asyncThunk",e))(eg||{}),eE=function({creators:e}={}){let t=e?.asyncThunk?.[em];return function(e){let r;let{name:n,reducerPath:o=n}=e;if(!n)throw Error(eF(11));let i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},a=Object.keys(i),u={},c={},f={},l=[],s={addCase(e,t){let r="string"==typeof e?e:e.type;if(!r)throw Error(eF(12));if(r in c)throw Error(eF(13));return c[r]=t,s},addMatcher:(e,t)=>(l.push({matcher:e,reducer:t}),s),exposeAction:(e,t)=>(f[e]=t,s),exposeCaseReducer:(e,t)=>(u[e]=t,s)};function d(){let[t={},r=[],n]="function"==typeof e.extraReducers?el(e.extraReducers):[e.extraReducers],o={...t,...c};return function(e,t){let r;let[n,o,i]=el(t);if("function"==typeof e)r=()=>en(e());else{let t=en(e);r=()=>t}function a(e=r(),t){let u=[n[t.type],...o.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===u.filter(e=>!!e).length&&(u=[i]),u.reduce((e,r)=>{if(r){if(b(e)){let n=r(e,t);return void 0===n?e:n}if(w(e))return J(e,e=>r(e,t));{let n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}}return e},e)}return a.getInitialState=r,a}(e.initialState,e=>{for(let t in o)e.addCase(t,o[t]);for(let t of l)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)})}a.forEach(r=>{let o=i[r],a={reducerName:r,type:`${n}/${r}`,createNotation:"function"==typeof e.reducers};"asyncThunk"===o._reducerDefinitionType?function({type:e,reducerName:t},r,n,o){if(!o)throw Error(eF(18));let{payloadCreator:i,fulfilled:a,pending:u,rejected:c,settled:f,options:l}=r,s=o(e,i,l);n.exposeAction(t,s),a&&n.addCase(s.fulfilled,a),u&&n.addCase(s.pending,u),c&&n.addCase(s.rejected,c),f&&n.addMatcher(s.settled,f),n.exposeCaseReducer(t,{fulfilled:a||ev,pending:u||ev,rejected:c||ev,settled:f||ev})}(a,o,s,t):function({type:e,reducerName:t,createNotation:r},n,o){let i,a;if("reducer"in n){if(r&&"reducerWithPrepare"!==n._reducerDefinitionType)throw Error(eF(17));i=n.reducer,a=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,a?ee(e,a):ee(e))}(a,o,s)});let p=e=>e,y=new Map;function h(e,t){return r||(r=d()),r(e,t)}function _(){return r||(r=d()),r.getInitialState()}function m(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=_()),n}function o(t=p){let n=eo(y,r,()=>new WeakMap);return eo(n,t,()=>{let n={};for(let[o,i]of Object.entries(e.selectors??{}))n[o]=function(e,t,r,n){function o(i,...a){let u=t(i);return void 0===u&&n&&(u=r()),e(u,...a)}return o.unwrapped=e,o}(i,t,_,r);return n})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}let g={name:n,reducer:h,actions:f,caseReducers:u,getInitialState:_,...m(o),injectInto(e,{reducerPath:t,...r}={}){let n=t??o;return e.inject({reducerPath:n,reducer:h},r),{...g,...m(n,!0)}}};return g}}();function ev(){}var eO=class{constructor(e){this.code=e,this.message=`task cancelled (reason: ${e})`}name="TaskAbortError";message},eP=(e,t)=>{if("function"!=typeof e)throw TypeError(eF(32))},eS=()=>{},ej=(e,t=eS)=>(e.catch(t),e),eA=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),eC=(e,t)=>{let r=e.signal;r.aborted||("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},eT=e=>{if(e.aborted){let{reason:t}=e;throw new eO(t)}},eN=e=>t=>ej((function(e,t){let r=eS;return new Promise((n,o)=>{let i=()=>o(new eO(e.reason));if(e.aborted){i();return}r=eA(e,i),t.finally(()=>r()).then(n,o)}).finally(()=>{r=eS})})(e,t).then(t=>(eT(e),t))),{assign:ek}=Object,eR="listenerMiddleware",eD=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=ee(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(o);else throw Error(eF(21));return eP(i,"options.listener"),{predicate:o,type:t,effect:i}},ez=ek(e=>{let{type:t,predicate:r,effect:n}=eD(e);return{id:ed(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw Error(eF(22))}}},{withTypes:()=>ez}),eM=ek(ee(`${eR}/add`),{withTypes:()=>eM}),ex=ek(ee(`${eR}/remove`),{withTypes:()=>ex}),eI=Symbol.for("rtk-state-proxy-original");function eF(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}}}]);