const messSuccess = document.querySelector('#success').content.querySelector('.success');
const projectBody = document.querySelector('body');
const messError = document.querySelector('#error').content.querySelector('.error');

// Функция открытия попапа успешной загрузки данных
const showMesConfirm = () => {
	const clone = messSuccess.cloneNode(true);

	// Событие удаления попапа по нажатия кнопки Esc
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && projectBody.lastChild.classList.contains('success')) {
			projectBody.lastChild.remove();
		}
	});

	// Событие удаления попапа по нажатию мышки на любом месте
	document.addEventListener('click', () => {
		if (projectBody.lastChild.classList.contains('success')) {
			// console.log(event.target.classList.contains('success'));
			projectBody.lastChild.remove();
		}
	});

	projectBody.append(clone);
};

// Функция открытия попапа сообщения о ошибки загрузки данных на сервер
const showMessError = () => {
	const clone = messError.cloneNode(true);
	const messErrorButton = clone.querySelector('.error__button');

	// Событие удаления попапа сообщения о ошибке через кнопку
	messErrorButton.addEventListener('click', () => {
		projectBody.lastChild.remove();
	});

	// Событие удаления попапа по нажатия кнопки Esc
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && projectBody.lastChild.classList.contains('error')) {
			projectBody.lastChild.remove();
		}
	});

	// Событие удаления попапа по нажатию мышки на любом месте
	document.addEventListener('click', () => {
		if (projectBody.lastChild.classList.contains('error')) {
			projectBody.lastChild.remove();
		}
	});

	projectBody.append(clone);
};

export { showMesConfirm, showMessError };
