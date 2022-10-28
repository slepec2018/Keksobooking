function getRandomNumber(min, max) {
	if (min < 0 || max < 0 || min >= max) {
		return NaN;
	}

	const finMin = Math.ceil(Math.min(min, max));
	const finMax = Math.floor(Math.max(min, max));

	return Math.floor(Math.random() * (finMax - finMin + 1)) + finMin;
}

getRandomNumber(10, 100);

function getRandomNumberPoint(min, max, point = 0) {
	if (min < 0 || max < 0 || min >= max) {
		return NaN;
	}

	const finMin = Math.ceil(Math.min(min, max));
	const finMax = Math.floor(Math.max(min,max));

	let int = Math.random() * (finMax - finMin + 1) + finMin;
	return Number(int.toFixed(point));
}

getRandomNumberPoint(10, 10, 10);
