import { hideForm, getFormData } from './formLogic';
import { displayProject } from './projectLogic';

function createFormInputs() {
	let inputFieldArr = [];
	for (const x of ['name', 'description', 'dueDate', 'priority']) {
		let inputField = document.createElement('input');
		inputField.setAttribute('input', 'text');
		inputField.setAttribute('id', x);
		inputFieldArr.push(inputField);
	}
	return inputFieldArr;
}

function createExitButton() {
	let exitButton = document.createElement('div');
	exitButton.innerText = 'X';
	exitButton.addEventListener('click', hideForm);
	return exitButton;
}

function createEnterButton(project) {
	let enterButton = document.createElement('div');
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
