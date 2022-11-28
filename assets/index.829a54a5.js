import{R as e,S as o,P as i,A as d,a as p,r as m,b as x,B as u}from"./vendor.83b9d5be.js";const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};g();var f="/vite-deploy-demo/assets/hero.a707d92d.png";const y=()=>{const r=["logo-instagram","logo-facebook","logo-linkedin","logo-twitter"];return e.createElement("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center"},e.createElement("div",{className:"flex-1 flex items-center justify-center h-full"},e.createElement("img",{src:f,alt:"",className:"md:w-11/12 h-full object-cover"})),e.createElement("div",{className:"flex-1"},e.createElement("div",{className:"md:text-left text-center"},e.createElement("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold"},e.createElement("span",{className:"text-cyan-600 md:text-6xl text-5xl"},"Hello!",e.createElement("br",null)),"My Name is ",e.createElement("span",null,"John Alex")),e.createElement("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600"},"Fullstack Developer"),e.createElement("button",{className:"btn-primary mt-8"},"Contact Me"),e.createElement("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5"},r==null?void 0:r.map(t=>e.createElement("div",{key:t,className:"text-gray-600 hover:text-white cursor-pointer "},e.createElement("ion-icon",{name:t})))))))};var E="/vite-deploy-demo/assets/about.34cb49a4.png";const h=()=>{const r=[{text:"Years experience",count:"04"},{text:"Completed Projects",count:"24"},{text:"Companies Work",count:"06"}];return e.createElement("section",{id:"about",className:"py-10 text-white"},e.createElement("div",{className:"text-center mt-8"},e.createElement("h3",{className:"text-4xl font-semibold"},"About ",e.createElement("span",{className:"text-cyan-600"},"Me")),e.createElement("p",{className:"text-gray-400 my-3 text-lg"},"My introduction"),e.createElement("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto"},e.createElement("div",{className:"p-2"},e.createElement("div",{className:"text-gray-300 my-3"},e.createElement("p",{className:"text-justify leading-7 w-11/12 mx-auto"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam, explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur consequuntur sint. Reprehenderit cupiditate possimus facere quasi voluptatem?"),e.createElement("div",{className:"flex mt-10 items-center gap-7"},r.map(t=>e.createElement("div",{key:t.text},e.createElement("h3",{className:"md:text-4xl text-2xl font-semibold text-white"},t.count,e.createElement("span",{className:"text-cyan-600"},"+")," "),e.createElement("span",{className:"md:text-base text-xs"},t.text)))),e.createElement("br",null),e.createElement("br",null),e.createElement("a",{href:"./src/assets/Code_a_program.pdf",download:!0},e.createElement("button",{className:"btn-primary"},"Download CV")))),e.createElement("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center"},e.createElement("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg "},e.createElement("img",{src:E,alt:"",className:"w-full object-cover bg-cyan-600 rounded-xl"}))))))},b=()=>{const r=[{logo:"logo-html5",level:"Advance",count:86},{logo:"logo-css3",level:"Expect",count:90},{logo:"logo-nodejs",level:"Beginner",count:40},{logo:"logo-react",level:"Intermediate",count:80}];return e.createElement("section",{id:"skills",className:"py-10 bg-gray-800 relative"},e.createElement("div",{className:"mt-8 text-gray-100 text-center"},e.createElement("h3",{className:"text-4xl font-semibold"},"My ",e.createElement("span",{className:"text-cyan-600"},"Skills")),e.createElement("p",{className:"text-gray-400 mt-3 text-lg"},"My knowledge"),e.createElement("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap"},r==null?void 0:r.map((t,n)=>e.createElement("div",{key:n,className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"},e.createElement("div",{style:{background:`conic-gradient(rgb(8,145,170) ${t.count}%,#ddd ${t.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full"},e.createElement("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600"},e.createElement("ion-icon",{name:t.logo}))),e.createElement("p",{className:"text-xl mt-3"},t.level))))))};var v="/vite-deploy-demo/assets/project-1.8f3963ea.png",N="/vite-deploy-demo/assets/project-2.6a32d774.jpg",w="/vite-deploy-demo/assets/project-3.cd7db3ec.jpg",k="/vite-deploy-demo/assets/project-4.b976e709.jpg",j="/vite-deploy-demo/assets/project-5.808bc575.png",S="/vite-deploy-demo/assets/project_person1.718b85ad.png";const C=()=>{const r=[{img:v,name:"Movie App",github_link:"https://github.com/Sridhar-C-25",live_link:"https://myreactflix.netlify.app"},{img:N,name:"Job search Web App",github_link:"https://github.com/Sridhar-C-25/jobsearchapp",live_link:"https://myjobsearch.netlify.app"},{img:w,name:"Highking",github_link:"https://github.com/Sridhar-C-25/highking",live_link:"https://highking01.netlify.app"},{img:k,name:"React Nav",github_link:"https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",live_link:"https://reacttailwindnavbar.netlify.app"},{img:j,name:"Vue Country",github_link:"https://github.com/Sridhar-C-25",live_link:"https://vuecountry05.netlify.app"}];return e.createElement("section",{id:"projects",className:"py-10 text-white"},e.createElement("div",{className:"text-center"},e.createElement("h3",{className:"text-4xl font-semibold"},"My ",e.createElement("span",{className:"text-cyan-600"},"Projects")),e.createElement("p",{className:"text-gray-400 mt-3 text-lg"},"My awesome works")),e.createElement("br",null),e.createElement("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative"},e.createElement("div",{className:"lg:w-2/3 w-full"},e.createElement(o,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[i,d]},r.map((t,n)=>e.createElement(p,{key:n},e.createElement("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl"},e.createElement("img",{src:t.img,alt:"",className:"rounded-lg"}),e.createElement("h3",{className:"text-xl my-4"},t.name),e.createElement("div",{className:"flex gap-3"},e.createElement("a",{href:t.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block"},"Github"),e.createElement("a",{href:t.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block"},"Live Demo"))))))),e.createElement("div",{className:"lg:block hidden"},e.createElement("img",{src:S,alt:""}))))};var M="/vite-deploy-demo/assets/hireMe.55b0f29b.png";const A=()=>e.createElement("section",{id:"hireme",className:"py-10 px-3 text-white"},e.createElement("div",{className:"text-center"},e.createElement("h3",{className:"text-4xl font-semibold"},"Hire ",e.createElement("span",{className:"text-cyan-600"},"Me")),e.createElement("p",{className:"text-gray-400 mt-3 text-lg"},"Do you have any work?")),e.createElement("div",{className:"bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center"},e.createElement("div",null,e.createElement("h2",{className:"text-2xl font-semibold"},"Do you want any work from me?"),e.createElement("p",{className:"lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta soluta quos tempore eos accusamus cupiditate, amet in similique sapiente obcaecati odio deleniti architecto corporis ratione. Consequatur a quidem maiores!"),e.createElement("button",{className:"btn-primary mt-10"},"Say Hello")),e.createElement("img",{src:M,alt:"",className:"lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"}))),_=()=>{const r=[{logo:"mail",text:"codeaprogram@gmail.com"},{logo:"logo-whatsapp",text:"123 456 780"},{logo:"location",text:"demo location"}];return e.createElement("section",{id:"contact",className:"py-10 px-3 text-white"},e.createElement("div",{className:"text-center mt-8"},e.createElement("h3",{className:"text-4xl font-semibold"},"Contact ",e.createElement("span",{className:"text-cyan-600"},"Me")),e.createElement("p",{className:"text-gray-400 mt-3 text-lg"},"Get in touch"),e.createElement("div",{className:`mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto`},e.createElement("form",{className:"flex flex-col flex-1 gap-5"},e.createElement("input",{type:"text",placeholder:"Your Name"}),e.createElement("input",{type:"Email",placeholder:"Your Email Address"}),e.createElement("textarea",{placeholder:"Your Message",rows:10}),e.createElement("button",{className:"btn-primary w-fit"},"Send Message")),e.createElement("div",{className:"flex flex-col  gap-7 "},r.map((t,n)=>e.createElement("div",{key:n,className:`flex flex-row  
                  text-left gap-4 flex-wrap items-center`},e.createElement("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full"},e.createElement("ion-icon",{name:t.logo})),e.createElement("p",{className:"md:text-base text-sm  break-words"},t.text)))))))},q=()=>e.createElement("div",{className:"bg-gray-800 text-sm p-4 text-center text-white"},"Copyright \xA9 2022 John Alex.All Rights reserved."),O=()=>{const[r,t]=m.exports.useState(!1),[n,s]=m.exports.useState(!1),l=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"},{name:"CONTACT",link:"#contact"}];return m.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?t(!0):t(!1)})},[]),e.createElement("nav",{className:`fixed w-full left-0 top-0 z-[999] ${r?"bg-white/60  text-gray-900":"text-white"}`},e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",{className:"mx-7"},e.createElement("h4",{className:"text-4xl uppercase font-bold"},"A",e.createElement("span",{className:"text-cyan-600"},"le"),"x")),e.createElement("div",{className:` ${r?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`},e.createElement("ul",{className:"flex items-center gap-1 py-2 text-lg"},l==null?void 0:l.map((a,c)=>e.createElement("li",{key:c,className:"px-6 hover:text-cyan-600"},e.createElement("a",{href:a==null?void 0:a.link},a==null?void 0:a.name))))),e.createElement("div",{onClick:()=>s(!n),className:`z-[999]  ${n?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`},e.createElement("ion-icon",{name:"menu"})),e.createElement("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${n?"right-0":"right-[-100%]"}`},e.createElement("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg"},l==null?void 0:l.map((a,c)=>e.createElement("li",{onClick:()=>s(!1),key:c,className:"px-6 hover:text-cyan-600"},e.createElement("a",{href:a==null?void 0:a.link},a==null?void 0:a.name)))))))},P=()=>e.createElement("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"},e.createElement("ion-icon",{name:"chatbubble-ellipses"})),L=()=>e.createElement("div",null,e.createElement(O,null),e.createElement(P,null),e.createElement(y,null),e.createElement(h,null),e.createElement(b,null),e.createElement(A,null),e.createElement(C,null),e.createElement(_,null),e.createElement(q,null));x.render(e.createElement(u,null,e.createElement(L,null)),document.getElementById("root"));
