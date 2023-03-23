/* eslint-disable import/no-cycle */
import {task, project, projectList } from "./factories"
import { renderMain, renderSidebar, getTaskInput, getProjectInput} from "./renderer";


const ProjectList = projectList();
const Project1 = project("P1", "testing");
const task11 = task("t1", "2023-03-18", "high", Project1.projectTitle);
const task12 = task("t2", "2023-03-18", "high", Project1.projectTitle);
Project1.addTask(task11);
Project1.addTask(task12);

const Project2 = project("P2", "testing");
const task21 = task("t21", "2023-03-18", "high", Project2.projectTitle);
const task22 = task("t22", "2023-03-18", "high", Project2.projectTitle);
Project2.addTask(task21);
Project2.addTask(task22);

ProjectList.addProject(Project1);
ProjectList.addProject(Project2);

let currentProject = Project2;
renderSidebar(ProjectList);
renderMain(currentProject);

const addT = document.querySelector(".addT");
addT.addEventListener("click", () =>{
    getTaskInput(currentProject);
})

const addP = document.querySelector(".addP");
addP.addEventListener("click", () =>{
    getProjectInput();
})

function changeCurrent(p) {
    currentProject = p;
}

function getCurrent(){
    return currentProject;
}

export {ProjectList, changeCurrent, getCurrent}