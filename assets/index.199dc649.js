import{r as e,m as t,a,c as n,d as s,B as i,j as r,M as l,I as d,n as c,f as o,o as _,U as p}from"./index.792c42cf.js";import{B as h,T as m,A as b}from"./TextArea.776adf27.js";import{M as u}from"./Markdown.9382812e.js";const C="_container_d2pb1_1",v="_title_d2pb1_7",f="_textAreaContainer_d2pb1_15",N="_tabs_d2pb1_22",k="_tabContainer_d2pb1_30",y="_underline_d2pb1_41",x="_tabContent_d2pb1_50",g="_tabTitle_d2pb1_55",M="_textArea_d2pb1_15",w="_previewContainer_d2pb1_70",j="_buttonsContainer_d2pb1_78",A=[{key:0,title:"Code",icon:r(h,{}),content:(e,t)=>r(m,{className:M,rows:19,cols:30,value:e,onChange:t,placeholder:"Content there...",inputMode:"none"})},{key:1,title:"Preview",icon:r(b,{}),content:e=>r("div",{className:w,children:r(u,{children:e})})}],T=()=>{const[h,m]=e.exports.useState(0),[b,u]=t(""),[M,w]=t(""),T=a(),I=n();return s(i,{containerClassName:C,header:!0,container:!0,children:[s("h1",{className:v,children:[r(l,{}),r("span",{children:"Create post"})]}),r(d,{placeholder:"Title",value:b,onChange:u}),s("div",{className:f,children:[r("div",{className:N,children:A.map(((e,t)=>s("div",{onClick:()=>m(e.key),className:k,"data-active":e.key===h,children:[s("div",{className:x,children:[e.icon,r("h3",{className:g,children:e.title})]}),e.key===h&&r(c.div,{className:y,layoutId:"underline"})]},t)))}),A.find((e=>e.key===h)).content(M,w)]}),r("div",{className:j,children:r(o,{onClick:async()=>{if(!b)return T(_("Input title!"));if(b.length<3)return T(_("Min title length is 3!"));if(b.length>32)return T(_("Max title length is 32!"));return 201===(await p.createPost({title:b,content:M})).status?I("/posts"):void 0},children:"Create"})})]})};export{T as default};
