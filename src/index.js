import './style.css';
import {
  taskForm, addTask, save, render, check,
} from './taskInfo.js';

window.addEventListener('DOMContentLoaded', () => {
  save();
  render();
});

taskForm.addEventListener('submit', addTask);

const unorderedList = document.querySelector('[data-todos]');
unorderedList.addEventListener('change', check);