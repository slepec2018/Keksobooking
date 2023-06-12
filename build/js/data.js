import {
	getRandomNumber,
	getRandomNumberPoint,
	getRandomItemArr,
	getRandomArrayPart,
	generateWords,
	getNumberWithLeadZero
} from './util.js';

const TITLES = [
	'Rent 1-room studio owner Raduzhny',
	'Goloseevsky district metro station Vasilkovskaya Residential complex ParkLand ParkLand',
	'Rent 3k sq. in a premium house on the street. Staronavodnitskaya 6b',
	'TOP OF THE DAY! Rent 1-room apartment ZhK Lipinka',
	'Rent Stylish 3-room apartment in the residential complex Boulevard Fountains. Sapper Field Center',
	'I rent a 2-room apartment in Kyiv, adjoining rooms in Khrushchev',
	'Rent design rem 2000$ Royal House Khreshchatyk',
	'Rent a stylish apartment (150m2) in Novopecherskie Lipki residential complex',
	'Rent 2k apartment, per. Laboratory, LCD Alter Ego, Pechersk',
	'Rent 1k Podolsky district Vynohradar st Svobody avenue',
];
const OFFER_CHECKS = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_PHOTOS = [
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const OFFERS_COUNT = 10;
const POINT_DECIMALS = 5;
const AMOUNT_WORD = 10;
const LatRange = {
	MIN: 35.4712,
	MAX: 35.8712,
};
const LngRange = {
	MIN: 139.4576,
	MAX: 139.9576,
};
const PriceRange = {
	MIN: 2000,
	MAX: 50000,
};
const RoomsRange = {
	MIN: 1,
	MAX: 10,
};
const GuestsRange = {
	MIN: 2,
	MAX: 20,
};
const offerType = {
	palace: {
		title: 'Castle',
		min: 10000,
	},
	flat: {
		title: 'Apartment',
		min: 1000,
	},
	house: {
		title: 'House',
		min: 5000,
	},
	bungalow: {
		title: 'Bungalow',
		min: 0,
	},
	hotel: {
		title: 'Hotel',
		min: 3000,
	},
};
const mainIconSize = 52;
const basicIconSize = 40;
const mainLatRange = 35.67012;
const mainLngRange = 139.7576;
const dotRound = 5;
const mainMapScale = 14;
const filterPriceLow = 10000;
const filterPriceHigh = 50000;

const formInputs = document.querySelectorAll('input');

// Single ad creation function
const getAdvert = (index) => {
	const lat = getRandomNumberPoint(LatRange.MIN, LatRange.MAX, POINT_DECIMALS);
	const lng = getRandomNumberPoint(LngRange.MIN, LngRange.MAX, POINT_DECIMALS);

	return {
		author: {
			avatar: `img/avatars/user${getNumberWithLeadZero(index)}.png`,
		},
		offer: {
			title: getRandomItemArr(TITLES),
			address: `${lat}, ${lng}`,
			price: getRandomNumber(PriceRange.MIN, PriceRange.MAX),
			type: getRandomItemArr(Object.keys(offerType)),
			rooms: getRandomNumber(RoomsRange.MIN, RoomsRange.MAX),
			guests: getRandomNumber(GuestsRange.MIN, GuestsRange.MAX),
			checkin: getRandomItemArr(OFFER_CHECKS),
			checkout: getRandomItemArr(OFFER_CHECKS),
			features: getRandomArrayPart(OFFER_FEATURES),
			description: generateWords(AMOUNT_WORD),
			photos: getRandomArrayPart(OFFER_PHOTOS),
		},
		location: {
			lat,
			lng: lng,
		},
	};
};

// declaration array generation function
const generatedAdverts = (length = OFFERS_COUNT) => Array.from({ length }, (_el, i) => getAdvert(i + 1));

// Function to clear all form fields
const cleanForm = () => {
	for (let element of formInputs) {
		element.value = '';
	}
	document.querySelector('.ad-form__photo').innerHTML = ''
	document.querySelector('.ad-form-header__preview img').src = 'img/muffin-grey.svg';
	document.querySelector('.ad-form__element textarea').value = '';

	document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
};


export { generatedAdverts, offerType, mainIconSize, basicIconSize, mainLatRange, mainLngRange, dotRound, mainMapScale, filterPriceLow, filterPriceHigh, formInputs, cleanForm };
