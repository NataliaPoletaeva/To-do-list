const localTaskKey = 'task.list';
const localTasks = JSON.parse(localStorage.getItem(localTaskKey)) || [];
const taskInput = document.querySelector('[data-task-input]');

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const createTask = () => ({
  id: Date.now().toString(),
  description: taskInput.value,
  completed: false,
});

const save = () => {
  localStorage.setItem(localTaskKey, JSON.stringify(localTasks));
};

const editTask = (e) => {
  const edit = e.target;
  if (edit.tagName.toLowerCase() === 'textarea') {
    // eslint-disable-next-line eqeqeq
    const selectedEdit = localTasks.find((task) => task.id == edit.id);
    selectedEdit.description = edit.value;
  }
  save();
};

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

export {
  localTasks, taskInput, clearElement, createTask, save, editTask, removeTask,
};