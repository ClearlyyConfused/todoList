import { Task } from './createTasks';

function displayTask(Task) {
	let task = document.createElement('div');
	task.className = 'task';
	document.querySelector('#content').appendChild(task);

	let name = document.createElement('div');
	let description = document.createElement('div');
	let dueDate = document.createElement('div');
	let priority = document.createElement('div');

	name.innerText = `Name: ${Task.name}`;
	description.innerText = `Description: ${Task.description}`;
	dueDate.innerText = `Due Date: ${Task.dueDate}`;
	priority.innerText = `Priority: ${Task.priority}`;

	task.appendChild(name);
	task.appendChild(description);
	task.appendChild(dueDate);
	task.appendChild(priority);

	let checkMarkButton = document.createElement('button');
	checkMarkButton.innerText = '❌';
	checkMarkButton.classList.add('checkMark');
	checkMarkButton.addEventListener('click', () => {
		if (checkMarkButton.innerText === '✔️') {
			checkMarkButton.innerText = '❌';
		} else {
			checkMarkButton.innerText = '✔️';
		}
	});
	task.appendChild(checkMarkButton);

	let deleteButton = document.createElement('button');
	deleteButton.innerText = 'X';
	deleteButton.addEventListener('click', () => {
		deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
	});
	task.appendChild(deleteButton);
}

export { displayTask };
