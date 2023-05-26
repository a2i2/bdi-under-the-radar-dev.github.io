import{r as x,t as v,g as N,d as ae,a as ne,_ as F,o as T,c as k,p as se,b as oe,e as M,f as X,u as ie,h as y,i as de,j as L,k as p,l as P,m as B,A as fe,n as le,q as ve,F as W,s as q,v as Y,w as me,x as he,y as pe,z as ge,B as _e,C as ye,D as Se}from"./index.81d004b4.js";import{u as Me}from"./surveyStore.2be14ee4.js";import{l as xe}from"./surveyStorage.34c3760f.js";function j(t){x(1,arguments);var r=v(t);return r.setHours(0,0,0,0),r}var De=864e5;function be(t,r){x(2,arguments);var e=j(t),n=j(r),u=e.getTime()-N(e),f=n.getTime()-N(n);return Math.round((u-f)/De)}function O(t,r){x(2,arguments);var e=v(t),n=v(r),u=e.getTime()-n.getTime();return u<0?-1:u>0?1:u}var Te=1e3;function we(t,r){x(2,arguments);var e=v(t),n=v(r),u=e.getFullYear()-n.getFullYear(),f=e.getMonth()-n.getMonth();return u*12+f}function J(t,r){var e=t.getFullYear()-r.getFullYear()||t.getMonth()-r.getMonth()||t.getDate()-r.getDate()||t.getHours()-r.getHours()||t.getMinutes()-r.getMinutes()||t.getSeconds()-r.getSeconds()||t.getMilliseconds()-r.getMilliseconds();return e<0?-1:e>0?1:e}function Ie(t,r){x(2,arguments);var e=v(t),n=v(r),u=J(e,n),f=Math.abs(be(e,n));e.setDate(e.getDate()-u*f);var s=Number(J(e,n)===-u),a=u*(f-s);return a===0?0:a}function ke(t,r){return x(2,arguments),v(t).getTime()-v(r).getTime()}var K={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(r){return r<0?Math.ceil(r):Math.floor(r)}},Ne="trunc";function $e(t){return t?K[t]:K[Ne]}function Oe(t){x(1,arguments);var r=v(t);return r.setHours(23,59,59,999),r}function Ae(t){x(1,arguments);var r=v(t),e=r.getMonth();return r.setFullYear(r.getFullYear(),e+1,0),r.setHours(23,59,59,999),r}function ze(t){x(1,arguments);var r=v(t);return Oe(r).getTime()===Ae(r).getTime()}function Ee(t,r){x(2,arguments);var e=v(t),n=v(r),u=O(e,n),f=Math.abs(we(e,n)),s;if(f<1)s=0;else{e.getMonth()===1&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-u*f);var a=O(e,n)===-u;ze(v(t))&&f===1&&O(t,n)===1&&(a=!1),s=u*(f-Number(a))}return s===0?0:s}function Ce(t,r,e){x(2,arguments);var n=ke(t,r)/1e3;return $e(e==null?void 0:e.roundingMethod)(n)}function V(t,r){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);return t}function ue(t){return V({},t)}var Q=1440,Le=2520,R=43200,Ye=86400;function He(t,r,e){var n,u;x(2,arguments);var f=ne(),s=(n=(u=e==null?void 0:e.locale)!==null&&u!==void 0?u:f.locale)!==null&&n!==void 0?n:ae;if(!s.formatDistance)throw new RangeError("locale must contain formatDistance property");var a=O(t,r);if(isNaN(a))throw new RangeError("Invalid time value");var o=V(ue(e),{addSuffix:Boolean(e==null?void 0:e.addSuffix),comparison:a}),g,D;a>0?(g=v(r),D=v(t)):(g=v(t),D=v(r));var m=Ce(D,g),w=(N(D)-N(g))/1e3,c=Math.round((m-w)/60),S;if(c<2)return e!=null&&e.includeSeconds?m<5?s.formatDistance("lessThanXSeconds",5,o):m<10?s.formatDistance("lessThanXSeconds",10,o):m<20?s.formatDistance("lessThanXSeconds",20,o):m<40?s.formatDistance("halfAMinute",0,o):m<60?s.formatDistance("lessThanXMinutes",1,o):s.formatDistance("xMinutes",1,o):c===0?s.formatDistance("lessThanXMinutes",1,o):s.formatDistance("xMinutes",c,o);if(c<45)return s.formatDistance("xMinutes",c,o);if(c<90)return s.formatDistance("aboutXHours",1,o);if(c<Q){var h=Math.round(c/60);return s.formatDistance("aboutXHours",h,o)}else{if(c<Le)return s.formatDistance("xDays",1,o);if(c<R){var b=Math.round(c/Q);return s.formatDistance("xDays",b,o)}else if(c<Ye)return S=Math.round(c/R),s.formatDistance("aboutXMonths",S,o)}if(S=Ee(D,g),S<12){var i=Math.round(c/R);return s.formatDistance("xMonths",i,o)}else{var d=S%12,l=Math.floor(S/12);return d<3?s.formatDistance("aboutXYears",l,o):d<9?s.formatDistance("overXYears",l,o):s.formatDistance("almostXYears",l+1,o)}}var Z=1e3*60,H=60*24,ee=H*30,te=H*365;function Ue(t,r,e){var n,u,f;x(2,arguments);var s=ne(),a=(n=(u=e==null?void 0:e.locale)!==null&&u!==void 0?u:s.locale)!==null&&n!==void 0?n:ae;if(!a.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var o=O(t,r);if(isNaN(o))throw new RangeError("Invalid time value");var g=V(ue(e),{addSuffix:Boolean(e==null?void 0:e.addSuffix),comparison:o}),D,m;o>0?(D=v(r),m=v(t)):(D=v(t),m=v(r));var w=String((f=e==null?void 0:e.roundingMethod)!==null&&f!==void 0?f:"round"),c;if(w==="floor")c=Math.floor;else if(w==="ceil")c=Math.ceil;else if(w==="round")c=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var S=m.getTime()-D.getTime(),h=S/Z,b=N(m)-N(D),i=(S-b)/Z,d=e==null?void 0:e.unit,l;if(d?l=String(d):h<1?l="second":h<60?l="minute":h<H?l="hour":i<ee?l="day":i<te?l="month":l="year",l==="second"){var I=c(S/1e3);return a.formatDistance("xSeconds",I,g)}else if(l==="minute"){var A=c(h);return a.formatDistance("xMinutes",A,g)}else if(l==="hour"){var z=c(h/60);return a.formatDistance("xHours",z,g)}else if(l==="day"){var E=c(i/H);return a.formatDistance("xDays",E,g)}else if(l==="month"){var $=c(i/ee);return $===12&&d!=="month"?a.formatDistance("xYears",1,g):a.formatDistance("xMonths",$,g)}else if(l==="year"){var _=c(i/te);return a.formatDistance("xYears",_,g)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function Pe(t,r){return x(1,arguments),Ue(t,Date.now(),r)}function Re(t){return x(1,arguments),v(t).getTime()<Date.now()}function Fe(t){return x(1,arguments),t*Te}const Xe="/assets/all-done.5f5da768.svg";const Be={},ce=t=>(se("data-v-49b35497"),t=t(),oe(),t),Ve={class:"all-done-page"},Ge=ce(()=>M("img",{src:Xe,alt:"All Done",draggable:"false"},null,-1)),We=ce(()=>M("h4",{class:"adp-text"},"All done for today!",-1)),qe=[Ge,We];function je(t,r){return T(),k("article",Ve,qe)}const Je=F(Be,[["render",je],["__scopeId","data-v-49b35497"]]),Ke={class:"task-panel"},Qe={class:"tp-body"},Ze={class:"tp-icon"},et={class:"tp-header"},tt={class:"tp-info utr-text-caption"},rt={class:"tp-caption"},at={class:"tp-caption-info"},nt={key:0,class:"tp-caption"},st=["datetime"],ot=X({__name:"TaskPanel",props:{type:null,heroStyle:{type:Boolean},locked:{type:Boolean},started:{type:Boolean},title:null,estimateSeconds:null,expiresAt:null},emits:["goto"],setup(t,{emit:r}){const e=t;le(h=>({"00212af5":p(m),"576b2986":p(w),"41e28d72":p(o),"0c74af02":p(c),"8d6b264e":p(S),"82146b98":p(s)}));const n=ie(),u=y(()=>({survey:"clipboard-text-clock",resource:"file-move-outline"})[e.type]),f=y(()=>e.locked?"Locked":e.started&&e.type==="survey"?"Continue survey":{survey:"Begin Survey",resource:"View Resource"}[e.type]),s=y(()=>`min(100%, ${{small:"160px",medium:"200px",large:"256px"}[n.textSize]})`),a=y(()=>({small:18,medium:24,large:36})[n.textSize]),o=y(()=>({small:"30px",medium:"40px",large:"64px"})[n.textSize]),g=y(()=>He(0,Fe(e.estimateSeconds),{includeSeconds:!0})),D=y(()=>{const h=Pe(e.expiresAt,{roundingMethod:"ceil"});if(Re(e.expiresAt))return`${h} ago`;const b=Ie(e.expiresAt,new Date);return b<1?"Complete by the end of today":b<2?"Complete by the end of tomorrow":b<7?`Complete within ${h}`:`Complete by ${de(e.expiresAt,"do MMMM")}`}),m=y(()=>e.heroStyle?"var(--utr-dark-orange)":"white"),w=y(()=>e.heroStyle?"white":"var(--utr-grey-text)"),c=y(()=>e.heroStyle?"white":"var(--utr-dark-orange)"),S=y(()=>e.heroStyle?"var(--utr-dark-orange)":"white");return(h,b)=>{const i=ve("mdicon");return T(),k("section",Ke,[M("div",Qe,[M("div",Ze,[L(i,{name:p(u),size:p(a)},null,8,["name","size"])]),M("h2",et,P(t.title),1),M("div",tt,[M("span",rt,[L(i,{class:"tp-caption-icon",name:"timer-outline",size:"16"}),M("span",at,P(p(g)),1)]),t.locked?B("",!0):(T(),k("span",nt,[L(i,{class:"tp-caption-icon",name:"clock-time-four-outline",size:"16"}),M("time",{class:"tp-caption-info",datetime:t.expiresAt.toISOString()},P(p(D)),9,st)]))]),L(fe,{class:"tp-goto-btn",label:p(f),disabled:t.locked,"disabled-color":"var(--utr-grey-text)",color:p(c),"text-color":t.locked?"white":p(S),onClick:b[0]||(b[0]=d=>r("goto"))},null,8,["label","disabled","color","text-color"])])])}}});const re=F(ot,[["__scopeId","data-v-e7745154"]]),U=t=>(se("data-v-d0e2e231"),t=t(),oe(),t),it={class:"user-home-layout"},lt=U(()=>M("h3",{class:"uhl-survey-group-header"},"Available surveys",-1)),ut=U(()=>M("h4",{class:"uhl-survey-group-subheader"},"Please complete all surveys below.",-1)),ct={class:"uhl-survey-list"},dt={key:0},ft=U(()=>M("h3",{class:"uhl-survey-group-header"},"Next available surveys",-1)),vt=U(()=>M("h4",{class:"uhl-survey-group-subheader"},"These will be unlocked when you complete your available surveys.",-1)),mt={class:"uhl-survey-list"},ht=X({__name:"UserHomeLayout",props:{availableSurveys:null,lockedSurveys:null,startedSurveyIds:null},emits:["select"],setup(t,{emit:r}){le(f=>({aafeac4c:p(n),"9bd9fd44":p(u)}));const e=ie(),n=y(()=>e.breakpoint==="mobile"||e.breakpoint==="small"?"2rem":"80px"),u=y(()=>e.breakpoint==="mobile"||e.breakpoint==="small"?"1rem":"2rem");return(f,s)=>(T(),k("div",it,[M("article",null,[lt,ut,M("div",ct,[(T(!0),k(W,null,q(t.availableSurveys,a=>{var o;return T(),Y(re,{key:a.id,type:"survey","hero-style":!1,locked:!1,started:t.startedSurveyIds.includes(a.id),title:a.displayName,"estimate-seconds":parseInt((o=a.estimatedDuration)!=null?o:"300"),"expires-at":new Date(a.endTime),onGoto:g=>r("select",a.id)},null,8,["started","title","estimate-seconds","expires-at","onGoto"])}),128))])]),t.lockedSurveys&&t.lockedSurveys.length>0?(T(),k("article",dt,[ft,vt,M("div",mt,[(T(!0),k(W,null,q(t.lockedSurveys,a=>{var o;return T(),Y(re,{key:a.id,type:"survey","hero-style":!1,locked:!0,started:!1,title:a.displayName,"estimate-seconds":parseInt((o=a.estimatedDuration)!=null?o:"300"),"expires-at":new Date(a.endTime)},null,8,["title","estimate-seconds","expires-at"])}),128))])])):B("",!0)]))}});const pt=F(ht,[["__scopeId","data-v-d0e2e231"]]),gt={class:"user-home-view"},Mt=X({__name:"UserHomeView",setup(t){const{user:r}=Se(),e=ye();function n(i){e.push(i)}const u=Me(),f=me(),s=y(()=>{var i,d;return(d=(i=r.value)==null?void 0:i.user_metadata.participantId)!=null?d:""}),a=y(()=>f.getCachedParticipantSurveys(s.value)),o=["baseline","intervention","video-feedback","mental-health","dce","follow-up"];function g(i){if(!o.some(d=>d===i))throw new Error(`Unknown survey name: ${i}`)}function D(i){const d=/-\d$/;let l=i;return d.test(i)&&(l=i.slice(0,-2)),g(l),l}const m=y(()=>{if(!a.value)return null;const i=a.value.filter(_=>!_.completed&&!u.completedSurveys[_.id]).map(_=>[D(_.name),_]),d=new Map(i.map(_=>[_[0],_])),l=[],I=[],A=d.get("baseline"),z=d.get("intervention");A?(d.delete("baseline"),l.push(A),I.push(...d.values())):z?(d.delete("intervention"),l.push(z),I.push(...d.values())):l.push(...d.values());const E=(_,C)=>o.indexOf(_[0])-o.indexOf(C[0]);l.sort(E),I.sort(E);const $=[];for(const[_,C]of l){const G=xe(`userSurvey:${C.id}`);G&&G.oldPageIndex&&$.push(C.id)}return{available:l.map(_=>_[1]),locked:I.map(_=>_[1]),started:$}}),w=y(()=>{var i,d;return((i=m.value)==null?void 0:i.available.length)===0&&((d=m.value)==null?void 0:d.locked.length)===0}),c=async()=>{f.cacheParticipantSurveys(s.value,!0)},S=he();async function h(){try{await c()}catch(I){console.log("Failed to download surveys",I)}const i=a.value,l=i&&i.length>0?30:5;S.value=setTimeout(h,l*1e3)}const b=pe();return ge(async()=>{b.setPageTitle("Your surveys"),b.openLoadingOverlay();try{await h()}finally{b.closeLoadingOverlay()}}),_e(()=>{clearTimeout(S.value)}),(i,d)=>(T(),k("div",gt,[p(w)?(T(),Y(Je,{key:0})):p(m)?(T(),Y(pt,{key:1,"available-surveys":p(m).available,"locked-surveys":p(m).locked,"started-survey-ids":p(m).started,onSelect:d[0]||(d[0]=l=>n(`/survey/${l}`))},null,8,["available-surveys","locked-surveys","started-survey-ids"])):B("",!0)]))}});export{Mt as default};
