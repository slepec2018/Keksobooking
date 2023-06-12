import { offerType } from './data.js';
import { mapFilters } from './filters.js';
import { sendData } from './serv.js';

const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const formCoordinate = form.querySelector('#address');
const formTypeApart = form.querySelector('#type');
const formPriceApart = form.querySelector('#price');
const formTimeIn = form.querySelector('#timein');
const formTimeOut = form.querySelector('#timeout');
const formAvatar = form.querySelector('.ad-form-header__input');
const formAvatarImg = form.querySelector('.ad-form-header__preview img');
const formImg = form.querySelector('.ad-form__input');
const formImgWrap = form.querySelector('.ad-form__photo');
const formPriceSlider = form.querySelector('.ad-form__price-wrap');
const formRoom = form.querySelector('#room_number');
const formCapacity = form.querySelector('#capacity');

// Launching the Pristine Library
const pristine = new Pristine(form);

// Adding a slider to the form page price field
noUiSlider.create(formPriceSlider, {
	start: [1000],
	connect: true,
	range: {
		'min': 1000,
		'max': 1000000,
	},
});

// Additional validation rule for the Price field
pristine.addValidator(formPriceApart, function (value) {
	if (value < offerType[formTypeApart.value].min) {
		return false;
	} else {
		return true;
	}
},() => `Значение не может быть меньше ${offerType[formTypeApart.value].min}`, 1001, true);

// Function to call additional validation of the Price field
const changePrice = () => {
	pristine.validate(formPriceApart);
}

// Hanging the changePrice function call event
formTypeApart.addEventListener('change', changePrice);

// The function to change the price placeholder value per night, the minimum value of the validator and scroll
//when changing the type of housing
const changeMinPrice = () => {
	formPriceApart.setAttribute('placeholder', offerType[formTypeApart.value].min);
	formPriceApart.setAttribute('min', offerType[formTypeApart.value].min);

	formPriceSlider.noUiSlider.updateOptions({
		start: [offerType[formTypeApart.value].min],
		range: {
			'min': offerType[formTypeApart.value].min,
			'max': 1000000,
		},
	});
};

// Hanging the event of the changeMinPrice function
formTypeApart.addEventListener('change', changeMinPrice);

// Additional Validation Rule for Number of Guests to Rooms Ratio
pristine.addValidator(formCapacity, function (value) {
	if (value > formRoom.value || value === 100) {
		return false;
	} else {
		return true;
	}
}, 'The number of guests cannot exceed the number of rooms', 1002, false);

// Function to run an additional validation of the ratio of guests to rooms
const changeNumberRooms = () => {
	pristine.validate(formCapacity);
};

// Hanging the check event of the changeNumberRooms function
formRoom.addEventListener('change', changeNumberRooms);

// Check function for correctly filled required fields
form.addEventListener('submit', (e) => {
	const valid = pristine.validate();

	e.preventDefault();

	if (valid) {
		let formData = new FormData(form);

		sendData(formData);
	}
});

// Passing slider data to the price field
formPriceSlider.noUiSlider.on('update', function (values, handle) {
	formPriceApart.value = Math.round(values[handle]);
});

// Function to disable forms and filters
const deactivateForm = () => {
	for (let element of formFieldsets) {
		mapFilters.style.visibility = 'hidden';
		element.setAttribute('disabled', 'disabled');
	}
};

// The event of disabling form activity before the map is loaded
document.addEventListener('DOMContentLoaded', deactivateForm());

// Function to include forms and filters
const activateForm = () => {
	for (let element of formFieldsets) {
		mapFilters.removeAttribute('style');
		element.removeAttribute('disabled');
	}
};

// Function for changing the value of the exit field
formTimeIn.addEventListener('change', () => {
	formTimeOut.value = formTimeIn.value;
});

// The function of changing the value of the value field of the race
formTimeOut.addEventListener('change', () => {
	formTimeIn.value = formTimeOut.value;
});

// Event adding an avatar to the form
formAvatar.addEventListener('change', () => {
	const [file] = formAvatar.files;

	formAvatarImg.setAttribute('src', `${URL.createObjectURL(file)}`);
});

// The event of adding images to the form
formImg.addEventListener('change', (event) => {
	if (formImgWrap.querySelectorAll('img').length > 2) {
		event.preventDefault();
	} else {
		const [file] = formImg.files;

		formImgWrap.insertAdjacentHTML('afterbegin', `<img src="${URL.createObjectURL(file)}" alt="View from the window" width="70px" height="70px">`)
	}
});

export { activateForm, form, formCoordinate };
