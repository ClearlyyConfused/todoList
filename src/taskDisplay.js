import { delTaskFromProj } from './taskLogic';
import { showForm } from './formLogic';

function createCheckMarkBtn(task) {
	let checkMarkButton = document.createElement('div');
	if (task.complete === false) {
		checkMarkButton.innerText = 'INCOMPLETE';
		checkMarkButton.style.color = 'red';
	} else {
		checkMarkButton.innerText = 'COMPLETE';
		checkMarkButton.style.color = 'green';
	}
	checkMarkButton.classList.add('checkMark');
	checkMarkButton.addEventListener('click', () => {
		if (task.complete === true) {
			checkMarkButton.innerText = 'INCOMPLETE';
			checkMarkButton.style.color = 'red';
			task.complete = false;
		} else {
			checkMarkButton.innerText = 'COMPLETE';
			checkMarkButton.style.color = 'green';
			task.complete = true;
		}
	});

	return checkMarkButton;
}

function createDelTaskBtn(project, task) {
	let deleteButton = document.createElement('img');
	deleteButton.src = 'images/close-circle.svg';
	deleteButton.addEventListener('click', () => {
		deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
		delTaskFromProj(project, task);
	});
	return deleteButton;
}

function createAddTaskBtn(project, deleted) {
	let addTaskButton = document.createElement('button');
	addTaskButton.innerText = 'Add Task';
	addTaskButton.setAttribute('id', 'addTask');
	document.querySelector('#header').appendChild(addTaskButton);

	if (deleted === false) {
		document.querySelector('#addTask').addEventListener('click', () => {
			showForm(project);
		});
	}

	const image = document.createElement('img');
	image.src = 'images/plus-circle.svg';
	image.setAttribute('width', '30px');
	image.setAttribute('height', 'auto');
	addTaskButton.appendChild(image);
}

export { createCheckMarkBtn, createDelTaskBtn, createAddTaskBtn };
