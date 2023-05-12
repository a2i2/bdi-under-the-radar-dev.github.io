import{_ as x}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.f08f0c99.js";import{s as y}from"./surveyExampleBase.55db71c1.js";import{f as m,v as g,s as r,g as u,U as f,x as A,q as E,i as k,o as w}from"./index.643b78dc.js";import{l as N,c as C,s as b}from"./surveyStorage.34c3760f.js";const V={name:"EPS1a",type:"checkbox",isRequired:!0,title:"Have you used any of the following services in the past week?",description:"Please choose all that apply.",validators:[{type:"expression",text:"Please select only 'None of them' or other options, not both",expression:"{EPS1a} anyof [3,2,1,0] <> {EPS1a} contains [4]"}],choices:[{value:"0",text:"Men's Line"},{value:"1",text:"MOSH"},{value:"2",text:"Roses in the Ocean"},{value:"3",text:"SANE Australia"},{value:"4",text:"None of them"}]},B={name:"EPS1b",type:"comment",isRequired:!0,title:"How did you find your experience?",maxLength:1024,visibleIf:"{EPS1a} anyof [3,2,1,0] and {EPS1a} notcontains [4]"},R={name:"EPS2",type:"rating",isRequired:!0,title:"If you were experiencing suicidal thoughts in the future, how likely is it that you would seek help from Men\u2019s Line?",rateValues:[{value:1,text:"Extremely unlikely"},{value:2,text:" Very unlikely"},{value:3,text:"Unlikely"},{value:4,text:"Neutral"},{value:5,text:"Likely"},{value:6,text:"Very likely"},{value:7,text:"Extremely likely"}]},q={name:"EPS3",type:"rating",isRequired:!0,title:"If you were experiencing suicidal thoughts in the future, how likely is it that you would seek help from MOSH?",rateValues:[{value:1,text:"Extremely unlikely"},{value:2,text:" Very unlikely"},{value:3,text:"Unlikely"},{value:4,text:"Neutral"},{value:5,text:"Likely"},{value:6,text:"Very likely"},{value:7,text:"Extremely likely"}]},T={name:"EPS4",type:"rating",isRequired:!0,title:"If you were experiencing suicidal thoughts in the future, how likely is it that you would seek help from Roses in the Ocean?",rateValues:[{value:1,text:"Extremely unlikely"},{value:2,text:" Very unlikely"},{value:3,text:"Unlikely"},{value:4,text:"Neutral"},{value:5,text:"Likely"},{value:6,text:"Very likely"},{value:7,text:"Extremely likely"}]},P={name:"EPS5",type:"rating",isRequired:!0,title:"If you were experiencing suicidal thoughts in the future, how likely is it that you would seek help from SANE Australia?",rateValues:[{value:1,text:"Extremely unlikely"},{value:2,text:" Very unlikely"},{value:3,text:"Unlikely"},{value:4,text:"Neutral"},{value:5,text:"Likely"},{value:6,text:"Very likely"},{value:7,text:"Extremely likely"}]},S={name:"Under the Radar",elements:[{type:"html",name:"title",html:'<div class="utr-html-section"><p>Below you see a list of things which can stop, delay or discourage you from getting, or continuing with, mental health services for your thoughts of ending your life. By professional care we mean care from such staff as a GP (family doctor), community mental health team (e.g. care coordinator, mental health nurse or mental health social worker), psychiatrist, counsellor, psychologist or psychotherapist.</p><p>Have any of these issues ever stopped, delayed or discouraged you from getting, or continuing with, professional care for your thoughts of ending your life?</p><p>There are no right or wrong answers to these questions, we are simply interested in your personal experiences. For \u2018not applicable\u2019 e.g. if it is a question about children and you do not have children, please select the Not applicable box.</p></div>'},{type:"rating",name:"BACE1",title:"Being unsure where to go to get professional care.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE2",title:"Wanting to solve the problem on my own.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE3",title:"Concern that I might be seen as weak for having a mental health problem.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE4",title:"Fear of being put in hospital against my will.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE5",title:"Concern that it might harm my chances when applying for jobs.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"4",text:"Not applicable"},{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE6",title:"Problems with transport or travelling to appointments.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE7",title:"Thinking the problem would get better by itself.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE8",title:"Concern about what my family might think, say, do or feel.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE9",title:"Feeling embarrassed or ashamed.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE10",title:"Preferring to get alternative forms of care (e.g. traditional / religious healing or alternative / complementary therapies).",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE11",title:"Not being able to afford the financial costs involved.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE12",title:"Concern that I might be seen as \u2018crazy\u2019.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE13",title:"Thinking that professional care probably would not help.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE14",title:"Concern that I might be seen as a bad parent.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"4",text:"Not applicable"},{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE15",title:"Professionals from my own ethnic or cultural group not being available.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE16",title:"Being too unwell to ask for help.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE17",title:"Concern that people I know might find out.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE18",title:"Dislike of talking about my feelings, emotions or thoughts.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE19",title:"Concern that people might not take me seriously if they found out I was having professional care.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE20",title:"Concerns about the treatments available (e.g. medication side effects).",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE21",title:"Not wanting a mental health problem to be on my medical records.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE22",title:"Having had previous bad experiences with professional care for mental health.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE23",title:"Preferring to get help from family or friends.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE24",title:"Concern that my children may be taken into care or that I may lose access or custody without my agreement.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"4",text:"Not applicable"},{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE25",title:"Thinking I did not have a problem.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE26",title:"Concern about what my friends might think, say or do.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE27",title:"Difficulty taking time off work.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"4",text:"Not applicable"},{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE28",title:"Concern about what people at work might think, say or do.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"4",text:"Not applicable"},{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE29",title:"Having problems with childcare while I receive professional care.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"4",text:"Not applicable"},{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]},{type:"rating",name:"BACE30",title:"Having no one who could help me get professional care.",description:"This has stopped, delayed or discouraged me",isRequired:!0,rateValues:[{value:"0",text:"Not at all"},{value:"1",text:"A little"},{value:"2",text:"Quite a lot"},{value:"3",text:"A lot"}]}]},Q={...y,pages:[{name:"Under the Radar",elements:[V,B,R,q,T,P]},S]},D=m({__name:"TestFollowUpView",setup(I){const t=g(),i=r(),o=r(),s=u(()=>Q),a=u(()=>"followUpSurvey:{00000000-0000-0000-0000-000000000000}");f(()=>{const e=N(a.value);i.value=e.oldData,o.value=e.oldPageIndex});function n(e){C(a.value)}function d(e){t.setPageCount(e.pageCount),t.setPageTitle(e.currentPage.name),t.setPageIndex(e.currentPageNo),t.setShowProgressBar(!0)}A(()=>{t.setShowProgressBar(!1)});function p(e,l,c){t.setPageIndex(e),t.setPageTitle(c)}function h(e,l){b(a.value,e,l)}function v(e){t.setHelpKey(e)}return(e,l)=>(w(),E(x,{"survey-data":k(s),"initial-state":i.value,"initial-page-idx":o.value,onComplete:n,onLoaded:d,onPageChanged:p,onPartialSend:h,onHelp:v},null,8,["survey-data","initial-state","initial-page-idx"]))}});export{D as default};
