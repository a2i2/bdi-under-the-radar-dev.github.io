import{_ as B,o as D,c as I,p as re,a as oe,b as M,d as q,u as ie,e as b,f as R,g as h,t as V,A as fe,h as se,r as he,F as Q,i as G,j as ve,k as Y,l as ge,m as pe,n as ye,q as be,s as _e,v as Se}from"./index.01f19ec3.js";import{u as Me}from"./participantStore.b454d8f7.js";import{u as we}from"./surveyStore.09d02bf1.js";import{l as xe}from"./surveyStorage.34c3760f.js";import"./storeHelpers.a17d3bd6.js";const De="/bdi-under-the-radar-dev.github.io/assets/all-done.5f5da768.svg";const ke={},ue=e=>(re("data-v-49b35497"),e=e(),oe(),e),Te={class:"all-done-page"},Pe=ue(()=>M("img",{src:De,alt:"All Done",draggable:"false"},null,-1)),Ne=ue(()=>M("h4",{class:"adp-text"},"All done for today!",-1)),Ie=[Pe,Ne];function We(e,a){return D(),I("article",Te,Ie)}const Ae=B(ke,[["render",We],["__scopeId","data-v-49b35497"]]);function x(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function L(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(t){return typeof t}:L=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function f(e){x(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||L(e)==="object"&&a==="[object Date]"?new Date(e.getTime()):typeof e=="number"||a==="[object Number]"?new Date(e):((typeof e=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var $e={};function le(){return $e}function U(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}function z(e,a){x(2,arguments);var t=f(e),n=f(a),r=t.getTime()-n.getTime();return r<0?-1:r>0?1:r}var Ce=1e3;function Oe(e,a){x(2,arguments);var t=f(e),n=f(a),r=t.getFullYear()-n.getFullYear(),c=t.getMonth()-n.getMonth();return r*12+c}function ze(e,a){return x(2,arguments),f(e).getTime()-f(a).getTime()}var K={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(a){return a<0?Math.ceil(a):Math.floor(a)}},Fe="trunc";function Ee(e){return e?K[e]:K[Fe]}function Re(e){x(1,arguments);var a=f(e);return a.setHours(23,59,59,999),a}function Le(e){x(1,arguments);var a=f(e),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}function Ye(e){x(1,arguments);var a=f(e);return Re(a).getTime()===Le(a).getTime()}function Ue(e,a){x(2,arguments);var t=f(e),n=f(a),r=z(t,n),c=Math.abs(Oe(t,n)),o;if(c<1)o=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-r*c);var i=z(t,n)===-r;Ye(f(e))&&c===1&&z(e,n)===1&&(i=!1),o=r*(c-Number(i))}return o===0?0:o}function Xe(e,a,t){x(2,arguments);var n=ze(e,a)/1e3;return Ee(t==null?void 0:t.roundingMethod)(n)}var Ve={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},He=function(a,t,n){var r,c=Ve[a];return typeof c=="string"?r=c:t===1?r=c.one:r=c.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const je=He;function H(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}}var Be={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},qe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Je={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qe={date:H({formats:Be,defaultWidth:"full"}),time:H({formats:qe,defaultWidth:"full"}),dateTime:H({formats:Je,defaultWidth:"full"})};const Ge=Qe;var Ke={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ze=function(a,t,n,r){return Ke[a]};const et=Ze;function C(e){return function(a,t){var n=t!=null&&t.context?String(t.context):"standalone",r;if(n==="formatting"&&e.formattingValues){var c=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):c;r=e.formattingValues[o]||e.formattingValues[c]}else{var i=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[s]||e.values[i]}var d=e.argumentCallback?e.argumentCallback(a):a;return r[d]}}var tt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},at={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ot={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},it={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},st=function(a,t){var n=Number(a),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ut={ordinalNumber:st,era:C({values:tt,defaultWidth:"wide"}),quarter:C({values:at,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:C({values:nt,defaultWidth:"wide"}),day:C({values:rt,defaultWidth:"wide"}),dayPeriod:C({values:ot,defaultWidth:"wide",formattingValues:it,defaultFormattingWidth:"wide"})};const lt=ut;function O(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],c=a.match(r);if(!c)return null;var o=c[0],i=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(i)?dt(i,function(v){return v.test(o)}):ct(i,function(v){return v.test(o)}),d;d=e.valueCallback?e.valueCallback(s):s,d=t.valueCallback?t.valueCallback(d):d;var p=a.slice(o.length);return{value:d,rest:p}}}function ct(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function dt(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function mt(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var r=n[0],c=a.match(e.parsePattern);if(!c)return null;var o=e.valueCallback?e.valueCallback(c[0]):c[0];o=t.valueCallback?t.valueCallback(o):o;var i=a.slice(r.length);return{value:o,rest:i}}}var ft=/^(\d+)(th|st|nd|rd)?/i,ht=/\d+/i,vt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},gt={any:[/^b/i,/^(a|c)/i]},pt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},yt={any:[/1/i,/2/i,/3/i,/4/i]},bt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},_t={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},St={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Mt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},wt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Dt={ordinalNumber:mt({matchPattern:ft,parsePattern:ht,valueCallback:function(a){return parseInt(a,10)}}),era:O({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any"}),quarter:O({matchPatterns:pt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:O({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:_t,defaultParseWidth:"any"}),day:O({matchPatterns:St,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:wt,defaultMatchWidth:"any",parsePatterns:xt,defaultParseWidth:"any"})};const kt=Dt;var Tt={code:"en-US",formatDistance:je,formatLong:Ge,formatRelative:et,localize:lt,match:kt,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ce=Tt;function J(e,a){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}function de(e){return J({},e)}var Z=1440,Pt=2520,j=43200,Nt=86400;function It(e,a,t){var n,r;x(2,arguments);var c=le(),o=(n=(r=t==null?void 0:t.locale)!==null&&r!==void 0?r:c.locale)!==null&&n!==void 0?n:ce;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=z(e,a);if(isNaN(i))throw new RangeError("Invalid time value");var s=J(de(t),{addSuffix:Boolean(t==null?void 0:t.addSuffix),comparison:i}),d,p;i>0?(d=f(a),p=f(e)):(d=f(e),p=f(a));var v=Xe(p,d),k=(U(p)-U(d))/1e3,l=Math.round((v-k)/60),_;if(l<2)return t!=null&&t.includeSeconds?v<5?o.formatDistance("lessThanXSeconds",5,s):v<10?o.formatDistance("lessThanXSeconds",10,s):v<20?o.formatDistance("lessThanXSeconds",20,s):v<40?o.formatDistance("halfAMinute",0,s):v<60?o.formatDistance("lessThanXMinutes",1,s):o.formatDistance("xMinutes",1,s):l===0?o.formatDistance("lessThanXMinutes",1,s):o.formatDistance("xMinutes",l,s);if(l<45)return o.formatDistance("xMinutes",l,s);if(l<90)return o.formatDistance("aboutXHours",1,s);if(l<Z){var g=Math.round(l/60);return o.formatDistance("aboutXHours",g,s)}else{if(l<Pt)return o.formatDistance("xDays",1,s);if(l<j){var T=Math.round(l/Z);return o.formatDistance("xDays",T,s)}else if(l<Nt)return _=Math.round(l/j),o.formatDistance("aboutXMonths",_,s)}if(_=Ue(p,d),_<12){var w=Math.round(l/j);return o.formatDistance("xMonths",w,s)}else{var P=_%12,u=Math.floor(_/12);return P<3?o.formatDistance("aboutXYears",u,s):P<9?o.formatDistance("overXYears",u,s):o.formatDistance("almostXYears",u+1,s)}}var ee=1e3*60,X=60*24,te=X*30,ae=X*365;function Wt(e,a,t){var n,r,c;x(2,arguments);var o=le(),i=(n=(r=t==null?void 0:t.locale)!==null&&r!==void 0?r:o.locale)!==null&&n!==void 0?n:ce;if(!i.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var s=z(e,a);if(isNaN(s))throw new RangeError("Invalid time value");var d=J(de(t),{addSuffix:Boolean(t==null?void 0:t.addSuffix),comparison:s}),p,v;s>0?(p=f(a),v=f(e)):(p=f(e),v=f(a));var k=String((c=t==null?void 0:t.roundingMethod)!==null&&c!==void 0?c:"round"),l;if(k==="floor")l=Math.floor;else if(k==="ceil")l=Math.ceil;else if(k==="round")l=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var _=v.getTime()-p.getTime(),g=_/ee,T=U(v)-U(p),w=(_-T)/ee,P=t==null?void 0:t.unit,u;if(P?u=String(P):g<1?u="second":g<60?u="minute":g<X?u="hour":w<te?u="day":w<ae?u="month":u="year",u==="second"){var m=l(_/1e3);return i.formatDistance("xSeconds",m,d)}else if(u==="minute"){var S=l(g);return i.formatDistance("xMinutes",S,d)}else if(u==="hour"){var N=l(g/60);return i.formatDistance("xHours",N,d)}else if(u==="day"){var F=l(w/X);return i.formatDistance("xDays",F,d)}else if(u==="month"){var A=l(w/te);return A===12&&P!=="month"?i.formatDistance("xYears",1,d):i.formatDistance("xMonths",A,d)}else if(u==="year"){var E=l(w/ae);return i.formatDistance("xYears",E,d)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function At(e,a){return x(1,arguments),Wt(e,Date.now(),a)}function $t(e){return x(1,arguments),f(e).getTime()<Date.now()}function Ct(e){return x(1,arguments),e*Ce}const Ot={class:"task-panel"},zt={class:"tp-body"},Ft={class:"tp-icon"},Et={class:"tp-header"},Rt={class:"tp-info utr-text-caption"},Lt={class:"tp-caption"},Yt={class:"tp-caption-info"},Ut={class:"tp-caption"},Xt=["datetime"],Vt=q({__name:"TaskPanel",props:{type:null,heroStyle:{type:Boolean},locked:{type:Boolean},started:{type:Boolean},title:null,estimateSeconds:null,expiresAt:null},emits:["goto"],setup(e,{emit:a}){const t=e;se(g=>({"0adeb003":h(v),"4ea30e90":h(k),ad288856:h(s),"2dd93198":h(l),31277867:h(_),22718434:h(o)}));const n=ie(),r=b(()=>({survey:"clipboard-text-clock",resource:"file-move-outline"})[t.type]),c=b(()=>t.locked?"Locked":t.started&&t.type==="survey"?"Continue survey":{survey:"Begin Survey",resource:"View Resource"}[t.type]),o=b(()=>`min(100%, ${{small:"160px",medium:"200px",large:"256px"}[n.textSize]})`),i=b(()=>({small:18,medium:24,large:36})[n.textSize]),s=b(()=>({small:"30px",medium:"40px",large:"64px"})[n.textSize]),d=b(()=>It(0,Ct(t.estimateSeconds),{includeSeconds:!0})),p=b(()=>{const g=At(t.expiresAt,{roundingMethod:"ceil"});return $t(t.expiresAt)?`${g} ago`:`${g} remaining`}),v=b(()=>t.heroStyle?"var(--utr-dark-orange)":"white"),k=b(()=>t.heroStyle?"white":"var(--utr-grey-text)"),l=b(()=>t.heroStyle?"white":"var(--utr-dark-orange)"),_=b(()=>t.heroStyle?"var(--utr-dark-orange)":"white");return(g,T)=>{const w=he("mdicon");return D(),I("section",Ot,[M("div",zt,[M("div",Ft,[R(w,{name:h(r),size:h(i)},null,8,["name","size"])]),M("h2",Et,V(e.title),1),M("div",Rt,[M("span",Lt,[R(w,{class:"tp-caption-icon",name:"timer-outline",size:"16"}),M("span",Yt,V(h(d)),1)]),M("span",Ut,[R(w,{class:"tp-caption-icon",name:"clock-time-four-outline",size:"16"}),M("time",{class:"tp-caption-info",datetime:e.expiresAt.toISOString()},V(h(p)),9,Xt)])]),R(fe,{class:"tp-goto-btn",label:h(c),disabled:e.locked,"disabled-color":"var(--utr-grey-text)",color:h(l),"text-color":e.locked?"white":h(_),onClick:T[0]||(T[0]=P=>a("goto"))},null,8,["label","disabled","color","text-color"])])])}}});const ne=B(Vt,[["__scopeId","data-v-6d2db6ae"]]),me=e=>(re("data-v-b9e92ecd"),e=e(),oe(),e),Ht={class:"user-home-layout"},jt=me(()=>M("h3",{class:"uhl-survey-group-header"},"Available surveys",-1)),Bt={class:"uhl-survey-list"},qt={key:0},Jt=me(()=>M("h3",{class:"uhl-survey-group-header"},"Next available surveys",-1)),Qt={class:"uhl-survey-list"},Gt=q({__name:"UserHomeLayout",props:{availableSurveys:null,lockedSurveys:null,startedSurveyIds:null},emits:["select"],setup(e,{emit:a}){se(c=>({c597c242:h(n),b673133a:h(r)}));const t=ie(),n=b(()=>t.breakpoint==="mobile"||t.breakpoint==="small"?"2rem":"80px"),r=b(()=>t.breakpoint==="mobile"||t.breakpoint==="small"?"1rem":"2rem");return(c,o)=>(D(),I("div",Ht,[M("article",null,[jt,M("div",Bt,[(D(!0),I(Q,null,G(e.availableSurveys,i=>{var s;return D(),Y(ne,{key:i.id,type:"survey","hero-style":!1,locked:!1,started:e.startedSurveyIds.includes(i.id),title:i.displayName,"estimate-seconds":parseInt((s=i.estimatedDuration)!=null?s:"300"),"expires-at":new Date(i.endTime),onGoto:d=>a("select",i.id)},null,8,["started","title","estimate-seconds","expires-at","onGoto"])}),128))])]),e.lockedSurveys?(D(),I("article",qt,[Jt,M("div",Qt,[(D(!0),I(Q,null,G(e.lockedSurveys,i=>{var s;return D(),Y(ne,{key:i.id,type:"survey","hero-style":!1,locked:!0,started:!1,title:i.displayName,"estimate-seconds":parseInt((s=i.estimatedDuration)!=null?s:"300"),"expires-at":new Date(i.endTime)},null,8,["title","estimate-seconds","expires-at"])}),128))])])):ve("",!0)]))}});const Kt=B(Gt,[["__scopeId","data-v-b9e92ecd"]]),Zt={class:"user-home-view"},ea={key:2},ia=q({__name:"UserHomeView",setup(e){const{user:a,getAccessTokenSilently:t}=Se(),n=a,r=_e();function c(u){r.push(u)}const o=we(),i=Me(),s=b(()=>n.value.user_metadata.participantId),d=b(()=>i.getCachedParticipantSurveys(s.value)),p=["baseline","intervention","video-feedback","mental-health","dce","follow-up"];function v(u){if(!p.some(m=>m===u))throw new Error(`Unknown survey name: ${u}`)}function k(u){const m=/-\d$/;let S=u;return m.test(u)&&(S=u.slice(0,-2)),v(S),S}const l=b(()=>{if(!d.value)return null;const u=d.value.filter(y=>!y.completed&&!o.completedSurveys[y.id]).map(y=>[k(y.name),y]),m=new Map(u.map(y=>[y[0],y])),S=[],N=[],F=m.get("baseline");if(F)m.delete("baseline"),S.push(F),N.push(...m.values());else{const y=m.get("intervention"),W=m.get("video-feedback"),$=m.get("mental-health");y&&W&&$&&(m.delete("video-feedback"),m.delete("mental-health"),N.push(W),N.push($)),S.push(...m.values())}const A=(y,W)=>p.indexOf(y[0])-p.indexOf(W[0]);S.sort(A),N.sort(A);const E=[];for(const[y,W]of S){const $=xe(`userSurvey:${W.id}`);$&&$.oldPageIndex&&E.push(W.id)}return{available:S.map(y=>y[1]),locked:N.map(y=>y[1]),started:E}}),_=b(()=>{var u,m;return((u=l.value)==null?void 0:u.available.length)===0&&((m=l.value)==null?void 0:m.locked.length)===0}),g=async()=>{const u=await t();i.cacheParticipantSurveys(s.value,u,!0)},T=ge();async function w(){try{await g()}catch(N){console.log("Failed to download surveys",N)}const u=d.value,S=u&&u.length>0?30:5;T.value=setTimeout(w,S*1e3)}const P=pe();return ye(()=>{P.setPageTitle("Your surveys"),w()}),be(()=>{clearTimeout(T.value)}),(u,m)=>(D(),I("div",Zt,[h(_)?(D(),Y(Ae,{key:0})):h(l)?(D(),Y(Kt,{key:1,"available-surveys":h(l).available,"locked-surveys":h(l).locked,"started-survey-ids":h(l).started,onSelect:m[0]||(m[0]=S=>c(`/survey/${S}`))},null,8,["available-surveys","locked-surveys","started-survey-ids"])):(D(),I("div",ea,"Please Wait"))]))}});export{ia as default};
