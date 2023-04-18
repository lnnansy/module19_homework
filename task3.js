/* Задание 3.

Напишите функцию, которая создает пустой объект, но без прототипа.
*/

function objectWithoutPrototype() { //функция, которая создает пустой объект, но без прототипа
    const emptyObj = Object.create(null);
    console.log(emptyObj);

}
objectWithoutPrototype();