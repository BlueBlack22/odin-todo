(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\n#content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 20vw 1fr;\n    grid-template-rows: auto 1fr;\n}\n\n.header {\n    background-color: antiquewhite;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    overflow: hidden;\n}\n\n.header p {\n    font-size: 3rem;\n    padding: 1vw;\n}\n\n.sidebar {\n    background-color: aquamarine;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    padding: 1vw;\n    overflow: hidden;\n}\n\n.sidebar-header {\n    border: 1px solid black;\n    font-size: 1.5rem;\n}\n\n.project-bar {\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0.5rem 0;\n    padding: 0.1rem 0.5rem;\n}\n\n.main-box {\n    background-color: blue;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: flex;\n    justify-content: center;\n    overflow: auto;\n}\n\n.strip-box {\n    padding: 3vw;\n    width: 50rem;\n}\n\n.strip {\n    border: 1px solid black;\n    margin: 0.5rem 0;\n    padding: 0.1rem 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    height: 3rem;\n}\n\n.strip-left,\n.strip-right {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=a[d]||0,u="".concat(d," ").concat(p);a[d]=p+1;var l=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),p=t.n(d),u=t(589),l=t.n(u),f=t(426),m={};function h(e,n){const t=document.createElement("div");return void 0!==e&&t.classList.add(e),void 0!==n&&(t.textContent=n),t}m.styleTagTransform=l(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=(()=>{const e=[],n=["default"];let t=0;const r=n=>{for(const t in e)if(e[t].id==n)return t};return{createTask:(n,r,o,a,i=!1,c="default")=>{const s=((e,n,t,r,o,a,i)=>({title:e,description:n,dueDate:t,priority:r,status:o,project:a,id:i}))(n,r,o,a,i,c,t);t++,e.push(s)},deleteTask:n=>{const t=r(n);e.splice(t,1)},getTask:n=>e[n],getTaskList:()=>e,findIndexByProjectName:n=>{const t=[];for(const r in e)e[r].project==n&&t.push(r);return t},changeTitle:(n,t)=>{const o=r(n);e[o].title=t},changeDescription:(n,t)=>{const o=r(n);e[o].description=t},changeDueDate:(n,t)=>{const o=r(n);e[o].dueDate=t},changePriority:(n,t)=>{const o=r(n);e[o].priority=t},changeStatus:(n,t)=>{const o=r(n);e[o].status=t},changeProject:(n,t)=>{const o=r(n);e[o].project=t},createProject:e=>{if(n.includes(e))return!1;n.push(e)},removeProject:e=>{for(const t in n)n[t]==e&&"default"!=e&&n.splice(t,1)},getProjectName:e=>n[e],getProjectList:()=>n}})(),g=(()=>{const e=e=>{const n=h("project-bar",void 0),t=document.createElement("button");return n.appendChild(h("project-bar-name",e)),n.appendChild(t),n};return{displayProjects:()=>{const n=v.getProjectList();for(const t in n)document.querySelector(".sidebar").appendChild(e(n[t]))}}})(),y=(()=>{const e=(e,n,t)=>{const r=h("strip",void 0),o=h("strip-left",void 0),a=h("strip-right",void 0),i=h("strip-title",e),c=h("strip-desc",n),s=h("strip-date",t),d=document.createElement("input");d.setAttribute("type","checkbox");const p=document.createElement("button"),u=document.createElement("button");return o.appendChild(d),o.appendChild(i),o.appendChild(c),a.appendChild(s),a.appendChild(p),a.appendChild(u),r.appendChild(o),r.appendChild(a),r};return{displayTask:n=>{const t=v.findIndexByProjectName(n);for(const n in t){const r=v.getTask(t[n]);document.querySelector(".strip-box").appendChild(e(r.title,r.description,r.dueDate))}}}})();!function(){const e=document.getElementById("content");e.appendChild(function(){const e=h("header");return e.appendChild(function(e,n){const t=document.createElement("p");return t.textContent=n,t}(0,"ToDo")),e}()),e.appendChild(function(){const e=h("sidebar");return e.appendChild(h("sidebar-header","Your projects:")),e}()),e.appendChild(function(){const e=h("main-box"),n=h("strip-box");return e.appendChild(n),e}())}(),v.createTask("Go to the gym","leg day :(","01.10.2023","low"),v.createTask("Go to sleep1","at least 8h","10.10.2023","medium"),v.createTask("Go to sleep2","at least 8h","10.10.2023","medium"),v.createTask("Go to sleep3","at least 8h","10.10.2023","medium"),g.displayProjects(),y.displayTask("default")})()})();