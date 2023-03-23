import{u as w,O as D,g as q,p as F}from"./pcmServiceApi.6e23bf93.js";import{d as g,D as P,k as m,b as S,f as _,N as B,e as u,O as k,_ as C,g as $,t as j,C as I,P as U,B as R,r as V,c as b,Q as A,u as c,I as v,R as M,p as N,i as L,x as E,z as x,j as O}from"./index.13ca0a12.js";import{u as z}from"./surveyStore.ceafeb39.js";const T=["data"],Q={class:"pdf-fallback"},G=g({__name:"PdfDocument",props:{src:{type:String,required:!0},filename:{type:String,required:!0},height:{type:String,default:"auto"},width:{type:String,default:"auto"}},setup(a){const t=a;P(n=>({"67aede4e":a.height,"67461fbf":a.width}));function e(){const n=document.createElement("a");n.href=t.src,n.download=t.filename,n.click()}return(n,l)=>(m(),S("object",{class:"pdf-document",type:"application/pdf",data:a.src},[_("div",Q,[B(n.$slots,"default",{},void 0,!0),u(k,{color:"var(--utr-green)",icon:"download",label:"Download PDF",onClick:e})])],8,T))}});const H=C(G,[["__scopeId","data-v-713ed9e5"]]),J=["disabled","checked","aria-label"],K=g({__name:"CheckboxControl",props:{modelValue:{type:Boolean,default:!1},label:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:t}){function e(n){const l=n.target;t("update:modelValue",l.checked)}return(n,l)=>(m(),S("label",{class:I(["checkbox-control",{disabled:a.disabled}])},[_("input",{disabled:a.disabled,type:"checkbox",checked:a.modelValue,"aria-label":a.label,onChange:e},null,40,J),$(" "+j(a.label),1)],2))}});const y=C(K,[["__scopeId","data-v-0f3ca0b8"]]),W=a=>(N("data-v-b645d1f1"),a=a(),L(),a),X={class:"consent-form"},Y=W(()=>_("h3",null,"Please download the Participant Information Statement before agreeing to this study.",-1)),Z=g({__name:"ConsentForm",props:{acceptStudy:{type:Boolean},acceptDataSharing:{type:Boolean},acceptFutureContact:{type:Boolean},requestFeedback:{type:Boolean}},emits:["update:accept-study","update:accept-data-sharing","update:accept-future-contact","update:request-feedback","accept","reject"],setup(a,{emit:t}){const e=a,{breakpoint:n}=U(R()),l=V(!1),h=b(()=>l.value&&e.acceptStudy),o=b({get(){return e.acceptStudy},set(p){t("update:accept-study",p)}}),r=b({get(){return e.acceptDataSharing},set(p){t("update:accept-data-sharing",p)}}),i=b({get(){return e.acceptFutureContact},set(p){t("update:accept-future-contact",p)}}),f=b({get(){return e.requestFeedback},set(p){t("update:request-feedback",p)}});return(p,s)=>(m(),S("div",X,[u(H,{src:"/PIS-CS.pdf",filename:"Participation Statement.pdf",width:"100%",height:"60%"},{default:A(()=>[Y]),_:1}),_("form",{class:"cf-form",onSubmit:s[6]||(s[6]=M(d=>t("accept"),["prevent"]))},[u(y,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=d=>l.value=d),label:"I am 18 or over (required)"},null,8,["modelValue"]),u(y,{modelValue:c(o),"onUpdate:modelValue":s[1]||(s[1]=d=>v(o)?o.value=d:null),label:"I agree to the study (required)"},null,8,["modelValue"]),u(y,{modelValue:c(f),"onUpdate:modelValue":s[2]||(s[2]=d=>v(f)?f.value=d:null),label:"I would like to receive feedback from the Institute on the results of this research (optional)"},null,8,["modelValue"]),u(y,{modelValue:c(i),"onUpdate:modelValue":s[3]||(s[3]=d=>v(i)?i.value=d:null),label:` I provide my consent for my name and contact details to be retained in a register so I can be
      contacted about other research projects in the future (optional)`},null,8,["modelValue"]),u(y,{modelValue:c(r),"onUpdate:modelValue":s[4]||(s[4]=d=>v(r)?r.value=d:null),label:`I provide my consent for de-identified/aggregated data to be shared with support organisations
  who are partners on this research study (optional)`},null,8,["modelValue"]),_("div",{class:I(["cf-action-row",{small:c(n)==="mobile"}])},[u(k,{label:"I Do Not Agree or Consent",icon:"close",onClick:s[5]||(s[5]=d=>t("reject"))}),u(k,{label:"I Agree and Consent",icon:"check",color:"var(--utr-green)","hover-color":"var(--utr-green-light)",disabled:!c(h),type:"submit"},null,8,["disabled"])],2)],32)]))}});const ee=C(Z,[["__scopeId","data-v-b645d1f1"]]),te={class:"consent-layout"},ae=g({__name:"ConsentLayout",emits:["accept","reject"],setup(a,{emit:t}){const e=w();function n(){t("accept")}function l(){t("reject")}return(h,o)=>(m(),S("div",te,[u(ee,{"accept-study":c(e).acceptStudy,"onUpdate:accept-study":o[0]||(o[0]=r=>c(e).acceptStudy=r),"accept-data-sharing":c(e).acceptDataSharing,"onUpdate:accept-data-sharing":o[1]||(o[1]=r=>c(e).acceptDataSharing=r),"accept-future-contact":c(e).acceptFutureContact,"onUpdate:accept-future-contact":o[2]||(o[2]=r=>c(e).acceptFutureContact=r),"request-feedback":c(e).requestFeedback,"onUpdate:request-feedback":o[3]||(o[3]=r=>c(e).requestFeedback=r),onAccept:n,onReject:l},null,8,["accept-study","accept-data-sharing","accept-future-contact","request-feedback"])]))}});const oe=C(ae,[["__scopeId","data-v-fa0d0403"]]),re=g({__name:"ConsentView",props:{experimentId:null},setup(a){const t=a,e=E();e.setPageIndex(0),e.setPageCount(2),e.setPageTitle("Under the Radar"),z().setExperimentId(t.experimentId);const l=O();function h(){const i=t.experimentId?`/eligibility/${t.experimentId}`:"/eligibility-test";l.push({path:i})}const o=V(!1);async function r(){if(o.value=!0,t.experimentId){const i={acceptDataSharing:!1,consent:!1},f=await q(t.experimentId);await F(t.experimentId,f.id,i)}}return(i,f)=>o.value?(m(),x(D,{key:1,"completion-state":"no consent"})):(m(),x(oe,{key:0,onAccept:h,onReject:r}))}});export{re as default};
