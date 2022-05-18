import { hideForm, getFormData } from './formLogic';
import { displayProject } from './projectLogic';
import { Project } from './projectLogic';

function createFormInputs() {
	let inputFieldArr = [];
	for (const x of ['name', 'description', 'dueDate', 'priority']) {
		let inputField = document.createElement('input');
		inputField.setAttribute('input', 'text');
		inputField.setAttribute('id', x);

		let label = document.createElement('label');
		label.setAttribute('for', x);
		label.innerText = `${x.charAt(0).toUpperCase() + x.slice(1)}:`;

		let input = document.createElement('div');
		input.appendChild(label);
		input.appendChild(inputField);
		inputFieldArr.push(input);
	}
	return inputFieldArr;
}

function createExitButton() {
	let exitButton = document.createElement('button');
	exitButton.innerText = 'X';
	exitButton.addEventListener('click', hideForm);
	return exitButton;
}

function createEnterButton(project) {
	let enterButton = document.createElement('button');
	enterButton.innerText = 'Enter';
	enterButton.addEventListener('click', () => {
		let newTask = getFormData();
		project.addTask(newTask);
		displayProject(project);
		hideForm();
	});
	return enterButton;
}

export { createFormInputs, createExitButton, createEnterButton };
