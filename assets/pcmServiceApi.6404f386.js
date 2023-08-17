import{E as x,f as C,u as L,h as A,c as d,e,J as c,F as T,j as g,T as H,m as V,k as n,ae as _,l as f,o as p,af as I,ag as B,ah as E,ai as R,aj as P,ak as O,al as $,am as M,an as U,ao as j,ap as F,aq as N,p as D,b as J,n as G,_ as Y,ar as h,as as y,i as q,at as k}from"./index.c3a334bc.js";const Ct=x("consent",{state:()=>({acceptStudy:!1,acceptDataSharing:!1,acceptFutureContact:!1,requestFeedback:!1})}),r=t=>(D("data-v-b169888d"),t=t(),J(),t),Z={class:"onboarding-survey-complete"},Q={class:"osp-container utr-card-page"},z={class:"osp-header-section"},K=r(()=>e("h2",null,"Thank you for your interest in the Under the Radar Study.",-1)),W={key:0,class:"utr-text-body1"},X={key:1,class:"utr-text-body1"},tt=r(()=>e("strong",null,"no account",-1)),et=r(()=>e("p",{class:"utr-text-body1"},"You have successfully registered and an account has been created.",-1)),st=r(()=>e("p",{class:"utr-text-body1"},"You will now be redirected to login using an OTP sent to your mobile.",-1)),ot={key:3,class:"utr-text-body1"},nt={key:4,class:"utr-text-body1"},at=r(()=>e("strong",null,"no account",-1)),it=r(()=>e("p",{class:"utr-text-body1"},"If you are concerned about your mental health, help is available.",-1)),rt={class:"osp-sponsors"},ct={class:"osp-body-section"},lt=r(()=>e("p",{class:"utr-text-body1"}," For information on other online mental health services that are available, including support services tailored to specific communities (e.g. LGBTIQ+, Aboriginal and Torres Strait Islander peoples, carers), and services specific to the state you live in, visit: ",-1)),ut={class:"osp-item-link"},dt=["href"],pt={class:"utr-text-link osp-dark-link"},ht=r(()=>e("span",{role:"img",class:"mdi mdi-launch"},[e("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])],-1)),yt={class:"osp-body-section"},mt={class:"utr-text-body1"},gt=["href"],vt={class:"osp-item-link"},_t=["href"],ft={class:"utr-text-link osp-dark-link"},bt=r(()=>e("span",{role:"img",class:"mdi mdi-launch"},[e("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})])],-1)),kt=C({__name:"OnboardingSurveyComplete",props:{completionState:null,loginLink:null},setup(t){G(o=>({"23e5d650":n(a).containerColumns,d9703b9c:n(a).gridJustifyItems}));const s=L(),a=A(()=>{const o={containerColumns:3,gridJustifyItems:"stretch"};switch(s.breakpoint){case"mobile":case"small":case"xl":o.containerColumns=1,o.gridJustifyItems="center";break}return o});return(o,i)=>(p(),d("div",Z,[e("div",Q,[e("div",z,[K,t.completionState==="no consent"?(p(),d("p",W," As you have not agreed to the terms, you will not be included in the study. ")):t.completionState==="ineligible"?(p(),d("p",X,[c(" At this stage of the project, we have enough participants already who have a similar profile to yours, and we are unable to take more, unfortunately. Please note that "),tt,c(" was created as a result of this. ")])):t.completionState==="signed up"?(p(),d(T,{key:2},[et,st],64)):t.completionState==="existing account"?(p(),d("p",ot,[c(" You have already registered for this study. Please "),g(H,{"text-class":"osp-login-btn",color:"var(--utr-primary-color)","hover-color":"var(--utr-primary-color-light)",label:"Log In",link:t.loginLink},null,8,["link"]),c(" to view your available surveys. ")])):t.completionState==="error"?(p(),d("p",nt,[c(" Unfortunately something went wrong. Please note that "),at,c(" was created as a result of this. ")])):V("",!0),it]),e("div",rt,[g(_,{name:"Lifeline",description:"Crisis support and suicide prevention","phone-number":"13 11 14","phone-availability":"Available 24/7","chat-link":n(I),"chat-availability":`Available 7pm to midnight
        AEST`,"sponsor-link":n(B)},null,8,["chat-link","sponsor-link"]),g(_,{name:"Suicide Call Back Service",description:"Counselling and support for people affected by suicide","phone-number":"1300 659 467","phone-availability":"Available 24/7","chat-link":n(E),"chat-availability":"Available 24/7","sponsor-link":n(R)},null,8,["chat-link","sponsor-link"]),g(_,{name:"Beyond Blue",description:"Support and information for people experiencing depreession or anxiety","phone-number":"1300 224 636","phone-availability":"Available 24/7","chat-link":n(P),"chat-availability":"Available 11am to midnight AEST","sponsor-link":n(O)},null,8,["chat-link","sponsor-link"])]),e("div",ct,[lt,e("div",ut,[e("a",{href:n($),target:"_blank"},[e("span",pt,f(n(M)),1),ht],8,dt)])]),e("div",yt,[e("p",mt,[c(" If you have any questions about your application, please contact "),e("a",{href:n(U),class:"utr-text-link osp-mailto"},f(` ${n(j)}`),9,gt),c(". For information about other ways to get involved with Black Dog Institute, please visit: ")]),e("div",vt,[e("a",{href:n(F),target:"_blank"},[e("span",ft,f(n(N)),1),bt],8,_t)])])])]))}});const Lt=Y(kt,[["__scopeId","data-v-b169888d"]]);async function At(t,s,a){const o=new URL(`experiments/${t}/consent`,h),i={applicationId:k,surveyId:s,surveyResponse:a},l=await y(o,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});if(!l.ok){const v=`An error has occured: ${l.status}`;throw console.error(l),new Error(v)}const u=await l.text();return u?JSON.parse(u):null}async function Tt(t,s,a,o,i,l){const u=new URL(`participantCandidateMappings/${t}/register`,h),b=q(new Date,"Y-MM-dd'T'HH:mm:ssx"),v={applicationId:k,surveyId:s,email:a!=null?a:void 0,mobile:o!=null?o:void 0,eligible_for_study:i,recordedAt:b,surveyResponse:l},m=await y(u,{method:"POST",body:JSON.stringify(v),headers:{"Content-Type":"application/json"}});if(!m.ok){const S=`An error has occured: ${m.status}`;throw console.error(m),new Error(S)}return await m.json()}async function Ht(t,s){const a=new URL(`participantCandidateMappings/${t}`,h),o={id:t,participantId:s,state:"REGISTERED"},i=await y(a,{method:"PATCH",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}});if(!i.ok){const u=`An error has occured: ${i.status}`;throw console.error(i),new Error(u)}return await i.json()}async function Vt(t){const s=new URL(`experiments/${t}/consentForm`,h);return w(s.toString())}async function It(t){const s=new URL(`experiments/${t}/registrationSurvey`,h);return w(s.toString())}async function w(t){const s=await y(t);if(!s.ok){const o=`An error has occured: ${s.status}`;throw console.error(s),new Error(o)}return await s.json()}async function Bt(t){if(!t)throw new Error("Missing experimentId");const s=new URL(`experiments/${t}`,h);return wt(s.toString())}async function wt(t){const s=await y(t);if(!s.ok){const o=`An error has occured: ${s.status}`;throw console.error(s),new Error(o)}return await s.json()}export{Lt as O,Bt as a,It as b,Tt as c,Ht as d,Vt as g,At as p,Ct as u};
