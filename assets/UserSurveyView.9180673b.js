import{_ as N,o as y,c as S,p as A,a as $,b as v,B as H,C as M,E as j,d as F,m as K,e as u,l as h,D as Y,q,g as C,f as z,k as J,h as W,v as G,s as Q}from"./index.e80782d9.js";import{_ as X}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.d66f9a7c.js";import{u as Z}from"./surveyStore.3891fc13.js";import{u as ee}from"./participantStore.1d11b72f.js";import{l as te,c as ae,s as oe}from"./surveyStorage.34c3760f.js";import"./storeHelpers.aef3efa9.js";const ne="/bdi-under-the-radar-dev.github.io/assets/complete.da7ee872.svg";const se={},D=e=>(A("data-v-2871fe08"),e=e(),$(),e),re={class:"survey-complete-page"},ce=D(()=>v("img",{src:ne,alt:"Complete",draggable:"false"},null,-1)),ie=D(()=>v("div",{class:"scp-text"},[v("h4",null,"Thank you for completing this survey"),v("h5",null,"Please don't close this browser tab, we're redirecting you back to your surveys")],-1)),ue=[ce,ie];function de(e,t){return y(),S("article",re,ue)}const le=N(se,[["render",de],["__scopeId","data-v-2871fe08"]]);let m;const pe=new Uint8Array(16);function me(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(pe)}const o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));function ye(e,t=0){return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}const ve=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:ve};function ge(e,t,i){if(U.randomUUID&&!t&&!e)return U.randomUUID();e=e||{};const n=e.random||(e.rng||me)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){i=i||0;for(let c=0;c<16;++c)t[i+c]=n[c];return t}return ye(n)}async function _e(e,t){const i=new URL("submissions",j),n={"Content-Type":"application/json"};t&&(n.Authorization=`Bearer ${t}`);const c=await fetch(i,{method:"POST",headers:n,body:JSON.stringify(e)});if(!c.ok){const l=`An error has occured: ${c.status}`;throw console.error(c),new Error(l)}}async function he(e,t,i,n){const c=H(),s=M().getCurrentOffsetTime().toISOString(),d={id:ge(),payloadType:"SURVEY_RESPONSE",payload:{type:"SURVEY_RESPONSE",surveyResponse:{surveyName:t.name,surveyVersion:t.version,surveyType:t.surveyType,interventionId:t.interventionId,recordedAt:s,surveyResponse:i}},experimentId:e._embedded.trial.experiment.id,participantId:e.id,clientInfo:c,metadata:"",initiatedAt:s,submittedAt:s,protocolEntryId:t.id,trialId:e._embedded.trial.id};return _e(d,n)}const Se={key:0},Ie={key:1},Ue=F({__name:"UserSurveyView",props:{surveyId:null},setup(e){const t=e,{user:i,getAccessTokenSilently:n}=G(),c=i,l=Z(),s=K(),d=ee(),I=Q(),p=u(()=>c.value.user_metadata.participantId),P=u(()=>d.getCachedParticipant(p.value)),E=u(()=>d.getCachedParticipantSurveys(p.value)),w=u(()=>{var a;return(a=E.value)==null?void 0:a.find(r=>r.id===t.surveyId)}),g=u(()=>{var a;return(a=w.value)==null?void 0:a.survey}),T=u(()=>!!(P.value&&g.value)),f=h(),x=h(),_=u(()=>`userSurvey:${t.surveyId}`),b=h(!1);Y(async()=>{const a=te(_.value);f.value=a.oldData,x.value=a.oldPageIndex;try{const r=await n();await Promise.all([d.cacheParticipant(p.value,r),d.cacheParticipantSurveys(p.value,r,!0)])}catch(r){console.error("Unable to download participant info",r),I.push({path:"/error-page"})}});async function k(a){if(!T.value)throw new Error("On complete shouldn't trigger before we're loaded");const r=await n();await he(P.value,w.value,a,r),b.value=!0,l.completedSurveys[t.surveyId]=!0,ae(_.value),s.setShowProgressBar(!1),await new Promise(L=>setTimeout(L,2e3)),I.push({path:"/user-home"})}function O(a){s.setPageCount(a.pageCount),s.setPageTitle(a.currentPage.name),s.setPageIndex(a.currentPageNo),s.setShowProgressBar(!0)}q(()=>{s.setShowProgressBar(!1)});function R(a,r){s.setPageIndex(a),s.setPageTitle(r)}function V(a,r){oe(_.value,a,r)}function B(a){s.setHelpKey(a)}return(a,r)=>C(g)?(y(),S("div",Se,[z(X,{"survey-data":C(g),"initial-state":f.value,"initial-page-idx":x.value,onOnComplete:k,onOnLoaded:O,onOnPageChanged:R,onOnPartialSend:V,onHelp:B},null,8,["survey-data","initial-state","initial-page-idx"]),b.value?(y(),J(le,{key:0})):W("",!0)])):(y(),S("div",Ie,"Please Wait"))}});export{Ue as default};
