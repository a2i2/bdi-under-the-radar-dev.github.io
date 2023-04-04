import{_ as N,o as y,c as S,p as A,a as $,b,B as j,C as H,E as M,d as F,m as K,e as u,l as _,D as Y,q,g as C,f as z,k as J,j as W,v as G,s as Q}from"./index.804f3c00.js";import{_ as X}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.03a53337.js";import{u as Z}from"./surveyStore.4dfc7f33.js";import{u as ee}from"./participantStore.b2916db0.js";import{l as te,c as ae,s as oe}from"./surveyStorage.34c3760f.js";import"./storeHelpers.40c8ca4b.js";const ne="/bdi-under-the-radar-dev.github.io/assets/complete.da7ee872.svg";const se={},D=e=>(A("data-v-1908f863"),e=e(),$(),e),re={class:"survey-complete-page"},ce=D(()=>b("img",{src:ne,alt:"Complete",draggable:"false"},null,-1)),ie=D(()=>b("h4",{class:"scp-text"},"Thank you for completing this survey",-1)),ue=[ce,ie];function de(e,t){return y(),S("article",re,ue)}const le=N(se,[["render",de],["__scopeId","data-v-1908f863"]]);let m;const pe=new Uint8Array(16);function me(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(pe)}const o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));function ye(e,t=0){return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}const ve=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:ve};function ge(e,t,i){if(U.randomUUID&&!t&&!e)return U.randomUUID();e=e||{};const n=e.random||(e.rng||me)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){i=i||0;for(let c=0;c<16;++c)t[i+c]=n[c];return t}return ye(n)}async function _e(e,t){const i=new URL("submissions",M),n={"Content-Type":"application/json"};t&&(n.Authorization=`Bearer ${t}`);const c=await fetch(i,{method:"POST",headers:n,body:JSON.stringify(e)});if(!c.ok){const l=`An error has occured: ${c.status}`;throw console.error(c),new Error(l)}}async function Se(e,t,i,n){const c=j(),s=H().getCurrentOffsetTime().toISOString(),d={id:ge(),payloadType:"SURVEY_RESPONSE",payload:{type:"SURVEY_RESPONSE",surveyResponse:{surveyName:t.name,surveyVersion:t.version,surveyType:t.surveyType,interventionId:t.interventionId,recordedAt:s,surveyResponse:i}},experimentId:e._embedded.trial.experiment.id,participantId:e.id,clientInfo:c,metadata:"",initiatedAt:s,submittedAt:s,protocolEntryId:t.id,trialId:e._embedded.trial.id};return _e(d,n)}const he={key:0},Ie={key:1},be=F({__name:"UserSurveyView",props:{surveyId:null},setup(e){const t=e,{user:i,getAccessTokenSilently:n}=G(),c=i,l=Z(),s=K(),d=ee(),h=Q(),p=u(()=>c.value.user_metadata.participantId),I=u(()=>d.getCachedParticipant(p.value)),E=u(()=>d.getCachedParticipantSurveys(p.value)),P=u(()=>{var a;return(a=E.value)==null?void 0:a.find(r=>r.id===t.surveyId)}),v=u(()=>{var a;return(a=P.value)==null?void 0:a.survey}),T=u(()=>!!(I.value&&v.value)),f=_(),w=_(),g=u(()=>`userSurvey:${t.surveyId}`),x=_(!1);Y(async()=>{const a=te(g.value);f.value=a.oldData,w.value=a.oldPageIndex;try{const r=await n();await Promise.all([d.cacheParticipant(p.value,r),d.cacheParticipantSurveys(p.value,r,!0)])}catch(r){console.error("Unable to download participant info",r),h.push({path:"/error-page"})}});async function k(a){if(!T.value)throw new Error("On complete shouldn't trigger before we're loaded");const r=await n();await Se(I.value,P.value,a,r),x.value=!0,l.completedSurveys[t.surveyId]=!0,ae(g.value),s.setShowProgressBar(!1),await new Promise(L=>setTimeout(L,3e3)),h.push({path:"/user-home"})}function O(a){s.setPageCount(a.pageCount),s.setPageTitle(a.currentPage.name),s.setPageIndex(a.currentPageNo),s.setShowProgressBar(!0)}q(()=>{s.setShowProgressBar(!1)});function R(a,r){s.setPageIndex(a),s.setPageTitle(r)}function V(a,r){oe(g.value,a,r)}function B(a){s.setHelpKey(a)}return(a,r)=>C(v)?(y(),S("div",he,[z(X,{"survey-data":C(v),"initial-state":f.value,"initial-page-idx":w.value,onOnComplete:k,onOnLoaded:O,onOnPageChanged:R,onOnPartialSend:V,onHelp:B},null,8,["survey-data","initial-state","initial-page-idx"]),x.value?(y(),J(le,{key:0})):W("",!0)])):(y(),S("div",Ie,"Please Wait"))}});export{be as default};
