(function(){"use strict";var t={9595:function(t,e,s){var n=s(9963),a=s(6252);const i={class:"container with-nav"};function r(t,e,s,n,r,l){const u=(0,a.up)("the-navbar"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u),(0,a._)("div",i,[(0,a.Wm)(o)])],64)}var l=s(3577);const u=t=>((0,a.dD)("data-v-652afbc2"),t=t(),(0,a.Cn)(),t),o={class:"TheNavbar"},c=u((()=>(0,a._)("h2",null,"IT_Freelance",-1))),d={key:0,class:"LinkNavBar"},p=u((()=>(0,a._)("div",{class:"bar1"},null,-1))),k=u((()=>(0,a._)("div",{class:"bar2"},null,-1))),v=u((()=>(0,a._)("div",{class:"bar3"},null,-1))),f=[p,k,v],m={key:0,class:"BurgerMenu"};function w(t,e,s,n,i,r){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",o,[c,i.windowWidth>615?((0,a.wg)(),(0,a.iD)("ul",d,[(0,a._)("li",null,[(0,a.Wm)(u,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Все задания")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(u,{to:"/new"},{default:(0,a.w5)((()=>[(0,a.Uk)("Создать")])),_:1})])])):(0,a.kq)("",!0),i.windowWidth<616?((0,a.wg)(),(0,a.iD)("div",{key:1,onClick:e[0]||(e[0]=t=>i.menuOpen=!i.menuOpen)},[(0,a._)("div",{class:(0,l.C_)({container:!0,change:i.menuOpen})},f,2),i.menuOpen?((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(u,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Все задания")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(u,{to:"/new"},{default:(0,a.w5)((()=>[(0,a.Uk)("Создать")])),_:1})])])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])}var h={data(){return{windowWidth:null,menuOpen:!1}},methods:{handleResize(){this.windowWidth=window.innerWidth}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed(){window.removeEventListener("resize",this.handleResize)}},_=s(3744);const y=(0,_.Z)(h,[["render",w],["__scopeId","data-v-652afbc2"]]);var b=y,g={components:{TheNavbar:b}};const T=(0,_.Z)(g,[["render",r]]);var O=T,D=s(3907),I=s(8433),S=(0,D.MT)({state(){return{tasks:[],taskOpen:!1,task:null}},getters:{TaskPieces(t){return t.tasks.length},TaskActive(t){return t.task=t.tasks.filter((t=>"active"==t.status)).length}},mutations:{async GetServer(t){const{data:e}=await I.Z.get("https://it-my-freelance-default-rtdb.firebaseio.com/myTasksItems.json");t.tasks=Object.keys(e).map((t=>({id:t,...e[t]})))},taskChange(t){return t.taskOpen=!t.taskOpen}},actions:{},modules:{}}),z=s(2201);const C={class:"card"},H=(0,a._)("h1",null,"Создать новое задание",-1),U={class:"form-control"},W=(0,a._)("label",{for:"title"},"Название",-1),j={class:"form-control"},A=(0,a._)("label",{for:"date"},"Дата дэдлайна",-1),Z={class:"form-control"},x=(0,a._)("label",{for:"description"},"Описание",-1);function N(t,e,s,i,r,l){return(0,a.wg)(),(0,a.iD)("form",C,[H,(0,a._)("div",U,[W,(0,a.wy)((0,a._)("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>i.titleInput=t)},null,512),[[n.nr,i.titleInput]])]),(0,a._)("div",j,[A,(0,a.wy)((0,a._)("input",{type:"date",id:"date","onUpdate:modelValue":e[1]||(e[1]=t=>i.dateInput=t)},null,512),[[n.nr,i.dateInput]])]),(0,a._)("div",Z,[x,(0,a.wy)((0,a._)("textarea",{id:"description","onUpdate:modelValue":e[2]||(e[2]=t=>i.descInput=t)},null,512),[[n.nr,i.descInput]])]),(0,a._)("button",{class:"btn primary",onClick:e[3]||(e[3]=(0,n.iM)(((...t)=>i.submit&&i.submit(...t)),["prevent"]))},"Создать")])}s(7658);var P=s(2262),E={setup(){const t=(0,z.tv)(),e=(0,P.iH)(""),s=(0,P.iH)(null),n=(0,P.iH)(""),a=(0,P.iH)("pending"),i=async()=>{const i=JSON.stringify({title:e.value,data:s.value,desc:n.value,status:a.value});await I.Z.post("https://it-my-freelance-default-rtdb.firebaseio.com/myTasksItems.json",i),t.push("/")};return{titleInput:e,descInput:n,dateInput:s,submit:i}}};const R=(0,_.Z)(E,[["render",N]]);var q=R;const F={key:0,class:"text-white center"},Y={class:"TaskPiec"},B={key:0,class:"text-white"},L={key:1,class:"text-white"};function M(t,e,s,n,i,r){const u=(0,a.up)("TaskItem");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n.tasks.length<1?((0,a.wg)(),(0,a.iD)("h1",F,"Задач пока нет")):(0,a.kq)("",!0),(0,a._)("div",null,[(0,a._)("div",Y,[n.tasks.length>0?((0,a.wg)(),(0,a.iD)("h3",B,"Всего заданий: "+(0,l.zw)(n.TaskPieces),1)):(0,a.kq)("",!0),n.tasks.length>0?((0,a.wg)(),(0,a.iD)("h3",L,"Активных заданий: "+(0,l.zw)(n.TaskActive),1)):(0,a.kq)("",!0)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tasks,(t=>((0,a.wg)(),(0,a.j4)(u,{tasksName:t.title,tasksData:t.data,tasksStatus:t.status,key:t,idStr:t.id},null,8,["tasksName","tasksData","tasksStatus","idStr"])))),128))])],64)}const V=t=>((0,a.dD)("data-v-e18d16cc"),t=t(),(0,a.Cn)(),t),G={class:"card"},$={class:"card-title"},J=V((()=>(0,a._)("button",{class:"btn primary"},"Посмотреть",-1)));function K(t,e,s,n,i,r){const u=(0,a.up)("AppStatus"),o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("h2",$,[(0,a.Uk)((0,l.zw)(s.tasksName)+" ",1),(0,a.Wm)(u,{type:s.tasksStatus},null,8,["type"])]),(0,a._)("p",null,[(0,a._)("small",null," Дата: "+(0,l.zw)(s.tasksData),1)]),(0,a.Wm)(o,{to:"/task/"+n.idStr},{default:(0,a.w5)((()=>[J])),_:1},8,["to"]),(0,a._)("button",{class:"btn danger",onClick:e[0]||(e[0]=(...t)=>n.DeleteTask&&n.DeleteTask(...t))},"Х")])}function Q(t,e,s,n,i,r){return(0,a.wg)(),(0,a.iD)("span",{class:(0,l.C_)(s.type)},(0,l.zw)(r.statusName()),3)}var X={props:["type"],methods:{statusName(){return"active"===this.type?"Активно":"done"===this.type?"Выполнено":"cancelled"===this.type?"Отменено":"pending"===this.type?"В ожидании":void 0}}};const tt=(0,_.Z)(X,[["render",Q],["__scopeId","data-v-3a650198"]]);var et=tt,st={props:["tasksName","tasksData","tasksStatus","idStr"],components:{AppStatus:et},setup(t){const e=(0,P.iH)(t.idStr),s=(0,D.oR)(),n=async()=>{await I.Z["delete"](`https://it-my-freelance-default-rtdb.firebaseio.com/myTasksItems/${e.value}.json`),s.state.tasks=s.state.tasks.filter((t=>t.id!==e.value)),s.state.taskOpen=!s.state.taskOpen};return{DeleteTask:n,idStr:e}}};const nt=(0,_.Z)(st,[["render",K],["__scopeId","data-v-e18d16cc"]]);var at=nt,it={setup(){const t=(0,D.oR)(),e=(0,P.iH)(""),s=(0,P.iH)(t.getters.TaskActive),n=(0,P.iH)(t.getters.TaskPieces),i=((0,P.iH)(t.commit("GetServer")),()=>{e.value=t.state.tasks,n.value=t.getters.TaskPieces,s.value=t.getters.TaskActive});return(0,a.wF)((()=>{setTimeout(i,500)})),(0,a.YP)((()=>t.state.taskOpen),(()=>{setTimeout(i,1e3)})),{tasks:e,TaskPieces:n,TaskActive:s}},components:{TaskItem:at}};const rt=(0,_.Z)(it,[["render",M]]);var lt=rt;const ut={class:"card"},ot=(0,a._)("strong",null,"Статус",-1),ct=(0,a._)("strong",null,"ID Задания",-1),dt=(0,a._)("strong",null,"Дэдлайн",-1),pt=(0,a._)("strong",null,"Описание",-1),kt={class:"TaskButton"};function vt(t,e,s,n,i,r){const u=(0,a.up)("AppStatus");return(0,a.wg)(),(0,a.iD)("div",ut,[(0,a._)("h2",null,(0,l.zw)(n.tasks[n.isOpen()].title),1),(0,a._)("p",null,[ot,(0,a.Uk)(": "),(0,a.Wm)(u,{type:n.tasks[n.isOpen()].status},null,8,["type"])]),(0,a._)("p",null,[ct,(0,a.Uk)(": "+(0,l.zw)(n.tasks[n.isOpen()].id),1)]),(0,a._)("p",null,[dt,(0,a.Uk)(": "+(0,l.zw)(n.tasks[n.isOpen()].data),1)]),(0,a._)("p",null,[pt,(0,a.Uk)(": "+(0,l.zw)(n.tasks[n.isOpen()].desc),1)]),(0,a._)("div",kt,[(0,a._)("button",{class:"btn",onClick:e[0]||(e[0]=t=>(n.Status="active",n.EditTask()))},"Взять в работу"),(0,a._)("button",{class:"btn primary",onClick:e[1]||(e[1]=t=>(n.Status="done",n.EditTask()))},"Завершить"),(0,a._)("button",{class:"btn danger",onClick:e[2]||(e[2]=t=>(n.Status="cancelled",n.EditTask()))},"Отменить")])])}var ft={components:{AppStatus:et},setup(){const t=(0,D.oR)(),e=(0,P.iH)(""),s=(0,z.yj)(),n=(0,P.iH)(""),i=(0,P.iH)(""),r=(0,z.tv)(),l=async()=>{await I.Z.patch(`https://it-my-freelance-default-rtdb.firebaseio.com/myTasksItems/${n.value}.json`,{status:i.value}),r.push("/")},u=()=>{let t=0;for(t=0;t<e.value.length;t++)if(e.value[t].id===n.value)return t};return(0,a.wF)((()=>{e.value=t.state.tasks,n.value=s.params.UrlId})),{tasks:e,isOpen:u,EditTask:l,Status:i}}};const mt=(0,_.Z)(ft,[["render",vt]]);var wt=mt;const ht=(0,z.p7)({history:(0,z.PO)(),routes:[{path:"/",component:lt},{path:"/new",component:q},{path:"/task/:UrlId?",component:wt}],linkActiveClass:"active",linkExactActiveClass:"active"});(0,n.ri)(O).use(S).use(ht).mount("#app")}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],i=t[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(l=!1,i<r&&(r=i));if(l){t.splice(c--,1);var o=a();void 0!==o&&(e=o)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,a,i]}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,r=n[0],l=n[1],u=n[2],o=0;if(r.some((function(e){return 0!==t[e]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(u)var c=u(s)}for(e&&e(n);o<r.length;o++)i=r[o],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(c)},n=self["webpackChunkit_freelance"]=self["webpackChunkit_freelance"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(9595)}));n=s.O(n)})();
//# sourceMappingURL=app.382ce3aa.js.map