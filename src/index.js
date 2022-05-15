import { showForm } from './formLogic';
import { createProject, Project, displayProject } from './projectLogic';

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

export { createTaskButton, createAddProjectButton };
