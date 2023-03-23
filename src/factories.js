/* eslint-disable import/no-cycle */
import ProjectList from ".";
import { renderMain, renderSidebar } from "./renderer";

const task = (title, dueDate, priority, projectTitle) => {
  const status = false;
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
  return {projects, addProject, removeProject };
};


const updateTaskData = (t, currentProject) =>{

  ProjectList.projects[ProjectList.projects.indexOf(currentProject)].addTask(t);
  renderMain(currentProject)
}

const updateProjectData = (p) =>{
  const newProject = project(p.title, p.description)
  ProjectList.addProject(newProject);
  console.log(ProjectList.projects)
  renderSidebar(ProjectList);
}
export { task, project, projectList, updateTaskData, updateProjectData};


