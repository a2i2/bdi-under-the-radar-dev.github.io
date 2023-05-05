import{_ as K}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.f46391cf.js";import{_ as q,o as P,c as D,p as z,a as J,b as I,C as N,D as A,E as W,d as Q,m as X,e as l,l as S,G as Z,q as ee,g as L,f as te,k as oe,h as R,s as ae}from"./index.e25b43af.js";import{u as ne}from"./surveyStore.1dc53e32.js";import{u as re}from"./participantStore.8c632389.js";import{l as se,s as ue,c as ie}from"./surveyStorage.34c3760f.js";import{u as ce}from"./authUtils.7f760474.js";const de="/assets/complete.da7ee872.svg";const le={},k=e=>(z("data-v-2871fe08"),e=e(),J(),e),pe={class:"survey-complete-page"},ve=k(()=>I("img",{src:de,alt:"Complete",draggable:"false"},null,-1)),ye=k(()=>I("div",{class:"scp-text"},[I("h4",null,"Thank you for completing this survey"),I("h5",null,"Please don't close this browser tab, we're redirecting you back to your surveys")],-1)),me=[ve,ye];function ge(e,t){return P(),D("article",pe,me)}const _e=q(le,[["render",ge],["__scopeId","data-v-2871fe08"]]);let h;const Se=new Uint8Array(16);function he(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(Se)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function Ie(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const fe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),O={randomUUID:fe};function B(e,t,i){if(O.randomUUID&&!t&&!e)return O.randomUUID();e=e||{};const n=e.random||(e.rng||he)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){i=i||0;for(let u=0;u<16;++u)t[i+u]=n[u];return t}return Ie(n)}async function Y(e,t){const i=new URL("submissions",W),n={"Content-Type":"application/json"};t&&(n.Authorization=`Bearer ${t}`);const u=await fetch(i,{method:"POST",headers:n,body:JSON.stringify(e)});if(!u.ok){const y=`An error has occured: ${u.status}`;throw console.error(u),new Error(y)}}async function Ee(e,t,i,n){const u=N(),r=A().getCurrentOffsetTime().toISOString(),c={id:B(),payloadType:"SURVEY_RESPONSE",payload:{type:"SURVEY_RESPONSE",surveyResponse:{surveyName:t.name,surveyVersion:t.version,surveyType:t.surveyType,interventionId:t.interventionId,recordedAt:r,surveyResponse:i}},experimentId:e._embedded.trial.experiment.id,participantId:e.id,clientInfo:u,metadata:"",initiatedAt:r,submittedAt:r,protocolEntryId:t.id,trialId:e._embedded.trial.id};return Y(c,n)}async function Pe(e,t,i,n){const u=N(),r=A().getCurrentOffsetTime().toISOString(),c={id:B(),payloadType:"EVENT_LOG",payload:{type:"EVENT_LOG",eventLogs:i.map(m=>({event:m,recordedAt:r}))},experimentId:e._embedded.trial.experiment.id,participantId:e.id,clientInfo:u,metadata:"",initiatedAt:r,submittedAt:r,protocolEntryId:t,trialId:e._embedded.trial.id};return Y(c,n)}const be={key:0},Le=Q({__name:"UserSurveyView",props:{surveyId:null},setup(e){const t=e,{user:i,getAccessTokenOrRedirect:n}=ce(),u=i,y=ne(),r=X(),c=re(),m=ae(),p=l(()=>u.value.user_metadata.participantId),g=l(()=>c.getCachedParticipant(p.value)),G=l(()=>c.getCachedParticipantSurveys(p.value)),b=l(()=>{var o;return(o=G.value)==null?void 0:o.find(a=>a.id===t.surveyId)}),_=l(()=>{var o;return(o=b.value)==null?void 0:o.survey}),$=l(()=>!!(g.value&&_.value)),f=S(),w=S(),U=S(),E=l(()=>`userSurvey:${t.surveyId}`),x=S(!1);async function C(o=!1){const a=await n();if(await Promise.all([c.cacheParticipant(p.value,a),c.cacheParticipantSurveys(p.value,a,o),c.cacheParticipantProtocolEntries(p.value,a,o)]),!_.value)throw new Error(`Could not find the survey: ${t.surveyId}`)}Z(async()=>{const o=se(E.value);f.value=o.oldData,w.value=o.oldPageIndex;try{r.openLoadingOverlay(),await C(!0)}catch(a){console.error("Unable to download participant info",a),m.push({path:"/survey-not-found"})}finally{r.closeLoadingOverlay()}});function H(o){r.setPageCount(o.pageCount),r.setShowProgressBar(!0),T(o.currentPageNo,null,o.currentPage.name)}ee(()=>{r.setShowProgressBar(!1)});function T(o,a,d){if(r.setPageIndex(o),r.setPageTitle(d),U.value!==o){U.value=o;const v=[];a===null?v.push({event_type:f.value?"CONTINUE_SURVEY":"BEGIN_SURVEY",surveyId:t.surveyId}):v.push({event_type:"FINISH_SURVEY_PAGE",page_index:a,surveyId:t.surveyId}),v.push({event_type:"OPEN_SURVEY_PAGE",page_index:o,surveyId:t.surveyId}),V(...v)}}function F(o,a){ue(E.value,o,a)}function M(o){r.setHelpKey(o)}async function j(o,a){if(!$.value)throw new Error("On complete shouldn't trigger before we're loaded");x.value=!0;try{const d=await n();await Promise.all([Ee(g.value,b.value,o,d),V({event_type:"FINISH_SURVEY_PAGE",page_index:a,surveyId:t.surveyId},{event_type:"COMPLETE_SURVEY",surveyId:t.surveyId})]),y.completedSurveys[t.surveyId]=!0,ie(E.value),r.setShowProgressBar(!1),await new Promise(v=>setTimeout(v,2e3)),m.push({path:"/user-home"})}catch(d){console.error("Unable to submit survey",d),m.push({path:"/error-page"})}}async function V(...o){await C();const a=await n(),d=await c.getEventLogProtocolId(p.value,a);if(!g.value||!d)throw new Error("Unable to post event log: participant or eventLogProtocolId is null");Pe(g.value,d,o,a)}return(o,a)=>L(_)?(P(),D("div",be,[te(K,{"survey-data":L(_),"initial-state":f.value,"initial-page-idx":w.value,onComplete:j,onLoaded:H,onPageChanged:T,onPartialSend:F,onHelp:M},null,8,["survey-data","initial-state","initial-page-idx"]),x.value?(P(),oe(_e,{key:0})):R("",!0)])):R("",!0)}});export{Le as default};
