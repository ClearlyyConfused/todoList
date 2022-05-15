import { displayTask } from './taskLogic';
import { createTaskButton, createAddProjectButton } from '.';

class Project {
	constructor(name) {
		this.name = name;
		this.taskList = [];
	}

	addTask(task) {
		this.taskList.push(task);
	}
}

let listOfProjects = [];

function createProject(name) {
	let project = new Project(name);

	let projectDisplay = document.createElement('div');
	projectDisplay.innerText = project.name;
	document.querySelector('#header').innerHTML = '';
	document.querySelector('#header').appendChild(projectDisplay);
	createAddProjectButton();

	listOfProjects.push(project);
	return project;
}

document.querySelector('#switchProject').addEventListener('click', () => {
	switchProject(prompt('switch to which project?'));
});

function switchProject(projectName) {
	for (const x of listOfProjects) {
		if (x.name === projectName) {
			document.querySelector('#content').innerHTML = '';
			displayProject(x);
			let projectDisplay = document.createElement('div');
			projectDisplay.innerText = x.name;
			document.querySelector('#header').innerHTML = '';
			document.querySelector('#header').appendChild(projectDisplay);
			createAddProjectButton();
		} else {
			alert('Error, no such project name!');
		}
	}
}

function displayProject(project) {
	document.querySelector('#content').innerHTML = '';
	createTaskButton(project);
	for (const task of project.taskList) {
		displayTask(project, task);
	}
}

function removeTask(project, task) {
	let y = 0;
	for (const x of project.taskList) {
		if (x === task) {
			project.taskList.splice(y, 1);
		}
		y++;
	}
	displayProject(project);
}

export { displayProject, createProject, Project, removeTask };
