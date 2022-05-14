import { addTasks, createCheckMarkButton, createDelButton } from './createTask';

class Task {
	constructor(info) {
		this.name = info[0];
		this.description = info[1];
		this.dueDate = info[2];
		this.priority = info[3];
	}
}

function displayTask(Task) {
	let taskBody = document.createElement('div');
	taskBody.className = 'task';
	document.querySelector('#content').appendChild(taskBody);

	for (const x of addTasks(Task)) {
		taskBody.appendChild(x);
	}

	taskBody.appendChild(createCheckMarkButton());
	taskBody.appendChild(createDelButton());
}

export { Task, displayTask };
