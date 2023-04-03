import{B as O,C as R,E as k,d as B,m as L,e as c,l as w,D as V,q as A,g as U,k as N,c as $,v as j,s as F,o as x}from"./index.c5584c20.js";import{l as Y,_ as q,c as z,s as H}from"./surveyStorage.23a40080.js";import{u as J}from"./surveyStore.967cd357.js";import{u as K}from"./participantStore.108a8588.js";import"./storeHelpers.8ec3250e.js";let m;const M=new Uint8Array(16);function W(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(M)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function G(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}const Q=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),C={randomUUID:Q};function X(e,t,u){if(C.randomUUID&&!t&&!e)return C.randomUUID();e=e||{};const o=e.random||(e.rng||W)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){u=u||0;for(let s=0;s<16;++s)t[u+s]=o[s];return t}return G(o)}async function Z(e,t){const u=new URL("submissions",k),o={"Content-Type":"application/json"};t&&(o.Authorization=`Bearer ${t}`);const s=await fetch(u,{method:"POST",headers:o,body:JSON.stringify(e)});if(!s.ok){const d=`An error has occured: ${s.status}`;throw console.error(s),new Error(d)}}async function ee(e,t,u,o){const s=O(),i=R().getCurrentOffsetTime().toISOString(),l={id:X(),payloadType:"SURVEY_RESPONSE",payload:{type:"SURVEY_RESPONSE",surveyResponse:{surveyName:t.name,surveyVersion:t.version,surveyType:t.surveyType,interventionId:t.interventionId,recordedAt:i,surveyResponse:u}},experimentId:e._embedded.trial.experiment.id,participantId:e.id,clientInfo:s,metadata:"",initiatedAt:i,submittedAt:i,protocolEntryId:t.id,trialId:e._embedded.trial.id};return Z(l,o)}const te={key:1},ie=B({__name:"UserSurveyView",props:{surveyId:null},setup(e){const t=e,{user:u,getAccessTokenSilently:o}=j(),s=u,d=J(),i=L(),l=K(),g=F(),p=c(()=>s.value.user_metadata.participantId),S=c(()=>l.getCachedParticipant(p.value)),_=c(()=>l.getCachedParticipantSurveys(p.value)),h=c(()=>{var a;return(a=_.value)==null?void 0:a.find(r=>r.id===t.surveyId)}),y=c(()=>{var a;return(a=h.value)==null?void 0:a.survey}),D=c(()=>!!(S.value&&y.value)),P=w(),I=w(),v=c(()=>`userSurvey:${t.surveyId}`);V(async()=>{const a=Y(v.value);P.value=a.oldData,I.value=a.oldPageIndex;try{const r=await o();await Promise.all([l.cacheParticipant(p.value,r),l.cacheParticipantSurveys(p.value,r,!0)])}catch(r){console.error("Unable to download participant info",r),g.push({path:"/error-page"})}});async function b(a){if(!D.value)throw new Error("On complete shouldn't trigger before we're loaded");const r=await o();await ee(S.value,h.value,a,r),d.setSurveyCompleted(!0),d.completedSurveys[t.surveyId]=!0,z(v.value),g.push({path:"/user-home"})}function E(a){d.setSurveyCompleted(!1),i.setPageCount(a.pageCount),i.setPageTitle(a.currentPage.name),i.setPageIndex(a.currentPageNo),i.setShowProgressBar(!0)}A(()=>{i.setShowProgressBar(!1)});function T(a,r){i.setPageIndex(a),i.setPageTitle(r)}function f(a,r){H(v.value,a,r)}return(a,r)=>U(y)?(x(),N(q,{key:0,"survey-data":U(y),"initial-state":P.value,"initial-page-idx":I.value,onOnComplete:b,onOnLoaded:E,onOnPageChanged:T,onOnPartialSend:f},null,8,["survey-data","initial-state","initial-page-idx"])):(x(),$("div",te,"Please Wait"))}});export{ie as default};
