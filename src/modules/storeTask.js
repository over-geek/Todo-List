const saveLocalStorage = (key, value) => localStorage.setItem(key, value);

const retrieveLocalStorage = (key) => {
  const data = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  return data;
};

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
  return tasks;
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
  saveLocalStorage('data', JSON.stringify(tasks));
  return task.description;
};

export {
  getTask, addTaskItem, deleteTask, updateTask, saveLocalStorage, retrieveLocalStorage,
};