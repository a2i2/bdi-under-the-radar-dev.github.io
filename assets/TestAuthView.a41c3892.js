import{d as U,l as f,ag as G,e as w,c as o,f as s,b as e,Q as D,J as R,K as W,g as n,t as i,F as N,h as x,B as F,o as l,T as $,A as c,p as j,a as z,ah as K,ac as M,af as Q,ai as q,aj as H,_ as X}from"./index.4b39fea9.js";const u=r=>(j("data-v-70ebeb1d"),r=r(),z(),r),Y={class:"auth-test-page"},Z=u(()=>e("hr",null,null,-1)),tt={class:"atp-grid"},et={class:"atp-email"},nt=["disabled"],at={class:"atp-participant"},st={key:0,class:"atp-button-row"},it=u(()=>e("hr",null,null,-1)),ot=u(()=>e("hr",null,null,-1)),lt={key:0},ct={class:"profile-box"},ut=["src"],rt=u(()=>e("div",null,"Auth0 User Info:",-1)),dt=u(()=>e("div",null,"ID Token Claims:",-1)),pt={key:1},_t=U({__name:"TestAuthView",setup(r){var T,I;const{isAuthenticated:_,isLoading:V,user:a,idTokenClaims:d,getAccessTokenSilently:y,loginWithRedirect:k,logout:A}=F(),h=f(""),g=f(""),p=f((I=(T=a.value)==null?void 0:T.email)!=null?I:"");G(a,t=>{t.email&&(p.value=t.email)});const B=w(()=>{var t;return JSON.stringify((t=a==null?void 0:a.value)!=null?t:"",null,"	")}),C=w(()=>{var t;return JSON.stringify((t=d==null?void 0:d.value)!=null?t:"",null,"	")}),b=w(()=>{var t;return(t=d.value)==null?void 0:t.user_metadata.participantId});async function E(){try{const t=await K();h.value=JSON.stringify(t,null,"	")}catch(t){h.value=`${t}`}}async function J(){try{const t=await y();console.log(t);const m=await M("00000000-0000-0000-0000-000000000001",t);g.value=JSON.stringify(m,null,"	")}catch(t){console.log("caught"),g.value=`${t}`}}async function L(){const t=p.value;await Q(t),k({appState:{target:"/auth-test"},authorizationParams:{screen_hint:"signup",login_hint:t}})}const O=()=>{k({appState:{target:"/auth-test"}})},S=()=>A({logoutParams:{returnTo:window.location.origin+q}}),P=async()=>{const t=await y();await H(b.value,t),S()};return(t,v)=>(l(),o("div",Y,[s($,{label:"Back",link:"/"}),Z,e("div",tt,[e("div",null,[e("div",et,[D("email: "),R(e("input",{"onUpdate:modelValue":v[0]||(v[0]=m=>p.value=m),type:"text",disabled:n(_)},null,8,nt),[[W,p.value]])]),e("div",at,"participantId: "+i(n(b)),1),n(V)?x("",!0):(l(),o("div",st,[n(_)?x("",!0):(l(),o(N,{key:0},[s(c,{label:"Sign Up",icon:"signup",onClick:L}),s(c,{label:"Log In",icon:"signup",onClick:O})],64)),n(_)?(l(),o(N,{key:1},[s(c,{label:"Log Out",icon:"signup",onClick:S}),s(c,{label:"Withdraw (delete user info)",icon:"signup",onClick:P})],64)):x("",!0)])),it,e("div",null,[s(c,{label:"Get Experiments",icon:"download",onClick:E}),e("pre",null,i(h.value),1)]),ot,e("div",null,[s(c,{label:"Get Experiment",icon:"download",onClick:J}),e("pre",null,i(g.value),1)])]),e("div",null,[n(a)?(l(),o("div",lt,[e("div",ct,[e("img",{src:n(a).picture,alt:"Profile"},null,8,ut),e("div",null,[e("h2",null,i(n(a).nickname),1),e("span",null,i(n(a).email),1)])]),rt,e("pre",null,i(n(B)),1),dt,e("pre",null,i(n(C)),1)])):(l(),o("div",pt,"No User info"))])])]))}});const gt=X(_t,[["__scopeId","data-v-70ebeb1d"]]);export{gt as default};
