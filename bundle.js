/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMupdate": () => (/* binding */ DOMupdate)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */


const DOMupdate = (() => {
  const TitleDisplay = (title) => {
    const TITLE = document.querySelector(".main .title");
    TITLE.textContent = title;
  };

  const clearMain = () =>{
    const taskList = document.querySelector(".taskList");
    taskList.innerHTML = "";
  }

  const clearSidebar = () =>{
    const projectList = document.querySelector(".projectlist");
    projectList.innerHTML = "";
  }

  const createTaskDisplay = (t) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const name = document.createElement("div");
    name.textContent = t.title;
    name.classList.add("name");

    const due = document.createElement("div");
    due.textContent = t.dueDate;
    due.classList.add("due");

    const projectName = document.createElement("div");
    projectName.textContent = t.projectTitle;
    projectName.classList.add("due");

    const priority = document.createElement("div");
    if (t.priority === 0) {
      priority.style.backgroundColor = "green";
    } else if (t.priority === 1) {
      priority.style.backgroundColor = "red";
    }
    priority.classList.add("priority");

    const status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    status.checked = t.status;
    status.classList.add("name");

    taskElement.appendChild(status);
    taskElement.appendChild(name);
    taskElement.appendChild(projectName);
    taskElement.appendChild(due);
    taskElement.appendChild(priority);

    return taskElement;
  };

  const addToTaskList = (taskElement) => {
    const taskList = document.querySelector(".taskList");
    taskList.appendChild(taskElement);
  };

  const createProjectDisplay = (project)=>{
    const name = document.createElement("div");
    name.textContent = project.projectTitle;
    name.classList.add("name");
    return name;
  }

  const addToProjectList = (projectElement) => {
    const projectList = document.querySelector(".projectlist");
    projectList.appendChild(projectElement);
  };

  const taskForm = (currentProject) =>{
    const formE = document.querySelector(".form");
    formE.innerHTML = `<form>
    <label for="title">Title:</label>
    <input type="text" id="title" name="title"><br><br>

    <label for="dueDate">Due Date:</label>
    <input type="date" id="dueDate" name="dueDate"><br><br>

    <label for="priority">Priority:</label>
    <select id="priority" name="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select><br><br>

    <input type="submit" value="Submit">
  </form>`

  function handleSubmit(event) {
    const {projectTitle} = currentProject
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const dueDate = document.querySelector("#dueDate").value;
    const priority = document.querySelector("#priority").value;
    console.log(`Title: ${title}, Due Date: ${dueDate}, Priority: ${priority}, ${projectTitle}`);
    formE.innerHTML = ""
     const t = {title, dueDate, priority, projectTitle}
     ;(0,_factories__WEBPACK_IMPORTED_MODULE_0__.updateTaskData)(t, currentProject);
    }
   
  const form = document.querySelector("form");
   form.addEventListener("submit", handleSubmit);

  }

  const projectForm = () =>{
    const formE = document.querySelector(".form");
    formE.innerHTML = `<form>
    <label for="title">Title:</label>
    <input type="text" id="title" name="title"><br><br>

    <label for="description">Description:</label>
    <input type="text" id="description" name="description"><br><br>

    <input type="submit" value="Submit">
  </form>`

  function handleSubmit(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    formE.innerHTML = ""
     const p = {title, description}
     ;(0,_factories__WEBPACK_IMPORTED_MODULE_0__.updateProjectData)(p);
    }
   
  const form = document.querySelector("form");
   form.addEventListener("submit", handleSubmit);

  }

  return {
    TitleDisplay,
    createTaskDisplay,
    addToTaskList,
    createProjectDisplay,
    addToProjectList,
    clearMain,
    taskForm,
    projectForm,
    clearSidebar
  };
})();





/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "updateProjectData": () => (/* binding */ updateProjectData),
/* harmony export */   "updateTaskData": () => (/* binding */ updateTaskData)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* eslint-disable import/no-cycle */



const task = (title, dueDate, priority, projectTitle) => {
  const status = false;
  return {
    title,
    dueDate,
    priority,
    projectTitle,
    status,
  };
};

const project = (title, description) => {
  const taskList = [];
  let projectTitle = title;
  let projectDescription = description;

  const changeTitle = (newTitle) => {
    projectTitle = newTitle;
  };

  const changeDescription = (newDescription) => {
    projectDescription = newDescription;
  };

  const addTask = (t) => {
    taskList.push(t);
  };

  const removeTask = (t) => {
    taskList.splice(taskList.indexOf(t), 1);
  };

  return {
    projectTitle,
    projectDescription,
    taskList,
    changeTitle,
    changeDescription,
    addTask,
    removeTask,
  };
};

