const templateSimilarCards = document.querySelector('#card').content.querySelector('.popup');

console.log(templateSimilarCards);

const fillSimilarCards = (generatedData) => {
	let fragment = new DocumentFragment();

	for (const item of generatedData) {
		const { offer: { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos }, author: { avatar } } = item;
		let clone = templateSimilarCards.cloneNode(true);
		let popupPhotos = [];
		let popupFeatures = [];
		let typeClone = '';

		clone.querySelector('.popup__title').textContent = title;
		clone.querySelector('.popup__text--address').textContent = address;
		clone.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;

		switch (type) {
		case 'flat':
			typeClone = 'Квартира';
			break;
		case 'bungalow':
			typeClone = 'Бунгало';
			break;
		case 'house':
			typeClone = 'Дом';
			break;
		case 'palace':
			typeClone = 'Дворец';
			break;
		case 'hotel':
			typeClone = 'Отель';
			break;
		default:
			console.log('Ошибка по виду типа');
		}
		clone.querySelector('.popup__type').textContent = typeClone;

		clone.querySelector(
			'.popup__text--capacity'
		).textContent = `${rooms} комнаты для ${guests} гостей.`;
		clone.querySelector(
			'.popup__text--time'
		).textContent = `Заезд после ${checkin}, выезд до ${checkout}.`;

		for (let i = 0; i < features.length; i++) {
			let guide = '';

			switch (features[i]) {
			case 'wifi':
				guide = '<li class="popup__feature popup__feature--wifi"></li>';
				break;
			case 'dishwasher':
				guide = '<li class="popup__feature popup__feature--dishwasher"></li>';
				break;
			case 'parking':
				guide = '<li class="popup__feature popup__feature--parking"></li>';
				break;
			case 'washer':
				guide = '<li class="popup__feature popup__feature--washer"></li>';
				break;
			case 'elevator':
				guide = '<li class="popup__feature popup__feature--elevator"></li>';
				break;
			case 'conditioner':
				guide = '<li class="popup__feature popup__feature--conditioner"></li>';
				break;
			default:
				console.log('Ошибка по виду features');
			}

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

		if (
			title === null ||
			address === null ||
			checkin === null ||
			guests === null ||
			features.length === 0 ||
			description === null ||
			photos.length === 0 ||
			avatar === null
		) {
			console.log('Error');
		} else {
			fragment.append(clone);
		}
	}


	return fragment;
};

export { fillSimilarCards };
