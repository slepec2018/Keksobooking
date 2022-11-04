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

const getRandomNumber = (min, max) => {
	if (min < 0 || max < 0 || min >= max) {
		return NaN;
	}

	const finMin = Math.ceil(Math.min(min, max));
	const finMax = Math.floor(Math.max(min, max));

	return Math.floor(Math.random() * (finMax - finMin + 1)) + finMin;
};

const getRandomNumberPoint = (min, max, point) => {
	if (min < 0 || max < 0) {
		return NaN;
	}

	const finMin = Math.min(min, max);
	const finMax = Math.max(min, max);

	let int = Math.random() * (finMax - finMin) + finMin;
	return Number(int.toFixed(point));
};

const getRandomItemArr = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomArrayPart = (arr) => {
	const a = getRandomNumber(0, arr.length - 1);
	const b = getRandomNumber(0, arr.length - 1);

	const lower = Math.min(a, b);
	const upper = Math.max(a, b);

	return arr.slice(lower, upper);
};

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getRandomWord = () => {
	const word = getRandomItemArr(WORDS);
	return word;
};

const generateWords = (length) => {
	return capitalize([...Array(length)].map(getRandomWord).join(' ') + '.');
};

const getNumberWithLeadZero = (number) => number < 10 ? `0${number}` : number;


export {getRandomNumber, getRandomNumberPoint, getRandomItemArr, getRandomArrayPart, generateWords, getNumberWithLeadZero };