const projectList = () => {
  const projects = [];

  const addProject = (p) => {
    projects.push(p);
  };

  const removeProject = (p) => {
    projects.splice(projects.indexOf(p), 1);
  };
  return {projects, addProject, removeProject };
};


const updateTaskData = (t, currentProject) =>{

  ___WEBPACK_IMPORTED_MODULE_0__["default"].projects[___WEBPACK_IMPORTED_MODULE_0__["default"].projects.indexOf(currentProject)].addTask(t);
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderMain)(currentProject)
}

const updateProjectData = (p) =>{
  const newProject = project(p.title, p.description)
  ___WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject);
  console.log(___WEBPACK_IMPORTED_MODULE_0__["default"].projects)
  ;(0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderSidebar)(___WEBPACK_IMPORTED_MODULE_0__["default"]);
}





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* eslint-disable import/no-cycle */




const ProjectList = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.projectList)();
const Project1 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.project)("P1", "testing");
const task11 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("t1", "12", "high", Project1.projectTitle);
const task12 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("t2", "13", "high", Project1.projectTitle);
Project1.addTask(task11);
Project1.addTask(task12);

const Project2 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.project)("P2", "testing");
const task21 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("t21", "21", "high", Project2.projectTitle);
const task22 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("t22", "22", "high", Project2.projectTitle);
Project2.addTask(task21);
Project2.addTask(task22);

ProjectList.addProject(Project1);
ProjectList.addProject(Project2);

const currentProject = Project2;
(0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderSidebar)(ProjectList);
(0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderMain)(currentProject);

const addT = document.querySelector(".addT");
addT.addEventListener("click", () =>{
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.getTaskInput)(currentProject);
})

const addP = document.querySelector(".addP");
addP.addEventListener("click", () =>{
    (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.getProjectInput)();
})


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectInput": () => (/* binding */ getProjectInput),
/* harmony export */   "getTaskInput": () => (/* binding */ getTaskInput),
/* harmony export */   "renderMain": () => (/* binding */ renderMain),
/* harmony export */   "renderSidebar": () => (/* binding */ renderSidebar)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */


const renderMain = (p) => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.clearMain();
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.TitleDisplay(p.projectTitle);
  for (let i = 0; i < p.taskList.length; i++) {
    const taskElement = _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.createTaskDisplay(p.taskList[i]);
    _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.addToTaskList(taskElement);
  }
};

const renderSidebar = (projectList) =>{
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.clearSidebar()
    for(let i = 0; i < projectList.projects.length; i++){
        const projectElement = _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.createProjectDisplay(projectList.projects[i]);
        _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.addToProjectList(projectElement);
    }
}


const getTaskInput = (currentProject) => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.taskForm(currentProject);
}

