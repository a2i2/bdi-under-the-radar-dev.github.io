import{v as _,d as S,u as k,e as x,c as u,b as t,Q as i,F as C,f as g,h as A,o as d,T as V,U as y,p as I,a as L,i as H,g as w,_ as T,V as p,W as v}from"./index.512d7c78.js";const W=_("consent",{state:()=>({acceptStudy:!1,acceptDataSharing:!1,acceptFutureContact:!1,requestFeedback:!1})}),c=e=>(I("data-v-94337af2"),e=e(),L(),e),E={class:"onboarding-survey-complete"},R={class:"osp-container utr-card-page"},B={class:"osp-header-section"},P=c(()=>t("h2",null,"Thank you for your interest in the Under the Radar Study.",-1)),U={key:0,class:"utr-text-body1"},$={key:1,class:"utr-text-body1"},O=c(()=>t("strong",null,"no account",-1)),F=c(()=>t("p",{class:"utr-text-body1"},"You have successfully registered and an account has been created.",-1)),M=c(()=>t("p",{class:"utr-text-body1"},"You will now be redirected to login using your email address.",-1)),j={key:3,class:"utr-text-body1"},N={key:4,class:"utr-text-body1"},J=c(()=>t("strong",null,"no account",-1)),D=c(()=>t("p",{class:"utr-text-body1"},"If you are concerned about your mental health, help is available.",-1)),Y={class:"osp-sponsors"},q=c(()=>t("div",{class:"osp-body-section"},[t("p",{class:"utr-text-body1"}," For information on other online mental health services that are available, including support services tailored to specific communities (e.g. LGBTIQ+, Aboriginal and Torres Strait Islander peoples, carers), and services specific to the state you live in, visit: "),t("div",{class:"osp-item-link"},[t("a",{href:"https://www.headtohealth.gov.au/",target:"_blank"},[t("span",{class:"utr-text-link osp-dark-link"},"www.headtohealth.gov.au"),t("span",{role:"img",class:"mdi mdi-launch"},[t("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])])])])],-1)),G=c(()=>t("div",{class:"osp-body-section"},[t("p",{class:"utr-text-body1"},[i(" If you have any questions about your application, please contact "),t("a",{href:"mailto:undertheradar@blackdog.org.au",class:"utr-text-link osp-mailto"}," undertheradar@blackdog.org.au"),i(". For information about other ways to get involved with Black Dog Institute, please visit: ")]),t("div",{class:"osp-item-link"},[t("a",{href:"https://www.blackdoginstitute.org.au/get-involved/",target:"_blank"},[t("span",{class:"utr-text-link osp-dark-link"},"www.blackdoginstitute.org.au/get-involved"),t("span",{role:"img",class:"mdi mdi-launch"},[t("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])])])])],-1)),Q=S({__name:"OnboardingSurveyComplete",props:{completionState:null},emits:["login"],setup(e,{emit:o}){H(s=>({"8ee4bf2a":w(r).containerColumns,"5dc86dc5":w(r).gridJustifyItems}));const n=()=>o("login"),a=k(),r=x(()=>{const s={containerColumns:3,gridJustifyItems:"stretch"};switch(a.breakpoint){case"mobile":case"small":case"xl":s.containerColumns=1,s.gridJustifyItems="center";break}return s});return(s,l)=>(d(),u("div",E,[t("div",R,[t("div",B,[P,e.completionState==="no consent"?(d(),u("p",U," As you have not agreed to the terms, you will not be included in the study. ")):e.completionState==="ineligible"?(d(),u("p",$,[i(" At this stage of the project, we have enough participants already who have a similar profile to yours, and we are unable to take more, unfortunately. Please note that "),O,i(" was created as a result of this. ")])):e.completionState==="signed up"?(d(),u(C,{key:2},[F,M],64)):e.completionState==="existing account"?(d(),u("p",j,[i(" You have already registered for this study. Please "),g(V,{label:"Log In",onClick:n}),i(" to view your available surveys. ")])):e.completionState==="error"?(d(),u("p",N,[i(" Unfortunately something went wrong. Please note that "),J,i(" was created as a result of this. ")])):A("",!0),D]),t("div",Y,[g(y,{name:"Lifeline",description:"Crisis support and suicide prevention","phone-number":"13 11 14","phone-availability":"Available 24/7","chat-link":"https://www.lifeline.org.au/crisis-chat/","chat-availability":"Available 7pm to midnight AEST","sponsor-link":"https://lifeline.org.au/get-help"}),g(y,{name:"Suicide Call Back Service",description:"Counselling and support for people affected by suicide","phone-number":"1300 659 467","phone-availability":"Available 24/7","chat-link":"https://www.suicidecallbackservice.org.au/phone-and-online-counselling/","chat-availability":"Available 24/7","sponsor-link":"https://suicidecallbackservice.org.au"}),g(y,{name:"Beyond Blue",description:"Support and information for people experiencing depreession or anxiety","phone-number":"1300 224 636","phone-availability":"Available 24/7","chat-link":"https://www.beyondblue.org.au/support-service/chat","chat-availability":"Available 11am to midnight AEST","sponsor-link":"https://beyondblue.org.au"})]),q,G])]))}});const K=T(Q,[["__scopeId","data-v-94337af2"]]);async function X(e,o,n){const a=new URL(`experiments/${e}/consent`,p),r={applicationId:v,surveyId:o,surveyResponse:n},s=await fetch(a,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});if(!s.ok){const m=`An error has occured: ${s.status}`;throw console.error(s),new Error(m)}const l=await s.text();return l?JSON.parse(l):null}async function ee(e,o,n,a,r){const s=new URL(`participantCandidateMappings/${e}/register`,p),l={applicationId:v,surveyId:o,email:n!=null?n:void 0,eligible_for_study:a,surveyResponse:r},h=await fetch(s,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}});if(!h.ok){const f=`An error has occured: ${h.status}`;throw console.error(h),new Error(f)}return await h.json()}async function te(e,o){const n=new URL(`participantCandidateMappings/${e}`,p),a={id:e,participantId:o,state:"REGISTERED"},r=await fetch(n,{method:"PATCH",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});if(!r.ok){const l=`An error has occured: ${r.status}`;throw console.error(r),new Error(l)}return await r.json()}async function oe(e){const o=new URL(`experiments/${e}/consentForm`,p);return b(o.toString())}async function se(e){const o=new URL(`experiments/${e}/registrationSurvey`,p);return b(o.toString())}async function b(e,o){const n={};o&&(n.Authorization=`Bearer ${o}`);const a=await fetch(e,{headers:n});if(!a.ok){const s=`An error has occured: ${a.status}`;throw console.error(a),new Error(s)}return await a.json()}async function ae(e){if(!e)throw new Error("Missing experimentId");const o=new URL(`experiments/${e}`,p);return Z(o.toString())}async function Z(e){const o=await fetch(e);if(!o.ok){const a=`An error has occured: ${o.status}`;throw console.error(o),new Error(a)}return await o.json()}export{K as O,ae as a,se as b,ee as c,te as d,oe as g,X as p,W as u};