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
    status.addEventListener("click", ()=>{
      (0,_factories__WEBPACK_IMPORTED_MODULE_0__.updateTaskStatus)(t);
    })

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
/* harmony export */   "updateTaskData": () => (/* binding */ updateTaskData),
/* harmony export */   "updateTaskStatus": () => (/* binding */ updateTaskStatus)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */



const task = (title, dueDate, priority, projectTitle) => {
  let status = false;
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

  const getProject = (projectT) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].projectTitle === projectT) {
        return projects[i];
      }
    }
    return null;
  }
  return {projects, addProject, removeProject, getProject };
};


const updateTaskData = (t, currentProject) =>{

  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects.indexOf(currentProject)].addTask(t);
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderMain)(currentProject)
}

const updateTaskStatus = (t) => {
  const p = ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.getProject(t.projectTitle);
  const pI = ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects.indexOf(p);
  const tI = p.taskList.indexOf(t);
  // console.log(ProjectList.projects[pI].taskList[tI])
  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[pI].taskList[tI].status = !___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[pI].taskList[tI].status;
  // console.log(ProjectList.projects[pI].taskList[tI])
}

const updateProjectData = (p) =>{
  const newProject = project(p.title, p.description)
  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.addProject(newProject);
  console.log(___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects)
  ;(0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderSidebar)(___WEBPACK_IMPORTED_MODULE_0__.ProjectList);
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList),
/* harmony export */   "changeCurrent": () => (/* binding */ changeCurrent),
/* harmony export */   "getCurrent": () => (/* binding */ getCurrent)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* eslint-disable import/no-cycle */




const ProjectList = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.projectList)();
const Project1 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.project)("P1", "testing");
const task11 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("t1", "2023-03-18", "high", Project1.projectTitle);
const task12 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("t2", "2023-03-18", "high", Project1.projectTitle);
Project1.addTask(task11);
Project1.addTask(task12);

const Project2 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.project)("P2", "testing");
const task21 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("t21", "2023-03-18", "high", Project2.projectTitle);
const task22 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("t22", "2023-03-18", "high", Project2.projectTitle);
Project2.addTask(task21);
Project2.addTask(task22);

ProjectList.addProject(Project1);
ProjectList.addProject(Project2);

let currentProject = Project2;
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

function changeCurrent(p) {
    currentProject = p;
}

