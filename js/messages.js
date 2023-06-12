const messSuccess = document.querySelector('#success').content.querySelector('.success');
const projectBody = document.querySelector('body');
const messError = document.querySelector('#error').content.querySelector('.error');

// The function of opening a popup of successful data loading
const showMesConfirm = () => {
	const clone = messSuccess.cloneNode(true);

	let popup = null;

	// Event deleting a popup on pressing the Esc button
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && popup.classList.contains('success')) {
			popup.remove();
		}
	});

	// Popup delete event on mouse click anywhere
	document.addEventListener('click', () => {
		if (popup.classList.contains('success')) {
			// console.log(event.target.classList.contains('success'));
			popup.remove();
		}
	});

	projectBody.append(clone);

	popup = projectBody.lastChild;
};

// The function of opening a pop-up message about data upload errors to the server
const showMessError = () => {
	const clone = messError.cloneNode(true);
	const messErrorButton = clone.querySelector('.error__button');

	let popup = null;

	// Error popup delete event via button
	messErrorButton.addEventListener('click', () => {
		popup.remove();
	});

	// Event deleting a popup on pressing the Esc button
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && popup.classList.contains('error')) {
			popup.remove();
		}
	});

	// Popup delete event on mouse click anywhere
	document.addEventListener('click', () => {
		if (popup.classList.contains('error')) {
			popup.remove();
		}
	});

	projectBody.append(clone);

	popup = projectBody.lastChild;
};

export { showMesConfirm, showMessError };
