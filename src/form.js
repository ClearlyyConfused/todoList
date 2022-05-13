function showForm() {
	console.log('Test');
	let formBase = document.createElement('form');
	formBase.className = 'form';
	document.querySelector('#formLocation').appendChild(formBase);

	let exitButton = document.createElement('div');
	exitButton.innerText = 'X';
	exitButton.addEventListener('click', hideForm);
	formBase.appendChild(exitButton);
}

function hideForm() {
	document.querySelector('#formLocation').innerHTML = '';
}

export { showForm };
