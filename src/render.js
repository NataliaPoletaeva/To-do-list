import {
  localTasks, clearElement, editTask, removeTask,
} from './crud.js';

const taskContainer = document.querySelector('[data-todos]');

const render = () => {
  clearElement(taskContainer);
  localTasks.sort((a, b) => a.id - b.id);
  localTasks.forEach((task) => {
    let checked;
    if (task.completed === false) {
      checked = null;
    } else {
      checked = 'checked';
    }

    const taskElement = document.createElement('li');
    taskElement.id = task.id;
    taskElement.classList.add('task-description');
    taskElement.innerHTML = `<input class="to-do-item" type="checkbox" id="${task.id}" ${checked}>
          <textarea class="edit" id="${task.id}">${task.description}</textarea>
          <span class="material-icons" id="${task.id}">more_vert</span>
        `;

    const edit = taskElement.querySelector('textarea');
    edit.addEventListener('keyup', editTask);

    const checkBox = taskElement.querySelector('input');
    if (checkBox.hasAttribute('checked')) {
      edit.style.textDecoration = 'line-through';
    }

    const icon = taskElement.querySelector('.material-icons');
    icon.addEventListener('click', () => {
      icon.innerText = 'delete';
      taskElement.style.backgroundColor = '#e8e7b2';
      edit.style.backgroundColor = '#e8e7b2';
      icon.addEventListener('click', removeTask);
    });

    taskContainer.appendChild(taskElement);
  });
};

export default render;