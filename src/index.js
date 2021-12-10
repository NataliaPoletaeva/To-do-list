import './style.css';
import { taskForm, addTask, check } from './taskInfo.js';
import clearAll from './clear-all.js';
import { save, render } from './localStorage.js';

window.addEventListener('DOMContentLoaded', () => {
  save();
  render();
});

taskForm.addEventListener('submit', addTask);

const unorderedList = document.querySelector('[data-todos]');
unorderedList.addEventListener('change', check);

const removeAll = document.querySelector('.clear');
removeAll.addEventListener('click', clearAll);