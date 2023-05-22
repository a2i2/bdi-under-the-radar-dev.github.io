import{v as L,_ as G}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.ab4837da.js";import{_ as $,o as h,c as U,p as F,a as K,b as f,Q as N,R as V,S as j,T as q,d as J,q as Q,e as d,n as m,U as z,v as W,g as x,f as X,m as Z,i as C,w as ee,x as te}from"./index.9faddd39.js";import{u as oe}from"./surveyStore.d0cf9d76.js";import{f as R,u as ae}from"./participantStore.ce31881a.js";import{l as se,s as re,c as ne}from"./surveyStorage.34c3760f.js";import"./storeHelpers.4c96aa6f.js";const ue="/assets/complete.da7ee872.svg";const ie={},A=a=>(F("data-v-2871fe08"),a=a(),K(),a),ce={class:"survey-complete-page"},de=A(()=>f("img",{src:ue,alt:"Complete",draggable:"false"},null,-1)),le=A(()=>f("div",{class:"scp-text"},[f("h4",null,"Thank you for completing this survey"),f("h5",null,"Please don't close this browser tab, we're redirecting you back to your surveys")],-1)),pe=[de,le];function ve(a,t){return h(),U("article",ce,pe)}const ye=$(ie,[["render",ve],["__scopeId","data-v-2871fe08"]]);async function D(a){const t=new URL("submissions",j),u=await q(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!u.ok){const s=`An error has occured: ${u.status}`;throw console.error(u),new Error(s)}}async function me(a,t,l){const u=N(),r=V().getCurrentOffsetTime(),i=R(r,"Y-MM-dd'T'HH:mm:ssx"),n=r.toISOString(),c={id:L(),payloadType:"SURVEY_RESPONSE",payload:{type:"SURVEY_RESPONSE",surveyResponse:{surveyName:t.name,surveyVersion:t.version,surveyType:t.surveyType,interventionId:t.interventionId,recordedAt:i,surveyResponse:l}},experimentId:a._embedded.trial.experiment.id,participantId:a.id,clientInfo:u,metadata:"",initiatedAt:i,submittedAt:n,protocolEntryId:t.id,trialId:a._embedded.trial.id};return D(c)}async function fe(a,t,l){const u=N(),r=V().getCurrentOffsetTime(),i=R(r,"Y-MM-dd'T'HH:mm:ssx"),n=r.toISOString(),c={id:L(),payloadType:"EVENT_LOG",payload:{type:"EVENT_LOG",eventLogs:l.map(_=>({event:_,recordedAt:i}))},experimentId:a._embedded.trial.experiment.id,participantId:a.id,clientInfo:u,metadata:"",initiatedAt:i,submittedAt:n,protocolEntryId:t,trialId:a._embedded.trial.id};return D(c)}const _e={key:0},be=J({__name:"UserSurveyView",props:{surveyId:null},setup(a){const t=a,{user:l}=te(),u=oe(),s=Q(),r=ae(),i=ee(),n=d(()=>{var e,o;return(o=(e=l.value)==null?void 0:e.user_metadata.participantId)!=null?o:""}),c=d(()=>r.getCachedParticipant(n.value)),_=d(()=>r.getCachedParticipantSurveys(n.value)),I=d(()=>{var e;return(e=_.value)==null?void 0:e.find(o=>o.id===t.surveyId)}),v=d(()=>{var e;return(e=I.value)==null?void 0:e.survey}),Y=d(()=>!!(c.value&&v.value)),g=m(),E=m(),P=m(),S=d(()=>`userSurvey:${t.surveyId}`),b=m(!1);async function T(e=!1){if(await Promise.all([r.cacheParticipant(n.value),r.cacheParticipantSurveys(n.value,e),r.cacheParticipantProtocolEntries(n.value,e)]),!v.value)throw new Error(`Could not find the survey: ${t.surveyId}`)}z(async()=>{const e=se(S.value);g.value=e.oldData,E.value=e.oldPageIndex;try{s.openLoadingOverlay(),await T(!0)}catch(o){console.error("Unable to download participant info",o),i.push({path:"/survey-not-found"})}finally{s.closeLoadingOverlay()}});function B(e){s.setPageCount(e.pageCount),s.setShowProgressBar(!0),w(e.currentPageNo,null,e.currentPage.name)}W(()=>{s.setShowProgressBar(!1)});function w(e,o,p){if(s.setPageIndex(e),s.setPageTitle(p),P.value!==e){P.value=e;const y=[];o===null?y.push({event_type:g.value?"CONTINUE_SURVEY":"BEGIN_SURVEY",surveyId:t.surveyId}):y.push({event_type:"FINISH_SURVEY_PAGE",page_index:o,surveyId:t.surveyId}),y.push({event_type:"OPEN_SURVEY_PAGE",page_index:e,surveyId:t.surveyId}),O(...y)}}function k(e,o){re(S.value,e,o)}function H(e){s.setHelpKey(e)}async function M(e,o){if(!Y.value)throw new Error("On complete shouldn't trigger before we're loaded");b.value=!0;try{await Promise.all([me(c.value,I.value,e),O({event_type:"FINISH_SURVEY_PAGE",page_index:o,surveyId:t.surveyId},{event_type:"COMPLETE_SURVEY",surveyId:t.surveyId})]),u.completedSurveys[t.surveyId]=!0,ne(S.value),s.setShowProgressBar(!1),await new Promise(p=>setTimeout(p,2e3)),i.push({path:"/user-home"})}catch(p){console.error("Unable to submit survey",p),i.push({path:"/error-page"})}}async function O(...e){await T();const o=await r.getEventLogProtocolId(n.value);if(!c.value||!o)throw new Error("Unable to post event log: participant or eventLogProtocolId is null");fe(c.value,o,e)}return(e,o)=>x(v)?(h(),U("div",_e,[X(G,{"survey-data":x(v),"initial-state":g.value,"initial-page-idx":E.value,onComplete:M,onLoaded:B,onPageChanged:w,onPartialSend:k,onHelp:H},null,8,["survey-data","initial-state","initial-page-idx"]),b.value?(h(),Z(ye,{key:0})):C("",!0)])):C("",!0)}});export{be as default};
