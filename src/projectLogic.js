import {
	createAddProjBtn,
	createSwitchProjBtn,
	createProjectHeader,
	createProjectBody,
} from './createProject';
import { createExitButton } from './createForm';
import { createTaskButton } from './createTask';

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
	listOfProjects.push(project);
	return project;
}

function delProjectFromList(project) {
	let y = 0;
	for (const x of listOfProjects) {
		if (x === project) {
			listOfProjects.splice(y, 1);
		}
		y++;
	}
	displayProjectList();
}

function displayProjectList() {
	document.querySelector('#formLocation').innerHTML = '';
	let projectDisplay = document.createElement('div');
	projectDisplay.className = 'projectDisplay';
	document.querySelector('#formLocation').appendChild(projectDisplay);

	projectDisplay.appendChild(createExitButton());

	for (const x of listOfProjects) {
		let project = document.createElement('div');
		projectDisplay.appendChild(project);

		let projectName = document.createElement('div');
		projectName.innerText = x.name;
		projectName.addEventListener('click', () => {
			switchProject(x.name);
		});

		let delProject = document.createElement('button');
		delProject.innerText = 'X';
		delProject.addEventListener('click', () => {
			delProjectFromList(x);
		});
		project.appendChild(delProject);
		project.appendChild(projectName);
	}
}

function switchProject(projectName) {
	for (const x of listOfProjects) {
		if (x.name === projectName) {
			document.querySelector('#content').innerHTML = '';
			displayProject(x);
			let projectDisplay = document.createElement('button');
			projectDisplay.innerText = x.name;
			projectDisplay.addEventListener('click', displayProjectList);
			document.querySelector('#header').innerHTML = '';
			document.querySelector('#header').appendChild(projectDisplay);
			createAddProjBtn();
			createTaskButton(projectName);
			return;
		}
	}
	alert('Error, no such project name!');
}

function displayProject(project) {
	createProjectHeader(project);
	createProjectBody(project);
}

export {
	Project,
	displayProject,
	createProject,
	switchProject,
	displayProjectList,
};
