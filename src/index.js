import './style.css';
import { taskForm, addTask, saveAndRender, confirmCheck } from './taskInfo.js';

window.addEventListener('DOMContentLoaded', () => {
  saveAndRender();
  let indeces = Array.from(document.all).map(i => i.id).filter(i => i != "");
  console.log(indeces);
});

taskForm.addEventListener('submit', addTask);

const boxes = document.querySelectorAll('[type=checkbox]')
boxes.forEach(box => {
  box.addEventListener('change', e => {
    if (e.target.type === "checkbox") {
      confirmCheck();
    }
  })
})