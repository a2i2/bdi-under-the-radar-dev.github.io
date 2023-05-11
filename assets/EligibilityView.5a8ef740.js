import{B as M,s as u,al as N,f as H,v as O,g as Y,U as A,w as U,x as V,c as $,q,i as K,y as W,O as z,am as G,an as j,o as h,z as J}from"./index.bd7cb1d7.js";import{s as Q}from"./surveyExampleBase.55db71c1.js";import{a as X,u as Z,O as ee,g as te,b as ae,p as ne,c as ie,d as oe}from"./pcmServiceApi.61924f5a.js";import{u as S}from"./storeHelpers.43798036.js";import{l as se,c as re,s as le}from"./surveyStorage.34c3760f.js";import{_ as ue}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.c2eeb21e.js";const ce={name:"ELY1",type:"text",isRequired:!0,title:"How old are you?",inputType:"number",step:1},de={name:"qELY1_valid",expression:"{ELY1} >= 18"},pe={name:"ELY2",type:"radiogroup",isRequired:!0,title:"How would you describe your gender?",choices:[{text:"Male",value:0},{text:"Female",value:1},{text:"Non-binary",value:2},{text:"I use a different term",value:3}]},me={name:"qELY2_valid",expression:"{ELY2} == 0"},ye={name:"ELY3",type:"radiogroup",isRequired:!0,title:"How do you rate your English ability?",choices:[{text:"Basic",value:0},{text:"Advanced",value:1},{text:"Fluent/Native Speaker",value:2}]},ve={name:"qELY3_valid",expression:"{ELY3} > 0"},ge={name:"ELY4",type:"radiogroup",isRequired:!0,title:"Are you currently living in Australia?",choices:[{text:"No",value:0},{text:"Yes",value:1}]},he={name:"qELY4_valid",expression:"{ELY4} > 0"},fe={name:"ELY5",type:"radiogroup",isRequired:!0,title:"Have you thought of dying or hurting yourselves in the past six months?",choices:[{text:"Not at all",value:0},{text:"Several days",value:1},{text:"More than half the days",value:2},{text:"Nearly every day",value:3}]},xe={name:"qELY5_valid",expression:"{ELY5} > 0"},Ee={name:"ELY6",type:"radiogroup",isRequired:!0,title:"Have you seen a counsellor, psychologist, psychiatrist or other mental health professional, or General Practitioner for a mental health problem in the past six months?",choices:[{text:"No",value:0},{text:"Yes",value:1},{text:"Don't know",value:2}]},Le={name:"qELY6_valid",expression:"{ELY6} == 0"},_e={name:"description",type:"html",html:'<div class="utr-html-section"><h2>To protect your privacy and the confidentiality of your data, we will ask you to register with the study using an active email address.</h2><p>Your account will provide you with access to the Under the Radar study surveys, and periodic email notifications will be sent when surveys are available.</div>'},Ye={name:"preferredName",type:"text",isRequired:!0,title:"What is your preferred name?",inputType:"text",maxLength:128},qe={name:"email",type:"text",isRequired:!0,title:"What is your email address?",inputType:"email",maxLength:128},Se={...Q,pages:[{name:"Under the Radar",elements:[ce,pe,ye,ge,fe,Ee]},{name:"Under the Radar",elements:[_e,Ye,qe],visibleIf:"{__needContactPage} || ({eligible_for_study})"}],calculatedValues:[de,me,ve,he,xe,Le,{name:"eligible_for_study",expression:"{qELY1_valid} && {qELY2_valid} && {qELY3_valid} && {qELY4_valid} && {qELY5_valid} && {qELY6_valid}",includeIntoResult:!0}]},Ce=M("experiment",()=>{const s=u(null),n=d=>{s.value=d},c=()=>{s.value=null},a=S(N),o=S(X);return{setExperimentId:n,clearExperimentId:c,getESExperimentCached:a.cacheFn,getPCMExperimentCached:o.cacheFn}}),ke=H({__name:"EligibilityView",props:{experimentId:null},setup(s){const n=s,c=J(),a=O(),o=Z(),d=Ce(),r=W(),p=u(),m=u(),f=u(),C=Y(()=>Se),y=Y(()=>`eligibility:${n.experimentId}`);A(()=>{const e=se(y.value);f.value=e.oldData}),U(async()=>{if(!o.acceptStudy){const e=n.experimentId?`/consent/${n.experimentId}`:"/consent-test";r.push({path:e})}try{n.experimentId&&await d.getPCMExperimentCached(n.experimentId)}catch(e){console.error(e),r.push({path:"/error-page"})}});function w(e){return!!e.eligible_for_study}function b(e){return e.ELY1>=18}function x(e){const t=e.email;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");return t}function v(e){m.value=e,p.value&&(p.value.scrollTop=0)}async function P(e){a.openLoadingOverlay();let t=!0;try{const i=x(e),g=await R(e);v(g),i&&(a.closeLoadingOverlay(),t=!1,await z(10*1e3),r.push("/login"))}catch(i){i instanceof G?v("existing account"):v("error")}finally{t&&a.closeLoadingOverlay(),re(y.value)}}async function R(e){const t=w(e);if(!b(e))return"ineligible";const i={...e,accept_data_sharing:o.acceptDataSharing,accept_future_contact:o.acceptFutureContact,request_feedback:o.requestFeedback,consent:o.acceptStudy},g=await te(n.experimentId),E=await ae(n.experimentId);let L=await ne(n.experimentId,g.id,i);if(!L)return"no consent";const _=L.participantCandidateMappingId,l=x(e);if(await ie(_,E.id,l,t,e),!t||!l)return"ineligible";c.storeEmail(l);const B=await j(l);return await oe(_,B.id),"signed up"}function I(e){a.setPageCount(e.pageCount),a.setPageTitle(e.currentPage.name),a.setPageIndex(e.currentPageNo),a.setShowProgressBar(!0);const t=o.requestFeedback||o.acceptFutureContact;e.setVariable("__needContactPage",t)}V(()=>{a.setShowProgressBar(!1)});function T(e,t,i){a.setPageIndex(e),a.setPageTitle(i)}function k(e,t){const i={...e};delete i.eligible_for_study,le(y.value,i,t)}function D(){r.push("/login")}function F(e){a.setHelpKey(e)}return(e,t)=>(h(),$("div",{ref_key:"surveyContainerRef",ref:p,class:"eligibility-view"},[m.value?(h(),q(ee,{key:1,"completion-state":m.value,onLogin:D},null,8,["completion-state"])):(h(),q(ue,{key:0,"survey-data":K(C),"initial-state":f.value,onComplete:P,onLoaded:I,onPageChanged:T,onPartialSend:k,onHelp:F},null,8,["survey-data","initial-state"]))],512))}});export{ke as default};
