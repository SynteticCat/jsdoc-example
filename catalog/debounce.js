/**
 * [подробнее о debounce можно прочитать здесь]{@link https://www.freecodecamp.org/news/javascript-debounce-example/}
 * 
 * @function debounce
 * @param {function} f - любая функция
 * @param {number} ms - время, которое пройдёт, прежде чем функция сработает снова
 */
 function debounce(f, ms) {
	let isCooldown = false;

	return function() {
		if (isCooldown) {
			return;
		}

		f.apply(this, arguments);
		isCooldown = true;

		setTimeout(() => isCooldown = false, ms);
	};
}