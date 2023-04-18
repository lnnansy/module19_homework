/* Задание 1.

Напишите функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения 
только собственных свойств. 
Данная функция не должна возвращать значение.
*/

const sampleObject1 = {   //создание объектов для примера
    value: "juice",
}
const sampleObject2 = Object.create(sampleObject1);
sampleObject2.color = "red";
sampleObject2.taste="sweet";

// функция, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
function objOwnProperty(sampleObject) {
    for (let key in sampleObject) {

        if (sampleObject.hasOwnProperty(key)) {
    
            console.log(`Собственный ключ объекта: ${key}, значение ключа собственного свойства: ${sampleObject[key]}`); 
        
        }   
    }
}
objOwnProperty(sampleObject2);