import removeTask from './removeTask.js';
import { getTask, saveLocalStorage } from './storeTask.js';

const handleCompleted = (index) => {
  const completed = document.getElementById(`check${index}`).toggleAttribute('checked');
  const tasks = getTask();

  tasks[(index) - 1].complete = completed;
  localStorage.setItem('data', JSON.stringify(tasks));
};

const deleteCompleted = () => {
  const tasks = getTask();
  tasks.forEach((task) => {
    if (task.complete) {
      removeTask(task.index);
    }
  });
  const completed = tasks.filter((task) => !task.completed);
  saveLocalStorage('data', JSON.stringify(completed));
  window.location.reload();
};

export { handleCompleted, deleteCompleted };