import { delTaskFromProj } from './taskLogic';
import { showForm } from './formLogic';

function createCheckMarkBtn(task) {
	let checkMarkButton = document.createElement('img');
	if (task.complete === false) {
		checkMarkButton.src = 'images/close-circle.svg';
	} else {
		checkMarkButton.src = 'images/check-circle.svg';
	}
	checkMarkButton.classList.add('checkMark');
	checkMarkButton.addEventListener('click', () => {
		if (task.complete === true) {
			checkMarkButton.src = 'images/close-circle.svg';
			task.complete = false;
		} else {
			checkMarkButton.src = 'images/check-circle.svg';
			task.complete = true;
		}
	});
	return checkMarkButton;
}

function createDelButton(project, task) {
	let deleteButton = document.createElement('img');
	deleteButton.src = 'images/delete.svg';
	deleteButton.addEventListener('click', () => {
		deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
		delTaskFromProj(project, task);
	});
	return deleteButton;
}

function createTaskButton(project) {
	let addTaskButton = document.createElement('button');
	addTaskButton.innerText = 'Add Task';
	addTaskButton.setAttribute('id', 'addTask');
	document.querySelector('#header').appendChild(addTaskButton);

	document.querySelector('#addTask').addEventListener('click', () => {
		showForm(project);
	});

	const image = document.createElement('img');
	image.src = 'images/plus-circle.svg';
	image.setAttribute('width', '30px');
	image.setAttribute('height', 'auto');
	addTaskButton.appendChild(image);
}

export { createCheckMarkBtn, createDelButton, createTaskButton };
