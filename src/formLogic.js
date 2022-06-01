import { Task } from './taskLogic';
import {
	createFormInputs,
	createFormEnterBtn,
	createFormExitBtn,
} from './formDisplay';

function showForm(project) {
	let formBase = document.createElement('form');
	formBase.className = 'form';
	document.querySelector('#formLocation').appendChild(formBase);

	formBase.appendChild(createFormExitBtn());

	for (const input of createFormInputs()) {
		formBase.appendChild(input);
	}

	formBase.appendChild(createFormEnterBtn(project));
}

function hideForm() {
	document.querySelector('#formLocation').innerHTML = '';
}

function getFormData() {
	let name = document.querySelector('#name').value;
	let description = document.querySelector('#description').value;
	let dueDate = document.querySelector('#dueDate').value;

	return new Task([name, description, dueDate]);
}

function validateInputs() {
	let name = document.querySelector('#name');
	let description = document.querySelector('#description');
	let dueDate = document.querySelector('#dueDate');

	for (const input of [name, description, dueDate]) {
		if (input.checkValidity() === true) {
		} else {
			return false;
		}
	}
	return true;
}

export { showForm, hideForm, getFormData, validateInputs };
