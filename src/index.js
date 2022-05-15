import { showForm } from './formLogic';
import {
	createProject,
	Project,
	displayProject,
	switchProject,
} from './projectLogic';

let project1 = createProject('Project 1');
createTaskButton(project1);

function createTaskButton(project) {
	let addTaskButton = document.createElement('div');
	addTaskButton.innerText = 'Add Task';
	addTaskButton.setAttribute('id', 'addTask');
	document.querySelector('#content').appendChild(addTaskButton);

	document.querySelector('#addTask').addEventListener('click', () => {
		showForm(project);
	});
}

function createSwitchProjectButton() {
	const projectButton = document.createElement('div');
	projectButton.setAttribute('id', '#switchProject');
	projectButton.innerText = 'Switch Project';
	projectButton.addEventListener('click', () => {
		switchProject(prompt('Switch to which project?'));
	});

	document.querySelector('#header').appendChild(projectButton);
}

function createAddProjectButton() {
	const projectButton = document.createElement('div');
	projectButton.setAttribute('id', '#addProject');
	projectButton.innerText = 'New Project';
	projectButton.addEventListener('click', () => {
		let name = prompt('What do you want to name the project?');
		let project = createProject(name);
		displayProject(project);
	});

	document.querySelector('#header').appendChild(projectButton);
}

export { createTaskButton, createAddProjectButton, createSwitchProjectButton };
