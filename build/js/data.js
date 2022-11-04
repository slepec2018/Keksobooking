import {getRandomNumber, getRandomNumberPoint, getRandomItemArr, getRandomArrayPart, generateWords, getNumberWithLeadZero } from './util.js';

const TITLES = [
	'Сдам 1-комнатную студию хозяин Радужный',
	'Голосеевский район метро Васильковская ЖК ПаркЛенд ParkLand',
	'Сдам 3к кв. в доме премиум-класса по ул. Старонаводницкой 6б',
	'ТОП ДНЯ! Сдам 1-к квартиру ЖК Липинка',
	'Аренда Стильной 3к-Квартиры в ЖК Бульвар Фонтанов. Саперное Поле Центр',
	'Сдаю квартиру 2-х комнатную в Киеве, смежные комнаты в Хрущевке',
	'Аренда дизайн рем 2000$ Царский Дом Крещатик',
	'Аренда стильной квартиры (150м2) в ЖК Новопечерские Липки',
	'Аренда 2к квартиры, пер. Лабораторный, ЖК Alter Ego, Печерск',
	'Сдам 1к Подольский р-н Виноградарь ул Свободы пр-т',
];
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow','hotel'];
const OFFER_CHECKS = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_PHOTOS = [
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const OFFERS_COUNT = 10;
const POINT_DECIMALS = 5;
const latRange = {
	MIN: 36.36,
	MAX: 35.7,
};
const lngRange = {
	MIN: 139.7,
	MAX: 139.8,
};
const priceRange = {
	MIN: 2000,
	MAX: 50000,
};
const roomsRange = {
	MIN: 1,
	MAX: 10,
};
const guestsRange = {
	MIN: 2,
	MAX: 20,
};

const advert = (index) => {
	const lat = getRandomNumberPoint(latRange.MIN, latRange.MAX, POINT_DECIMALS);
	const lng = getRandomNumberPoint(lngRange.MIN, lngRange.MAX, POINT_DECIMALS);

	return {
		author: {
			avatar: `img/avatars/user${getNumberWithLeadZero(index)}.png`,
		},
		offer: {
			title: getRandomItemArr(TITLES),
			address: `${lat}, ${lng}`,
			price: getRandomNumber(priceRange.MIN, priceRange.MAX),
			type: getRandomItemArr(OFFER_TYPES),
			rooms: getRandomNumber(roomsRange.MIN, roomsRange.MAX),
			guests: getRandomNumber(guestsRange.MIN, guestsRange.MAX),
			checkin: getRandomItemArr(OFFER_CHECKS),
			checkout: getRandomItemArr(OFFER_CHECKS),
			features: getRandomArrayPart(OFFER_FEATURES),
			description: generateWords(10),
			photos: getRandomArrayPart(OFFER_PHOTOS),
		},
		location: {
			lat,
			lng,
		},
	};
};

const generateAdverts = (length) => Array.from({ length }, (_el, i) => advert(i + 1));

console.log(generateAdverts(OFFERS_COUNT));
