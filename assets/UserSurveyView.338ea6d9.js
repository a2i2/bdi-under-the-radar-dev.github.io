import{_ as N}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.2318d611.js";import{_ as $,o as _,c as D,p as H,a as M,b as v,B as j,C as F,E as K,d as Y,m as q,e as c,l as h,D as z,q as J,g as b,f as W,k as G,h as C,s as Q}from"./index.9034a930.js";import{u as X}from"./surveyStore.39f3f28f.js";import{u as Z}from"./participantStore.4575f4d0.js";import{l as ee,c as te,s as oe}from"./surveyStorage.34c3760f.js";import{u as ae}from"./authUtils.cfaa08b0.js";const ne="/bdi-under-the-radar-dev.github.io/assets/complete.da7ee872.svg";const re={},E=e=>(H("data-v-2871fe08"),e=e(),M(),e),se={class:"survey-complete-page"},ie=E(()=>v("img",{src:ne,alt:"Complete",draggable:"false"},null,-1)),ue=E(()=>v("div",{class:"scp-text"},[v("h4",null,"Thank you for completing this survey"),v("h5",null,"Please don't close this browser tab, we're redirecting you back to your surveys")],-1)),ce=[ie,ue];function de(e,t){return _(),D("article",se,ce)}const le=$(re,[["render",de],["__scopeId","data-v-2871fe08"]]);let y;const pe=new Uint8Array(16);function me(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(pe)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function ye(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}const ve=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:ve};function ge(e,t,u){if(U.randomUUID&&!t&&!e)return U.randomUUID();e=e||{};const r=e.random||(e.rng||me)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){u=u||0;for(let i=0;i<16;++i)t[u+i]=r[i];return t}return ye(r)}async function he(e,t){const u=new URL("submissions",K),r={"Content-Type":"application/json"};t&&(r.Authorization=`Bearer ${t}`);const i=await fetch(u,{method:"POST",headers:r,body:JSON.stringify(e)});if(!i.ok){const l=`An error has occured: ${i.status}`;throw console.error(i),new Error(l)}}async function _e(e,t,u,r){const i=j(),n=F().getCurrentOffsetTime().toISOString(),d={id:ge(),payloadType:"SURVEY_RESPONSE",payload:{type:"SURVEY_RESPONSE",surveyResponse:{surveyName:t.name,surveyVersion:t.version,surveyType:t.surveyType,interventionId:t.interventionId,recordedAt:n,surveyResponse:u}},experimentId:e._embedded.trial.experiment.id,participantId:e.id,clientInfo:i,metadata:"",initiatedAt:n,submittedAt:n,protocolEntryId:t.id,trialId:e._embedded.trial.id};return he(d,r)}const Se={key:0},Ce=Y({__name:"UserSurveyView",props:{surveyId:null},setup(e){const t=e,{user:u,getAccessTokenOrRedirect:r}=ae(),i=u,l=X(),n=q(),d=Z(),S=Q(),p=c(()=>i.value.user_metadata.participantId),f=c(()=>d.getCachedParticipant(p.value)),O=c(()=>d.getCachedParticipantSurveys(p.value)),I=c(()=>{var o;return(o=O.value)==null?void 0:o.find(s=>s.id===t.surveyId)}),m=c(()=>{var o;return(o=I.value)==null?void 0:o.survey}),T=c(()=>!!(f.value&&m.value)),w=h(),P=h(),g=c(()=>`userSurvey:${t.surveyId}`),x=h(!1);z(async()=>{const o=ee(g.value);w.value=o.oldData,P.value=o.oldPageIndex;try{n.openLoadingOverlay();const s=await r();if(await Promise.all([d.cacheParticipant(p.value,s),d.cacheParticipantSurveys(p.value,s,!0)]),!m.value)throw new Error(`Could not find the survey: ${t.surveyId}`)}catch(s){console.error("Unable to download participant info",s),S.push({path:"/survey-not-found"})}finally{n.closeLoadingOverlay()}});async function R(o){if(!T.value)throw new Error("On complete shouldn't trigger before we're loaded");const s=await r();await _e(f.value,I.value,o,s),x.value=!0,l.completedSurveys[t.surveyId]=!0,te(g.value),n.setShowProgressBar(!1),await new Promise(A=>setTimeout(A,2e3)),S.push({path:"/user-home"})}function k(o){n.setPageCount(o.pageCount),n.setPageTitle(o.currentPage.name),n.setPageIndex(o.currentPageNo),n.setShowProgressBar(!0)}J(()=>{n.setShowProgressBar(!1)});function V(o,s){n.setPageIndex(o),n.setPageTitle(s)}function B(o,s){oe(g.value,o,s)}function L(o){n.setHelpKey(o)}return(o,s)=>b(m)?(_(),D("div",Se,[W(N,{"survey-data":b(m),"initial-state":w.value,"initial-page-idx":P.value,onOnComplete:R,onOnLoaded:k,onOnPageChanged:V,onOnPartialSend:B,onHelp:L},null,8,["survey-data","initial-state","initial-page-idx"]),x.value?(_(),G(le,{key:0})):C("",!0)])):C("",!0)}});export{Ce as default};
