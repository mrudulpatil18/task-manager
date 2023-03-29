/* eslint-disable import/no-cycle */
import { task, project, projectList, fromJSON } from "./factories";
import {
  renderMain,
  renderSidebar,
  getTaskInput,
  getProjectInput,
} from "./renderer";

let currentProject;
let ProjectList;

const storedList = localStorage.getItem("ProjectList");
console.log(storedList)
if (storedList) {
  try {
    ProjectList = fromJSON(JSON.parse(storedList));
    currentProject = ProjectList.projects[0]; // assuming the first project is the default
  } catch (err) {
    console.error(`Error parsing stored project list: ${err}`);
    // fallback to creating a new ProjectList if there was an error parsing the stored data
    ProjectList = projectList();
    const Project1 = project("Default", "default project");
    const task1 = task("task1", "2023-03-18", "high", "Default");
    Project1.addTask(task1);

    ProjectList.addProject(Project1);
    currentProject = Project1;
    localStorage.setItem("ProjectList", ProjectList.toJSON());
  }
} else {
  ProjectList = projectList();
  const Project1 = project("Default", "default project");
  const task1 = task("task1", "2023-03-18", "high", Project1.title);
  Project1.addTask(task1);

  ProjectList.addProject(Project1);
  currentProject = Project1;
  localStorage.setItem("ProjectList", ProjectList.toJSON());
}

renderSidebar(ProjectList);
renderMain(currentProject);

function saveProjectList(list) {
  // console.log(list)
  // console.log(list.toJSON())
  localStorage.setItem("ProjectList", list.toJSON());
}


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

export { ProjectList, changeCurrent, getCurrent, saveProjectList };
