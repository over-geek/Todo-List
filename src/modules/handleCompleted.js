import { getTask } from './storeTask.js';

const handleCompleted = (index) => {
  const completed = document.getElementById(`check${index}`).toggleAttribute('checked');
  const tasks = getTask();

  tasks[(index) - 1].completed = completed;
  localStorage.setItem('data', JSON.stringify(tasks));
};

export default handleCompleted;