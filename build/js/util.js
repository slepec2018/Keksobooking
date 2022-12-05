const WORDS = [
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

// Функция возрощающая случайное число из переданного диапозона включительно
const getRandomNumber = (min, max) => {
	if (min < 0 || max < 0 || min >= max) {
		return NaN;
	}

	const finMin = Math.ceil(Math.min(min, max));
	const finMax = Math.floor(Math.max(min, max));

	return Math.floor(Math.random() * (finMax - finMin + 1)) + finMin;
};

// Функция возращающая случайное число с плавающей точкой из переданного диапозона включительно
const getRandomNumberPoint = (min, max, point) => {
	if (min < 0 || max < 0) {
		return NaN;
	}

	const finMin = Math.min(min, max);
	const finMax = Math.max(min, max);

	let int = Math.random() * (finMax - finMin) + finMin;
	return Number(int.toFixed(point));
};

// Функция возрощающая случайную елемент заданного массива
const getRandomItemArr = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

// Функция возрощающая случайную часть заданного массива
const getRandomArrayPart = (arr) => {
	const a = getRandomNumber(0, arr.length - 1);
	let b = getRandomNumber(0, arr.length - 1);

	while (b === 0 || b === a) {
		b = getRandomNumber(0, arr.length - 1);
	}

	const lower = Math.min(a, b);
	const upper = Math.max(a, b);

	return arr.slice(lower, upper);
};

//Функция форматирования текста, первая буква первого слова становится заглавным
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Функция выбора рандомного слова  из задданого массива
const getRandomWord = () => {
	const word = getRandomItemArr(WORDS);
	return word;
};

// Функция создания предложения lorem
const generateWords = (length) => {
	return capitalize([...Array(length)].map(getRandomWord).join(' ') + '.');
};

// Функция форматиорования единичных цифр с добавкой 0 в начале
const getNumberWithLeadZero = (number) => number < 10 ? `0${number}` : number;

export {getRandomNumber, getRandomNumberPoint, getRandomItemArr, getRandomArrayPart, generateWords, getNumberWithLeadZero };
