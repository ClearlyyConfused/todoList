import { Task } from './createTasks';

function displayTask(Task) {
	let task = document.createElement('div');
	document.querySelector('#content').appendChild(task);
	task.className = 'task';

	let name = document.createElement('div');
	let description = document.createElement('div');
	let dueDate = document.createElement('div');
	let priority = document.createElement('div');

	name.innerText = Task.name;
	description.innerText = Task.description;
	dueDate.innerText = Task.dueDate;
	priority.innerText = Task.priority;

	task.appendChild(name);
	task.appendChild(description);
	task.appendChild(dueDate);
	task.appendChild(priority);
}

export { displayTask };
