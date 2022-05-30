import { createProject } from './projectLogic';
import { displayProject } from './projectLogic';

localStorage.clear();

var localStorageProjects = localStorage.getItem('localStorageProjects');
console.log(localStorageProjects);

if (localStorageProjects === null) {
	let project1 = createProject('Project 1');
	let project2 = createProject('Project 2');
	displayProject(project1);
}
