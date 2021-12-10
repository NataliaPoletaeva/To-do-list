export default function clearAll() {
    const tasks = JSON.parse(localStorage.getItem('task.list')) || [];
    const leaveTasks = tasks.filter((task) => task.completed === false);
    localStorage.setItem('task.list', JSON.stringify(leaveTasks));
    window.location.reload();
}