const taskContainer = document.querySelector('[data-todos]');
const localTaskKey = 'task.list';
const localTasks = JSON.parse(localStorage.getItem('task.list')) || [];

const clearElement = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const save = () => {
    localStorage.setItem(localTaskKey, JSON.stringify(localTasks));
}

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
            taskElement.style.backgroundColor = '#e8e7b2'
            edit.style.backgroundColor = '#e8e7b2'
            icon.addEventListener('click', removeTask);
        })
        taskContainer.appendChild(taskElement);
    });
}

const removeTask = (e) => {
    const trash = e.target;
    if (trash.tagName.toLowerCase() === 'span') {
        // eslint-disable-next-line eqeqeq
        const selectedTrash = localTasks.filter((task) => task.id !== trash.id);
        localTasks.splice(trash.id, 1);
        localStorage.setItem('task.list', JSON.stringify(selectedTrash));
        window.location.reload();
    }
};

const editTask = (e) => {
    const edit = e.target;
    if (edit.tagName.toLowerCase() === 'textarea') {
        // eslint-disable-next-line eqeqeq
        const selectedEdit = localTasks.find((task) => task.id == edit.id);
        selectedEdit.description = edit.value;
    };
    save();
}

export { save, render, localTasks } 