import { deleteCompleted, handleCompleted } from './handleCompleted.js';
import { saveLocalStorage, updateTask } from './storeTask.js';
// import handleCompleted from './handleCompleted.js';

describe('Update task complete status and description', () => {
  const mockObj = [
    { index: 1, description: 'task1', complete: false },
    { index: 2, description: 'task2', complete: false },
    { index: 3, description: 'task3', complete: false },
    { index: 4, description: 'task4', complete: false },
  ];
  saveLocalStorage('data', JSON.stringify(mockObj));
  test('Update task description', () => {
    document.body.innerHTML = `
    <ul id="todo-list">
      <li class="task" id="1">
        <input type="text" class="task-description" value="task1">
      </li>
      <li class="task" id="2">
        <input type="text" class="task-description" value="task2">
      </li>
      <li class="task" id="3">
        <input type="text" class="task-description" value="task3">
      </li>
    </ul>
    `;
    const inputFields = document.querySelectorAll('.task-description');
    const newTaskDescription = 'new task description';
    inputFields[1].value = newTaskDescription;
    const updatedDescription = updateTask(2, newTaskDescription);
    expect(updatedDescription).toMatch(inputFields[1].value);
  });
  test('Update task completed status to true', () => {
    document.body.innerHTML = `
      <ul id="todo-list">
        <li class="task" id="1">
          <input type="checkbox" id="check1">
        </li>
        <li class="task" id="2">
          <input type="checkbox" id="check2">
        </li>
        <li class="task" id="3">
          <input type="checkbox" id="check3">
        </li>
      </ul>
    `;
    const checkBox = document.querySelectorAll('.task input');
    handleCompleted(1);
    mockObj[0].complete = true;
    expect(checkBox[0].checked).toBe(true);
  });
});
describe('clear completed tasks', () => {
  const mockObj = [
    { index: 1, description: 'task1', complete: true },
    { index: 2, description: 'task2', complete: true },
    { index: 3, description: 'task3', complete: false },
    { index: 4, description: 'task3', complete: false },
  ];
  saveLocalStorage('data', JSON.stringify(mockObj));
  test('delete 2 completed tasks from 4 tasks', () => {
    document.body.innerHTML = `
      <ul id="todo-list">
        <li class="task-item" id="1">Task1</li>
        <li class="task-item" id="2">Task2</li>
        <li class="task-item" id="3">Task3</li>
        <li class="task-item" id="4">Task4</li>
      </ul>
    `;
    deleteCompleted();
    const listItems = document.querySelectorAll('#todo-list .task-item');
    expect(listItems).toHaveLength(2);
  });
});