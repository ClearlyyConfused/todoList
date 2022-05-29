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
	if (document.querySelector('#projectDisplay').innerHTML === '') {
		let projectDisplay = document.createElement('div');
		projectDisplay.className = 'projectDisplay';
		document.querySelector('#projectDisplay').appendChild(projectDisplay);

		for (const x of listOfProjects) {
			let project = document.createElement('div');
			projectDisplay.appendChild(project);

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
			project.appendChild(delProject);
			project.appendChild(projectName);
		}
	} else {
		document.querySelector('#projectDisplay').innerHTML = '';
	}
}

function displayProject(project) {
	createProjectHeader(project);
	createProjectBody(project);
}

export { Project, displayProject, createProject, displayProjectList };
