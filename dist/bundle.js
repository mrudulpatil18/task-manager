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
/* harmony export */   "fromJSON": () => (/* binding */ fromJSON),
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

  const toJSON = () => JSON.stringify({ projects });

 

  return { projects, addProject, removeProject, getProject, toJSON };
};

const fromJSON = (json) => {
  const newProjectList = projectList();
  json.projects.forEach((p) => {
    const newProject = project(p.projectTitle, p.projectDescription);
    p.taskList.forEach((t) => {
      newProject.addTask(
        task(t.title, t.dueDate, t.priority, newProject.projectTitle)
      );
    });
    newProjectList.addProject(newProject);
  });
  return newProjectList;
};

const updateTaskData = (t, currentProject) => {
  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects.indexOf(currentProject)].addTask(t);
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderMain)(currentProject);
  (0,___WEBPACK_IMPORTED_MODULE_0__.saveProjectList)(___WEBPACK_IMPORTED_MODULE_0__.ProjectList);
};

const updateTaskStatus = (t) => {
  const p = ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.getProject(t.projectTitle);
  const pI = ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects.indexOf(p);
  const tI = p.taskList.indexOf(t);
  // console.log(ProjectList.projects[pI].taskList[tI])
  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[pI].taskList[tI].status =
    !___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects[pI].taskList[tI].status;
  // console.log(ProjectList.projects[pI].taskList[tI])
  (0,___WEBPACK_IMPORTED_MODULE_0__.saveProjectList)(___WEBPACK_IMPORTED_MODULE_0__.ProjectList);
};

const updateProjectData = (p) => {
  const newProject = project(p.title, p.description);
  ___WEBPACK_IMPORTED_MODULE_0__.ProjectList.addProject(newProject);
  console.log(___WEBPACK_IMPORTED_MODULE_0__.ProjectList.projects);
  (0,___WEBPACK_IMPORTED_MODULE_0__.saveProjectList)(___WEBPACK_IMPORTED_MODULE_0__.ProjectList);
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
/* harmony export */   "getCurrent": () => (/* binding */ getCurrent),
/* harmony export */   "saveProjectList": () => (/* binding */ saveProjectList)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./src/renderer.js");
/* eslint-disable import/no-cycle */



let currentProject;
let ProjectList;

const storedList = localStorage.getItem("ProjectList");
console.log(storedList)
if (storedList) {
  try {
    ProjectList = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.fromJSON)(JSON.parse(storedList));
    currentProject = ProjectList.projects[0]; // assuming the first project is the default
  } catch (err) {
    console.error(`Error parsing stored project list: ${err}`);
    // fallback to creating a new ProjectList if there was an error parsing the stored data
    ProjectList = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.projectList)();
    const Project1 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.project)("Default", "default project");
    const task1 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("task1", "2023-03-18", "high", "Default");
    Project1.addTask(task1);

    ProjectList.addProject(Project1);
    currentProject = Project1;
    localStorage.setItem("ProjectList", ProjectList.toJSON());
  }
} else {
  ProjectList = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.projectList)();
  const Project1 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.project)("Default", "default project");
  const task1 = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.task)("task1", "2023-03-18", "high", Project1.title);
  Project1.addTask(task1);

  ProjectList.addProject(Project1);
  currentProject = Project1;
  localStorage.setItem("ProjectList", ProjectList.toJSON());
}

(0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderSidebar)(ProjectList);
(0,_renderer__WEBPACK_IMPORTED_MODULE_1__.renderMain)(currentProject);

