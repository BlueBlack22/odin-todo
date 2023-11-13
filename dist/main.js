(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>r});var d=n(81),a=n.n(d),o=n(645),i=n.n(o)()(a());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\n#content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 20vw 1fr;\n    grid-template-rows: auto 1fr;\n}\n\n.header {\n    background-color: antiquewhite;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    overflow: hidden;\n}\n\n.header p {\n    font-size: 3rem;\n    padding: 1vw;\n}\n\n.sidebar {\n    background-color: aquamarine;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    padding: 1vw;\n    overflow: hidden;\n}\n\n.sidebar-header,\n.project-add,\n.project-bar {\n    border: 1px solid black;\n    font-size: 1.5rem;\n    margin: 0.5rem 0;\n    padding: 0.1rem 0.5rem;\n}\n\n.project-bar {\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.main-box {\n    background-color: lightblue;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: 5vh 1fr;\n    justify-content: center;\n    overflow: auto;\n}\n\n.main-header {\n    padding: 3vw;\n    width: 50rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-name {\n    font-size: 3rem;\n}\n\n.strip-box {\n    padding: 3vw;\n    width: 50rem;\n}\n\n.strip {\n    width: 100%;\n    align-items: center;\n    border: 1px solid black;\n    margin-top: 0.5rem;\n    padding: 0 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    height: 3rem;\n}\n\n.strip-left,\n.strip-right {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.strip-button {\n    display: flex;\n    align-items: center;\n}\n\n.desc-active, .strip:hover {\n    background-color: #ccc;\n}\n\n.desc-box {\n    padding: 0 0.5rem;\n    display: none;\n    overflow: hidden;\n    background-color: #f1f1f1;\n}\n\n#new-modal,\n#edit-modal {\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: 20vh auto;\n    padding: 1vh;\n    flex-direction: column;\n    gap: 1vh;\n}\n\n.modal-header-box {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.modal-header-text {\n    font-size: 1.5rem;\n}\n\n.modal-title>input,\n.modal-desc>input {\n    padding: 12px 20px;\n}\n\n::backdrop {\n    backdrop-filter: blur(5px);\n}",""]);const r=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",d=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),d&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),d&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,d,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(d)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);d&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,d=0;d<t.length;d++)if(t[d].identifier===e){n=d;break}return n}function d(e,d){for(var o={},i=[],r=0;r<e.length;r++){var c=e[r],l=d.base?c[0]+d.base:c[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,d);d.byIndex=r,t.splice(r,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=d(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var r=n(o[i]);t[r].references--}for(var c=d(e,a),l=0;l<o.length;l++){var s=n(o[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var d=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var d="";n.supports&&(d+="@supports (".concat(n.supports,") {")),n.media&&(d+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(d+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),d+=n.css,a&&(d+="}"),n.media&&(d+="}"),n.supports&&(d+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(d+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(d,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(d){var a=t[d];if(void 0!==a)return a.exports;var o=t[d]={id:d,exports:{}};return e[d](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),d=n(795),a=n.n(d),o=n(569),i=n.n(o),r=n(565),c=n.n(r),l=n(216),s=n.n(l),p=n(589),u=n.n(p),m=n(426),h={};function f(e,t){const n=document.createElement("div");return void 0!==e&&n.classList.add(e),void 0!==t&&(n.textContent=t),n}h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const b=(()=>{const e=[],t=["default"];let n=0;const d=t=>{for(const n in e)if(e[n].id==t)return n},a=t=>{const n=[];for(const d in e)e[d].project==t&&n.push(d);return n},o=t=>{e.splice(t,1)};return{createTask:(t,d,a,o,i=!1,r="default")=>{const c=((e,t,n,d,a,o,i)=>({title:e,description:t,dueDate:n,priority:d,status:a,project:o,id:i}))(t,d,a,o,i,r,n);n++,e.push(c)},deleteTask:t=>{const n=d(t);e.splice(n,1)},deleteTaskByIndex:o,getTask:t=>e[t],getTaskList:()=>e,findIndexByID:d,findIndexByProjectName:a,editTask:(t,n,a,o,i,r)=>{const c=d(t);e[c].title=n,e[c].description=a,e[c].dueDate=o,e[c].priority=i,e[c].project=r},createProject:e=>{if(t.includes(e))return!1;t.push(e)},deleteProject:e=>{if("default"===e)return!1;for(const n in t)t[n]===e&&t.splice(n,1);(e=>{const t=a(e);for(const e in t)o(t[e])})(e)},getProjectName:e=>t[e],getProjectList:()=>t}})(),v={createEditTaskModal:e=>{let t={};t=""!==e?b.getTask(b.findIndexByID(e)):{title:"",description:"",dueDate:"",priority:""};const n=document.createElement("dialog");n.setAttribute("id","edit-modal");const d=f("modal-header-box",void 0),a=f("modal-header-text","Edit task details"),o=document.createElement("button");o.classList.add("modal-close-btn"),o.innerText="x",o.addEventListener("click",(()=>{document.getElementById("edit-modal").close()})),n.appendChild(o),d.appendChild(a),d.appendChild(o);const i=document.createElement("form"),r=f("modal-title",void 0),c=document.createElement("label");c.innerText="Title:",c.htmlFor="editTitle";const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("id","editTitle"),l.value=t.title,l.required=!0,l.autofocus=!0,r.appendChild(c),r.appendChild(document.createElement("br")),r.appendChild(l);const s=f("modal-desc",void 0),p=document.createElement("label");p.htmlFor="editDesc",p.innerText="Description:";const u=document.createElement("input");u.value=t.description,u.setAttribute("type","text"),u.setAttribute("id","editDesc"),s.appendChild(p),s.appendChild(document.createElement("br")),s.appendChild(u);const m=f("modal-date",void 0),h=document.createElement("label");h.htmlFor="editDueDate",h.innerText="Due date:";const v=document.createElement("input");v.setAttribute("type","date"),v.setAttribute("id","editDueDate"),v.value=t.dueDate,v.required=!0,m.appendChild(h),m.appendChild(document.createElement("br")),m.appendChild(v);const g=f("modal-project",void 0),C=document.createElement("label");C.innerText="Assign to project:";const E=document.createElement("select");E.setAttribute("id","projectSelect"),E.required=!0;const x=document.createElement("option");x.value="default",x.text="Default Project",E.appendChild(x);const T=b.getProjectList();for(let e=1;e<T.length;e++){const t=document.createElement("option");t.text=T[e],E.appendChild(t)}E.value=t.project,C.appendChild(E),g.appendChild(C);const w=f("modal-priority",void 0),k=document.createElement("label");k.innerText="Select task's priority:";const j=document.createElement("select");j.setAttribute("id","prioritySelect"),j.required=!0;const L=document.createElement("option");L.text="Low",j.appendChild(L);const D=document.createElement("option");D.text="Medium",j.appendChild(D);const A=document.createElement("option");A.text="High",j.appendChild(A),"low"===t.priority?L.selected=!0:"medium"===t.priority?D.selected=!0:"high"===t.priority&&(A.selected=!0),k.appendChild(j),w.appendChild(k);const S=document.createElement("button");return S.setAttribute("id","createBtn"),S.type="submit",S.innerText="Edit Task",i.addEventListener("submit",(t=>{((e,t,n,d,a,o)=>{b.editTask(e,t,n,d,o,a),y.displayStripPage(a)})(e,editTitle.value,editDesc.value,editDueDate.value,E.value,j.value.toLowerCase()),document.getElementById("edit-modal").close(),t.preventDefault()})),i.appendChild(r),i.appendChild(s),i.appendChild(m),i.appendChild(g),i.appendChild(w),i.appendChild(S),n.appendChild(d),n.appendChild(i),n}},y=(()=>{const e=e=>{document.querySelector(".strip-box").innerText="";const d=b.findIndexByProjectName(e);if(d.length>0)for(const e in d){const a=b.getTask(d[e]);document.querySelector(".strip-box").appendChild(t(a.title,a.dueDate,a.id)),document.querySelector(".strip-box").appendChild(n(a.description))}else document.querySelector(".strip-box").appendChild(f("empty-strip","There are no tasks in this project yet."))},t=(e,t,n)=>{const d=document.createElement("button");d.classList.add("strip"),d.setAttribute("data-id",n);const a=f("strip-left",void 0),i=f("strip-right",void 0),r=f("strip-title",e),c=f("strip-date",t),l=document.createElement("input");l.setAttribute("type","checkbox");const s=document.createElement("btn"),p=document.createElement("i");p.classList.add("fa-solid"),p.classList.add("fa-pen-to-square"),s.appendChild(p),s.classList.add("strip-button"),s.addEventListener("click",(e=>{document.getElementById("edit-modal").remove(),document.getElementById("content").appendChild(v.createEditTaskModal(n)),document.getElementById("edit-modal").showModal()}));const u=document.createElement("btn"),m=document.createElement("i");return m.classList.add("fa-solid"),m.classList.add("fa-trash"),u.appendChild(m),u.classList.add("strip-button"),u.addEventListener("click",(e=>{b.deleteTask(d.dataset.id),o("default")})),a.appendChild(l),a.appendChild(r),i.appendChild(c),i.appendChild(s),i.appendChild(u),d.appendChild(a),d.appendChild(i),d.addEventListener("click",(()=>{console.log("wtf"),d.classList.toggle("desc-active");let e=d.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"})),d},n=e=>{const t=f("desc-box",void 0),n=document.createElement("p");return n.innerText=e,t.appendChild(n),t},d=e=>{document.querySelector(".main-header").textContent="";const t=f("project-name",e);document.querySelector(".main-header").appendChild(t)},a=()=>{const e=document.createElement("button");e.classList.add("new-task-btn"),e.innerText="Add new task",e.addEventListener("click",(()=>{document.getElementById("new-modal").showModal()})),document.querySelector(".main-header").appendChild(e)},o=t=>{e(t),d(t),a()};return{displayTask:e,displayProjectName:d,displayAddTask:a,displayStripPage:o}})(),g=(()=>{const e=e=>{const t=f("project-bar",void 0);if(t.appendChild(f("project-bar-name",e)),"default"!==e){const e=document.createElement("btn"),n=document.createElement("i");n.classList.add("fa-solid"),n.classList.add("fa-trash"),e.appendChild(n),e.classList.add("project-button"),e.addEventListener("click",(e=>console.log("remove"))),t.appendChild(e)}return t.addEventListener("click",(t=>{y.displayStripPage(e)})),t};return{displayProjects:()=>{const t=b.getProjectList();for(const n in t)document.querySelector(".project-box").appendChild(e(t[n]))},createProject:()=>{const e=document.createElement("button");e.classList.add="project-add",e.innerText="Add new project",e.addEventListener("click",(e=>{console.log("new project")})),document.querySelector(".sidebar").appendChild(e)}}})(),C={createNewTaskModal:()=>{const e=document.createElement("dialog");e.setAttribute("id","new-modal");const t=f("modal-header-box",void 0),n=f("modal-header-text","Create new task"),d=document.createElement("button");d.classList.add("modal-close-btn"),d.innerText="x",d.addEventListener("click",(()=>{document.getElementById("new-modal").close()})),e.appendChild(d),t.appendChild(n),t.appendChild(d);const a=document.createElement("form"),o=f("modal-title",void 0),i=document.createElement("label");i.innerText="Title:",i.htmlFor="newTitle";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","newTitle"),r.required=!0,r.autofocus=!0,o.appendChild(i),o.appendChild(document.createElement("br")),o.appendChild(r);const c=f("modal-desc",void 0),l=document.createElement("label");l.htmlFor="newDesc",l.innerText="Description:";const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","newDesc"),c.appendChild(l),c.appendChild(document.createElement("br")),c.appendChild(s);const p=f("modal-date",void 0),u=document.createElement("label");u.htmlFor="newDueDate",u.innerText="Due date:";const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("id","newDueDate"),m.required=!0,p.appendChild(u),p.appendChild(document.createElement("br")),p.appendChild(m);const h=f("modal-project",void 0),v=document.createElement("label");v.innerText="Assign to project:";const g=document.createElement("select");g.setAttribute("id","projectSelect"),g.required=!0;const C=document.createElement("option");C.value="default",C.text="Default Project",g.appendChild(C);const E=b.getProjectList();for(let e=1;e<E.length;e++){const t=document.createElement("option");t.text=E[e],g.appendChild(t)}v.appendChild(g),h.appendChild(v);const x=f("modal-priority",void 0),T=document.createElement("label");T.innerText="Select task's priority:";const w=document.createElement("select");w.setAttribute("id","prioritySelect"),w.required=!0;const k=document.createElement("option");k.text="Low",w.appendChild(k);const j=document.createElement("option");j.text="Medium",w.appendChild(j);const L=document.createElement("option");L.text="High",w.appendChild(L),T.appendChild(w),x.appendChild(T);const D=document.createElement("button");return D.setAttribute("id","createBtn"),D.type="submit",D.innerText="Create Task",a.addEventListener("submit",(e=>{var t,n,d,a,o;t=newTitle.value,n=newDesc.value,d=newDueDate.value,a=g.value,o=w.value,b.createTask(t,n,d,o,!1,a),y.displayStripPage(a),document.getElementById("new-modal").close(),e.preventDefault()})),a.appendChild(o),a.appendChild(c),a.appendChild(p),a.appendChild(h),a.appendChild(x),a.appendChild(D),e.appendChild(t),e.appendChild(a),e}};!function(){const e=document.getElementById("content");e.appendChild(function(){const e=f("header");return e.appendChild(function(e,t){const n=document.createElement("p");return n.textContent=t,n}(0,"ToDo")),e}()),e.appendChild(function(){const e=f("sidebar"),t=f("project-box",void 0);return e.appendChild(f("sidebar-header","Your projects:")),e.appendChild(t),e}()),e.appendChild(function(){const e=f("main-box"),t=f("main-header"),n=f("strip-box");return e.appendChild(t),e.appendChild(n),e}())}(),g.createProject(),b.createTask("Go to the gym","leg day :(","2023-11-11","low"),b.createTask("Go to sleep1","at least 8h","2023-11-12","medium"),b.createTask("Go to sleep2","at least 8h","2023-11-13","medium"),b.createTask("Go to sleep3","at least 8h","2023-11-14","medium"),b.createProject("test"),g.displayProjects(),y.displayProjectName("default"),y.displayTask("default"),y.displayAddTask(),document.getElementById("content").appendChild(C.createNewTaskModal()),document.getElementById("content").appendChild(v.createEditTaskModal(""))})()})();