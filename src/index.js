import './style.css';

const todoList = document.querySelector('[data-list]');

const localTodo = [
  {
    description: 'Feed a cat',
    completed: false,
    id: '2',
  },
  {
    description: 'Wash the dishes',
    completed: false,
    id: '1',
  },
];

function render() {
  localTodo.sort((a, b) => a.id - b.id);
  localTodo.forEach((todo) => {
    const taskElement = document.createElement('li');
    taskElement.setAttribute('id', todo.id);
    taskElement.classList.add('task-description');
    taskElement.innerHTML = `<input class="to-do-item" type="checkbox">
    <textarea>${todo.description}</textarea>
    <i class="fas fa-caret-down"></i>
    `;
    todoList.appendChild(taskElement);
  });
}

render();