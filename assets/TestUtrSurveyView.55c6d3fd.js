import{_ as x}from"./SurveyJsWrapper.vue_vue_type_script_setup_true_lang.d4782132.js";import{s as c}from"./surveyExampleBase.55db71c1.js";import{f as y,y as p,x as r,h as u,S as f,B as S,v as A,k as R,o as w}from"./index.0b39c2e5.js";import{l as b,c as D,s as I}from"./surveyStorage.34c3760f.js";const q=[{name:"Under the Radar",elements:[{type:"checkbox",name:"DEM1",title:"Are you of Aboriginal or Torres Strait Islander origin?",isRequired:!0,choices:[{value:"0",text:"No"},{value:"1",text:"Yes, Aboriginal"},{value:"2",text:"Yes, Torres Strait Islander"},{value:"3",text:"Yes, Aboriginal and Torres Strait Islander"},{value:"4",text:"Don't know"},{value:"5",text:"Prefer not to say"}],maxSelectedChoices:1},{type:"checkbox",name:"DEM2",title:"What is your ancestry?",description:"Pick up to two options.",isRequired:!0,choices:[{value:"0",text:"Australian"},{value:"1",text:"Chinese or Cantonese"},{value:"2",text:"Dutch"},{value:"3",text:"English"},{value:"4",text:"German"},{value:"5",text:"Greek"},{value:"6",text:"Indian"},{value:"7",text:"Irish"},{value:"8",text:"Italian"},{value:"9",text:"Scottish"},{value:"10",text:"Vietnamese"},{value:"11",text:"Another ancestry"},{value:"12",text:"Prefer not to say"}],maxSelectedChoices:2},{type:"radiogroup",name:"DEM3",title:"What is the language that you mostly speak at home?",isRequired:!0,choices:[{value:"0",text:"Arabic"},{value:"1",text:"Cantonese"},{value:"2",text:"English"},{value:"3",text:"Greek"},{value:"4",text:"Hindi"},{value:"5",text:"Italian"},{value:"6",text:"Mandarin"},{value:"7",text:"Punjabi"},{value:"8",text:"Spanish"},{value:"9",text:"Vietnamese"},{value:"10",text:"Another language"},{value:"11",text:"Prefer not to say"}]},{type:"radiogroup",name:"DEM4",title:"How long have you been living in Australia?",isRequired:!0,choices:[{value:"0",text:"Less than 1 year"},{value:"1",text:"1-5 years"},{value:"2",text:"5-10 years"},{value:"3",text:"10+ years"},{value:4,text:"All my life"}]},{type:"radiogroup",name:"DEM5",title:"In what type of area do you live?",isRequired:!0,choices:[{value:"0",text:"Urban (i.e., major capital city)"},{value:"1",text:"Regional (i.e., town or city outside of a major capital city)"},{value:"2",text:"Rural or remote (i.e., living outside of a city or large town)"}]},{type:"radiogroup",name:"DEM6",title:"What is your relationship status?",isRequired:!0,choices:[{value:"0",text:"Single"},{value:"1",text:"In a relationship but not living together"},{value:"2",text:"Married/de-facto"},{value:"3",text:"Widowed, divorced or separated"}]},{type:"radiogroup",name:"DEM7",title:"What is your highest educational attainment?",isRequired:!0,choices:[{value:"0",text:"Less than Year 12"},{value:"1",text:"Completed Year 12"},{value:"2",text:"TAFE course/Certificate/Diploma"},{value:"3",text:"Undergraduate degree"},{value:"4",text:"Postgraduate degree (e.g., Masters, Graduate Diploma, PhD)"}]},{type:"radiogroup",name:"DEM8",title:"What is your current employment status?",isRequired:!0,choices:[{value:"0",text:"Employed \u2013 full-time"},{value:"1",text:"Employed \u2013 part-time"},{value:"2",text:"Employed \u2013 casual"},{value:"3",text:"Self-employed"},{value:"4",text:"Student"},{value:"5",text:"Not working"},{value:"6",text:"Stay-at-home parent"}]}]},{name:"Under the Radar",elements:[{type:"custom-rating",name:"UWRAP1",title:"On a scale of 1 to 7, what is your level of stress right now?",isRequired:!0,rateMax:7,minRateDescription:"Low",maxRateDescription:"High"}]},{name:"Under the Radar",elements:[{type:"custom-video-youtube",videoId:"52qyqdRO5_Q",hideNumber:!0,titleLocation:"hidden"}]},{name:"Under the Radar",elements:[{type:"ranking",name:"EGS5",title:"Please rank your preference of using the following services for your suicidal thoughts. Where 1 means most preferred and 4 means least preferred.",description:"Click and drag the names of the services to rank them from most to least preferred.",isRequired:!0,longTap:!1,choices:[{value:"0",text:"MEN\u2019S LINE AUSTRALIA"},{value:"1",text:"MOSH"},{value:"2",text:"ROSES IN THE OCEAN"},{value:"3",text:"SANE"}]},{type:"custom-egs",name:"EGS-services",hideNumber:!0,title:"Read more about the services below.",intervention:"1"}]},{name:"Under the Radar",elements:[{type:"custom-multiple-select-image",name:"ARS1",title:"Have you heard of any of the following services <strong>before</strong> taking part in this study?",description:"Pick all that apply",items:[{title:"MEN'S LINE AUSTRALIA",url:"./partner-mens-line-logo.svg",value:"0"},{title:"MOSH",url:"./partner-mosh-logo.png",value:"1"},{title:"ROSES IN THE OCEAN",url:"./partner-rose-logo.png",value:"2"},{title:"SANE",url:"./partner-sane-logo.png",value:"3"}]},{type:"custom-multiple-select-image",name:"ARS2",title:"Have you used any of the following services <strong>before</strong> taking part in this study?",description:"Pick all that apply",items:[{title:"MEN'S LINE AUSTRALIA",url:"./partner-mens-line-logo.svg",value:"0"},{title:"MOSH",url:"./partner-mosh-logo.png",value:"1"},{title:"ROSES IN THE OCEAN",url:"./partner-rose-logo.png",value:"2"},{title:"SANE",url:"./partner-sane-logo.png",value:"3"}]}]},{name:"Under the Radar",elements:[{type:"panel",name:"TFA-panel1",elements:[{type:"html",name:"TFA-title",html:'<h2 class="utr-section-title">Please rate your experience in watching the video.</h2>'},{type:"custom-rating",name:"TFA1",title:"How comfortable did you feel watching the video?",isRequired:!0,rateValues:[{value:"1",text:"Very uncomforable"},{value:"2",text:"Uncomfortable"},{value:"3",text:"No opinion"},{value:"4",text:"Comfortable"},{value:"5",text:"Very comfortable"}]},{type:"custom-rating",name:"TFA2",title:"How much effort did it take to watch the video?",isRequired:!0,rateValues:[{value:"1",text:"No effort at all"},{value:"2",text:"A little effort"},{value:"3",text:"No opinion"},{value:"4",text:"A lot of effort"},{value:"5",text:"Huge effort"}]},{type:"custom-rating",name:"TFA3",title:"There are moral or ethical consequences of watching the video.",isRequired:!0,rateValues:[{value:"1",text:"Strongly disagree"},{value:"2",text:"Disagree"},{value:"3",text:"No opinion"},{value:"4",text:"Agree"},{value:"5",text:"Strongly agree"}]},{type:"custom-rating",name:"TFA4",title:"The video has improved my intentions to engage with support services for suicidal thoughts.",isRequired:!0,rateValues:[{value:"1",text:"Strongly disagree"},{value:"2",text:"Disagree"},{value:"3",text:"No opinion"},{value:"4",text:"Agree"},{value:"5",text:"Strongly agree"}]},{type:"custom-rating",name:"TFA5",title:"It is clear to me how the video will help improve my engagement with support services for suicidal thoughts.",isRequired:!0,rateValues:[{value:"1",text:"Strongly disagree"},{value:"2",text:"Disagree"},{value:"3",text:"No opinion"},{value:"4",text:"Agree"},{value:"5",text:"Strongly agree"}]},{type:"custom-rating",name:"TFA6",title:"How confident did you feel about engaging with support services for suicidal thoughts after watching the video?",isRequired:!0,rateValues:[{value:"1",text:"Very unconfident"},{value:"2",text:"Unconfident"},{value:"3",text:"No opinion"},{value:"4",text:"Confident"},{value:"5",text:"Very confident"}]},{type:"custom-rating",name:"TFA7",title:"Engaging with support services for suicidal thoughts interfered with my other priorities.",isRequired:!0,rateValues:[{value:"1",text:"Strongly disagree"},{value:"2",text:"Disagree"},{value:"3",text:"No opinion"},{value:"4",text:"Agree"},{value:"5",text:"Strongly agree"}]},{type:"custom-rating",name:"TFA8",title:"How acceptable was the video to you?",isRequired:!0,rateValues:[{value:"1",text:"Completely unacceptable"},{value:"2",text:"Unacceptable"},{value:"3",text:"No opinion"},{value:"4",text:"Acceptable"},{value:"5",text:"Completely acceptable"}]}]}]},{name:"Under the Radar",elements:[{type:"comment",name:"UXQ1",title:"What about the video message appealed to you?",isRequired:!0,maxLength:1024},{type:"comment",name:"UXQ2",title:"What about the video message did not appeal to you?",isRequired:!0,maxLength:1024}]},{name:"Under the Radar",elements:[{type:"radiogroup",name:"MED1",title:"Have you ever been diagnosed with a **chronic physical health condition** by a professional (e.g., a doctor)? Chronic physical health conditions are things like asthma, diabetes, cerebral palsy or sickle cell anaemia that can be managed but not cured.",isRequired:!0,choices:[{value:"0",text:"No"},{value:"1",text:"Yes"},{value:"2",text:"Unsure"},{value:"3",text:"Prefer not to say"}]},{type:"radiogroup",name:"MED2",title:"Have you ever been diagnosed with a **mental health** condition by a professional (e.g., a doctor or psychologist)?",isRequired:!0,choices:[{value:"0",text:"No"},{value:"1",text:"Yes"},{value:"2",text:"Unsure"},{value:"3",text:"Prefer not to say"}]},{type:"checkbox",name:"MED3",visibleIf:"{MED2} = 1",title:"Which of the following condition(s) have you **ever been** diagnosed with? Pick all that apply.",isRequired:!0,choices:[{value:"1",text:"Major Depression"},{value:"2",text:"Bipolar Disorder"},{value:"3",text:"Social Anxiety Disorder or Social Phobia"},{value:"4",text:"Generalised Anxiety Disorder"},{value:"5",text:"Obsessive Compulsive Disorder"},{value:"6",text:"Panic Disorder"},{value:"7",text:"Eating Disorder"},{value:"8",text:"Alcohol Use Disorder"},{value:"9",text:"Substance Use Disorder"},{value:"10",text:"Attention Deficit Hyperactivity Disorder (ADHD)"},{value:"11",text:"Post-Traumatic Stress Disorder (PTSD)"},{value:"12",text:"Schizophrenia or Psychosis"},{value:"13",text:"Another condition not listed here"}]},{type:"custom-month-year",name:"MED4",visibleIf:"{MED2} = 1",title:"When were you **first diagnosed** with a mental health condition?",isRequired:!0}]},{name:"Under the Radar",elements:[{type:"panel",name:"WBS-panel1",elements:[{type:"html",name:"WBS-title",html:'<h2 class="utr-section-title">Below are some statements about feelings and thoughts. Please choose the option that best describes your experience of each over the <strong>past two weeks</strong>.</h2>'},{type:"custom-rating",name:"WBS1",title:"I've been feeling optimistic about the future.",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"Rarely"},{value:"3",text:"Some of the time"},{value:"4",text:"Often"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"WBS2",title:"I've been feeling useful.",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"Rarely"},{value:"3",text:"Some of the time"},{value:"4",text:"Often"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"WBS3",title:"I've been feeling relaxed.",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"Rarely"},{value:"3",text:"Some of the time"},{value:"4",text:"Often"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"WBS4",title:"I've been dealing with problems well.",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"Rarely"},{value:"3",text:"Some of the time"},{value:"4",text:"Often"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"WBS5",title:"I've been thinking clearly.",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"Rarely"},{value:"3",text:"Some of the time"},{value:"4",text:"Often"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"WBS6",title:"I've been feeling close to other people.",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"Rarely"},{value:"3",text:"Some of the time"},{value:"4",text:"Often"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"WBS7",title:"I've been able to make up my own mind about things.",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"Rarely"},{value:"3",text:"Some of the time"},{value:"4",text:"Often"},{value:"5",text:"All of the time"}]}]}]},{name:"Under the Radar",elements:[{type:"panel",name:"KTEN-panel1",elements:[{type:"html",name:"KTEN-title",html:'<h2 class="utr-section-title">In the <strong>past 4 weeks</strong>...</h2>'},{type:"custom-rating",name:"KTEN1",title:"About how often did you feel tired out for no good reason?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN2",title:"About how often did you feel nervous?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN3",visibleIf:"{KTEN2} <> 1",title:"About how often did you feel so nervous that nothing could calm you down?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN4",title:"About how often did you feel hopeless?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN5",title:"About how often did you feel restless or fidgety?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN6",visibleIf:"{KTEN5} <> 1",title:"About how often did you feel so restless you could not sit still?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN7",title:"About how often did you feel depressed?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN8",title:"About how often did you feel that everything was an effort?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN9",title:"About how often did you feel so sad that nothing could cheer you up?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]},{type:"custom-rating",name:"KTEN10",title:"About how often did you feel worthless?",isRequired:!0,rateValues:[{value:"1",text:"None of the time"},{value:"2",text:"A little of the time"},{value:"3",text:"Some of the time"},{value:"4",text:"Most of the time"},{value:"5",text:"All of the time"}]}]}]},{name:"Under the Radar",elements:[{type:"custom-rating",name:"SIDAS1",title:"In the **past month**, how often have you had thoughts about suicide?",isRequired:!0,rateMin:0,rateMax:10,minRateDescription:"Never",maxRateDescription:"Always"},{type:"custom-rating",name:"SIDAS2",visibleIf:"{SIDAS1} <> 0",title:"In the **past month**, how much control have you had over these thoughts? ",isRequired:!0,rateMin:0,rateMax:10,minRateDescription:"No control",maxRateDescription:"Full control"},{type:"custom-rating",name:"SIDAS3",visibleIf:"{SIDAS1} <> 0",title:"In the **past month**, how close have you come to making a suicide attempt?",isRequired:!0,rateMin:0,rateMax:10,minRateDescription:"Not close at all",maxRateDescription:"Made an attempt"},{type:"custom-rating",name:"SIDAS4",visibleIf:"{SIDAS1} <> 0",title:"In the **past month**, to what extent have you felt tormented by thoughts about suicide?",isRequired:!0,rateMin:0,rateMax:10,minRateDescription:"Not at all",maxRateDescription:"Extremely"},{type:"custom-rating",name:"SIDAS5",visibleIf:"{SIDAS1} <> 0",title:"In the **past month**, how much have thoughts about suicide interfered with your ability to carry out daily activities, such as work, household tasks or social activities?",isRequired:!0,rateMin:0,rateMax:10,minRateDescription:"Not at all",maxRateDescription:"Extremely"},{type:"radiogroup",name:"SIDAS6",visibleIf:"{SIDAS1} <> 0",title:"Have you ever made a suicide attempt?",isRequired:!0,choices:[{value:"0",text:"No, never"},{value:"1",text:"Yes, once"},{value:"2",text:"Yes, more than once"}]},{type:"text",name:"SIDAS7",visibleIf:"{SIDAS1} <> 0 and {SIDAS6} <> 0",title:"When was your most recent attempt?",isRequired:!0,inputType:"date",placeholder:"mm/yyyy"}]},{name:"Under the Radar",elements:[{type:"panel",name:"TLS-panel",elements:[{type:"html",name:"TLS-title",html:'<h2 class="utr-section-title">The next questions are about how you feel about different aspects of your life. For each one, tell me how often you feel that way.</h2>'},{type:"custom-rating",name:"TLS1",title:"How often do you feel that you lack companionship?",isRequired:!0,rateValues:[{value:"1",text:"Hardly ever"},{value:"2",text:"Some of the time"},{value:"3",text:"Often"}]},{type:"custom-rating",name:"TLS2",title:"How often do you feel left out?",isRequired:!0,rateValues:[{value:"1",text:"Hardly ever"},{value:"2",text:"Some of the time"},{value:"3",text:"Often"}]},{type:"custom-rating",name:"TLS3",title:"How often do you feel isolated from others?",isRequired:!0,rateValues:[{value:"1",text:"Hardly ever"},{value:"2",text:"Some of the time"},{value:"3",text:"Often"}]}]}]},{name:"Under the Radar",elements:[{type:"panel",name:"SHAPS-panel",elements:[{type:"html",name:"SHAPS-title",html:'<h2 class="utr-section-title">Thinking about the last few days, how would you agree with the following statements?</h2>'},{type:"custom-rating",name:"SHAPS1",title:"I would enjoy my favourite television or radio programme.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS2",title:"I would enjoy being with my family or close friends.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS3",title:"I would find pleasure in my hobbies and pastimes.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS4",title:"I would be able to enjoy my favourite meal.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS5",title:"I would enjoy a warm bath or refreshing shower.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS6",title:"I would find pleasure in the scent of flowers or the smell of a fresh sea breeze or freshly baked bread.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS7",title:"I would enjoy seeing other people's smiling faces.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS8",title:"I would enjoy looking smart when I have made an effort with my appearance.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS9",title:"I would enjoy reading a book, magazine or newspaper.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS10",title:"I would enjoy a cup of tea or coffee or my favorite drink.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS11",title:"I would find pleasure in small things, e.g. bright sunny day, a telephone call from a friend.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS12",title:"I would be able to enjoy a beautiful landscape or view.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS13",title:"I would get pleasure from helping others.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]},{type:"custom-rating",name:"SHAPS14",title:"I would feel pleasure when I receive praise from other people.",isRequired:!0,rateValues:[{value:"0",text:"Strongly Disagree"},{value:"1",text:"Disagree"},{value:"2",text:"Agree"},{value:"3",text:"Strongly Agree"}]}]}]}],N={...c,pages:q},H=y({__name:"TestUtrSurveyView",setup(E){const t=p(),l=r(),i=r(),n=u(()=>N),a=u(()=>"utrSurvey:{00000000-0000-0000-0000-000000000000}");f(()=>{const e=b(a.value);l.value=e.oldData,i.value=e.oldPageIndex});function s(e){D(a.value)}function m(e){t.setPageCount(e.pageCount),t.setPageTitle(e.currentPage.name),t.setPageIndex(e.currentPageNo),t.setShowProgressBar(!0)}S(()=>{t.setShowProgressBar(!1)});function v(e,o,g){t.setPageIndex(e),t.setPageTitle(g)}function h(e,o){I(a.value,e,o)}function d(e){t.setHelpKey(e)}return(e,o)=>(w(),A(x,{"survey-data":R(n),"initial-state":l.value,"initial-page-idx":i.value,onComplete:s,onLoaded:m,onPageChanged:v,onPartialSend:h,onHelp:d},null,8,["survey-data","initial-state","initial-page-idx"]))}});export{H as default};
