import './style.css';
import { save } from './crud.js';
import render from './render.js';
import { check, taskForm } from './check.js';
import clearAll from './clear-all.js';
import addTask from './addTask.js';

window.addEventListener('DOMContentLoaded', () => {
  save();
  render();
});

taskForm.addEventListener('submit', addTask);

const unorderedList = document.querySelector('[data-todos]');
unorderedList.addEventListener('change', check);

const removeAll = document.querySelector('.clear');
removeAll.addEventListener('click', clearAll);