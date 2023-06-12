import { createMap, markerGroup } from './map.js';
import { filterPriceLow, filterPriceHigh } from './data.js'

const mapFilters = document.querySelector('.map__filters');
const filterType = mapFilters.querySelector('#housing-type');
const filterPrice = mapFilters.querySelector('#housing-price');
const filterRoom = mapFilters.querySelector('#housing-rooms');
const filterGuest = mapFilters.querySelector('#housing-guests');
const filterFeature = mapFilters.querySelector('#housing-features');
const filterFeatureCheckbox = filterFeature.querySelectorAll('.map__checkbox');

// The function of checking the change of apartment type
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

// Price change check function
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

// Function to check the change in the number of rooms
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

// Function to check the change in the number of guests
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

// Function to get a list of active checkboxes
const getCheckedCheckBoxes = () => {
	const checkboxesChecked = [];

	for (let i = 0; i < filterFeatureCheckbox.length; i++) {
		if (filterFeatureCheckbox[i].checked) {
			checkboxesChecked.push(filterFeatureCheckbox[i].value);
		}
	}

	return checkboxesChecked;
};

// Function to check the presence of a characteristic
const featureParse = (item, data) => {
	return data.filter((element) => {
		if ((element.offer.features || []).findIndex((it) => it === item) !== -1) {
			return element;
		}
	})
};

// Feature Status Check Function
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
// The function of forming an array, taking into account the value of all filters
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
