import { Task } from './createTasks';
import { displayTask } from './displayTask';

function showForm() {
	console.log('Test');
	let formBase = document.createElement('form');
	formBase.className = 'form';
	document.querySelector('#formLocation').appendChild(formBase);

	let exitButton = document.createElement('div');
	exitButton.innerText = 'X';
	exitButton.addEventListener('click', hideForm);
	formBase.appendChild(exitButton);

	let name = document.createElement('input');
	name.setAttribute('input', 'text');
	name.setAttribute('id', 'name');
	formBase.appendChild(name);

	let description = document.createElement('input');
	description.setAttribute('input', 'text');
	description.setAttribute('id', 'description');
	formBase.appendChild(description);

	let dueDate = document.createElement('input');
	dueDate.setAttribute('input', 'text');
	dueDate.setAttribute('id', 'dueDate');
	formBase.appendChild(dueDate);

	let priority = document.createElement('input');
	priority.setAttribute('input', 'text');
	priority.setAttribute('id', 'priority');
	formBase.appendChild(priority);

	let enterButton = document.createElement('div');
	enterButton.innerText = 'Enter';
	enterButton.addEventListener('click', () => {
		let newTask = getData();
		displayTask(newTask);
		hideForm();
	});
	formBase.appendChild(enterButton);
}

function hideForm() {
	document.querySelector('#formLocation').innerHTML = '';
}

function getData() {
	let name = document.querySelector('#name').value;
	let description = document.querySelector('#description').value;
	let dueDate = document.querySelector('#dueDate').value;
	let priority = document.querySelector('#priority').value;

	let newTask = new Task([name, description, dueDate, priority]);
	return newTask;
}

export { showForm };
