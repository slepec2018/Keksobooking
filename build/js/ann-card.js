import { offerType } from './data.js';

const tempCard = document.querySelector('#card').content.querySelector('.popup');

const addAnnCard = (data) => {
	const clone = tempCard.cloneNode(true);
	const annCardFeatureTarg = clone.querySelector('.popup__features');
	const annCardFeatureArr = [];
	const annCardPhotoTarg = clone.querySelector('.popup__photos');
	const annCardPhotoArr = [];
	const {
		author: {
			avatar,
		},
		offer: {
			title,
			address,
			price,
			type,
			rooms,
			guests,
			features,
			description,
			photos,
		},
	} = data;

	clone.querySelector('.popup__avatar').setAttribute('src', avatar);
	clone.querySelector('.popup__title').textContent = title;
	clone.querySelector('.popup__text--address').textContent = address;
	clone.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
	clone.querySelector('.popup__type').textContent = offerType[type].title;
	clone.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;

	annCardFeatureTarg.innerHTML = '';
	if (features) {
		for (let item of features) {
			annCardFeatureArr.push(`<li class="popup__feature popup__feature--${item}"></li>`)
		}
	}

	annCardFeatureTarg.insertAdjacentHTML('afterbegin', annCardFeatureArr.join(''));

	clone.querySelector('.popup__description').textContent = description;

	annCardPhotoTarg.innerHTML = '';
	if (photos) {
		for (let item of photos) {
			annCardPhotoArr.push(`<img src="${item}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)
		}
	}

	annCardPhotoTarg.insertAdjacentHTML('afterbegin', annCardPhotoArr.join(''));

	return clone;
};

export { addAnnCard };


