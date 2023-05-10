import{u as Y,O as G,g as J,p as Q}from"./pcmServiceApi.ebbe6602.js";import{d as I,o,c as a,b as e,Q as D,t as u,I as F,_ as B,i as H,e as v,H as z,u as W,g as i,f as p,R as K,F as C,j as T,h as k,p as V,a as E,S as X,l as R,U as Z,A as N,V as ee,W as te,X as oe,L as A,M as ae,m as ne,k as q,s as ie}from"./index.138fae51.js";import{u as se}from"./surveyStore.c097dc7b.js";const re=["disabled","checked","aria-label"],le=I({__name:"CheckboxControl",props:{modelValue:{type:Boolean,default:!1},label:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:s}){function t(y){const h=y.target;s("update:modelValue",h.checked)}return(y,h)=>(o(),a("label",{class:F(["checkbox-control",{disabled:n.disabled}])},[e("input",{disabled:n.disabled,type:"checkbox",checked:n.modelValue,"aria-label":n.label,onChange:t},null,40,re),D(" "+u(n.label),1)],2))}});const P=B(le,[["__scopeId","data-v-0f3ca0b8"]]),ce={class:"logo-unsw-container"},de=["src"],ue=I({__name:"LogoUNSW",props:{height:null},setup(n){const s=n;H(w=>({"5e81099c":i(h)}));const t=v(()=>new URL("/assets/logo-unsw.545f07d2.png",self.location).href),{breakpoint:y}=z(W()),h=v(()=>{if(s.height)return s.height;switch(y.value){case"mobile":case"small":return"80px";default:return"150px"}});return(w,l)=>(o(),a("div",ce,[e("img",{src:i(t),alt:"UNSW Sydney logo",draggable:"false"},null,8,de)]))}});const he=B(ue,[["__scopeId","data-v-5aaf880a"]]),U=n=>(V("data-v-a5b47aad"),n=n(),E(),n),pe={class:"participant-information-statement"},ye={class:"pis-header"},fe={class:"pis-logo-cell"},me={class:"pis-logo-wrapper"},be={class:"pis-logo-cell"},ge={class:"pis-logo-wrapper"},ve=U(()=>e("tr",null,[e("td",{colspan:"2"},[e("div",{class:"pis-header-text"},[e("div",null,[e("strong",null,"PARTICIPANT INFORMATION STATEMENT AND CONSENT FORM")]),e("div",null,[e("strong",null," A randomised controlled trial of web-based video messaging interventions for suicide prevention in males (Under the Radar) "),e("div",null,"Professor Helen Christensen")])])])],-1)),we=U(()=>e("strong",null,"HC Number: ",-1)),_e=U(()=>e("strong",null,"Version dated: ",-1)),ke=U(()=>e("div",null,null,-1)),Ie={class:"pis-section-list"},Se={class:"pis-section-title"},xe={class:"pis-section-body"},Ce={key:0,class:"pis-section-text"},Te={key:0},Pe={key:0},Be=["href"],Ae={key:2},De={key:1},Ue={key:2,class:"pis-section-table"},Le={key:0,class:"pis-section-title"},Ne={class:"pis-table-title"},He={class:"pis-table-content"},We=["href"],qe={key:1},Fe={key:2},Ve=I({__name:"ParticipantInformationStatement",setup(n){H(M=>({"44dcd74b":i(t)}));const s=W(),t=v(()=>s.breakpoint==="mobile"?"0px":"1rem"),y="HC220714",h="24 Apr 2023",$=[{title:"What is the research study about?",body:"The Black Dog Institute is inviting men who have thought of dying or hurting themselves in the past six months to participate in a trial to help us understand how to better support men in suicidal distress. The trial aims to assess if video-based messages tailored to men\u2019s characteristics and situations will promote suicide prevention."},{title:"Who is conducting this research?",body:"The study is being carried out by the following researchers:",sections:[{type:"list",items:["Professor Helen Christensen, Black Dog Institute/University of New South Wales","Professor Katherine Boydell, Black Dog Institute/University of New South Wales","Associate Professor Fiona Shand, Black Dog Institute/University of New South Wales","Dr Jin Han, Black Dog Institute/University of New South Wales","Professor Philip Batterham, Centre for Mental Health Research, Australian National University","Professor Henry Cutler, Macquarie University Centre for the Health Economy","Professor Svetha Venkatesh, Applied Artificial Intelligence Institute, Deakin University","Dr Leonard Hoon, Applied Artificial Intelligence Institute, Deakin University","Dr Aimy Slade, Black Dog Institute","Ms Noura Saba, Macquarie University Centre for the Health Economy","Dr Wu Yi Zheng, Black Dog Institute","Ms Hiroko Fujimoto, Black Dog Institute","Dr Alexis Whitton, Black Dog Institute/UNSW","Associate Professor Yuanyuan Gu, Macquarie University Centre for the Health Economy"]},{type:"text",bodySections:[{isBold:!0,text:"Research Funder: "},{text:"This research is being funded by the Medical Research Future Fund."}]}]},{title:"Inclusion/Exclusion Criteria",body:"Before you decide to participate in this study, we need to ensure that it is ok for you to take part. The research study is looking to recruit people who meet the following criteria:",sections:[{type:"list",items:["18 years of age or older","Identify their gender as male","Fluent in English","Currently living in Australia","Thought of dying or hurting themselves in the past six months","No contact with formal mental health services (including General Practitioners, Psychologists, Psychiatrists and other mental health professionals) for mental health support in the past six months."]}]},{title:"Do I have to take part in this research study?",body:"Participation in this research study is voluntary. If you do not want to take part, you do not have to. If you decide to take part and later change your mind, you are free to withdraw from the study at any stage."},{title:"What does participation in this research require, and are there any risks involved?",body:"If you agree to participate you will be asked to complete the following research procedures:",sections:[{type:"list",items:["Provide consent electronically by ticking the 'I consent' box at the bottom of the webpage","Fill in a short survey (two minutes) to check your eligibility for this study.","If you are eligible for the study, you will then be asked to provide your email address and first name, which will only be used for contacting you regarding the study. After validating your email address, you will be able to start your participation in the study. If you are not eligible to take part in the study, you will be informed and provided with information of support services. ","You will be directed to answer a few questions about yourself. Questions include ethnicity, language, living status (urban or rural, length of time living in Australia), education, employment, and distress levels. The survey takes about three minutes to complete. ","After completing these questions, you will be randomly allocated to watch one of five videos on suicide prevention: one of three tailored messages, a general message, or a control message. Each video lasts approximately 2 minutes. Please watch the video as soon as possible as the video will only be available for three days. After watching the video, you will be asked to answer a few questions related to suicide prevention, taking about two minutes to complete.","You will then be invited to complete a survey, including questions on your experience in watching the video, physical and mental health, suicidal thoughts and behaviour, and preference for different suicide prevention services. The survey takes about 30 minutes to complete. After completing this survey, you will receive a $20 GiftPay voucher via email which can be used at a range of retailers.","After one-week, you will receive an email invitation to a survey, asking about your health behaviour and perceptions towards suicide prevention in the past week. The survey takes about eight minutes to complete.","After completing the follow-up survey, you will receive a second $20 GiftPay voucher via email. ","If we collect enough participants of similar profiles, there is a possibility that you might not be able to participate in the current study."]},{type:"text",body:"If you experience discomfort or feelings of distress while participating in the research, you can skip any questions you do not feel comfortable answering or stop participating at any time. If you require immediate support or would prefer to receive support from someone not involved in the research, please contact your local GP, Beyond Blue (1300 22 4636), the Suicide Call Back Service (1300 659 467) or Lifeline (13 11 14)."}]},{title:"What are the possible benefits of taking part?",body:"We cannot guarantee or promise that you will receive benefits from participating in this research; however, possible benefits may include new knowledge on the available help-seeking resources. In addition, your participation will help us understand how to support other men with suicidal thoughts or behaviour in the community."},{title:"What will happen to information about me?",body:"By signing the consent form, you consent to the research team collecting and using information about you for the research study. If you do not meet the inclusion criteria, no personal data will be stored on the servers. The research team will store the data collected from you for this research project for a minimum of 7 years after project completion. We will store information about you in a non-identifiable format on a UNSW Sydney approved IT platform and data is protected by encryption. The identifiable information (i.e. first name and email address) collected in this study will be used to contact you for consented activities only (i.e., surveys, e-gift card, research report). Data will be stored in re-identifiable format where any identifiers such as your name, address, date of birth will be replaced with a unique code. Identifiable information will be stored separately from your survey responses on the UNSW OneDrive, protected by password, accessed by named study personnel only.",sections:[{type:"text",bodySections:[{text:"The information you provide is personal information for the purposes of the Privacy and Personal Information Protection Act 1998 (NSW).  You have the right of access to personal information held about you by the University, the right to request correction and amendment of it, and the right to make a complaint about a breach of the Information Protection Principles as contained in the PPIP Act.  Further information on how the University protects personal information is available in the "},{linkHref:"https://www.legal.unsw.edu.au/compliance/privacyhome.html",text:"UNSW Privacy Management Plan"},{text:"."}]}]},{title:"How and when will I find out what the results of the research study are?",body:"The research team intend to publish the results of the research study. All information published will be done in a way that will not identify you. If you would like to receive a copy of the results, you can let the research team know by adding your email within the consent form. We will only use these details to send you the results of the research."},{title:"What if I want to withdraw from the research study?",body:"If you do consent to participate, you may withdraw at any time. You can do so by completing the \u2018Withdrawal of Consent Form\u2019 which is provided at the end of this document. Alternatively, you can call or email the research team and tell them you no longer want to participate. Your decision not to participate or to withdraw from the study will not affect your relationship with UNSW Sydney, the Black Dog Institute, Deakin University, and Macquarie University. If you decide to leave the research study, the researchers will not collect additional information from you. You can request that any identifiable information about you be withdrawn from the research project."},{title:"What if I have a complaint or any concerns about the research study?",body:"If you have a complaint regarding any aspect of the study or the way it is being conducted, please contact the UNSW Human Ethics Coordinator:",sections:[{type:"table",title:"Complaints Contact",rows:[{title:"Position",body:"UNSW Human Research Ethics Coordinator"},{title:"Telephone",bodyBold:"+ 61 2 9385 6222"},{title:"Email",bodyLinkText:"humanethics@unsw.edu.au",bodyLinkHref:"mailto:humanethics@unsw.edu.au"},{title:"HC Reference Number",body:"HC220714"}]}]},{title:"What should I do if I have further questions about my involvement in the research study?",body:"The person you may need to contact will depend on the nature of your query. If you require further information regarding this study or if you have any problems which may be related to your involvement in the study, you can contact the following member/s of the research team:",sections:[{type:"table",title:"Research Team Contact Details",rows:[{title:"Name",body:"Dr Jin Han"},{title:"Position",body:"Research Fellow"},{title:"Telephone",bodyBold:"02 9065 9109"},{title:"Email",bodyLinkText:"undertheradar@blackdog.org.au",bodyLinkHref:"mailto:undertheradar@blackdog.org.au"}]},{type:"table",title:"Chief Investigator",rows:[{title:"Name",body:"Helen Christensen"},{title:"Position",body:"Professor"},{title:"Telephone",bodyBold:"02 9382 4530"},{title:"Email",bodyLinkText:"undertheradar@blackdog.org.au",bodyLinkHref:"mailto:undertheradar@blackdog.org.au"}]},{type:"text",bodySections:[{isBold:!0,text:`Support Services Contact Details
`},{text:"If at any stage during the study, you become distressed or require additional support from someone not involved in the research please call:"}]},{type:"table",rows:[{title:"Organisation",body:`Lifeline
Crisis support and suicide prevention`},{title:"Telephone",bodyBold:"13 11 14",body:" available 24/7"},{title:"Online chat",bodyLinkText:"www.lifeline.org.au/crisis-chat",bodyLinkHref:"http://www.lifeline.org.au/crisis-chat",body:" available 19:00 \u2013 23:59 AEDT/AEST"},{title:"Website",bodyLinkText:"www.lifeline.org.au/get-help",bodyLinkHref:"http://www.lifeline.org.au/get-help"}]},{type:"table",rows:[{title:"Organisation",body:`Suicide Call Back Service
Counselling and support for people affected by suicide`},{title:"Telephone",bodyBold:"1300 659 467",body:" available 24/7"},{title:"Online chat",bodyLinkText:"www.suicidecallbackservice.org.au/phone-and-online-counselling/suicide-call-back-service-online-counselling",bodyLinkHref:"http://www.suicidecallbackservice.org.au/phone-and-online-counselling/suicide-call-back-service-online-counselling",body:" available 24/7"},{title:"Website",bodyLinkText:"www.suicidecallbackservice.org.au",bodyLinkHref:"http://www.suicidecallbackservice.org.au/"}]},{type:"table",rows:[{title:"Organisation",body:`Beyond Blue
Suport and information for people experiencing depression or anxiety`},{title:"Telephone",bodyBold:"1300 22 4636",body:" available 24/7"},{title:"Online chat",bodyLinkText:"online.beyondblue.org.au",bodyLinkHref:"https://online.beyondblue.org.au/",body:" available 11:00 \u2013 23:59 AEDT/AEST"},{title:"Website",bodyLinkText:"www.beyondblue.org.au",bodyLinkHref:"http://www.beyondblue.org.au/"}]}]}];return(M,Ze)=>(o(),a("article",pe,[e("section",ye,[e("table",null,[e("tr",null,[e("td",fe,[e("div",me,[p(K,{"large-logo":"",class:"pis-logo"})])]),e("td",be,[e("div",ge,[p(he,{class:"pis-logo"})])])]),ve,e("tr",null,[e("td",{colspan:"2"},[e("div",{class:"pis-version-text"},[e("span",null,[we,D(u(y))]),e("span",null,[_e,D(u(h))]),ke])])])])]),e("ol",Ie,[(o(),a(C,null,T($,(L,j)=>e("li",{key:j},[e("div",Se,u(L.title),1),e("div",xe,u(L.body),1),(o(!0),a(C,null,T(L.sections,(b,O)=>(o(),a("div",{key:O,class:"pis-subsection"},[b.type==="text"?(o(),a("div",Ce,[b.body?(o(),a("span",Te,u(b.body),1)):k("",!0),(o(!0),a(C,null,T(b.bodySections,(r,x)=>(o(),a("span",{key:x},[r.isBold?(o(),a("strong",Pe,u(r.text),1)):r.linkHref?(o(),a("a",{key:1,href:r.linkHref},u(r.text),9,Be)):(o(),a("span",Ae,u(r.text),1))]))),128))])):b.type==="list"?(o(),a("div",De,[e("ul",null,[(o(!0),a(C,null,T(b.items,(r,x)=>(o(),a("li",{key:x},u(r),1))),128))])])):b.type==="table"?(o(),a("div",Ue,[b.title?(o(),a("div",Le,u(b.title),1)):k("",!0),e("table",null,[(o(!0),a(C,null,T(b.rows,(r,x)=>(o(),a("tr",{key:x},[e("td",Ne,u(r.title),1),e("td",He,[r.bodyLinkHref?(o(),a("a",{key:0,href:r.bodyLinkHref},u(r.bodyLinkText),9,We)):k("",!0),r.bodyBold?(o(),a("strong",qe,u(r.bodyBold),1)):k("",!0),r.body?(o(),a("span",Fe,u(r.body),1)):k("",!0)])]))),128))])])):k("",!0)]))),128))])),64))])]))}});const Ee=B(Ve,[["__scopeId","data-v-a5b47aad"]]),Re=n=>(V("data-v-930729f6"),n=n(),E(),n),$e={class:"consent-form"},Me={class:"cf-pis-area"},je={class:"cf-pis-download-area"},Oe=Re(()=>e("br",null,null,-1)),Ye=I({__name:"ConsentForm",props:{acceptStudy:{type:Boolean},acceptDataSharing:{type:Boolean},acceptFutureContact:{type:Boolean},requestFeedback:{type:Boolean}},emits:["update:accept-study","update:accept-data-sharing","update:accept-future-contact","update:request-feedback","accept","reject"],setup(n,{emit:s}){const t=n;H(m=>({"31ca28c5":i(S)}));const{breakpoint:y}=X(W()),h=R(!1),w=v(()=>h.value&&t.acceptStudy),l=v({get(){return t.acceptStudy},set(m){s("update:accept-study",m)}}),c=v({get(){return t.acceptDataSharing},set(m){s("update:accept-data-sharing",m)}}),_=v({get(){return t.acceptFutureContact},set(m){s("update:accept-future-contact",m)}}),g=v({get(){return t.requestFeedback},set(m){s("update:request-feedback",m)}}),S=v(()=>y.value==="mobile"?"1rem":"2rem");return(m,d)=>(o(),a("div",$e,[e("div",Me,[p(Ee),e("div",je,[D(" You can download the Participant Information Statement, and the consent and withdrawal forms here:"),Oe,p(oe,{"download-link":i(ee),filename:i(te)},{default:Z(()=>[p(N,{label:"Download",icon:"download",color:"var(--utr-green)","hover-color":"var(--utr-green-light)"})]),_:1},8,["download-link","filename"])])]),e("form",{class:"cf-form",onSubmit:d[6]||(d[6]=ae(f=>s("accept"),["prevent"]))},[p(P,{modelValue:h.value,"onUpdate:modelValue":d[0]||(d[0]=f=>h.value=f),label:"I am 18 or over (required)"},null,8,["modelValue"]),p(P,{modelValue:i(l),"onUpdate:modelValue":d[1]||(d[1]=f=>A(l)?l.value=f:null),label:"I agree to the study (required)"},null,8,["modelValue"]),p(P,{modelValue:i(g),"onUpdate:modelValue":d[2]||(d[2]=f=>A(g)?g.value=f:null),label:"I would like to receive feedback from the Institute on the results of this research (optional)"},null,8,["modelValue"]),p(P,{modelValue:i(_),"onUpdate:modelValue":d[3]||(d[3]=f=>A(_)?_.value=f:null),label:` I provide my consent for my name and contact details to be retained in a register so I can be
      contacted about other research projects in the future (optional)`},null,8,["modelValue"]),p(P,{modelValue:i(c),"onUpdate:modelValue":d[4]||(d[4]=f=>A(c)?c.value=f:null),label:`I provide my consent for de-identified/aggregated data to be shared with support organisations
  who are partners on this research study (optional)`},null,8,["modelValue"]),e("div",{class:F(["cf-action-row",{small:i(y)==="mobile"}])},[p(N,{label:"I Do Not Agree or Consent",icon:"close",onClick:d[5]||(d[5]=f=>s("reject"))}),p(N,{label:"I Agree and Consent",icon:"check",color:"var(--utr-green)","hover-color":"var(--utr-green-light)",disabled:!i(w),type:"submit"},null,8,["disabled"])],2)],32)]))}});const Ge=B(Ye,[["__scopeId","data-v-930729f6"]]),Je={class:"consent-layout"},Qe=I({__name:"ConsentLayout",emits:["accept","reject"],setup(n,{emit:s}){const t=Y();function y(){s("accept")}function h(){s("reject")}return(w,l)=>(o(),a("div",Je,[p(Ge,{"accept-study":i(t).acceptStudy,"onUpdate:accept-study":l[0]||(l[0]=c=>i(t).acceptStudy=c),"accept-data-sharing":i(t).acceptDataSharing,"onUpdate:accept-data-sharing":l[1]||(l[1]=c=>i(t).acceptDataSharing=c),"accept-future-contact":i(t).acceptFutureContact,"onUpdate:accept-future-contact":l[2]||(l[2]=c=>i(t).acceptFutureContact=c),"request-feedback":i(t).requestFeedback,"onUpdate:request-feedback":l[3]||(l[3]=c=>i(t).requestFeedback=c),onAccept:y,onReject:h},null,8,["accept-study","accept-data-sharing","accept-future-contact","request-feedback"])]))}});const ze=B(Qe,[["__scopeId","data-v-fa0d0403"]]),at=I({__name:"ConsentView",props:{experimentId:null},emits:["scrollToTop"],setup(n,{emit:s}){const t=n;ne().setPageTitle("Under the Radar"),se().setExperimentId(t.experimentId);const w=ie();function l(){const g=t.experimentId?`/eligibility/${t.experimentId}`:"/eligibility-test";w.push({path:g})}const c=R(!1);async function _(){if(c.value=!0,s("scrollToTop"),t.experimentId){const g={acceptDataSharing:!1,consent:!1},S=await J(t.experimentId);await Q(t.experimentId,S.id,g)}}return(g,S)=>c.value?(o(),q(G,{key:1,"completion-state":"no consent"})):(o(),q(ze,{key:0,onAccept:l,onReject:_}))}});export{at as default};
