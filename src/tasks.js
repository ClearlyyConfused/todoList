class Task {
	constructor(info) {
		this.name = info[0];
		this.description = info[1];
		this.dueDate = info[2];
		this.priority = info[3];
	}
}

function createTask() {
	let name = prompt('Name:');
	let description = prompt('Description:');
	let dueDate = prompt('Due Date');
	let priority = prompt('Priority');

	let newTask = new Task([name, description, dueDate, priority]);
	return newTask;
}

export { Task, createTask };
