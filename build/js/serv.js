import { showMesConfirm, showMessError } from './messages.js';
import { generatedAdverts, cleanForm } from './data.js';

// Функция забора данных карточек объявлений с сервера
const takeData = () => {

	return fetch('https://27.javascript.pages.academy/keksobooking/data')
		.then((response) => {
			if (response.status !== 200) {
				alert('Looks like there was a problem. Status Code: ' + response.status);
				// Аварийное заполнение контейнера постами моками
				return generatedAdverts();
			}
			return response.json();
		})
		.catch((err) => {
			alert(err);
			// Аварийное заполнение контейнера постами моками
			return generatedAdverts();
		});
};

// Функция отправки данных нового объявления загруженного пользователем
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
