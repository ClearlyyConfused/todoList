import { addTasks, createCheckMarkButton, createDelButton } from './createTask';

class Task {
	constructor(info) {
		this.name = info[0];
		this.description = info[1];
		this.dueDate = info[2];
		this.priority = info[3];
		this.complete = false;
	}
}

function displayTask(project, task) {
	let taskBody = document.createElement('div');
	taskBody.className = 'task';
	document.querySelector('#content').appendChild(taskBody);

	for (const x of addTasks(task)) {
		taskBody.appendChild(x);
	}

	taskBody.appendChild(createCheckMarkButton(task));
	taskBody.appendChild(createDelButton(project, task));
}

export { Task, displayTask };
