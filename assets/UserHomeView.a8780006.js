import{_ as ie,o as W,c as F,p as De,a as xe,b as k,d as se,u as ke,e as x,f as V,g as S,t as ae,h as ue,A as $e,i as Oe,r as Ie,F as de,j as fe,k as K,l as Fe,m as Le,n as Ae,q as He,s as Re}from"./index.3c35c082.js";import{u as qe}from"./participantStore.d6d79681.js";import{u as Xe}from"./surveyStore.a244021b.js";import{l as Be}from"./surveyStorage.34c3760f.js";import{u as ze}from"./authUtils.826ae6e1.js";const Ge="/assets/all-done.5f5da768.svg";const Qe={},Ce=r=>(De("data-v-49b35497"),r=r(),xe(),r),Ve={class:"all-done-page"},je=Ce(()=>k("img",{src:Ge,alt:"All Done",draggable:"false"},null,-1)),Je=Ce(()=>k("h4",{class:"adp-text"},"All done for today!",-1)),Ke=[je,Je];function Ze(r,t){return W(),F("article",Ve,Ke)}const et=ie(Qe,[["render",Ze],["__scopeId","data-v-49b35497"]]);function H(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function j(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?j=function(e){return typeof e}:j=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(r)}function m(r){h(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||j(r)==="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function tt(r,t){h(2,arguments);var e=m(r).getTime(),a=H(t);return new Date(e+a)}var rt={};function X(){return rt}function R(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}function me(r){h(1,arguments);var t=m(r);return t.setHours(0,0,0,0),t}var at=864e5;function nt(r,t){h(2,arguments);var e=me(r),a=me(t),n=e.getTime()-R(e),o=a.getTime()-R(a);return Math.round((n-o)/at)}function G(r,t){h(2,arguments);var e=m(r),a=m(t),n=e.getTime()-a.getTime();return n<0?-1:n>0?1:n}var ot=1e3;function J(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?J=function(e){return typeof e}:J=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(r)}function it(r){return h(1,arguments),r instanceof Date||J(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function st(r){if(h(1,arguments),!it(r)&&typeof r!="number")return!1;var t=m(r);return!isNaN(Number(t))}function ut(r,t){h(2,arguments);var e=m(r),a=m(t),n=e.getFullYear()-a.getFullYear(),o=e.getMonth()-a.getMonth();return n*12+o}function ve(r,t){var e=r.getFullYear()-t.getFullYear()||r.getMonth()-t.getMonth()||r.getDate()-t.getDate()||r.getHours()-t.getHours()||r.getMinutes()-t.getMinutes()||r.getSeconds()-t.getSeconds()||r.getMilliseconds()-t.getMilliseconds();return e<0?-1:e>0?1:e}function lt(r,t){h(2,arguments);var e=m(r),a=m(t),n=ve(e,a),o=Math.abs(nt(e,a));e.setDate(e.getDate()-n*o);var i=Number(ve(e,a)===-n),s=n*(o-i);return s===0?0:s}function ct(r,t){return h(2,arguments),m(r).getTime()-m(t).getTime()}var he={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},dt="trunc";function ft(r){return r?he[r]:he[dt]}function mt(r){h(1,arguments);var t=m(r);return t.setHours(23,59,59,999),t}function vt(r){h(1,arguments);var t=m(r),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function ht(r){h(1,arguments);var t=m(r);return mt(t).getTime()===vt(t).getTime()}function gt(r,t){h(2,arguments);var e=m(r),a=m(t),n=G(e,a),o=Math.abs(ut(e,a)),i;if(o<1)i=0;else{e.getMonth()===1&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-n*o);var s=G(e,a)===-n;ht(m(r))&&o===1&&G(r,a)===1&&(s=!1),i=n*(o-Number(s))}return i===0?0:i}function yt(r,t,e){h(2,arguments);var a=ct(r,t)/1e3;return ft(e==null?void 0:e.roundingMethod)(a)}function pt(r,t){h(2,arguments);var e=H(t);return tt(r,-e)}var wt=864e5;function bt(r){h(1,arguments);var t=m(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=e-a;return Math.floor(n/wt)+1}function Z(r){h(1,arguments);var t=1,e=m(r),a=e.getUTCDay(),n=(a<t?7:0)+a-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function Pe(r){h(1,arguments);var t=m(r),e=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=Z(a),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var i=Z(o);return t.getTime()>=n.getTime()?e+1:t.getTime()>=i.getTime()?e:e-1}function _t(r){h(1,arguments);var t=Pe(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var a=Z(e);return a}var Mt=6048e5;function Tt(r){h(1,arguments);var t=m(r),e=Z(t).getTime()-_t(t).getTime();return Math.round(e/Mt)+1}function ee(r,t){var e,a,n,o,i,s,u,c;h(1,arguments);var v=X(),f=H((e=(a=(n=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:v.weekStartsOn)!==null&&a!==void 0?a:(u=v.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&e!==void 0?e:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var b=m(r),l=b.getUTCDay(),y=(l<f?7:0)+l-f;return b.setUTCDate(b.getUTCDate()-y),b.setUTCHours(0,0,0,0),b}function We(r,t){var e,a,n,o,i,s,u,c;h(1,arguments);var v=m(r),f=v.getUTCFullYear(),b=X(),l=H((e=(a=(n=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:b.firstWeekContainsDate)!==null&&a!==void 0?a:(u=b.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(f+1,0,l),y.setUTCHours(0,0,0,0);var w=ee(y,t),M=new Date(0);M.setUTCFullYear(f,0,l),M.setUTCHours(0,0,0,0);var T=ee(M,t);return v.getTime()>=w.getTime()?f+1:v.getTime()>=T.getTime()?f:f-1}function St(r,t){var e,a,n,o,i,s,u,c;h(1,arguments);var v=X(),f=H((e=(a=(n=(o=t==null?void 0:t.firstWeekContainsDate)!==null&&o!==void 0?o:t==null||(i=t.locale)===null||i===void 0||(s=i.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:v.firstWeekContainsDate)!==null&&a!==void 0?a:(u=v.locale)===null||u===void 0||(c=u.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1),b=We(r,t),l=new Date(0);l.setUTCFullYear(b,0,f),l.setUTCHours(0,0,0,0);var y=ee(l,t);return y}var Dt=6048e5;function xt(r,t){h(1,arguments);var e=m(r),a=ee(e,t).getTime()-St(e,t).getTime();return Math.round(a/Dt)+1}function g(r,t){for(var e=r<0?"-":"",a=Math.abs(r).toString();a.length<t;)a="0"+a;return e+a}var kt={y:function(t,e){var a=t.getUTCFullYear(),n=a>0?a:1-a;return g(e==="yy"?n%100:n,e.length)},M:function(t,e){var a=t.getUTCMonth();return e==="M"?String(a+1):g(a+1,2)},d:function(t,e){return g(t.getUTCDate(),e.length)},a:function(t,e){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(t,e){return g(t.getUTCHours()%12||12,e.length)},H:function(t,e){return g(t.getUTCHours(),e.length)},m:function(t,e){return g(t.getUTCMinutes(),e.length)},s:function(t,e){return g(t.getUTCSeconds(),e.length)},S:function(t,e){var a=e.length,n=t.getUTCMilliseconds(),o=Math.floor(n*Math.pow(10,a-3));return g(o,e.length)}};const I=kt;var q={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ot={G:function(t,e,a){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return a.era(n,{width:"abbreviated"});case"GGGGG":return a.era(n,{width:"narrow"});case"GGGG":default:return a.era(n,{width:"wide"})}},y:function(t,e,a){if(e==="yo"){var n=t.getUTCFullYear(),o=n>0?n:1-n;return a.ordinalNumber(o,{unit:"year"})}return I.y(t,e)},Y:function(t,e,a,n){var o=We(t,n),i=o>0?o:1-o;if(e==="YY"){var s=i%100;return g(s,2)}return e==="Yo"?a.ordinalNumber(i,{unit:"year"}):g(i,e.length)},R:function(t,e){var a=Pe(t);return g(a,e.length)},u:function(t,e){var a=t.getUTCFullYear();return g(a,e.length)},Q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return g(n,2);case"Qo":return a.ordinalNumber(n,{unit:"quarter"});case"QQQ":return a.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,a){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return g(n,2);case"qo":return a.ordinalNumber(n,{unit:"quarter"});case"qqq":return a.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,a){var n=t.getUTCMonth();switch(e){case"M":case"MM":return I.M(t,e);case"Mo":return a.ordinalNumber(n+1,{unit:"month"});case"MMM":return a.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,a){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return g(n+1,2);case"Lo":return a.ordinalNumber(n+1,{unit:"month"});case"LLL":return a.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,a,n){var o=xt(t,n);return e==="wo"?a.ordinalNumber(o,{unit:"week"}):g(o,e.length)},I:function(t,e,a){var n=Tt(t);return e==="Io"?a.ordinalNumber(n,{unit:"week"}):g(n,e.length)},d:function(t,e,a){return e==="do"?a.ordinalNumber(t.getUTCDate(),{unit:"date"}):I.d(t,e)},D:function(t,e,a){var n=bt(t);return e==="Do"?a.ordinalNumber(n,{unit:"dayOfYear"}):g(n,e.length)},E:function(t,e,a){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return a.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(n,{width:"short",context:"formatting"});case"EEEE":default:return a.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,a,n){var o=t.getUTCDay(),i=(o-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return g(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(o,{width:"short",context:"formatting"});case"eeee":default:return a.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,a,n){var o=t.getUTCDay(),i=(o-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return g(i,e.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(o,{width:"narrow",context:"standalone"});case"cccccc":return a.day(o,{width:"short",context:"standalone"});case"cccc":default:return a.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,a){var n=t.getUTCDay(),o=n===0?7:n;switch(e){case"i":return String(o);case"ii":return g(o,e.length);case"io":return a.ordinalNumber(o,{unit:"day"});case"iii":return a.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(n,{width:"short",context:"formatting"});case"iiii":default:return a.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,a){var n=t.getUTCHours(),o=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,a){var n=t.getUTCHours(),o;switch(n===12?o=q.noon:n===0?o=q.midnight:o=n/12>=1?"pm":"am",e){case"b":case"bb":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,a){var n=t.getUTCHours(),o;switch(n>=17?o=q.evening:n>=12?o=q.afternoon:n>=4?o=q.morning:o=q.night,e){case"B":case"BB":case"BBB":return a.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,a){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return I.h(t,e)},H:function(t,e,a){return e==="Ho"?a.ordinalNumber(t.getUTCHours(),{unit:"hour"}):I.H(t,e)},K:function(t,e,a){var n=t.getUTCHours()%12;return e==="Ko"?a.ordinalNumber(n,{unit:"hour"}):g(n,e.length)},k:function(t,e,a){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?a.ordinalNumber(n,{unit:"hour"}):g(n,e.length)},m:function(t,e,a){return e==="mo"?a.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):I.m(t,e)},s:function(t,e,a){return e==="so"?a.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):I.s(t,e)},S:function(t,e){return I.S(t,e)},X:function(t,e,a,n){var o=n._originalDate||t,i=o.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return ye(i);case"XXXX":case"XX":return A(i);case"XXXXX":case"XXX":default:return A(i,":")}},x:function(t,e,a,n){var o=n._originalDate||t,i=o.getTimezoneOffset();switch(e){case"x":return ye(i);case"xxxx":case"xx":return A(i);case"xxxxx":case"xxx":default:return A(i,":")}},O:function(t,e,a,n){var o=n._originalDate||t,i=o.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ge(i,":");case"OOOO":default:return"GMT"+A(i,":")}},z:function(t,e,a,n){var o=n._originalDate||t,i=o.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ge(i,":");case"zzzz":default:return"GMT"+A(i,":")}},t:function(t,e,a,n){var o=n._originalDate||t,i=Math.floor(o.getTime()/1e3);return g(i,e.length)},T:function(t,e,a,n){var o=n._originalDate||t,i=o.getTime();return g(i,e.length)}};function ge(r,t){var e=r>0?"-":"+",a=Math.abs(r),n=Math.floor(a/60),o=a%60;if(o===0)return e+String(n);var i=t||"";return e+String(n)+i+g(o,2)}function ye(r,t){if(r%60===0){var e=r>0?"-":"+";return e+g(Math.abs(r)/60,2)}return A(r,t)}function A(r,t){var e=t||"",a=r>0?"-":"+",n=Math.abs(r),o=g(Math.floor(n/60),2),i=g(n%60,2);return a+o+e+i}const Ct=Ot;var pe=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ue=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Pt=function(t,e){var a=t.match(/(P+)(p+)?/)||[],n=a[1],o=a[2];if(!o)return pe(t,e);var i;switch(n){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",pe(n,e)).replace("{{time}}",Ue(o,e))},Wt={p:Ue,P:Pt};const Ut=Wt;var Nt=["D","DD"],Yt=["YY","YYYY"];function Et(r){return Nt.indexOf(r)!==-1}function $t(r){return Yt.indexOf(r)!==-1}function we(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var It={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ft=function(t,e,a){var n,o=It[t];return typeof o=="string"?n=o:e===1?n=o.one:n=o.other.replace("{{count}}",e.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const Lt=Ft;function ne(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,a=r.formats[e]||r.formats[r.defaultWidth];return a}}var At={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ht={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Rt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},qt={date:ne({formats:At,defaultWidth:"full"}),time:ne({formats:Ht,defaultWidth:"full"}),dateTime:ne({formats:Rt,defaultWidth:"full"})};const Xt=qt;var Bt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},zt=function(t,e,a,n){return Bt[t]};const Gt=zt;function B(r){return function(t,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&r.formattingValues){var o=r.defaultFormattingWidth||r.defaultWidth,i=e!=null&&e.width?String(e.width):o;n=r.formattingValues[i]||r.formattingValues[o]}else{var s=r.defaultWidth,u=e!=null&&e.width?String(e.width):r.defaultWidth;n=r.values[u]||r.values[s]}var c=r.argumentCallback?r.argumentCallback(t):t;return n[c]}}var Qt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Vt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},jt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Jt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Kt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Zt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},er=function(t,e){var a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},tr={ordinalNumber:er,era:B({values:Qt,defaultWidth:"wide"}),quarter:B({values:Vt,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:B({values:jt,defaultWidth:"wide"}),day:B({values:Jt,defaultWidth:"wide"}),dayPeriod:B({values:Kt,defaultWidth:"wide",formattingValues:Zt,defaultFormattingWidth:"wide"})};const rr=tr;function z(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&r.matchPatterns[a]||r.matchPatterns[r.defaultMatchWidth],o=t.match(n);if(!o)return null;var i=o[0],s=a&&r.parsePatterns[a]||r.parsePatterns[r.defaultParseWidth],u=Array.isArray(s)?nr(s,function(f){return f.test(i)}):ar(s,function(f){return f.test(i)}),c;c=r.valueCallback?r.valueCallback(u):u,c=e.valueCallback?e.valueCallback(c):c;var v=t.slice(i.length);return{value:c,rest:v}}}function ar(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function nr(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function or(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(r.matchPattern);if(!a)return null;var n=a[0],o=t.match(r.parsePattern);if(!o)return null;var i=r.valueCallback?r.valueCallback(o[0]):o[0];i=e.valueCallback?e.valueCallback(i):i;var s=t.slice(n.length);return{value:i,rest:s}}}var ir=/^(\d+)(th|st|nd|rd)?/i,sr=/\d+/i,ur={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},lr={any:[/^b/i,/^(a|c)/i]},cr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},dr={any:[/1/i,/2/i,/3/i,/4/i]},fr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},mr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},hr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},gr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pr={ordinalNumber:or({matchPattern:ir,parsePattern:sr,valueCallback:function(t){return parseInt(t,10)}}),era:z({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:lr,defaultParseWidth:"any"}),quarter:z({matchPatterns:cr,defaultMatchWidth:"wide",parsePatterns:dr,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:fr,defaultMatchWidth:"wide",parsePatterns:mr,defaultParseWidth:"any"}),day:z({matchPatterns:vr,defaultMatchWidth:"wide",parsePatterns:hr,defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:gr,defaultMatchWidth:"any",parsePatterns:yr,defaultParseWidth:"any"})};const wr=pr;var br={code:"en-US",formatDistance:Lt,formatLong:Xt,formatRelative:Gt,localize:rr,match:wr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const le=br;var _r=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Tr=/^'([^]*?)'?$/,Sr=/''/g,Dr=/[a-zA-Z]/;function xr(r,t,e){var a,n,o,i,s,u,c,v,f,b,l,y,w,M,T,O,d,p;h(2,arguments);var D=String(t),C=X(),U=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:C.locale)!==null&&a!==void 0?a:le,N=H((o=(i=(s=(u=e==null?void 0:e.firstWeekContainsDate)!==null&&u!==void 0?u:e==null||(c=e.locale)===null||c===void 0||(v=c.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&s!==void 0?s:C.firstWeekContainsDate)!==null&&i!==void 0?i:(f=C.locale)===null||f===void 0||(b=f.options)===null||b===void 0?void 0:b.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=H((l=(y=(w=(M=e==null?void 0:e.weekStartsOn)!==null&&M!==void 0?M:e==null||(T=e.locale)===null||T===void 0||(O=T.options)===null||O===void 0?void 0:O.weekStartsOn)!==null&&w!==void 0?w:C.weekStartsOn)!==null&&y!==void 0?y:(d=C.locale)===null||d===void 0||(p=d.options)===null||p===void 0?void 0:p.weekStartsOn)!==null&&l!==void 0?l:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var _=m(r);if(!st(_))throw new RangeError("Invalid time value");var Y=R(_),L=pt(_,Y),Ye={firstWeekContainsDate:N,weekStartsOn:E,locale:U,_originalDate:_},Ee=D.match(Mr).map(function(P){var $=P[0];if($==="p"||$==="P"){var Q=Ut[$];return Q(P,U.formatLong)}return P}).join("").match(_r).map(function(P){if(P==="''")return"'";var $=P[0];if($==="'")return kr(P);var Q=Ct[$];if(Q)return!(e!=null&&e.useAdditionalWeekYearTokens)&&$t(P)&&we(P,t,String(r)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Et(P)&&we(P,t,String(r)),Q(L,P,U.localize,Ye);if($.match(Dr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+$+"`");return P}).join("");return Ee}function kr(r){var t=r.match(Tr);return t?t[1].replace(Sr,"'"):r}function ce(r,t){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r}function Ne(r){return ce({},r)}var be=1440,Or=2520,oe=43200,Cr=86400;function Pr(r,t,e){var a,n;h(2,arguments);var o=X(),i=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:o.locale)!==null&&a!==void 0?a:le;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=G(r,t);if(isNaN(s))throw new RangeError("Invalid time value");var u=ce(Ne(e),{addSuffix:Boolean(e==null?void 0:e.addSuffix),comparison:s}),c,v;s>0?(c=m(t),v=m(r)):(c=m(r),v=m(t));var f=yt(v,c),b=(R(v)-R(c))/1e3,l=Math.round((f-b)/60),y;if(l<2)return e!=null&&e.includeSeconds?f<5?i.formatDistance("lessThanXSeconds",5,u):f<10?i.formatDistance("lessThanXSeconds",10,u):f<20?i.formatDistance("lessThanXSeconds",20,u):f<40?i.formatDistance("halfAMinute",0,u):f<60?i.formatDistance("lessThanXMinutes",1,u):i.formatDistance("xMinutes",1,u):l===0?i.formatDistance("lessThanXMinutes",1,u):i.formatDistance("xMinutes",l,u);if(l<45)return i.formatDistance("xMinutes",l,u);if(l<90)return i.formatDistance("aboutXHours",1,u);if(l<be){var w=Math.round(l/60);return i.formatDistance("aboutXHours",w,u)}else{if(l<Or)return i.formatDistance("xDays",1,u);if(l<oe){var M=Math.round(l/be);return i.formatDistance("xDays",M,u)}else if(l<Cr)return y=Math.round(l/oe),i.formatDistance("aboutXMonths",y,u)}if(y=gt(v,c),y<12){var T=Math.round(l/oe);return i.formatDistance("xMonths",T,u)}else{var O=y%12,d=Math.floor(y/12);return O<3?i.formatDistance("aboutXYears",d,u):O<9?i.formatDistance("overXYears",d,u):i.formatDistance("almostXYears",d+1,u)}}var _e=1e3*60,te=60*24,Me=te*30,Te=te*365;function Wr(r,t,e){var a,n,o;h(2,arguments);var i=X(),s=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:i.locale)!==null&&a!==void 0?a:le;if(!s.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var u=G(r,t);if(isNaN(u))throw new RangeError("Invalid time value");var c=ce(Ne(e),{addSuffix:Boolean(e==null?void 0:e.addSuffix),comparison:u}),v,f;u>0?(v=m(t),f=m(r)):(v=m(r),f=m(t));var b=String((o=e==null?void 0:e.roundingMethod)!==null&&o!==void 0?o:"round"),l;if(b==="floor")l=Math.floor;else if(b==="ceil")l=Math.ceil;else if(b==="round")l=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var y=f.getTime()-v.getTime(),w=y/_e,M=R(f)-R(v),T=(y-M)/_e,O=e==null?void 0:e.unit,d;if(O?d=String(O):w<1?d="second":w<60?d="minute":w<te?d="hour":T<Me?d="day":T<Te?d="month":d="year",d==="second"){var p=l(y/1e3);return s.formatDistance("xSeconds",p,c)}else if(d==="minute"){var D=l(w);return s.formatDistance("xMinutes",D,c)}else if(d==="hour"){var C=l(w/60);return s.formatDistance("xHours",C,c)}else if(d==="day"){var U=l(T/te);return s.formatDistance("xDays",U,c)}else if(d==="month"){var N=l(T/Me);return N===12&&O!=="month"?s.formatDistance("xYears",1,c):s.formatDistance("xMonths",N,c)}else if(d==="year"){var E=l(T/Te);return s.formatDistance("xYears",E,c)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function Ur(r,t){return h(1,arguments),Wr(r,Date.now(),t)}function Nr(r){return h(1,arguments),m(r).getTime()<Date.now()}function Yr(r){return h(1,arguments),r*ot}const Er={class:"task-panel"},$r={class:"tp-body"},Ir={class:"tp-icon"},Fr={class:"tp-header"},Lr={class:"tp-info utr-text-caption"},Ar={class:"tp-caption"},Hr={class:"tp-caption-info"},Rr={key:0,class:"tp-caption"},qr=["datetime"],Xr=se({__name:"TaskPanel",props:{type:null,heroStyle:{type:Boolean},locked:{type:Boolean},started:{type:Boolean},title:null,estimateSeconds:null,expiresAt:null},emits:["goto"],setup(r,{emit:t}){const e=r;Oe(w=>({"00212af5":S(f),"576b2986":S(b),"41e28d72":S(u),"0c74af02":S(l),"8d6b264e":S(y),"82146b98":S(i)}));const a=ke(),n=x(()=>({survey:"clipboard-text-clock",resource:"file-move-outline"})[e.type]),o=x(()=>e.locked?"Locked":e.started&&e.type==="survey"?"Continue survey":{survey:"Begin Survey",resource:"View Resource"}[e.type]),i=x(()=>`min(100%, ${{small:"160px",medium:"200px",large:"256px"}[a.textSize]})`),s=x(()=>({small:18,medium:24,large:36})[a.textSize]),u=x(()=>({small:"30px",medium:"40px",large:"64px"})[a.textSize]),c=x(()=>Pr(0,Yr(e.estimateSeconds),{includeSeconds:!0})),v=x(()=>{const w=Ur(e.expiresAt,{roundingMethod:"ceil"});if(Nr(e.expiresAt))return`${w} ago`;const M=lt(e.expiresAt,new Date);return M<1?"Complete by the end of today":M<2?"Complete by the end of tomorrow":M<7?`Complete within ${w}`:`Complete by ${xr(e.expiresAt,"do MMMM")}`}),f=x(()=>e.heroStyle?"var(--utr-dark-orange)":"white"),b=x(()=>e.heroStyle?"white":"var(--utr-grey-text)"),l=x(()=>e.heroStyle?"white":"var(--utr-dark-orange)"),y=x(()=>e.heroStyle?"var(--utr-dark-orange)":"white");return(w,M)=>{const T=Ie("mdicon");return W(),F("section",Er,[k("div",$r,[k("div",Ir,[V(T,{name:S(n),size:S(s)},null,8,["name","size"])]),k("h2",Fr,ae(r.title),1),k("div",Lr,[k("span",Ar,[V(T,{class:"tp-caption-icon",name:"timer-outline",size:"16"}),k("span",Hr,ae(S(c)),1)]),r.locked?ue("",!0):(W(),F("span",Rr,[V(T,{class:"tp-caption-icon",name:"clock-time-four-outline",size:"16"}),k("time",{class:"tp-caption-info",datetime:r.expiresAt.toISOString()},ae(S(v)),9,qr)]))]),V($e,{class:"tp-goto-btn",label:S(o),disabled:r.locked,"disabled-color":"var(--utr-grey-text)",color:S(l),"text-color":r.locked?"white":S(y),onClick:M[0]||(M[0]=O=>t("goto"))},null,8,["label","disabled","color","text-color"])])])}}});const Se=ie(Xr,[["__scopeId","data-v-e7745154"]]),re=r=>(De("data-v-d0e2e231"),r=r(),xe(),r),Br={class:"user-home-layout"},zr=re(()=>k("h3",{class:"uhl-survey-group-header"},"Available surveys",-1)),Gr=re(()=>k("h4",{class:"uhl-survey-group-subheader"},"Please complete all surveys below.",-1)),Qr={class:"uhl-survey-list"},Vr={key:0},jr=re(()=>k("h3",{class:"uhl-survey-group-header"},"Next available surveys",-1)),Jr=re(()=>k("h4",{class:"uhl-survey-group-subheader"},"These will be unlocked when you complete your available surveys.",-1)),Kr={class:"uhl-survey-list"},Zr=se({__name:"UserHomeLayout",props:{availableSurveys:null,lockedSurveys:null,startedSurveyIds:null},emits:["select"],setup(r,{emit:t}){Oe(o=>({aafeac4c:S(a),"9bd9fd44":S(n)}));const e=ke(),a=x(()=>e.breakpoint==="mobile"||e.breakpoint==="small"?"2rem":"80px"),n=x(()=>e.breakpoint==="mobile"||e.breakpoint==="small"?"1rem":"2rem");return(o,i)=>(W(),F("div",Br,[k("article",null,[zr,Gr,k("div",Qr,[(W(!0),F(de,null,fe(r.availableSurveys,s=>{var u;return W(),K(Se,{key:s.id,type:"survey","hero-style":!1,locked:!1,started:r.startedSurveyIds.includes(s.id),title:s.displayName,"estimate-seconds":parseInt((u=s.estimatedDuration)!=null?u:"300"),"expires-at":new Date(s.endTime),onGoto:c=>t("select",s.id)},null,8,["started","title","estimate-seconds","expires-at","onGoto"])}),128))])]),r.lockedSurveys&&r.lockedSurveys.length>0?(W(),F("article",Vr,[jr,Jr,k("div",Kr,[(W(!0),F(de,null,fe(r.lockedSurveys,s=>{var u;return W(),K(Se,{key:s.id,type:"survey","hero-style":!1,locked:!0,started:!1,title:s.displayName,"estimate-seconds":parseInt((u=s.estimatedDuration)!=null?u:"300"),"expires-at":new Date(s.endTime)},null,8,["title","estimate-seconds","expires-at"])}),128))])])):ue("",!0)]))}});const ea=ie(Zr,[["__scopeId","data-v-d0e2e231"]]),ta={class:"user-home-view"},sa=se({__name:"UserHomeView",setup(r){const{user:t,getAccessTokenOrRedirect:e}=ze(),a=t,n=Re();function o(d){n.push(d)}const i=Xe(),s=qe(),u=x(()=>a.value.user_metadata.participantId),c=x(()=>s.getCachedParticipantSurveys(u.value)),v=["baseline","intervention","video-feedback","mental-health","dce","follow-up"];function f(d){if(!v.some(p=>p===d))throw new Error(`Unknown survey name: ${d}`)}function b(d){const p=/-\d$/;let D=d;return p.test(d)&&(D=d.slice(0,-2)),f(D),D}const l=x(()=>{if(!c.value)return null;const d=c.value.filter(_=>!_.completed&&!i.completedSurveys[_.id]).map(_=>[b(_.name),_]),p=new Map(d.map(_=>[_[0],_])),D=[],C=[],U=p.get("baseline");if(U)p.delete("baseline"),D.push(U),C.push(...p.values());else{const _=p.get("intervention"),Y=p.get("video-feedback"),L=p.get("mental-health");_&&Y&&L&&(p.delete("video-feedback"),p.delete("mental-health"),C.push(Y),C.push(L)),D.push(...p.values())}const N=(_,Y)=>v.indexOf(_[0])-v.indexOf(Y[0]);D.sort(N),C.sort(N);const E=[];for(const[_,Y]of D){const L=Be(`userSurvey:${Y.id}`);L&&L.oldPageIndex&&E.push(Y.id)}return{available:D.map(_=>_[1]),locked:C.map(_=>_[1]),started:E}}),y=x(()=>{var d,p;return((d=l.value)==null?void 0:d.available.length)===0&&((p=l.value)==null?void 0:p.locked.length)===0}),w=async()=>{const d=await e();s.cacheParticipantSurveys(u.value,d,!0)},M=Fe();async function T(){try{await w()}catch(C){console.log("Failed to download surveys",C)}const d=c.value,D=d&&d.length>0?30:5;M.value=setTimeout(T,D*1e3)}const O=Le();return Ae(async()=>{O.setPageTitle("Your surveys"),O.openLoadingOverlay();try{await T()}finally{O.closeLoadingOverlay()}}),He(()=>{clearTimeout(M.value)}),(d,p)=>(W(),F("div",ta,[S(y)?(W(),K(et,{key:0})):S(l)?(W(),K(ea,{key:1,"available-surveys":S(l).available,"locked-surveys":S(l).locked,"started-survey-ids":S(l).started,onSelect:p[0]||(p[0]=D=>o(`/survey/${D}`))},null,8,["available-surveys","locked-surveys","started-survey-ids"])):ue("",!0)]))}});export{sa as default};
