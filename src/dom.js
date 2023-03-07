// import { task, project, projectList } from "./factories";

const DOMupdate = (() => {
  const TitleDisplay = (title) => {
    const TITLE = document.querySelector("h2.title");
    TITLE.textContent = title;
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
    projectName.textContent = t.projectName;
    projectName.classList.add("due");

    const priority = document.createElement("div");
    if (t.priority == 0) {
      priority.style.backgroundColor = "green";
    } else if (t.priority == 1) {
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
  };

  const addToTaskList = (taskElement) => {
    const taskList = document.querySelector(".taskList");
    taskList.appendChild(taskElement);
  };

  const createProjectDisplay = (project)=>{
    const name = document.createElement("div");
    name.textContent = project.title;
    name.classList.add("name");
  }

  const addToProjectList = (projectElement) => {
    const projectList = document.querySelector(".projectList");
    projectList.appendChild(projectElement);
  };

})();

export default DOMupdate;
