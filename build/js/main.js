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


function randomNumberPoint(min, max, point) {
  if (min < 0 || max < 0) {
		return NaN;
	} else if (min >= max) {
		return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  let int = Math.random() * (max - min + 1) + min;
  return Number(int.toFixed(point));
}

console.log(randomNumberPoint(10, 20, 3));
