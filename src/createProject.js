import {
	displayProjectList,
	createProject,
	displayProject,
	switchProject,
} from './projectLogic';
import { displayTask } from './taskLogic';
import { createTaskButton } from './createTask';

function createProjectHeader(project) {
	let projectDisplay = document.createElement('button');
	projectDisplay.addEventListener('click', displayProjectList);
	projectDisplay.innerText = project.name;
	document.querySelector('#header').innerHTML = '';
	document.querySelector('#header').appendChild(projectDisplay);
	createAddProjBtn();
	createTaskButton(project);

	const image = document.createElement('img');
	image.src = 'images/dropdown.png';
	image.setAttribute('width', '30px');
	image.setAttribute('height', 'auto');
	projectDisplay.appendChild(image);
}

function createProjectBody(project) {
	document.querySelector('#content').innerHTML = '';
	for (const task of project.taskList) {
		displayTask(project, task);
	}
}

function createSwitchProjBtn() {
	const projectButton = document.createElement('button');
	projectButton.setAttribute('id', '#switchProject');
	projectButton.innerText = 'Switch Project';
	projectButton.addEventListener('click', () => {
		switchProject(prompt('Switch to which project?'));
	});

	document.querySelector('#header').appendChild(projectButton);
}

function createAddProjBtn() {
	const projectButton = document.createElement('button');
	projectButton.setAttribute('id', '#addProject');
	projectButton.innerText = 'New Project';
	document.querySelector('#header').appendChild(projectButton);
	projectButton.addEventListener('click', () => {
		document.querySelector('#formLocation').innerHTML = '';
		let name = prompt('What do you want to name the project?');
		let project = createProject(name);
		document.querySelector('#projectDisplay').innerHTML = '';
		displayProject(project);
	});

	const image = document.createElement('img');
	image.src = 'images/plus-box.png';
	image.setAttribute('width', '30px');
	image.setAttribute('height', 'auto');
	projectButton.appendChild(image);
}

export {
	createProjectHeader,
	createAddProjBtn,
	createSwitchProjBtn,
	createProjectBody,
};
