/**
 * @jest-environment jsdom
 */

import { addTaskItem, saveLocalStorage, retrieveLocalStorage } from './storeTask.js';
import removeTask from './removeTask.js';

describe('tasks module', () => {
  test('add one task', () => {
    const taskDescription = 'Task1';
    const todoTasks = {
      index: 1,
      description: taskDescription,
      completed: false,
    };
    const tasks = addTaskItem(todoTasks);
    expect(tasks).toHaveLength(1);
  });
  test('remove task', () => {
    document.body.innerHTML = `
      <ul id="todo-list">
        <li class="task-item" id="1">Task1</li>
        <li class="task-item" id="2">Task2</li>
        <li class="task-item" id="3">Task3</li>
      </ul>
    `;
    const listItems = document.querySelectorAll('.task-item');
    const taskId = listItems[1].id;
    removeTask(taskId);
    const newListItems = document.querySelectorAll('#todo-list .task-item');
    expect(newListItems).toHaveLength(2);
  });
});