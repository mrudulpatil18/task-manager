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
    status.classList.add("name");
    status.addEventListener("click", () => {
      (0,_factories__WEBPACK_IMPORTED_MODULE_0__.updateTaskStatus)(t);
    });

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
addT.addEventListener("click", () => {
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.getTaskInput)(currentProject);
});

const addP = document.querySelector(".addP");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ2tDO0FBQ3lCOztBQUUzRDtBQUNBLEVBQUUscURBQW1CO0FBQ3JCLEVBQUUsd0RBQXNCO0FBQ3hCLGtCQUFrQix1QkFBdUI7QUFDekMsd0JBQXdCLDZEQUEyQjtBQUNuRCxJQUFJLHlEQUF1QjtBQUMzQjtBQUNBOztBQUVBO0FBQ0EsRUFBRSx3REFBc0I7QUFDeEIsa0JBQWtCLGlDQUFpQztBQUNuRCwyQkFBMkIsZ0VBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQWEsQ0FBQyxxREFBc0I7QUFDMUMsaUJBQWlCLDZDQUFVO0FBQzNCLEtBQUs7QUFDTCxJQUFJLDREQUEwQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsRUFBRSxvREFBa0I7QUFDcEI7O0FBRUE7QUFDQSxFQUFFLHVEQUFxQjtBQUN2Qjs7QUFFb0U7Ozs7Ozs7VUNwQ3BFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHtcbiAgdXBkYXRlVGFza0RhdGEsXG4gIHVwZGF0ZVByb2plY3REYXRhLFxuICB1cGRhdGVUYXNrU3RhdHVzLFxufSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcblxuY29uc3QgRE9NdXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgVGl0bGVEaXNwbGF5ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgVElUTEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gLnRpdGxlXCIpO1xuICAgIFRJVExFLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdGxpc3RcIik7XG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrRGlzcGxheSA9ICh0KSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHQudGl0bGU7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcblxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlLnRleHRDb250ZW50ID0gdC5kdWVEYXRlO1xuICAgIGR1ZS5jbGFzc0xpc3QuYWRkKFwiZHVlXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdC5wcm9qZWN0VGl0bGU7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcImR1ZVwiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZiAodC5wcmlvcml0eSA9PT0gMCkge1xuICAgICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgIH0gZWxzZSBpZiAodC5wcmlvcml0eSA9PT0gMSkge1xuICAgICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN0YXR1cy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgc3RhdHVzLmNoZWNrZWQgPSB0LnN0YXR1cztcbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgc3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGRhdGVUYXNrU3RhdHVzKHQpO1xuICAgIH0pO1xuXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9UYXNrTGlzdCA9ICh0YXNrRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdERpc3BsYXkgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9Qcm9qZWN0TGlzdCA9IChwcm9qZWN0RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgdGFza0Zvcm0gPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgICBjb25zdCBmb3JtRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtRS5pbm5lckhUTUwgPSBgPGZvcm0+XG4gICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCI+PGJyPjxicj5cblxuICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPjxicj48YnI+XG5cbiAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+PGJyPjxicj5cblxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgPC9mb3JtPmA7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgcHJvamVjdFRpdGxlIH0gPSBjdXJyZW50UHJvamVjdDtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBUaXRsZTogJHt0aXRsZX0sIER1ZSBEYXRlOiAke2R1ZURhdGV9LCBQcmlvcml0eTogJHtwcmlvcml0eX0sICR7cHJvamVjdFRpdGxlfWBcbiAgICAgICk7XG4gICAgICBmb3JtRS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgdCA9IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGUgfTtcbiAgICAgIHVwZGF0ZVRhc2tEYXRhKHQsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgZm9ybUUuaW5uZXJIVE1MID0gYDxmb3JtPlxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjxicj48YnI+XG5cbiAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIj48YnI+PGJyPlxuXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICA8L2Zvcm0+YDtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgIGZvcm1FLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBwID0geyB0aXRsZSwgZGVzY3JpcHRpb24gfTtcbiAgICAgIHVwZGF0ZVByb2plY3REYXRhKHApO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFRpdGxlRGlzcGxheSxcbiAgICBjcmVhdGVUYXNrRGlzcGxheSxcbiAgICBhZGRUb1Rhc2tMaXN0LFxuICAgIGNyZWF0ZVByb2plY3REaXNwbGF5LFxuICAgIGFkZFRvUHJvamVjdExpc3QsXG4gICAgY2xlYXJNYWluLFxuICAgIHRhc2tGb3JtLFxuICAgIHByb2plY3RGb3JtLFxuICAgIGNsZWFyU2lkZWJhcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IERPTXVwZGF0ZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcmVuZGVyTWFpbiwgcmVuZGVyU2lkZWJhciB9IGZyb20gXCIuL3JlbmRlcmVyXCI7XG5cbmNvbnN0IHRhc2sgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGUpID0+IHtcbiAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdFRpdGxlLFxuICAgIHN0YXR1cyxcbiAgfTtcbn07XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gW107XG4gIGxldCBwcm9qZWN0VGl0bGUgPSB0aXRsZTtcbiAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGNoYW5nZVRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgcHJvamVjdFRpdGxlID0gbmV3VGl0bGU7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHQpID0+IHtcbiAgICB0YXNrTGlzdC5wdXNoKHQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAodCkgPT4ge1xuICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHQpLCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RUaXRsZSxcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgdGFza0xpc3QsXG4gICAgY2hhbmdlVGl0bGUsXG4gICAgY2hhbmdlRGVzY3JpcHRpb24sXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChwKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHApID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwKSwgMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0VCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS5wcm9qZWN0VGl0bGUgPT09IHByb2plY3RUKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIHJldHVybiB7IHByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRQcm9qZWN0IH07XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrRGF0YSA9ICh0LCBjdXJyZW50UHJvamVjdCkgPT4ge1xuICBQcm9qZWN0TGlzdC5wcm9qZWN0c1tQcm9qZWN0TGlzdC5wcm9qZWN0cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0uYWRkVGFzayh0KTtcbiAgcmVuZGVyTWFpbihjdXJyZW50UHJvamVjdCk7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrU3RhdHVzID0gKHQpID0+IHtcbiAgY29uc3QgcCA9IFByb2plY3RMaXN0LmdldFByb2plY3QodC5wcm9qZWN0VGl0bGUpO1xuICBjb25zdCBwSSA9IFByb2plY3RMaXN0LnByb2plY3RzLmluZGV4T2YocCk7XG4gIGNvbnN0IHRJID0gcC50YXNrTGlzdC5pbmRleE9mKHQpO1xuICAvLyBjb25zb2xlLmxvZyhQcm9qZWN0TGlzdC5wcm9qZWN0c1twSV0udGFza0xpc3RbdEldKVxuICBQcm9qZWN0TGlzdC5wcm9qZWN0c1twSV0udGFza0xpc3RbdEldLnN0YXR1cyA9XG4gICAgIVByb2plY3RMaXN0LnByb2plY3RzW3BJXS50YXNrTGlzdFt0SV0uc3RhdHVzO1xuICAvLyBjb25zb2xlLmxvZyhQcm9qZWN0TGlzdC5wcm9qZWN0c1twSV0udGFza0xpc3RbdEldKVxufTtcblxuY29uc3QgdXBkYXRlUHJvamVjdERhdGEgPSAocCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwLnRpdGxlLCBwLmRlc2NyaXB0aW9uKTtcbiAgUHJvamVjdExpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coUHJvamVjdExpc3QucHJvamVjdHMpO1xuICByZW5kZXJTaWRlYmFyKFByb2plY3RMaXN0KTtcbn07XG5cbmV4cG9ydCB7XG4gIHRhc2ssXG4gIHByb2plY3QsXG4gIHByb2plY3RMaXN0LFxuICB1cGRhdGVUYXNrRGF0YSxcbiAgdXBkYXRlUHJvamVjdERhdGEsXG4gIHVwZGF0ZVRhc2tTdGF0dXMsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyB0YXNrLCBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IHtcbiAgcmVuZGVyTWFpbixcbiAgcmVuZGVyU2lkZWJhcixcbiAgZ2V0VGFza0lucHV0LFxuICBnZXRQcm9qZWN0SW5wdXQsXG59IGZyb20gXCIuL3JlbmRlcmVyXCI7XG5cbmNvbnN0IFByb2plY3RMaXN0ID0gcHJvamVjdExpc3QoKTtcbmNvbnN0IFByb2plY3QxID0gcHJvamVjdChcIlAxXCIsIFwidGVzdGluZ1wiKTtcbmNvbnN0IHRhc2sxMSA9IHRhc2soXCJ0MVwiLCBcIjIwMjMtMDMtMThcIiwgXCJoaWdoXCIsIFByb2plY3QxLnByb2plY3RUaXRsZSk7XG5jb25zdCB0YXNrMTIgPSB0YXNrKFwidDJcIiwgXCIyMDIzLTAzLTE4XCIsIFwiaGlnaFwiLCBQcm9qZWN0MS5wcm9qZWN0VGl0bGUpO1xuUHJvamVjdDEuYWRkVGFzayh0YXNrMTEpO1xuUHJvamVjdDEuYWRkVGFzayh0YXNrMTIpO1xuXG5jb25zdCBQcm9qZWN0MiA9IHByb2plY3QoXCJQMlwiLCBcInRlc3RpbmdcIik7XG5jb25zdCB0YXNrMjEgPSB0YXNrKFwidDIxXCIsIFwiMjAyMy0wMy0xOFwiLCBcImhpZ2hcIiwgUHJvamVjdDIucHJvamVjdFRpdGxlKTtcbmNvbnN0IHRhc2syMiA9IHRhc2soXCJ0MjJcIiwgXCIyMDIzLTAzLTE4XCIsIFwiaGlnaFwiLCBQcm9qZWN0Mi5wcm9qZWN0VGl0bGUpO1xuUHJvamVjdDIuYWRkVGFzayh0YXNrMjEpO1xuUHJvamVjdDIuYWRkVGFzayh0YXNrMjIpO1xuXG5Qcm9qZWN0TGlzdC5hZGRQcm9qZWN0KFByb2plY3QxKTtcblByb2plY3RMaXN0LmFkZFByb2plY3QoUHJvamVjdDIpO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSBQcm9qZWN0MjtcbnJlbmRlclNpZGViYXIoUHJvamVjdExpc3QpO1xucmVuZGVyTWFpbihjdXJyZW50UHJvamVjdCk7XG5cbmNvbnN0IGFkZFQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRcIik7XG5hZGRULmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGdldFRhc2tJbnB1dChjdXJyZW50UHJvamVjdCk7XG59KTtcblxuY29uc3QgYWRkUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUFwiKTtcbmFkZFAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2V0UHJvamVjdElucHV0KCk7XG59KTtcblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudChwKSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcDtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xufVxuXG5leHBvcnQgeyBQcm9qZWN0TGlzdCwgY2hhbmdlQ3VycmVudCwgZ2V0Q3VycmVudCB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgRE9NdXBkYXRlIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCwgY2hhbmdlQ3VycmVudCwgZ2V0Q3VycmVudCB9IGZyb20gXCIuXCI7XG5cbmNvbnN0IHJlbmRlck1haW4gPSAocCkgPT4ge1xuICBET011cGRhdGUuY2xlYXJNYWluKCk7XG4gIERPTXVwZGF0ZS5UaXRsZURpc3BsYXkocC5wcm9qZWN0VGl0bGUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IERPTXVwZGF0ZS5jcmVhdGVUYXNrRGlzcGxheShwLnRhc2tMaXN0W2ldKTtcbiAgICBET011cGRhdGUuYWRkVG9UYXNrTGlzdCh0YXNrRWxlbWVudCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclNpZGViYXIgPSAocHJvamVjdExpc3QpID0+IHtcbiAgRE9NdXBkYXRlLmNsZWFyU2lkZWJhcigpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBET011cGRhdGUuY3JlYXRlUHJvamVjdERpc3BsYXkoXG4gICAgICBwcm9qZWN0TGlzdC5wcm9qZWN0c1tpXVxuICAgICk7XG4gICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNoYW5nZUN1cnJlbnQoUHJvamVjdExpc3QuZ2V0UHJvamVjdChwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCkpO1xuICAgICAgcmVuZGVyTWFpbihnZXRDdXJyZW50KCkpO1xuICAgIH0pO1xuICAgIERPTXVwZGF0ZS5hZGRUb1Byb2plY3RMaXN0KHByb2plY3RFbGVtZW50KTtcbiAgfVxufTtcblxuY29uc3QgZ2V0VGFza0lucHV0ID0gKGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gIERPTXVwZGF0ZS50YXNrRm9ybShjdXJyZW50UHJvamVjdCk7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gIERPTXVwZGF0ZS5wcm9qZWN0Rm9ybSgpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyTWFpbiwgcmVuZGVyU2lkZWJhciwgZ2V0VGFza0lucHV0LCBnZXRQcm9qZWN0SW5wdXQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=