(()=>{"use strict";class t{constructor(t){this.name=t[0],this.description=t[1],this.dueDate=t[2],this.priority=t[3]}}let r=function(){let r=prompt("Name:"),e=prompt("Description:"),i=prompt("Due Date"),o=prompt("Priority");return new t([r,e,i,o])}();console.log(r)})();