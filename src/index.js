import './style.css';
import { taskForm, addTask, save, render, toggle } from './taskInfo.js';

window.addEventListener('DOMContentLoaded', () => {
  save();
  render();
});

taskForm.addEventListener('submit', addTask);

const boxes = document.querySelectorAll('[type=checkbox]');
boxes.forEach((box) => {
  box.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
      toggle(event.target.parentElement.getAttribute('key'));
    }
  });
})