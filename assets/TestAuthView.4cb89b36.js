import{d as U,l as f,$,e as w,c as i,f as s,T as D,b as e,P as W,I as F,J as z,g as n,t as o,F as N,h as x,v as M,o as l,A as c,p as X,a as Z,s as j,a1 as q,X as H,Z as K,a2 as Q,_ as Y}from"./index.947dc127.js";const r=d=>(X("data-v-fe0baa92"),d=d(),Z(),d),tt={class:"auth-test-page"},et=r(()=>e("hr",null,null,-1)),nt={class:"atp-grid"},at={class:"atp-email"},st=["disabled"],ot={class:"atp-participant"},it={key:0,class:"atp-button-row"},lt=r(()=>e("hr",null,null,-1)),ct=r(()=>e("hr",null,null,-1)),ut={key:0},rt={class:"profile-box"},dt=["src"],pt=r(()=>e("div",null,"Auth0 User Info:",-1)),_t=r(()=>e("div",null,"ID Token Claims:",-1)),ht={key:1},vt=U({__name:"TestAuthView",setup(d){var T,I;const C=j();function V(t){C.push(t)}const{isAuthenticated:v,isLoading:A,user:a,idTokenClaims:p,getAccessTokenSilently:y,loginWithRedirect:k,logout:E}=M(),g=f(""),m=f(""),_=f((I=(T=a.value)==null?void 0:T.email)!=null?I:"");$(a,t=>{t.email&&(_.value=t.email)});const B=w(()=>{var t;return JSON.stringify((t=a==null?void 0:a.value)!=null?t:"",null,"	")}),P=w(()=>{var t;return JSON.stringify((t=p==null?void 0:p.value)!=null?t:"",null,"	")}),b=w(()=>{var t;return(t=p.value)==null?void 0:t.user_metadata.participantId});async function J(){try{const t=await q();g.value=JSON.stringify(t,null,"	")}catch(t){g.value=`${t}`}}async function L(){try{const t=await y();console.log(t);const h=await H("00000000-0000-0000-0000-000000000001",t);m.value=JSON.stringify(h,null,"	")}catch(t){console.log("caught"),m.value=`${t}`}}async function O(){const t=_.value;await K(t),k({appState:{target:"/auth-test"},authorizationParams:{screen_hint:"signup",login_hint:t}})}const G=()=>{k({appState:{target:"/auth-test"}})},S=()=>E({logoutParams:{returnTo:window.location.origin}}),R=async()=>{const t=await y();await Q(b.value,t),S()};return(t,u)=>(l(),i("div",tt,[s(D,{label:"Back",onClick:u[0]||(u[0]=h=>V("/"))}),et,e("div",nt,[e("div",null,[e("div",at,[W("email: "),F(e("input",{"onUpdate:modelValue":u[1]||(u[1]=h=>_.value=h),type:"text",disabled:n(v)},null,8,st),[[z,_.value]])]),e("div",ot,"participantId: "+o(n(b)),1),n(A)?x("",!0):(l(),i("div",it,[n(v)?x("",!0):(l(),i(N,{key:0},[s(c,{label:"Sign Up",icon:"signup",onClick:O}),s(c,{label:"Log In",icon:"signup",onClick:G})],64)),n(v)?(l(),i(N,{key:1},[s(c,{label:"Log Out",icon:"signup",onClick:S}),s(c,{label:"Withdraw (delete user info)",icon:"signup",onClick:R})],64)):x("",!0)])),lt,e("div",null,[s(c,{label:"Get Experiments",icon:"download",onClick:J}),e("pre",null,o(g.value),1)]),ct,e("div",null,[s(c,{label:"Get Experiment",icon:"download",onClick:L}),e("pre",null,o(m.value),1)])]),e("div",null,[n(a)?(l(),i("div",ut,[e("div",rt,[e("img",{src:n(a).picture,alt:"Profile"},null,8,dt),e("div",null,[e("h2",null,o(n(a).nickname),1),e("span",null,o(n(a).email),1)])]),pt,e("pre",null,o(n(B)),1),_t,e("pre",null,o(n(P)),1)])):(l(),i("div",ht,"No User info"))])])]))}});const mt=Y(vt,[["__scopeId","data-v-fe0baa92"]]);export{mt as default};
