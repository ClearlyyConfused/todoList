import { Task } from './taskLogic';
import {
	createFormInputs,
	createEnterButton,
	createExitButton,
} from './createForm';

function showForm(project) {
	let formBase = document.createElement('form');
	formBase.className = 'form';
	document.querySelector('#formLocation').appendChild(formBase);

	formBase.appendChild(createExitButton());

	for (const input of createFormInputs()) {
		formBase.appendChild(input);
	}

	formBase.appendChild(createEnterButton(project));
}

function hideForm() {
	document.querySelector('#formLocation').innerHTML = '';
}

function getFormData() {
	let name = document.querySelector('#name').value;
	let description = document.querySelector('#description').value;
	let dueDate = document.querySelector('#dueDate').value;
	let priority = document.querySelector('#priority').value;

	return new Task([name, description, dueDate, priority]);
}

export { showForm, hideForm, getFormData };
