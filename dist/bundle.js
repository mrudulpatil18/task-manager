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
/* eslint-disable no-plusplus */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxFQUFFLHdEQUFzQjtBQUN4QixtQkFBbUIsaUNBQWlDO0FBQ3BELCtCQUErQixnRUFBOEI7QUFDN0Q7QUFDQSxVQUFVLGdEQUFhLENBQUMscURBQXNCO0FBQzlDLHFCQUFxQiw2Q0FBVTtBQUMvQixTQUFTO0FBQ1QsUUFBUSw0REFBMEI7QUFDbEM7QUFDQTs7O0FBR0E7QUFDQSxFQUFFLG9EQUFrQjtBQUNwQjs7QUFFQTtBQUNBLEVBQUUsdURBQXFCO0FBQ3ZCOzs7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IHVwZGF0ZVRhc2tEYXRhLCB1cGRhdGVQcm9qZWN0RGF0YSB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuXG5cbmNvbnN0IERPTXVwZGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IFRpdGxlRGlzcGxheSA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IFRJVExFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC50aXRsZVwiKTtcbiAgICBUSVRMRS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyTWFpbiA9ICgpID0+e1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgY29uc3QgY2xlYXJTaWRlYmFyID0gKCkgPT57XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RsaXN0XCIpO1xuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBjb25zdCBjcmVhdGVUYXNrRGlzcGxheSA9ICh0KSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHQudGl0bGU7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcblxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlLnRleHRDb250ZW50ID0gdC5kdWVEYXRlO1xuICAgIGR1ZS5jbGFzc0xpc3QuYWRkKFwiZHVlXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdC5wcm9qZWN0VGl0bGU7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcImR1ZVwiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZiAodC5wcmlvcml0eSA9PT0gMCkge1xuICAgICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgIH0gZWxzZSBpZiAodC5wcmlvcml0eSA9PT0gMSkge1xuICAgICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgc3RhdHVzLmNoZWNrZWQgPSB0LnN0YXR1cztcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChkdWUpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIHJldHVybiB0YXNrRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBhZGRUb1Rhc2tMaXN0ID0gKHRhc2tFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpO1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0RGlzcGxheSA9IChwcm9qZWN0KT0+e1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgIFxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgY29uc3QgYWRkVG9Qcm9qZWN0TGlzdCA9IChwcm9qZWN0RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgdGFza0Zvcm0gPSAoY3VycmVudFByb2plY3QpID0+e1xuICAgIGNvbnN0IGZvcm1FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm1FLmlubmVySFRNTCA9IGA8Zm9ybT5cbiAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIj48YnI+PGJyPlxuXG4gICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+PGJyPjxicj5cblxuICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICA8L3NlbGVjdD48YnI+PGJyPlxuXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICA8L2Zvcm0+YFxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGNvbnN0IHtwcm9qZWN0VGl0bGV9ID0gY3VycmVudFByb2plY3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7dGl0bGV9LCBEdWUgRGF0ZTogJHtkdWVEYXRlfSwgUHJpb3JpdHk6ICR7cHJpb3JpdHl9LCAke3Byb2plY3RUaXRsZX1gKTtcbiAgICBmb3JtRS5pbm5lckhUTUwgPSBcIlwiXG4gICAgIGNvbnN0IHQgPSB7dGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGV9XG4gICAgIHVwZGF0ZVRhc2tEYXRhKHQsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG4gICBcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG5cbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gKCkgPT57XG4gICAgY29uc3QgZm9ybUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgZm9ybUUuaW5uZXJIVE1MID0gYDxmb3JtPlxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjxicj48YnI+XG5cbiAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIj48YnI+PGJyPlxuXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICA8L2Zvcm0+YFxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBmb3JtRS5pbm5lckhUTUwgPSBcIlwiXG4gICAgIGNvbnN0IHAgPSB7dGl0bGUsIGRlc2NyaXB0aW9ufVxuICAgICB1cGRhdGVQcm9qZWN0RGF0YShwKTtcbiAgICB9XG4gICBcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgVGl0bGVEaXNwbGF5LFxuICAgIGNyZWF0ZVRhc2tEaXNwbGF5LFxuICAgIGFkZFRvVGFza0xpc3QsXG4gICAgY3JlYXRlUHJvamVjdERpc3BsYXksXG4gICAgYWRkVG9Qcm9qZWN0TGlzdCxcbiAgICBjbGVhck1haW4sXG4gICAgdGFza0Zvcm0sXG4gICAgcHJvamVjdEZvcm0sXG4gICAgY2xlYXJTaWRlYmFyXG4gIH07XG59KSgpO1xuXG5cbmV4cG9ydCB7RE9NdXBkYXRlfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7UHJvamVjdExpc3R9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW5kZXJNYWluLCByZW5kZXJTaWRlYmFyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcblxuY29uc3QgdGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RUaXRsZSkgPT4ge1xuICBjb25zdCBzdGF0dXMgPSBmYWxzZTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHByb2plY3RUaXRsZSxcbiAgICBzdGF0dXMsXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuICBsZXQgcHJvamVjdFRpdGxlID0gdGl0bGU7XG4gIGxldCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblxuICBjb25zdCBjaGFuZ2VUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHByb2plY3RUaXRsZSA9IG5ld1RpdGxlO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0KSA9PiB7XG4gICAgdGFza0xpc3QucHVzaCh0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrID0gKHQpID0+IHtcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0KSwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0VGl0bGUsXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLFxuICAgIHRhc2tMaXN0LFxuICAgIGNoYW5nZVRpdGxlLFxuICAgIGNoYW5nZURlc2NyaXB0aW9uLFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgfTtcbn07XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocCkgPT4ge1xuICAgIHByb2plY3RzLnB1c2gocCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwKSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocCksIDEpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdFQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdHNbaV0ucHJvamVjdFRpdGxlID09PSBwcm9qZWN0VCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7cHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3QgfTtcbn07XG5cblxuY29uc3QgdXBkYXRlVGFza0RhdGEgPSAodCwgY3VycmVudFByb2plY3QpID0+e1xuXG4gIFByb2plY3RMaXN0LnByb2plY3RzW1Byb2plY3RMaXN0LnByb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpXS5hZGRUYXNrKHQpO1xuICByZW5kZXJNYWluKGN1cnJlbnRQcm9qZWN0KVxufVxuXG5jb25zdCB1cGRhdGVQcm9qZWN0RGF0YSA9IChwKSA9PntcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QocC50aXRsZSwgcC5kZXNjcmlwdGlvbilcbiAgUHJvamVjdExpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coUHJvamVjdExpc3QucHJvamVjdHMpXG4gIHJlbmRlclNpZGViYXIoUHJvamVjdExpc3QpO1xufVxuXG5leHBvcnQgeyB0YXNrLCBwcm9qZWN0LCBwcm9qZWN0TGlzdCwgdXBkYXRlVGFza0RhdGEsIHVwZGF0ZVByb2plY3REYXRhfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHt0YXNrLCBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiXG5pbXBvcnQgeyByZW5kZXJNYWluLCByZW5kZXJTaWRlYmFyLCBnZXRUYXNrSW5wdXQsIGdldFByb2plY3RJbnB1dH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcblxuXG5jb25zdCBQcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0KCk7XG5jb25zdCBQcm9qZWN0MSA9IHByb2plY3QoXCJQMVwiLCBcInRlc3RpbmdcIik7XG5jb25zdCB0YXNrMTEgPSB0YXNrKFwidDFcIiwgXCIxMlwiLCBcImhpZ2hcIiwgUHJvamVjdDEucHJvamVjdFRpdGxlKTtcbmNvbnN0IHRhc2sxMiA9IHRhc2soXCJ0MlwiLCBcIjEzXCIsIFwiaGlnaFwiLCBQcm9qZWN0MS5wcm9qZWN0VGl0bGUpO1xuUHJvamVjdDEuYWRkVGFzayh0YXNrMTEpO1xuUHJvamVjdDEuYWRkVGFzayh0YXNrMTIpO1xuXG5jb25zdCBQcm9qZWN0MiA9IHByb2plY3QoXCJQMlwiLCBcInRlc3RpbmdcIik7XG5jb25zdCB0YXNrMjEgPSB0YXNrKFwidDIxXCIsIFwiMjFcIiwgXCJoaWdoXCIsIFByb2plY3QyLnByb2plY3RUaXRsZSk7XG5jb25zdCB0YXNrMjIgPSB0YXNrKFwidDIyXCIsIFwiMjJcIiwgXCJoaWdoXCIsIFByb2plY3QyLnByb2plY3RUaXRsZSk7XG5Qcm9qZWN0Mi5hZGRUYXNrKHRhc2syMSk7XG5Qcm9qZWN0Mi5hZGRUYXNrKHRhc2syMik7XG5cblByb2plY3RMaXN0LmFkZFByb2plY3QoUHJvamVjdDEpO1xuUHJvamVjdExpc3QuYWRkUHJvamVjdChQcm9qZWN0Mik7XG5cbmxldCBjdXJyZW50UHJvamVjdCA9IFByb2plY3QyO1xucmVuZGVyU2lkZWJhcihQcm9qZWN0TGlzdCk7XG5yZW5kZXJNYWluKGN1cnJlbnRQcm9qZWN0KTtcblxuY29uc3QgYWRkVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVFwiKTtcbmFkZFQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGdldFRhc2tJbnB1dChjdXJyZW50UHJvamVjdCk7XG59KVxuXG5jb25zdCBhZGRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQXCIpO1xuYWRkUC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgZ2V0UHJvamVjdElucHV0KCk7XG59KVxuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50KHApIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHA7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnQoKXtcbiAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG59XG5cbmV4cG9ydCB7UHJvamVjdExpc3QsIGNoYW5nZUN1cnJlbnQsIGdldEN1cnJlbnR9IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHtET011cGRhdGV9IGZyb20gXCIuL2RvbVwiXG5pbXBvcnQgeyBQcm9qZWN0TGlzdCwgY2hhbmdlQ3VycmVudCwgZ2V0Q3VycmVudCB9IGZyb20gXCIuXCI7XG5cbmNvbnN0IHJlbmRlck1haW4gPSAocCkgPT4ge1xuICBET011cGRhdGUuY2xlYXJNYWluKCk7XG4gIERPTXVwZGF0ZS5UaXRsZURpc3BsYXkocC5wcm9qZWN0VGl0bGUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IERPTXVwZGF0ZS5jcmVhdGVUYXNrRGlzcGxheShwLnRhc2tMaXN0W2ldKTtcbiAgICBET011cGRhdGUuYWRkVG9UYXNrTGlzdCh0YXNrRWxlbWVudCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNpZGViYXIgPSAocHJvamVjdExpc3QpID0+e1xuICBET011cGRhdGUuY2xlYXJTaWRlYmFyKClcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IERPTXVwZGF0ZS5jcmVhdGVQcm9qZWN0RGlzcGxheShwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXSk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY2hhbmdlQ3VycmVudChQcm9qZWN0TGlzdC5nZXRQcm9qZWN0KHByb2plY3RFbGVtZW50LnRleHRDb250ZW50KSk7XG4gICAgICAgICAgcmVuZGVyTWFpbihnZXRDdXJyZW50KCkpO1xuICAgICAgICB9KVxuICAgICAgICBET011cGRhdGUuYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0RWxlbWVudCk7XG4gICAgfVxufVxuXG5cbmNvbnN0IGdldFRhc2tJbnB1dCA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xuICBET011cGRhdGUudGFza0Zvcm0oY3VycmVudFByb2plY3QpO1xufVxuXG5jb25zdCBnZXRQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gIERPTXVwZGF0ZS5wcm9qZWN0Rm9ybSgpO1xufVxuXG5leHBvcnQge3JlbmRlck1haW4sIHJlbmRlclNpZGViYXIsIGdldFRhc2tJbnB1dCwgZ2V0UHJvamVjdElucHV0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9