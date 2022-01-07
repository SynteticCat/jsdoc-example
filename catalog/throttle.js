/**
 * [подробнее о trottling можно прочитать здесь]{@link https://learn.javascript.ru/task/throttle}
 * 
 * @function throttle
 * @param {function} f - любая функция
 * @param {number} ms - время, которое пройдёт, прежде чем фукнция сработает снова
 */
 function throttle(f, ms) {

  let isThrottled = false, savedArgs, savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    f.apply(this, arguments);
    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}