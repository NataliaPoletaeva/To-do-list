import {
  localTasks, taskInput, save, createTask,
} from './crud.js';
import render from './render.js';

const addTask = (event) => {
  event.preventDefault();
  const taskName = taskInput.value;
  if (taskName == null || taskName === '') return;
  const task = createTask();
  localTasks.push(task);
  taskInput.value = '';
  save();
  render();
};

export default addTask;