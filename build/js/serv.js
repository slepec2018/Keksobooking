import { showMesConfirm, showMessError } from './messages.js';
import { generatedAdverts, cleanForm } from './data.js';

// The function of collecting ad card data from the server
const takeData = () => {

	return fetch('https://raw.githubusercontent.com/slepec2018/Keksobooking/0ffc11169c1321d506d14aa36dad1d09044a0471/data.json')
		.then((response) => {
			if (response.status !== 200) {
				alert('Looks like there was a problem. Status Code: ' + response.status);
				// Emergency filling of the container with post mocks
				return generatedAdverts();
			}
			return response.json();
		})
		.catch((err) => {
			alert(err);
			// Emergency filling of the container with post mocks
			return generatedAdverts();
		});
};

// The function of sending data of a new ad uploaded by the user
const sendData = (formData) => {
	fetch('https://27.javascript.pages.academy/keksobooking', {
		method: 'POST',
		body: formData,
	})
		.then(({ ok }) => {
			if (ok) {
				showMesConfirm();
				cleanForm();
			} else {
				alert('Проблемки');
			}
		})
		.catch((err) => {
			alert(err);
			showMessError();
		});
};

export { takeData, sendData };
