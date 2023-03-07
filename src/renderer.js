
import DOMupdate from "./dom";

const renderMain = (p) => {
  DOMupdate.TitleDisplay(p.projectTitle);
  for (let i = 0; i < p.taskList.length; i++) {
    const taskElement = DOMupdate.createTaskDisplay(p.taskList[i]);
    DOMupdate.addToTaskList(taskElement);
  }
};

const renderSidebar = (projectList) =>{
    for(let i = 0; i < projectList.projects.length; i++){
        const projectElement = DOMupdate.createProjectDisplay(projectList.projects[i]);
        DOMupdate.addToProjectList(projectElement);
    }
}