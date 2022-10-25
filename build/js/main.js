function randomNumber(min, max) {
	if (min < 0 || max < 0) {
		return NaN;
	} else if (min >= max) {
		return NaN;
	}

	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber(10, 20);
