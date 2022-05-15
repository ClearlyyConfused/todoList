import {
	displayProjectList,
	createProject,
	displayProject,
	switchProject,
} from './projectLogic';
import { displayTask } from './taskLogic';
import { createTaskButton } from './createTask';

function createProjectHeader(project) {
	let projectDisplay = document.createElement('div');
	projectDisplay.addEventListener('click', displayProjectList);
	projectDisplay.innerText = project.name;
	document.querySelector('#header').innerHTML = '';
	createSwitchProjBtn();
	document.querySelector('#header').appendChild(projectDisplay);
	createAddProjBtn();
}

function createProjectBody(project) {
	document.querySelector('#content').innerHTML = '';
	createTaskButton(project);
	for (const task of project.taskList) {
		displayTask(project, task);
	}
}

function createSwitchProjBtn() {
	const projectButton = document.createElement('div');
	projectButton.setAttribute('id', '#switchProject');
	projectButton.innerText = 'Switch Project';
	projectButton.addEventListener('click', () => {
		switchProject(prompt('Switch to which project?'));
	});

	document.querySelector('#header').appendChild(projectButton);
}

function createAddProjBtn() {
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

export {
	createProjectHeader,
	createAddProjBtn,
	createSwitchProjBtn,
	createProjectBody,
};
