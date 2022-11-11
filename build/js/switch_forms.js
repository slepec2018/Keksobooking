const formFields = document.querySelector('.ad-form').querySelectorAll('fieldset');

const deactivateForm = () => {
	for (let element of formFields) {
		element.setAttribute('disabled', 'disabled');
	}
};

const activateForm = () => {
	for (let element of formFields) {
		element.removeAttribute('disabled');
	}
};

export { deactivateForm, activateForm };
