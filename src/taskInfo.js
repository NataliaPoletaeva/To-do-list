const taskForm = document.querySelector('[data-task-form]');
const taskInput = document.querySelector('[data-task-input]');
const taskContainer = document.querySelector('[data-todos]');
const localTaskKey = 'task.list';
let localTasks = JSON.parse(localStorage.getItem('task.list')) || [];

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function save() {
    localStorage.setItem(localTaskKey, JSON.stringify(localTasks));
}

function render() {
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
      <textarea>${task.description}</textarea>
      <i class="fas fa-caret-down"></i>
      `;
        taskContainer.appendChild(taskElement);
    });
}

function createTask() {
    return {
        id: localTasks.length + 1,
        description: taskInput.value,
        completed: false,
    };
}

function addTask(event) {
    event.preventDefault();
    const taskName = taskInput.value;
    if (taskName == null || taskName === '') return;
    const task = createTask();
    localTasks.push(task);
    taskInput.value = '';
    save();
    render();
}

function check(e) {
    const checkbox = e.target;
    if (checkbox.tagName.toLowerCase() === 'input') {
        const selectedTask = localTasks.find((task) => task.id == checkbox.id);
        selectedTask.completed = checkbox.checked;
        save();
        render();
    }
}

export { taskForm, addTask, save, render, check };