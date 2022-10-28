function getRandomNumber(min, max) {
	if (min < 0 || max < 0 || min >= max) {
		return NaN;
	}

	const finMin = Math.ceil(min);
	const finMax = Math.floor(max);

	return Math.floor(Math.random() * (finMax - finMin + 1)) + finMin;
}

getRandomNumber(10, 100);

function getRandomNumberPoint(min, max, point = 0) {
	if (min < 0 || max < 0 || min >= max) {
		return NaN;
	}

	const finMin = Math.ceil(min);
	const finMax = Math.floor(max);

	let int = Math.random() * (finMax - finMin + 1) + finMin;
	return Number(int.toFixed(point));
}

getRandomNumberPoint(10, 10, 10);
