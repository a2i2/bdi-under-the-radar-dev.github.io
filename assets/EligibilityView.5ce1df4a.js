import{E as H,x as c,au as b,av as O,f as U,y as W,h as Y,S as $,z as V,B as G,c as K,v as q,k as z,C as j,N as J,aw as Q,ax as Z,o as h,D as ee}from"./index.e8371638.js";import{s as te}from"./surveyExampleBase.55db71c1.js";import{a as ae,u as ne,O as ie,g as oe,b as se,p as re,c as le,d as ue}from"./pcmServiceApi.f35e3781.js";import{l as ce,c as de,s as pe}from"./surveyStorage.34c3760f.js";import{_ as me}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.de9fa97b.js";const ye={name:"ELY1",type:"text",isRequired:!0,title:"How old are you?",inputType:"number",step:1},ge={name:"qELY1_valid",expression:"{ELY1} >= 18"},ve={name:"ELY2",type:"radiogroup",isRequired:!0,title:"How would you describe your gender?",choices:[{text:"Male",value:0},{text:"Female",value:1},{text:"Non-binary",value:2},{text:"I use a different term",value:3}]},he={name:"qELY2_valid",expression:"{ELY2} == 0"},fe={name:"ELY3",type:"radiogroup",isRequired:!0,title:"How do you rate your English ability?",choices:[{text:"Basic",value:0},{text:"Advanced",value:1},{text:"Fluent/Native Speaker",value:2}]},xe={name:"qELY3_valid",expression:"{ELY3} > 0"},Ee={name:"ELY4",type:"radiogroup",isRequired:!0,title:"Are you currently living in Australia?",choices:[{text:"No",value:0},{text:"Yes",value:1}]},Le={name:"qELY4_valid",expression:"{ELY4} > 0"},_e={name:"ELY5",type:"radiogroup",isRequired:!0,title:"Have you thought of dying or hurting yourself in the past six months?",choices:[{text:"Not at all",value:0},{text:"Several days",value:1},{text:"More than half the days",value:2},{text:"Nearly every day",value:3}]},be={name:"qELY5_valid",expression:"{ELY5} > 0"},Ye={name:"ELY6",type:"radiogroup",isRequired:!0,title:"Have you seen a counsellor, psychologist, psychiatrist or other mental health professional, or General Practitioner for a mental health problem in the past six months?",choices:[{text:"No",value:0},{text:"Yes",value:1},{text:"Don't know",value:2}]},qe={name:"qELY6_valid",expression:"{ELY6} == 0"},we={name:"description",type:"html",html:'<div class="utr-html-section"><h2>To protect your privacy and the confidentiality of your data, we will ask you to register with the study using an active email address.</h2><p>Your account will provide you with access to the Under the Radar study surveys, and periodic email notifications will be sent when surveys are available.</div>'},Se={name:"preferredName",type:"text",isRequired:!0,title:"What is your preferred name?",inputType:"text",maxLength:128},Ce={name:"email",type:"text",isRequired:!0,title:"What is your email address?",inputType:"email",autocomplete:"email",maxLength:128},Pe={name:"mobile",type:"text",isRequired:!0,title:"What is your mobile number?",description:"Your mobile number will only be used for sending a One Time Password which will allow you to log in.",placeholder:"04XXXXXXXX",inputType:"tel",autocomplete:"tel",validators:[{type:"regex",regex:"^(0|\\+61)4[0-9]{8}$",text:"Please enter a valid Australian mobile number"}]},Re={...te,pages:[{name:"Under the Radar",elements:[ye,ve,fe,Ee,_e,Ye]},{name:"Under the Radar",elements:[we,Se,Ce,Pe],visibleIf:"{__needContactPage} || ({eligible_for_study})"}],calculatedValues:[ge,he,xe,Le,be,qe,{name:"eligible_for_study",expression:"{qELY1_valid} && {qELY2_valid} && {qELY3_valid} && {qELY4_valid} && {qELY5_valid} && {qELY6_valid}",includeIntoResult:!0}]},Ie=H("experiment",()=>{const s=c(null),i=d=>{s.value=d},r=()=>{s.value=null},n=b(O),o=b(ae);return{setExperimentId:i,clearExperimentId:r,getESExperimentCached:n.cacheFn,getPCMExperimentCached:o.cacheFn}}),Be=U({__name:"EligibilityView",props:{experimentId:null},setup(s){const i=s,r=ee(),n=W(),o=ne(),d=Ie(),p=j(),m=c(),y=c(),f=c(),w=Y(()=>Re),g=Y(()=>`eligibility:${i.experimentId}`);$(()=>{const e=ce(g.value);f.value=e.oldData}),V(async()=>{if(!o.acceptStudy){const e=i.experimentId?`/consent/${i.experimentId}`:"/consent-test";p.push({path:e})}try{i.experimentId&&await d.getPCMExperimentCached(i.experimentId)}catch(e){console.error(e),p.push({path:"/error-page"})}});function S(e){return!!e.eligible_for_study}function C(e){return e.ELY1>=18}function P(e){const t=e.email;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");return t}function R(e){let t=e.mobile;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");let a=t;return a.startsWith("0")&&(a="+61"+a.substring(1)),a}function v(e){y.value=e,m.value&&(m.value.scrollTop=0)}async function I(e){n.openLoadingOverlay();let t=!0;try{const a=await T(e);v(a),a==="signed up"&&(n.closeLoadingOverlay(),t=!1,await J(10*1e3),p.push("/login"))}catch(a){a instanceof Q?v("existing account"):v("error")}finally{t&&n.closeLoadingOverlay(),de(g.value)}}async function T(e){const t=S(e);if(!C(e))return"ineligible";const a={...e,accept_data_sharing:o.acceptDataSharing,accept_future_contact:o.acceptFutureContact,request_feedback:o.requestFeedback,consent:o.acceptStudy},x=await oe(i.experimentId),B=await se(i.experimentId);let E=await re(i.experimentId,x.id,a);if(!E)return"no consent";const L=E.participantCandidateMappingId,l=P(e),u=R(e);let _=await le(L,B.id,l,u,t,e);const F=l&&u,X=_&&_.state!=="INELIGIBLE";if(!(t&&F&&X))return"ineligible";r.storeEmail(l),r.storeMobile(u);const A=await Z(l,u);return await ue(L,A.id),"signed up"}function D(e){n.setPageCount(e.pageCount),n.setPageTitle(e.currentPage.name),n.setPageIndex(e.currentPageNo),n.setShowProgressBar(!0);const t=o.requestFeedback||o.acceptFutureContact;e.setVariable("__needContactPage",t)}G(()=>{n.setShowProgressBar(!1)});function k(e,t,a){n.setPageIndex(e),n.setPageTitle(a)}function M(e,t){const a={...e};delete a.eligible_for_study,pe(g.value,a,t)}function N(e){n.setHelpKey(e)}return(e,t)=>(h(),K("div",{ref_key:"surveyContainerRef",ref:m,class:"eligibility-view"},[y.value?(h(),q(ie,{key:1,"completion-state":y.value,"login-link":"/login"},null,8,["completion-state"])):(h(),q(me,{key:0,"survey-data":z(w),"initial-state":f.value,onComplete:I,onLoaded:D,onPageChanged:k,onPartialSend:M,onHelp:N},null,8,["survey-data","initial-state"]))],512))}});export{Be as default};
