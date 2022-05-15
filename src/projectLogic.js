import { displayTask } from './taskLogic';
import {
	createTaskButton,
	createAddProjectButton,
	createSwitchProjectButton,
} from '.';
import { createExitButton } from './createForm';

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
	projectDisplay.addEventListener('click', displayAllProjects);
	projectDisplay.innerText = project.name;
	document.querySelector('#header').innerHTML = '';
	createSwitchProjectButton();
	document.querySelector('#header').appendChild(projectDisplay);
	createAddProjectButton();

	listOfProjects.push(project);
	return project;
}

function displayAllProjects() {
	document.querySelector('#formLocation').innerHTML = '';
	let projectDisplay = document.createElement('div');
	projectDisplay.className = 'projectDisplay';
	document.querySelector('#formLocation').appendChild(projectDisplay);

	projectDisplay.appendChild(createExitButton());

	for (const x of listOfProjects) {
		let project = document.createElement('div');
		project.innerText = x.name;
		projectDisplay.appendChild(project);
	}
}

function switchProject(projectName) {
	for (const x of listOfProjects) {
		if (x.name === projectName) {
			document.querySelector('#content').innerHTML = '';
			displayProject(x);
			let projectDisplay = document.createElement('div');
			projectDisplay.innerText = x.name;
			document.querySelector('#header').innerHTML = '';
			createSwitchProjectButton();
			document.querySelector('#header').appendChild(projectDisplay);
			createAddProjectButton();
			return;
		}
	}
	alert('Error, no such project name!');
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

export { displayProject, createProject, Project, removeTask, switchProject };
