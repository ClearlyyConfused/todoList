import { showForm } from './formLogic';
import { createProject, Project } from './projectLogic';

console.log('test2');

let project1 = createProject('Project 1');

function createTaskButton() {
	let addTaskButton = document.createElement('div');
	addTaskButton.innerText = 'Add Task';
	addTaskButton.setAttribute('id', 'addTask');
	document.querySelector('#content').appendChild(addTaskButton);

	document.querySelector('#addTask').addEventListener('click', () => {
		showForm(project1);
		project1.logTaskList();
	});
}

createTaskButton();

export { createTaskButton };