const getProjectInput = () => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.projectForm();
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0E7QUFDQSxFQUFFLG9EQUFrQjtBQUNwQjs7QUFFQTtBQUNBLEVBQUUsdURBQXFCO0FBQ3ZCOzs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IHVwZGF0ZVRhc2tEYXRhLCB1cGRhdGVQcm9qZWN0RGF0YSB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuXG5jb25zdCBET011cGRhdGUgPSAoKCkgPT4ge1xuICBjb25zdCBUaXRsZURpc3BsYXkgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBUSVRMRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiAudGl0bGVcIik7XG4gICAgVElUTEUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgfTtcblxuICBjb25zdCBjbGVhck1haW4gPSAoKSA9PntcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0xpc3RcIik7XG4gICAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IGNsZWFyU2lkZWJhciA9ICgpID0+e1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlVGFza0Rpc3BsYXkgPSAodCkgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0LnRpdGxlO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZS50ZXh0Q29udGVudCA9IHQuZHVlRGF0ZTtcbiAgICBkdWUuY2xhc3NMaXN0LmFkZChcImR1ZVwiKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHQucHJvamVjdFRpdGxlO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKHQucHJpb3JpdHkgPT09IDApIHtcbiAgICAgIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9IGVsc2UgaWYgKHQucHJpb3JpdHkgPT09IDEpIHtcbiAgICAgIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdGF0dXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIHN0YXR1cy5jaGVja2VkID0gdC5zdGF0dXM7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9UYXNrTGlzdCA9ICh0YXNrRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdERpc3BsYXkgPSAocHJvamVjdCk9PntcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0VGl0bGU7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRvUHJvamVjdExpc3QgPSAocHJvamVjdEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdGxpc3RcIik7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gKGN1cnJlbnRQcm9qZWN0KSA9PntcbiAgICBjb25zdCBmb3JtRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtRS5pbm5lckhUTUwgPSBgPGZvcm0+XG4gICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCI+PGJyPjxicj5cblxuICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPjxicj48YnI+XG5cbiAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+PGJyPjxicj5cblxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgPC9mb3JtPmBcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBjb25zdCB7cHJvamVjdFRpdGxlfSA9IGN1cnJlbnRQcm9qZWN0XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgY29uc29sZS5sb2coYFRpdGxlOiAke3RpdGxlfSwgRHVlIERhdGU6ICR7ZHVlRGF0ZX0sIFByaW9yaXR5OiAke3ByaW9yaXR5fSwgJHtwcm9qZWN0VGl0bGV9YCk7XG4gICAgZm9ybUUuaW5uZXJIVE1MID0gXCJcIlxuICAgICBjb25zdCB0ID0ge3RpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdFRpdGxlfVxuICAgICB1cGRhdGVUYXNrRGF0YSh0LCBjdXJyZW50UHJvamVjdCk7XG4gICAgfVxuICAgXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuXG4gIH1cblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9ICgpID0+e1xuICAgIGNvbnN0IGZvcm1FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm1FLmlubmVySFRNTCA9IGA8Zm9ybT5cbiAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIj48YnI+PGJyPlxuXG4gICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+PGJyPjxicj5cblxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgPC9mb3JtPmBcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgZm9ybUUuaW5uZXJIVE1MID0gXCJcIlxuICAgICBjb25zdCBwID0ge3RpdGxlLCBkZXNjcmlwdGlvbn1cbiAgICAgdXBkYXRlUHJvamVjdERhdGEocCk7XG4gICAgfVxuICAgXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIFRpdGxlRGlzcGxheSxcbiAgICBjcmVhdGVUYXNrRGlzcGxheSxcbiAgICBhZGRUb1Rhc2tMaXN0LFxuICAgIGNyZWF0ZVByb2plY3REaXNwbGF5LFxuICAgIGFkZFRvUHJvamVjdExpc3QsXG4gICAgY2xlYXJNYWluLFxuICAgIHRhc2tGb3JtLFxuICAgIHByb2plY3RGb3JtLFxuICAgIGNsZWFyU2lkZWJhclxuICB9O1xufSkoKTtcblxuXG5leHBvcnQge0RPTXVwZGF0ZX07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcmVuZGVyTWFpbiwgcmVuZGVyU2lkZWJhciB9IGZyb20gXCIuL3JlbmRlcmVyXCI7XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGUpID0+IHtcbiAgY29uc3Qgc3RhdHVzID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0VGl0bGUsXG4gICAgc3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBbXTtcbiAgbGV0IHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICBwcm9qZWN0VGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIHByb2plY3REZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodCkgPT4ge1xuICAgIHRhc2tMaXN0LnB1c2godCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9ICh0KSA9PiB7XG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodCksIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdFRpdGxlLFxuICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICB0YXNrTGlzdCxcbiAgICBjaGFuZ2VUaXRsZSxcbiAgICBjaGFuZ2VEZXNjcmlwdGlvbixcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHApID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHApLCAxKTtcbiAgfTtcbiAgcmV0dXJuIHtwcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xufTtcblxuXG5jb25zdCB1cGRhdGVUYXNrRGF0YSA9ICh0LCBjdXJyZW50UHJvamVjdCkgPT57XG5cbiAgUHJvamVjdExpc3QucHJvamVjdHNbUHJvamVjdExpc3QucHJvamVjdHMuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLmFkZFRhc2sodCk7XG4gIHJlbmRlck1haW4oY3VycmVudFByb2plY3QpXG59XG5cbmNvbnN0IHVwZGF0ZVByb2plY3REYXRhID0gKHApID0+e1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwLnRpdGxlLCBwLmRlc2NyaXB0aW9uKVxuICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhQcm9qZWN0TGlzdC5wcm9qZWN0cylcbiAgcmVuZGVyU2lkZWJhcihQcm9qZWN0TGlzdCk7XG59XG5leHBvcnQgeyB0YXNrLCBwcm9qZWN0LCBwcm9qZWN0TGlzdCwgdXBkYXRlVGFza0RhdGEsIHVwZGF0ZVByb2plY3REYXRhfTtcblxuXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7dGFzaywgcHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIlxuaW1wb3J0IHsgcmVuZGVyTWFpbiwgcmVuZGVyU2lkZWJhciwgZ2V0VGFza0lucHV0LCBnZXRQcm9qZWN0SW5wdXR9IGZyb20gXCIuL3JlbmRlcmVyXCI7XG5cblxuY29uc3QgUHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdCgpO1xuY29uc3QgUHJvamVjdDEgPSBwcm9qZWN0KFwiUDFcIiwgXCJ0ZXN0aW5nXCIpO1xuY29uc3QgdGFzazExID0gdGFzayhcInQxXCIsIFwiMTJcIiwgXCJoaWdoXCIsIFByb2plY3QxLnByb2plY3RUaXRsZSk7XG5jb25zdCB0YXNrMTIgPSB0YXNrKFwidDJcIiwgXCIxM1wiLCBcImhpZ2hcIiwgUHJvamVjdDEucHJvamVjdFRpdGxlKTtcblByb2plY3QxLmFkZFRhc2sodGFzazExKTtcblByb2plY3QxLmFkZFRhc2sodGFzazEyKTtcblxuY29uc3QgUHJvamVjdDIgPSBwcm9qZWN0KFwiUDJcIiwgXCJ0ZXN0aW5nXCIpO1xuY29uc3QgdGFzazIxID0gdGFzayhcInQyMVwiLCBcIjIxXCIsIFwiaGlnaFwiLCBQcm9qZWN0Mi5wcm9qZWN0VGl0bGUpO1xuY29uc3QgdGFzazIyID0gdGFzayhcInQyMlwiLCBcIjIyXCIsIFwiaGlnaFwiLCBQcm9qZWN0Mi5wcm9qZWN0VGl0bGUpO1xuUHJvamVjdDIuYWRkVGFzayh0YXNrMjEpO1xuUHJvamVjdDIuYWRkVGFzayh0YXNrMjIpO1xuXG5Qcm9qZWN0TGlzdC5hZGRQcm9qZWN0KFByb2plY3QxKTtcblByb2plY3RMaXN0LmFkZFByb2plY3QoUHJvamVjdDIpO1xuXG5jb25zdCBjdXJyZW50UHJvamVjdCA9IFByb2plY3QyO1xucmVuZGVyU2lkZWJhcihQcm9qZWN0TGlzdCk7XG5yZW5kZXJNYWluKGN1cnJlbnRQcm9qZWN0KTtcblxuY29uc3QgYWRkVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVFwiKTtcbmFkZFQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGdldFRhc2tJbnB1dChjdXJyZW50UHJvamVjdCk7XG59KVxuXG5jb25zdCBhZGRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQXCIpO1xuYWRkUC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgZ2V0UHJvamVjdElucHV0KCk7XG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHtET011cGRhdGV9IGZyb20gXCIuL2RvbVwiXG5cbmNvbnN0IHJlbmRlck1haW4gPSAocCkgPT4ge1xuICBET011cGRhdGUuY2xlYXJNYWluKCk7XG4gIERPTXVwZGF0ZS5UaXRsZURpc3BsYXkocC5wcm9qZWN0VGl0bGUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IERPTXVwZGF0ZS5jcmVhdGVUYXNrRGlzcGxheShwLnRhc2tMaXN0W2ldKTtcbiAgICBET011cGRhdGUuYWRkVG9UYXNrTGlzdCh0YXNrRWxlbWVudCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNpZGViYXIgPSAocHJvamVjdExpc3QpID0+e1xuICBET011cGRhdGUuY2xlYXJTaWRlYmFyKClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IERPTXVwZGF0ZS5jcmVhdGVQcm9qZWN0RGlzcGxheShwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXSk7XG4gICAgICAgIERPTXVwZGF0ZS5hZGRUb1Byb2plY3RMaXN0KHByb2plY3RFbGVtZW50KTtcbiAgICB9XG59XG5cblxuY29uc3QgZ2V0VGFza0lucHV0ID0gKGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gIERPTXVwZGF0ZS50YXNrRm9ybShjdXJyZW50UHJvamVjdCk7XG59XG5cbmNvbnN0IGdldFByb2plY3RJbnB1dCA9ICgpID0+IHtcbiAgRE9NdXBkYXRlLnByb2plY3RGb3JtKCk7XG59XG5cbmV4cG9ydCB7cmVuZGVyTWFpbiwgcmVuZGVyU2lkZWJhciwgZ2V0VGFza0lucHV0LCBnZXRQcm9qZWN0SW5wdXR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=