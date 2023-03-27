import{_ as H,o as D,c as I,p as ae,a as ne,b as S,d as j,u as re,e as b,f as F,g,t as U,A as de,h as oe,r as me,F as B,i as J,j as fe,k as R,l as he,m as ve,n as ge,q as pe,s as ye,v as be}from"./index.238ed304.js";import{u as _e}from"./participantStore.7a389958.js";import{u as Se}from"./surveyStore.d97c2923.js";import"./storeHelpers.8c23d41b.js";const Me="/bdi-under-the-radar-dev.github.io/assets/all-done.5f5da768.svg";const we={},ie=e=>(ae("data-v-49b35497"),e=e(),ne(),e),xe={class:"all-done-page"},De=ie(()=>S("img",{src:Me,alt:"All Done",draggable:"false"},null,-1)),Te=ie(()=>S("h4",{class:"adp-text"},"All done for today!",-1)),ke=[De,Te];function Pe(e,a){return D(),I("article",xe,ke)}const Ne=H(we,[["render",Pe],["__scopeId","data-v-49b35497"]]);function x(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function E(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?E=function(t){return typeof t}:E=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function m(e){x(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||E(e)==="object"&&a==="[object Date]"?new Date(e.getTime()):typeof e=="number"||a==="[object Number]"?new Date(e):((typeof e=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var Ie={};function se(){return Ie}function L(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}function C(e,a){x(2,arguments);var t=m(e),n=m(a),r=t.getTime()-n.getTime();return r<0?-1:r>0?1:r}var We=1e3;function Ae(e,a){x(2,arguments);var t=m(e),n=m(a),r=t.getFullYear()-n.getFullYear(),l=t.getMonth()-n.getMonth();return r*12+l}function $e(e,a){return x(2,arguments),m(e).getTime()-m(a).getTime()}var Q={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(a){return a<0?Math.ceil(a):Math.floor(a)}},Ce="trunc";function Oe(e){return e?Q[e]:Q[Ce]}function ze(e){x(1,arguments);var a=m(e);return a.setHours(23,59,59,999),a}function Fe(e){x(1,arguments);var a=m(e),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}function Ee(e){x(1,arguments);var a=m(e);return ze(a).getTime()===Fe(a).getTime()}function Re(e,a){x(2,arguments);var t=m(e),n=m(a),r=C(t,n),l=Math.abs(Ae(t,n)),o;if(l<1)o=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-r*l);var i=C(t,n)===-r;Ee(m(e))&&l===1&&C(e,n)===1&&(i=!1),o=r*(l-Number(i))}return o===0?0:o}function Le(e,a,t){x(2,arguments);var n=$e(e,a)/1e3;return Oe(t==null?void 0:t.roundingMethod)(n)}var Ye={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ue=function(a,t,n){var r,l=Ye[a];return typeof l=="string"?r=l:t===1?r=l.one:r=l.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const Xe=Ue;function X(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}}var Ve={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},He={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},je={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},qe={date:X({formats:Ve,defaultWidth:"full"}),time:X({formats:He,defaultWidth:"full"}),dateTime:X({formats:je,defaultWidth:"full"})};const Be=qe;var Je={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Qe=function(a,t,n,r){return Je[a]};const Ge=Qe;function A(e){return function(a,t){var n=t!=null&&t.context?String(t.context):"standalone",r;if(n==="formatting"&&e.formattingValues){var l=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):l;r=e.formattingValues[o]||e.formattingValues[l]}else{var i=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[s]||e.values[i]}var d=e.argumentCallback?e.argumentCallback(a):a;return r[d]}}var Ke={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ze={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},et={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},at={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},nt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},rt=function(a,t){var n=Number(a),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ot={ordinalNumber:rt,era:A({values:Ke,defaultWidth:"wide"}),quarter:A({values:Ze,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:A({values:et,defaultWidth:"wide"}),day:A({values:tt,defaultWidth:"wide"}),dayPeriod:A({values:at,defaultWidth:"wide",formattingValues:nt,defaultFormattingWidth:"wide"})};const it=ot;function $(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=a.match(r);if(!l)return null;var o=l[0],i=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(i)?ut(i,function(h){return h.test(o)}):st(i,function(h){return h.test(o)}),d;d=e.valueCallback?e.valueCallback(s):s,d=t.valueCallback?t.valueCallback(d):d;var p=a.slice(o.length);return{value:d,rest:p}}}function st(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function ut(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function lt(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var r=n[0],l=a.match(e.parsePattern);if(!l)return null;var o=e.valueCallback?e.valueCallback(l[0]):l[0];o=t.valueCallback?t.valueCallback(o):o;var i=a.slice(r.length);return{value:o,rest:i}}}var ct=/^(\d+)(th|st|nd|rd)?/i,dt=/\d+/i,mt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ft={any:[/^b/i,/^(a|c)/i]},ht={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vt={any:[/1/i,/2/i,/3/i,/4/i]},gt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},bt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_t={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},St={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Mt={ordinalNumber:lt({matchPattern:ct,parsePattern:dt,valueCallback:function(a){return parseInt(a,10)}}),era:$({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:ft,defaultParseWidth:"any"}),quarter:$({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:$({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),day:$({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:_t,defaultMatchWidth:"any",parsePatterns:St,defaultParseWidth:"any"})};const wt=Mt;var xt={code:"en-US",formatDistance:Xe,formatLong:Be,formatRelative:Ge,localize:it,match:wt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ue=xt;function q(e,a){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}function le(e){return q({},e)}var G=1440,Dt=2520,V=43200,Tt=86400;function kt(e,a,t){var n,r;x(2,arguments);var l=se(),o=(n=(r=t==null?void 0:t.locale)!==null&&r!==void 0?r:l.locale)!==null&&n!==void 0?n:ue;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=C(e,a);if(isNaN(i))throw new RangeError("Invalid time value");var s=q(le(t),{addSuffix:Boolean(t==null?void 0:t.addSuffix),comparison:i}),d,p;i>0?(d=m(a),p=m(e)):(d=m(e),p=m(a));var h=Le(p,d),k=(L(p)-L(d))/1e3,c=Math.round((h-k)/60),_;if(c<2)return t!=null&&t.includeSeconds?h<5?o.formatDistance("lessThanXSeconds",5,s):h<10?o.formatDistance("lessThanXSeconds",10,s):h<20?o.formatDistance("lessThanXSeconds",20,s):h<40?o.formatDistance("halfAMinute",0,s):h<60?o.formatDistance("lessThanXMinutes",1,s):o.formatDistance("xMinutes",1,s):c===0?o.formatDistance("lessThanXMinutes",1,s):o.formatDistance("xMinutes",c,s);if(c<45)return o.formatDistance("xMinutes",c,s);if(c<90)return o.formatDistance("aboutXHours",1,s);if(c<G){var v=Math.round(c/60);return o.formatDistance("aboutXHours",v,s)}else{if(c<Dt)return o.formatDistance("xDays",1,s);if(c<V){var P=Math.round(c/G);return o.formatDistance("xDays",P,s)}else if(c<Tt)return _=Math.round(c/V),o.formatDistance("aboutXMonths",_,s)}if(_=Re(p,d),_<12){var M=Math.round(c/V);return o.formatDistance("xMonths",M,s)}else{var T=_%12,u=Math.floor(_/12);return T<3?o.formatDistance("aboutXYears",u,s):T<9?o.formatDistance("overXYears",u,s):o.formatDistance("almostXYears",u+1,s)}}var K=1e3*60,Y=60*24,Z=Y*30,ee=Y*365;function Pt(e,a,t){var n,r,l;x(2,arguments);var o=se(),i=(n=(r=t==null?void 0:t.locale)!==null&&r!==void 0?r:o.locale)!==null&&n!==void 0?n:ue;if(!i.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var s=C(e,a);if(isNaN(s))throw new RangeError("Invalid time value");var d=q(le(t),{addSuffix:Boolean(t==null?void 0:t.addSuffix),comparison:s}),p,h;s>0?(p=m(a),h=m(e)):(p=m(e),h=m(a));var k=String((l=t==null?void 0:t.roundingMethod)!==null&&l!==void 0?l:"round"),c;if(k==="floor")c=Math.floor;else if(k==="ceil")c=Math.ceil;else if(k==="round")c=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var _=h.getTime()-p.getTime(),v=_/K,P=L(h)-L(p),M=(_-P)/K,T=t==null?void 0:t.unit,u;if(T?u=String(T):v<1?u="second":v<60?u="minute":v<Y?u="hour":M<Z?u="day":M<ee?u="month":u="year",u==="second"){var f=c(_/1e3);return i.formatDistance("xSeconds",f,d)}else if(u==="minute"){var w=c(v);return i.formatDistance("xMinutes",w,d)}else if(u==="hour"){var N=c(v/60);return i.formatDistance("xHours",N,d)}else if(u==="day"){var O=c(M/Y);return i.formatDistance("xDays",O,d)}else if(u==="month"){var W=c(M/Z);return W===12&&T!=="month"?i.formatDistance("xYears",1,d):i.formatDistance("xMonths",W,d)}else if(u==="year"){var y=c(M/ee);return i.formatDistance("xYears",y,d)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function Nt(e,a){return x(1,arguments),Pt(e,Date.now(),a)}function It(e){return x(1,arguments),m(e).getTime()<Date.now()}function Wt(e){return x(1,arguments),e*We}const At={class:"task-panel"},$t={class:"tp-body"},Ct={class:"tp-icon"},Ot={class:"tp-header"},zt={class:"tp-info utr-text-caption"},Ft={class:"tp-caption"},Et={class:"tp-caption-info"},Rt={class:"tp-caption"},Lt=["datetime"],Yt=j({__name:"TaskPanel",props:{type:null,heroStyle:{type:Boolean},locked:{type:Boolean},title:null,estimateSeconds:null,expiresAt:null},emits:["goto"],setup(e,{emit:a}){const t=e;oe(v=>({"9b6654d6":g(h),"63684ae6":g(k),"0f902832":g(s),"180cff3c":g(c),"414d610e":g(_),"4ee878d8":g(o)}));const n=re(),r=b(()=>({survey:"clipboard-text-clock",resource:"file-move-outline"})[t.type]),l=b(()=>t.locked?"Locked":{survey:"Begin Survey",resource:"View Resource"}[t.type]),o=b(()=>`min(100%, ${{small:"160px",medium:"200px",large:"256px"}[n.textSize]})`),i=b(()=>({small:18,medium:24,large:36})[n.textSize]),s=b(()=>({small:"30px",medium:"40px",large:"64px"})[n.textSize]),d=b(()=>kt(0,Wt(t.estimateSeconds),{includeSeconds:!0})),p=b(()=>{const v=Nt(t.expiresAt,{roundingMethod:"ceil"});return It(t.expiresAt)?`${v} ago`:`${v} remaining`}),h=b(()=>t.heroStyle?"var(--utr-dark-orange)":"white"),k=b(()=>t.heroStyle?"white":"var(--utr-grey-text)"),c=b(()=>t.heroStyle?"white":"var(--utr-dark-orange)"),_=b(()=>t.heroStyle?"var(--utr-dark-orange)":"white");return(v,P)=>{const M=me("mdicon");return D(),I("section",At,[S("div",$t,[S("div",Ct,[F(M,{name:g(r),size:g(i)},null,8,["name","size"])]),S("h2",Ot,U(e.title),1),S("div",zt,[S("span",Ft,[F(M,{class:"tp-caption-icon",name:"timer-outline",size:"16"}),S("span",Et,U(g(d)),1)]),S("span",Rt,[F(M,{class:"tp-caption-icon",name:"clock-time-four-outline",size:"16"}),S("time",{class:"tp-caption-info",datetime:e.expiresAt.toISOString()},U(g(p)),9,Lt)])]),F(de,{class:"tp-goto-btn",label:g(l),disabled:e.locked,"disabled-color":"var(--utr-grey-text)",color:g(c),"text-color":e.locked?"white":g(_),onClick:P[0]||(P[0]=T=>a("goto"))},null,8,["label","disabled","color","text-color"])])])}}});const te=H(Yt,[["__scopeId","data-v-90b3bb46"]]),ce=e=>(ae("data-v-4923c6e7"),e=e(),ne(),e),Ut={class:"user-home-layout"},Xt=ce(()=>S("h3",{class:"uhl-survey-group-header"},"Available surveys",-1)),Vt={class:"uhl-survey-list"},Ht={key:0},jt=ce(()=>S("h3",{class:"uhl-survey-group-header"},"Next available surveys",-1)),qt={class:"uhl-survey-list"},Bt=j({__name:"UserHomeLayout",props:{availableSurveys:null,lockedSurveys:null},emits:["select"],setup(e,{emit:a}){oe(l=>({"51c14853":g(n),"59539fd7":g(r)}));const t=re(),n=b(()=>t.breakpoint==="mobile"||t.breakpoint==="small"?"2rem":"80px"),r=b(()=>t.breakpoint==="mobile"||t.breakpoint==="small"?"1rem":"2rem");return(l,o)=>(D(),I("div",Ut,[S("article",null,[Xt,S("div",Vt,[(D(!0),I(B,null,J(e.availableSurveys,i=>{var s;return D(),R(te,{key:i.id,type:"survey","hero-style":!1,locked:!1,title:i.displayName,"estimate-seconds":parseInt((s=i.estimatedDuration)!=null?s:"300"),"expires-at":new Date(i.endTime),onGoto:d=>a("select",i.id)},null,8,["title","estimate-seconds","expires-at","onGoto"])}),128))])]),e.lockedSurveys?(D(),I("article",Ht,[jt,S("div",qt,[(D(!0),I(B,null,J(e.lockedSurveys,i=>{var s;return D(),R(te,{key:i.id,type:"survey","hero-style":!1,locked:!0,title:i.displayName,"estimate-seconds":parseInt((s=i.estimatedDuration)!=null?s:"300"),"expires-at":new Date(i.endTime)},null,8,["title","estimate-seconds","expires-at"])}),128))])])):fe("",!0)]))}});const Jt=H(Bt,[["__scopeId","data-v-4923c6e7"]]),Qt={class:"user-home-view"},Gt={key:2},aa=j({__name:"UserHomeView",setup(e){const{user:a,getAccessTokenSilently:t}=be(),n=a,r=ye();function l(u){r.push(u)}const o=Se(),i=_e(),s=b(()=>n.value.user_metadata.participantId),d=b(()=>i.getCachedParticipantSurveys(s.value)),p=["baseline","intervention","post","dce","follow-up"];function h(u){if(!p.some(f=>f===u))throw new Error(`Unknown survey name: ${u}`)}function k(u){const f=/-\d$/;let w=u;return f.test(u)&&(w=u.slice(0,-2)),h(w),w}const c=b(()=>{if(!d.value)return null;const u=d.value.filter(y=>!y.completed&&!o.completedSurveys[y.id]).map(y=>[k(y.name),y]),f=new Map(u.map(y=>[y[0],y])),w=[],N=[],O=f.get("baseline");if(O)f.delete("baseline"),w.push(O),N.push(...f.values());else{const y=f.get("intervention"),z=f.get("post");y&&z&&(f.delete("post"),N.push(z)),w.push(...f.values())}const W=(y,z)=>p.indexOf(y[0])-p.indexOf(z[0]);return w.sort(W),N.sort(W),{available:w.map(y=>y[1]),locked:N.map(y=>y[1])}}),_=b(()=>{var u,f;return((u=c.value)==null?void 0:u.available.length)===0&&((f=c.value)==null?void 0:f.locked.length)===0}),v=async()=>{const u=await t();i.cacheParticipantSurveys(s.value,u,!0)},P=he();async function M(){try{await v()}catch(N){console.log("Failed to download surveys",N)}const u=d.value,w=u&&u.length>0?30:5;P.value=setTimeout(M,w*1e3)}const T=ve();return ge(()=>{T.setPageTitle("Your surveys"),T.setPageCount(0),M()}),pe(()=>{clearTimeout(P.value)}),(u,f)=>(D(),I("div",Qt,[g(_)?(D(),R(Ne,{key:0})):g(c)?(D(),R(Jt,{key:1,"available-surveys":g(c).available,"locked-surveys":g(c).locked,onSelect:f[0]||(f[0]=w=>l(`/survey/${w}`))},null,8,["available-surveys","locked-surveys"])):(D(),I("div",Gt,"Please Wait"))]))}});export{aa as default};
