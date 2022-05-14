import { removeTask } from './projectLogic';

function addTasks(Task) {
	let name = document.createElement('div');
	let description = document.createElement('div');
	let dueDate = document.createElement('div');
	let priority = document.createElement('div');

	name.innerText = `Name: ${Task.name}`;
	description.innerText = `Description: ${Task.description}`;
	dueDate.innerText = `Due Date: ${Task.dueDate}`;
	priority.innerText = `Priority: ${Task.priority}`;

	return [name, description, dueDate, priority];
}

function createCheckMarkButton(task) {
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
		removeTask(project, task);
	});
	return deleteButton;
}

export { addTasks, createCheckMarkButton, createDelButton };
