import{u as w,O as q,g as D,p as F}from"./pcmServiceApi.b77ba4b6.js";import{d as g,i as $,o as m,c as S,b as _,P as B,f as u,A as k,_ as C,Q as P,t as U,H as I,R as j,u as A,l as V,e as y,S as R,g as c,K as v,L,p as M,a as N,m as E,k as x,s as O}from"./index.1df0607d.js";import{u as T}from"./surveyStore.e014db6b.js";const z=["data"],H={class:"pdf-fallback"},K=g({__name:"PdfDocument",props:{src:{type:String,required:!0},filename:{type:String,required:!0},height:{type:String,default:"auto"},width:{type:String,default:"auto"}},setup(t){const e=t;$(n=>({"67aede4e":t.height,"67461fbf":t.width}));function a(){const n=document.createElement("a");n.href=e.src,n.download=e.filename,n.click()}return(n,l)=>(m(),S("object",{class:"pdf-document",type:"application/pdf",data:t.src},[_("div",H,[B(n.$slots,"default",{},void 0,!0),u(k,{color:"var(--utr-green)",icon:"download",label:"Download PDF",onClick:a})])],8,z))}});const Q=C(K,[["__scopeId","data-v-713ed9e5"]]),G=["disabled","checked","aria-label"],J=g({__name:"CheckboxControl",props:{modelValue:{type:Boolean,default:!1},label:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){function a(n){const l=n.target;e("update:modelValue",l.checked)}return(n,l)=>(m(),S("label",{class:I(["checkbox-control",{disabled:t.disabled}])},[_("input",{disabled:t.disabled,type:"checkbox",checked:t.modelValue,"aria-label":t.label,onChange:a},null,40,G),P(" "+U(t.label),1)],2))}});const b=C(J,[["__scopeId","data-v-0f3ca0b8"]]),W=t=>(M("data-v-352f63d0"),t=t(),N(),t),X={class:"consent-form"},Y=W(()=>_("h3",null,"Please download the Participant Information Statement before agreeing to this study.",-1)),Z=g({__name:"ConsentForm",props:{acceptStudy:{type:Boolean},acceptDataSharing:{type:Boolean},acceptFutureContact:{type:Boolean},requestFeedback:{type:Boolean}},emits:["update:accept-study","update:accept-data-sharing","update:accept-future-contact","update:request-feedback","accept","reject"],setup(t,{emit:e}){const a=t,{breakpoint:n}=j(A()),l=V(!1),h=y(()=>l.value&&a.acceptStudy),o=y({get(){return a.acceptStudy},set(p){e("update:accept-study",p)}}),r=y({get(){return a.acceptDataSharing},set(p){e("update:accept-data-sharing",p)}}),i=y({get(){return a.acceptFutureContact},set(p){e("update:accept-future-contact",p)}}),f=y({get(){return a.requestFeedback},set(p){e("update:request-feedback",p)}});return(p,s)=>(m(),S("div",X,[u(Q,{src:"./PIS-CS.pdf",filename:"Participation Statement.pdf",width:"100%",height:"60%"},{default:R(()=>[Y]),_:1}),_("form",{class:"cf-form",onSubmit:s[6]||(s[6]=L(d=>e("accept"),["prevent"]))},[u(b,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=d=>l.value=d),label:"I am 18 or over (required)"},null,8,["modelValue"]),u(b,{modelValue:c(o),"onUpdate:modelValue":s[1]||(s[1]=d=>v(o)?o.value=d:null),label:"I agree to the study (required)"},null,8,["modelValue"]),u(b,{modelValue:c(f),"onUpdate:modelValue":s[2]||(s[2]=d=>v(f)?f.value=d:null),label:"I would like to receive feedback from the Institute on the results of this research (optional)"},null,8,["modelValue"]),u(b,{modelValue:c(i),"onUpdate:modelValue":s[3]||(s[3]=d=>v(i)?i.value=d:null),label:` I provide my consent for my name and contact details to be retained in a register so I can be
      contacted about other research projects in the future (optional)`},null,8,["modelValue"]),u(b,{modelValue:c(r),"onUpdate:modelValue":s[4]||(s[4]=d=>v(r)?r.value=d:null),label:`I provide my consent for de-identified/aggregated data to be shared with support organisations
  who are partners on this research study (optional)`},null,8,["modelValue"]),_("div",{class:I(["cf-action-row",{small:c(n)==="mobile"}])},[u(k,{label:"I Do Not Agree or Consent",icon:"close",onClick:s[5]||(s[5]=d=>e("reject"))}),u(k,{label:"I Agree and Consent",icon:"check",color:"var(--utr-green)","hover-color":"var(--utr-green-light)",disabled:!c(h),type:"submit"},null,8,["disabled"])],2)],32)]))}});const ee=C(Z,[["__scopeId","data-v-352f63d0"]]),te={class:"consent-layout"},ae=g({__name:"ConsentLayout",emits:["accept","reject"],setup(t,{emit:e}){const a=w();function n(){e("accept")}function l(){e("reject")}return(h,o)=>(m(),S("div",te,[u(ee,{"accept-study":c(a).acceptStudy,"onUpdate:accept-study":o[0]||(o[0]=r=>c(a).acceptStudy=r),"accept-data-sharing":c(a).acceptDataSharing,"onUpdate:accept-data-sharing":o[1]||(o[1]=r=>c(a).acceptDataSharing=r),"accept-future-contact":c(a).acceptFutureContact,"onUpdate:accept-future-contact":o[2]||(o[2]=r=>c(a).acceptFutureContact=r),"request-feedback":c(a).requestFeedback,"onUpdate:request-feedback":o[3]||(o[3]=r=>c(a).requestFeedback=r),onAccept:n,onReject:l},null,8,["accept-study","accept-data-sharing","accept-future-contact","request-feedback"])]))}});const oe=C(ae,[["__scopeId","data-v-fa0d0403"]]),re=g({__name:"ConsentView",props:{experimentId:null},setup(t){const e=t;E().setPageTitle("Under the Radar"),T().setExperimentId(e.experimentId);const l=O();function h(){const i=e.experimentId?`/eligibility/${e.experimentId}`:"/eligibility-test";l.push({path:i})}const o=V(!1);async function r(){if(o.value=!0,e.experimentId){const i={acceptDataSharing:!1,consent:!1},f=await D(e.experimentId);await F(e.experimentId,f.id,i)}}return(i,f)=>o.value?(m(),x(q,{key:1,"completion-state":"no consent"})):(m(),x(oe,{key:0,onAccept:h,onReject:r}))}});export{re as default};
