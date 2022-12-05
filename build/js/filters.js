import { createMap, markerGroup } from './map.js';
import { filterPriceLow, filterPriceHigh } from './data.js'

const mapFilters = document.querySelector('.map__filters');
const filterType = mapFilters.querySelector('#housing-type');
const filterPrice = mapFilters.querySelector('#housing-price');
const filterRoom = mapFilters.querySelector('#housing-rooms');
const filterGuest = mapFilters.querySelector('#housing-guests');
const filterFeature = mapFilters.querySelector('#housing-features');
const filterFeatureCheckbox = filterFeature.querySelectorAll('.map__checkbox');

// Функция проверки изминения типа квартиры
const changeDataFilterType = (data) => {

	if (filterType.value === 'any') {
		return data;
	}

	return data.filter((element) => {
		if (element.offer.type === filterType.value) {
			return element;
		}
	})
};

// Функция проверки изминения цены
const changeDataFilterPrice = (data) => {
	if (filterPrice.value === 'any') {
		return data;
	}

	if (filterPrice.value === 'middle') {
		return data.filter((element) => {
			if (element.offer.price >= filterPriceLow && element.offer.price <= filterPriceHigh){
				return element;
			}
		})
	}

	if (filterPrice.value === 'low') {
		return data.filter((element) => {
			if (element.offer.price < filterPriceLow)  {
				return element;
			}
		})
	}

	if (filterPrice.value === 'high') {
		return data.filter((element) => {
			if (element.offer.price > filterPriceHigh)  {
				return element;
			}
		})
	}
};

// Функция проверки изминения количества комнат
const changeDataFilterRoom = (data) => {
	if (filterRoom.value === 'any') {
		return data;
	}

	return data.filter((element) => {
		if (element.offer.rooms === +filterRoom.value) {
			return element;
		}
	})
};

// Функция проверки изминения количества гостей
const changeDataFilterGuest = (data) => {
	if (filterGuest.value === 'any') {
		return data;
	}

	return data.filter((element) => {
		if (element.offer.guests === +filterGuest.value) {
			return element;
		}
	})
};

// Функция получения списка активных чекбоксов
const getCheckedCheckBoxes = () => {
	const checkboxesChecked = [];

	for (let i = 0; i < filterFeatureCheckbox.length; i++) {
		if (filterFeatureCheckbox[i].checked) {
			checkboxesChecked.push(filterFeatureCheckbox[i].value);
		}
	}

	return checkboxesChecked;
};

// Функция проверки присутсвия характеристики
const featureParse = (item, data) => {
	return data.filter((element) => {
		if ((element.offer.features || []).findIndex((it) => it === item) !== -1) {
			return element;
		}
	})
};

// Фунция проверки статуса характеристик
const changeDataFilterFeature = (data) => {
	const check = getCheckedCheckBoxes();

	if (check.length === 0) {
		return data;
	}

	let newData = JSON.parse(JSON.stringify(data));

	for (let item of check) {
		newData = featureParse(item, newData);
	}

	return newData;
};
// Функция формирования массива с учетом значения всех фильтров
const manageData = (data) => {

	mapFilters.addEventListener('change', () => {
		markerGroup.clearLayers();

		let transitData = JSON.parse(JSON.stringify(data));

		transitData = changeDataFilterType(transitData);
		transitData = changeDataFilterPrice(transitData);
		transitData = changeDataFilterRoom(transitData);
		transitData = changeDataFilterGuest(transitData);
		transitData = changeDataFilterFeature(transitData);

		createMap(transitData.slice(0, 10));
	});

	createMap(data.slice(0, 10));
};

export { mapFilters, manageData };
