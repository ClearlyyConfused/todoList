import { createCheckMarkBtn, createDelTaskBtn } from './taskDisplay';
import { displayProject } from './projectLogic';

class Task {
	constructor(info) {
		this.name = info[0];
		this.description = info[1];
		this.dueDate = info[2];

		this.complete = false;
	}
}

function createTask(Task) {
	let name = document.createElement('div');
	let description = document.createElement('div');
	let dueDate = document.createElement('div');

	name.innerText = `${Task.name}`;
	description.innerText = `Description: ${Task.description}`;
	dueDate.innerText = `Due Date: ${Task.dueDate}`;

	return [name, description, dueDate];
}

function displayTask(project, task) {
	let taskBody = document.createElement('div');
	taskBody.className = 'task';
	document.querySelector('#content').appendChild(taskBody);

	for (const x of createTask(task)) {
		taskBody.appendChild(x);
	}

	taskBody.appendChild(createCheckMarkBtn(task));
	taskBody.appendChild(createDelTaskBtn(project, task));
}

function delTaskFromProj(project, task) {
	let y = 0;
	for (const x of project.taskList) {
		if (x === task) {
			project.taskList.splice(y, 1);
		}
		y++;
	}
	displayProject(project);
}

export { Task, displayTask, delTaskFromProj, createTask };
