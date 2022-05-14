import { displayTask } from './taskLogic';
import { createTaskButton } from '.';

class Project {
	constructor(name) {
		this.name = name;
		this.taskList = [];
	}

	addTask(task) {
		this.taskList.push(task);
	}

	logTaskList() {
		console.log(this.taskList);
	}
}

function createProject(name) {
	let project = new Project(name);

	let projectDisplay = document.createElement('div');
	projectDisplay.innerText = project.name;
	document.querySelector('#header').appendChild(projectDisplay);

	return project;
}

function displayProject(project) {
	document.querySelector('#content').innerHTML = '';
	createTaskButton();
	for (const task of project.taskList) {
		displayTask(project, task);
	}
}

function removeTask(project, task) {
	let y = 0;
	for (const x of project.taskList) {
		if (x.name === task.name) {
			project.taskList.splice(y, 1);
		}
		y++;
	}
	displayProject(project);
}

export { displayProject, createProject, Project, removeTask };
