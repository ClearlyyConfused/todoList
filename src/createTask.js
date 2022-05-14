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

function createCheckMarkButton() {
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
	return checkMarkButton;
}

function createDelButton() {
	let deleteButton = document.createElement('button');
	deleteButton.innerText = 'X';
	deleteButton.addEventListener('click', () => {
		deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
	});
	return deleteButton;
}

export { addTasks, createCheckMarkButton, createDelButton };
