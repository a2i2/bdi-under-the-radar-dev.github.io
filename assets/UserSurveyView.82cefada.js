import{_ as T}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.4b4ea4ee.js";import{_ as Y,o as h,c as U,p as $,b as A,e as y,f as F,y as G,w as H,h as r,x as d,S as M,B as K,k as C,j,v as q,m as L,C as z,U as J,V as Q,D as W}from"./index.7ccfd875.js";import{u as X}from"./surveyStore.a5018296.js";import{l as Z,s as ee,c as te}from"./surveyStorage.34c3760f.js";const ae="/assets/survey-complete.0b18e9c3.svg";const oe={},x=n=>($("data-v-548baabb"),n=n(),A(),n),se={class:"survey-complete-page"},re=x(()=>y("img",{src:ae,alt:"Complete",draggable:"false"},null,-1)),ne=x(()=>y("div",{class:"scp-text"},[y("h4",null,"Thank you for completing this survey"),y("h5",null,"Please don't close this browser tab, we're redirecting you back to your surveys")],-1)),ue=[re,ne];function ce(n,a){return h(),U("article",se,ue)}const le=Y(oe,[["render",ce],["__scopeId","data-v-548baabb"]]),ie={key:0},_e=F({__name:"UserSurveyView",props:{surveyId:null},setup(n){const a=n,{user:V}=W(),f=X(),o=G(),u=H(),l=z(),c=r(()=>{var e,t;return(t=(e=V.value)==null?void 0:e.user_metadata.participantId)!=null?t:""}),i=r(()=>u.getCachedParticipant(c.value)),B=r(()=>u.getCachedParticipantSurveys(c.value)),_=r(()=>{var e;return(e=B.value)==null?void 0:e.find(t=>t.id===a.surveyId)}),v=r(()=>{var e;return(e=_.value)==null?void 0:e.survey}),N=r(()=>!!(i.value&&v.value)),m=d(),S=d(),I=d(),g=r(()=>`userSurvey:${a.surveyId}`),P=d(!1);async function b(e=!1){if(await Promise.all([u.cacheParticipant(c.value),u.cacheParticipantSurveys(c.value,e),u.cacheParticipantProtocolEntries(c.value,e)]),!v.value)throw new Error(`Could not find the survey: ${a.surveyId}`)}M(async()=>{var t;const e=Z(g.value);m.value=e.oldData,S.value=e.oldPageIndex;try{o.openLoadingOverlay(),await b(!0),(((t=_.value)==null?void 0:t.completed)||f.completedSurveys[a.surveyId])&&l.push({path:"/your-surveys"})}catch(s){console.error("Unable to download participant info",s),l.push({path:"/survey-not-found"})}finally{o.closeLoadingOverlay()}});function k(e){o.setPageCount(e.pageCount),o.setShowProgressBar(!0),E(e.currentPageNo,null,e.currentPage.name)}K(()=>{o.setShowProgressBar(!1)});function E(e,t,s){if(o.setPageIndex(e),o.setPageTitle(s),I.value!==e){I.value=e;const p=[];t===null?p.push({event_type:m.value?"CONTINUE_SURVEY":"BEGIN_SURVEY",surveyId:a.surveyId}):p.push({event_type:"FINISH_SURVEY_PAGE",page_index:t,surveyId:a.surveyId}),p.push({event_type:"OPEN_SURVEY_PAGE",page_index:e,surveyId:a.surveyId}),w(...p)}}function R(e,t){ee(g.value,e,t)}function D(e){o.setHelpKey(e)}async function O(e,t){if(!N.value)throw new Error("On complete shouldn't trigger before we're loaded");P.value=!0;try{await Promise.all([J(i.value,_.value,e),w({event_type:"FINISH_SURVEY_PAGE",page_index:t,surveyId:a.surveyId},{event_type:"COMPLETE_SURVEY",surveyId:a.surveyId})]),f.completedSurveys[a.surveyId]=!0,te(g.value),o.setShowProgressBar(!1),await new Promise(s=>setTimeout(s,2e3)),l.push({path:"/your-surveys"})}catch(s){console.error("Unable to submit survey",s),l.push({path:"/error-page"})}}async function w(...e){await b();const t=await u.getEventLogProtocolId(c.value);if(!i.value||!t)throw new Error("Unable to post event log: participant or eventLogProtocolId is null");Q(i.value,t,e)}return(e,t)=>C(v)?(h(),U("div",ie,[j(T,{"survey-data":C(v),"initial-state":m.value,"initial-page-idx":S.value,onComplete:O,onLoaded:k,onPageChanged:E,onPartialSend:R,onHelp:D},null,8,["survey-data","initial-state","initial-page-idx"]),P.value?(h(),q(le,{key:0})):L("",!0)])):L("",!0)}});export{_e as default};
