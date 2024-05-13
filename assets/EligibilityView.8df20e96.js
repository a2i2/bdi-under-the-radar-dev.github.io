import{E as O,x as c,au as Y,av as A,f as U,y as W,h as w,S as $,z as V,B as G,c as K,v as _,k as z,C as j,N as J,aw as Q,ax as Z,o as h,D as ee}from"./index.c015f3d2.js";import{s as te}from"./surveyExampleBase.55db71c1.js";import{a as ae,u as ie,O as ne,g as oe,b as se,p as re,c as le,d as ue}from"./pcmServiceApi.65541b81.js";import{l as ce,c as de,s as pe}from"./surveyStorage.34c3760f.js";import{_ as me}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.061d8170.js";const ye={name:"ELY1-1",type:"text",isRequired:!0,title:"How old are you?",inputType:"number",step:1},ve={name:"qELY1_valid",expression:"{ELY1-1} >= 18"},ge={name:"ELY2",type:"radiogroup",isRequired:!0,title:"How would you describe your gender?",choices:[{text:"Male",value:0},{text:"Female",value:1},{text:"Non-binary",value:2},{text:"I use a different term",value:3}]},he={name:"qELY2_valid",expression:"{ELY2} == 0"},xe={name:"ELY3",type:"radiogroup",isRequired:!0,title:"How do you rate your English ability?",choices:[{text:"Basic",value:0},{text:"Advanced",value:1},{text:"Fluent/Native Speaker",value:2}]},fe={name:"qELY3_valid",expression:"{ELY3} > 0"},Ee={name:"ELY4",type:"radiogroup",isRequired:!0,title:"Are you currently living in Australia?",choices:[{text:"No",value:0},{text:"Yes",value:1}]},Le={name:"qELY4_valid",expression:"{ELY4} > 0"},be={name:"ELY5",type:"radiogroup",isRequired:!0,title:"Have you thought of dying or hurting yourself in the past six months?",choices:[{text:"Not at all",value:0},{text:"Several days",value:1},{text:"More than half the days",value:2},{text:"Nearly every day",value:3}]},Ye={name:"qELY5_valid",expression:"{ELY5} > 0"},we={name:"ELY6",type:"radiogroup",isRequired:!0,title:"Have you seen a counsellor, psychologist, psychiatrist or other mental health professional, or General Practitioner for a mental health problem in the past six months?",choices:[{text:"No",value:0},{text:"Yes",value:1},{text:"Don't know",value:2}]},_e={name:"qELY6_valid",expression:"{ELY6} == 0"},qe={name:"ELY7",type:"radiogroup",isRequired:!0,title:"How did you hear about this study?",description:"This information will help us get the word out to more people who would be interested in participating in the study.",choices:[{text:"Facebook",value:0},{text:"Instagram",value:1},{text:"X, formally known as Twitter",value:2},{text:"TikTok",value:3},{text:"Reddit",value:4},{text:"LinkedIn",value:5},{text:"YouTube",value:6},{text:"Poster/flyer/newsletter",value:7},{text:"Black Dog Institute website",value:8},{text:"Other",value:9}]},Se={name:"ELY8",type:"text",isRequired:!0,title:"Please specify",visibleIf:"{ELY7} == 9",maxLength:128},Ce={name:"description",type:"html",html:'<div class="utr-html-section"><h2>To protect your privacy and the confidentiality of your data, we will ask you to register with the study using an active email address.</h2><p>Your account will provide you with access to the Under the Radar study surveys, and periodic email notifications will be sent when surveys are available.</div>'},Ie={name:"preferredName",type:"text",isRequired:!0,title:"What is your preferred name?",inputType:"text",maxLength:128},Re={name:"email",type:"text",isRequired:!0,title:"What is your email address?",inputType:"email",autocomplete:"email",maxLength:128},Pe={name:"mobile",type:"text",isRequired:!0,title:"What is your mobile number?",description:"Your mobile number will only be used for sending a One Time Password which will allow you to log in.",placeholder:"04XXXXXXXX",inputType:"tel",autocomplete:"tel",validators:[{type:"regex",regex:"^(0|\\+61)4[0-9]{8}$",text:"Please enter a valid Australian mobile number"}]},Te={...te,pages:[{name:"Under the Radar",elements:[ye,ge,xe,Ee,be,we,qe,Se]},{name:"Under the Radar",elements:[Ce,Ie,Re,Pe],visibleIf:"{__needContactPage} || ({eligible_for_study})"}],calculatedValues:[ve,he,fe,Le,Ye,_e,{name:"eligible_for_study",expression:"{qELY1_valid} && {qELY2_valid} && {qELY3_valid} && {qELY4_valid} && {qELY5_valid} && {qELY6_valid}",includeIntoResult:!0}]},ke=O("experiment",()=>{const s=c(null),n=d=>{s.value=d},r=()=>{s.value=null},i=Y(A),o=Y(ae);return{setExperimentId:n,clearExperimentId:r,getESExperimentCached:i.cacheFn,getPCMExperimentCached:o.cacheFn}}),Xe=U({__name:"EligibilityView",props:{experimentId:null},setup(s){const n=s,r=ee(),i=W(),o=ie(),d=ke(),p=j(),m=c(),y=c(),x=c(),q=w(()=>Te),v=w(()=>`eligibility:${n.experimentId}`);$(()=>{const e=ce(v.value);x.value=e.oldData}),V(async()=>{if(!o.acceptStudy){const e=n.experimentId?`/consent/${n.experimentId}`:"/consent-test";p.push({path:e})}try{n.experimentId&&await d.getPCMExperimentCached(n.experimentId)}catch(e){console.error(e),p.push({path:"/error-page"})}});function S(e){return!!e.eligible_for_study}function C(e){return e["ELY1-1"]>=18}function I(e){const t=e.email;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");return t}function R(e){let t=e.mobile;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");let a=t;return a.startsWith("0")&&(a="+61"+a.substring(1)),a}function g(e){y.value=e,m.value&&(m.value.scrollTop=0)}async function P(e){i.openLoadingOverlay();let t=!0;try{const a=await T(e);g(a),a==="signed up"&&(i.closeLoadingOverlay(),t=!1,await J(10*1e3),p.push("/login"))}catch(a){a instanceof Q?g("existing account"):g("error")}finally{t&&i.closeLoadingOverlay(),de(v.value)}}async function T(e){const t=S(e);if(!C(e))return"ineligible";const a={...e,accept_data_sharing:o.acceptDataSharing,accept_future_contact:o.acceptFutureContact,request_feedback:o.requestFeedback,consent:o.acceptStudy},f=await oe(n.experimentId),F=await se(n.experimentId);let E=await re(n.experimentId,f.id,a);if(!E)return"no consent";const L=E.participantCandidateMappingId,l=I(e),u=R(e);let b=await le(L,F.id,l,u,t,e);const N=l&&u,X=b&&b.state!=="INELIGIBLE";if(!(t&&N&&X))return"ineligible";r.storeEmail(l),r.storeMobile(u);const H=await Z(l,u);return await ue(L,H.id),"signed up"}function k(e){i.setPageCount(e.pageCount),i.setPageTitle(e.currentPage.name),i.setPageIndex(e.currentPageNo),i.setShowProgressBar(!0);const t=o.requestFeedback||o.acceptFutureContact;e.setVariable("__needContactPage",t)}G(()=>{i.setShowProgressBar(!1)});function D(e,t,a){i.setPageIndex(e),i.setPageTitle(a)}function M(e,t){const a={...e};delete a.eligible_for_study,pe(v.value,a,t)}function B(e){i.setHelpKey(e)}return(e,t)=>(h(),K("div",{ref_key:"surveyContainerRef",ref:m,class:"eligibility-view"},[y.value?(h(),_(ne,{key:1,"completion-state":y.value,"login-link":"/login"},null,8,["completion-state"])):(h(),_(me,{key:0,"survey-data":z(q),"initial-state":x.value,onComplete:P,onLoaded:k,onPageChanged:D,onPartialSend:M,onHelp:B},null,8,["survey-data","initial-state"]))],512))}});export{Xe as default};
