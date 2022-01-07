/** @module User */

const defaultUserName = "НЛО";

/**
 * Приветствие пользователя
 * @param {string} name - Имя пользователя
 */
function sayHello(name) {
  alert("Привет " + name || defaultUserName);
}