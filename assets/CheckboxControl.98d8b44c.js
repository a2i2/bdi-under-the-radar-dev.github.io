import{f as c,c as s,e as d,J as n,l as r,a1 as i,o as b,_ as u}from"./index.2703dbb5.js";const _=["disabled","checked","aria-label"],f=c({__name:"CheckboxControl",props:{modelValue:{type:Boolean,default:!1},label:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){function o(a){const l=a.target;t("update:modelValue",l.checked)}return(a,l)=>(b(),s("label",{class:i(["checkbox-control",{disabled:e.disabled}])},[d("input",{disabled:e.disabled,type:"checkbox",checked:e.modelValue,"aria-label":e.label,onChange:o},null,40,_),n(" "+r(e.label),1)],2))}});const h=u(f,[["__scopeId","data-v-0f3ca0b8"]]);export{h as C};
