import { showForm } from './formLogic';
import { createProject, Project, displayProject } from './projectLogic';

let project1 = createProject('Project 1');

function createTaskButton(project) {
	let addTaskButton = document.createElement('div');
	addTaskButton.innerText = 'Add Task';
	addTaskButton.setAttribute('id', 'addTask');
	document.querySelector('#content').appendChild(addTaskButton);

	document.querySelector('#addTask').addEventListener('click', () => {
		showForm(project);
	});
}

createTaskButton(project1);

const addProjectButton = document.querySelector('#addProject');
addProjectButton.addEventListener('click', () => {
	let name = prompt('What do you want to name the project?');
	let project = createProject(name);
	displayProject(project);
});

document.querySelector('#test').addEventListener('click', () => {
	document.querySelector('#content').innerHTML = '';
	displayProject(project1);
});

export { createTaskButton };
