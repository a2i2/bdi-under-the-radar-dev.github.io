import{f as D,x as _,h as F,c,j as n,e,L as b,H as C,I as V,k as s,l as u,F as I,m as T,D as q,o as d,a1 as H,A as o,p as J,b as W,aw as $,at as j,av as M,ax as E,ay as z,_ as K}from"./index.bb281815.js";const f=r=>(J("data-v-9c5218f9"),r=r(),W(),r),Q={class:"auth-test-page"},X=f(()=>e("hr",null,null,-1)),Y={class:"atp-grid"},Z={class:"atp-email"},ee=["disabled"],te={class:"atp-participant"},ae={class:"atp-otp"},se=["disabled"],ne={class:"atp-button-row"},oe=f(()=>e("hr",null,null,-1)),le=f(()=>e("hr",null,null,-1)),ie={key:0},ce={class:"profile-box"},ue=["src"],de={key:1},re=D({__name:"TestAuthView",setup(r){var k;const{user:l,isLoggedIn:p,email:N,startPasswordlessLogin:w,submitOTP:O,getRouterTargetForHomeOrLoginIfNeeded:P,logout:S}=q(),v=_(""),m=_(""),i=_((k=N.value)!=null?k:""),h=_(""),x=F(()=>{var t,a;return(a=(t=l.value)==null?void 0:t.user_metadata.participantId)!=null?a:""});async function A(){try{const t=await $();v.value=JSON.stringify(t,null,"	")}catch(t){v.value=`${t}`}}async function B(){try{const a=await j("00000000-0000-0000-0000-000000000001");m.value=JSON.stringify(a,null,"	")}catch(t){console.log("caught"),m.value=`${t}`}}async function L(){const t=i.value;await M(t),await w(t)}async function R(){const t=i.value;await w(t)}async function U(){const t=i.value,a=h.value;await O(a,t),E.push(P())}const y=()=>{S(),E.push("/")},G=async()=>{await z(x.value),y()};return(t,a)=>(d(),c("div",Q,[n(H,{label:"Back",link:"/"}),X,e("div",Y,[e("div",null,[e("div",Z,[b("email: "),C(e("input",{"onUpdate:modelValue":a[0]||(a[0]=g=>i.value=g),type:"text",disabled:s(p)},null,8,ee),[[V,i.value]])]),e("div",te,"participantId: "+u(s(x)),1),e("div",ae,[b("otp response: "),C(e("input",{"onUpdate:modelValue":a[1]||(a[1]=g=>h.value=g),type:"text",disabled:s(p)},null,8,se),[[V,h.value]])]),e("div",ne,[s(p)?T("",!0):(d(),c(I,{key:0},[n(o,{label:"Sign Up",onClick:L}),n(o,{label:"Request OTP Code",onClick:R}),n(o,{label:"Enter OTP Code",onClick:U})],64)),s(p)?(d(),c(I,{key:1},[n(o,{label:"Log Out",icon:"signup",onClick:y}),n(o,{label:"Withdraw (delete user info)",icon:"signup",onClick:G})],64)):T("",!0)]),oe,e("div",null,[n(o,{label:"Get Experiments",icon:"download",onClick:A}),e("pre",null,u(v.value),1)]),le,e("div",null,[n(o,{label:"Get Experiment",icon:"download",onClick:B}),e("pre",null,u(m.value),1)])]),e("div",null,[s(l)?(d(),c("div",ie,[e("div",ce,[e("img",{src:s(l).picture,alt:"Profile"},null,8,ue),e("div",null,[e("h2",null,u(s(l).nickname),1),e("span",null,u(s(l).email),1)])])])):(d(),c("div",de,"No User info"))])])]))}});const _e=K(re,[["__scopeId","data-v-9c5218f9"]]);export{_e as default};