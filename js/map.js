import { activateForm, formCoordinate } from './forms.js';
import { addAnnCard } from './ann-card.js';
import {mainIconSize, basicIconSize, mainLatRange, mainLngRange, dotRound, mainMapScale} from './data.js';

// Launching the leaflet library
const map = L.map('map-canvas').setView([mainLatRange, mainLngRange], mainMapScale);

// Map Layer Anchor
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Create label templates on the map
const mainIcon = L.icon({
	iconUrl: 'img/main-pin.svg',
	iconSize: [mainIconSize, mainIconSize],
});
const basicIcon = L.icon({
	iconUrl: 'img/pin.svg',
	iconSize: [basicIconSize, basicIconSize],
});

// Adding a main marker to the map
const mainMarker = L.marker([mainLatRange, mainLngRange], { icon: mainIcon, riseOnHover: true, draggable: true }).addTo(map);

// Adding a label layer to the map
const markerGroup = L.layerGroup().addTo(map);

// The function of adding labels to the map of related ads
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
