var e,t,r,n,i,o,a,s,c,u,l,f,d,p,h,v,g,m,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var w={},_={},k=y.parcelRequire94c2;null==k&&((k=function(e){if(e in w)return w[e].exports;if(e in _){var t=_[e];delete _[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){_[e]=t},y.parcelRequire94c2=k),(0,k.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),k("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.c283f7b5.js","eyyUD","icons.c5b0f01c.svg"]'));var E={},S={},O=function(e){return e&&e.Math===Math&&e};S=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||O("object"==typeof self&&self)||O("object"==typeof y&&y)||O("object"==typeof S&&S)||function(){return this}()||Function("return this")();var j={},L={};j=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},M={};M=!L(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;$=M?F.bind(F):function(){return F.apply(F,arguments)};var P={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;i=T&&!P.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:P;var x={};x=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var H={},N={},q={},A=Function.prototype,I=A.call,R=M&&A.bind.bind(I,I),D={},C=(q=M?R:function(e){return function(){return I.apply(e,arguments)}})({}.toString),U=q("".slice);D=function(e){return U(C(e),8,-1)};var W=Object,B=q("".split);N=L(function(){return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===D(e)?B(e,""):W(e)}:W;var z={},G={};G=function(e){return null==e};var J=TypeError;z=function(e){if(G(e))throw new J("Can't call method on "+e);return e},H=function(e){return N(z(e))};var V={},Y={},Q={},K={},X="object"==typeof document&&document.all;K=void 0===X&&void 0!==X?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e},Q=function(e){return"object"==typeof e?null!==e:K(e)};var Z={},ee={};ee=function(e,t){var r;return arguments.length<2?(r=S[e],K(r)?r:void 0):S[e]&&S[e][t]};var et={};et=q({}.isPrototypeOf);var er={},en={},ei={},eo={},ea=S.navigator,es=ea&&ea.userAgent;eo=es?String(es):"";var ec=S.process,eu=S.Deno,el=ec&&ec.versions||eu&&eu.version,ef=el&&el.v8;ef&&(a=(o=ef.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!a&&eo&&(!(o=eo.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=eo.match(/Chrome\/(\d+)/))&&(a=+o[1]),ei=a;var ed=S.String;er=(en=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");return!ed(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ei&&ei<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ep=Object;Z=er?function(e){return"symbol"==typeof e}:function(e){var t=ee("Symbol");return K(t)&&et(t.prototype,ep(e))};var eh={},ev={},eg={},em=String;eg=function(e){try{return em(e)}catch(e){return"Object"}};var ey=TypeError;ev=function(e){if(K(e))return e;throw new ey(eg(e)+" is not a function")},eh=function(e,t){var r=e[t];return G(r)?void 0:ev(r)};var eb={},ew=TypeError;eb=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!Q(n=$(r,e))||K(r=e.valueOf)&&!Q(n=$(r,e))||"string"!==t&&K(r=e.toString)&&!Q(n=$(r,e)))return n;throw new ew("Can't convert object to primitive value")};var e_={},ek={},eE={},eS={};eS=!1;var eO={},ej=Object.defineProperty;eO=function(e,t){try{ej(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var eL="__core-js_shared__",e$=eE=S[eL]||eO(eL,{});(e$.versions||(e$.versions=[])).push({version:"3.41.0",mode:eS?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ek=function(e,t){return eE[e]||(eE[e]=t||{})};var eM={},eF={},eP=Object;eF=function(e){return eP(z(e))};var eT=q({}.hasOwnProperty);eM=Object.hasOwn||function(e,t){return eT(eF(e),t)};var ex={},eH=0,eN=Math.random(),eq=q(1..toString);ex=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eH+eN,36)};var eA=S.Symbol,eI=ek("wks"),eR=er?eA.for||eA:eA&&eA.withoutSetter||ex,eD=TypeError,eC=function(e){return eM(eI,e)||(eI[e]=en&&eM(eA,e)?eA[e]:eR("Symbol."+e)),eI[e]}("toPrimitive");Y=function(e,t){if(!Q(e)||Z(e))return e;var r,n=eh(e,eC);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!Q(r)||Z(r))return r;throw new eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},V=function(e){var t=Y(e,"string");return Z(t)?t:t+""};var eU={},eW={},eB=S.document,ez=Q(eB)&&Q(eB.createElement);eW=function(e){return ez?eB.createElement(e):{}},eU=!j&&!L(function(){return 7!==Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});var eG=Object.getOwnPropertyDescriptor;n=j?eG:function(e,t){if(e=H(e),t=V(t),eU)try{return eG(e,t)}catch(e){}if(eM(e,t))return x(!$(i,e,t),e[t])};var eJ={},eV={};eV=j&&L(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eQ=String,eK=TypeError;eY=function(e){if(Q(e))return e;throw new eK(eQ(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e4="writable";s=j?eV?function(e,t,r){if(eY(e),t=V(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e4 in r&&!r[e4]){var n=e0(e,t);n&&n[e4]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eY(e),t=V(t),eY(r),eU)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eJ=j?function(e,t,r){return s(e,t,x(1,r))}:function(e,t,r){return e[t]=r,e};var e7={},e8={},e3={},e9=Function.prototype,e5=j&&Object.getOwnPropertyDescriptor,e6=eM(e9,"name"),te=e6&&(!j||j&&e5(e9,"name").configurable),tt={},tr=q(Function.toString);K(eE.inspectSource)||(eE.inspectSource=function(e){return tr(e)}),tt=eE.inspectSource;var tn={},ti={},to=S.WeakMap;ti=K(to)&&/native code/.test(String(to));var ta={},ts=ek("keys");ta=function(e){return ts[e]||(ts[e]=ex(e))};var tc={};tc={};var tu="Object already initialized",tl=S.TypeError,tf=S.WeakMap;if(ti||eE.state){var tp=eE.state||(eE.state=new tf);tp.get=tp.get,tp.has=tp.has,tp.set=tp.set,c=function(e,t){if(tp.has(e))throw new tl(tu);return t.facade=e,tp.set(e,t),t},u=function(e){return tp.get(e)||{}},l=function(e){return tp.has(e)}}else{var th=ta("state");tc[th]=!0,c=function(e,t){if(eM(e,th))throw new tl(tu);return t.facade=e,eJ(e,th,t),t},u=function(e){return eM(e,th)?e[th]:{}},l=function(e){return eM(e,th)}}var tv=(tn={set:c,get:u,has:l,enforce:function(e){return l(e)?u(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=u(t)).type!==e)throw new tl("Incompatible receiver, "+e+" required");return r}}}).enforce,tg=tn.get,tm=String,ty=Object.defineProperty,tb=q("".slice),tw=q("".replace),t_=q([].join),tk=j&&!L(function(){return 8!==ty(function(){},"length",{value:8}).length}),tE=String(String).split("String"),tS=e8=function(e,t,r){"Symbol("===tb(tm(t),0,7)&&(t="["+tw(tm(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eM(e,"name")||te&&e.name!==t)&&(j?ty(e,"name",{value:t,configurable:!0}):e.name=t),tk&&r&&eM(r,"arity")&&e.length!==r.arity&&ty(e,"length",{value:r.arity});try{r&&eM(r,"constructor")&&r.constructor?j&&ty(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tv(e);return eM(n,"source")||(n.source=t_(tE,"string"==typeof t?t:"")),e};Function.prototype.toString=tS(function(){return K(this)&&tg(this).source||tt(this)},"toString"),e7=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(K(r)&&e8(r,o,n),n.global)i?e[t]=r:eO(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:s(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tO={},tj={},tL={},t$={},tM={},tF={},tP={},tT=Math.ceil,tx=Math.floor;tP=Math.trunc||function(e){var t=+e;return(t>0?tx:tT)(t)},tF=function(e){var t=+e;return t!=t||0===t?0:tP(t)};var tH=Math.max,tN=Math.min;tM=function(e,t){var r=tF(e);return r<0?tH(r+t,0):tN(r,t)};var tq={},tA={},tI=Math.min;tA=function(e){var t=tF(e);return t>0?tI(t,0x1fffffffffffff):0},tq=function(e){return tA(e.length)};var tR=function(e){return function(t,r,n){var i,o=H(t),a=tq(o);if(0===a)return!e&&-1;var s=tM(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tD={includes:tR(!0),indexOf:tR(!1)}.indexOf,tC=q([].push);tL=function(e,t){var r,n=H(e),i=0,o=[];for(r in n)!eM(tc,r)&&eM(n,r)&&tC(o,r);for(;t.length>i;)eM(n,r=t[i++])&&(~tD(o,r)||tC(o,r));return o};var tU={},tW=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tL(e,tW)},d=Object.getOwnPropertySymbols;var tB=q([].concat);tj=ee("Reflect","ownKeys")||function(e){var t=f(eY(e));return d?tB(t,d(e)):t},tO=function(e,t,r){for(var i=tj(t),o=0;o<i.length;o++){var a=i[o];eM(e,a)||r&&eM(r,a)||s(e,a,n(t,a))}};var tz={},tG=/#|\.prototype\./,tJ=function(e,t){var r=tY[tV(e)];return r===tK||r!==tQ&&(K(t)?L(t):!!t)},tV=tJ.normalize=function(e){return String(e).replace(tG,".").toLowerCase()},tY=tJ.data={},tQ=tJ.NATIVE="N",tK=tJ.POLYFILL="P";tz=tJ,E=function(e,t){var r,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?S:l?S[c]||eO(c,{}):S[c]&&S[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=n(r,i))&&s.value:r[i],!tz(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tO(a,o)}(e.sham||o&&o.sham)&&eJ(a,"sham",!0),e7(r,i,a,e)}};var tX={},tZ={},t0=Function.prototype,t1=t0.apply,t2=t0.call;tZ="object"==typeof Reflect&&Reflect.apply||(M?t2.bind(t1):function(){return t2.apply(t1,arguments)});var t4={},t7={},t8=(t7=function(e){if("Function"===D(e))return q(e)})(t7.bind);t4=function(e,t){return ev(e),void 0===t?e:M?t8(e,t):function(){return e.apply(t,arguments)}};var t3={};t3=ee("document","documentElement");var t9={};t9=q([].slice);var t5={},t6=TypeError;t5=function(e,t){if(e<t)throw new t6("Not enough arguments");return e};var re={};re=/(?:ipad|iphone|ipod).*applewebkit/i.test(eo);var rt={},rr={},rn=function(e){return eo.slice(0,e.length)===e};rt="NODE"===(rr=rn("Bun/")?"BUN":rn("Cloudflare-Workers")?"CLOUDFLARE":rn("Deno/")?"DENO":rn("Node.js/")?"NODE":S.Bun&&"string"==typeof Bun.version?"BUN":S.Deno&&"object"==typeof Deno.version?"DENO":"process"===D(S.process)?"NODE":S.window&&S.document?"BROWSER":"REST");var ri=S.setImmediate,ro=S.clearImmediate,ra=S.process,rs=S.Dispatch,rc=S.Function,ru=S.MessageChannel,rl=S.String,rf=0,rd={},rp="onreadystatechange";L(function(){p=S.location});var rh=function(e){if(eM(rd,e)){var t=rd[e];delete rd[e],t()}},rv=function(e){return function(){rh(e)}},rg=function(e){rh(e.data)},rm=function(e){S.postMessage(rl(e),p.protocol+"//"+p.host)};ri&&ro||(ri=function(e){t5(arguments.length,1);var t=K(e)?e:rc(e),r=t9(arguments,1);return rd[++rf]=function(){tZ(t,void 0,r)},h(rf),rf},ro=function(e){delete rd[e]},rt?h=function(e){ra.nextTick(rv(e))}:rs&&rs.now?h=function(e){rs.now(rv(e))}:ru&&!re?(g=(v=new ru).port2,v.port1.onmessage=rg,h=t4(g.postMessage,g)):S.addEventListener&&K(S.postMessage)&&!S.importScripts&&p&&"file:"!==p.protocol&&!L(rm)?(h=rm,S.addEventListener("message",rg,!1)):h=rp in eW("script")?function(e){t3.appendChild(eW("script"))[rp]=function(){t3.removeChild(this),rh(e)}}:function(e){setTimeout(rv(e),0)});var ry=(tX={set:ri,clear:ro}).clear;E({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==ry},{clearImmediate:ry});var rb=tX.set,rw={},r_=S.Function,rk=/MSIE .\./.test(eo)||"BUN"===rr&&((e=S.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rw=function(e,t){var r=t?2:1;return rk?function(n,i){var o=t5(arguments.length,1)>r,a=K(n)?n:r_(n),s=o?t9(arguments,r):[],c=o?function(){tZ(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rE=S.setImmediate?rw(rb,!1):rb;E({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==rE},{setImmediate:rE});var rS=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c,u,l=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(l,"_invoke",{value:(a=e,s=n,c=new L(o||[]),u=d,function(e,r){if(u===p)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(n,c);if(i){if(i===v)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===d)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=f(a,s,c);if("normal"===o.type){if(u=c.done?h:"suspendedYield",o.arg===v)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=h,c.method="throw",c.arg=o.arg)}})}),l}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w($([])));_&&_!==r&&n.call(_,a)&&(b=_);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=f(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function $(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rS}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rS:Function("r","regeneratorRuntime = r")(rS)}const rO="b6b754af-4498-4f9b-ab9c-87711f8d81e1",rj=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rL=async function(e){try{let t=await Promise.race([fetch(e),rj(10)]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},r$=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rj(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw console.error("❌ 发送 JSON 失败:",e),e}},rM={recipe:{},search:{page:1,data:[]},bookmarks:[]},rF=async function(e){try{url=`https://forkify-api.jonas.io/api/v2/recipes/${e}?key=${rO}`;let{recipe:t}=(await rL(url)).data;rM.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients},rM.bookmarks.some(t=>t.id===e)?rM.recipe.bookmarked=!0:rM.recipe.bookmarked=!1}catch(e){throw e}},rP=async function(e){try{url=`https://forkify-api.jonas.io/api/v2/recipes?search=${e}?key=${rO}`;let t=(await rL(url)).data.recipes;return rM.search.data=t,t}catch(e){throw console.log(e),e}},rT=function(e=rM.search.page,t=model.state.search.results){return rM.search.page=e,t.slice((e-1)*10,(e-1)*10+10)},rx=function(e){rM.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rM.recipe.servings}),rM.recipe.servings=e},rH=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let[t,r,n]=e[1].split(",");return{quantity:t?+t:null,unit:r,description:n}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await r$(`https://forkify-api.jonas.io/api/v2/recipes?key=${rO}`,r);rM.recipe={id:n.data.recipe.id,...n.data.recipe},rM.bookmarks.push(rM.recipe),rq()}catch(e){throw console.error("上传食谱失败:",e),e}},rN=function(e){e&&(e.bookmarked?(e.bookmarked=!1,rM.bookmarks=rM.bookmarks.filter(t=>t.id!==e.id)):(rM.bookmarks.push(e),rM.recipe.bookmarked=!0),rq())},rq=function(){localStorage.setItem("bookmarks",JSON.stringify(rM.bookmarks))};!function(){let e=localStorage.getItem("bookmarks");e&&(rM.bookmarks=JSON.parse(e))}();var rA={};rA=new URL("icons.c5b0f01c.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},m=Fraction;class rI{#e=document.querySelector(".recipe");#t;#r="We could not find the recipe. Please try another one!";#n="We could not find the recipe. Please try another one!";render(e){this.#t=e;let t=this.#i();this.#o(),this.#e.insertAdjacentHTML("beforeend",t)}#o(){this.#e.innerHTML=""}renderSpinner(){let e=`
          <div class="spinner">
            <svg>
              <use href="${b(rA)}#icon-loader"></use>
            </svg>
          </div>
      `;this.#o(),this.#e.insertAdjacentHTML("afterbegin",e)}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerDecreaseServings(e){this.#e.addEventListener("click",t=>{t.target.closest(".btn--decrease-servings")&&e()})}addHandlerIncreaseServings(e){this.#e.addEventListener("click",t=>{t.target.closest(".btn--increase-servings")&&e()})}addHandlerAddBookmark(e){this.#e.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderErrorMessage();this.#t=e;let t=this.#i(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this.#e.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderErrorMessage(e=this.#r){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${b(rA)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${this.#r}</p>
      </div>
      `;this.#o(),this.#e.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this.#n){}#i(){return`
    <figure class="recipe__fig">
      <img src="${this.#t.image}" alt="${this.#t.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.#t.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${b(rA)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this.#t.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${b(rA)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this.#t.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--decrease-servings">
            <svg>
              <use href="${b(rA)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${b(rA)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${b(rA)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${b(rA)}#icon-bookmark${this.#t?.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this.#t.ingredients.map(e=>`
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${b(rA)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity?new m(e.quantity).toString():""}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.unit}</span>
              ${e.description}
            </div>
          </li>`).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this.#t.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this.#t.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${b(rA)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
`}#a(e){return`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${b(rA)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`}renderBookmarks(e){let t=document.querySelector(".bookmarks__list"),r=document.querySelector(".message");if(t.innerHTML="",0===e.length){r||(r=document.createElement("div")).classList.add("message"),r.innerHTML=`
        <div>
          <svg>
            <use href="${b(rA)}#icon-smile"></use>
          </svg>
        </div>
        <p>
          No bookmarks yet. Find a nice recipe and bookmark it :)
        </p>`,t.append(r);return}r&&r.remove();let n=e.map(this.#a).join("");t.insertAdjacentHTML("afterbegin",n)}}var rR=new rI;class rD{#e=document.querySelector(".search");#s=document.querySelector(".results");#r="No recipe found for your query! Please try again :)";#n="We could not find recipes. Please try another one!";getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#c(),e}#c(){this.#e.querySelector(".search__field").value}addHandleSearch(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}renderSpinner(){let e=`
            <div class="spinner">
              <svg>
                <use href="${b(rA)}#icon-loader"></use>
              </svg>
            </div>
        `;this.#o(),this.#s.insertAdjacentHTML("afterbegin",e)}#o(){this.#s.innerHTML=""}renderErrorMessage(e=this.#r){let t=`
        <div class="error">
          <div>
            <svg>
              <use href="${b(rA)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${this.#r}</p>
        </div>
        `;this.#o(),this.#e.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this.#n){}#u(e){return`
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image_url}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title.substring(0,23)} ...</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${b(rA)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`}renderSearchResult(e){this.#o(),this.#s.insertAdjacentHTML("afterbegin",e.map(e=>this.#u(e)).join(""))}}var rC=new rD;class rU{#e=document.querySelector(".pagination");render(e,t){this.#e.innerHTML="";let r=this.#l(e.page,t);this.#e.insertAdjacentHTML("beforeend",r)}addHandleClick(e){this.#e.addEventListener("click",function(t){e(+t.target.closest(".btn--inline").dataset.goto)})}#l=function(e,t){let r=Math.ceil(t/10);return 1==e&&r>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${b(rA)}#icon-arrow-right"></use>
          </svg>
        </button>`:e==r&&r>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${b(rA)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<r?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${b(rA)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${b(rA)}#icon-arrow-right"></use>
          </svg>
        </button>`:void 0}}var rW=new rU;class rB{#e=document.querySelector(".upload");#f=document.querySelector(".add-recipe-window");#d=document.querySelector(".overlay");#p=document.querySelector(".nav__btn--add-recipe");#h=document.querySelector(".btn--close-modal");constructor(){this.#v(),this.#g()}#v(){this.#p.addEventListener("click",()=>{this.#d.classList.toggle("hidden"),this.#f.classList.toggle("hidden")})}#g(){this.#h.addEventListener("click",this.toggleWindow.bind(this)),this.#d.addEventListener("click",this.toggleWindow.bind(this))}toggleWindow=()=>{this.#d.classList.toggle("hidden"),this.#f.classList.toggle("hidden")};addHandlerUpload(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries(new FormData(this).entries()))})}}var rz=new rB;const rG=document.querySelector(".recipe"),rJ=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rR.renderSpinner(rG),rY(1),await rF(e),rR.render(rM.recipe)}catch(e){rR.renderErrorMessage(),console.log(e)}},rV=async function(){try{let e=rC.getQuery();if(!e)return;rC.renderSpinner(rG);let t=await rP(e),r=rT(1,t);rC.renderSearchResult(r),rW.render(rM.search,t.length)}catch(e){console.log(e)}},rY=function(e){let t=rM.search.data,r=rT(e,t);rC.renderSearchResult(r),rW.render(rM.search,t.length)},rQ=function(){rR.renderBookmarks(rM.bookmarks)},rK=async function(e){try{rR.renderSpinner(),await rH(e),rR.render(rM.recipe);let t=`${window.location.origin}/#${rM.recipe.id}`;window.history.pushState(null,"",t),rJ(),setTimeout(()=>{rz.toggleWindow()},1e3)}catch(e){console.error(e)}};rR.addHandlerRender(rJ),rR.addHandlerAddBookmark(function(){rN(rM.recipe),rR.renderBookmarks(rM.bookmarks),rR.update(rM.recipe),rQ()}),rC.addHandleSearch(rV),rW.addHandleClick(rY),rR.addHandlerDecreaseServings(function(){rx(rM.recipe.servings>=2?rM.recipe.servings-1:1),rR.update(rM.recipe)}),rR.addHandlerIncreaseServings(function(){rx(rM.recipe.servings+1),rR.update(rM.recipe)}),rz.addHandlerUpload(rK),rQ();
//# sourceMappingURL=index.c283f7b5.js.map
