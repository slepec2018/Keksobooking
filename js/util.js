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

// Function that returns a random number from the passed range inclusive
const getRandomNumber = (min, max) => {
	if (min < 0 || max < 0 || min >= max) {
		return NaN;
	}

	const finMin = Math.ceil(Math.min(min, max));
	const finMax = Math.floor(Math.max(min, max));

	return Math.floor(Math.random() * (finMax - finMin + 1)) + finMin;
};

// A function that returns a random floating point number from the given range inclusive
const getRandomNumberPoint = (min, max, point) => {
	if (min < 0 || max < 0) {
		return NaN;
	}

	const finMin = Math.min(min, max);
	const finMax = Math.max(min, max);

	let int = Math.random() * (finMax - finMin) + finMin;
	return Number(int.toFixed(point));
};

// A function that returns a random element of a given array
const getRandomItemArr = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

// A function that returns a random part of a given array
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

//Text formatting function, the first letter of the first word is capitalized
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// The function of choosing a random word from a given array
const getRandomWord = () => {
	const word = getRandomItemArr(WORDS);
	return word;
};

// lorem sentence creation function
const generateWords = (length) => {
	return capitalize([...Array(length)].map(getRandomWord).join(' ') + '.');
};

// Function for formatting single digits with a leading 0 added
const getNumberWithLeadZero = (number) => number < 10 ? `0${number}` : number;

export {getRandomNumber, getRandomNumberPoint, getRandomItemArr, getRandomArrayPart, generateWords, getNumberWithLeadZero };
