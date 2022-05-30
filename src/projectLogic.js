import {
	createAddProjBtn,
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

var localStorageProjects = localStorage.getItem('localStorageProjects');

let listOfProjects = [];

function createProject(name) {
	let project = new Project(name);
	listOfProjects.push(project);

	localStorage.setItem('localStorageProjects', JSON.stringify(listOfProjects));
	console.log(JSON.parse(localStorage.getItem('localStorageProjects')));
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
	if (document.querySelector('#projectDisplay').innerHTML === '') {
		let projectDisplay = document.createElement('div');
		projectDisplay.className = 'projectDisplay';
		document.querySelector('#projectDisplay').appendChild(projectDisplay);

		for (const x of listOfProjects) {
			let project = document.createElement('div');
			projectDisplay.appendChild(project);
			project.addEventListener('click', () => {
				switchProject(x);
			});

			let projectName = document.createElement('div');
			projectName.innerText = x.name;

			let delProject = document.createElement('img');
			delProject.src = 'images/delete.svg';
			delProject.addEventListener('click', () => {
				delProjectFromList(x);
			});
			project.appendChild(delProject);
			project.appendChild(projectName);
		}
	} else {
		document.querySelector('#projectDisplay').innerHTML = '';
	}
}

function switchProject(projectName) {
	for (const x of listOfProjects) {
		if (x.name === projectName.name) {
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

export { Project, displayProject, createProject, displayProjectList };
