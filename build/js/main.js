"use strict"

let amountAd = 10;
let ad = [];

const adTitle = [
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
const adOfferType = [
	'palace',
	'flat',
	'house',
	'bungalow',
	'hotel',
];
const adOffercheck = [
	'12:00',
	'13:00',
	'14:00',
];
const adOfferFeature = [
	'wifi',
	'dishwasher',
	'parking',
	'washer',
	'elevator',
	'conditioner',
];
const words = [
	'got',
	'ability',
	'shop',
	'recall',
	'fruit',
	'easy',
	'dirty',
	'giant',
	'shaking',
	'ground',
	'weather',
	'lesson',
	'almost',
	'square',
	'forward',
	'bend',
	'cold',
	'broken',
	'distant',
	'adjective',
];
const adOfferPhotos = [
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
	'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

getAdArray();
getAuthorAvatar();
getOfferTitle();
getOfferAddress();
getOfferPrice();
getOfferType();
getOfferRoom();
getOfferGuest();
getOfferCheckin();
getOfferCheckout();
getOfferFeatures();
getOfferDescription();
getOfferPhoto();
getLocationLat();
getLocationLng();


function getAdArray() {
	for (let i = 0; i < amountAd; i++) {
		ad.push({});
	}
}

function getAuthorAvatar() {
	let ribbonAvatar = getAmountArrayAvatar(amountAd);

	for (let i = 0; i < amountAd; i++) {
		let findAvatar = getRandomNumber(0, ribbonAvatar.length - 1);

		if (i === amountAd - 1) {
			findAvatar = 0;
		}

		ad[i].author = { avatar: `img/avatars/user${ribbonAvatar[findAvatar]}.png` }
		ribbonAvatar.splice(findAvatar, 1);
	}
}

function getOfferTitle() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer = { title: adTitle[getRandomNumber(0, adTitle.length - 1)] };
	}
}

function getOfferAddress() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.address = `${location.lat}, ${location.lng}`
	}
}

function getOfferPrice() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.price = getRandomNumber(1000, 1500);
	}
}

function getOfferType() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.type = adOfferType[getRandomNumber(0, adOfferType.length - 1)];
	}
}

function getOfferRoom() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.rooms = getRandomNumber(1, 5);
	}
}

function getOfferGuest() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.guests = getRandomNumber(2, 10);
	}
}

function getOfferCheckin() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.checkin = adOffercheck[getRandomNumber(0, adOffercheck.length - 1)];
	}
}

function getOfferCheckout() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.checkout = adOffercheck[getRandomNumber(0, adOffercheck.length - 1)];
	}
}

function getOfferFeatures() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.features = getAmountArrayFeatures(getRandomNumber(0, adOfferFeature.length - 1));
	}
}

function getOfferDescription() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.description = generateWords(10);
	}
}

function generateWords(length) {
	return [...Array(length)].map((_, i) => getRandomWord(true)).join(' ').trim() + '.';
}

function getRandomWord(firstLetterToUppercase) {
	const word = words[getRandomNumber(0, words.length - 1)];
	return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

function getOfferPhoto() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].offer.photos = getAmountArrayPhotos(getRandomNumber(1, adOfferPhotos.length));
	}
}

function getLocationLat() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].location = {lat: getRandomNumberPoint(35.6500, 35.70000, 5)};
	}
}

function getLocationLng() {
	for (let i = 0; i < amountAd; i++) {
		ad[i].location.lng = getRandomNumberPoint(139.70000, 139.80000, 5)
	}
}



console.log(ad);



function getAmountArrayAvatar(amount) {
	let amountArray = [];

	for (let i = 1; i <= amount; i++) {
		let jump = i;

		if (i < 10) {
			jump = '0' + i;
		}

		amountArray.push(jump);
	}
	return amountArray
}

function getAmountArrayFeatures(amount) {
	let clone = adOfferFeature.slice(0);
	let ammountArray = [];

	for (let i = 0; i < amount; i++) {
		let jump = getRandomNumber(0, clone.length - 1);
		ammountArray.push(clone[jump]);
		clone.splice(jump, 1);
	}

	return ammountArray;
}

function getAmountArrayPhotos(amount) {
	let ammountArray = [];

	for (let i = 0; i < amount; i++) {
		let type = adOfferPhotos[getRandomNumber(0, adOfferPhotos.length - 1)];
		ammountArray.push(type);
	}

	return ammountArray;
}

function getRandomNumber(min, max) {
	if (min < 0 || max < 0 || min >= max) {
		return NaN;
	}

	const finMin = Math.ceil(Math.min(min, max));
	const finMax = Math.floor(Math.max(min, max));

	return Math.floor(Math.random() * (finMax - finMin + 1)) + finMin;
}

function getRandomNumberPoint(min, max, point = 0) {
	if (min < 0 || max < 0) {
		return NaN;
	}

	const finMin = Math.min(min, max);
	const finMax = Math.max(min,max);

	let int = Math.random() * (finMax - finMin) + finMin;
	return Number(int.toFixed(point));
}

