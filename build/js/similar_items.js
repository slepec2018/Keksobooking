import { offerType } from './data.js';

const templateSimilarCards = document.querySelector('#card').content.querySelector('.popup');

// Функция наполнениями карточками товаров блока DOM
const fillSimilarCards = (generatedData) => {
	let fragment = new DocumentFragment();

	for (const item of generatedData) {
		const { offer: { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos }, author: { avatar } } = item;
		let clone = templateSimilarCards.cloneNode(true);
		let popupPhotos = [];
		let popupFeatures = [];

		let typeClone = offerType[type].title;

		clone.querySelector('.popup__title').textContent = title;
		clone.querySelector('.popup__text--address').textContent = address;
		clone.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
		clone.querySelector('.popup__type').textContent = typeClone;
		clone.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей.`;
		clone.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}.`;

		for (let i = 0; i < features.length; i++) {
			let guide = `<li class="popup__feature popup__feature--${features[i]}"></li>`;

			popupFeatures.push(guide);
		}
		clone.querySelector('.popup__features').innerHTML = '';
		clone.querySelector('.popup__features').insertAdjacentHTML('afterbegin', popupFeatures.join(''));

		clone.querySelector('.popup__description').textContent = description;

		for (let k = 0; k < photos.length; k++) {
			const guide = `<img src="${photos[k]}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;

			popupPhotos.push(guide);
		}
		clone.querySelector('.popup__photos').innerHTML = '';
		clone.querySelector('.popup__photos').insertAdjacentHTML('afterbegin', popupPhotos.join(''));

		clone.querySelector('.popup__avatar').setAttribute('src', avatar);

		fragment.append(clone);
	}

	return fragment;
};

export { fillSimilarCards };
