import { Task, createTask } from './createTasks';
import { displayTask } from './displayTask';
import { showForm } from './form';

console.log('test4');

document.querySelector('#addTask').addEventListener('click', showForm);

function newTask() {
	let task = createTask();
	displayTask(task);
}
