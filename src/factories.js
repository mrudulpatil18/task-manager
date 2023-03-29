/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import { ProjectList, saveProjectList } from ".";
import { renderMain, renderSidebar } from "./renderer";

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
  ProjectList.projects[ProjectList.projects.indexOf(currentProject)].addTask(t);
  renderMain(currentProject);
  saveProjectList(ProjectList);
};

const updateTaskStatus = (t) => {
  const p = ProjectList.getProject(t.projectTitle);
  const pI = ProjectList.projects.indexOf(p);
  const tI = p.taskList.indexOf(t);
  // console.log(ProjectList.projects[pI].taskList[tI])
  ProjectList.projects[pI].taskList[tI].status =
    !ProjectList.projects[pI].taskList[tI].status;
  // console.log(ProjectList.projects[pI].taskList[tI])
  saveProjectList(ProjectList);
};

const updateProjectData = (p) => {
  const newProject = project(p.title, p.description);
  ProjectList.addProject(newProject);
  console.log(ProjectList.projects);
  saveProjectList(ProjectList);
  renderSidebar(ProjectList);
};

export {
  task,
  project,
  projectList,
  updateTaskData,
  updateProjectData,
  updateTaskStatus,
  fromJSON
};
