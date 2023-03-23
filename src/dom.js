/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { updateTaskData, updateProjectData } from "./factories";


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
     updateTaskData(t, currentProject);
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
     updateProjectData(p);
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


export {DOMupdate};
