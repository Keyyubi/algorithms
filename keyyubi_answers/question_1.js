function steps(arr) {
	let step = 0;

	while (Math.max(...arr) !== Math.min(...arr)) {
		arr = arr.sort((a, b) => b - a);
		for (let i = 0; i < arr.length; i++) {
			if (arr[0] !== arr[i]) {
				arr[0] = arr[i];
				step++;
				break;
			}
		}
	}

	return step;
}

console.log(steps([4, 2, 3, 5, 1]));
