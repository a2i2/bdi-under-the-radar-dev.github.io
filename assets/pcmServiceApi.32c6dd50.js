import{w as f,d as _,c,b as t,P as i,f as g,h as S,o as u,T as k,U as y,p as x,a as C,_ as A,V as d,W as m}from"./index.e6f87e89.js";const J=f("consent",{state:()=>({acceptStudy:!1,acceptDataSharing:!1,acceptFutureContact:!1,requestFeedback:!1})}),p=e=>(x("data-v-9955e6f1"),e=e(),C(),e),V={class:"onboarding-survey-complete utr-sponsor-logo-panel"},L={class:"utr-slp-header-section"},H=p(()=>t("h2",null,"Thank you for your interest in the Under the Radar Study.",-1)),I={key:0,class:"utr-text-body1"},T={key:1,class:"utr-text-body1"},E=p(()=>t("strong",null,"no account",-1)),R={key:2,class:"utr-text-body1"},B={key:3,class:"utr-text-body1"},P={key:4,class:"utr-text-body1"},U=p(()=>t("strong",null,"no account",-1)),$=p(()=>t("p",{class:"utr-text-body1"},"If you are concerned about your mental health, help is available.",-1)),O={class:"utr-slp-sponsors"},M=p(()=>t("div",{class:"utr-slp-body-section"},[t("p",{class:"utr-text-body1"}," For information on other online mental health services that are available, including support services tailored to specific communities (e.g. LGBTIQ+, Aboriginal and Torres Strait Islander peoples, carers), and services specific to the state you live in, visit: "),t("div",{class:"utr-slp-item-link"},[t("a",{href:"https://www.headtohealth.gov.au/",target:"_blank"},[t("span",{class:"utr-text-link utr-slp-dark-link"},"www.headtohealth.gov.au"),t("span",{role:"img",class:"mdi mdi-launch"},[t("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])])])])],-1)),j=p(()=>t("div",{class:"utr-slp-body-section"},[t("p",{class:"utr-text-body1"},[i(" If you have any questions about your application, please contact "),t("a",{href:"mailto:undertheradar@blackdog.org.au",class:"utr-text-link utr-slp-mailto"}," undertheradar@blackdog.org.au"),i(". For information about other ways to get involved with Black Dog Institute, please visit: ")]),t("div",{class:"utr-slp-item-link"},[t("a",{href:"https://www.blackdoginstitute.org.au/get-involved/",target:"_blank"},[t("span",{class:"utr-text-link utr-slp-dark-link"},"www.blackdoginstitute.org.au/get-involved"),t("span",{role:"img",class:"mdi mdi-launch"},[t("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])])])])],-1)),N=_({__name:"OnboardingSurveyComplete",props:{completionState:null},emits:["onLogin"],setup(e,{emit:o}){const s=()=>o("onLogin");return(n,a)=>(u(),c("div",V,[t("div",L,[H,e.completionState==="no consent"?(u(),c("p",I," As you have not agreed to the terms, you will not be included in the study. ")):e.completionState==="ineligible"?(u(),c("p",T,[i(" At this stage of the project, we have enough participants already who have a similar profile to yours, and we are unable to take more, unfortunately. Please note that "),E,i(" was created as a result of this. ")])):e.completionState==="signed up"?(u(),c("p",R," You have been registered, and will receive an email shortly with more information. ")):e.completionState==="existing account"?(u(),c("p",B,[i(" You have already registered for this study. Please "),g(k,{label:"Log In",onClick:s}),i(" to view your available surveys. ")])):e.completionState==="error"?(u(),c("p",P,[i(" Unfortunately something went wrong. Please note that "),U,i(" was created as a result of this. ")])):S("",!0),$]),t("div",O,[g(y,{name:"Lifeline",description:"Crisis support and suicide prevention","phone-number":"13 11 14","phone-availability":"Available 24/7","chat-link":"https://www.lifeline.org.au/crisis-chat/","chat-availability":"Available 7pm to midnight AEST","sponsor-link":"https://lifeline.org.au/get-help"}),g(y,{name:"Suicide Call Back Service",description:"Counselling and support for people affected by suicide","phone-number":"1300 659 467","phone-availability":"Available 24/7","chat-link":"https://www.suicidecallbackservice.org.au/phone-and-online-counselling/","chat-availability":"Available 24/7","sponsor-link":"https://suicidecallbackservice.org.au"}),g(y,{name:"Beyond Blue",description:"Support and information for people experiencing depreession or anxiety","phone-number":"1300 224 636","phone-availability":"Available 24/7","chat-link":"https://www.beyondblue.org.au/support-service/chat","chat-availability":"Available 11am to midnight AEST","sponsor-link":"https://beyondblue.org.au"})]),M,j]))}});const q=A(N,[["__scopeId","data-v-9955e6f1"]]);async function G(e,o,s){const n=new URL(`experiments/${e}/consent`,d),a={applicationId:m,surveyId:o,surveyResponse:s},r=await fetch(n,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});if(!r.ok){const w=`An error has occured: ${r.status}`;throw console.error(r),new Error(w)}const l=await r.text();return l?JSON.parse(l):null}async function Y(e,o,s,n,a){const r=new URL(`participantCandidateMappings/${e}/register`,d),l={applicationId:m,surveyId:o,email:s!=null?s:void 0,eligible_for_study:n,surveyResponse:a},h=await fetch(r,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}});if(!h.ok){const b=`An error has occured: ${h.status}`;throw console.error(h),new Error(b)}return await h.json()}async function Z(e,o){const s=new URL(`participantCandidateMappings/${e}`,d),n={id:e,participantId:o,state:"REGISTERED"},a=await fetch(s,{method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});if(!a.ok){const l=`An error has occured: ${a.status}`;throw console.error(a),new Error(l)}return await a.json()}async function z(e){const o=new URL(`experiments/${e}/consentForm`,d);return v(o.toString())}async function Q(e){const o=new URL(`experiments/${e}/registrationSurvey`,d);return v(o.toString())}async function v(e,o){const s={};o&&(s.Authorization=`Bearer ${o}`);const n=await fetch(e,{headers:s});if(!n.ok){const r=`An error has occured: ${n.status}`;throw console.error(n),new Error(r)}return await n.json()}async function W(e){if(!e)throw new Error("Missing experimentId");const o=new URL(`experiments/${e}`,d);return F(o.toString())}async function F(e){const o=await fetch(e);if(!o.ok){const n=`An error has occured: ${o.status}`;throw console.error(o),new Error(n)}return await o.json()}export{q as O,W as a,Q as b,Y as c,Z as d,z as g,G as p,J as u};
