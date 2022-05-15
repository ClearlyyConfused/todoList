import {
	createAddProjBtn,
	createSwitchProjBtn,
	createProjectHeader,
	createProjectBody,
} from './createProject';
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
		project.innerText = x.name;
		projectDisplay.appendChild(project);

		let delProject = document.createElement('button');
		delProject.innerText = 'del Project';
		delProject.addEventListener('click', () => {
			delProjectFromList(x);
		});
		projectDisplay.appendChild(delProject);
	}
}

function switchProject(projectName) {
	for (const x of listOfProjects) {
		if (x.name === projectName) {
			document.querySelector('#content').innerHTML = '';
			displayProject(x);
			let projectDisplay = document.createElement('div');
			projectDisplay.innerText = x.name;
			projectDisplay.addEventListener('click', displayProjectList);
			document.querySelector('#header').innerHTML = '';
			createSwitchProjBtn();
			document.querySelector('#header').appendChild(projectDisplay);
			createAddProjBtn();
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
