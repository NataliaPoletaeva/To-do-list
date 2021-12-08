const taskForm = document.querySelector('[data-task-form]');
const taskInput = document.querySelector('[data-task-input]');
const taskContainer = document.querySelector('[data-todos]');
const localTaskKey = 'task.list';
let localTasks = JSON.parse(localStorage.getItem('task.list')) || [];
let checkBox = document.querySelectorAll('[type=checkbox]');

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function saveAndRender() {
    localStorage.setItem(localTaskKey, JSON.stringify(localTasks));
    clearElement(taskContainer);
    localTasks.sort((a, b) => a.id - b.id);
    localTasks.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.id = task.id;
        taskElement.classList.add('task-description');
        taskElement.innerHTML = `<input class="to-do-item" type="checkbox">
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

function confirmCheck() {
    let checkedTask = localTasks.find(task => {
        task.id == this.ParentElement.id;
    })
    checkedTask.completed = !checkedTask.completed;
}

function addTask(event) {
    event.preventDefault();
    const taskName = taskInput.value;
    if (taskName == null || taskName === '') return;
    const task = createTask();
    localTasks.push(task);
    taskInput.value = '';
    saveAndRender();
}

export { taskForm, addTask, saveAndRender, confirmCheck };