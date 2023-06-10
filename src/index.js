import './style.css';
import addTask from './modules/addTask.js';
import {
  addTaskItem, deleteTask, getTask, updateTask,
} from './modules/storeTask.js';
import handleCompleted from './modules/handleCompleted.js';
import refresh from './assets/refresh.png';
import enter from './assets/enter.png';
import removeTask from './modules/removeTask';

const refreshImg = document.getElementById('refreshImg');
const enterImg = document.getElementById('enterImg');

refreshImg.src = refresh;
enterImg.src = enter;

const display = () => {
  const tasks = getTask() || [];
  if (tasks) {
    tasks.map((task) => addTask(task));
  }
};

display();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const tasks = getTask();
  const taskDescription = document.getElementById('task-description').value;
  const todoTasks = {
    index: tasks.length + 1,
    description: taskDescription,
    completed: false,
  };

  if (taskDescription !== '') {
    addTask(todoTasks);
    addTaskItem(todoTasks);
    document.getElementById('form').reset();
  }
});

const textInput = document.querySelectorAll('.edit');

textInput.forEach((task, index) => {
  task.addEventListener('change', (e) => {
    const updateText = e.target.value;
    const tasks = getTask();
    tasks[index].description = updateText;
    updateTask(index, tasks[index].description);
    window.location.reload();
  });
});

textInput.forEach((todo, index) => {
  todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const updateInput = e.target.value;
      const tasks = getTask();
      tasks[index].description = updateInput;
      updateTask(index, tasks[index].description);
      window.location.reload();
    }
  });
});

window.remove = (index) => {
  deleteTask(index);
  removeTask(index);
};

window.completedTask = (index) => {
  handleCompleted(index);
};

document.getElementById('clear-completed').addEventListener('click', () => {
  const tasks = getTask();
  const clearCompleted = tasks.filter((task) => !task.completed);
  clearCompleted.forEach((task, i) => {
    task.index = i;
  });

  localStorage.setItem('data', JSON.stringify(clearCompleted));
  window.location.reload();
=======
};
});