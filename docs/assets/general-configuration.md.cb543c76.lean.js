import{s as c}from"./chunks/style.965f71c4.js";import{r,o as n,b as D,u as F,c as y,d as t,a as e}from"./app.c0e0a3bc.js";const i={__name:"MonthExample",setup(p){const s=r({start:new Date,end:new Date});return(o,a)=>(n(),D(F(c),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),month:1},null,8,["modelValue"]))}},d={__name:"YearExample",setup(p){const s=r({start:new Date,end:new Date});return(o,a)=>(n(),D(F(c),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),year:1990},null,8,["modelValue"]))}},C={__name:"StartDateLabelExample",setup(p){const s=r({start:new Date,end:new Date});return(o,a)=>(n(),D(F(c),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),startDateLabel:"Example label"},null,8,["modelValue"]))}},A={__name:"EndDateLabelExample",setup(p){const s=r({start:new Date,end:new Date});return(o,a)=>(n(),D(F(c),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),"allow-range":"",startDateLabel:"Start date label",endDateLabel:"End date label"},null,8,["modelValue"]))}},u={__name:"startDatePlaceholder",setup(p){const s=r({start:null,end:null});return(o,a)=>(n(),D(F(c),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),startDatePlaceholder:"Example placeholder"},null,8,["modelValue"]))}},h={__name:"endDatePlaceholder",setup(p){const s=r({start:null,end:null});return(o,a)=>(n(),D(F(c),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),"allow-range":"",startDatePlaceholder:"Start date placeholder",endDatePlaceholder:"End date placeholder"},null,8,["modelValue"]))}},m=e("",11),_=e("",6),f=e("",7),g=e("",6),E=e("",7),b=e("",6),v=e("",2),k=JSON.parse('{"title":"General configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"v-model","slug":"v-model","link":"#v-model","children":[]},{"level":2,"title":"month","slug":"month","link":"#month","children":[]},{"level":2,"title":"Year","slug":"year","link":"#year","children":[]},{"level":2,"title":"startDateLabel","slug":"startdatelabel","link":"#startdatelabel","children":[]},{"level":2,"title":"endDateLabel","slug":"enddatelabel","link":"#enddatelabel","children":[]},{"level":2,"title":"startDatePlaceholder","slug":"startdateplaceholder","link":"#startdateplaceholder","children":[]},{"level":2,"title":"endDatePlaceholder","slug":"enddateplaceholder","link":"#enddateplaceholder","children":[]}],"relativePath":"general-configuration.md"}'),x={name:"general-configuration.md"},P=Object.assign(x,{setup(p){return(s,o)=>(n(),y("div",null,[m,t(i),_,t(d),f,t(C),g,t(A),E,t(u),b,t(h),v]))}});export{k as __pageData,P as default};