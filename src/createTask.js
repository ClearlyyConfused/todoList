import { delTaskFromProj } from './taskLogic';
import { showForm } from './formLogic';

function createCheckMarkBtn(task) {
	let checkMarkButton = document.createElement('button');
	if (task.complete === false) {
		checkMarkButton.innerText = '❌';
	} else {
		checkMarkButton.innerText = '✔️';
	}
	checkMarkButton.classList.add('checkMark');
	checkMarkButton.addEventListener('click', () => {
		if (checkMarkButton.innerText === '✔️') {
			checkMarkButton.innerText = '❌';
			task.complete = false;
		} else {
			checkMarkButton.innerText = '✔️';
			task.complete = true;
		}
	});
	return checkMarkButton;
}

function createDelButton(project, task) {
	let deleteButton = document.createElement('button');
	deleteButton.innerText = 'X';
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
}

export { createCheckMarkBtn, createDelButton, createTaskButton };