function getCurrent(){
    return currentProject;
}



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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
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
        projectElement.addEventListener("click", () => {
          (0,___WEBPACK_IMPORTED_MODULE_1__.changeCurrent)(___WEBPACK_IMPORTED_MODULE_1__.ProjectList.getProject(projectElement.textContent));
          renderMain((0,___WEBPACK_IMPORTED_MODULE_1__.getCurrent)());
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUMrQjtBQUM0Qjs7QUFFM0Q7QUFDQSxFQUFFLHFEQUFtQjtBQUNyQixFQUFFLHdEQUFzQjtBQUN4QixrQkFBa0IsdUJBQXVCO0FBQ3pDLHdCQUF3Qiw2REFBMkI7QUFDbkQsSUFBSSx5REFBdUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBLEVBQUUsd0RBQXNCO0FBQ3hCLG1CQUFtQixpQ0FBaUM7QUFDcEQsK0JBQStCLGdFQUE4QjtBQUM3RDtBQUNBLFVBQVUsZ0RBQWEsQ0FBQyxxREFBc0I7QUFDOUMscUJBQXFCLDZDQUFVO0FBQy9CLFNBQVM7QUFDVCxRQUFRLDREQUEwQjtBQUNsQztBQUNBOzs7QUFHQTtBQUNBLEVBQUUsb0RBQWtCO0FBQ3BCOztBQUVBO0FBQ0EsRUFBRSx1REFBcUI7QUFDdkI7Ozs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgdXBkYXRlVGFza0RhdGEsIHVwZGF0ZVByb2plY3REYXRhLCB1cGRhdGVUYXNrU3RhdHVzIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5cblxuY29uc3QgRE9NdXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgVGl0bGVEaXNwbGF5ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgVElUTEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gLnRpdGxlXCIpO1xuICAgIFRJVExFLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJNYWluID0gKCkgPT57XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBjb25zdCBjbGVhclNpZGViYXIgPSAoKSA9PntcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdGxpc3RcIik7XG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVRhc2tEaXNwbGF5ID0gKHQpID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdC50aXRsZTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWUudGV4dENvbnRlbnQgPSB0LmR1ZURhdGU7XG4gICAgZHVlLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0LnByb2plY3RUaXRsZTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiZHVlXCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmICh0LnByaW9yaXR5ID09PSAwKSB7XG4gICAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgfSBlbHNlIGlmICh0LnByaW9yaXR5ID09PSAxKSB7XG4gICAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RhdHVzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBzdGF0dXMuY2hlY2tlZCA9IHQuc3RhdHVzO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICBzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICB1cGRhdGVUYXNrU3RhdHVzKHQpO1xuICAgIH0pXG5cbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChkdWUpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIHJldHVybiB0YXNrRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBhZGRUb1Rhc2tMaXN0ID0gKHRhc2tFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpO1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0RGlzcGxheSA9IChwcm9qZWN0KT0+e1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgY29uc3QgYWRkVG9Qcm9qZWN0TGlzdCA9IChwcm9qZWN0RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgdGFza0Zvcm0gPSAoY3VycmVudFByb2plY3QpID0+e1xuICAgIGNvbnN0IGZvcm1FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm1FLmlubmVySFRNTCA9IGA8Zm9ybT5cbiAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIj48YnI+PGJyPlxuXG4gICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+PGJyPjxicj5cblxuICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICA8L3NlbGVjdD48YnI+PGJyPlxuXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICA8L2Zvcm0+YFxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGNvbnN0IHtwcm9qZWN0VGl0bGV9ID0gY3VycmVudFByb2plY3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7dGl0bGV9LCBEdWUgRGF0ZTogJHtkdWVEYXRlfSwgUHJpb3JpdHk6ICR7cHJpb3JpdHl9LCAke3Byb2plY3RUaXRsZX1gKTtcbiAgICBmb3JtRS5pbm5lckhUTUwgPSBcIlwiXG4gICAgIGNvbnN0IHQgPSB7dGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGV9XG4gICAgIHVwZGF0ZVRhc2tEYXRhKHQsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG4gICBcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG5cbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gKCkgPT57XG4gICAgY29uc3QgZm9ybUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgZm9ybUUuaW5uZXJIVE1MID0gYDxmb3JtPlxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjxicj48YnI+XG5cbiAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIj48YnI+PGJyPlxuXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICA8L2Zvcm0+YFxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBmb3JtRS5pbm5lckhUTUwgPSBcIlwiXG4gICAgIGNvbnN0IHAgPSB7dGl0bGUsIGRlc2NyaXB0aW9ufVxuICAgICB1cGRhdGVQcm9qZWN0RGF0YShwKTtcbiAgICB9XG4gICBcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgVGl0bGVEaXNwbGF5LFxuICAgIGNyZWF0ZVRhc2tEaXNwbGF5LFxuICAgIGFkZFRvVGFza0xpc3QsXG4gICAgY3JlYXRlUHJvamVjdERpc3BsYXksXG4gICAgYWRkVG9Qcm9qZWN0TGlzdCxcbiAgICBjbGVhck1haW4sXG4gICAgdGFza0Zvcm0sXG4gICAgcHJvamVjdEZvcm0sXG4gICAgY2xlYXJTaWRlYmFyXG4gIH07XG59KSgpO1xuXG5cbmV4cG9ydCB7RE9NdXBkYXRlfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7UHJvamVjdExpc3R9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW5kZXJNYWluLCByZW5kZXJTaWRlYmFyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcblxuY29uc3QgdGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RUaXRsZSkgPT4ge1xuICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0VGl0bGUsXG4gICAgc3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBbXTtcbiAgbGV0IHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICBwcm9qZWN0VGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIHByb2plY3REZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodCkgPT4ge1xuICAgIHRhc2tMaXN0LnB1c2godCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9ICh0KSA9PiB7XG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodCksIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdFRpdGxlLFxuICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICB0YXNrTGlzdCxcbiAgICBjaGFuZ2VUaXRsZSxcbiAgICBjaGFuZ2VEZXNjcmlwdGlvbixcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHApID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHApLCAxKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RUKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSA9PT0gcHJvamVjdFQpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge3Byb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0IH07XG59O1xuXG5cbmNvbnN0IHVwZGF0ZVRhc2tEYXRhID0gKHQsIGN1cnJlbnRQcm9qZWN0KSA9PntcblxuICBQcm9qZWN0TGlzdC5wcm9qZWN0c1tQcm9qZWN0TGlzdC5wcm9qZWN0cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0uYWRkVGFzayh0KTtcbiAgcmVuZGVyTWFpbihjdXJyZW50UHJvamVjdClcbn1cblxuY29uc3QgdXBkYXRlVGFza1N0YXR1cyA9ICh0KSA9PiB7XG4gIGNvbnN0IHAgPSBQcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHQucHJvamVjdFRpdGxlKTtcbiAgY29uc3QgcEkgPSBQcm9qZWN0TGlzdC5wcm9qZWN0cy5pbmRleE9mKHApO1xuICBjb25zdCB0SSA9IHAudGFza0xpc3QuaW5kZXhPZih0KTtcbiAgLy8gY29uc29sZS5sb2coUHJvamVjdExpc3QucHJvamVjdHNbcEldLnRhc2tMaXN0W3RJXSlcbiAgUHJvamVjdExpc3QucHJvamVjdHNbcEldLnRhc2tMaXN0W3RJXS5zdGF0dXMgPSAhUHJvamVjdExpc3QucHJvamVjdHNbcEldLnRhc2tMaXN0W3RJXS5zdGF0dXM7XG4gIC8vIGNvbnNvbGUubG9nKFByb2plY3RMaXN0LnByb2plY3RzW3BJXS50YXNrTGlzdFt0SV0pXG59XG5cbmNvbnN0IHVwZGF0ZVByb2plY3REYXRhID0gKHApID0+e1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwLnRpdGxlLCBwLmRlc2NyaXB0aW9uKVxuICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhQcm9qZWN0TGlzdC5wcm9qZWN0cylcbiAgcmVuZGVyU2lkZWJhcihQcm9qZWN0TGlzdCk7XG59XG5cbmV4cG9ydCB7IHRhc2ssIHByb2plY3QsIHByb2plY3RMaXN0LCB1cGRhdGVUYXNrRGF0YSwgdXBkYXRlUHJvamVjdERhdGEsIHVwZGF0ZVRhc2tTdGF0dXN9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQge3Rhc2ssIHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vZmFjdG9yaWVzXCJcbmltcG9ydCB7IHJlbmRlck1haW4sIHJlbmRlclNpZGViYXIsIGdldFRhc2tJbnB1dCwgZ2V0UHJvamVjdElucHV0fSBmcm9tIFwiLi9yZW5kZXJlclwiO1xuXG5cbmNvbnN0IFByb2plY3RMaXN0ID0gcHJvamVjdExpc3QoKTtcbmNvbnN0IFByb2plY3QxID0gcHJvamVjdChcIlAxXCIsIFwidGVzdGluZ1wiKTtcbmNvbnN0IHRhc2sxMSA9IHRhc2soXCJ0MVwiLCBcIjIwMjMtMDMtMThcIiwgXCJoaWdoXCIsIFByb2plY3QxLnByb2plY3RUaXRsZSk7XG5jb25zdCB0YXNrMTIgPSB0YXNrKFwidDJcIiwgXCIyMDIzLTAzLTE4XCIsIFwiaGlnaFwiLCBQcm9qZWN0MS5wcm9qZWN0VGl0bGUpO1xuUHJvamVjdDEuYWRkVGFzayh0YXNrMTEpO1xuUHJvamVjdDEuYWRkVGFzayh0YXNrMTIpO1xuXG5jb25zdCBQcm9qZWN0MiA9IHByb2plY3QoXCJQMlwiLCBcInRlc3RpbmdcIik7XG5jb25zdCB0YXNrMjEgPSB0YXNrKFwidDIxXCIsIFwiMjAyMy0wMy0xOFwiLCBcImhpZ2hcIiwgUHJvamVjdDIucHJvamVjdFRpdGxlKTtcbmNvbnN0IHRhc2syMiA9IHRhc2soXCJ0MjJcIiwgXCIyMDIzLTAzLTE4XCIsIFwiaGlnaFwiLCBQcm9qZWN0Mi5wcm9qZWN0VGl0bGUpO1xuUHJvamVjdDIuYWRkVGFzayh0YXNrMjEpO1xuUHJvamVjdDIuYWRkVGFzayh0YXNrMjIpO1xuXG5Qcm9qZWN0TGlzdC5hZGRQcm9qZWN0KFByb2plY3QxKTtcblByb2plY3RMaXN0LmFkZFByb2plY3QoUHJvamVjdDIpO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSBQcm9qZWN0MjtcbnJlbmRlclNpZGViYXIoUHJvamVjdExpc3QpO1xucmVuZGVyTWFpbihjdXJyZW50UHJvamVjdCk7XG5cbmNvbnN0IGFkZFQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRcIik7XG5hZGRULmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBnZXRUYXNrSW5wdXQoY3VycmVudFByb2plY3QpO1xufSlcblxuY29uc3QgYWRkUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUFwiKTtcbmFkZFAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGdldFByb2plY3RJbnB1dCgpO1xufSlcblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudChwKSB7XG4gICAgY3VycmVudFByb2plY3QgPSBwO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50KCl7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xufVxuXG5leHBvcnQge1Byb2plY3RMaXN0LCBjaGFuZ2VDdXJyZW50LCBnZXRDdXJyZW50fSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7RE9NdXBkYXRlfSBmcm9tIFwiLi9kb21cIlxuaW1wb3J0IHsgUHJvamVjdExpc3QsIGNoYW5nZUN1cnJlbnQsIGdldEN1cnJlbnQgfSBmcm9tIFwiLlwiO1xuXG5jb25zdCByZW5kZXJNYWluID0gKHApID0+IHtcbiAgRE9NdXBkYXRlLmNsZWFyTWFpbigpO1xuICBET011cGRhdGUuVGl0bGVEaXNwbGF5KHAucHJvamVjdFRpdGxlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBET011cGRhdGUuY3JlYXRlVGFza0Rpc3BsYXkocC50YXNrTGlzdFtpXSk7XG4gICAgRE9NdXBkYXRlLmFkZFRvVGFza0xpc3QodGFza0VsZW1lbnQpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaWRlYmFyID0gKHByb2plY3RMaXN0KSA9PntcbiAgRE9NdXBkYXRlLmNsZWFyU2lkZWJhcigpXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBET011cGRhdGUuY3JlYXRlUHJvamVjdERpc3BsYXkocHJvamVjdExpc3QucHJvamVjdHNbaV0pO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZUN1cnJlbnQoUHJvamVjdExpc3QuZ2V0UHJvamVjdChwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCkpO1xuICAgICAgICAgIHJlbmRlck1haW4oZ2V0Q3VycmVudCgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgRE9NdXBkYXRlLmFkZFRvUHJvamVjdExpc3QocHJvamVjdEVsZW1lbnQpO1xuICAgIH1cbn1cblxuXG5jb25zdCBnZXRUYXNrSW5wdXQgPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgRE9NdXBkYXRlLnRhc2tGb3JtKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuY29uc3QgZ2V0UHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBET011cGRhdGUucHJvamVjdEZvcm0oKTtcbn1cblxuZXhwb3J0IHtyZW5kZXJNYWluLCByZW5kZXJTaWRlYmFyLCBnZXRUYXNrSW5wdXQsIGdldFByb2plY3RJbnB1dH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==