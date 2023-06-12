const messSuccess = document.querySelector('#success').content.querySelector('.success');
const projectBody = document.querySelector('body');
const messError = document.querySelector('#error').content.querySelector('.error');

// Функция открытия попапа успешной загрузки данных
const showMesConfirm = () => {
	const clone = messSuccess.cloneNode(true);

	let popup = null;

	// Событие удаления попапа по нажатия кнопки Esc
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && popup.classList.contains('success')) {
			popup.remove();
		}
	});

	// Событие удаления попапа по нажатию мышки на любом месте
	document.addEventListener('click', () => {
		if (popup.classList.contains('success')) {
			// console.log(event.target.classList.contains('success'));
			popup.remove();
		}
	});

	projectBody.append(clone);

	popup = projectBody.lastChild;
};

// Функция открытия попапа сообщения о ошибки загрузки данных на сервер
const showMessError = () => {
	const clone = messError.cloneNode(true);
	const messErrorButton = clone.querySelector('.error__button');

	let popup = null;

	// Событие удаления попапа сообщения о ошибке через кнопку
	messErrorButton.addEventListener('click', () => {
		popup.remove();
	});

	// Событие удаления попапа по нажатия кнопки Esc
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && popup.classList.contains('error')) {
			popup.remove();
		}
	});

	// Событие удаления попапа по нажатию мышки на любом месте
	document.addEventListener('click', () => {
		if (popup.classList.contains('error')) {
			popup.remove();
		}
	});

	projectBody.append(clone);

	popup = projectBody.lastChild;
};

export { showMesConfirm, showMessError };
