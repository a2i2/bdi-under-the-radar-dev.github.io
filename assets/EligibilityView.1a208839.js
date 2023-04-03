import{l as A,_ as H,c as V,s as $}from"./surveyStorage.8a707ee3.js";import{s as U}from"./surveyExampleBase.54a172d1.js";import{u as W}from"./surveyStore.d9724178.js";import{w as j,l as u,W as z,_ as G,o as c,c as q,p as K,a as X,b as J,d as Q,m as Z,e as v,D as ee,n as te,q as ae,k as y,g as S,j as ne,s as oe,X as se,Y as ie,v as re}from"./index.707e4f84.js";import{a as ce,u as le,O as ue,g as de,b as pe,p as me,c as ge,d as ve}from"./pcmServiceApi.45c4566c.js";import{u as Y}from"./storeHelpers.6434885b.js";const ye={name:"ELY1",type:"text",isRequired:!0,title:"How old are you?",inputType:"number",step:1},fe={name:"qELY1_valid",expression:"{ELY1} >= 18"},he={name:"ELY2",type:"radiogroup",isRequired:!0,title:"How would you describe your gender?",choices:[{text:"Male",value:0},{text:"Female",value:1},{text:"Non-binary",value:2},{text:"I use a different term",value:3}]},_e={name:"qELY2_valid",expression:"{ELY2} == 0"},xe={name:"ELY3",type:"radiogroup",isRequired:!0,title:"How do you rate your English ability?",choices:[{text:"Basic",value:0},{text:"Advanced",value:1},{text:"Fluent/Native Speaker",value:2}]},Ee={name:"qELY3_valid",expression:"{ELY3} > 0"},Le={name:"ELY4",type:"radiogroup",isRequired:!0,title:"Are you currently living in Australia?",choices:[{text:"No",value:0},{text:"Yes",value:1}]},Se={name:"qELY4_valid",expression:"{ELY4} > 0"},Ye={name:"ELY5",type:"radiogroup",isRequired:!0,title:"Have you thought of dying or hurting yourselves in the past six months?",choices:[{text:"Not at all",value:0},{text:"Several days",value:1},{text:"More than half the days",value:2},{text:"Nearly every day",value:3}]},qe={name:"qELY5_valid",expression:"{ELY5} > 0"},Ce={name:"ELY6",type:"radiogroup",isRequired:!0,title:"Have you seen a counsellor, psychologist, psychiatrist or other mental health professional, or General Practitioner for a mental health problem in the past six months?",choices:[{text:"No",value:0},{text:"Yes",value:1},{text:"Don't know",value:2}]},be={name:"qELY6_valid",expression:"{ELY6} == 0"},Pe={name:"description",type:"html",html:'<div class="utr-html-section"><h2>By providing your contact details, an account will be created for you, if you are eligible for the study.</h2><p>Your account will provide you with access to the Under the Radar study surveys, and periodic email notifications will be sent when surveys are available.</div>'},we={name:"preferredName",type:"text",isRequired:!0,title:"What is your preferred name?",inputType:"text",maxLength:128},Ie={name:"email",type:"text",isRequired:!0,title:"What is your email address?",inputType:"email",maxLength:128},Re={...U,pages:[{name:"Under the Radar",elements:[ye,he,xe,Le,Ye,Ce]},{name:"Under the Radar",elements:[Pe,we,Ie],visibleIf:"{__needContactPage} || ({eligible_for_study})"}],calculatedValues:[fe,_e,Ee,Se,qe,be,{name:"eligible_for_study",expression:"{qELY1_valid} && {qELY2_valid} && {qELY3_valid} && {qELY4_valid} && {qELY5_valid} && {qELY6_valid}",includeIntoResult:!0}]},De=j("experiment",()=>{const n=u(null),a=s=>{n.value=s},l=()=>{n.value=null},i=Y(z),o=Y(ce);return{setExperimentId:a,clearExperimentId:l,getESExperimentCached:i.cacheFn,getPCMExperimentCached:o.cacheFn}});const ke={},Me=n=>(K("data-v-9ff2ffc3"),n=n(),X(),n),Ne={class:"processing"},Te=Me(()=>J("h4",{class:"utr-text-h4"},"Processing. Please wait...",-1)),Be=[Te];function Fe(n,a){return c(),q("div",Ne,Be)}const Oe=G(ke,[["render",Fe],["__scopeId","data-v-9ff2ffc3"]]),Ae={ref:"container",class:"eligibility-view"},ze=Q({__name:"EligibilityView",props:{experimentId:null},setup(n){const a=n,{loginWithRedirect:l}=re(),i=W(),o=Z(),s=le(),C=De(),f=oe(),h=u(),d=u(),_=u(),b=v(()=>Re),p=v(()=>`eligibility:${a.experimentId}`),P=v(()=>i.processing);ee(()=>{const e=A(p.value);_.value=e.oldData}),te(async()=>{if(!s.acceptStudy){const e=a.experimentId?`/consent/${a.experimentId}`:"/consent-test";f.push({path:e})}try{a.experimentId&&await C.getPCMExperimentCached(a.experimentId)}catch(e){console.error(e),f.push({path:"/error-page"})}});function w(e){return!!e.eligible_for_study}function I(e){return e.ELY1>=18}function x(e){const t=e.email;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");return t}function m(e){i.setSurveyCompleted(!0),d.value=e,h.value&&(h.value.scrollTop=0)}async function R(e){i.setProcessing(!0);try{const t=x(e),r=await D(e);m(r),t&&await l({appState:{target:"/user-home"},authorizationParams:{screen_hint:"signup",login_hint:t}})}catch(t){t instanceof se?m("existing account"):m("error")}finally{i.setProcessing(!1),V(p.value)}}async function D(e){const t=w(e);if(!I(e))return"ineligible";const r={...e,accept_data_sharing:s.acceptDataSharing,accept_future_contact:s.acceptFutureContact,request_feedback:s.requestFeedback,consent:s.acceptStudy},B=await de(a.experimentId),F=await pe(a.experimentId);let E=await me(a.experimentId,B.id,r);if(!E)return"no consent";const L=E.participantCandidateMappingId,g=x(e);if(await ge(L,F.id,g,t,e),!t||!g)return"ineligible";const O=await ie(g);return await ve(L,O.id),"signed up"}function k(e){i.setSurveyCompleted(!1),o.setPageCount(e.pageCount),o.setPageTitle(e.currentPage.name),o.setPageIndex(e.currentPageNo),o.setShowProgressBar(!0);const t=s.requestFeedback||s.acceptFutureContact;e.setVariable("__needContactPage",t)}ae(()=>{o.setShowProgressBar(!1)});function M(e,t){o.setPageIndex(e),o.setPageTitle(t)}function N(e,t){const r={...e};delete r.eligible_for_study,$(p.value,r,t)}function T(){l({appState:{target:"/user-home"}})}return(e,t)=>(c(),q("div",Ae,[d.value?(c(),y(ue,{key:1,"completion-state":d.value,onOnLogin:T},null,8,["completion-state"])):(c(),y(H,{key:0,"survey-data":S(b),"initial-state":_.value,onOnComplete:R,onOnLoaded:k,onOnPageChanged:M,onOnPartialSend:N},null,8,["survey-data","initial-state"])),S(P)?(c(),y(Oe,{key:2})):ne("",!0)],512))}});export{ze as default};