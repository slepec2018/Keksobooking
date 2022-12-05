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

// Запуск библиотеки Pristine
const pristine = new Pristine(form);

// Добавления слайдера на страницу формы поле прайс
noUiSlider.create(formPriceSlider, {
	start: [1000],
	connect: true,
	range: {
		'min': 1000,
		'max': 1000000,
	},
});

// Дополнительное правило валидации поля Прайс
pristine.addValidator(formPriceApart, function (value) {
	if (value < offerType[formTypeApart.value].min) {
		return false;
	} else {
		return true;
	}
},() => `Значение не может быть меньше ${offerType[formTypeApart.value].min}`, 1001, true);

// Функция вызова дополнительной валидации поля Прайс
const changePrice = () => {
	pristine.validate(formPriceApart);
}

// Навешивание собятия вызова функции changePrice
formTypeApart.addEventListener('change', changePrice);

// Функция изминения значения placeholder цены за ночь, минимальное значение валидатора и скрола
//при изминения типа жилья
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

// Навешивание события функции changeMinPrice
formTypeApart.addEventListener('change', changeMinPrice);

// Дополнительное правило валидации соотношения количество гостей к комнатам
pristine.addValidator(formCapacity, function (value) {
	if (value > formRoom.value || value === 100) {
		return false;
	} else {
		return true;
	}
}, 'Количество гостей не может превышать количество комнат', 1002, false);

// Функция запуска дополнительной валидации соотношения количества гостей к комнатам
const changeNumberRooms = () => {
	pristine.validate(formCapacity);
};

// Навешивание события проверки функции changeNumberRooms
formRoom.addEventListener('change', changeNumberRooms);

// Функция проверки правильно заполненных обязательных полей
form.addEventListener('submit', (e) => {
	const valid = pristine.validate();

	e.preventDefault();

	if (valid) {
		let formData = new FormData(form);

		sendData(formData);
	}
});

// Передача данных бегунка слайдера в поле прайс
formPriceSlider.noUiSlider.on('update', function (values, handle) {
	formPriceApart.value = Math.round(values[handle]);
});

// Функция отключения форм и фильтров
const deactivateForm = () => {
	for (let element of formFieldsets) {
		mapFilters.style.visibility = 'hidden';
		element.setAttribute('disabled', 'disabled');
	}
};

// Событие отключения активности форм до загрузки карты
document.addEventListener('DOMContentLoaded', deactivateForm());

// Функция включения форм и фильтров
const activateForm = () => {
	for (let element of formFieldsets) {
		mapFilters.removeAttribute('style');
		element.removeAttribute('disabled');
	}
};

// Функция изминения значения value поля выезд
formTimeIn.addEventListener('change', () => {
	formTimeOut.value = formTimeIn.value;
});

// Функция изминения значения value поля заезд
formTimeOut.addEventListener('change', () => {
	formTimeIn.value = formTimeOut.value;
});

// Событие добавления аватара в форму
formAvatar.addEventListener('change', () => {
	const [file] = formAvatar.files;

	formAvatarImg.setAttribute('src', `${URL.createObjectURL(file)}`);
});

// Событие добавления картинок в форму
formImg.addEventListener('change', (event) => {
	if (formImgWrap.querySelectorAll('img').length > 2) {
		event.preventDefault();
	} else {
		const [file] = formImg.files;

		formImgWrap.insertAdjacentHTML('afterbegin', `<img src="${URL.createObjectURL(file)}" alt="Вид из окна" width="70px" height="70px">`)
	}
});

export { activateForm, form, formCoordinate };
