import { save, render, localTasks } from './localStorage.js';

const taskForm = document.querySelector('[data-task-form]');
const taskInput = document.querySelector('[data-task-input]');

const createTask = () => ({
  id: Date.now().toString(),
  description: taskInput.value,
  completed: false,
});

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

export {
  taskForm, addTask, check,
};