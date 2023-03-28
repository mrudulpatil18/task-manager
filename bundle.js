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

  const clearMain = () => {
    const taskList = document.querySelector(".taskList");
    taskList.innerHTML = "";
  };

  const clearSidebar = () => {
    const projectList = document.querySelector(".projectlist");
    projectList.innerHTML = "";
  };

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
    status.classList.add("status");
    status.addEventListener("click", () => {
      (0,_factories__WEBPACK_IMPORTED_MODULE_0__.updateTaskStatus)(t);
    });

   
    taskElement.appendChild(name);
    taskElement.appendChild(projectName);
    taskElement.appendChild(due);
    taskElement.appendChild(priority);
    taskElement.appendChild(status);

    return taskElement;
  };

  const addToTaskList = (taskElement) => {
    const taskList = document.querySelector(".taskList");
    taskList.appendChild(taskElement);
  };

  const createProjectDisplay = (project) => {
    const name = document.createElement("div");
    name.textContent = project.projectTitle;
    name.classList.add("name");

    return name;
  };

  const addToProjectList = (projectElement) => {
    const projectList = document.querySelector(".projectlist");
    projectList.appendChild(projectElement);
  };

  const taskForm = (currentProject) => {
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
  </form>`;

    function handleSubmit(event) {
      const { projectTitle } = currentProject;
      event.preventDefault();
      const title = document.querySelector("#title").value;
      const dueDate = document.querySelector("#dueDate").value;
      const priority = document.querySelector("#priority").value;
      console.log(
        `Title: ${title}, Due Date: ${dueDate}, Priority: ${priority}, ${projectTitle}`
      );
      formE.innerHTML = "";
      const t = { title, dueDate, priority, projectTitle };
      (0,_factories__WEBPACK_IMPORTED_MODULE_0__.updateTaskData)(t, currentProject);
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
  };

  const projectForm = () => {
    const formE = document.querySelector(".form");
    formE.innerHTML = `<form>
    <label for="title">Title:</label>
    <input type="text" id="title" name="title"><br><br>

    <label for="description">Description:</label>
    <input type="text" id="description" name="description"><br><br>

    <input type="submit" value="Submit">
  </form>`;

    function handleSubmit(event) {
      event.preventDefault();
      const title = document.querySelector("#title").value;
      const description = document.querySelector("#description").value;
      formE.innerHTML = "";
      const p = { title, description };
      (0,_factories__WEBPACK_IMPORTED_MODULE_0__.updateProjectData)(p);
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
  };

  return {
    TitleDisplay,
    createTaskDisplay,
    addToTaskList,
    createProjectDisplay,
    addToProjectList,
    clearMain,
    taskForm,
    projectForm,
    clearSidebar,
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
  };
  return { projects, addProject, removeProject, getProject };
};

const updateTaskData = (t, currentProject) => {
  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects.indexOf(currentProject)].addTask(t);
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderMain)(currentProject);
};

const updateTaskStatus = (t) => {
  const p = ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.getProject(t.projectTitle);
  const pI = ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects.indexOf(p);
  const tI = p.taskList.indexOf(t);
  // console.log(ProjectList.projects[pI].taskList[tI])
  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[pI].taskList[tI].status =
    !___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[pI].taskList[tI].status;
  // console.log(ProjectList.projects[pI].taskList[tI])
};

const updateProjectData = (p) => {
  const newProject = project(p.title, p.description);
  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.addProject(newProject);
  console.log(___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects);
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderSidebar)(___WEBPACK_IMPORTED_MODULE_0__.ProjectList);
};




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
const Project1 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.project)("Default", "default project");
const task1 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("task1", "2023-03-18", "high", Project1.projectTitle);
Project1.addTask(task1);

ProjectList.addProject(Project1);

let currentProject = Project1;
(0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderSidebar)(ProjectList);
(0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderMain)(currentProject);

const addT = document.querySelector(".addT");
addT.addEventListener("click", () => {
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.getTaskInput)(currentProject);
});

const addP = document.querySelector("img.addP");
addP.addEventListener("click", () => {
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.getProjectInput)();
});

function changeCurrent(p) {
  currentProject = p;
}

function getCurrent() {
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

const renderSidebar = (projectList) => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.clearSidebar();
  for (let i = 0; i < projectList.projects.length; i++) {
    const projectElement = _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.createProjectDisplay(
      projectList.projects[i]
    );
    projectElement.addEventListener("click", () => {
      (0,___WEBPACK_IMPORTED_MODULE_1__.changeCurrent)(___WEBPACK_IMPORTED_MODULE_1__.ProjectList.getProject(projectElement.textContent));
      renderMain((0,___WEBPACK_IMPORTED_MODULE_1__.getCurrent)());
    });
    _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.addToProjectList(projectElement);
  }
};

const getTaskInput = (currentProject) => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.taskForm(currentProject);
};

const getProjectInput = () => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.DOMupdate.projectForm();
};




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Qiw2REFBMkI7QUFDbkQsSUFBSSx5REFBdUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBLEVBQUUsd0RBQXNCO0FBQ3hCLGtCQUFrQixpQ0FBaUM7QUFDbkQsMkJBQTJCLGdFQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFhLENBQUMscURBQXNCO0FBQzFDLGlCQUFpQiw2Q0FBVTtBQUMzQixLQUFLO0FBQ0wsSUFBSSw0REFBMEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0RBQWtCO0FBQ3BCOztBQUVBO0FBQ0EsRUFBRSx1REFBcUI7QUFDdkI7O0FBRW9FOzs7Ozs7O1VDcENwRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7XG4gIHVwZGF0ZVRhc2tEYXRhLFxuICB1cGRhdGVQcm9qZWN0RGF0YSxcbiAgdXBkYXRlVGFza1N0YXR1cyxcbn0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5cbmNvbnN0IERPTXVwZGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IFRpdGxlRGlzcGxheSA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IFRJVExFID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC50aXRsZVwiKTtcbiAgICBUSVRMRS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0xpc3RcIik7XG4gICAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBjbGVhclNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RsaXN0XCIpO1xuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFza0Rpc3BsYXkgPSAodCkgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0LnRpdGxlO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZS50ZXh0Q29udGVudCA9IHQuZHVlRGF0ZTtcbiAgICBkdWUuY2xhc3NMaXN0LmFkZChcImR1ZVwiKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHQucHJvamVjdFRpdGxlO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYgKHQucHJpb3JpdHkgPT09IDApIHtcbiAgICAgIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICB9IGVsc2UgaWYgKHQucHJpb3JpdHkgPT09IDEpIHtcbiAgICAgIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdGF0dXMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIHN0YXR1cy5jaGVja2VkID0gdC5zdGF0dXM7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJzdGF0dXNcIik7XG4gICAgc3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGRhdGVUYXNrU3RhdHVzKHQpO1xuICAgIH0pO1xuXG4gICBcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcblxuICAgIHJldHVybiB0YXNrRWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBhZGRUb1Rhc2tMaXN0ID0gKHRhc2tFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpO1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0RGlzcGxheSA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBhZGRUb1Byb2plY3RMaXN0ID0gKHByb2plY3RFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RsaXN0XCIpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgfTtcblxuICBjb25zdCB0YXNrRm9ybSA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGZvcm1FID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm1FLmlubmVySFRNTCA9IGA8Zm9ybT5cbiAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIj48YnI+PGJyPlxuXG4gICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+PGJyPjxicj5cblxuICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICA8L3NlbGVjdD48YnI+PGJyPlxuXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICA8L2Zvcm0+YDtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgY29uc3QgeyBwcm9qZWN0VGl0bGUgfSA9IGN1cnJlbnRQcm9qZWN0O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudmFsdWU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFRpdGxlOiAke3RpdGxlfSwgRHVlIERhdGU6ICR7ZHVlRGF0ZX0sIFByaW9yaXR5OiAke3ByaW9yaXR5fSwgJHtwcm9qZWN0VGl0bGV9YFxuICAgICAgKTtcbiAgICAgIGZvcm1FLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCB0ID0geyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RUaXRsZSB9O1xuICAgICAgdXBkYXRlVGFza0RhdGEodCwgY3VycmVudFByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtRS5pbm5lckhUTUwgPSBgPGZvcm0+XG4gICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCI+PGJyPjxicj5cblxuICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPjxicj48YnI+XG5cbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG4gIDwvZm9ybT5gO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgZm9ybUUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IHAgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9O1xuICAgICAgdXBkYXRlUHJvamVjdERhdGEocCk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgVGl0bGVEaXNwbGF5LFxuICAgIGNyZWF0ZVRhc2tEaXNwbGF5LFxuICAgIGFkZFRvVGFza0xpc3QsXG4gICAgY3JlYXRlUHJvamVjdERpc3BsYXksXG4gICAgYWRkVG9Qcm9qZWN0TGlzdCxcbiAgICBjbGVhck1haW4sXG4gICAgdGFza0Zvcm0sXG4gICAgcHJvamVjdEZvcm0sXG4gICAgY2xlYXJTaWRlYmFyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgRE9NdXBkYXRlIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW5kZXJNYWluLCByZW5kZXJTaWRlYmFyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcblxuY29uc3QgdGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RUaXRsZSkgPT4ge1xuICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0VGl0bGUsXG4gICAgc3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBbXTtcbiAgbGV0IHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICBwcm9qZWN0VGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIHByb2plY3REZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodCkgPT4ge1xuICAgIHRhc2tMaXN0LnB1c2godCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9ICh0KSA9PiB7XG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodCksIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdFRpdGxlLFxuICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICB0YXNrTGlzdCxcbiAgICBjaGFuZ2VUaXRsZSxcbiAgICBjaGFuZ2VEZXNjcmlwdGlvbixcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHApID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHApLCAxKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RUKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSA9PT0gcHJvamVjdFQpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIHsgcHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3QgfTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tEYXRhID0gKHQsIGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gIFByb2plY3RMaXN0LnByb2plY3RzW1Byb2plY3RMaXN0LnByb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpXS5hZGRUYXNrKHQpO1xuICByZW5kZXJNYWluKGN1cnJlbnRQcm9qZWN0KTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tTdGF0dXMgPSAodCkgPT4ge1xuICBjb25zdCBwID0gUHJvamVjdExpc3QuZ2V0UHJvamVjdCh0LnByb2plY3RUaXRsZSk7XG4gIGNvbnN0IHBJID0gUHJvamVjdExpc3QucHJvamVjdHMuaW5kZXhPZihwKTtcbiAgY29uc3QgdEkgPSBwLnRhc2tMaXN0LmluZGV4T2YodCk7XG4gIC8vIGNvbnNvbGUubG9nKFByb2plY3RMaXN0LnByb2plY3RzW3BJXS50YXNrTGlzdFt0SV0pXG4gIFByb2plY3RMaXN0LnByb2plY3RzW3BJXS50YXNrTGlzdFt0SV0uc3RhdHVzID1cbiAgICAhUHJvamVjdExpc3QucHJvamVjdHNbcEldLnRhc2tMaXN0W3RJXS5zdGF0dXM7XG4gIC8vIGNvbnNvbGUubG9nKFByb2plY3RMaXN0LnByb2plY3RzW3BJXS50YXNrTGlzdFt0SV0pXG59O1xuXG5jb25zdCB1cGRhdGVQcm9qZWN0RGF0YSA9IChwKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHAudGl0bGUsIHAuZGVzY3JpcHRpb24pO1xuICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhQcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gIHJlbmRlclNpZGViYXIoUHJvamVjdExpc3QpO1xufTtcblxuZXhwb3J0IHtcbiAgdGFzayxcbiAgcHJvamVjdCxcbiAgcHJvamVjdExpc3QsXG4gIHVwZGF0ZVRhc2tEYXRhLFxuICB1cGRhdGVQcm9qZWN0RGF0YSxcbiAgdXBkYXRlVGFza1N0YXR1cyxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IHRhc2ssIHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5pbXBvcnQge1xuICByZW5kZXJNYWluLFxuICByZW5kZXJTaWRlYmFyLFxuICBnZXRUYXNrSW5wdXQsXG4gIGdldFByb2plY3RJbnB1dCxcbn0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcblxuY29uc3QgUHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdCgpO1xuY29uc3QgUHJvamVjdDEgPSBwcm9qZWN0KFwiRGVmYXVsdFwiLCBcImRlZmF1bHQgcHJvamVjdFwiKTtcbmNvbnN0IHRhc2sxID0gdGFzayhcInRhc2sxXCIsIFwiMjAyMy0wMy0xOFwiLCBcImhpZ2hcIiwgUHJvamVjdDEucHJvamVjdFRpdGxlKTtcblByb2plY3QxLmFkZFRhc2sodGFzazEpO1xuXG5Qcm9qZWN0TGlzdC5hZGRQcm9qZWN0KFByb2plY3QxKTtcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gUHJvamVjdDE7XG5yZW5kZXJTaWRlYmFyKFByb2plY3RMaXN0KTtcbnJlbmRlck1haW4oY3VycmVudFByb2plY3QpO1xuXG5jb25zdCBhZGRUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUXCIpO1xuYWRkVC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBnZXRUYXNrSW5wdXQoY3VycmVudFByb2plY3QpO1xufSk7XG5cbmNvbnN0IGFkZFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nLmFkZFBcIik7XG5hZGRQLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGdldFByb2plY3RJbnB1dCgpO1xufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnQocCkge1xuICBjdXJyZW50UHJvamVjdCA9IHA7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdDtcbn1cblxuZXhwb3J0IHsgUHJvamVjdExpc3QsIGNoYW5nZUN1cnJlbnQsIGdldEN1cnJlbnQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IERPTXVwZGF0ZSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgUHJvamVjdExpc3QsIGNoYW5nZUN1cnJlbnQsIGdldEN1cnJlbnQgfSBmcm9tIFwiLlwiO1xuXG5jb25zdCByZW5kZXJNYWluID0gKHApID0+IHtcbiAgRE9NdXBkYXRlLmNsZWFyTWFpbigpO1xuICBET011cGRhdGUuVGl0bGVEaXNwbGF5KHAucHJvamVjdFRpdGxlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBET011cGRhdGUuY3JlYXRlVGFza0Rpc3BsYXkocC50YXNrTGlzdFtpXSk7XG4gICAgRE9NdXBkYXRlLmFkZFRvVGFza0xpc3QodGFza0VsZW1lbnQpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaWRlYmFyID0gKHByb2plY3RMaXN0KSA9PiB7XG4gIERPTXVwZGF0ZS5jbGVhclNpZGViYXIoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gRE9NdXBkYXRlLmNyZWF0ZVByb2plY3REaXNwbGF5KFxuICAgICAgcHJvamVjdExpc3QucHJvamVjdHNbaV1cbiAgICApO1xuICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDdXJyZW50KFByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQpKTtcbiAgICAgIHJlbmRlck1haW4oZ2V0Q3VycmVudCgpKTtcbiAgICB9KTtcbiAgICBET011cGRhdGUuYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0RWxlbWVudCk7XG4gIH1cbn07XG5cbmNvbnN0IGdldFRhc2tJbnB1dCA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xuICBET011cGRhdGUudGFza0Zvcm0oY3VycmVudFByb2plY3QpO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBET011cGRhdGUucHJvamVjdEZvcm0oKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlck1haW4sIHJlbmRlclNpZGViYXIsIGdldFRhc2tJbnB1dCwgZ2V0UHJvamVjdElucHV0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9