function saveProjectList(list) {
  // console.log(list)
  // console.log(list.toJSON())
  localStorage.setItem("ProjectList", list.toJSON());
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQge1xuICB1cGRhdGVUYXNrRGF0YSxcbiAgdXBkYXRlUHJvamVjdERhdGEsXG4gIHVwZGF0ZVRhc2tTdGF0dXMsXG59IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuXG5jb25zdCBET011cGRhdGUgPSAoKCkgPT4ge1xuICBjb25zdCBUaXRsZURpc3BsYXkgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBUSVRMRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiAudGl0bGVcIik7XG4gICAgVElUTEUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgfTtcblxuICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpO1xuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2tEaXNwbGF5ID0gKHQpID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdC50aXRsZTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWUudGV4dENvbnRlbnQgPSB0LmR1ZURhdGU7XG4gICAgZHVlLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0LnByb2plY3RUaXRsZTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiZHVlXCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmICh0LnByaW9yaXR5ID09PSAwKSB7XG4gICAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgfSBlbHNlIGlmICh0LnByaW9yaXR5ID09PSAxKSB7XG4gICAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RhdHVzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBzdGF0dXMuY2hlY2tlZCA9IHQuc3RhdHVzO1xuICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKFwic3RhdHVzXCIpO1xuICAgIHN0YXR1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdXBkYXRlVGFza1N0YXR1cyh0KTtcbiAgICB9KTtcblxuICAgXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKGR1ZSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHN0YXR1cyk7XG5cbiAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9UYXNrTGlzdCA9ICh0YXNrRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdERpc3BsYXkgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9Qcm9qZWN0TGlzdCA9IChwcm9qZWN0RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbWVudCk7XG4gIH07XG5cbiAgY29uc3QgdGFza0Zvcm0gPSAoY3VycmVudFByb2plY3QpID0+IHtcbiAgICBjb25zdCBmb3JtRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtRS5pbm5lckhUTUwgPSBgPGZvcm0+XG4gICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCI+PGJyPjxicj5cblxuICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPjxicj48YnI+XG5cbiAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+PGJyPjxicj5cblxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgPC9mb3JtPmA7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgcHJvamVjdFRpdGxlIH0gPSBjdXJyZW50UHJvamVjdDtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBUaXRsZTogJHt0aXRsZX0sIER1ZSBEYXRlOiAke2R1ZURhdGV9LCBQcmlvcml0eTogJHtwcmlvcml0eX0sICR7cHJvamVjdFRpdGxlfWBcbiAgICAgICk7XG4gICAgICBmb3JtRS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3QgdCA9IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGUgfTtcbiAgICAgIHVwZGF0ZVRhc2tEYXRhKHQsIGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgZm9ybUUuaW5uZXJIVE1MID0gYDxmb3JtPlxuICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjxicj48YnI+XG5cbiAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIj48YnI+PGJyPlxuXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICA8L2Zvcm0+YDtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgIGZvcm1FLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBwID0geyB0aXRsZSwgZGVzY3JpcHRpb24gfTtcbiAgICAgIHVwZGF0ZVByb2plY3REYXRhKHApO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIFRpdGxlRGlzcGxheSxcbiAgICBjcmVhdGVUYXNrRGlzcGxheSxcbiAgICBhZGRUb1Rhc2tMaXN0LFxuICAgIGNyZWF0ZVByb2plY3REaXNwbGF5LFxuICAgIGFkZFRvUHJvamVjdExpc3QsXG4gICAgY2xlYXJNYWluLFxuICAgIHRhc2tGb3JtLFxuICAgIHByb2plY3RGb3JtLFxuICAgIGNsZWFyU2lkZWJhcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IERPTXVwZGF0ZSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHsgUHJvamVjdExpc3QsIHNhdmVQcm9qZWN0TGlzdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW5kZXJNYWluLCByZW5kZXJTaWRlYmFyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcblxuY29uc3QgdGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RUaXRsZSkgPT4ge1xuICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0VGl0bGUsXG4gICAgc3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdGFza0xpc3QgPSBbXTtcbiAgbGV0IHByb2plY3RUaXRsZSA9IHRpdGxlO1xuICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgY2hhbmdlVGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICBwcm9qZWN0VGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIHByb2plY3REZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAodCkgPT4ge1xuICAgIHRhc2tMaXN0LnB1c2godCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9ICh0KSA9PiB7XG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodCksIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdFRpdGxlLFxuICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICB0YXNrTGlzdCxcbiAgICBjaGFuZ2VUaXRsZSxcbiAgICBjaGFuZ2VEZXNjcmlwdGlvbixcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHApID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHApO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHApLCAxKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RUKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnByb2plY3RUaXRsZSA9PT0gcHJvamVjdFQpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCB0b0pTT04gPSAoKSA9PiBKU09OLnN0cmluZ2lmeSh7IHByb2plY3RzIH0pO1xuXG4gXG5cbiAgcmV0dXJuIHsgcHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3QsIHRvSlNPTiB9O1xufTtcblxuY29uc3QgZnJvbUpTT04gPSAoanNvbikgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0KCk7XG4gIGpzb24ucHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHAucHJvamVjdFRpdGxlLCBwLnByb2plY3REZXNjcmlwdGlvbik7XG4gICAgcC50YXNrTGlzdC5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICBuZXdQcm9qZWN0LmFkZFRhc2soXG4gICAgICAgIHRhc2sodC50aXRsZSwgdC5kdWVEYXRlLCB0LnByaW9yaXR5LCBuZXdQcm9qZWN0LnByb2plY3RUaXRsZSlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgbmV3UHJvamVjdExpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgfSk7XG4gIHJldHVybiBuZXdQcm9qZWN0TGlzdDtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tEYXRhID0gKHQsIGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gIFByb2plY3RMaXN0LnByb2plY3RzW1Byb2plY3RMaXN0LnByb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpXS5hZGRUYXNrKHQpO1xuICByZW5kZXJNYWluKGN1cnJlbnRQcm9qZWN0KTtcbiAgc2F2ZVByb2plY3RMaXN0KFByb2plY3RMaXN0KTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2tTdGF0dXMgPSAodCkgPT4ge1xuICBjb25zdCBwID0gUHJvamVjdExpc3QuZ2V0UHJvamVjdCh0LnByb2plY3RUaXRsZSk7XG4gIGNvbnN0IHBJID0gUHJvamVjdExpc3QucHJvamVjdHMuaW5kZXhPZihwKTtcbiAgY29uc3QgdEkgPSBwLnRhc2tMaXN0LmluZGV4T2YodCk7XG4gIC8vIGNvbnNvbGUubG9nKFByb2plY3RMaXN0LnByb2plY3RzW3BJXS50YXNrTGlzdFt0SV0pXG4gIFByb2plY3RMaXN0LnByb2plY3RzW3BJXS50YXNrTGlzdFt0SV0uc3RhdHVzID1cbiAgICAhUHJvamVjdExpc3QucHJvamVjdHNbcEldLnRhc2tMaXN0W3RJXS5zdGF0dXM7XG4gIC8vIGNvbnNvbGUubG9nKFByb2plY3RMaXN0LnByb2plY3RzW3BJXS50YXNrTGlzdFt0SV0pXG4gIHNhdmVQcm9qZWN0TGlzdChQcm9qZWN0TGlzdCk7XG59O1xuXG5jb25zdCB1cGRhdGVQcm9qZWN0RGF0YSA9IChwKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHAudGl0bGUsIHAuZGVzY3JpcHRpb24pO1xuICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhQcm9qZWN0TGlzdC5wcm9qZWN0cyk7XG4gIHNhdmVQcm9qZWN0TGlzdChQcm9qZWN0TGlzdCk7XG4gIHJlbmRlclNpZGViYXIoUHJvamVjdExpc3QpO1xufTtcblxuZXhwb3J0IHtcbiAgdGFzayxcbiAgcHJvamVjdCxcbiAgcHJvamVjdExpc3QsXG4gIHVwZGF0ZVRhc2tEYXRhLFxuICB1cGRhdGVQcm9qZWN0RGF0YSxcbiAgdXBkYXRlVGFza1N0YXR1cyxcbiAgZnJvbUpTT05cbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCB7IHRhc2ssIHByb2plY3QsIHByb2plY3RMaXN0LCBmcm9tSlNPTiB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IHtcbiAgcmVuZGVyTWFpbixcbiAgcmVuZGVyU2lkZWJhcixcbiAgZ2V0VGFza0lucHV0LFxuICBnZXRQcm9qZWN0SW5wdXQsXG59IGZyb20gXCIuL3JlbmRlcmVyXCI7XG5cbmxldCBjdXJyZW50UHJvamVjdDtcbmxldCBQcm9qZWN0TGlzdDtcblxuY29uc3Qgc3RvcmVkTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdExpc3RcIik7XG5jb25zb2xlLmxvZyhzdG9yZWRMaXN0KVxuaWYgKHN0b3JlZExpc3QpIHtcbiAgdHJ5IHtcbiAgICBQcm9qZWN0TGlzdCA9IGZyb21KU09OKEpTT04ucGFyc2Uoc3RvcmVkTGlzdCkpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gUHJvamVjdExpc3QucHJvamVjdHNbMF07IC8vIGFzc3VtaW5nIHRoZSBmaXJzdCBwcm9qZWN0IGlzIHRoZSBkZWZhdWx0XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgc3RvcmVkIHByb2plY3QgbGlzdDogJHtlcnJ9YCk7XG4gICAgLy8gZmFsbGJhY2sgdG8gY3JlYXRpbmcgYSBuZXcgUHJvamVjdExpc3QgaWYgdGhlcmUgd2FzIGFuIGVycm9yIHBhcnNpbmcgdGhlIHN0b3JlZCBkYXRhXG4gICAgUHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdCgpO1xuICAgIGNvbnN0IFByb2plY3QxID0gcHJvamVjdChcIkRlZmF1bHRcIiwgXCJkZWZhdWx0IHByb2plY3RcIik7XG4gICAgY29uc3QgdGFzazEgPSB0YXNrKFwidGFzazFcIiwgXCIyMDIzLTAzLTE4XCIsIFwiaGlnaFwiLCBcIkRlZmF1bHRcIik7XG4gICAgUHJvamVjdDEuYWRkVGFzayh0YXNrMSk7XG5cbiAgICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KFByb2plY3QxKTtcbiAgICBjdXJyZW50UHJvamVjdCA9IFByb2plY3QxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdExpc3RcIiwgUHJvamVjdExpc3QudG9KU09OKCkpO1xuICB9XG59IGVsc2Uge1xuICBQcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0KCk7XG4gIGNvbnN0IFByb2plY3QxID0gcHJvamVjdChcIkRlZmF1bHRcIiwgXCJkZWZhdWx0IHByb2plY3RcIik7XG4gIGNvbnN0IHRhc2sxID0gdGFzayhcInRhc2sxXCIsIFwiMjAyMy0wMy0xOFwiLCBcImhpZ2hcIiwgUHJvamVjdDEudGl0bGUpO1xuICBQcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcblxuICBQcm9qZWN0TGlzdC5hZGRQcm9qZWN0KFByb2plY3QxKTtcbiAgY3VycmVudFByb2plY3QgPSBQcm9qZWN0MTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0TGlzdFwiLCBQcm9qZWN0TGlzdC50b0pTT04oKSk7XG59XG5cbnJlbmRlclNpZGViYXIoUHJvamVjdExpc3QpO1xucmVuZGVyTWFpbihjdXJyZW50UHJvamVjdCk7XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0TGlzdChsaXN0KSB7XG4gIC8vIGNvbnNvbGUubG9nKGxpc3QpXG4gIC8vIGNvbnNvbGUubG9nKGxpc3QudG9KU09OKCkpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdExpc3RcIiwgbGlzdC50b0pTT04oKSk7XG59XG5cblxuY29uc3QgYWRkVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVFwiKTtcbmFkZFQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZ2V0VGFza0lucHV0KGN1cnJlbnRQcm9qZWN0KTtcbn0pO1xuXG5jb25zdCBhZGRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZy5hZGRQXCIpO1xuYWRkUC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBnZXRQcm9qZWN0SW5wdXQoKTtcbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50KHApIHtcbiAgY3VycmVudFByb2plY3QgPSBwO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICByZXR1cm4gY3VycmVudFByb2plY3Q7XG59XG5cbmV4cG9ydCB7IFByb2plY3RMaXN0LCBjaGFuZ2VDdXJyZW50LCBnZXRDdXJyZW50LCBzYXZlUHJvamVjdExpc3QgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IERPTXVwZGF0ZSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgUHJvamVjdExpc3QsIGNoYW5nZUN1cnJlbnQsIGdldEN1cnJlbnQgfSBmcm9tIFwiLlwiO1xuXG5jb25zdCByZW5kZXJNYWluID0gKHApID0+IHtcbiAgRE9NdXBkYXRlLmNsZWFyTWFpbigpO1xuICBET011cGRhdGUuVGl0bGVEaXNwbGF5KHAucHJvamVjdFRpdGxlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBET011cGRhdGUuY3JlYXRlVGFza0Rpc3BsYXkocC50YXNrTGlzdFtpXSk7XG4gICAgRE9NdXBkYXRlLmFkZFRvVGFza0xpc3QodGFza0VsZW1lbnQpO1xuICB9XG59O1xuXG5jb25zdCByZW5kZXJTaWRlYmFyID0gKHByb2plY3RMaXN0KSA9PiB7XG4gIERPTXVwZGF0ZS5jbGVhclNpZGViYXIoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gRE9NdXBkYXRlLmNyZWF0ZVByb2plY3REaXNwbGF5KFxuICAgICAgcHJvamVjdExpc3QucHJvamVjdHNbaV1cbiAgICApO1xuICAgIHByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDdXJyZW50KFByb2plY3RMaXN0LmdldFByb2plY3QocHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQpKTtcbiAgICAgIHJlbmRlck1haW4oZ2V0Q3VycmVudCgpKTtcbiAgICB9KTtcbiAgICBET011cGRhdGUuYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0RWxlbWVudCk7XG4gIH1cbn07XG5cbmNvbnN0IGdldFRhc2tJbnB1dCA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xuICBET011cGRhdGUudGFza0Zvcm0oY3VycmVudFByb2plY3QpO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBET011cGRhdGUucHJvamVjdEZvcm0oKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlck1haW4sIHJlbmRlclNpZGViYXIsIGdldFRhc2tJbnB1dCwgZ2V0UHJvamVjdElucHV0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9