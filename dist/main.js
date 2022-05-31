(()=>{"use strict";function e(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=n((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t[0],this.description=t[1],this.dueDate=t[2],this.priority=t[3],this.complete=!1}));function a(t,r){var n=document.createElement("div");n.className="task",document.querySelector("#content").appendChild(n);var o,a=e(function(e){var t=document.createElement("div"),r=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");return t.innerText="Name: ".concat(e.name),r.innerText="Description: ".concat(e.description),n.innerText="Due Date: ".concat(e.dueDate),o.innerText="Priority: ".concat(e.priority),[t,r,n,o]}(r));try{for(a.s();!(o=a.n()).done;){var i=o.value;n.appendChild(i)}}catch(e){a.e(e)}finally{a.f()}n.appendChild(function(e){var t=document.createElement("img");return!1===e.complete?t.src="images/close-circle.svg":t.src="images/check-circle.svg",t.classList.add("checkMark"),t.addEventListener("click",(function(){!0===e.complete?(t.src="images/close-circle.svg",e.complete=!1):(t.src="images/check-circle.svg",e.complete=!0)})),t}(r)),n.appendChild(function(t,r){var n=document.createElement("img");return n.src="images/delete.svg",n.addEventListener("click",(function(){n.parentNode.parentNode.removeChild(n.parentNode),function(t,r){var n,o=0,a=e(t.taskList);try{for(a.s();!(n=a.n()).done;)n.value===r&&t.taskList.splice(o,1),o++}catch(e){a.e(e)}finally{a.f()}h(t)}(t,r)})),n}(t,r))}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e){var t,r=document.createElement("form");r.className="form",document.querySelector("#formLocation").appendChild(r),r.appendChild(((t=document.createElement("img")).src="images/arrow-left-circle.svg",t.addEventListener("click",u),t));var n,a=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(function(){for(var e=[],t=0,r=["name","description","dueDate","priority"];t<r.length;t++){var n=r[t],o=document.createElement("input");o.setAttribute("id",n),"dueDate"===n?(o.setAttribute("type","date"),o.setAttribute("required","")):"priority"===n?(o.setAttribute("type","number"),o.setAttribute("min","1"),o.setAttribute("max","4"),o.setAttribute("required","")):"name"===n?(o.setAttribute("type","text"),o.setAttribute("minlength","1"),o.setAttribute("maxlength","15"),o.setAttribute("required","")):(o.setAttribute("type","text"),o.setAttribute("maxlength","30"),o.setAttribute("required",""));var a=document.createElement("label");a.setAttribute("for",n),a.innerText="".concat(n.charAt(0).toUpperCase()+n.slice(1),":");var i=document.createElement("div");i.appendChild(a),i.appendChild(o),e.push(i)}return e}());try{for(a.s();!(n=a.n()).done;){var c=n.value;r.appendChild(c)}}catch(e){a.e(e)}finally{a.f()}r.appendChild(function(e){var t=document.createElement("button");return t.innerText="Enter",t.addEventListener("click",(function(){if(!0===function(){for(var e=0,t=[document.querySelector("#name"),document.querySelector("#description"),document.querySelector("#dueDate"),document.querySelector("#priority")];e<t.length;e++)if(!0!==t[e].checkValidity())return!1;return!0}()){var t=(r=document.querySelector("#name").value,n=document.querySelector("#description").value,a=document.querySelector("#dueDate").value,i=document.querySelector("#priority").value,new o([r,n,a,i]));e.addTask(t),h(e),u()}var r,n,a,i})),t}(e))}function u(){document.querySelector("#formLocation").innerHTML=""}function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.taskList=[]}var t,r;return t=e,(r=[{key:"addTask",value:function(e){this.taskList.push(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),f=localStorage.getItem("localStorageProjects");console.log(JSON.parse(f));var p=[];function v(e){var t=new m(e);return p.push(t),console.log(p),localStorage.setItem("localStorageProjects",JSON.stringify(p)),console.log(JSON.parse(localStorage.getItem("localStorageProjects"))),t}function y(){if(""===document.querySelector("#projectDisplay").innerHTML){var e=document.createElement("div");e.className="projectDisplay",document.querySelector("#projectDisplay").appendChild(e);var t,r=l(p);try{var n=function(){var r=t.value,n=document.createElement("div");n.innerText=r.name,n.addEventListener("click",(function(){!function(e){var t,r=l(p);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.name===e.name){document.querySelector("#content").innerHTML="";var o=document.createElement("button");return o.innerText=n.name,o.addEventListener("click",y),document.querySelector("#header").innerHTML="",document.querySelector("#header").appendChild(o),void h(n)}}}catch(e){r.e(e)}finally{r.f()}alert("Error, no such project name!")}(r)}));var o=document.createElement("img");o.src="images/delete.svg",o.addEventListener("click",(function(){!function(e){var t,r=0,n=l(p);try{for(n.s();!(t=n.n()).done;)t.value===e&&p.splice(r,1),r++}catch(e){n.e(e)}finally{n.f()}localStorage.setItem("localStorageProjects",JSON.stringify(p)),y()}(r)}));var a=document.createElement("div");a.appendChild(o),e.appendChild(a),a.appendChild(n)};for(r.s();!(t=r.n()).done;)n()}catch(e){r.e(e)}finally{r.f()}}else document.querySelector("#projectDisplay").innerHTML=""}function h(e){localStorage.setItem("localStorageProjects",JSON.stringify(p)),function(e){var t=document.createElement("button");t.addEventListener("click",y),t.innerText=e.name,document.querySelector("#header").innerHTML="",document.querySelector("#header").appendChild(t),function(){var e=document.createElement("button");e.setAttribute("id","#addProject"),e.innerText="New Project",document.querySelector("#header").appendChild(e),e.addEventListener("click",(function(){document.querySelector("#formLocation").innerHTML="";var e=v(prompt("What do you want to name the project?"));document.querySelector("#projectDisplay").innerHTML="",h(e)}));var t=document.createElement("img");t.src="images/plus-circle.svg",t.setAttribute("width","30px"),t.setAttribute("height","auto"),e.appendChild(t)}(),function(e){var t=document.createElement("button");t.innerText="Add Task",t.setAttribute("id","addTask"),document.querySelector("#header").appendChild(t),document.querySelector("#addTask").addEventListener("click",(function(){c(e)}));var r=document.createElement("img");r.src="images/plus-circle.svg",r.setAttribute("width","30px"),r.setAttribute("height","auto"),t.appendChild(r)}(e);var r=document.createElement("img");r.src="images/dropdown.svg",r.setAttribute("width","30px"),r.setAttribute("height","auto"),t.appendChild(r)}(e),function(e){document.querySelector("#content").innerHTML="";var t,r=l(e.taskList);try{for(r.s();!(t=r.n()).done;)a(e,t.value)}catch(e){r.e(e)}finally{r.f()}}(e)}null===JSON.parse(f)?h(v("Project 1")):(function(e){for(var t in e){var r,n=new m(e[t].name),o=l(e[t].taskList);try{for(o.s();!(r=o.n()).done;){var a=r.value;n.addTask(a)}}catch(e){o.e(e)}finally{o.f()}p.push(n)}}(JSON.parse(f)),h(p[0]))})();