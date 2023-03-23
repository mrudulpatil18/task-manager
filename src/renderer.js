/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import { DOMupdate } from "./dom";
import { ProjectList, changeCurrent, getCurrent } from ".";

const renderMain = (p) => {
  DOMupdate.clearMain();
  DOMupdate.TitleDisplay(p.projectTitle);
  for (let i = 0; i < p.taskList.length; i++) {
    const taskElement = DOMupdate.createTaskDisplay(p.taskList[i]);
    DOMupdate.addToTaskList(taskElement);
  }
};

const renderSidebar = (projectList) => {
  DOMupdate.clearSidebar();
  for (let i = 0; i < projectList.projects.length; i++) {
    const projectElement = DOMupdate.createProjectDisplay(
      projectList.projects[i]
    );
    projectElement.addEventListener("click", () => {
      changeCurrent(ProjectList.getProject(projectElement.textContent));
      renderMain(getCurrent());
    });
    DOMupdate.addToProjectList(projectElement);
  }
};

const getTaskInput = (currentProject) => {
  DOMupdate.taskForm(currentProject);
};

const getProjectInput = () => {
  DOMupdate.projectForm();
};

export { renderMain, renderSidebar, getTaskInput, getProjectInput };
