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
console.log(JSON.parse(localStorageProjects));

var listOfProjects = [];

if (JSON.parse(localStorageProjects) === null) {
	let project1 = createProject('Project 1');
	displayProject(project1);
} else {
	createProjLocal(JSON.parse(localStorageProjects));
	displayProject(listOfProjects[0]);
}

function createProjLocal(projectArr) {
	for (const x in projectArr) {
		let project = new Project(projectArr[x].name);

		for (const task of projectArr[x].taskList) {
			project.addTask(task);
		}

		listOfProjects.push(project);
	}
}

function createProject(name) {
	let project = new Project(name);
	listOfProjects.push(project);
	console.log(listOfProjects);

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
	localStorage.setItem('localStorageProjects', JSON.stringify(listOfProjects));
	displayProjectList();
}

function displayProjectList() {
	if (document.querySelector('#projectDisplay').innerHTML === '') {
		let projectDisplay = document.createElement('div');
		projectDisplay.className = 'projectDisplay';
		document.querySelector('#projectDisplay').appendChild(projectDisplay);

		for (const x of listOfProjects) {
			let projectName = document.createElement('div');
			projectName.innerText = x.name;
			projectName.addEventListener('click', () => {
				switchProject(x);
			});

			let delProject = document.createElement('img');
			delProject.src = 'images/delete.svg';
			delProject.addEventListener('click', () => {
				delProjectFromList(x);
			});
			let projectContainer = document.createElement('div');

			projectContainer.appendChild(delProject);
			projectDisplay.appendChild(projectContainer);
			projectContainer.appendChild(projectName);
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
	localStorage.setItem('localStorageProjects', JSON.stringify(listOfProjects));
	createProjectHeader(project);
	createProjectBody(project);
}

export { Project, displayProject, createProject, displayProjectList };
