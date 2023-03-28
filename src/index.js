/* eslint-disable import/no-cycle */
import { task, project, projectList } from "./factories";
import {
  renderMain,
  renderSidebar,
  getTaskInput,
  getProjectInput,
} from "./renderer";

const ProjectList = projectList();
const Project1 = project("Default", "default project");
const task1 = task("task1", "2023-03-18", "high", Project1.projectTitle);
Project1.addTask(task1);

ProjectList.addProject(Project1);

let currentProject = Project1;
renderSidebar(ProjectList);
renderMain(currentProject);

const addT = document.querySelector(".addT");
addT.addEventListener("click", () => {
  getTaskInput(currentProject);
});

const addP = document.querySelector("img.addP");
addP.addEventListener("click", () => {
  getProjectInput();
});

function changeCurrent(p) {
  currentProject = p;
}

function getCurrent() {
  return currentProject;
}

export { ProjectList, changeCurrent, getCurrent };
