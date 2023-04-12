import{_ as A}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.186a283e.js";import{s as V}from"./surveyExampleBase.55db71c1.js";import{u as $}from"./surveyStore.62dd11eb.js";import{w as U,l as u,X as W,_ as K,o as c,c as q,p as z,a as G,b as X,d as Z,m as j,e as v,D as J,n as Q,q as ee,k as y,g as S,h as te,s as ae,Y as ne,Z as oe,v as se}from"./index.11bdebe6.js";import{a as ie,u as re,O as ce,g as le,b as ue,p as de,c as pe,d as me}from"./pcmServiceApi.e747d879.js";import{u as Y}from"./storeHelpers.7364905c.js";import{l as ge,c as ve,s as ye}from"./surveyStorage.34c3760f.js";const fe={name:"ELY1",type:"text",isRequired:!0,title:"How old are you?",inputType:"number",step:1},he={name:"qELY1_valid",expression:"{ELY1} >= 18"},_e={name:"ELY2",type:"radiogroup",isRequired:!0,title:"How would you describe your gender?",choices:[{text:"Male",value:0},{text:"Female",value:1},{text:"Non-binary",value:2},{text:"I use a different term",value:3}]},xe={name:"qELY2_valid",expression:"{ELY2} == 0"},Ee={name:"ELY3",type:"radiogroup",isRequired:!0,title:"How do you rate your English ability?",choices:[{text:"Basic",value:0},{text:"Advanced",value:1},{text:"Fluent/Native Speaker",value:2}]},Le={name:"qELY3_valid",expression:"{ELY3} > 0"},Se={name:"ELY4",type:"radiogroup",isRequired:!0,title:"Are you currently living in Australia?",choices:[{text:"No",value:0},{text:"Yes",value:1}]},Ye={name:"qELY4_valid",expression:"{ELY4} > 0"},qe={name:"ELY5",type:"radiogroup",isRequired:!0,title:"Have you thought of dying or hurting yourselves in the past six months?",choices:[{text:"Not at all",value:0},{text:"Several days",value:1},{text:"More than half the days",value:2},{text:"Nearly every day",value:3}]},Ce={name:"qELY5_valid",expression:"{ELY5} > 0"},be={name:"ELY6",type:"radiogroup",isRequired:!0,title:"Have you seen a counsellor, psychologist, psychiatrist or other mental health professional, or General Practitioner for a mental health problem in the past six months?",choices:[{text:"No",value:0},{text:"Yes",value:1},{text:"Don't know",value:2}]},Pe={name:"qELY6_valid",expression:"{ELY6} == 0"},we={name:"description",type:"html",html:'<div class="utr-html-section"><h2>By providing your contact details, an account will be created for you, if you are eligible for the study.</h2><p>Your account will provide you with access to the Under the Radar study surveys, and periodic email notifications will be sent when surveys are available.</div>'},Ie={name:"preferredName",type:"text",isRequired:!0,title:"What is your preferred name?",inputType:"text",maxLength:128},Re={name:"email",type:"text",isRequired:!0,title:"What is your email address?",inputType:"email",maxLength:128},De={...V,pages:[{name:"Under the Radar",elements:[fe,_e,Ee,Se,qe,be]},{name:"Under the Radar",elements:[we,Ie,Re],visibleIf:"{__needContactPage} || ({eligible_for_study})"}],calculatedValues:[he,xe,Le,Ye,Ce,Pe,{name:"eligible_for_study",expression:"{qELY1_valid} && {qELY2_valid} && {qELY3_valid} && {qELY4_valid} && {qELY5_valid} && {qELY6_valid}",includeIntoResult:!0}]},ke=U("experiment",()=>{const o=u(null),a=s=>{o.value=s},l=()=>{o.value=null},r=Y(W),n=Y(ie);return{setExperimentId:a,clearExperimentId:l,getESExperimentCached:r.cacheFn,getPCMExperimentCached:n.cacheFn}});const Me={},Ne=o=>(z("data-v-9ff2ffc3"),o=o(),G(),o),Te={class:"processing"},Be=Ne(()=>X("h4",{class:"utr-text-h4"},"Processing. Please wait...",-1)),Fe=[Be];function He(o,a){return c(),q("div",Te,Fe)}const Oe=K(Me,[["render",He],["__scopeId","data-v-9ff2ffc3"]]),Ae={ref:"container",class:"eligibility-view"},Xe=Z({__name:"EligibilityView",props:{experimentId:null},setup(o){const a=o,{loginWithRedirect:l}=se(),r=$(),n=j(),s=re(),C=ke(),f=ae(),h=u(),d=u(),_=u(),b=v(()=>De),p=v(()=>`eligibility:${a.experimentId}`),P=v(()=>r.processing);J(()=>{const e=ge(p.value);_.value=e.oldData}),Q(async()=>{if(!s.acceptStudy){const e=a.experimentId?`/consent/${a.experimentId}`:"/consent-test";f.push({path:e})}try{a.experimentId&&await C.getPCMExperimentCached(a.experimentId)}catch(e){console.error(e),f.push({path:"/error-page"})}});function w(e){return!!e.eligible_for_study}function I(e){return e.ELY1>=18}function x(e){const t=e.email;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");return t}function m(e){d.value=e,h.value&&(h.value.scrollTop=0)}async function R(e){r.setProcessing(!0);try{const t=x(e),i=await D(e);m(i),t&&await l({appState:{target:"/user-home"},authorizationParams:{screen_hint:"signup",login_hint:t}})}catch(t){t instanceof ne?m("existing account"):m("error")}finally{r.setProcessing(!1),ve(p.value)}}async function D(e){const t=w(e);if(!I(e))return"ineligible";const i={...e,accept_data_sharing:s.acceptDataSharing,accept_future_contact:s.acceptFutureContact,request_feedback:s.requestFeedback,consent:s.acceptStudy},F=await le(a.experimentId),H=await ue(a.experimentId);let E=await de(a.experimentId,F.id,i);if(!E)return"no consent";const L=E.participantCandidateMappingId,g=x(e);if(await pe(L,H.id,g,t,e),!t||!g)return"ineligible";const O=await oe(g);return await me(L,O.id),"signed up"}function k(e){n.setPageCount(e.pageCount),n.setPageTitle(e.currentPage.name),n.setPageIndex(e.currentPageNo),n.setShowProgressBar(!0);const t=s.requestFeedback||s.acceptFutureContact;e.setVariable("__needContactPage",t)}ee(()=>{n.setShowProgressBar(!1)});function M(e,t){n.setPageIndex(e),n.setPageTitle(t)}function N(e,t){const i={...e};delete i.eligible_for_study,ye(p.value,i,t)}function T(){l({appState:{target:"/user-home"}})}function B(e){n.setHelpKey(e)}return(e,t)=>(c(),q("div",Ae,[d.value?(c(),y(ce,{key:1,"completion-state":d.value,onOnLogin:T},null,8,["completion-state"])):(c(),y(A,{key:0,"survey-data":S(b),"initial-state":_.value,onOnComplete:R,onOnLoaded:k,onOnPageChanged:M,onOnPartialSend:N,onHelp:B},null,8,["survey-data","initial-state"])),S(P)?(c(),y(Oe,{key:2})):te("",!0)],512))}});export{Xe as default};
