import{E as B,x as l,as as L,at as M,f as N,y as H,h as _,Q as O,z as A,B as U,c as V,v as Y,k as $,C as K,O as W,au as z,av as G,o as g,D as Q}from"./index.64a21f15.js";import{s as j}from"./surveyExampleBase.55db71c1.js";import{a as J,u as X,O as Z,g as ee,b as te,p as ae,c as ne,d as ie}from"./pcmServiceApi.7579406a.js";import{l as oe,c as se,s as re}from"./surveyStorage.34c3760f.js";import{_ as le}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.df13358e.js";const ue={name:"ELY1",type:"text",isRequired:!0,title:"How old are you?",inputType:"number",step:1},ce={name:"qELY1_valid",expression:"{ELY1} >= 18"},de={name:"ELY2",type:"radiogroup",isRequired:!0,title:"How would you describe your gender?",choices:[{text:"Male",value:0},{text:"Female",value:1},{text:"Non-binary",value:2},{text:"I use a different term",value:3}]},pe={name:"qELY2_valid",expression:"{ELY2} == 0"},me={name:"ELY3",type:"radiogroup",isRequired:!0,title:"How do you rate your English ability?",choices:[{text:"Basic",value:0},{text:"Advanced",value:1},{text:"Fluent/Native Speaker",value:2}]},ye={name:"qELY3_valid",expression:"{ELY3} > 0"},ve={name:"ELY4",type:"radiogroup",isRequired:!0,title:"Are you currently living in Australia?",choices:[{text:"No",value:0},{text:"Yes",value:1}]},ge={name:"qELY4_valid",expression:"{ELY4} > 0"},he={name:"ELY5",type:"radiogroup",isRequired:!0,title:"Have you thought of dying or hurting yourselves in the past six months?",choices:[{text:"Not at all",value:0},{text:"Several days",value:1},{text:"More than half the days",value:2},{text:"Nearly every day",value:3}]},fe={name:"qELY5_valid",expression:"{ELY5} > 0"},xe={name:"ELY6",type:"radiogroup",isRequired:!0,title:"Have you seen a counsellor, psychologist, psychiatrist or other mental health professional, or General Practitioner for a mental health problem in the past six months?",choices:[{text:"No",value:0},{text:"Yes",value:1},{text:"Don't know",value:2}]},Ee={name:"qELY6_valid",expression:"{ELY6} == 0"},Le={name:"description",type:"html",html:'<div class="utr-html-section"><h2>To protect your privacy and the confidentiality of your data, we will ask you to register with the study using an active email address.</h2><p>Your account will provide you with access to the Under the Radar study surveys, and periodic email notifications will be sent when surveys are available.</div>'},_e={name:"preferredName",type:"text",isRequired:!0,title:"What is your preferred name?",inputType:"text",maxLength:128},Ye={name:"email",type:"text",isRequired:!0,title:"What is your email address?",inputType:"email",maxLength:128},qe={...j,pages:[{name:"Under the Radar",elements:[ue,de,me,ve,he,xe]},{name:"Under the Radar",elements:[Le,_e,Ye],visibleIf:"{__needContactPage} || ({eligible_for_study})"}],calculatedValues:[ce,pe,ye,ge,fe,Ee,{name:"eligible_for_study",expression:"{qELY1_valid} && {qELY2_valid} && {qELY3_valid} && {qELY4_valid} && {qELY5_valid} && {qELY6_valid}",includeIntoResult:!0}]},Se=B("experiment",()=>{const s=l(null),i=c=>{s.value=c},u=()=>{s.value=null},a=L(M),o=L(J);return{setExperimentId:i,clearExperimentId:u,getESExperimentCached:a.cacheFn,getPCMExperimentCached:o.cacheFn}}),Ie=N({__name:"EligibilityView",props:{experimentId:null},setup(s){const i=s,u=Q(),a=H(),o=X(),c=Se(),d=K(),p=l(),m=l(),h=l(),q=_(()=>qe),y=_(()=>`eligibility:${i.experimentId}`);O(()=>{const e=oe(y.value);h.value=e.oldData}),A(async()=>{if(!o.acceptStudy){const e=i.experimentId?`/consent/${i.experimentId}`:"/consent-test";d.push({path:e})}try{i.experimentId&&await c.getPCMExperimentCached(i.experimentId)}catch(e){console.error(e),d.push({path:"/error-page"})}});function S(e){return!!e.eligible_for_study}function C(e){return e.ELY1>=18}function b(e){const t=e.email;if(t==null)return null;if(typeof t!="string")throw new Error("email is not a string");return t}function v(e){m.value=e,p.value&&(p.value.scrollTop=0)}async function w(e){a.openLoadingOverlay();let t=!0;try{const n=await P(e);v(n),n==="signed up"&&(a.closeLoadingOverlay(),t=!1,await W(10*1e3),d.push("/login"))}catch(n){n instanceof z?v("existing account"):v("error")}finally{t&&a.closeLoadingOverlay(),se(y.value)}}async function P(e){const t=S(e);if(!C(e))return"ineligible";const n={...e,accept_data_sharing:o.acceptDataSharing,accept_future_contact:o.acceptFutureContact,request_feedback:o.requestFeedback,consent:o.acceptStudy},f=await ee(i.experimentId),D=await te(i.experimentId);let x=await ae(i.experimentId,f.id,n);if(!x)return"no consent";const E=x.participantCandidateMappingId,r=b(e);if(await ne(E,D.id,r,t,e),!t||!r)return"ineligible";u.storeEmail(r);const F=await G(r);return await ie(E,F.id),"signed up"}function R(e){a.setPageCount(e.pageCount),a.setPageTitle(e.currentPage.name),a.setPageIndex(e.currentPageNo),a.setShowProgressBar(!0);const t=o.requestFeedback||o.acceptFutureContact;e.setVariable("__needContactPage",t)}U(()=>{a.setShowProgressBar(!1)});function I(e,t,n){a.setPageIndex(e),a.setPageTitle(n)}function T(e,t){const n={...e};delete n.eligible_for_study,re(y.value,n,t)}function k(e){a.setHelpKey(e)}return(e,t)=>(g(),V("div",{ref_key:"surveyContainerRef",ref:p,class:"eligibility-view"},[m.value?(g(),Y(Z,{key:1,"completion-state":m.value,"login-link":"/login"},null,8,["completion-state"])):(g(),Y(le,{key:0,"survey-data":$(q),"initial-state":h.value,onComplete:w,onLoaded:R,onPageChanged:I,onPartialSend:T,onHelp:k},null,8,["survey-data","initial-state"]))],512))}});export{Ie as default};
