import { save, localTasks } from './crud.js';
import render from './render.js';

const taskForm = document.querySelector('[data-task-form]');

const check = (e) => {
  const checkbox = e.target;
  if (checkbox.tagName.toLowerCase() === 'input') {
    // eslint-disable-next-line eqeqeq
    const selectedTask = localTasks.find((task) => task.id == checkbox.id);
    selectedTask.completed = checkbox.checked;
  }
  save();
  render();
};

export { taskForm, check };