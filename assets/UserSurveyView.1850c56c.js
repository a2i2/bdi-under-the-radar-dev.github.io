import{B as R,C as f,E as k,d as L,m as V,e as c,l as U,D as A,g as w,k as B,c as N,v as $,s as j,o as x}from"./index.238ed304.js";import{l as F,_ as Y,c as z,s as H}from"./surveyStorage.54a0d887.js";import{u as J}from"./surveyStore.d97c2923.js";import{u as K}from"./participantStore.7a389958.js";import"./storeHelpers.8c23d41b.js";let y;const M=new Uint8Array(16);function W(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(M)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function q(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}const G=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),C={randomUUID:G};function Q(e,t,i){if(C.randomUUID&&!t&&!e)return C.randomUUID();e=e||{};const o=e.random||(e.rng||W)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){i=i||0;for(let s=0;s<16;++s)t[i+s]=o[s];return t}return q(o)}async function X(e,t){const i=new URL("submissions",k),o={"Content-Type":"application/json"};t&&(o.Authorization=`Bearer ${t}`);const s=await fetch(i,{method:"POST",headers:o,body:JSON.stringify(e)});if(!s.ok){const d=`An error has occured: ${s.status}`;throw console.error(s),new Error(d)}}async function Z(e,t,i,o){const s=R(),u=f().getCurrentOffsetTime().toISOString(),l={id:Q(),payloadType:"SURVEY_RESPONSE",payload:{type:"SURVEY_RESPONSE",surveyResponse:{surveyName:t.name,surveyVersion:t.version,surveyType:t.surveyType,interventionId:t.interventionId,recordedAt:u,surveyResponse:i}},experimentId:e._embedded.trial.experiment.id,participantId:e.id,clientInfo:s,metadata:"",initiatedAt:u,submittedAt:u,protocolEntryId:t.id,trialId:e._embedded.trial.id};return X(l,o)}const ee={key:1},se=L({__name:"UserSurveyView",props:{surveyId:null},setup(e){const t=e,{user:i,getAccessTokenSilently:o}=$(),s=i,d=J(),u=V(),l=K(),g=j(),p=c(()=>s.value.user_metadata.participantId),S=c(()=>l.getCachedParticipant(p.value)),_=c(()=>l.getCachedParticipantSurveys(p.value)),h=c(()=>{var a;return(a=_.value)==null?void 0:a.find(r=>r.id===t.surveyId)}),m=c(()=>{var a;return(a=h.value)==null?void 0:a.survey}),D=c(()=>!!(S.value&&m.value)),I=U(),P=U(),v=c(()=>`userSurvey:${t.surveyId}`);A(async()=>{const a=F(v.value);I.value=a.oldData,P.value=a.oldPageIndex;try{const r=await o();await Promise.all([l.cacheParticipant(p.value,r),l.cacheParticipantSurveys(p.value,r,!0)])}catch(r){console.error("Unable to download participant info",r),g.push({path:"/error-page"})}});async function b(a){if(!D.value)throw new Error("On complete shouldn't trigger before we're loaded");const r=await o();await Z(S.value,h.value,a,r),d.setSurveyCompleted(!0),d.completedSurveys[t.surveyId]=!0,z(v.value),g.push({path:"/user-home"})}function E(a){d.setSurveyCompleted(!1),u.setPageCount(a.pageCount),u.setPageTitle(a.currentPage.name)}function T(a,r){u.setPageIndex(a),u.setPageTitle(r)}function O(a,r){H(v.value,a,r)}return(a,r)=>w(m)?(x(),B(Y,{key:0,"survey-data":w(m),"initial-state":I.value,"initial-page-idx":P.value,onOnComplete:b,onOnLoaded:E,onOnPageChanged:T,onOnPartialSend:O},null,8,["survey-data","initial-state","initial-page-idx"])):(x(),N("div",ee,"Please Wait"))}});export{se as default};
