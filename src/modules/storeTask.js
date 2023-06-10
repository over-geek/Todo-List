const getTask = () => {
  let tasks;
  if (localStorage.getItem('data') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('data'));
  }
  return tasks;
};

const addTaskItem = (task) => {
  const tasks = getTask();
  tasks.push(task);
  localStorage.setItem('data', JSON.stringify(tasks));
};

const deleteTask = (index) => {
  const tasks = getTask();
  const deletedTasks = tasks.filter((task) => task.index !== index);
  deletedTasks.forEach((task, i) => {
    task.index = i + 1;
  });
  localStorage.setItem('data', JSON.stringify(deletedTasks));
  window.location.reload();
};

const updateTask = (index, description) => {
  const tasks = getTask();
  const task = tasks.find((taskItem) => taskItem.index === index);
  task.description = description;
  localStorage.setItem('data', JSON.stringify(tasks));
};

export {
  getTask, addTaskItem, deleteTask, updateTask,
};