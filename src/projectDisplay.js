import { displayProjectList, createProject, displayProject } from './projectLogic';
import { createAddTaskBtn } from './taskDisplay';

function createProjectHeader(project) {
	let projectDisplay = document.createElement('button');
	projectDisplay.addEventListener('click', displayProjectList);
	projectDisplay.innerText = project.name;
	document.querySelector('#header').innerHTML = '';
	document.querySelector('#header').appendChild(projectDisplay);
	createAddProjBtn();
	createAddTaskBtn(project);

	const image = document.createElement('img');
	image.src = 'images/dropdown.svg';
	image.setAttribute('width', '30px');
	image.setAttribute('height', 'auto');
	projectDisplay.appendChild(image);
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
	image.src = 'images/plus-circle.svg';
	image.setAttribute('width', '30px');
	image.setAttribute('height', 'auto');
	projectButton.appendChild(image);
}

export { createProjectHeader, createAddProjBtn };
