(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),d=n.n(o)()(a());d.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\n#content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 20vw 1fr;\n    grid-template-rows: auto 1fr;\n}\n\n.header {\n    background-color: antiquewhite;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    overflow: hidden;\n}\n\n.header p {\n    font-size: 3rem;\n    padding: 1vw;\n}\n\n.sidebar {\n    background-color: aquamarine;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    padding: 1vw;\n    overflow: hidden;\n}\n\n.sidebar-header,\n.project-add,\n.project-bar {\n    border: 1px solid black;\n    font-size: 1.5rem;\n    margin: 0.5rem 0;\n    padding: 0.1rem 0.5rem;\n}\n\n.project-bar {\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.main-box {\n    background-color: lightblue;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: 5vh 1fr;\n    justify-content: center;\n    overflow: auto;\n}\n\n.main-header {\n    padding: 3vw;\n    width: 50rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-name {\n    font-size: 3rem;\n}\n\n.strip-box {\n    padding: 3vw;\n    width: 50rem;\n}\n\n.strip {\n    border: 1px solid black;\n    margin: 0.5rem 0;\n    padding: 0.1rem 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    height: 3rem;\n}\n\n.strip-left,\n.strip-right {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.strip-button {\n    display: flex;\n    align-items: center;\n}\n\n#new-modal {\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: 20vh auto;\n    padding: 1vh;\n    flex-direction: column;\n    gap: 1vh;\n}\n\n.modal-header-box {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.modal-header-text {\n    font-size: 1.5rem;\n}\n\n.modal-title>input,\n.modal-desc>input {\n    padding: 12px 20px;\n}\n\n::backdrop {\n    backdrop-filter: blur(5px);\n}",""]);const i=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&d[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},d=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var d=0;d<o.length;d++){var i=n(o[d]);t[i].references--}for(var c=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),d=n.n(o),i=n(565),c=n.n(i),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),h={};function f(e,t){const n=document.createElement("div");return void 0!==e&&n.classList.add(e),void 0!==t&&(n.textContent=t),n}h.styleTagTransform=u(),h.setAttributes=c(),h.insert=d().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const v=(()=>{const e=[],t=["default"];let n=0;const r=t=>{for(const n in e)if(e[n].id==t)return n},a=t=>{const n=[];for(const r in e)e[r].project==t&&n.push(r);return n},o=t=>{e.splice(t,1)};return{createTask:(t,r,a,o,d=!1,i="default")=>{const c=((e,t,n,r,a,o,d)=>({title:e,description:t,dueDate:n,priority:r,status:a,project:o,id:d}))(t,r,a,o,d,i,n);n++,e.push(c)},deleteTask:t=>{const n=r(t);e.splice(n,1)},deleteTaskByIndex:o,getTask:t=>e[t],getTaskList:()=>e,findIndexByProjectName:a,changeTitle:(t,n)=>{const a=r(t);e[a].title=n},changeDescription:(t,n)=>{const a=r(t);e[a].description=n},changeDueDate:(t,n)=>{const a=r(t);e[a].dueDate=n},changePriority:(t,n)=>{const a=r(t);e[a].priority=n},changeStatus:(t,n)=>{const a=r(t);e[a].status=n},changeProject:(t,n)=>{const a=r(t);e[a].project=n},createProject:e=>{if(t.includes(e))return!1;t.push(e)},deleteProject:e=>{if("default"===e)return!1;for(const n in t)t[n]===e&&t.splice(n,1);(e=>{const t=a(e);for(const e in t)o(t[e])})(e)},getProjectName:e=>t[e],getProjectList:()=>t}})(),b=(()=>{const e=e=>{const t=f("project-bar",void 0),n=document.createElement("btn"),r=document.createElement("i");return r.classList.add("fa-solid"),r.classList.add("fa-trash"),n.appendChild(r),n.classList.add("project-button"),n.addEventListener("click",(e=>console.log("remove"))),t.appendChild(f("project-bar-name",e)),t.appendChild(n),t};return{displayProjects:()=>{const t=v.getProjectList();for(const n in t)document.querySelector(".project-box").appendChild(e(t[n]))},createProject:()=>{const e=document.createElement("button");e.classList.add="project-add",e.innerText="Add new project",addEventListener("click",(e=>{console.log("new project")})),document.querySelector(".sidebar").appendChild(e)}}})(),g=(()=>{const e=e=>{document.querySelector(".strip-box").innerText="";const n=v.findIndexByProjectName(e);for(const e in n){const r=v.getTask(n[e]);document.querySelector(".strip-box").appendChild(t(r.title,r.description,r.dueDate,r.id))}},t=(e,t,n,r)=>{const o=f("strip",void 0);o.setAttribute("data-id",r);const d=f("strip-left",void 0),i=f("strip-right",void 0),c=f("strip-title",e),s=f("strip-desc",t),l=f("strip-date",n),p=document.createElement("input");p.setAttribute("type","checkbox");const u=document.createElement("btn"),m=document.createElement("i");m.classList.add("fa-solid"),m.classList.add("fa-pen-to-square"),u.appendChild(m),u.classList.add("strip-button"),u.addEventListener("click",(e=>console.log("edit")));const h=document.createElement("btn"),b=document.createElement("i");return b.classList.add("fa-solid"),b.classList.add("fa-trash"),h.appendChild(b),h.classList.add("strip-button"),h.addEventListener("click",(e=>{v.deleteTask(o.dataset.id),a("default")})),d.appendChild(p),d.appendChild(c),d.appendChild(s),i.appendChild(l),i.appendChild(u),i.appendChild(h),o.appendChild(d),o.appendChild(i),o},n=e=>{document.querySelector(".main-header").textContent="";const t=f("project-name",e);document.querySelector(".main-header").appendChild(t)},r=()=>{const e=document.createElement("button");e.classList.add("new-task-btn"),e.innerText="Add new task",e.addEventListener("click",(()=>{document.getElementById("new-modal").showModal()})),document.querySelector(".main-header").appendChild(e)},a=t=>{e(t),n(t),r()};return{displayTask:e,displayProjectName:n,displayAddTask:r,displayStripPage:a}})(),y={createNewTaskModal:()=>{const e=document.createElement("dialog");e.setAttribute("id","new-modal");const t=f("modal-header-box",void 0),n=f("modal-header-text","Create new task"),r=document.createElement("button");r.classList.add("modal-close-btn"),r.innerText="x",r.addEventListener("click",(()=>{document.getElementById("new-modal").close()})),e.appendChild(r),t.appendChild(n),t.appendChild(r);const a=document.createElement("form"),o=f("modal-title",void 0),d=document.createElement("label");d.innerText="Title:",d.htmlFor="newTitle";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","newTitle"),i.required=!0,i.autofocus=!0,o.appendChild(d),o.appendChild(document.createElement("br")),o.appendChild(i);const c=f("modal-desc",void 0),s=document.createElement("label");s.htmlFor="newDesc",s.innerText="Description:";const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("id","newDesc"),c.appendChild(s),c.appendChild(document.createElement("br")),c.appendChild(l);const p=f("modal-date",void 0),u=document.createElement("label");u.htmlFor="newDueDate",u.innerText="Due date:";const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("id","newDueDate"),m.required=!0,p.appendChild(u),p.appendChild(document.createElement("br")),p.appendChild(m);const h=f("modal-project",void 0),b=document.createElement("label");b.innerText="Assign to project:";const y=document.createElement("select");y.setAttribute("id","projectSelect"),y.required=!0;const C=document.createElement("option");C.value="default",C.text="Default Project",y.appendChild(C);const x=v.getProjectList();for(let e=1;e<x.length;e++){const t=document.createElement("option");t.text=x[e],y.appendChild(t)}b.appendChild(y),h.appendChild(b);const w=f("modal-priority",void 0),E=document.createElement("label");E.innerText="Select task's priority:";const j=document.createElement("select");j.setAttribute("id","prioritySelect"),j.required=!0;const T=document.createElement("option");T.text="Low",j.appendChild(T);const k=document.createElement("option");k.text="Medium",j.appendChild(k);const L=document.createElement("option");L.text="High",j.appendChild(L),E.appendChild(j),w.appendChild(E);const P=document.createElement("button");return P.setAttribute("id","createBtn"),P.type="submit",P.innerText="Create Task",a.addEventListener("submit",(e=>{var t,n,r,a,o;t=newTitle.value,n=newDesc.value,r=newDueDate.value,a=y.value,o=j.value,v.createTask(t,n,r,o,!1,a),g.displayStripPage(a),document.getElementById("new-modal").close(),e.preventDefault()})),a.appendChild(o),a.appendChild(c),a.appendChild(p),a.appendChild(h),a.appendChild(w),a.appendChild(P),e.appendChild(t),e.appendChild(a),e}};!function(){const e=document.getElementById("content");e.appendChild(function(){const e=f("header");return e.appendChild(function(e,t){const n=document.createElement("p");return n.textContent=t,n}(0,"ToDo")),e}()),e.appendChild(function(){const e=f("sidebar"),t=f("project-box",void 0);return e.appendChild(f("sidebar-header","Your projects:")),e.appendChild(t),e}()),e.appendChild(function(){const e=f("main-box"),t=f("main-header"),n=f("strip-box");return e.appendChild(t),e.appendChild(n),e}())}(),b.createProject(),v.createTask("Go to the gym","leg day :(","01.10.2023","low"),v.createTask("Go to sleep1","at least 8h","10.10.2023","medium"),v.createTask("Go to sleep2","at least 8h","10.10.2023","medium"),v.createTask("Go to sleep3","at least 8h","10.10.2023","medium"),v.createProject("test"),console.log(v.getProjectList()),b.displayProjects(),g.displayProjectName("default"),g.displayTask("default"),g.displayAddTask(),document.getElementById("content").appendChild(y.createNewTaskModal())})()})();