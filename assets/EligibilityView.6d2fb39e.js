import{_ as M}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.b0f32ecf.js";import{s as N}from"./surveyExampleBase.55db71c1.js";import{v as O,l,X as H,d as A,m as U,e as L,D as W,n as V,q as $,c as K,k as _,g as z,s as G,Y as X,Z,o as g}from"./index.48b232f6.js";import{a as j,u as J,O as Q,g as ee,b as te,p as ae,c as ne,d as oe}from"./pcmServiceApi.f21aafd1.js";import{a as Y,u as ie}from"./authUtils.b30249ac.js";import{l as re,c as se,s as le}from"./surveyStorage.34c3760f.js";const ce={name:"ELY1",type:"text",isRequired:!0,title:"How old are you?",inputType:"number",step:1},ue={name:"qELY1_valid",expression:"{ELY1} >= 18"},de={name:"ELY2",type:"radiogroup",isRequired:!0,title:"How would you describe your gender?",choices:[{text:"Male",value:0},{text:"Female",value:1},{text:"Non-binary",value:2},{text:"I use a different term",value:3}]},pe={name:"qELY2_valid",expression:"{ELY2} == 0"},me={name:"ELY3",type:"radiogroup",isRequired:!0,title:"How do you rate your English ability?",choices:[{text:"Basic",value:0},{text:"Advanced",value:1},{text:"Fluent/Native Speaker",value:2}]},ge={name:"qELY3_valid",expression:"{ELY3} > 0"},ve={name:"ELY4",type:"radiogroup",isRequired:!0,title:"Are you currently living in Australia?",choices:[{text:"No",value:0},{text:"Yes",value:1}]},ye={name:"qELY4_valid",expression:"{ELY4} > 0"},he={name:"ELY5",type:"radiogroup",isRequired:!0,title:"Have you thought of dying or hurting yourselves in the past six months?",choices:[{text:"Not at all",value:0},{text:"Several days",value:1},{text:"More than half the days",value:2},{text:"Nearly every day",value:3}]},fe={name:"qELY5_valid",expression:"{ELY5} > 0"},xe={name:"ELY6",type:"radiogroup",isRequired:!0,title:"Have you seen a counsellor, psychologist, psychiatrist or other mental health professional, or General Practitioner for a mental health problem in the past six months?",choices:[{text:"No",value:0},{text:"Yes",value:1},{text:"Don't know",value:2}]},Ee={name:"qELY6_valid",expression:"{ELY6} == 0"},Le={name:"description",type:"html",html:'<div class="utr-html-section"><h2>By providing your contact details, an account will be created for you, if you are eligible for the study.</h2><p>Your account will provide you with access to the Under the Radar study surveys, and periodic email notifications will be sent when surveys are available.</div>'},_e={name:"preferredName",type:"text",isRequired:!0,title:"What is your preferred name?",inputType:"text",maxLength:128},Ye={name:"email",type:"text",isRequired:!0,title:"What is your email address?",inputType:"email",maxLength:128},qe={...N,pages:[{name:"Under the Radar",elements:[ce,de,me,ve,he,xe]},{name:"Under the Radar",elements:[Le,_e,Ye],visibleIf:"{__needContactPage} || ({eligible_for_study})"}],calculatedValues:[ue,pe,ge,ye,fe,Ee,{name:"eligible_for_study",expression:"{qELY1_valid} && {qELY2_valid} && {qELY3_valid} && {qELY4_valid} && {qELY5_valid} && {qELY6_valid}",includeIntoResult:!0}]},Se=O("experiment",()=>{const r=l(null),n=c=>{r.value=c},s=()=>{r.value=null},a=Y(H),o=Y(j);return{setExperimentId:n,clearExperimentId:s,getESExperimentCached:a.cacheFn,getPCMExperimentCached:o.cacheFn}}),Ce={ref:"container",class:"eligibility-view"},ke=A({__name:"EligibilityView",props:{experimentId:null},setup(r){const n=r,{loginWithRedirect:s}=ie(),a=U(),o=J(),c=Se(),v=G(),y=l(),u=l(),h=l(),q=L(()=>qe),d=L(()=>`eligibility:${n.experimentId}`);W(()=>{const e=re(d.value);h.value=e.oldData}),V(async()=>{if(!o.acceptStudy){const e=n.experimentId?`/consent/${n.experimentId}`:"/consent-test";v.push({path:e})}try{n.experimentId&&await c.getPCMExperimentCached(n.experimentId)}catch(e){console.error(e),v.push({path:"/error-page"})}});function S(e){return!!e.eligible_for_study}function C(e){return e.ELY1>=18}function f(e){const t=e.email;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");return t}function p(e){u.value=e,y.value&&(y.value.scrollTop=0)}async function b(e){a.openLoadingOverlay();try{const t=f(e),i=await w(e);p(i),t&&await s({appState:{target:"/user-home"},authorizationParams:{screen_hint:"signup",login_hint:t}})}catch(t){t instanceof X?p("existing account"):p("error")}finally{a.closeLoadingOverlay(),se(d.value)}}async function w(e){const t=S(e);if(!C(e))return"ineligible";const i={...e,accept_data_sharing:o.acceptDataSharing,accept_future_contact:o.acceptFutureContact,request_feedback:o.requestFeedback,consent:o.acceptStudy},T=await ee(n.experimentId),F=await te(n.experimentId);let x=await ae(n.experimentId,T.id,i);if(!x)return"no consent";const E=x.participantCandidateMappingId,m=f(e);if(await ne(E,F.id,m,t,e),!t||!m)return"ineligible";const B=await Z(m);return await oe(E,B.id),"signed up"}function P(e){a.setPageCount(e.pageCount),a.setPageTitle(e.currentPage.name),a.setPageIndex(e.currentPageNo),a.setShowProgressBar(!0);const t=o.requestFeedback||o.acceptFutureContact;e.setVariable("__needContactPage",t)}$(()=>{a.setShowProgressBar(!1)});function R(e,t){a.setPageIndex(e),a.setPageTitle(t)}function I(e,t){const i={...e};delete i.eligible_for_study,le(d.value,i,t)}function D(){s({appState:{target:"/user-home"}})}function k(e){a.setHelpKey(e)}return(e,t)=>(g(),K("div",Ce,[u.value?(g(),_(Q,{key:1,"completion-state":u.value,onOnLogin:D},null,8,["completion-state"])):(g(),_(M,{key:0,"survey-data":z(q),"initial-state":h.value,onOnComplete:b,onOnLoaded:P,onOnPageChanged:R,onOnPartialSend:I,onHelp:k},null,8,["survey-data","initial-state"]))],512))}});export{ke as default};
