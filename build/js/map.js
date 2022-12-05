import { activateForm, formCoordinate } from './forms.js';
import { addAnnCard } from './ann-card.js';
import {mainIconSize, basicIconSize, mainLatRange, mainLngRange, dotRound, mainMapScale} from './data.js';

// Запуск библиотеки leaflet
const map = L.map('map-canvas').setView([mainLatRange, mainLngRange], mainMapScale);

// Привязка слоя карты
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Создание шаблонов меток на карте
const mainIcon = L.icon({
	iconUrl: 'img/main-pin.svg',
	iconSize: [mainIconSize, mainIconSize],
});
const basicIcon = L.icon({
	iconUrl: 'img/pin.svg',
	iconSize: [basicIconSize, basicIconSize],
});

// Добавление основной метки на карту
const mainMarker = L.marker([mainLatRange, mainLngRange], { icon: mainIcon, riseOnHover: true, draggable: true }).addTo(map);

// Добавление слоя меток на карту
const markerGroup = L.layerGroup().addTo(map);

// Функция добавления меток на карту похожих обьявлений
const createMap = (dataAd) => {
	for (const item of dataAd) {
		const dataBaloon = addAnnCard(item);

		let marker = L.marker([item.location.lat, item.location.lng], { icon: basicIcon }).bindPopup(dataBaloon);

		marker.addTo(markerGroup)
	}

	formCoordinate.value = [mainLatRange, mainLngRange];

	mainMarker.on('drag', () => {
		let coord = mainMarker.getLatLng();

		formCoordinate.value = [coord.lat.toFixed(dotRound), coord.lng.toFixed(dotRound)];
	})

	map.on('load', activateForm());
};

export { createMap, markerGroup };
