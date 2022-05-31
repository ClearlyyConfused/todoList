import { hideForm, getFormData } from './formLogic';
import { displayProject } from './projectLogic';
import { validateInputs } from './formLogic';

function createFormInputs() {
	let inputFieldArr = [];
	for (const x of ['name', 'description', 'dueDate', 'priority']) {
		let inputField = document.createElement('input');
		inputField.setAttribute('id', x);

		if (x === 'dueDate') {
			inputField.setAttribute('type', 'date');
			inputField.setAttribute('required', '');
		} else if (x === 'priority') {
			inputField.setAttribute('type', 'number');
			inputField.setAttribute('min', '1');
			inputField.setAttribute('max', '4');
			inputField.setAttribute('required', '');
		} else if (x === 'name') {
			inputField.setAttribute('type', 'text');
			inputField.setAttribute('minlength', '1');
			inputField.setAttribute('maxlength', '15');
			inputField.setAttribute('required', '');
		} else {
			inputField.setAttribute('type', 'text');
			inputField.setAttribute('maxlength', '85');
			inputField.setAttribute('required', '');
		}

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

function createFormExitBtn() {
	let exitButton = document.createElement('img');
	exitButton.src = 'images/arrow-left-circle.svg';
	exitButton.addEventListener('click', hideForm);
	return exitButton;
}

function createFormEnterBtn(project) {
	let enterButton = document.createElement('button');
	enterButton.innerText = 'Enter';
	enterButton.addEventListener('click', () => {
		if (validateInputs() === true) {
			let newTask = getFormData();
			project.addTask(newTask);
			project.sortTasks();
			displayProject(project);
			hideForm();
		}
	});
	return enterButton;
}

export { createFormInputs, createFormExitBtn, createFormEnterBtn };
