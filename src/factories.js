const task = (title, description, dueDate, priority, project) => ({
  title,
  description,
  dueDate,
  priority,
  project,
});

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
  return { addProject, removeProject };
};

export { task, project, projectList };
